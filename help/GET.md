# GET

The GET # statement reads data from a file or port device by bytes or record positions.

  

## Syntax

GET #*fileNumber&*, [*position*][, {*targetVariable*|*targetArray()*}]
  

## Description

* *fileNumber&* is the file or port number used in the [OPEN](OPEN.md) AS [BINARY](BINARY.md) or [RANDOM](RANDOM.md) statement.
* The [INTEGER](INTEGER.md) or [LONG](LONG.md) byte *position* in a [BINARY](BINARY.md) file or the record *position* in a [RANDOM](RANDOM.md) file **must be greater than zero**.
* The *position* can be omitted if the GET operations are consecutive based on the *targetVariable* [TYPE](TYPE.md) byte size.
* The *targetVariable* [type](type.md) or [FIELD](FIELD.md) *variable* size determines the byte size and the next *position* in the file.
* The first byte position in a file is 1.
* GET does not require a byte or record *position* or *targetVariable* (or comma) when using a [FIELD](FIELD.md) statement.
* **QB64** can [PUT](PUT.md) the entire contents of an array to a file and later GET those contents to a *targetArray()* (include brackets).
* **GET may ignore the end of a file and return bad data. If the [EOF](EOF.md) function returns -1 after a GET operation, it indicates that the data has ended.**

```  DO UNTIL [EOF](EOF.md)(1)    GET #1, , value%    IF [NOT](NOT.md)([EOF](EOF.md)(1)) THEN [PUT](PUT.md) #2, , value%  LOOP  
```

  

## Examples

*Example 1:* Opening a RANDOM file using LEN to calculate and LEN = to designate the file record size.

``` [TYPE](TYPE.md) variabletype   x [AS](AS.md) [INTEGER](INTEGER.md)'       '2 bytes   y [AS](AS.md) [STRING](STRING.md) * 10'  '10 bytes   z [AS](AS.md) [LONG](LONG.md)'          '4 bytes [END](END.md) [TYPE](TYPE.md)'            '16 bytes total [DIM](DIM.md) record [AS](AS.md) variabletype [DIM](DIM.md) newrec [AS](AS.md) variabletype  file$ = "testrand.inf" '<<<< filename may overwrite existing file number% = 1 '<<<<<<<<<< record number to write cannot be zero RecordLEN% = [LEN](LEN.md)(record) [PRINT](PRINT.md) RecordLEN%; "bytes" record.x = 255 record.y = "Hello world!" record.z = 65535 [PRINT](PRINT.md) record.x, record.y, record.z  [OPEN](OPEN.md) file$ [FOR](FOR.md) [RANDOM](RANDOM.md) [AS](AS.md) #1 [LEN](LEN.md) = RecordLEN% [PUT](PUT.md) #1, number% , record 'change record position number to add records [CLOSE](CLOSE.md) #1  [OPEN](OPEN.md) file$ [FOR](FOR.md) [RANDOM](RANDOM.md) [AS](AS.md) #2 [LEN](LEN.md) = RecordLEN% NumRecords% = [LOF](LOF.md)(2) \ RecordLEN% PRINT NumRecords%; "records"  GET #2, NumRecords% , newrec 'GET last record available [CLOSE](CLOSE.md) #2 [PRINT](PRINT.md) newrec.x, newrec.y, newrec.z  [END](END.md)  
```

```  16 bytes  255        Hello worl       65535  1 records  255        Hello worl       65535  
```

*Explanation:* The byte size of the record [TYPE](TYPE.md) determines the [LOF](LOF.md) byte size of the file and can determine the number of records.
To read the last record GET the number of records. To add a record, use the number of records + 1 to [PUT](PUT.md) new record data.
  

*Example 2:* Placing the contents of a numerical array into a [BINARY](BINARY.md) file. You may want to put the array size at the beginning too.

``` [DIM](DIM.md) [SHARED](SHARED.md) array(100) [AS](AS.md) [INTEGER](INTEGER.md)  [FOR](FOR.md) i = 1 [TO](TO.md) 100   array(i) = i [NEXT](NEXT.md) showme  'display array contents  [OPEN](OPEN.md) "BINFILE.BIN" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #1  [PUT](PUT.md) #1, , array()  [ERASE](ERASE.md) array 'clear element values from array and display empty showme [CLOSE](CLOSE.md) #1  [OPEN](OPEN.md) "BINFILE.BIN" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #2 GET #2, , array() [CLOSE](CLOSE.md) #2 showme  'display array after transfer from file  [END](END.md)  [SUB](SUB.md) showme [FOR](FOR.md) i = 1 [TO](TO.md) 100   [PRINT](PRINT.md) array(i); [NEXT](NEXT.md) [PRINT](PRINT.md) "done" [END SUB](END SUB.md)  
```

*Note:* Use empty brackets in QB64 when using GET to create an array or [PUT](PUT.md) to create a [BINARY](BINARY.md) data file.
  

## See also

* [PUT #](PUT #.md), [SEEK](SEEK.md), [SEEK (function)](SEEK (function).md) "SEEK (function)")
* [INPUT #](INPUT #.md) "INPUT (file statement)"), [GET (TCP/IP statement)](GET (TCP/IP statement).md) "GET (TCP/IP statement)")
* [FIELD](FIELD.md), [RANDOM](RANDOM.md), [BINARY](BINARY.md)
* [LEN](LEN.md), [LOF](LOF.md), [EOF](EOF.md)

  
