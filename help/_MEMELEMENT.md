## _MEMELEMENT
---

### The _MEMELEMENT function returns a _MEM block referring to a variable's memory, but not past it.

#### SYNTAX

`memoryBlock = _MEMELEMENT ( referenceVariable )`

#### EXAMPLES
##### Example: Comparing the specifications returned by _MEM and _MEMELEMENT from an array.
```vb
DIM a(1 TO 100) AS _UNSIGNED _BYTE

DIM m1 AS _MEM
DIM m2 AS _MEM

m1 = _MEM(a(50)) 'function returns information about array up to specific element
PRINT m1.OFFSET, m1.SIZE, m1.TYPE, m1.ELEMENTSIZE

m2 = _MEMELEMENT(a(50)) 'function returns information about the specific element
PRINT m2.OFFSET, m2.SIZE, m2.TYPE, m2.ELEMENTSIZE

END
```
  
```vb
28377205        51        3        1
28377205        1         3        1
```
  


#### SEE ALSO
* [_MEM](./_MEM.md)
* [_MEMNEW](./_MEMNEW.md)
* [_MEMGET](./_MEMGET.md) , [_MEMPUT](./_MEMPUT.md)
* [_MEMFREE](./_MEMFREE.md)
