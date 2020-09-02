/**
 * @jest-environment ceramic
 */

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
      idx.createDefinition({ name: 'profiles map', schema: schemas.DocIdMap }),
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
    const aliceProfiles = bob.map('profiles', alice.id)

    const readMap = {}
    for await (const [key, profile] of aliceProfiles.iterator()) {
      readMap[key] = profile
    }

    expect(readMap).toEqual({
      basic: { name: 'Alice' },
      work: { name: 'Alice Smith' }
    })
  })

  test('automatic collection', async () => {
    const schemas = await publishSchemas({ ceramic, schemas: schemasList })
    const idx = new IDX({ ceramic, schemas })

    const profiles = await idx.createDefinition({
      name: 'profiles map',
      schema: schemas.DocIdMap,
      config: {
        collection: { type: 'map', initialContent: {} }
      }
    })
    const [basicProfile, workProfile] = await Promise.all([
      idx.createDefinition({
        name: 'basic profile',
        schema: schemas.BasicProfile,
        config: {
          collections: { [profiles]: { key: 'basic' } }
        }
      }),
      idx.createDefinition({
        name: 'work profile',
        schema: schemas.BasicProfile,
        config: {
          collections: { [profiles]: { key: 'work' } }
        }
      })
    ])
    const definitions = { profiles, basicProfile, workProfile }

    const alice = new IDX({ ceramic, definitions, schemas })
    await alice.useCollection('profiles')
    await Promise.all([
      alice.set('basicProfile', { name: 'Alice' }),
      alice.set('workProfile', { name: 'Alice Smith' })
    ])

    const bob = new IDX({ ceramic, definitions, schemas })
    const aliceProfiles = bob.map('profiles', alice.id)

    const readMap = {}
    for await (const [key, profile] of aliceProfiles.iterator()) {
      readMap[key] = profile
    }

    expect(readMap).toEqual({
      basic: { name: 'Alice' },
      work: { name: 'Alice Smith' }
    })
  })
})
