import { Doctype } from '@ceramicnetwork/ceramic-common'

import { DoctypeProxy } from './doctypes'
import { IDX } from './index'
import { DocID } from './types'

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

  async index(): Promise<T> {
    const doc = await this._proxy.get()
    return doc.content as T
  }

  abstract async count(): Promise<number>

  abstract iterator<U>(): AsyncIterableIterator<U>
}

export class ListCollection<T extends Array<DocID> = Array<DocID>> extends Collection<T> {
  async count(): Promise<number> {
    const refs = await this.index()
    return refs.length
  }

  iterator<U>(): AsyncIterableIterator<U> {
    let refs: T
    let cursor = 0

    return {
      [Symbol.asyncIterator]() {
        return this
      },
      next: async (): Promise<IteratorResult<U>> => {
        if (refs == null) {
          refs = await this.index()
        }
        if (cursor === refs.length) {
          return { done: true, value: null }
        }
        return { done: false, value: (await this._getContent(refs[cursor++])) as U }
      }
    }
  }

  async at<U = unknown>(index: number): Promise<U | null> {
    const refs = await this.index()
    const docId = refs[index < 0 ? refs.length + index : index]
    return await this._getContent(docId)
  }
}

export class WritableListCollection<T extends Array<DocID> = Array<DocID>> extends ListCollection<
  T
> {
  async add(docId: DocID): Promise<void> {
    await this._proxy.changeContent<T>(content => [...content, docId] as T)
  }

  async remove(docId: DocID): Promise<void> {
    await this._proxy.changeContent<T>(content => {
      const index = content.indexOf(docId)
      if (index !== -1) {
        content.splice(index, 1)
      }
      return content
    })
  }
}

export class MapCollection<
  T extends Record<string, DocID> = Record<string, DocID>
> extends Collection<T> {
  async count(): Promise<number> {
    const refs = await this.index()
    return Object.keys(refs).length
  }

  iterator<U>(): AsyncIterableIterator<U> {
    let refs: T
    let keys: Array<string>
    let cursor = 0

    return {
      [Symbol.asyncIterator]() {
        return this
      },
      next: async (): Promise<IteratorResult<U>> => {
        if (refs == null) {
          refs = await this.index()
          keys = Object.keys(refs)
        }
        if (cursor === keys.length) {
          return { done: true, value: null }
        }
        const key = keys[cursor++]
        const content = await this._getContent(refs[key])
        return { done: false, value: ([key, content] as unknown) as U }
      }
    }
  }

  async get<U = unknown>(key: string): Promise<U | null> {
    const refs = await this.index()
    return await this._getContent(refs[key])
  }
}

export class WritableMapCollection<
  T extends Record<string, DocID> = Record<string, DocID>
> extends MapCollection<T> {
  async set(key: string, docId: DocID): Promise<void> {
    await this._proxy.changeContent<T>(content => ({ ...content, [key]: docId }))
  }

  async remove(key: string): Promise<void> {
    await this._proxy.changeContent<T>(({ [key]: _remove, ...content }) => content as T)
  }
}
