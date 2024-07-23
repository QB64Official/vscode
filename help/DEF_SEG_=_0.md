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


## [DEF SEG = 0](DEF_SEG_=_0.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DEF%20SEG%20%3D%200)
---
<blockquote>

### The following DOS BIOS information can be used on Windows 9x machines. Not necessarily XP or NT! Each routine includes the hexadecimal and decimal registers.

</blockquote>

#### SYNTAX

<blockquote>

`DEF SEG = 0 MONITOR INFORMATION ===============================`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
A = INT(1193182 / F)
H = INT(A / 256)
L = A - H * 256
OUT 66, L: OUT 66, H
```
  
<br>

```vb
DEF SEG = 0    ' set to PEEK and POKE TIMER
POKE (1132), 0 ' zero Timer ticks
DO
key = INP(&H60)
LOOP UNTIL PEEK(1132) >= 1 ' until one tick (@ 1/18th sec.) has passed
DEF SEG
```
  
<br>



##### Example: DETERMINING THE DATE n DAYS FROM NOW.
```vb
A$ = DATE$: PRINT A$                'IMPORTANT! save original date!
IF n <= 255 THEN POKE 1136, n
IF n > 255 THEN
FOR D = 1 TO n: POKE 1136, 1: NEXT D
END IF
laterdate$ = DATE$
PRINT laterdate$                    'resulting date n days from today
DATE$ = A$                          'restore original computer date!
```
  
<br>



##### Example: Determining the status of a drive motor:
```vb
IF PEEK(1087) AND 128 = 128 THEN PRINT "drive write in progress"
IF PEEK(1087) AND 15  = 0 THEN PRINT "No drive being written to"
```
  
<br>



##### Example: Drive\$ designated is A, B, C or D, and the letter must be in uppercase.
```vb
IF PEEK(1087) AND 2 ^ (ASC (Drive$) - 65) THEN PRINT "Drive: " Drive$
```
  
<br>



##### Example: To turn on drive D for n seconds, where n is at MOST 14! :
```vb
POKE 1088, 18 + 2 * n
OUT 1010, 2 ^ (ASC("D") - 61) + ASC("D") - 53   '1010 = &H3F2
```
  
<br>



##### Example: The diskette parameter table consists of 11 bytes
```vb
DEF SEG = 0
D = PEEK(120) + 256 * PEEK(121) ' get value of Diskette

DEF SEG = PEEK(122) + 256 * PEEK(123) 'set to derive the following table
track = (PEEK(D) AND 240) \ 8 'time(milliseconds) required for diskette drive to move track to track
HUT = (PEEK(D) AND 15) * 32 ' head unload time(milliseconds) after read or write has occurred
HLT = (PEEK(D + 1) AND 240) \ 4 'head load time (in milliseconds)
DirMode = (PEEK(D + 1) AND 15) 'Direct Memory Access mode
WT = PEEK(D + 2) 'wait time until turning the motor off
BPS = PEEK(D + 3) 'number of bytes per sector on the disk. FOR v = 0 TO 3: 128 * 2 ^ v bytes per sector,
SPT = PEEK(D + 4) 'number of sectors per track, usually 8 or 9
GapLen = PEEK(D + 5) 'gap length (in bytes) between sectors
DatLen = PEEK(D + 6) 'data length read or written into a sector when sector length not specified
GFLen = PEEK(D + 7) 'gap length used when formatting
FVal = PEEK(D + 8) 'value format operation uses to initialize diskette sectors, usually 256
HST = PEEK(D + 9) 'number of milliseconds for the heads to stabilize
MST = PEEK(D + 10) 'number of eighths of a second for motor startup
DEF SEG
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PEEK](PEEK.md) , [POKE](POKE.md)
* [INP](INP.md) , [OUT](OUT.md)
* Screen Memory
</blockquote>
