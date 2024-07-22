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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [Bitmaps](Bitmaps.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Bitmaps)
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`In BINARY files, numerical data can also be converted to ASCII characters by using MKI$ for INTEGERs or MKL$ for LONG values. GET can convert _MK$ values to numerical values and PUT can convert numerical values to STRING values. When the LONG MKL$ color values are PUT into bitmaps the Red value is placed as the third ASCII character and the blue becomes the first character. That not only happens to the BGR palette data, but the BGR 24 bit image color values PUT using the left 3 bytes.`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'Bitmap.BI can be included at start of program

TYPE BMPEntry              ' Description                          Bytes    QB64 Function
ID AS STRING * 2        ' File ID("BM" text or 19778 AS Integer) 2      CVI("BM")
Size AS LONG            ' Total Size of the file                 4      LOF
Res1 AS INTEGER         ' Reserved 1 always 0                    2
Res2 AS INTEGER         ' Reserved 2 always 0                    2
Offset AS LONG          ' Start offset of image pixel data       4      (add one for GET)
END TYPE                   '                                 Total 14

TYPE BMPHeader          'BMP header also used in Icon and Cursor files(.ICO and .CUR)
Hsize AS LONG           ' Info header size (always 40)           4
PWidth AS LONG          ' Image width                            4      _WIDTH(handle&)
PDepth AS LONG          ' Image height (doubled in icons)        4      _HEIGHT(handle&)
Planes AS INTEGER       ' Number of planes (normally 1)          2
BPP AS INTEGER          ' Bits per pixel(palette 1, 4, 8, 24)    2      _PIXELSIZE(handle&)
Compression AS LONG     ' Compression type(normally 0)           4
ImageBytes AS LONG      ' (Width + padder) * Height              4
Xres AS LONG            ' Width in PELS per metre(normally 0)    4
Yres AS LONG            ' Depth in PELS per metre(normally 0)    4
NumColors AS LONG       ' Number of Colors(normally 0)           4       2 ^ BPP
SigColors AS LONG       ' Significant Colors(normally 0)         4
END TYPE                   '                 Total Header bytes =  40
```
  
<br>```vb
'$INCLUDE: 'Bitmap.BI'  'use only when including a BI file

DIM SHARED ENT AS BMPEntry
DIM SHARED BMP AS BMPHeader
LINE INPUT "Enter a bitmap file name: ", file$ '<<<< enter a bitmap file name

OPEN file$ FOR BINARY AS #1
GET #1, 1, ENT   'get entry header(1 is first file byte in QB64 and QBasic)
GET #1, , BMP    'get bitmap header information

PRINT "Size:"; ENT.Size; "bytes, Offset:"; ENT.Offset
PRINT BMP.PWidth; "X"; BMP.PDepth
PRINT "BPP ="; BMP.BPP
CLOSE #1
```
  
<br>```vb
GET (0, 0)-(BMP.PWidth - 1, BMP.PDepth - 1), Image(48) 'index after 16 * 3 RGB palette colors(0 to 47)
```
  
<br>```vb
BITMAP COMPRESSION METHODS

Value	Identified by	Compression method	Comments
0	BI_RGB	            none	       Most common
1	BI_RLE8	        * RLE 8-bit/pixel      Used only with 8-bit/pixel bitmaps
2	BI_RLE4	        * RLE 4-bit/pixel      Used only with 4-bit/pixel bitmaps
3	BI_BITFIELDS	  Bit field            Used only with 16 and 32-bit/pixel bitmaps.
4	BI_JPEG	          JPEG	               Bitmap contains a JPEG image
5	BI_PNG	          PNG	               Bitmap contains a PNG image

* RLE stands for Run Length Encoding which counts the number of consecutive pixels
that are of the same color instead of assigning each pixel color separately.
```
  
<br>```vb
Windows/OS2 Bitmaps

┌─────────┐
│BMP Entry│
│ 14 Byte │
│─────────│
│ Bitmap  │
│ Header  │
│ 40 Byte │
└────┬────┘
┌─────────┬────┴────┬─────────┐
│     ┌───┴───┐ ┌───┴───┐     │
│     │ 4 BPP │ │ 8 BPP │     │
│     │Palette│ │Palette│     │
│     │64 Byte│ │1024 B │     │
┌───┴───┐ └───┬───┘ └───┬───┘ ┌───┴───┐
│ 1 BPP │ ┌───┴───┐ ┌───┴───┐ │24 BPP │
│ IMAGE │ │ IMAGE │ │ IMAGE │ │ IMAGE │
│ DATA  │ │ DATA  │ │ DATA  │ │ DATA  │
│(W*H)\8│ │(W*H)\2│ │(W*H)*1│ │(W*H)*3│
│ bytes │ │ bytes │ │ bytes │ │ bytes │
└───────┘ └───────┘ └───────┘ └───────┘
```
  
<br>```vb
SCREEN 13 '8 bit, 256 color screen mode
Q$ = CHR$(34)
INPUT "Enter a color number 1 to 255: ", colour
PRINT
OUT &H3C7, colour
red = INP(&H3C9) * 4
green = INP(&H3C9) * 4
blue = INP(&H3C9) * 4
alpha = 0 'alpha values > 127 in _RGBA or _RGBA32 should use _UNSIGNED LONG

COLOR _RGB(red, green, blue) 'returns closest attribute in 4 or 8 bit screen modes
rgba~& = _RGBA32(red, green, blue, alpha) 'alpha is actually highest byte
PRINT "RGBA ="; red; green; blue; alpha
PRINT "_RGBA32 ="; rgba~&; " &H"; HEX$(rgba~&)

_PRINTSTRING (40, 40), "BGR0 = " + Q$ + MKL$(rgba~&) + Q$ 'rightmost always CHR$(0) spacer

END
```
  
<br>```vb
SUB OneBit          'Any Screen as Black and White
BitsOver = BMP.PWidth MOD 32  'check bitmap width for 4 byte or odd width
IF BitsOver THEN ZeroPAD$ = SPACE$((32 - BitsOver) \ 8) '16 and 48 wide have 2 byte padder
y = BMPHead.PDepth - 1: o$ = " "
GET #1, BMP.Offset, o$  ' offset is last byte of BMP header data (NO Palette)
a$ = " "       'define a one byte string to read ASCII characters
DO
x = 0
DO
GET #1, , a$
CharVAL = ASC(a$)        'ASCII value cannot use _BYTE
Bit = 128                   'start at MSB
FOR BitCOUNT = 1 TO 8
IF CharVAL AND Bit THEN
PSET (x, y), _RGB(255, 255, 255) '_RGB works in 1, 4, 8 or 32 bit screen mode
ELSE PSET (x, y), _RGB(0, 0, 0) 'set pixels on as white
END IF
Bit = Bit / 2            'decrease exponent of 2 bit value
x = x + 1                'move one pixel to the right
NEXT BitCOUNT
LOOP WHILE x < BMP.PWidth
GET #1, , ZeroPAD$             'skip the padder bytes if any
y = y - 1                      'move up one row from bottom
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
SUB FourBIT  ' 4 bit(16 color) Screens 7, 8, 9, 12 or 13
IF BMP.PWidth MOD 8 THEN ZeroPAD$ = SPACE$((8 - BMP.PWidth MOD 8) \ 2)
a$ = " "
OUT &H3C8, 0                         'start at attribute 0
FOR Colr = 0 TO 15        'read palette data for intensities
GET #1, , a$: Blu = ASC(a$) \ 4  'intensity is divided by 4 to use OUT
GET #1, , a$: Grn = ASC(a$) \ 4
GET #1, , a$: Red = ASC(a$) \ 4
OUT &H3C9, Red          'NOTE: RGB settings could also be sent directly to an
OUT &H3C9, Grn          'array when the data is to be stored by a file using
OUT &H3C9, Blu          'BSAVE or with one PUT # to a BINARY file in QB64
GET #1, , a$          '--- skip unused spacer byte
NEXT Colr
o$ = " "
GET #1, BMP.Offset, o$    'Offset is the last byte of palette data
y = BMP.PDepth - 1: a$ = " "
DO
x = 0                             'image placed at left side of screen
DO
GET #1, , a$
HiNIBBLE = ASC(a$) \ &H10       'ASCII value divided by 16 colors
LoNIBBLE = ASC(a$) AND &HF      'ASCII value AND 15
PSET (x, y), HiNIBBLE
x = x + 1
PSET (x, y), LoNIBBLE
x = x + 1
LOOP WHILE x < BMPHead.PWidth
GET #1, , ZeroPAD$           'skip padder bytes if any
y = y - 1                    'move up one row from bottom
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
SUB EightBIT   ' 8 Bit (256 color) Screen 13 Only
IF BMP.PWidth MOD 4 THEN ZeroPAD$ = SPACE$(4 - (BMP.PWidth MOD 4)) 'check for padder
a$ = " "
OUT &H3C8, 0                           'start at attribute 0
FOR Colr = 0 TO 255
GET #1, , a$: Blu = ASC(a$) \ 4
GET #1, , a$: Grn = ASC(a$) \ 4
GET #1, , a$: Red = ASC(a$) \ 4
OUT &H3C9, Red
OUT &H3C9, Grn
OUT &H3C9, Blu
GET #1, , a$                        '--- skip unused spacer byte
NEXT Colr
y = BMP.PDepth - 1: o$ = " "
GET #1, BMP.Offset, o$   'Offset is last byte of palette data.
p$ = " "
DO: x = 0
DO
GET #1, , p$
PSET (x, y), ASC(p$)
x = x + 1
LOOP WHILE x < BMP.PWidth
GET #1, , ZeroPAD$                  'skip padder if any
y = y - 1                            'move up one row from bottom
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
SUB TrueCOLOR            '24/32 BIT
IF ((BMP.PWidth * 3) MOD 4) <> 0 THEN        '3 byte pixels
ZeroPAD$ = SPACE$((4 - ((BMP.PWidth * 3) MOD 4)))
END IF
y = BMP.PDepth - 1: o$ = " "
GET #1, BMP.Offset, o$       'Offset is last byte of BMP header data
R$ = " "
G$ = " "
B$ = " "
DO
x = 0                               'place image to left side of screen
DO
GET #1, , B$             'intensities read in reverse order BGR like palette
GET #1, , G$
GET #1, , R$
red& = ASC(R$)           'read ASCII code value 0 to 255 (or use _UNSIGNED _BYTE)
green& = ASC(G$)
blue& = ASC(B$)
PSET (x, y), _RGB(red&, green&, blue&) 'legacy screens give closest 4 or 8 bit attribute
x = x + 1
LOOP WHILE x < BMP.PWidth
GET #1, , ZeroPAD$         'skip padder if any
y = y - 1                         'move up one row from bottom
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
pixelcolor$ = LEFT$(MKL$(_RGB(red%, green%, blue%)), 3)
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_LOADIMAGE](LOADIMAGE.md)  , [_PUTIMAGE](PUTIMAGE.md) 
*  [SCREEN](SCREEN.md) 
*  [TYPE](TYPE.md)  , [_ICON](ICON.md) 
*  Icons and Cursors
*  GIF Images
*  Bitmap Extraction from EXE
*  $EXEICON (Icons viewed in Windows Explorer)

</blockquote>
