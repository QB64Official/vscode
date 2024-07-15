# _MEMCOPY

The _MEMCOPY statement copies a block of bytes from one memory offset to another offset in memory.

  

## Syntax

_MEMCOPY *sourceBlock*, *sourceBlock.OFFSET*, *sourceBlock.SIZE* [TO](TO.md) *destBlock*, *destBlock.OFFSET*
  

## Parameters

* *sourceBlock* is the source memory block name created AS [_MEM](_MEM.md).
* *sourceBlock.OFFSET* is the dot [_OFFSET](_OFFSET.md) within the source memory block to read from.
* *sourceBlock.SIZE* is the total number of bytes to transfer based on actual size.
* *destBlock* is the destination [_MEM](_MEM.md) memory block name to transfer data to.
* *destBlock.OFFSET* is the dot [_OFFSET](_OFFSET.md) within the dest [_MEM](_MEM.md) memory block to write to.

  

## Description

* The dot OFFSET is the memory block's start location in memory. Add bytes to place data further into the block.
* The dot SIZE is the total byte size of the memory block to transfer. You can transfer all or a portion of the data bytes.
* The memory block regions may overlap.
* **Always free memory blocks after values have been transferred to variables and are no longer required.**

  

## Examples

*Example:* Swapping data from one [STRING](STRING.md) variable to another. Fixed length strings are recommended for speed.

``` [DIM](DIM.md) m [AS](AS.md) [_MEM](_MEM.md) [DIM](DIM.md) n [AS](AS.md) [_MEM](_MEM.md)  m = [_MEMNEW](_MEMNEW.md)(10) n = [_MEMNEW](_MEMNEW.md)(100)  [_MEMPUT](_MEMPUT.md) m, m.OFFSET, "1234567890"  s$ = [SPACE$](SPACE$.md)(10) 'to load into a variable length string set its length first [_MEMGET](_MEMGET.md) m, m.OFFSET, s$ [PRINT](PRINT.md) "in:[" + s$ + "]"  _MEMCOPY m, m.OFFSET, m.SIZE [TO](TO.md) n, n.OFFSET 'put m into n  b$ = [SPACE$](SPACE$.md)(10) [_MEMGET](_MEMGET.md) n, n.OFFSET, b$ [PRINT](PRINT.md) "out:[" + b$ + "]" [_MEMFREE](_MEMFREE.md) m: [_MEMFREE](_MEMFREE.md) n 'always clear the memory when done  
```

  

*Snippet:* Instead of copying each array element, one at a time in nested [FOR](FOR.md) loops, _MEMCOPY does it in one statement instantly.

``` 'copy array a to array b one index at a time: [FOR](FOR.md) i1 = 0 [TO](TO.md) 100     [FOR](FOR.md) i2 = 0 [TO](TO.md) 100         b(i1, i2) = a(i1, i2)     [NEXT](NEXT.md) [NEXT](NEXT.md)  'copy array a to array b in memory instantly: [DIM](DIM.md) ma [AS](AS.md) [_MEM](_MEM.md): ma = [_MEM](_MEM.md) "MEM (function)")(a()) 'place array data into blocks [DIM](DIM.md) mb [AS](AS.md) [_MEM](_MEM.md): mb = [_MEM](_MEM.md) "MEM (function)")(b()) _MEMCOPY ma, ma.OFFSET, ma.SIZE [TO](TO.md) mb, mb.OFFSET [_MEMFREE](_MEMFREE.md) ma: [_MEMFREE](_MEMFREE.md) mb 'clear the memory when done  
```

  

## See also

* [_MEM](_MEM.md), [_MEM (function)](_MEM (function).md) "MEM (function)")
* [_MEMNEW](_MEMNEW.md), [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)")
* [_MEMIMAGE](_MEMIMAGE.md), [_MEMELEMENT](_MEMELEMENT.md)
* [_MEMGET](_MEMGET.md), [_MEMPUT](_MEMPUT.md)
* [_MEMFILL](_MEMFILL.md), [_MEMFREE](_MEMFREE.md)

  
