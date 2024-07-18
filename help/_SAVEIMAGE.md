## _SAVEIMAGE
---

### _SAVEIMAGE saves the contents of an image or screen page to an image file.

#### SYNTAX

`_SAVEIMAGE fileName$ [, imageHandle& ][, requirements$ ]`

#### PARAMETERS
* fileName$ is literal or variable [STRING](./STRING.md) file name value.
* Optional imageHandle& is a [LONG](./LONG.md) image handle or a valid screen page number.
* Optional requirements$ [STRING](./STRING.md) values can be:
	* PNG : Saves the image as Portable Network Graphics format if no file extension is specified.
	* QOI : Saves the image as Quite OK Image format if no file extension is specified.
	* BMP : Saves the image as Windows Bitmap format if no file extension is specified.
	* TGA : Saves the image as Truevision TARGA format if no file extension is specified.
	* JPG : Saves the image as Joint Photographic Experts Group format if no file extension is specified.
	* HDR : Saves the image as Radiance HDR format if no file extension is specified.


#### DESCRIPTION
* fileName$ extension name takes precedence over requirements$
* If no file extension is specified in fileName$ and no format is specified in requirements$ , then the PNG format is used by default.
* If imageHandle& is omitted then the image handle returned by [_DISPLAY](./_DISPLAY.md) (function) is used.
* All attempts are made to ensure the image is saved in the best possible quality in 32-bit RGBA format. Alpha channel information is preserved wherever the format allows.
* [SCREEN](./SCREEN.md) 0 (text mode) screen and "images" can also be saved. Text surfaces are internally rendered using the master QB64-PE VGA fonts before saving.


#### EXAMPLES
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
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_LOADIMAGE](./_LOADIMAGE.md) , [_ICON](./_ICON.md) , $EXEICON
* [SCREEN](./SCREEN.md)
* [TYPE](./TYPE.md) , MKI$ , MKL$
* Program ScreenShots
* ThirtyTwoBit [SUB](./SUB.md)
* ThirtyTwoBit MEM [SUB](./SUB.md)
* SaveIcon32
* Bitmaps , Icons and Cursors
* Text Using Graphics
