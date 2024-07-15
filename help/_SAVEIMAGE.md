# _SAVEIMAGE

**_SAVEIMAGE** saves the contents of an image or screen page to an image file.

  

## Syntax

_SAVEIMAGE *fileName$*[, *imageHandle&*][, *requirements$*]
  

## Parameters

* *fileName$* is literal or variable [STRING](STRING.md) file name value.
* Optional *imageHandle&* is a [LONG](LONG.md) image handle or a valid screen page number.
* Optional *requirements$* [STRING](STRING.md) values can be:
	+ **PNG**: Saves the image as Portable Network Graphics format if no file extension is specified.
	+ **QOI**: Saves the image as Quite OK Image format if no file extension is specified.
	+ **BMP**: Saves the image as Windows Bitmap format if no file extension is specified.
	+ **TGA**: Saves the image as Truevision TARGA format if no file extension is specified.
	+ **JPG**: Saves the image as Joint Photographic Experts Group format if no file extension is specified.
	+ **HDR**: Saves the image as Radiance HDR format if no file extension is specified.

  

## Description

* *fileName$* extension name takes precedence over *requirements$*
* If no file extension is specified in *fileName$* and no format is specified in *requirements$*, then the PNG format is used by default.
* If *imageHandle&* is omitted then the image handle returned by [_DISPLAY (function)](_DISPLAY (function).md) "DISPLAY (function)") is used.
* All attempts are made to ensure the image is saved in the best possible quality in 32-bit RGBA format. Alpha channel information is preserved wherever the format allows.
* SCREEN 0 (text mode) screen and "images" can also be saved. Text surfaces are internally rendered using the master QB64-PE VGA fonts before saving.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.9.0](![v3.9.0.md)](File:Qbpe.png "v3.9.0")

**v3.9.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example 1
It's possible to use **_SAVEIMAGE** with text screens.
This demo draws a Mandelbrot in [SCREEN](SCREEN.md) 0 and then saves the screen as a .jpg image.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [CONST](CONST.md) X_MIN = -2! [CONST](CONST.md) X_MAX = 1! [CONST](CONST.md) Y_MIN = -1! [CONST](CONST.md) Y_MAX = 1! [CONST](CONST.md) MAX_ITER = 100 [CONST](CONST.md) PIX_CHAR = 48  [SCREEN](SCREEN.md) 0 [WIDTH](WIDTH.md) 160, 100 [_FONT](_FONT.md) 8  [DIM](DIM.md) w [AS](AS.md) [LONG](LONG.md): w = [_WIDTH](_WIDTH.md) "WIDTH (function)") [DIM](DIM.md) h [AS](AS.md) [LONG](LONG.md): h = [_HEIGHT](_HEIGHT.md) [DIM](DIM.md) maxX [AS](AS.md) [LONG](LONG.md): maxX = w - 1 [DIM](DIM.md) maxY [AS](AS.md) [LONG](LONG.md): maxY = h - 1  [DIM](DIM.md) y [AS](AS.md) [LONG](LONG.md): [FOR](FOR.md) y = 0 [TO](TO.md) maxY     [DIM](DIM.md) x [AS](AS.md) [LONG](LONG.md): [FOR](FOR.md) x = 0 [TO](TO.md) maxX         [DIM](DIM.md) cx [AS](AS.md) [SINGLE](SINGLE.md): cx = X_MIN + (x / w) * (X_MAX - X_MIN)         [DIM](DIM.md) cy [AS](AS.md) [SINGLE](SINGLE.md): cy = Y_MIN + (y / h) * (Y_MAX - Y_MIN)          [DIM](DIM.md) zx [AS](AS.md) [SINGLE](SINGLE.md): zx = 0         [DIM](DIM.md) zy [AS](AS.md) [SINGLE](SINGLE.md): zy = 0         [DIM](DIM.md) i [AS](AS.md) [LONG](LONG.md): i = 0          [DO UNTIL](DO UNTIL.md) zx * zx + zy * zy >= 4 [OR](OR.md) "OR (boolean)") i >= MAX_ITER             [DIM](DIM.md) temp [AS](AS.md) [SINGLE](SINGLE.md): temp = zx * zx - zy * zy + cx             zy = 2 * zx * zy + cy             zx = temp             i = i + 1         [LOOP](LOOP.md)          [COLOR](COLOR.md) i [MOD](MOD.md) 16          [_PRINTSTRING](_PRINTSTRING.md) (x + 1, y + 1), [CHR$](CHR$.md)(PIX_CHAR)     [NEXT](NEXT.md) x [NEXT](NEXT.md) y  _SAVEIMAGE "TextMandelbrot!.jpg"  [END](END.md)  
```

---

Example 2
Saving a graphics image to a .png file. This is much like example one. However, it renders the graphics to an 8-bit offscreen image and then passes the image handle to **_SAVEIMAGE**.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [CONST](CONST.md) X_MIN = -2! [CONST](CONST.md) X_MAX = 1! [CONST](CONST.md) Y_MIN = -1! [CONST](CONST.md) Y_MAX = 1! [CONST](CONST.md) MAX_ITER = 100  [DIM](DIM.md) img [AS](AS.md) [LONG](LONG.md): img = [_NEWIMAGE](_NEWIMAGE.md)(640 * 2, 400 * 2, 256) [_DEST](_DEST.md) img  [DIM](DIM.md) w [AS](AS.md) [LONG](LONG.md): w = [_WIDTH](_WIDTH.md) "WIDTH (function)") [DIM](DIM.md) h [AS](AS.md) [LONG](LONG.md): h = [_HEIGHT](_HEIGHT.md) [DIM](DIM.md) maxX [AS](AS.md) [LONG](LONG.md): maxX = w - 1 [DIM](DIM.md) maxY [AS](AS.md) [LONG](LONG.md): maxY = h - 1  [DIM](DIM.md) y [AS](AS.md) [LONG](LONG.md): [FOR](FOR.md) y = 0 [TO](TO.md) maxY     [DIM](DIM.md) x [AS](AS.md) [LONG](LONG.md): [FOR](FOR.md) x = 0 [TO](TO.md) maxX         [DIM](DIM.md) cx [AS](AS.md) [SINGLE](SINGLE.md): cx = X_MIN + (x / maxX) * (X_MAX - X_MIN)         [DIM](DIM.md) cy [AS](AS.md) [SINGLE](SINGLE.md): cy = Y_MIN + (y / maxY) * (Y_MAX - Y_MIN)          [DIM](DIM.md) zx [AS](AS.md) [SINGLE](SINGLE.md): zx = 0         [DIM](DIM.md) zy [AS](AS.md) [SINGLE](SINGLE.md): zy = 0         [DIM](DIM.md) i [AS](AS.md) [LONG](LONG.md): i = 0          [DO UNTIL](DO UNTIL.md) zx * zx + zy * zy >= 4 [OR](OR.md) "OR (boolean)") i >= MAX_ITER             [DIM](DIM.md) temp [AS](AS.md) [SINGLE](SINGLE.md): temp = zx * zx - zy * zy + cx             zy = 2 * zx * zy + cy             zx = temp             i = i + 1         [LOOP](LOOP.md)          [PSET](PSET.md) (x, y), (i [MOD](MOD.md) 16) * 16 + (i [MOD](MOD.md) 8)     [NEXT](NEXT.md) x [NEXT](NEXT.md) y  _SAVEIMAGE "Mandelbrot", img  [_DEST](_DEST.md) 0 [PRINT](PRINT.md) "Saved image."  [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_LOADIMAGE](_LOADIMAGE.md), [_ICON](_ICON.md), [$EXEICON]($EXEICON.md)
* [SCREEN](SCREEN.md)
* [TYPE](TYPE.md), [MKI$](MKI$.md), [MKL$](MKL$.md)
* [Program ScreenShots](Program ScreenShots.md)
* [ThirtyTwoBit SUB](ThirtyTwoBit SUB.md)
* [ThirtyTwoBit MEM SUB](ThirtyTwoBit MEM SUB.md)
* [SaveIcon32](SaveIcon32.md)
* [Bitmaps](Bitmaps.md), [Icons and Cursors](Icons and Cursors.md)