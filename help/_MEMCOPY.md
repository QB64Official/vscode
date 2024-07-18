## _MEMCOPY
---

### The _MEMCOPY statement copies a block of bytes from one memory offset to another offset in memory.

#### SYNTAX

`_MEMCOPY sourceBlock , sourceBlock.OFFSET , sourceBlock.SIZE TO destBlock , destBlock.OFFSET`

#### PARAMETERS
* sourceBlock is the source memory block name created [AS](./AS.md) [_MEM](./_MEM.md) .
* sourceBlock.OFFSET is the dot [_OFFSET](./_OFFSET.md) within the source memory block to read from.
* sourceBlock.SIZE is the total number of bytes to transfer based on actual size.
* destBlock is the destination [_MEM](./_MEM.md) memory block name to transfer data to.
* destBlock.OFFSET is the dot [_OFFSET](./_OFFSET.md) within the dest [_MEM](./_MEM.md) memory block to write to.


#### DESCRIPTION
* The dot OFFSET is the memory block's start location in memory. Add bytes to place data further into the block.
* The dot SIZE is the total byte size of the memory block to transfer. You can transfer all or a portion of the data bytes.
* The memory block regions may overlap.
* Always free memory blocks after values have been transferred to variables and are no longer required.


#### EXAMPLES
##### Example: Swapping data from one STRING variable to another. Fixed length strings are recommended for speed.
```vb
DIM m AS _MEM
DIM n AS _MEM

m = _MEMNEW(10)
n = _MEMNEW(100)

_MEMPUT m, m.OFFSET, "1234567890"

s$ = SPACE$(10) 'to load into a variable length string set its length first
_MEMGET m, m.OFFSET, s$
PRINT "in:[" + s$ + "]"

_MEMCOPY m, m.OFFSET, m.SIZE TO n, n.OFFSET 'put m into n

b$ = SPACE$(10)
_MEMGET n, n.OFFSET, b$
PRINT "out:[" + b$ + "]"
_MEMFREE m: _MEMFREE n 'always clear the memory when done
```
  
##### Snippet: Instead of copying each array element, one at a time in nested FOR loops, _MEMCOPY does it in one statement instantly.
```vb
'copy array a to array b one index at a time:
FOR i1 = 0 TO 100
   FOR i2 = 0 TO 100
       b(i1, i2) = a(i1, i2)
   NEXT
NEXT

'copy array a to array b in memory instantly:
DIM ma AS _MEM: ma = _MEM(a()) 'place array data into blocks
DIM mb AS _MEM: mb = _MEM(b())
_MEMCOPY ma, ma.OFFSET, ma.SIZE TO mb, mb.OFFSET
_MEMFREE ma: _MEMFREE mb 'clear the memory when done
```
  


#### SEE ALSO
* [_MEM](./_MEM.md) , [_MEM](./_MEM.md) (function)
* [_MEMNEW](./_MEMNEW.md) , [_MEMGET](./_MEMGET.md) (function)
* [_MEMIMAGE](./_MEMIMAGE.md) , [_MEMELEMENT](./_MEMELEMENT.md)
* [_MEMGET](./_MEMGET.md) , [_MEMPUT](./_MEMPUT.md)
* [_MEMFILL](./_MEMFILL.md) , [_MEMFREE](./_MEMFREE.md)
