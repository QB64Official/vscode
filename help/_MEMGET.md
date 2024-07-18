## _MEMGET
---

### The _MEMGET statement reads a portion of a memory block at an OFFSET position into a variable, array or user defined type.

#### SYNTAX

`_MEMGET memoryBlock , bytePosition , destinationVariable`

#### DESCRIPTION
* The [_MEMGET](./_MEMGET.md) statement is similar to the [GET](./GET.md) statement used in files, but the position is required.
* The memory block name. OFFSET returns the starting byte position of the block. Add bytes to move into the block.
* The variable type held in the memory block can determine the next bytePosition to read.
* [LEN](./LEN.md) can be used to determine the byte size of numerical or user defined Variable Types regardless of the value held.
* [STRING](./STRING.md) values should be of a defined length. Variable length strings can actually move around in memory and not be found.


#### SEE ALSO
* [_MEMGET](./_MEMGET.md) (function)
* [_MEMPUT](./_MEMPUT.md)
* [_MEM](./_MEM.md)
* [_MEMIMAGE](./_MEMIMAGE.md)
* [_MEMFREE](./_MEMFREE.md)
