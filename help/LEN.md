## LEN
---

### The LEN function returns the number of bytes used by a variable value or the number of characters in a STRING . In QB64 it can also return the size of an array or TYPE variable.

#### SYNTAX

`length% = LEN ( literalTextOrVariable )`

#### EXAMPLES
##### Example 1: With a string variable the byte size is the same as the number of characters.
```vb
LastName$ = "Williams"
PRINT LEN(LastName$); "bytes"
```
  
```vb
8 bytes
```
  
##### Example 2: Testing INPUT for numerical STRING entries from a user.
```vb
INPUT "number: ", num$

value$ = LTRIM$(STR$(VAL(num$)))
L = LEN(value$)

PRINT LEN(num$), L
```
  
##### Example 3: With numerical value types you MUST use a variable to find the inherent byte length when using LEN.
```vb
DIM I AS INTEGER
PRINT "INTEGER ="; LEN(I); "bytes"
DIM L AS LONG
PRINT "LONG ="; LEN(L); "bytes"
DIM I64 AS _INTEGER64
PRINT "_INTEGER64 ="; LEN(I64); "bytes"
DIM S AS SINGLE
PRINT "SINGLE ="; LEN(S); "bytes"
DIM D AS DOUBLE
PRINT "DOUBLE ="; LEN(D); "bytes"
DIM F AS _FLOAT
PRINT "_FLOAT ="; LEN(F); "bytes"
```
  
```vb
INTEGER = 2 bytes
LONG = 4 bytes
_INTEGER64 = 8 bytes
SINGLE = 4 bytes
DOUBLE = 8 bytes
_FLOAT = 32 bytes
```
  
##### Example 4: Opening a RANDOM file using LEN to calculate and LEN = to designate the file record size.
```vb
TYPE variabletype
 x AS INTEGER'       '2 bytes
 y AS STRING * 10'  '10 bytes
 z AS LONG'          '4 bytes
END TYPE'            '16 bytes total
DIM record AS variabletype
DIM newrec AS variabletype

file$ = "testrand.inf" '<<<< filename may overwrite existing file
number% = 1 '<<<<<<<<<< record number to write cannot be zero
RecordLEN% = LEN(record)
PRINT RecordLEN%; "bytes"
record.x = 255
record.y = "Hello world!"
record.z = 65535
PRINT record.x, record.y, record.z

OPEN file$ FOR RANDOM AS #1 LEN = RecordLEN%
PUT #1, number% , record 'change record position number to add records
CLOSE #1

OPEN file$ FOR RANDOM AS #2 LEN = RecordLEN%
NumRecords% = LOF(2) \ RecordLEN%
PRINT NumRecords%; "records"

GET #2, NumRecords% , newrec 'GET last record available
CLOSE #2
PRINT newrec.x, newrec.y, newrec.z

END
```
  
```vb
16 bytes
255        Hello worl       65535
1 records
255        Hello worl       65535
```
  
##### Example 5: Find the size of arrays and array elements.
```vb
DIM a!(1 TO 5) 'a SINGLE has 4 bytes
PRINT "Element size ="; LEN(a!(1)), "Overall size ="; LEN(a!()) '5 elements * 4 bytes = 20 bytes

DIM b%(1 TO 5) 'an INTEGER has 4 bytes
PRINT "Element size ="; LEN(b%(1)), "Overall size ="; LEN(b%()) '5 elements * 2 bytes = 10 bytes

DIM c$(1 TO 5)
'PRINT LEN(c$()) 'Error: cannot use for array of variable length strings

'but for fixed length strings it works
DIM d$3(1 TO 5) 'fixed length (3 chars)
PRINT "Element size ="; LEN(d$3(1)), "Overall size ="; LEN(d$3()) '5 elements * 3 bytes = 15 bytes

'and it also works for TYPE arrays
TYPE t
   a AS LONG '4 bytes
   b AS INTEGER '2 bytes
END TYPE
DIM e(1 TO 5) AS t 'type is 6 bytes long
PRINT "Element size ="; LEN(e(1)), "Overall size ="; LEN(e()) '5 elements * 6 bytes = 30 bytes
```
  


#### SEE ALSO
* [LOF](./LOF.md) , [EOF](./EOF.md)
* [AS](./AS.md) , [TYPE](./TYPE.md)
* [RANDOM](./RANDOM.md) , [BINARY](./BINARY.md)
* Variable Types
