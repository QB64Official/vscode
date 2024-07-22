## _MEMGET (function)
---
<blockquote>

### The _MEMGET function returns a value from a specific memory block name at the specified OFFSET using a certain variable type.

</blockquote>

#### SYNTAX

<blockquote>

`returnValue = _MEMGET ( memoryBlock , bytePosition , variableType )`

</blockquote>

#### PARAMETERS

<blockquote>

* Returns a value of the variableType designated. The holding variable must match that [TYPE](./TYPE.md) .
* memoryBlock is a [_MEM](./_MEM.md) variable type memory block name created by [_MEMNEW](./_MEMNEW.md) or the [_MEM](./_MEM.md) function.
* bytePosition is the memoryBlock . OFFSET memory start position plus any bytes to move into the block.
* variableType is a variable [TYPE](./TYPE.md) like [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md) , [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md) , etc.

</blockquote>

#### DESCRIPTION

<blockquote>

* memoryBlock . OFFSET returns the starting byte position of the block. Add bytes to move into the block.
* The variable type held in the memory block can determine the next bytePosition to read.
* [LEN](./LEN.md) can be used to determine the byte size of numerical or user defined Variable Types regardless of the value held.
* [STRING](./STRING.md) values should be of a defined length. Variable length strings can actually move around in memory and not be found.
* [_MEMGET](./_MEMGET.md) variable values that are assigned a variable type other than a memory type do not need to be freed.


</blockquote>

#### SEE ALSO

<blockquote>

* [_MEM](./_MEM.md) , MEM (function)
* [_MEMGET](./_MEMGET.md) , [_MEMPUT](./_MEMPUT.md)
* [_MEMNEW](./_MEMNEW.md) , [_MEMFILL](./_MEMFILL.md)
* [_MEMCOPY](./_MEMCOPY.md)

</blockquote>
