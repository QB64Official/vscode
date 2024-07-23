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


## [OPEN](OPEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPEN)
---
<blockquote>

### The OPEN statement is used to open a file or COM serial communications port for program input or output.

</blockquote>

#### SYNTAX

<blockquote>

`OPEN fileName$ [ FOR mode ] [{ ACCESS |{ LOCK |SHARED}} [{READ|WRITE}] AS [#] fileNumber& [LEN = recordLength ]`

</blockquote>

#### PARAMETERS

<blockquote>


* The fileName$ is a [STRING](STRING.md) variable or literal file name (path optional) in quotes.
* [FOR](FOR.md) mode can be: [APPEND](APPEND.md) (write to end), [BINARY](BINARY.md) (read/write), [INPUT](INPUT.md) (read), [OUTPUT](OUTPUT.md) (write new) or [RANDOM](RANDOM.md) (read/write).
* GW-BASIC's modeLetter$ is a [STRING](STRING.md) variable or the letter "A", "B", "I", "O" or "R" designating the [OPEN](OPEN.md) modes above.
* fileNumber& can be any positive [INTEGER](INTEGER.md) or [LONG](LONG.md) whole number value or an unused value determined by the [FREEFILE](FREEFILE.md) function.
* [LEN](LEN.md) = or recordLength is optional to denote the [RANDOM](RANDOM.md) file record byte length (default = 128) or sequential (default = 512) load buffer.
</blockquote>

#### DESCRIPTION

<blockquote>


* QB64 can open as many files as your computer memory can handle. QBasic could only open about 15 at a time.
* QB64 will allocate 4 bytes of memory for every possible file number up to the highest number used in a program.
* mode defaults to [RANDOM](RANDOM.md) if the mode or [FOR](FOR.md) access statement is omitted. (see open modes described below)
* Only the fileName$ , fileNumber& and [LEN](LEN.md) = recordLength values can use variable values in the QBasic syntax.
* If [LEN](LEN.md) = is ommitted, sequential file record sizes default to 512 and [RANDOM](RANDOM.md) to 128 bytes in QBasic.
* fileName$ can be up to 255 characters with no limit on file name extension length in QB64 .
* Once a file or port is opened, it can be used in any program procedure using the assigned file number.
* The "SCRN:" device is supported in version 1.000 and up (see Example 3).
* Devices such as "KYBD:", "CONS:", "COMn" and "LPTn:" are not supported in QB64. .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Function that displays errors and the number of errors in QBasic filenames. Returns 0 when filename is OK.
```vb
file$ = "Hello,~1.mp3"      'example call below
LOCATE 20, 30: errors% = CheckName%(file$): COLOR 14: PRINT "  Total Errors ="; errors%

FUNCTION CheckName% (Filename$)
'NOTE: Function also displays filename errors so LOCATE on screen before call!
DIM L AS INTEGER, DP AS INTEGER, XL AS INTEGER
L = LEN(Filename$): DP = INSTR(Filename$, "."): IF DP THEN XL = L - DP 'extension
IF L = 0 OR L > 12 OR DP > 9 OR XL > 3 THEN
CheckName% = -1: COLOR 12: PRINT "Illegal format!"; : EXIT FUNCTION
END IF
FOR i% = 1 TO L      'check each filename character"
code% = ASC(MID$(Filename$, i%, 1)): COLOR 10      ' see ASCII codes
SELECT CASE code%       'check for errors and highlight in red
'CASE 34, 42 TO 44, 47, 58 TO 63, 91 TO 93, 124: E% = E% + 1: COLOR 12 ' QBasic errors
CASE 34, 42, 47, 58, 60, 62, 92, 124: E% = E% + 1: COLOR 12 ' QB64 errors
CASE 46: dot% = dot% + 1: IF dot% > 1 THEN E% = E% + 1: COLOR 12
END SELECT
PRINT CHR$(code%);  'use LOCATE before FUNCTION call to place print
NEXT
CheckName% = E%
END FUNCTION
```
  
<br>

```vb
Hello,~1.mp3  Total Errors = 1
```
  
<br>


<div class="explanation">Warning: Make sure you don't have a file named test.tst before you run this or it will be overwritten.</div>



##### Example 2: When OPEN "SCRN:" FOR OUTPUT AS #f is used, PRINT #f will print the text to the screen instead of to a file:
```vb
f% = FREEFILE 'should always be 1 at program start
OPEN "SCRN:" FOR OUTPUT AS #f%
g% = FREEFILE 'should always be 2 after 1
OPEN "temp.txt" FOR OUTPUT AS #g%

FOR i = 1 TO 2
PRINT #i, "Hello World, Screen and File version"
NEXT
```
  
<br>



##### Example 3: Showcasing different file modes.
```vb
CLS

OPEN "test.tst" FOR OUTPUT AS #1
PRINT #1, "If test.tst didn't exist:"
PRINT #1, "A new file was created named test.tst and then deleted."
PRINT #1, "If test.tst did exist:"
PRINT #1, "It was overwritten with this and deleted."
CLOSE #1

OPEN "test.tst" FOR INPUT AS #1
DO UNTIL EOF(1)
INPUT #1, a$
PRINT a$
LOOP
CLOSE #1

KILL "test.tst"

END
```
  
<br>

```vb
If test.tst didn't exist:
A new file was created named test.tst and then deleted.
If test.tst did exist:
It was overwritten with this and deleted.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) (file statement) , [INPUT](INPUT.md) (file statement)
* [GET](GET.md) , [PUT](PUT.md) , [WRITE](WRITE.md) (file statement)
* [INPUT&dollar;](INPUT&dollar;.md) , [LINE](LINE.md) [INPUT](INPUT.md) (file statement)
* [CLOSE](CLOSE.md) , [LOF](LOF.md) , [EOF](EOF.md) , [LOC](LOC.md)
* [SEEK](SEEK.md) , [SEEK](SEEK.md) (function)
* [OPEN](OPEN.md) [COM](COM.md) , [LEN](LEN.md) , [RESET](RESET.md)
* [FIELD](FIELD.md) , [TYPE](TYPE.md)
* [_FILEEXISTS](FILEEXISTS.md) , [_DIREXISTS](DIREXISTS.md)
* [_OPENCLIENT](OPENCLIENT.md) , [_OPENHOST](OPENHOST.md) , [_OPENCONNECTION](OPENCONNECTION.md)
* [_SNDOPEN](SNDOPEN.md) , [_LOADIMAGE](LOADIMAGE.md)
</blockquote>
