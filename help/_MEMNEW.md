## _MEMNEW
---

### The _MEMNEW function allocates new memory and returns a _MEM memory block referring to it.

#### SYNTAX

`memoryBlock = _MEMNEW ( byteSize )`

#### PARAMETERS
* The byteSize parameter is the desired byte size of the memory block based on the variable type it will hold.


#### DESCRIPTION
* The memoryBlock value created holds the elements .OFFSET, .SIZE, .[TYPE](./TYPE.md) and .ELEMENTSIZE.
* [_MEMNEW](./_MEMNEW.md) does not clear the data previously in the memory block it allocates, for speed purposes.
* To clear previous data from a new memory block, use [_MEMFILL](./_MEMFILL.md) with a byte value of 0.
* When a new memory block is created the memory .[TYPE](./TYPE.md) value will be 0.
* If the read only memory block .SIZE is 0, the memory block was not created.
* All values created by memory functions must be freed using [_MEMFREE](./_MEMFREE.md) with a valid [_MEM](./_MEM.md) variable.


#### EXAMPLES
##### Example: Shows how SINGLE numerical values can be passed, but non-fixed STRING lengths cannot get the value.
```vb
DIM m AS _MEM
DIM f AS STRING * 5
m = _MEMNEW(5) 'create new memory block of 5 bytes
a = 12345.6
_MEMPUT m, m.OFFSET, a 'put single value
_MEMGET m, m.OFFSET, b 'get single value
PRINT "b = "; b
c$ = "Doggy"
_MEMPUT m, m.OFFSET, c$ 'put 5 byte string value
_MEMGET m, m.OFFSET, d$ 'get unfixed length string value
_MEMGET m, m.OFFSET, f  'get 5 byte string value
e$ = _MEMGET(m, m.OFFSET, STRING * 5) 'get 5 byte string value
PRINT "d$ = "; d$; LEN(d$) 'prints empty string
PRINT "e$ = "; e$; LEN(e$)
PRINT "f = "; f; LEN(f)
```
  
```vb
b =  12345.6
d$ =  0
e$ = Doggy 5
f = Doggy 5
```
  


#### SEE ALSO
* [_MEM](./_MEM.md) , [_MEMPUT](./_MEMPUT.md)
* [_MEMGET](./_MEMGET.md) , [_MEMGET](./_MEMGET.md) (function)
* [_MEMFILL](./_MEMFILL.md) , [_MEMFREE](./_MEMFREE.md)
