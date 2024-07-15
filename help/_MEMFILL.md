# _MEMFILL

The _MEMFILL statement converts a value to a specified type, then fills memory with that type including any non-whole remainder.

  

## Syntax

_MEMFILL *memoryBlock*, *memoryBlock.OFFSET*, *fillBytes*, *value* [AS *variableType*]
  

## Parameters

* The *memoryBlock* [_MEM](_MEM.md) memory block is the block referenced to be filled.
* *memoryBlock.OFFSET* is the starting offset of the above referenced memory block.
* The *fillBytes* is the number of bytes to fill the memory block.
* The *value* is the value to place in the memory block at the designated OFFSET position.
* A literal or variable *value* can be optionally set [AS](AS.md) a variable [type](type.md) appropriate for the memory block.

  

## Description

* To clear previous data from a [_MEMNEW](_MEMNEW.md) memory block, use _MEMFILL with a *value* of 0.

  

## Examples

*Example:* Filling array values quickly using FOR loops or a simple memory fill.

``` [DIM](DIM.md) a(100, 100) [AS](AS.md) [LONG](LONG.md) [DIM](DIM.md) b(100, 100) [AS](AS.md) [LONG](LONG.md)  'filling array a with value 13 [FOR](FOR.md) i1 = 0 [TO](TO.md) 100     [FOR](FOR.md) i2 = 0 [TO](TO.md) 100         a(i1, i2) = 13     [NEXT](NEXT.md) [NEXT](NEXT.md)  'filling array b with value 13 [DIM](DIM.md) mema [AS](AS.md) [_MEM](_MEM.md) mema = [_MEM](_MEM.md) "MEM (function)")(b()) _MEMFILL mema, mema.OFFSET, mema.SIZE, 13 [AS](AS.md) [LONG](LONG.md) [_MEMFREE](_MEMFREE.md) mema  
```

  

## See also

* [_MEM](_MEM.md), [_MEM (function)](_MEM (function).md) "MEM (function)")
* [_MEMIMAGE](_MEMIMAGE.md), [_MEMNEW](_MEMNEW.md)
* [_MEMGET](_MEMGET.md), [_MEMPUT](_MEMPUT.md)

  
