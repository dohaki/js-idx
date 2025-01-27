---
title: IDX library
---

## Installation

```sh
npm install @ceramicstudio/idx
```

## IDX class

### constructor

**Arguments**

1. [`options: IDXOptions`](libs-types.md#idxoptions)

**Returns** `Promise<void>`

### .authenticated

**Returns** `boolean`

### .ceramic

**Returns** [`CeramicApi`](libs-types.md#ceramicapi)

### .id

> Accessing this property will throw an error if the instance is not authenticated

**Returns** `string`

### .has

Returns whether an entry with the `name` alias, [`IndexKey`](libs-types.md#indexkey) or definition [`DocID string`](libs-types.md#docid) exists in the [Identity Index](idx-terminology.md#identity-index--idx) of the specified `did`

**Arguments**

1. `name: string`
1. `did?: string = this.id`

**Returns** `Promise<boolean>`

### .get

Returns the referenced content for the given `name` alias, [`IndexKey`](libs-types.md#indexkey) or definition [`DocID string`](libs-types.md#docid) of the specified `did`

**Arguments**

1. `name: string`
1. `did?: string = this.id`

**Returns** `Promise<unknown>`

### .set

Sets the content for the given `name` alias, [`IndexKey`](libs-types.md#indexkey) or definition [`DocID string`](libs-types.md#docid) in the [Identity Index](idx-terminology.md#identity-index--idx) of the authenticated [DID](idx-terminology.md#did)

> The provided options are only applied if the document is being created, if it already exists they are ignored

**Arguments**

1. `name: string`
1. `content: unknown`
1. `options?: CreateOptions`

**Returns** `Promise<DocID>` the [`DocID`](libs-types.md#docid) of the created content document

### .merge

Performs a shallow (only one level) merge the contents for the given `name` alias, [`IndexKey`](libs-types.md#indexkey) or definition [`DocID string`](libs-types.md#docid) in the [Identity Index](idx-terminology.md#identity-index--idx) of the authenticated [DID](idx-terminology.md#did)

> The provided options are only applied if the document is being created, if it already exists they are ignored

**Arguments**

1. `name: string`
1. `content: unknown`
1. `options?: CreateOptions`

**Returns** `Promise<DocID>` the [`DocID`](libs-types.md#docid) of the created content document

### .setAll

Similar to the [`set` method](#set) but for setting multiple keys at once in a more efficient way.

The [Identity Index](idx-terminology.md#identity-index--idx) document will only get updated if all the contents are successfully set.

**Arguments**

1. `contents: Record<string, unknown>`
1. `options?: CreateOptions`

### .setDefaults

Similar to the [`setAll` method](#setall) but only sets contents for keys that are not already present in the [Identity Index](idx-terminology.md#identity-index--idx) document.

**Arguments**

1. `contents: Record<string, unknown>`
1. `options?: CreateOptions`

### .remove

Removes the definition for the `name` alias, [`IndexKey`](libs-types.md#indexkey) or definition [`DocID string`](libs-types.md#docid) in the [Identity Index](idx-terminology.md#identity-index--idx) of the authenticated [DID](idx-terminology.md#did)

**Arguments**

1. `name: string`

**Returns** `Promise<void>`

### .getIDXContent

Returns the [contents](libs-types.md#identityindexcontent) of the [Identity Index](idx-terminology.md#identity-index--idx) associated to the given `did`

**Arguments**

1. `did?: string = this.id`

**Returns** `Promise<IdentityIndexContent | null>`

### .contentIterator

Returns an async iterator of [`ContentEntry`](libs-types.md#contententry) for the given `did`

**Arguments**

1. `did?: string = this.id`

**Returns** `AsyncIterableIterator<ContentEntry>`

### .getDefinition

Loads an existing [Definition](libs-types.md#definition) by its [`DocID string`](libs-types.md#docid) or [`IndexKey`](libs-types.md#indexkey)

**Arguments**

1. `id: string`

**Returns** `Promise<Definition>`
