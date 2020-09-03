import ThreeIDResolver from '@ceramicnetwork/3id-did-resolver'
import { CeramicApi, Doctype, DocMetadata } from '@ceramicnetwork/ceramic-common'
import DataLoader from 'dataloader'
import { Resolver } from 'did-resolver'
import { DID, DIDProvider, ResolverOptions } from 'dids'

import {
  ListCollection,
  MapCollection,
  WritableListCollection,
  WritableMapCollection
} from './collections'
import { DoctypeProxy } from './doctypes'
import { RootIndex } from './indexes'
import {
  CollectionType,
  Definition,
  DefinitionConfig,
  DefinitionsAliases,
  DocID,
  ListDefinitionConfig,
  MapDefinitionConfig,
  SchemasAliases
} from './types'
import { createNonce, defer } from './utils'

export * from './types'

export interface AuthenticateOptions {
  paths?: Array<string>
  provider?: DIDProvider
}

export interface IDXOptions {
  ceramic: CeramicApi
  definitions?: DefinitionsAliases
  resolver?: ResolverOptions
  schemas: SchemasAliases
}

export class IDX {
  _ceramic: CeramicApi
  _collectionsEntries: Record<DocID, Promise<DocID>> = {}
  _collectionProxies: Record<DocID, DoctypeProxy> = {}
  _definitions: DefinitionsAliases
  _docLoader: DataLoader<string, Doctype>
  _resolver: Resolver
  _rootIndex: RootIndex
  _schemas: SchemasAliases

  constructor({ ceramic, definitions = {}, resolver = {}, schemas }: IDXOptions) {
    this._ceramic = ceramic
    this._definitions = definitions
    this._schemas = schemas

    this._docLoader = new DataLoader(async (docIds: ReadonlyArray<string>) => {
      return await Promise.all(docIds.map(async docId => await this._ceramic.loadDocument(docId)))
    })

    const ceramicResolver = ThreeIDResolver.getResolver(ceramic)
    const registry = resolver.registry
      ? { ...resolver.registry, ...ceramicResolver }
      : ceramicResolver
    this._resolver = new Resolver(registry, resolver.cache)

    this._rootIndex = new RootIndex(this)
  }

  get authenticated(): boolean {
    return this._ceramic.did != null
  }

  get ceramic(): CeramicApi {
    return this._ceramic
  }

  get resolver(): Resolver {
    return this._resolver
  }

  get did(): DID {
    if (this._ceramic.did == null) {
      throw new Error('Ceramic instance is not authenticated')
    }
    return this._ceramic.did
  }

  get id(): string {
    return this.did.id
  }

  async authenticate(options: AuthenticateOptions = {}): Promise<void> {
    if (this._ceramic.did == null) {
      if (options.provider == null) {
        throw new Error('Not provider available')
      } else {
        await this._ceramic.setDIDProvider(options.provider)
      }
    }
  }

  // Ceramic APIs wrappers

  async createDocument(content: unknown, meta: Partial<DocMetadata> = {}): Promise<Doctype> {
    return await this._ceramic.createDocument('tile', {
      content,
      metadata: { owners: [this.id], ...meta }
    })
  }

  async loadDocument(id: DocID): Promise<Doctype> {
    return await this._docLoader.load(id)
  }

  // High-level APIs

  async has(name: string, did?: string): Promise<boolean> {
    const id = this._toDefinitionId(name)
    const docId = await this.getEntryId(id, did)
    return docId != null
  }

  async get<T = unknown>(name: string, did?: string): Promise<T | null> {
    const id = this._toDefinitionId(name)
    return await this.getEntry(id, did)
  }

  async set(name: string, content: unknown): Promise<DocID> {
    const id = this._toDefinitionId(name)
    return await this.setEntry(id, content)
  }

  async remove(name: string): Promise<void> {
    const id = this._toDefinitionId(name)
    await this.removeEntry(id)
  }

  async useCollection(name: string): Promise<void> {
    const id = this._toDefinitionId(name)
    await this.useCollectionEntry(id)
  }

  async useCollections(names: Array<string>): Promise<void> {
    await Promise.all(names.map(async name => await this.useCollection(name)))
  }

  list(name: string, did: string): ListCollection
  list(name: string, did?: string): WritableListCollection
  list(name: string, did?: string): ListCollection | WritableListCollection {
    const id = this._toDefinitionId(name)
    return this.getCollection('list', id, did)
  }

  map(name: string, did: string): MapCollection
  map(name: string, did?: string): WritableMapCollection
  map(name: string, did?: string): MapCollection | WritableMapCollection {
    const id = this._toDefinitionId(name)
    return this.getCollection('map', id, did)
  }

  _toDefinitionId(name: string): DocID {
    const id = this._definitions[name] ?? this._definitions[`idx:${name}`]
    if (id == null) {
      throw new Error(`Invalid name: ${name}`)
    }
    return id
  }

  // Definition APIs

  async createDefinition(definition: Definition): Promise<DocID> {
    const doctype = await this.createDocument(definition, { schema: this._schemas.Definition })
    if (definition.config?.collections != null) {
      await this._addToCollections(doctype.id, definition.config.collections)
    }
    return doctype.id
  }

  async getDefinition<T = DefinitionConfig>(id: DocID): Promise<Definition<T>> {
    const doc = await this.loadDocument(id)
    if (doc.metadata.schema !== this._schemas.Definition) {
      throw new Error('Invalid definition')
    }
    return doc.content as Definition<T>
  }

  // Entry APIs

  async getEntryId(definitionId: DocID, did?: string): Promise<DocID | null> {
    return await this._rootIndex.get(definitionId, did ?? this.id)
  }

  async getEntry<T = unknown>(definitionId: DocID, did?: string): Promise<T | null> {
    const docId = await this.getEntryId(definitionId, did)
    if (docId == null) {
      return null
    } else {
      const doc = await this.loadDocument(docId)
      return doc.content as T
    }
  }

  async setEntry(definitionId: DocID, content: unknown): Promise<DocID> {
    const existingId = await this.getEntryId(definitionId, this.id)
    if (existingId == null) {
      const definition = await this.getDefinition(definitionId)
      const docId = await this._createEntry(definition, content)
      await this._setEntryId(definitionId, docId)
      return docId
    } else {
      const doc = await this.loadDocument(existingId)
      await doc.change({ content })
      return doc.id
    }
  }

  async addEntry<T = DefinitionConfig>(
    definition: Definition<T>,
    content: unknown
  ): Promise<DocID> {
    const [definitionId, docId] = await Promise.all([
      this.createDefinition(definition),
      this._createEntry(definition, content)
    ])
    await this._setEntryId(definitionId, docId)
    return definitionId
  }

  async removeEntry(definitionId: DocID): Promise<void> {
    const definition = await this.getDefinition(definitionId)
    if (definition.config?.collections != null) {
      const docId = await this.getEntryId(definitionId)
      if (docId != null) {
        await this._removeFromCollections(docId, definition.config.collections)
      }
    }
    await this._rootIndex.remove(definitionId)
  }

  async useCollectionEntry(definitionId: DocID): Promise<void> {
    if (this._collectionsEntries[definitionId] == null) {
      const deferred = defer<DocID>()
      this._collectionsEntries[definitionId] = deferred

      try {
        const definition = await this.getDefinition(definitionId)

        const collection = definition.config?.collection
        if (collection == null) {
          throw new Error('Invalid collection configuration')
        }

        const collections = definition.config?.collections
        if (collections != null) {
          await Promise.all(
            Object.keys(collections).map(async id => await this.useCollectionEntry(id))
          )
        }

        const docId = await this.addEntry(definition, {
          ...collection.initialContent,
          _nonce: createNonce()
        })
        deferred.resolve(docId)
      } catch (err) {
        deferred.reject(err)
      }
    }

    await this._collectionsEntries[definitionId]
  }

  async _createEntry(definition: Definition, content: unknown): Promise<DocID> {
    const doctype = await this.createDocument(content, { schema: definition.schema })
    if (definition.config?.collections != null) {
      await this._addToCollections(doctype.id, definition.config.collections)
    }
    return doctype.id
  }

  async _setEntryId(definitionId: DocID, collectionId: DocID): Promise<void> {
    await this._rootIndex.set(definitionId, collectionId)
  }

  // Collections

  getCollection(type: 'list', definitionId: DocID, did: string): ListCollection
  getCollection(type: 'list', definitionId: DocID, did?: string): WritableListCollection
  getCollection(type: 'map', definitionId: DocID, did: string): MapCollection
  getCollection(type: 'map', definitionId: DocID, did?: string): WritableMapCollection
  getCollection(
    type: CollectionType,
    definitionId: DocID,
    did?: string
  ): ListCollection | WritableListCollection | MapCollection | WritableMapCollection {
    if (did == null) {
      const config = { idx: this, proxy: this._getCollectionProxy(definitionId) }
      return type === 'list'
        ? new WritableListCollection(config)
        : new WritableMapCollection(config)
    }

    const getDocument = async () => {
      const docId = await this.getEntryId(definitionId, did)
      if (docId == null) {
        throw new Error('Collection not found')
      }
      return await this.loadDocument(docId)
    }
    const config = { idx: this, proxy: new DoctypeProxy(getDocument) }
    return type === 'list' ? new ListCollection(config) : new MapCollection(config)
  }

  async _addToCollections(
    docId: DocID,
    collections: Record<DocID, ListDefinitionConfig | MapDefinitionConfig>
  ): Promise<void> {
    const changes = Object.entries(collections).map(async ([defId, config]) => {
      await this._addToCollection(docId, defId, config)
    })
    await Promise.all(changes)
  }

  _getCollectionProxy(definitionId: DocID): DoctypeProxy {
    if (this._collectionProxies[definitionId] == null) {
      const getDocument = async () => {
        const docId = await this.getEntryId(definitionId)
        if (docId == null) {
          const definition = await this.getDefinition(definitionId)
          const content = definition.config?.collection?.initialContent ?? {}
          return await this.createDocument(
            { ...content, _nonce: createNonce() },
            { schema: definition.schema }
          )
        } else {
          return await this.loadDocument(docId)
        }
      }
      this._collectionProxies[definitionId] = new DoctypeProxy(getDocument)
    }
    return this._collectionProxies[definitionId]
  }

  async _addToCollection(
    docId: DocID,
    definitionId: DocID,
    config: ListDefinitionConfig | MapDefinitionConfig
  ): Promise<void> {
    const definition = await this.getDefinition(definitionId)
    const collection = definition.config?.collection
    if (collection == null) {
      throw new Error('Invalid collection configuration')
    }

    if (collection.type === 'list') {
      await this.getCollection('list', definitionId).add(docId)
    } else if (collection.type === 'map') {
      await this.getCollection('map', definitionId).set((config as MapDefinitionConfig).key, docId)
    } else {
      throw new Error('Unsupported collection')
    }
  }

  async _removeFromCollections(
    docId: DocID,
    collections: Record<DocID, ListDefinitionConfig | MapDefinitionConfig>
  ): Promise<void> {
    const changes = Object.entries(collections).map(async ([defId, config]) => {
      await this._addToCollection(docId, defId, config)
    })
    await Promise.all(changes)
  }

  async _removeFromCollection(
    definitionId: DocID,
    docId: DocID,
    config: true | MapDefinitionConfig
  ): Promise<void> {
    const definition = await this.getDefinition(definitionId)
    const collection = definition.config?.collection
    if (collection == null) {
      throw new Error('Invalid collection configuration')
    }

    if (collection.type === 'list') {
      await this.getCollection('list', definitionId).remove(docId)
    } else if (collection.type === 'map') {
      await this.getCollection('map', definitionId).remove((config as MapDefinitionConfig).key)
    } else {
      throw new Error('Unsupported collection')
    }
  }
}
