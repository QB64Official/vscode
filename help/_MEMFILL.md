## _MEMFILL
---

### The _MEMFILL statement converts a value to a specified type, then fills memory with that type including any non-whole remainder.

#### SYNTAX

`_MEMFILL memoryBlock , memoryBlock.OFFSET , fillBytes , value [AS variableType ]`

#### PARAMETERS
* The memoryBlock [_MEM](./_MEM.md) memory block is the block referenced to be filled.
* memoryBlock.OFFSET is the starting offset of the above referenced memory block.
* The fillBytes is the number of bytes to fill the memory block.
* The value is the value to place in the memory block at the designated OFFSET position.
* A literal or variable value can be optionally set [AS](./AS.md) a variable type appropriate for the memory block.


#### DESCRIPTION
* To clear previous data from a [_MEMNEW](./_MEMNEW.md) memory block, use [_MEMFILL](./_MEMFILL.md) with a value of 0.


#### EXAMPLES
##### Example: Filling array values quickly using FOR loops or a simple memory fill.
```vb
DIM a(100, 100) AS LONG
DIM b(100, 100) AS LONG

'filling array a with value 13
FOR i1 = 0 TO 100
   FOR i2 = 0 TO 100
       a(i1, i2) = 13
   NEXT
NEXT

'filling array b with value 13
DIM mema AS _MEM
mema = _MEM(b())
_MEMFILL mema, mema.OFFSET, mema.SIZE, 13 AS LONG
_MEMFREE mema
```
  


#### SEE ALSO
* [_MEM](./_MEM.md) , [_MEM](./_MEM.md) (function)
* [_MEMIMAGE](./_MEMIMAGE.md) , [_MEMNEW](./_MEMNEW.md)
* [_MEMGET](./_MEMGET.md) , [_MEMPUT](./_MEMPUT.md)
