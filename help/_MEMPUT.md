# _MEMPUT

The _MEMPUT statement writes data to a portion of a designated memory block at an [OFFSET](OFFSET.md) position.

  

## Syntax

_MEMPUT *memoryBlock*, *bytePosition*, *sourceVariable* [AS *type*]
  

## Parameters

* *memoryBlock* is a [_MEM](_MEM.md) variable type memory block name created by [_MEMNEW](_MEMNEW.md) or the [_MEM](_MEM.md) "MEM (function)") function.
* *bytePosition* is the *memoryBlock*.[OFFSET](OFFSET.md) start position plus any bytes needed to read specific values.
* The *sourceVariable* type designates the size and *bytePosition* it should be written to. It can be a variable, [array](array.md) or user defined type.
* *bytePosition* can be converted [AS](AS.md) a specific variable *[type](type.md)* before being written to the *memoryBlock* as bytes.

  

## Description

* The _MEMPUT statement is similar to the [PUT](PUT.md) file statement, but *bytePosition* is required.
* The *memoryBlock*.[OFFSET](OFFSET.md) returns the starting byte position of the block. Add bytes to move into the block.
* The variable type held in the memory block can determine the next *byte position* to write a value.
* [LEN](LEN.md) can be used to determine the byte size of numerical or user defined [Variable Types](Variable Types.md) regardless of the value held.
* [STRING](STRING.md) values should be of a defined length. Variable length strings can actually move around in memory and not be found.

  

## Description

*Example:* _MEMPUT can be used just like [POKE](POKE.md) without [DEF SEG](DEF SEG.md).

``` [DIM](DIM.md) o [AS](AS.md) [_MEM](_MEM.md) o = [_MEM](_MEM.md) "MEM (function)")(d&) _MEMPUT o, o.OFFSET + 1, 3 [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)  'POKE v = [_MEMGET](_MEMGET.md) "MEMGET (function)")(o, o.OFFSET + 1, [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)) 'PEEK [PRINT](PRINT.md) v 'prints 3 [PRINT](PRINT.md) d& 'print 768 because the 2nd byte of d& has been set to 3 or 3 * 256  
```

  

## See also

* [_MEMGET](_MEMGET.md), [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)")
* [_MEM](_MEM.md), [_MEM (function)](_MEM (function).md) "MEM (function)")
* [_MEMIMAGE](_MEMIMAGE.md), [_MEMNEW](_MEMNEW.md)
* [_MEMFREE](_MEMFREE.md), [_MEMCOPY](_MEMCOPY.md)

  
