<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [GET](GET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GET)
---
<blockquote>

### The GET # statement reads data from a file or port device by bytes or record positions.

</blockquote>

#### SYNTAX

<blockquote>

`GET # fileNumber& , [ position ][, { targetVariable | targetArray() }]`

</blockquote>

#### DESCRIPTION

<blockquote>


* fileNumber& is the file or port number used in the [OPEN](OPEN.md) [AS](AS.md) [BINARY](BINARY.md) or [RANDOM](RANDOM.md) statement.
* The [INTEGER](INTEGER.md) or [LONG](LONG.md) byte position in a [BINARY](BINARY.md) file or the record position in a [RANDOM](RANDOM.md) file must be greater than zero .
* The position can be omitted if the [GET](GET.md) operations are consecutive based on the targetVariable [TYPE](TYPE.md) byte size.
* The targetVariable type or [FIELD](FIELD.md) variable size determines the byte size and the next position in the file.
* The first byte position in a file is 1.
* [GET](GET.md) does not require a byte or record position or targetVariable (or comma) when using a [FIELD](FIELD.md) statement.
* QB64 can [PUT](PUT.md) the entire contents of an array to a file and later [GET](GET.md) those contents to a targetArray() (include brackets).
* [GET](GET.md) may ignore the end of a file and return bad data. If the [EOF](EOF.md) function returns -1 after a [GET](GET.md) operation, it indicates that the data has ended.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DO UNTIL EOF(1)
GET #1, , value%
IF NOT(EOF(1)) THEN PUT #2, , value%
LOOP
```
  
<br>



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
  
<br>


<div class="explanation">To read the last record GET the number of records. To add a record, use the number of records + 1 to PUT new record data.</div>

```vb
16 bytes
255        Hello worl       65535
1 records
255        Hello worl       65535
```
  
<br>



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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PUT](PUT.md) # , [SEEK](SEEK.md) , [SEEK](SEEK.md) (function)
* [INPUT](INPUT.md) # , [GET](GET.md) (TCP/IP statement)
* [FIELD](FIELD.md) , [RANDOM](RANDOM.md) , [BINARY](BINARY.md)
* [LEN](LEN.md) , [LOF](LOF.md) , [EOF](EOF.md)
</blockquote>
