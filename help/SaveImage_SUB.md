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


## [SaveImage SUB](SaveImage_SUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SaveImage%20SUB)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'load a 32 bit .PNG file image
i& = _LOADIMAGE("source\peLogo.png", 32)
IF i& < -1 THEN
'load success: get image's width/height
w& = _WIDTH(i&): h& = _HEIGHT(i&)
'TEST-1: directly save the loaded image as .BMP file "logo.bmp"
SaveImage i&, "logo"
'TEST-2: make a new 4:3 program SCREEN of the loaded image's width/height
SCREEN _NEWIMAGE((4 * w&), (3 * h&), 32)
'now tile-fill the screen with the loaded image
FOR x& = 0 TO (4 * w&) STEP w&
FOR y& = 0 TO (3 * h&) STEP h&
_PUTIMAGE (x&, y&), i&
NEXT y&
NEXT x&
'and then save the entire program screen as "screenshot.bmp"
SaveImage 0, "screenshot"
ELSE
'load failure: print error
PRINT "Cannot find/load the given image."
END IF
END

SUB SaveImage (image AS LONG, filename AS STRING)
bytesperpixel& = _PIXELSIZE(image&)
IF bytesperpixel& = 0 THEN PRINT "Text modes unsupported!": END
IF bytesperpixel& = 1 THEN bpp& = 8 ELSE bpp& = 24
x& = _WIDTH(image&)
y& = _HEIGHT(image&)
b$ = "BM????QB64????" + MKL$(40) + MKL$(x&) + MKL$(y&) + MKI$(1) + MKI$(bpp&) + MKL$(0) + "????" + STRING$(16, 0) 'partial BMP header info(???? to be filled later)
IF bytesperpixel& = 1 THEN
FOR c& = 0 TO 255 ' read BGR color settings from JPG image + 1 byte spacer(CHR$(0))
cv& = _PALETTECOLOR(c&, image&) ' color attribute to read.
b$ = b$ + CHR$(_BLUE32(cv&)) + CHR$(_GREEN32(cv&)) + CHR$(_RED32(cv&)) + CHR$(0) 'spacer byte
NEXT
END IF
MID$(b$, 11, 4) = MKL$(LEN(b$)) ' image pixel data offset(BMP header)
lastsource& = _SOURCE
_SOURCE image&
IF ((x& * 3) MOD 4) THEN padder$ = STRING$(4 - ((x& * 3) MOD 4), 0)
FOR py& = y& - 1 TO 0 STEP -1 ' read JPG image pixel color data
r$ = ""
FOR px& = 0 TO x& - 1
c& = POINT(px&, py&) 'POINT 32 bit values are large LONG values
IF bytesperpixel& = 1 THEN r$ = r$ + CHR$(c&) ELSE r$ = r$ + LEFT$(MKL$(c&), 3)
NEXT px&
d$ = d$ + r$ + padder$
NEXT py&
_SOURCE lastsource&
MID$(b$, 35, 4) = MKL$(LEN(d$)) ' image size(BMP header)
b$ = b$ + d$ ' total file data bytes to create file
MID$(b$, 3, 4) = MKL$(LEN(b$)) ' size of data file(BMP header)
IF LCASE$(RIGHT$(filename$, 4)) <> ".bmp" THEN ext$ = ".bmp"
f& = FREEFILE
OPEN filename$ + ext$ FOR OUTPUT AS #f&: CLOSE #f& ' erases an existing file
OPEN filename$ + ext$ FOR BINARY AS #f&
PUT #f&, , b$
CLOSE #f&
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LOADIMAGE](LOADIMAGE.md) , [_ICON](ICON.md) , [&dollar;EXEICON](&dollar;EXEICON.md)
* [SCREEN](SCREEN.md)
* [TYPE](TYPE.md) , [MKI&dollar;](MKI&dollar;.md) , [MKL&dollar;](MKL&dollar;.md)
* Program ScreenShots (member [SUB](SUB.md) program)
* ThirtyTwoBit [SUB](SUB.md) (member [SUB](SUB.md) captures selected area)
* ThirtyTwoBit MEM [SUB](SUB.md) (Fast [SUB](SUB.md) uses memory instead of POINT)
* SaveIcon32 (converts any image to icon)
* Bitmaps , Icons and Cursors
</blockquote>
