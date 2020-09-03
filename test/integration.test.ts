/**
 * @jest-environment ceramic
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import { CeramicApi } from '@ceramicnetwork/ceramic-common'
import { schemasList, publishSchemas } from '@ceramicstudio/idx-schemas'

import { IDX } from '../src/index'

declare global {
  const ceramic: CeramicApi
}

describe('integration', () => {
  test('get and set a custom definition', async () => {
    const schemas = await publishSchemas({ ceramic, schemas: schemasList })
    const idx = new IDX({ ceramic, schemas })
    const definitions = {
      'test:profile': await idx.createDefinition({
        name: 'test profile',
        schema: schemas.BasicProfile
      })
    }

    const alice = new IDX({ ceramic, definitions, schemas })
    await alice.set('test:profile', { name: 'Alice' })

    const bob = new IDX({ ceramic, definitions, schemas })
    const doc = await bob.get<{ name: string }>('test:profile', alice.id)
    expect(doc).toEqual({ name: 'Alice' })
  })

  test('manual collection', async () => {
    const schemas = await publishSchemas({ ceramic, schemas: schemasList })
    const idx = new IDX({ ceramic, schemas })

    const [profiles, basicProfile, workProfile] = await Promise.all([
      idx.createDefinition({ name: 'profiles map', schema: schemas.MapCollection }),
      idx.createDefinition({ name: 'basic profile', schema: schemas.BasicProfile }),
      idx.createDefinition({ name: 'work profile', schema: schemas.BasicProfile })
    ])
    const definitions = { profiles, basicProfile, workProfile }

    const alice = new IDX({ ceramic, definitions, schemas })
    const [basicId, workId] = await Promise.all([
      alice.set('basicProfile', { name: 'Alice' }),
      alice.set('workProfile', { name: 'Alice Smith' }),
      alice.set('profiles', {})
    ])

    const writeMap = alice.map('profiles')
    await Promise.all([writeMap.set('basic', basicId), writeMap.set('work', workId)])

    const bob = new IDX({ ceramic, definitions, schemas })
    await expect(bob.map('profiles', alice.id).get('basic')).resolves.toEqual({ name: 'Alice' })
  })

  test('automatic collections', async () => {
    const schemas = await publishSchemas({
      ceramic,
      schemas: schemasList
    })
    const idx = new IDX({ ceramic, schemas })

    const collectionsListId = await idx.createDefinition({
      name: 'collections collection',
      schema: schemas.ListCollection,
      config: {
        collection: {
          type: 'list',
          initialContent: { list: [] }
        }
      }
    })
    const [profilesMap, workList] = await Promise.all([
      idx.createDefinition({
        name: 'profiles map',
        schema: schemas.MapCollection,
        config: {
          collection: {
            type: 'map',
            initialContent: { map: {} }
          },
          collections: { [collectionsListId]: {} }
        }
      }),
      idx.createDefinition({
        name: 'work list',
        schema: schemas.ListCollection,
        config: {
          collection: {
            type: 'list',
            initialContent: { list: [] }
          },
          collections: { [collectionsListId]: {} }
        }
      })
    ])
    const [basicProfile, workProfile] = await Promise.all([
      idx.createDefinition({
        name: 'basic profile',
        schema: schemas.BasicProfile,
        config: {
          collections: {
            [profilesMap]: { key: 'basic' }
          }
        }
      }),
      idx.createDefinition({
        name: 'work profile',
        schema: schemas.BasicProfile,
        config: {
          collections: {
            [profilesMap]: { key: 'work' },
            [workList]: {}
          }
        }
      })
    ])
    const definitions = {
      profiles: profilesMap,
      work: workList,
      basicProfile,
      workProfile
    }
    // console.log('definitions', definitions)

    const alice = new IDX({
      ceramic,
      definitions,
      schemas
    })
    await alice.useCollections(['profiles', 'work'])
    await Promise.all([
      alice.set('basicProfile', { name: 'Alice' }),
      alice.set('workProfile', {
        name: 'Alice Smith'
      })
    ])

    // Work profile has been added to the collection
    await expect(alice.list('work').at(0)).resolves.toEqual({ name: 'Alice Smith' })

    // console.log('index', await alice._rootIndex.getIndex(alice.id))

    // const collectionsList = alice.getCollection('list', collectionsListId)

    // TODO: why are the profilesMap and workList contents added here?
    // Should only be references to the collections themselves
    // console.log('collections', collectionsListId, await collectionsList.content())
    // for await (const collection of collectionsList.iterator()) {
    //   console.log('collection', collection)
    // }
    // await expect(collectionsList.content()).resolves.toEqual({
    //   list: [profilesMap, workList]
    // })

    const bob = new IDX({
      ceramic,
      definitions,
      schemas
    })
    const aliceProfiles = bob.map('profiles', alice.id)

    const readMap = {}
    for await (const [key, profile] of aliceProfiles.iterator<[string, any]>()) {
      readMap[key] = profile
    }
    expect(readMap).toEqual({
      basic: { name: 'Alice' },
      work: { name: 'Alice Smith' }
    })
  })
})
