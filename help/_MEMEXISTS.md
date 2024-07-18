## _MEMEXISTS
---

### The _MEMEXISTS function returns true (-1) if the memory block variable name specified exists in memory and false (0) if it does not.

#### SYNTAX

`result = _MEMEXISTS ( memBlock )`

#### DESCRIPTION
* The memBlock variable name must have been created using [DIM](./DIM.md) memBlock [AS](./AS.md) [_MEM](./_MEM.md) type ( [DIM](./DIM.md) .
* The function verifies that the memory variable exists in memory before using a passed block, to avoid generating QB64 errors.
* Typically, this function is used by a [LIBRARY](./LIBRARY.md) [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) which accepts a [_MEM](./_MEM.md) structure as input, to avoid an error.


#### SEE ALSO
* [_MEM](./_MEM.md) (function)
* [_MEMELEMENT](./_MEMELEMENT.md) , [_MEMCOPY](./_MEMCOPY.md)
* [_MEMIMAGE](./_MEMIMAGE.md) , [_MEMNEW](./_MEMNEW.md)
* [_MEMGET](./_MEMGET.md) , [_MEMPUT](./_MEMPUT.md)
* [_MEMFILL](./_MEMFILL.md) , [_MEMFREE](./_MEMFREE.md)
