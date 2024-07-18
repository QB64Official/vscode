## _MEMFREE
---

### The _MEMFREE statement frees the designated memory block _MEM value and must be used with all memory functions.

#### SYNTAX

`_MEMFREE memoryVariable`

#### PARAMETERS
* ALL designated [_MEM](./_MEM.md) type memoryVariable values must be freed to conserve memory when they are no longer used or needed.


#### DESCRIPTION
* Since [_MEM](./_MEM.md) type variables cannot use a suffix, use [DIM](./DIM.md) memoryVariable [AS](./AS.md) [_MEM](./_MEM.md) to create memory handle variables.
* All values created by memory functions must be freed using [_MEMFREE](./_MEMFREE.md) with a valid [_MEM](./_MEM.md) variable.


#### SEE ALSO
* [_MEM](./_MEM.md)
* [_MEM](./_MEM.md) (function)
* [_MEMNEW](./_MEMNEW.md)
* [_MEMIMAGE](./_MEMIMAGE.md)
* [_MEMELEMENT](./_MEMELEMENT.md)
* [_MEMGET](./_MEMGET.md) (function)
