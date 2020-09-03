import { DIDDocument } from 'did-resolver'

export function createNonce(): string {
  return Math.random()
    .toString(36)
    .slice(2)
}

interface Deferred<T> extends Promise<T> {
  resolve: (value?: T | PromiseLike<T>) => void
  reject: (reason?: unknown) => void
}

export function defer<T>(): Deferred<T> {
  let methods = {}
  const promise = new Promise<T>((resolve, reject) => {
    methods = { resolve, reject }
  })
  return Object.assign(promise, methods) as Deferred<T>
}

export function getIDXRoot(doc: DIDDocument): string | undefined {
  const service = (doc.service ?? []).find(s => s.type === 'IdentityIndexRoot')
  return service?.serviceEndpoint
}
