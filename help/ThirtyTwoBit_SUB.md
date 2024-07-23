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


## [ThirtyTwoBit SUB](ThirtyTwoBit_SUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ThirtyTwoBit%20SUB)
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`ThirtyTwoBit left_column%, top_row%, right_column%, bottom_row%, handle&, new_filename$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Copies portions or all of a Screen or image using the handle value to a new bitmap. SaveImage [SUB](SUB.md) does full screen only!
* Make sure the maximum coordinates used are one less than the screen image's size or an Illegal Function call error will occur!
* A handle value of 0 will copy the present portion of the main program screen while the screen's handle may hold a previous image.
* Can be used with 4, 8 or 24/32 bit colors. 4 BPP = 16 colors, 8 BPP = 256 colors and 24/32 BPP has 16 million colors.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'  ************************************** DEMO CODE **********************************
'
_TITLE "Demo of ThirtyTwoBit SUB by Ted Weissgerber 2010"
dst& = _NEWIMAGE(800, 600, 32) 'for console bitmap
SCREEN dst&

PAINT (799, 599), _RGB(180, 180, 180)
LINE (7, 15)-(648, 496), _RGB(0, 0, 80), BF

INPUT "Enter an image filename: ", filename$
bmp& = _LOADIMAGE(filename$, 256)
IF bmp& = -1 THEN BEEP: SYSTEM
bitmap& = _NEWIMAGE(_WIDTH(bmp&), _HEIGHT(bmp&), 256)
_COPYPALETTE bmp&, bitmap&  'adopt image color settings
_PUTIMAGE , bmp&, bitmap&   'place bitmap in screen page
_DEST 0:
_PUTIMAGE (8, 16), bitmap&  'place screen page in console

'SaveImage 0, "Savedimage.bmp" ' get full screen image with Galleon's SaveImage SUB

x2% = (_WIDTH(bmp&) - 1)
y2% = (_HEIGHT(bmp&) - 1)

ThirtyTwoBit 0, 0, x2%, y2%, bmp&, "BobSave.bmp"  ' save actual image as BMP

'              ********************** END DEMO *********************************
```
  
<br>

```vb
'****************************** Freeware by Bob Seguin *******************************
'                     Adapted for QB64 by Ted Weissgerber in 2010

'*************************************************************************************

SUB ThirtyTwoBit (x1%, y1%, x2%, y2%, image&, Filename$)
DIM Colors8%(255)
IF x1% > x2% THEN SWAP x1%, x2%
IF y1% > y2% THEN SWAP y1%, y2%
_SOURCE image&
pixelbytes& = _PIXELSIZE(image&)
IF pixelbytes& = 0 THEN BEEP: EXIT SUB 'no text screens

FileType$ = "BM"
QB64$ = "QB64" 'free advertiising in reserved bytes
IF pixelbytes& = 1 THEN OffsetBITS& = 1078 ELSE OffsetBITS& = 54 'no palette in 24/32 bit
InfoHEADER& = 40
PictureWidth& = (x2% - x1%) + 1
PictureDepth& = (y2% - y1%) + 1
NumPLANES% = 1
IF pixelbytes& = 1 THEN BPP% = 8 ELSE BPP% = 24
Compression& = 0
WidthPELS& = 3780
DepthPELS& = 3780

IF pixelbytes& = 1 THEN 'byte padder prevents image skewing
NumColors& = 256 'set 256 colors even if they are not used by the screen mode
IF (PictureWidth& MOD 4) THEN ZeroPad$ = SPACE$(4 - (PictureWidth& MOD 4))
ELSE '24/32 bit images use 3 bytes for RGB pixel values
NumColors& = 0  '24/32 bit say zero
IF ((PictureWidth& * 3) MOD 4) THEN ZeroPad$ = SPACE$((4 - ((PictureWidth& * 3) MOD 4)))
END IF

ImageSize& = (PictureWidth& + LEN(ZeroPad$)) * PictureDepth&
FileSize& = ImageSize& + OffsetBITS&
f = FREEFILE
OPEN Filename$ FOR BINARY AS #f

PUT #f, , FileType$
PUT #f, , FileSize&
PUT #f, , QB64$
PUT #f, , OffsetBITS&
PUT #f, , InfoHEADER&
PUT #f, , PictureWidth&
PUT #f, , PictureDepth&
PUT #f, , NumPLANES%
PUT #f, , BPP%
PUT #f, , Compression&
PUT #f, , ImageSize&
PUT #f, , WidthPELS&
PUT #f, , DepthPELS&
PUT #f, , NumColors&
PUT #f, , SigColors& '51 offset

IF pixelbytes& = 1 THEN '4 or 8 BPP use 256 color Palette
u$ = CHR$(0)
FOR c& = 0 TO 255 'PUT as BGR order colors
cv& = _PALETTECOLOR(c&, image&)
Colr$ = CHR$(_BLUE32(cv&))
PUT #f, , Colr$
Colr$ = CHR$(_GREEN32(cv&))
PUT #f, , Colr$
Colr$ = CHR$(_RED32(cv&))
PUT #f, , Colr$
PUT #f, , u$ 'Unused byte
NEXT
END IF

FOR y% = y2% TO y1% STEP -1 'place bottom up
FOR x% = x1% TO x2%
c& = POINT(x%, y%)
IF pixelbytes& = 1 THEN
a$ = CHR$(c&)
Colors8%(c&) = 1
ELSE: a$ = LEFT$(MKL$(c&), 3)
END IF
PUT #f, , a$
NEXT
PUT #f, , ZeroPad$
NEXT

FOR n = 0 TO 255
IF Colors8%(n) = 1 THEN SigColors& = SigColors& + 1
NEXT n
PUT #f, 51, SigColors&
CLOSE #f
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LOADIMAGE](LOADIMAGE.md)
* SaveImage [SUB](SUB.md)
* Program ScreenShots
* ThirtyTwoBit MEM [SUB](SUB.md)
* Bitmaps
</blockquote>
