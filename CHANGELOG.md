## v0.5.0 (2020-12-17)

- Updated to support Ceramic v0.17 - this changed the schemas and definitions IDs
- Removed the `authenticate` method and `did` property

## v0.4.0 (2020-12-02)

Updated to support Ceramic v0.15

## v0.3.0 (2020-10-29)

- Updated to support Ceramic v0.12 - this changed the schemas and definitions IDs
- Added `merge`, `setAll` and `setDefaults` methods

## v0.2.0 (2020-10-07)

- Updated to the [new IdentityIndex specification](https://github.com/ceramicnetwork/CIP/pull/65)
- Removed tags-related methods, being removed from the new specification
- Removed need to provide `schemas` in constructor, now using constants
- Added logic to validate the definitions and IDX documents use the right schema

## v0.1.0 (2020-09-15)

First release
