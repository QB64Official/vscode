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


## [_SAVEIMAGE](SAVEIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SAVEIMAGE)
---
<blockquote>

### _SAVEIMAGE saves the contents of an image or screen page to an image file.

</blockquote>

#### SYNTAX

<blockquote>

`_SAVEIMAGE fileName$ [, imageHandle& ][, requirements$ ]`

</blockquote>

#### PARAMETERS

<blockquote>


* fileName$ is literal or variable [STRING](STRING.md) file name value.
* Optional imageHandle& is a [LONG](LONG.md) image handle or a valid screen page number.
* Optional requirements$ [STRING](STRING.md) values can be:
* BMP : Saves the image as Windows Bitmap if no file extension is specified.
* GIF : Saves the image as Graphics Interchange Format if no file extension is specified.
* HDR : Saves the image as Radiance HDR if no file extension is specified.
* ICO : Saves the image as Windows Icon if no file extension is specified.
* JPG : Saves the image as Joint Photographic Experts Group if no file extension is specified.
* PNG : Saves the image as Portable Network Graphics if no file extension is specified.
* QOI : Saves the image as Quite OK Image if no file extension is specified.
* TGA : Saves the image as Truevision TARGA if no file extension is specified.
</blockquote>

#### DESCRIPTION

<blockquote>


* fileName$ extension name takes precedence over requirements$
* If no file extension is specified in fileName$ and no format is specified in requirements$ , then the PNG format is used by default.
* If imageHandle& is omitted then the image handle returned by [_DISPLAY](DISPLAY.md) (function) is used.
* Efforts are made to save the image in the highest quality possible using 32-bit RGBA format, ensuring that alpha channel information is retained whenever the format permits.
* Due to the inherent limitations of GIFs, these images are stored in an 8-bit indexed format, which results in a reduction of quality and color detail.
* Windows ICO files utilize the PNG specification, which enables the storage of images exceeding 256x256 pixels in size.
* [SCREEN](SCREEN.md) 0 (text mode) screens and "images" can be saved. Text surfaces are rendered internally using the master QB64-PE VGA fonts prior to saving.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
OPTION _EXPLICIT

CONST X_MIN = -2!
CONST X_MAX = 1!
CONST Y_MIN = -1!
CONST Y_MAX = 1!
CONST MAX_ITER = 100
CONST PIX_CHAR = 48

SCREEN 0
WIDTH 160, 100
_FONT 8

DIM w AS LONG: w = _WIDTH
DIM h AS LONG: h = _HEIGHT
DIM maxX AS LONG: maxX = w - 1
DIM maxY AS LONG: maxY = h - 1

DIM y AS LONG: FOR y = 0 TO maxY
DIM x AS LONG: FOR x = 0 TO maxX
DIM cx AS SINGLE: cx = X_MIN + (x / w) * (X_MAX - X_MIN)
DIM cy AS SINGLE: cy = Y_MIN + (y / h) * (Y_MAX - Y_MIN)

DIM zx AS SINGLE: zx = 0
DIM zy AS SINGLE: zy = 0
DIM i AS LONG: i = 0

DO UNTIL zx * zx + zy * zy >= 4 OR i >= MAX_ITER
DIM temp AS SINGLE: temp = zx * zx - zy * zy + cx
zy = 2 * zx * zy + cy
zx = temp
i = i + 1
LOOP

COLOR i MOD 16

_PRINTSTRING (x + 1, y + 1), CHR$(PIX_CHAR)
NEXT x
NEXT y

_SAVEIMAGE "TextMandelbrot!.jpg"

END
```
  
<br>

```vb
OPTION _EXPLICIT

CONST X_MIN = -2!
CONST X_MAX = 1!
CONST Y_MIN = -1!
CONST Y_MAX = 1!
CONST MAX_ITER = 100

DIM img AS LONG: img = _NEWIMAGE(640 * 2, 400 * 2, 256)
_DEST img

DIM w AS LONG: w = _WIDTH
DIM h AS LONG: h = _HEIGHT
DIM maxX AS LONG: maxX = w - 1
DIM maxY AS LONG: maxY = h - 1

DIM y AS LONG: FOR y = 0 TO maxY
DIM x AS LONG: FOR x = 0 TO maxX
DIM cx AS SINGLE: cx = X_MIN + (x / maxX) * (X_MAX - X_MIN)
DIM cy AS SINGLE: cy = Y_MIN + (y / maxY) * (Y_MAX - Y_MIN)

DIM zx AS SINGLE: zx = 0
DIM zy AS SINGLE: zy = 0
DIM i AS LONG: i = 0

DO UNTIL zx * zx + zy * zy >= 4 OR i >= MAX_ITER
DIM temp AS SINGLE: temp = zx * zx - zy * zy + cx
zy = 2 * zx * zy + cy
zx = temp
i = i + 1
LOOP

PSET (x, y), (i MOD 16) * 16 + (i MOD 8)
NEXT x
NEXT y

_SAVEIMAGE "Mandelbrot", img

_DEST 0
PRINT "Saved image."

END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_LOADIMAGE](LOADIMAGE.md) , [_ICON](ICON.md) , [&dollar;EXEICON](&dollar;EXEICON.md)
* [SCREEN](SCREEN.md)
* [TYPE](TYPE.md) , [MKI&dollar;](MKI&dollar;.md) , [MKL&dollar;](MKL&dollar;.md)
* Program ScreenShots
* ThirtyTwoBit [SUB](SUB.md)
* ThirtyTwoBit MEM [SUB](SUB.md)
* SaveIcon32
* Bitmaps , Icons and Cursors
* Text Using Graphics
</blockquote>
