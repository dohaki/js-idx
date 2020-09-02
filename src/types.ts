export type DocID = string

export type CollectionType = 'list' | 'map'

export type ListContent = { list: Array<DocID> }

export type MapContent = { map: Record<string, DocID> }

export interface ListCollectionConfig {
  type: 'list'
  initialContent: ListContent
}

export interface MapCollectionConfig {
  type: 'map'
  initialContent: MapContent
}

export interface CollectionDefinitionConfig {
  collection?: ListCollectionConfig | MapCollectionConfig
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListDefinitionConfig {}

export interface MapDefinitionConfig {
  key: string
}

export interface CollectionsDefinitionConfig {
  collections?: Record<DocID, ListDefinitionConfig | MapDefinitionConfig>
}

export interface DefinitionConfig extends CollectionDefinitionConfig, CollectionsDefinitionConfig {}

export interface Definition<T = DefinitionConfig> {
  name: string
  schema: DocID
  description?: string
  url?: string
  config?: T
}

export type DefinitionsAliases = Record<string, DocID>

export type SchemaType =
  | 'BasicProfile'
  | 'Definition'
  | 'DocIdDocIdMap'
  | 'DocIdList'
  | 'DocIdMap'
  | 'StringMap'
export type SchemasAliases = Record<SchemaType, DocID>
