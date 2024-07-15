# RANDOM

**RANDOM** is used in an [OPEN](OPEN.md) statement to read([GET](GET.md)) from or write([PUT](PUT.md)) to a file.

  

## Syntax

OPEN Filename$ FOR RANDOM AS #1 [LEN = *recordlength%*]
  

* RANDOM is the Default mode if no mode is given in the [OPEN](OPEN.md) statement.
* It creates the file if the legal file name given does NOT exist.
* As a RANDOM file, it can read or write any record using [GET](GET.md) and/or [PUT](PUT.md) statements.
* *Recordlength%* is determined by getting the LEN of a [TYPE](TYPE.md) variable or a [FIELD](FIELD.md) statement.

[STRING](STRING.md) = 1 byte/character, [INTEGER](INTEGER.md) = 2 bytes, [LONG](LONG.md) = 4 bytes, [SINGLE](SINGLE.md) = 4 bytes [DOUBLE](DOUBLE.md) = 8 bytes
[_BYTE](_BYTE.md) = 1 byte, [_INTEGER64](_INTEGER64.md) = 8 bytes, [_FLOAT](_FLOAT.md) = 10 bytes (so far)
* If no record length is used in the [OPEN](OPEN.md) statement, the default record size is 128 bytes except for the last record.
* A record length cannot exceed 32767 or an [error](error.md) will occur!
* To determine the number of records in a file the records% = [LOF](LOF.md) \ recordlength%.
* When **variable length strings** are PUT into RANDOM files the record length must exceed the maximum string entry by:

2 bytes are reserved for recording variable string lengths up to 32767 bytes (LEN = longest + 2)
8 bytes are reserved for recording variable string lengths exceeding 32767 bytes (LEN = longest + 8)
* A serial communication port can also be opened for RANDOM in an [OPEN COM](OPEN COM.md) statement.

  

*Example 1:* Function that finds a RANDOM file's record number for a string value such as a phone number.

``` [TYPE](TYPE.md) customer   age [AS](AS.md) [INTEGER](INTEGER.md)   phone [AS](AS.md) [STRING](STRING.md) * 10 [END](END.md) [TYPE](TYPE.md)  [DIM](DIM.md) [SHARED](SHARED.md) cust [AS](AS.md) customer, recLEN recLEN = [LEN](LEN.md)(cust)            'get the length of the record type [PRINT](PRINT.md) "Rec[LEN](LEN.md):"; recLEN  [OPEN](OPEN.md) "randfile.rec" [FOR](FOR.md) RANDOM [AS](AS.md) #1 [LEN](LEN.md) = recLEN [FOR](FOR.md) i = 1 [TO](TO.md) 4   [READ](READ.md) cust.age, cust.phone   [PUT](PUT.md) #1, , cust [NEXT](NEXT.md) [CLOSE](CLOSE.md) #1  RP = RecordPos("randfile.rec", "2223456789")  'returns 0 if record not found!  [PRINT](PRINT.md) RP  [IF](IF.md) RP [THEN](THEN.md)   [OPEN](OPEN.md) "randfile.rec" [FOR](FOR.md) RANDOM [AS](AS.md) #2 [LEN](LEN.md) = recLEN   [GET](GET.md) #2, RP, cust   [CLOSE](CLOSE.md) #2 [PRINT](PRINT.md) cust.age, cust.phone [END IF](END IF.md)  [END](END.md)  [DATA](DATA.md) 59,2223456789,62,4122776477,32,3335551212,49,1234567890  [FUNCTION](FUNCTION.md) RecordPos (file$, search$) f = [FREEFILE](FREEFILE.md) [OPEN](OPEN.md) file$ [FOR](FOR.md) "FOR (file statement)") [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #f FL = [LOF](LOF.md)(f) dat$ = [INPUT$](INPUT$.md)(FL, f) [CLOSE](CLOSE.md) f recpos = [INSTR](INSTR.md)(dat$, search$) [IF](IF.md) recpos [THEN](THEN.md) RecordPos = recpos \ recLEN + 1 [ELSE](ELSE.md) RecordPos = 0 [END FUNCTION](END FUNCTION.md)  
```

*Note:* Random files can store records holding various variable types using a [TYPE](TYPE.md) definition or a [FIELD](FIELD.md) statement.
  

*Example 2:* When not using a [TYPE](TYPE.md) or fixed length strings, QB4.5 allows RANDOM files to hold variable length strings up to 2 bytes less than the LEN = record length statement:

``` [_CONTROLCHR](_CONTROLCHR.md) OFF [OPEN](OPEN.md) "myfile.txt" [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #1: [CLOSE](CLOSE.md) #1: ' clears former file of all entries. [OPEN](OPEN.md) "myfile.txt" [FOR](FOR.md) RANDOM [AS](AS.md) #1 [LEN](LEN.md) = 13 'strings can be up to 11 bytes with 2 byte padder  a$ = [CHR$](CHR$.md)(1) + [CHR$](CHR$.md)(0) + "ABCDEFGHI" b$ = "ABCDEFGHI" c$ = "1234"  [PUT](PUT.md) #1, 1, a$ [PUT](PUT.md) #1, 2, b$ [PUT](PUT.md) #1, 3, c$  [FOR](FOR.md) i = 1 [TO](TO.md) 3   [GET](GET.md) #1, i, a$   [PRINT](PRINT.md) a$, [LEN](LEN.md)(a$) [NEXT](NEXT.md)  [CLOSE](CLOSE.md)  
```

``` ☺ ABCDEFGHI       11 ABCDEFGHI         9 1234              4  
```

*Note:* The 2 byte file padders before each string PUT will show the length of a string for GET as [ASCII](ASCII.md) characters. Padders will always be 2 bytes and strings up to the last one will be 13 bytes each no matter the length up to 11, so the file size can be determined as (2 + 11) + (2 + 9 + 2) + (2 + 4) or 13 + 13 + 2 + 4 = 32 bytes.
  

## See also

* [GET](GET.md), [PUT](PUT.md), [FIELD](FIELD.md)
* [BINARY](BINARY.md)
* [SEEK](SEEK.md), [SEEK (function)](SEEK (function).md) "SEEK (function)")

  
