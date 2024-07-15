# PUT

The **PUT #** file or port statement writes data to a specific byte or record location.

  

## Syntax

**PUT #*filenumber&*,** [*position*][, {*holdingvariable*|*holdingarray()*}]
  

* File/port number is the number used in the [OPEN](OPEN.md) statement.
* The [INTEGER](INTEGER.md) or [LONG](LONG.md) file byte *position* in a [BINARY](BINARY.md) file or the record *position* in a [RANDOM](RANDOM.md) file **must be greater than zero**.
* The file byte or record *position* can be omitted if the PUT or [GET](GET.md) is consecutive or when creating new file data sequentially.
* The *holding variable* [type](type.md) determines byte size and the next byte position in the file when the *position* is ommitted.
* The first byte or record position is 1. This may require adding one to an offset value when documentation uses that position as 0.
* Both the file *position* and *holding variable*(and comma) can be omitted when using a [FIELD](FIELD.md) definition.
* If a [LEN](LEN.md) = record length statement is omitted in an [OPEN](OPEN.md) FOR [RANDOM](RANDOM.md) statement the record size defaults to 128 bytes!
* **Warning: Not designating a PUT position can overwrite previous file data based on the current file *position*!**
* When using a numeric *holding variable*, values do NOT require conversion using [MKI$](MKI$.md), [MKL$](MKL$.md), [MKS$](MKS$.md) or [MKD$](MKD$.md).
* **QB64** can load [array](array.md) data directly(brackets required) to a [BINARY](BINARY.md) file using **one** PUT to a [BINARY](BINARY.md) file: **PUT #1, , array()**

  

*Example 1:* Using a [TYPE](TYPE.md) record variable(Contact) to enter a new [RANDOM](RANDOM.md) record to a file.

``` [TYPE](TYPE.md) ContactType   first [AS](AS.md) [STRING](STRING.md) * 10   last [AS](AS.md) [STRING](STRING.md) * 20   age [AS](AS.md) [INTEGER](INTEGER.md) [END](END.md) [TYPE](TYPE.md) [DIM](DIM.md) Contact [AS](AS.md) ContactType  [INPUT](INPUT.md) "Enter a first name: ", Contact.first [INPUT](INPUT.md) "Enter a last name: ", Contact.last [INPUT](INPUT.md) "Enter an age: ", Contact.age  [OPEN](OPEN.md) "Record.lst" [FOR](FOR.md) [RANDOM](RANDOM.md) [AS](AS.md) #1 [LEN](LEN.md) = [LEN](LEN.md)(Contact) NumRecords% = [LOF](LOF.md)(1) \ [LEN](LEN.md)(Contact) [PRINT](PRINT.md) NumRecords%; "previous records"  PUT #1, NumRecords% + 1, Contact ' add a new record [TYPE](TYPE.md) record value [CLOSE](CLOSE.md) #1  
```

*Note:* The DOT record variable values were created or changed before the PUT. The record length is 32 bytes.
  

*Example 2:* Placing the contents of a numerical array into a [BINARY](BINARY.md) file. You may want to put the array size at the beginning too.

``` [DIM](DIM.md) [SHARED](SHARED.md) array(100) [AS](AS.md) [INTEGER](INTEGER.md)  [FOR](FOR.md) i = 1 [TO](TO.md) 100   array(i) = i [NEXT](NEXT.md) showme  'display array contents  [OPEN](OPEN.md) "BINFILE.BIN" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #1  PUT #1, , array()  [ERASE](ERASE.md) array 'clear element values from array and display empty showme [CLOSE](CLOSE.md) #1  [OPEN](OPEN.md) "BINFILE.BIN" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #2 [GET](GET.md) #2, , array() [CLOSE](CLOSE.md) #2 showme  'display array after transfer from file  [END](END.md)  [SUB](SUB.md) showme [FOR](FOR.md) i = 1 [TO](TO.md) 100   [PRINT](PRINT.md) array(i); [NEXT](NEXT.md) [PRINT](PRINT.md) "done" [END SUB](END SUB.md)  
```

*Note:* Use empty brackets in QB64 when using [GET](GET.md) to create an array or PUT to create a [BINARY](BINARY.md) data file.
### More Examples

* [Program ScreenShots](Program ScreenShots.md)

  

## See also

* [GET #](GET #.md)
* [SEEK](SEEK.md), [SEEK (function)](SEEK (function).md) "SEEK (function)")
* [PRINT #](PRINT #.md) "PRINT (file statement)")
* [FIELD](FIELD.md)
* [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [PUT (TCP/IP statement)](PUT (TCP/IP statement).md) "PUT (TCP/IP statement)")

  
