## GET
---

### The GET # statement reads data from a file or port device by bytes or record positions.

#### SYNTAX

`GET # fileNumber& , [ position ][, { targetVariable | targetArray() }]`

#### DESCRIPTION
* fileNumber& is the file or port number used in the [OPEN](./OPEN.md) [AS](./AS.md) [BINARY](./BINARY.md) or [RANDOM](./RANDOM.md) statement.
* The [INTEGER](./INTEGER.md) or [LONG](./LONG.md) byte position in a [BINARY](./BINARY.md) file or the record position in a [RANDOM](./RANDOM.md) file must be greater than zero .
* The position can be omitted if the [GET](./GET.md) operations are consecutive based on the targetVariable [TYPE](./TYPE.md) byte size.
* The targetVariable type or [FIELD](./FIELD.md) variable size determines the byte size and the next position in the file.
* The first byte position in a file is 1.
* [GET](./GET.md) does not require a byte or record position or targetVariable (or comma) when using a [FIELD](./FIELD.md) statement.
* QB64 can [PUT](./PUT.md) the entire contents of an array to a file and later [GET](./GET.md) those contents to a targetArray() (include brackets).
* [GET](./GET.md) may ignore the end of a file and return bad data. If the [EOF](./EOF.md) function returns -1 after a [GET](./GET.md) operation, it indicates that the data has ended.


#### EXAMPLES
##### Example 1: Opening a RANDOM file using LEN to calculate and LEN = to designate the file record size.
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
  
##### Example 2: Placing the contents of a numerical array into a BINARY file. You may want to put the array size at the beginning too.
```vb
DIM SHARED array(100) AS INTEGER

FOR i = 1 TO 100
 array(i) = i
NEXT
showme  'display array contents

OPEN "BINFILE.BIN" FOR BINARY AS #1

PUT #1, , array()

ERASE array 'clear element values from array and display empty
showme
CLOSE #1

OPEN "BINFILE.BIN" FOR BINARY AS #2
GET #2, , array()
CLOSE #2
showme  'display array after transfer from file

END

SUB showme
FOR i = 1 TO 100
 PRINT array(i);
NEXT
PRINT "done"
END SUB
```
  


#### SEE ALSO
* [PUT](./PUT.md) # , [SEEK](./SEEK.md) , [SEEK](./SEEK.md) (function)
* [INPUT](./INPUT.md) # , [GET](./GET.md) (TCP/IP statement)
* [FIELD](./FIELD.md) , [RANDOM](./RANDOM.md) , [BINARY](./BINARY.md)
* [LEN](./LEN.md) , [LOF](./LOF.md) , [EOF](./EOF.md)
