## _MEMPUT
---

### The _MEMPUT statement writes data to a portion of a designated memory block at an OFFSET position.

#### SYNTAX

`_MEMPUT memoryBlock , bytePosition , sourceVariable [AS type ]`

#### PARAMETERS
* memoryBlock is a [_MEM](./_MEM.md) variable type memory block name created by [_MEMNEW](./_MEMNEW.md) or the [_MEM](./_MEM.md) function.
* bytePosition is the memoryBlock . OFFSET start position plus any bytes needed to read specific values.
* The sourceVariable type designates the size and bytePosition it should be written to. It can be a variable, array or user defined type.
* bytePosition can be converted [AS](./AS.md) a specific variable type before being written to the memoryBlock as bytes.


#### DESCRIPTION
* The [_MEMPUT](./_MEMPUT.md) statement is similar to the [PUT](./PUT.md) file statement, but bytePosition is required.
* The memoryBlock . OFFSET returns the starting byte position of the block. Add bytes to move into the block.
* The variable type held in the memory block can determine the next byte position to write a value.
* [LEN](./LEN.md) can be used to determine the byte size of numerical or user defined Variable Types regardless of the value held.
* [STRING](./STRING.md) values should be of a defined length. Variable length strings can actually move around in memory and not be found.


#### SEE ALSO
* [_MEMGET](./_MEMGET.md) , [_MEMGET](./_MEMGET.md) (function)
* [_MEM](./_MEM.md) , [_MEM](./_MEM.md) (function)
* [_MEMIMAGE](./_MEMIMAGE.md) , [_MEMNEW](./_MEMNEW.md)
* [_MEMFREE](./_MEMFREE.md) , [_MEMCOPY](./_MEMCOPY.md)
