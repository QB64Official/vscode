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


## [ThirtyTwoBit MEM SUB](ThirtyTwoBit_MEM_SUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ThirtyTwoBit%20MEM%20SUB)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
PRINT "This program will create a 32 bit bitmap of the desktop!"
PRINT "                 IN 2 SECONDS..."
_DELAY 2

picture& = _SCREENIMAGE
x1% = 0: y1% = 0
x2% = _WIDTH(picture&) - 1
y2% = _HEIGHT(picture&) - 1


SaveBMP32 x1%, x2%, y1%, y2%, picture&, "ScreenShot.bmp"
```
  
<br>

```vb
SUB SaveBMP32 (x1%, x2%, y1%, y2%, image&, Filename$)

TYPE BMPFormat ' Description                          Bytes    QB64 Function
ID AS STRING * 2 'File ID("BM" or 19778 AS Integer) 2  CVI("BM")
Size AS LONG ' Total Size of the file               4  LOF
Blank AS LONG ' Reserved                            4
Offset AS LONG ' Start offset of image pixel data   4 (add one for GET)
Hsize AS LONG ' Info header size (always 40)        4
PWidth AS LONG ' Image width                        4  _WIDTH(handle&)
PDepth AS LONG ' Image height (doubled in icons)    4  _HEIGHT(handle&)
Planes AS INTEGER ' Number of planes (normally 1)   2
BPP AS INTEGER 'Bits per pixel(palette 1, 4, 8, 24) 2  _PIXELSIZE(handle&)
Compression AS LONG ' Compression type(normally 0)  4
ImageBytes AS LONG ' (Width + padder) * Height      4
Xres AS LONG ' Width in PELS per metre(normally 0)  4
Yres AS LONG ' Depth in PELS per metre(normally 0)  4
NumColors AS LONG ' Number of Colors(normally 0)    4    2 ^ BPP
SigColors AS LONG ' Significant Colors(normally 0)  4
END TYPE '                     ' Total Header bytes =  54

DIM BMP AS BMPFormat
DIM x AS LONG, y AS LONG
DIM temp AS STRING * 3
DIM m AS _MEM, n AS _MEM
DIM o AS _OFFSET
m = _MEMIMAGE(image&) 'get image information from memory handle
DIM Colors8%(255)

IF x1% > x2% THEN SWAP x1%, x2%
IF y1% > y2% THEN SWAP y1%, y2%
_SOURCE image&
pixelbytes& = 4
OffsetBITS& = 54 'no palette in 24/32 bit
BPP% = 24
NumColors& = 0 '24/32 bit say zero
BMP.PWidth = (x2% - x1%) + 1
BMP.PDepth = (y2% - y1%) + 1

ImageSize& = BMP.PWidth * BMP.PDepth

BMP.ID = "BM"
BMP.Size = ImageSize& * 3 + 54
BMP.Blank = 0
BMP.Offset = 54
BMP.Hsize = 40
BMP.Planes = 1
BMP.BPP = 24
BMP.Compression = 0
BMP.ImageBytes = ImageSize&
BMP.Xres = 3780
BMP.Yres = 3780
BMP.NumColors = 0
BMP.SigColors = 0

Compression& = 0
WidthPELS& = 3780
DepthPELS& = 3780
SigColors& = 0
f = FREEFILE
n = _MEMNEW(BMP.Size) 'allocate memory for file data
_MEMPUT n, n.OFFSET, BMP 'place bitmap header in memory
o = n.OFFSET + 54   'offset after header for RGB color data
'                   'run memory reads without error checking!
$CHECKING:OFF
y = y2% + 1
w& = _WIDTH(image&)
DO
y = y - 1: x = x1% - 1
DO
x = x + 1
_MEMGET m, m.OFFSET + (w& * y + x) * 4, temp 'read 3 color bytes
_MEMPUT n, o, temp  'place into n memory after o offset
o = o + 3  'increase offset 3 bytes per loop
LOOP UNTIL x = x2%
LOOP UNTIL y = y1%
$CHECKING:ON
_MEMFREE m
OPEN Filename$ FOR BINARY AS #f
t$ = SPACE$(BMP.Size)
_MEMGET n, n.OFFSET, t$
PUT #f, , t$
_MEMFREE n
CLOSE #f
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* SaveImage [SUB](SUB.md)
* Program ScreenShots
* ThirtyTwoBit [SUB](SUB.md)
</blockquote>
