# FIELD

The FIELD statement creates a [STRING](STRING.md) type definition for a [random](random.md)-access file buffer.

  

## Syntax

FIELD [#]*fileNumber&*, *fieldWidth1%* AS *variable1$*[, *fieldWidthN%* AS *variableN$*]
  

## Description

* *fileNumber%* is a file number used in the [OPEN](OPEN.md) statement or a value from the [FREEFILE](FREEFILE.md) function.
* Combined size of the *fieldWidth%* parameters **must not exceed the [LEN](LEN.md) = recordsize in the [RANDOM](RANDOM.md) [OPEN](OPEN.md) statement** or a ["FIELD overflow" error]("FIELD overflow" error.md) will occur.
* Variables are limited to [STRING](STRING.md) types. Use [TYPE](TYPE.md) instead of FIELD if you want to use numerical values.
* Once a FIELD is defined in a statement, [GET](GET.md) can read and [PUT](PUT.md) can write data without placeholders or variables.
* [LSET](LSET.md), [RSET](RSET.md), [PRINT #](PRINT #.md) "PRINT (file statement)"), [PRINT # USING](PRINT # USING.md) "PRINT USING (file statement)"), and [WRITE #](WRITE #.md) "WRITE (file statement)") can be used to place characters in the file buffer before a [PUT](PUT.md).
* All field definitions for a file are removed when the file is [closed](closed.md) or [RESET](RESET.md) and all strings are set to null ("").
* **Do not re-assign a field defined variable value or use it in an [INPUT](INPUT.md) statement if you want the variable to remain a field**.

  

## Examples

*Example:* Comparing a [TYPE](TYPE.md) definition with a FIELD [string](string.md) definition. Demo using a [TYPE](TYPE.md) definition to create a file:

``` [TYPE](TYPE.md) ClientType    CName [AS](AS.md) [STRING](STRING.md) * 30     '30 bytes    Address [AS](AS.md) [STRING](STRING.md) * 30   '30 bytes    City   [AS](AS.md) [STRING](STRING.md) * 15    '15 bytes    State  [AS](AS.md) [STRING](STRING.md) * 2     ' 2 bytes    Zip    [AS](AS.md) [STRING](STRING.md) * 5     ' 5 bytes [END](END.md) [TYPE](TYPE.md)      ' total size = 82 bytes [DIM](DIM.md) Client [AS](AS.md) ClientType RecordLEN = [LEN](LEN.md)(Client)       'find the size of each TYPE record  [OPEN](OPEN.md) "ADDRESS.DAT" [FOR](FOR.md) "FOR (file statement)") [RANDOM](RANDOM.md) [AS](AS.md) #1 [LEN](LEN.md) = RecordLEN [RESTORE](RESTORE.md) ClientData         'restore to start of DATA record = 0 [DO](DO.md)    [READ](READ.md) CName$, Address$, City$, State$, Zip$       'read DATA    [IF](IF.md) CName$ = "END" [THEN](THEN.md) [EXIT DO](EXIT DO.md)    record = record + 1               'increment record number    Client.CName = CName$    Client.Address = Address$    Client.City = City$    Client.State = State$    Client.Zip = Zip$    [PUT](PUT.md) #1, record, Client     'PUT by record number [LOOP](LOOP.md) [CLOSE](CLOSE.md) #1 [END](END.md)  ClientData:    [DATA](DATA.md) "Bob White","104 Birdland Rd.","Bellview","PA","15236"    [DATA](DATA.md) "Ward Cleaver","123 W. Beaver St.","Beaver","PA","15255"    [DATA](DATA.md) "Elmer Fudd","45 Wabbit St.","Bethel Park","PA","15022"    [DATA](DATA.md) "Wyley Coyote","33 Roadrunner Ave.","Clairton","PA","15122"    [DATA](DATA.md) "Jim Morrison","19 Doorway Dr.","Belleview","PA","15236"    [DATA](DATA.md) "END",0,0,0,0  
```

Demo using the FIELD statement to read the file:

``` [CONST](CONST.md) NM = 30, AD = 30, CT = 15, ST = 2, ZC = 5  ' Define field and record lengths with constants. [CONST](CONST.md) RLEN = NM + AD + CY + ST + ZC ' [OPEN](OPEN.md) "ADDRESS.DAT" [FOR](FOR.md) "FOR (file statement)") [RANDOM](RANDOM.md) [AS](AS.md) #1 [LEN](LEN.md) = RLEN FIELD #1, NM [AS](AS.md) CName$, AD [AS](AS.md) Address$, CY [AS](AS.md) City$, ST [AS](AS.md) State$, ZC [AS](AS.md) Zip$ FIELD #1, RLEN [AS](AS.md) Clist$         'define entire record  [GET](GET.md) #1, 1                  'GET does not need a variable to read FIELD records!                                   'Read file for zip codes from 15230 to 15239 . [DO](DO.md) [WHILE](WHILE.md) [NOT](NOT.md) [EOF](EOF.md)(1)    ZipCheck$ = Zip$                            'read zip codes    [IF](IF.md) (ZipCheck$ >= "15230" [AND](AND.md) "AND (boolean)") ZipCheck$ <= "15239") [THEN](THEN.md)       Info$ = Clist$       [PRINT](PRINT.md) [LEFT$](LEFT$.md)(Info$, 30)     'read name string       [PRINT](PRINT.md) [MID$](MID$.md) "MID$ (function)")(Info$, 31, 30)  'read address string       [PRINT](PRINT.md) [RIGHT$](RIGHT$.md)(Info$, 17)    'read city, state and zip code       [PRINT](PRINT.md)    [END IF](END IF.md)    [GET](GET.md) #1                               'simply GET reads each FIELD record after first [LOOP](LOOP.md) [CLOSE](CLOSE.md) #1 [END](END.md)  
```

  

## See also

* [OPEN](OPEN.md), [TYPE](TYPE.md)
* [GET](GET.md), [PUT](PUT.md)
* [LSET](LSET.md), [RSET](RSET.md)

  
