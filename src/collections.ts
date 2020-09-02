import { Doctype } from '@ceramicnetwork/ceramic-common'

import { DoctypeProxy } from './doctypes'
import { IDX } from './index'
import { DocID, ListContent, MapContent } from './types'

export interface CollectionOptions {
  idx: IDX
  getDocument: () => Promise<Doctype>
}

export abstract class Collection<T = unknown> {
  _idx: IDX
  _proxy: DoctypeProxy

  constructor({ idx, getDocument }: CollectionOptions) {
    this._idx = idx
    this._proxy = new DoctypeProxy(getDocument)
  }

  async _getContent<U>(docId: string | null): Promise<U | null> {
    if (docId == null) {
      return null
    }
    const doc = await this._idx.loadDocument(docId)
    return doc.content as U
  }

  async content(): Promise<T> {
    const doc = await this._proxy.get()
    return doc.content as T
  }

  abstract async count(): Promise<number>

  abstract iterator<U>(): AsyncIterableIterator<U>
}

export class ListCollection extends Collection<ListContent> {
  async count(): Promise<number> {
    const { list } = await this.content()
    return list.length
  }

  iterator<U>(): AsyncIterableIterator<U> {
    let list: Array<DocID>
    let cursor = 0

    return {
      [Symbol.asyncIterator]() {
        return this
      },
      next: async (): Promise<IteratorResult<U>> => {
        if (list == null) {
          list = (await this.content()).list
        }
        if (cursor === list.length) {
          return { done: true, value: null }
        }
        return { done: false, value: (await this._getContent(list[cursor++])) as U }
      }
    }
  }

  async at<U = unknown>(index: number): Promise<U | null> {
    const { list } = await this.content()
    const docId = list[index < 0 ? list.length + index : index]
    return await this._getContent(docId)
  }
}

export class WritableListCollection extends ListCollection {
  async add(docId: DocID): Promise<void> {
    await this._proxy.changeContent<ListContent>(({ list }) => ({ list: [...list, docId] }))
  }

  async remove(docId: DocID): Promise<void> {
    await this._proxy.changeContent<ListContent>(({ list }) => {
      const index = list.indexOf(docId)
      if (index !== -1) {
        list.splice(index, 1)
      }
      return { list }
    })
  }
}

export class MapCollection extends Collection<MapContent> {
  async count(): Promise<number> {
    const { map } = await this.content()
    return Object.keys(map).length
  }

  iterator<U>(): AsyncIterableIterator<U> {
    let map: Record<string, DocID>
    let keys: Array<string>
    let cursor = 0

    return {
      [Symbol.asyncIterator]() {
        return this
      },
      next: async (): Promise<IteratorResult<U>> => {
        if (map == null) {
          map = (await this.content()).map
          keys = Object.keys(map)
        }
        if (cursor === keys.length) {
          return { done: true, value: null }
        }
        const key = keys[cursor++]
        const content = await this._getContent(map[key])
        return { done: false, value: ([key, content] as unknown) as U }
      }
    }
  }

  async get<U = unknown>(key: string): Promise<U | null> {
    const { map } = await this.content()
    return await this._getContent(map[key])
  }
}

export class WritableMapCollection extends MapCollection {
  async set(key: string, docId: DocID): Promise<void> {
    await this._proxy.changeContent<MapContent>(({ map }) => ({ map: { ...map, [key]: docId } }))
  }

  async remove(key: string): Promise<void> {
    await this._proxy.changeContent<MapContent>(({ map: { [key]: _remove, ...map } }) => ({ map }))
  }
}
