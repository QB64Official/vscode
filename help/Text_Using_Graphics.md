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


## [Text Using Graphics](Text_Using_Graphics.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Text%20Using%20Graphics)
---
<blockquote>

### While QB64 offers _FONT and Unicode text options, QBasic was limited in what it could offer. This shortfall could be overcome in various ways including using sprite pictures. Thanks to QB64, we can have the best in both worlds without creating them yourself!

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN 12             'text characters are 8 X 16 pixel blocks
DIM SHARED Char(0 TO 255, 0 TO 15) AS STRING * 1  'store data by character row byte values
TextSave                     'call to SUB at start of program

SUB TextSave
OUT &H3C8, 1: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 0 'print text as background color
COLOR 1 'hide the character printing
FOR ascii% = 0 TO 255 'Draw map of each character
IF ascii% = 7 THEN ascii% = 8              'eliminate beep character sound when printed
LOCATE 1, 1: PRINT CHR$(ascii%)            'PRINT ASCII characters to top left corner
FOR row% = 0 TO 15                         'read 16 row byte values
byte = 0                                'reset value every row
FOR col% = 7 TO 0 STEP -1               'read 8 pixels from right to left
byte = byte * 2 - (POINT(col%, row%) > 0)  'bit-packing with 2 ^ bit
NEXT
Char(ascii%, row%) = CHR$(byte)         'convert row byte value to ASCII character
NEXT
LOCATE CSRLIN, POS(0) - 1: PRINT SPACE$(1) 'erase previous character anywhere
NEXT
PALETTE  'restore all palette colors
END SUB
```
  
<br>

```vb
FOR col% = 7 TO 0 STEP -1                     'read pixels from right to left
byte = byte * 2 - (POINT(col%, row%) > 0)  'bit-packing with 2 ^ bit
NEXT
```
  
<br>

```vb
Bit\Column #:  0   1   2   3   4   5   6   7   TOTAL 
Exponent 2 ^:  0   1   2   3   4   5   6   7
Bit Value On:  1   2   4   8  16  32  64  128   255
```
  
<br>



##### Example Code: Displays the 16 one byte row values saved as ASCII characters in the STRING array using _PRINTSTRING .
```vb
SCREEN 12 'text characters are 8 X 16 pixel blocks
DIM SHARED Char(0 TO 255, 0 TO 15) AS STRING * 1 'store data by character row byte values
TextSave 'call to SUB at start of program

DO
COLOR 11: LOCATE 10, 10: INPUT "Enter keypress or an ASCII code 1 to 255: ", cod$
CLS: code = VAL(cod$)
IF (code <= 0 AND LEN(cod$) > 0) OR code > 255 THEN code = ASC(cod$)
COLOR 14: _PRINTSTRING (0, 50), LTRIM$(STR$(code))
FOR n = 0 TO 15
ch$ = Char(code, n)
_PRINTSTRING (n * 30 + 40, 50), ch$ + ","
NEXT
_PRINTSTRING (600, 50), CHR$(code)
LOOP UNTIL LEN(cod$) = 0
END

SUB TextSave
OUT &H3C8, 1: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 0 'print text as background color
COLOR 1 'hide the character printing
FOR ascii% = 0 TO 255 'Draw map of each character
_PRINTSTRING (0, 0), CHR$(ascii%) 'PRINT ASCII characters to top left corner
FOR row% = 0 TO 15 'read 16 row byte values
byte = 0 'reset value every row
FOR col% = 7 TO 0 STEP -1 'read 8 pixels from right to left
byte = byte * 2 - (POINT(col%, row%) > 0) 'bit-packing with 2 ^ bit
NEXT
Char(ascii%, row%) = CHR$(byte) 'convert row byte value to ASCII character
NEXT
NEXT
PALETTE 'restore all palette colors
END SUB
```
  
<br>

```vb
SCREEN 12 'text characters are 8 X 16 pixel blocks
DIM SHARED Char(0 TO 255, 0 TO 15) AS STRING * 1 'store data by character row byte values
TextSave 'call to SUB at start of program

ch = 1 'character 1
DO: rowy = 0
COLOR 14: LOCATE 26, 5
FOR yy = 100 TO 220 STEP 8
rowval = ASC(Char$(ch, rowy)) 'pixel row value
SELECT CASE ch
CASE 8, 10, 178, 182, 185, 186, 199, 204, 206, 215, 219, 222
PRINT STR$(rowval); 'compact the values
CASE ELSE: PRINT rowval;
END SELECT
SetCHR 25, POS(0) - 2, 11, rowval
colx = 0
FOR xx = 300 TO 356 STEP 8
IF (rowval AND 2 ^ colx) > 0 THEN
CIRCLE (xx, yy), 4, 7   'display text character as full white circles
PAINT STEP(0, 0), 15, 7
' LINE (xx - 4, yy - 4)-(xx + 3, yy + 3), 15, BF
ELSE:
CIRCLE (xx, yy), 4, 1   'display background as full blue circles
PAINT STEP(0, 0), 1
'  LINE (xx - 4, yy - 4)-(xx + 3, yy + 3), 1, BF
END IF
colx = colx + 1
NEXT
_DELAY .2
rowy = rowy + 1
NEXT
LOCATE 22, 40: PRINT SPACE$(39)
LOCATE 22, 5: COLOR 13: LINE INPUT "Enter ASCII code(1 to 255) or press key character (Enter quits): ", ch$
LOCATE 23, 2: PRINT SPACE$(78)
LOCATE 25, 4: PRINT SPACE$(75)
LOCATE 26, 4: PRINT SPACE$(75)
ch = VAL(ch$)
IF ch = 0 AND LEN(ch$) THEN ch = ASC(ch$)
LOOP UNTIL ch = 0 OR ch > 255
END

SUB SetCHR (Trow, Tcol, FG, ASCode)    'displays ASCII character value from array
Srow = 16 * (Trow - 1): Scol = 8 * (Tcol - 1) 'convert text to graphic coordinates
FOR y = 0 TO 15
ybyte$ = Char$(ASCode, y): yval = ASC(ybyte$)
FOR x = 0 TO 7
IF (yval AND 2 ^ x) > 0 THEN PSET (Scol + x, Srow + y), FG
NEXT
NEXT
END SUB

SUB TextSave
OUT &H3C8, 1: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 0 'print text as background color
COLOR 1 'hide the character printing
FOR ascii% = 0 TO 255 'Draw map of each character
_PRINTSTRING (0, 0), CHR$(ascii%) 'PRINT ASCII characters to top left corner
FOR row% = 0 TO 15 'read 16 row byte values
byte = 0 'reset value every row
FOR col% = 7 TO 0 STEP -1 'read 8 pixels from right to left
byte = byte * 2 - (POINT(col%, row%) > 0) 'bit-packing with 2 ^ bit
NEXT
Char(ascii%, row%) = CHR$(byte) 'convert row byte value to ASCII character
NEXT
NEXT
PALETTE 'restore all palette colors
END SUB
```
  
<br>

```vb
SUB DisplayText (Xpos, Ypos, FG, BG, Xsize, Ysize, text$)
x = Xpos: y = Ypos: Xoff = (8 * Xsize): L = LEN(text$)
IF BG THEN                                 'set BackGround if not 0
LINE (x - (2 * Xsize), y - Ysize)-(x + (L * Xoff), y + (16 * Ysize)), BG, BF
END IF
FOR character = 1 TO L                     'go through text chars
tx = ASC(MID$(text$, character, 1))      'get ASCII value
FOR r = 0 TO 15                          'current row of 16
FOR c = 0 TO 7 '                       'cycle through 8 bit values
IF ASC(Char(tx, r)) AND 2 ^ c THEN      'if bit is on
LINE (x, y)-(x + Xsize - 1, y + Ysize - 1), FG, BF
END IF  'adapted from code by TerryRitchie @ www.QB64.net
x = x + Xsize                        'move x position
NEXT c                                 'next bit
y = y + Ysize                          'move y position
x = Xpos                               'reset column position
NEXT r
y = Ypos                                 'reset y position
Xpos = Xpos + Xoff                       'set to next character column
NEXT character                             'next character
END SUB
```
  
<br>

```vb
'Code must be run in QB64 ONLY!
DEFINT A-Z
DIM SHARED high%  'value is shared with both SUB procedures!
DO
INPUT "Enter Screen mode 1, 2 or 7 to 13 or 256 for _NEWIMAGE: ", scr$
mode% = VAL(scr$)
LOOP UNTIL mode% > 0
SELECT CASE mode%
CASE 1, 2, 7 TO 13: SCREEN mode%
CASE 256: SCREEN _NEWIMAGE(800, 600, mode%)
CASE ELSE: PRINT "Invalid screen mode selected!": END
END SELECT

INPUT "Enter first name of TTF font to use or hit Enter for block size: ", TTFont$
IF LEN(TTFont$) THEN INPUT "Enter font height: ", hi$
height% = VAL(hi$)
IF height% > 0 THEN
fnt& = _LOADFONT("C:\Windows\Fonts\" + TTFont$ + ".ttf", height%, style$)
IF fnt& <= 0 THEN PRINT "Invalid Font handle!": END
_FONT fnt&
END IF

'add Unicode Code Page data using _MAPUNICODE here:

high% = _FONTHEIGHT: wid% = _PRINTWIDTH("W")
DIM SHARED Char(0 TO 255, 0 TO high%) AS INTEGER 'size for integer MKI$ strings up to 16 wide
TextSave 'create character pixel data

DisplayText 10, 20, 15, 2, 2, "This is a graphic test of font!"

_PRINTSTRING (10, 120), "Actual text or font size =" + STR$(wid%) + " X" + STR$(high%)

Char(0, 0) = high%  'place font height at start of array and file. Other dimension always 255
ff = FREEFILE
OPEN "FontText.bin" FOR OUTPUT AS #ff 'erase previous data
CLOSE #ff
OPEN "FontText.bin" FOR BINARY AS #ff
PUT #ff, , Char()                'PUT the entire array into a BINARY file
CLOSE #ff

END

SUB DisplayText (Xpos, Ypos, FG, Xsize, Ysize, text$)
x = Xpos: y = Ypos: L = LEN(text$)
FOR character = 1 TO L 'go through text chars
tx = ASC(MID$(text$, character, 1))               'get each letter's ASCII value
wide% = Char(tx, high%): Xoff = wide% * Xsize     'get font width from high row
FOR r% = 0 TO high% - 1                           'current row value
value% = Char(tx, r%)                           'row byte value
FOR c% = 0 TO wide% - 1                         'cycle through bit values
IF value% AND 2 ^ c% THEN 'if bit is on
LINE (x, y)-(x + Xsize - 1, y + Ysize - 1), FG, BF
END IF               'adapted from code by TerryRitchie @ www.QB64.net
x = x + Xsize                      'move x position
NEXT c%                              'next column bit
y = y + Ysize                        'move y position
x = Xpos                             'reset column position
NEXT r%
y = Ypos                               'reset y position
Xpos = Xpos + Xoff                     'set to next character column
NEXT character
END SUB

SUB TextSave
OUT &H3C8, 15: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 0 'print text as background color
FOR ascii% = 0 TO 255 'Draw map of each character
CLS
_PRINTSTRING (0, 0), CHR$(ascii%) 'PRINT ASCII characters to top left corner
wide% = _PRINTWIDTH(CHR$(ascii%))
FOR row% = 0 TO high% - 1 'read row byte values
byte% = 0 'reset value every row
FOR col% = wide% - 1 TO 0 STEP -1 'read pixels from right to left
byte% = byte% * 2 - (POINT(col%, row%) > 0) 'bit-packing with 2 ^ bit
NEXT
Char(ascii%, row%) = byte% 'convert row byte value to 2 byte MKI$ character
NEXT
Char(ascii%, high%) = wide%  'place individual font widths into array high row
NEXT
PALETTE 'restore all palette colors
END SUB
```
  
<br>

```vb
DEFINT A-Z
DIM SHARED high% 'must share with DisplayText SUB!
SCREEN _NEWIMAGE(800, 600, 256)

f = FREEFILE
OPEN "FontText.bin" FOR BINARY AS #f
GET #f, , high%   'GET the first integer value as the second array dimension
SEEK #f, 1        'SEEK moves back to the beginning of the file
PRINT high%
REDIM SHARED Char(0 TO 255, 0 TO high%) AS INTEGER  'Dynamic array
GET #f, , Char()  'one GET moves all of the data back to the array once it is sized correctly
CLOSE #f
Char(0, 0) = 0

DisplayText 10, 100, 12, 4, 4, "This is the font from the BIN file!"

END

SUB DisplayText (Xpos, Ypos, FG, Xsize, Ysize, text$)
x = Xpos: y = Ypos: L = LEN(text$)
FOR character = 1 TO L                              'go through text chars
tx = ASC(MID$(text$, character, 1))               'get ASCII value
wide% = Char(tx, high%): Xoff = wide% * Xsize     'read variable font widths
FOR r% = 0 TO high% - 1           'current row value
value% = Char(tx, r%)
FOR c% = 0 TO wide% - 1        'cycle through bit values
IF value% AND 2 ^ c% THEN 'if bit is on
LINE (x, y)-(x + Xsize - 1, y + Ysize - 1), FG, BF
END IF                'adapted from code by TerryRitchie @ www.QB64.net
x = x + Xsize                'move x position
NEXT c%                        'next bit
y = y + Ysize                  'move y position
x = Xpos                       'reset column position
NEXT r%
y = Ypos                         'reset y position
Xpos = Xpos + Xoff               'set to next character column
NEXT character
END SUB
```
  
<br>

```vb
DEFINT A-Z
SCREEN 12
DIM SHARED high% 'must share with DisplayText SUB!

f = FREEFILE
OPEN "FontText.bin" FOR BINARY AS #f
GET #f, , high% 'GET the first integer value as the second array dimension

REDIM SHARED Char(0 TO 255, 0 TO high%) AS INTEGER  'Dynamic array
ReadData (f)

DisplayText 10, 100, 12, 4, 4, "This is the font from the BIN file!"

END

SUB ReadData (f)
SEEK #f, 1                'SEEK moves back to the beginning of the file
PRINT high%
DO
FOR row = 0 TO high%    'read each row as a group of 256 values
FOR code = 0 TO 255   'read the row value for each character
GET #f, , valu%
IF EOF(f) THEN EXIT DO 'prevents bad data
Char(code, row) = valu%
NEXT: NEXT
LOOP UNTIL 1 = 1 'one time DO loop if End Of File
CLOSE #f
Char(0, 0) = 0          'remove the high% value from CHR$(0) array data
END SUB

SUB DisplayText (Xpos, Ypos, FG, Xsize, Ysize, text$)
x = Xpos: y = Ypos: L = LEN(text$)
FOR character = 1 TO L                                    'go through text chars
tx = ASC(MID$(text$, character, 1))                     'get ASCII value
wide% = Char(tx, high%): Xoff = wide% * Xsize           'read variable font widths
FOR r% = 0 TO high% - 1                                 'current row value
value% = Char(tx, r%)
FOR c% = 0 TO wide% - 1 'cycle through bit values
IF value% AND 2 ^ c% THEN 'if bit is on
LINE (x, y)-(x + Xsize - 1, y + Ysize - 1), FG, BF
END IF               'adapted from code by TerryRitchie @ www.QB64.net
x = x + Xsize               'move x position
NEXT 'next bit
y = y + Ysize 'move y position
x = Xpos 'reset column position
NEXT r%
y = Ypos 'reset y position
Xpos = Xpos + Xoff              'set to next character column
NEXT character
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PRINTSTRING](PRINTSTRING.md) , [_PRINTWIDTH](PRINTWIDTH.md)
* [_LOADFONT](LOADFONT.md) , [_FONTHEIGHT](FONTHEIGHT.md)
* [_MAPUNICODE](MAPUNICODE.md) , [_CONTROLCHR](CONTROLCHR.md)
* Boolean , [AND](AND.md)
* ASCII , Unicode , Code Pages
</blockquote>
