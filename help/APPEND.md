# OPEN

The OPEN statement is used to open a file or [COM](COM.md) serial communications port for program input or output.

  

## Syntax

OPEN *fileName$* [**FOR** *mode*] [{[ACCESS]({[ACCESS.md)|{[LOCK](LOCK.md)|SHARED}} [{READ|WRITE}] [AS](AS.md) [#]*fileNumber&* [LEN = *recordLength*]
### Legacy GW-BASIC syntax

OPEN *modeLetter$*, [#]*fileNumber&*, *fileName$*[, *recordLength*]
  

## Parameters

* The *fileName$* is a [STRING](STRING.md) variable or literal file name (path optional) in quotes.
* FOR mode can be: [APPEND](APPEND.md) (write to end), [BINARY](BINARY.md) (read/write), [INPUT](INPUT.md) "INPUT (file mode)") (read), [OUTPUT](OUTPUT.md) (write new) or [RANDOM](RANDOM.md) (read/write).
* GW-BASIC's *modeLetter$* is a [STRING](STRING.md) variable or the letter "A", "B", "I", "O" or "R" designating the OPEN modes above.
* *fileNumber&* can be any **positive** [INTEGER](INTEGER.md) or [LONG](LONG.md) whole number value or an unused value determined by the [FREEFILE](FREEFILE.md) function.
* [LEN](LEN.md) = or *recordLength* is optional to denote the RANDOM file record byte length (default = 128) or sequential (default = 512) load buffer.

  

## Description

* **QB64** can open as many files as your computer memory can handle. QBasic could only open about 15 at a time.
* **QB64 will allocate 4 bytes of memory for every possible file number up to the highest number used in a program.**
* *mode* defaults to RANDOM if the *mode* or FOR access statement is omitted. (see open modes described below)
* **Only the *fileName$*, *fileNumber&* and LEN = *recordLength* values can use variable values in the QBasic syntax.**
* If [LEN](LEN.md) = is ommitted, sequential file record sizes default to 512 and [RANDOM](RANDOM.md) to 128 bytes in QBasic.
* *fileName$* can be up to 255 characters with no limit on file name extension length in **QB64**.
* Once a file or port is opened, it can be used in any program procedure using the assigned file number.
* The **"SCRN:"** device is supported in **version 1.000 and up** (see Example 3).
* **Devices such as "KYBD:", "CONS:", "COMn" and "LPTn:" are [not supported in QB64.](not supported in QB64..md)**.

**Note:** OPEN "LPTn" is not supported by QB64, but may be supported directly by your operating system.
* [OPEN COM](OPEN COM.md) can also be used for serial port access in **QB64**.

### Errors

* Illegal **QB64** Windows filename characters are  **" * / \ | ? : < >** . Multiple dots (periods) are allowed.
* Possible OPEN [errors](errors.md) include "Bad file name or number", "Bad File Mode", "File Not Found" or "Path Not Found".
	+ An OPEN file not found error may occur if [CHR$](CHR$.md)(0) to (31) are used in a Windows file name.
* **QB64** does not have DOS file name limitations.

  

## Details

### File ACCESS and LOCK Permissions

* [ACCESS](ACCESS.md) clause limits file access to READ, WRITE or READ WRITE on a network.
* [LOCK](LOCK.md) "LOCK (access)") clause can specify SHARED or a LOCK READ or LOCK WRITE file lock in an OPEN statement working on a network.
* A separate [LOCK](LOCK.md) statement can lock or [UNLOCK](UNLOCK.md) file access on a network using a format that can lock specific records.
* If another process already has access to a specified file, program access is denied for that file OPEN access. A "Permission Denied" error 70 will be returned. A network program must be able to handle a denial of access error.

### File Access Modes

* FOR mode can be:
	+ **OUTPUT**: Sequential mode creates a new file or erases an existing file for new program output. Use [WRITE #](WRITE #.md) "WRITE (file statement)") to write numerical or text data or [PRINT #](PRINT #.md) "PRINT (file statement)") for text. **OUTPUT clears files of all data** and clears the receive buffer on other devices such as [COM](COM.md).
	+ **APPEND**: Sequential mode creates a new file if it doesn't exist or appends program output to the end of an existing file. Use [WRITE #](WRITE #.md) "WRITE (file statement)") for numerical or text data or [PRINT #](PRINT #.md) "PRINT (file statement)") for text as in the OUTPUT mode. **APPEND does not remove previous data.**
	+ **INPUT** : Sequential mode **only reads input** from an existing file. **[File error](File error.md) if file does not exist.** Use [INPUT #](INPUT #.md) "INPUT (file statement)") for comma separated numerical or text data and [LINE INPUT #](LINE INPUT #.md) "LINE INPUT (file statement)") or [INPUT$](INPUT$.md) to only read text data. **Use [_FILEEXISTS](_FILEEXISTS.md) or [_DIREXISTS](_DIREXISTS.md) to avoid errors.**
	+ **BINARY**: Creates a new file when it doesn't exist or reads and writes to an existing binary file. Use [GET #](GET #.md) to read or [PUT #](PUT #.md) to write byte positions simultaneously. [LEN](LEN.md) = statements are ignored in this mode.
	+ **RANDOM**: Creates a new file when it doesn't exist or reads or writes to an existing random file record. Use [GET #](GET #.md) or [PUT #](PUT #.md) to read or write to file records. A [LEN](LEN.md) = statement can define the byte size of a record (no LEN statement defaults to 128 bytes)
	+ Modes **INPUT**, **BINARY** and **RANDOM** allow a file to be concurrently opened in a different mode and number.

### GW-BASIC modes

* *Mode letter* is a variable or literal [STRING](STRING.md) letter value as one of the following:
	+ "A" = **APPEND**.
	+ "B" = **BINARY**.
	+ "I" = **INPUT**.
	+ "O" = **OUTPUT**.
	+ "R" = **RANDOM**.

  

## Examples

*Example 1:* Function that displays errors and the number of errors in QBasic filenames. Returns 0 when filename is OK.

```  file$ = "Hello,~1.mp3"      'example call below  [LOCATE](LOCATE.md) 20, 30: errors% = CheckName%(file$): [COLOR](COLOR.md) 14: [PRINT](PRINT.md) "  Total Errors ="; errors%  [FUNCTION](FUNCTION.md) CheckName% (Filename$)   '[NOT](NOT.md)E: Function also displays filename errors so [LOCATE](LOCATE.md) on screen before call!   [DIM](DIM.md) L [AS](AS.md) [INTEGER](INTEGER.md), DP [AS](AS.md) [INTEGER](INTEGER.md), XL [AS](AS.md) [INTEGER](INTEGER.md)   L = [LEN](LEN.md)(Filename$): DP = [INSTR](INSTR.md)(Filename$, "."): [IF](IF.md) DP [THEN](THEN.md) XL = L - DP 'extension   [IF](IF.md) L = 0 [OR](OR.md) "OR (boolean)") L > 12 [OR](OR.md) "OR (boolean)") DP > 9 [OR](OR.md) "OR (boolean)") XL > 3 [THEN](THEN.md)     CheckName% = -1: [COLOR](COLOR.md) 12: [PRINT](PRINT.md) "Illegal format!"; : [EXIT FUNCTION](EXIT FUNCTION.md)   [END IF](END IF.md)   [FOR](FOR.md) i% = 1 [TO](TO.md) L      'check each filename character"      code% = [ASC](ASC.md) "ASC (function)")([MID$](MID$.md) "MID$ (function)")(Filename$, i%, 1)): [COLOR](COLOR.md) 10      ' see ASCII codes      [SELECT CASE](SELECT CASE.md) code%       'check for errors and highlight in red         '[CASE](CASE.md) 34, 42 [TO](TO.md) 44, 47, 58 [TO](TO.md) 63, 91 [TO](TO.md) 93, 124: E% = E% + 1: [COLOR](COLOR.md) 12 ' **QBasic errors**         [CASE](CASE.md) 34, 42, 47, 58, 60, 62, 92, 124: E% = E% + 1: [COLOR](COLOR.md) 12 ' **QB64 errors**         [CASE](CASE.md) 46: dot% = dot% + 1: [IF](IF.md) dot% > 1 [THEN](THEN.md) E% = E% + 1: [COLOR](COLOR.md) 12      [END SELECT](END SELECT.md)      [PRINT](PRINT.md) [CHR$](CHR$.md)(code%);  'use [LOCATE](LOCATE.md) before [FUNCTION](FUNCTION.md) call to place print   [NEXT](NEXT.md)   CheckName% = E% [END FUNCTION](END FUNCTION.md)  
```

*Note: The QBasic character error list is commented out and the function will return invalid filenames under QB64.*

```                          Hello,~1.mp3  Total Errors = 1  
```

*Note:* The screen output displays filename characters in green except for red comma QBasic error.
  

*Example 2:* When **OPEN "SCRN:" FOR OUTPUT AS #f** is used, **PRINT #f** will print the text to the screen instead of to a file:

``` f% = [FREEFILE](FREEFILE.md) 'should always be 1 at program start OPEN "SCRN:" [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #f% g% = [FREEFILE](FREEFILE.md) 'should always be 2 after 1 OPEN "temp.txt" [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #g%  [FOR](FOR.md) i = 1 [TO](TO.md) 2     [PRINT](PRINT.md) "PRINT (file statement)") #i, "Hello World, Screen and File version" NEXT  
```

*Note:* Linux or macOS file names can use a path destination such as ".\SCRN:" to use SCRN: as an actual file name.
  

*Example 3:* Showcasing different file modes.

``` [CLS](CLS.md)  OPEN "test.tst" [FOR](FOR.md) "FOR (file statement)") [OUTPUT](OUTPUT.md) [AS](AS.md) #1 [PRINT](PRINT.md) "PRINT (file statement)") #1, "If test.tst didn't exist:" [PRINT](PRINT.md) "PRINT (file statement)") #1, "A new file was created named test.tst and then deleted." [PRINT](PRINT.md) "PRINT (file statement)") #1, "If test.tst did exist:" [PRINT](PRINT.md) "PRINT (file statement)") #1, "It was overwritten with this and deleted." [CLOSE](CLOSE.md) #1  OPEN "test.tst" [FOR](FOR.md) "FOR (file statement)") [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #1 [DO](DO.md) [UNTIL](UNTIL.md) [EOF](EOF.md)(1) [INPUT](INPUT.md) "INPUT (file statement)") #1, a$ [PRINT](PRINT.md) a$ [LOOP](LOOP.md) [CLOSE](CLOSE.md) #1  [KILL](KILL.md) "test.tst"  [END](END.md)   
```

``` If test.tst didn't exist: A new file was created named test.tst and then deleted. If test.tst did exist: It was overwritten with this and deleted.  
```

**Warning:** Make sure you don't have a file named test.tst before you run this or it will be overwritten.
  

## See also

* [PRINT (file statement)](PRINT (file statement).md) "PRINT (file statement)"), [INPUT (file statement)](INPUT (file statement).md) "INPUT (file statement)")
* [GET](GET.md), [PUT](PUT.md), [WRITE (file statement)](WRITE (file statement).md) "WRITE (file statement)")
* [INPUT$](INPUT$.md), [LINE INPUT (file statement)](LINE INPUT (file statement).md) "LINE INPUT (file statement)")
* [CLOSE](CLOSE.md), [LOF](LOF.md), [EOF](EOF.md), [LOC](LOC.md)
* [SEEK](SEEK.md), [SEEK (function)](SEEK (function).md) "SEEK (function)")
* [OPEN COM](OPEN COM.md), [LEN](LEN.md), [RESET](RESET.md)
* [FIELD](FIELD.md), [TYPE](TYPE.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)
* [_OPENCLIENT](_OPENCLIENT.md), [_OPENHOST](_OPENHOST.md), [_OPENCONNECTION](_OPENCONNECTION.md)
* [_SNDOPEN](_SNDOPEN.md), [_LOADIMAGE](_LOADIMAGE.md)

  
