import { DIDDocument } from 'did-resolver'

export function createNonce(): string {
  return Math.random()
    .toString(36)
    .slice(2)
}

export function getIDXRoot(doc: DIDDocument): string | undefined {
  const service = (doc.service ?? []).find(s => s.type === 'IdentityIndexRoot')
  return service?.serviceEndpoint
}
