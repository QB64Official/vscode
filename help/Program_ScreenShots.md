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


## [Program ScreenShots](Program_ScreenShots.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Program%20ScreenShots)
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`EightBit Minimum_Column%, Minimum_Row%, Maximum_Column%, Maximum_Row%, NewFileName$`

</blockquote>

#### DESCRIPTION

<blockquote>


* The values of x1%, y%1, x2% and y2% can be any [ON](ON.md) [SCREEN](SCREEN.md) area coordinates in the screen mode used.
* You MUST subtract one when using the QB64 FULL [SCREEN](SCREEN.md) [_WIDTH](WIDTH.md) and [_HEIGHT](HEIGHT.md) values! Otherwise [POINT](POINT.md) will return an Illegal function error ! The maximum is one pixel less than the [SCREEN](SCREEN.md) resolution or the screen dimensions.
* Both SUBs can be used in QB64 or QBasic! The FourBit [SUB](SUB.md) takes about 8 seconds in QB.
* FourBit [SUB](SUB.md) creates 4 BPP(16 color) and EightBit [SUB](SUB.md) creates 8 BPP(256 color) bitmaps.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'----------------- Freeware by Bob Seguin 2003 -- (TheBOB) --------------------------|
'|                                                                                   |
'|   ---- Decreased POINT time of 4 bit fullscreen to 8 seconds in QBasic ----       |
'|                     by Ted Weissgerber July, 2008                                 |
'|     - Add a special keypress to a game program to create a Screenshot -           |
'|                                                                                   |
'--------------------------------- DEMO CODE -----------------------------------------

DO: CLS
INPUT "ENTER Screen Mode 12 or 13 (0 quits): ", scrn%

IF scrn% = 13 THEN
SCREEN 13              '8 bit (256 colors) only
LINE (0, 0)-(319, 199), 13, BF
CIRCLE (160, 100), 50, 11
PAINT STEP(0, 0), 9, 11
Start! = TIMER
EightBIT 0, 0, 319, 199, "Purple8"

ELSEIF scrn% = 12 THEN
SCREEN 12              '4 bit(16 colors) only
LINE (0, 0)-(639, 479), 13, BF
LINE (100, 100)-(500, 400), 12, BF
CIRCLE (320, 240), 100, 11
PAINT STEP(0, 0), 9, 11
Start! = TIMER
FourBIT 0, 0, 639, 479, "Purple4"  '469, 239
ELSE : SYSTEM
END IF

Finish! = TIMER  'elapsed times valid for QB only
PRINT "Elapsed time ="; Finish! - Start!; "secs."; "Press Escape to quit!"
DO: K$ = INKEY$: LOOP UNTIL K$ <> ""
LOOP UNTIL K$ = CHR$(27)
SYSTEM

'****************  End DEMO code ***********************
```
  
<br>

```vb
SUB EightBit (x1%, y1%, x2%, y2%, Filename$)   'SCREEN 13(256 color) bitmap maker
'NOTE: Adjust x2% = 319 and y2% = 199 for legal POINTs when fullscreen in SCREEN 13
DIM FileCOLORS%(1 TO 768)
DIM Colors8%(255)
IF x1% > x2% THEN SWAP x1%, x2%
IF y1% > y2% THEN SWAP y1%, y2%
IF INSTR(Filename$, ".BMP") = 0 THEN
Filename$ = RTRIM$(LEFT$(Filename$, 8)) + ".BMP"
END IF

FileTYPE$ = "BM"
Reserved1% = 0
Reserved2% = 0
OffsetBITS& = 1078
InfoHEADER& = 40
PictureWIDTH& = (x2% - x1%) + 1
PictureDEPTH& = (y2% - y1%) + 1
NumPLANES% = 1
BPP% = 8
Compression& = 0
WidthPELS& = 3780
DepthPELS& = 3780
NumCOLORS& = 256

IF (PictureWIDTH& AND 3) THEN ZeroPAD$ = SPACE$(4 - (x& AND 3))

ImageSIZE& = (PictureWIDTH& + LEN(ZeroPAD$)) * PictureDEPTH&
FileSize& = ImageSIZE& + OffsetBITS&

OUT &H3C7, 0
FOR n = 1 TO 768 STEP 3
FileCOLORS%(n) = INP(&H3C9)
FileCOLORS%(n + 1) = INP(&H3C9)
FileCOLORS%(n + 2) = INP(&H3C9)
NEXT n
f% = FREEFILE
OPEN Filename$ FOR BINARY AS #f%

PUT #f%, , FileTYPE$
PUT #f%, , FileSize&
PUT #f%, , Reserved1% 'should be zero
PUT #f%, , Reserved2% 'should be zero
PUT #f%, , OffsetBITS&
PUT #f%, , InfoHEADER&
PUT #f%, , PictureWIDTH&
PUT #f%, , PictureDEPTH&
PUT #f%, , NumPLANES%
PUT #f%, , BPP%
PUT #f%, , Compression&
PUT #f%, , ImageSIZE&
PUT #f%, , WidthPELS&
PUT #f%, , DepthPELS&
PUT #f%, , NumCOLORS&
PUT #f%, , SigCOLORS&     '51 to 54

u$ = " "
FOR n% = 1 TO 768 STEP 3  'PUT as BGR order colors
Colr$ = CHR$(FileCOLORS%(n% + 2) * 4)
PUT #f%, , Colr$
Colr$ = CHR$(FileCOLORS%(n% + 1) * 4)
PUT #f%, , Colr$
Colr$ = CHR$(FileCOLORS%(n%) * 4)
PUT #f%, , Colr$
PUT #f%, , u$ 'Unused byte
NEXT n%

FOR y = y2% TO y1% STEP -1   'place bottom up
FOR x = x1% TO x2%
a$ = CHR$(POINT(x, y))
Colors8%(ASC(a$)) = 1
PUT #f%, , a$
NEXT x
PUT #f%, , ZeroPAD$
NEXT y

FOR n = 0 TO 255
IF Colors8%(n) = 1 THEN SigCOLORS& = SigCOLORS& + 1
NEXT n

PUT #f%, 51, SigCOLORS&
CLOSE #f%
END SUB
```
  
<br>

```vb
SUB FourBit (x1%, y1%, x2%, y2%, Filename$)   ' SCREEN 12(16 color) bitmap maker
'fullscreen takes about 8 seconds in QB
'NOTE: Adjust x2% = 639 and y2% = 479 for legal POINTs when fullscreen in SCREEN 12
DIM FileCOLORS%(1 TO 48)
DIM Colors4%(0 TO 15)
IF x1% > x2% THEN SWAP x1%, x2%
IF y1% > y2% THEN SWAP y1%, y2%
IF INSTR(Filename$, ".BMP") = 0 THEN
Filename$ = RTRIM$(LEFT$(Filename$, 8)) + ".BMP"
END IF

FileTYPE$ = "BM"
Reserved1% = 0
Reserved2% = 0
OffsetBITS& = 118
InfoHEADER& = 40
PictureWIDTH& = (x2% - x1%) + 1
PictureDEPTH& = (y2% - y1%) + 1
NumPLANES% = 1
BPP% = 4
Compression& = 0
WidthPELS& = 3780
DepthPELS& = 3780
NumCOLORS& = 16

IF PictureWIDTH& MOD 8 <> 0 THEN
ZeroPAD$ = SPACE$((8 - PictureWIDTH& MOD 8) \ 2)
END IF

ImageSIZE& = (((PictureWIDTH& + LEN(ZeroPAD$)) * PictureDEPTH&) + .1) / 2
FileSize& = ImageSIZE& + OffsetBITS&

OUT &H3C7, 0                    'start at color 0
FOR n = 1 TO 48 STEP 3
FileCOLORS%(n) = INP(&H3C9)
FileCOLORS%(n + 1) = INP(&H3C9)
FileCOLORS%(n + 2) = INP(&H3C9)
NEXT n
f% = FREEFILE
OPEN Filename$ FOR BINARY AS #f%
'Header bytes
PUT #f%, , FileTYPE$                   '2 '1 to 2
PUT #f%, , FileSize&                   '4
PUT #f%, , Reserved1% 'should be zero  '2
PUT #f%, , Reserved2% 'should be zero  '2
PUT #f%, , OffsetBITS&                 '4
PUT #f%, , InfoHEADER&                 '4
PUT #f%, , PictureWIDTH&               '4
PUT #f%, , PictureDEPTH&               '4
PUT #f%, , NumPLANES%                  '2
PUT #f%, , BPP%                        '2
PUT #f%, , Compression&                '4
PUT #f%, , ImageSIZE&                  '4
PUT #f%, , WidthPELS&                  '4
PUT #f%, , DepthPELS&                  '4
PUT #f%, , NumCOLORS&                  '4
PUT #f%, , SigCOLORS&                  '4 '51 - 54

u$ = " "             'unused byte
FOR n% = 1 TO 46 STEP 3   'PUT as BGR order colors
Colr$ = CHR$(FileCOLORS%(n% + 2) * 4)
PUT #f%, , Colr$
Colr$ = CHR$(FileCOLORS%(n% + 1) * 4)
PUT #f%, , Colr$
Colr$ = CHR$(FileCOLORS%(n%) * 4)
PUT #f%, , Colr$
PUT #f, , u$ 'add Unused byte
NEXT n%

FOR y = y2% TO y1% STEP -1    'Place from bottom up
FOR x = x1% TO x2% STEP 2   'nibble steps
HiX = POINT(x, y): Colors4%(HiX) = 1     'added here
LoX = POINT(x + 1, y): Colors4%(LoX) = 1
HiNIBBLE$ = HEX$(HiX)
LoNIBBLE$ = HEX$(LoX)
HexVAL$ = "&H" + HiNIBBLE$ + LoNIBBLE$
a$ = CHR$(VAL(HexVAL$))
PUT #f%, , a$
NEXT x
PUT #f%, , ZeroPAD$
NEXT y

FOR n = 0 TO 15
IF Colors4%(n) = 1 THEN SigCOLORS& = SigCOLORS& + 1
NEXT n
PUT #f%, 51, SigCOLORS&

CLOSE #f%
'BEEP         'optional sound not needed in QB64 as speed is fast
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LOADIMAGE](LOADIMAGE.md)
* [POINT](POINT.md) , [PUT](PUT.md)
</blockquote>
