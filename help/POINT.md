# POINT

The **POINT** function returns the pixel [COLOR](COLOR.md) attribute at a specified graphics coordinate or the current graphic cursor position.

  

## Syntax

Graphic Color
color_attribute% = **POINT (***column%, row%***)**
Graphic cursor position
pointer_coordinate% = **POINT(**{0|1|2|3}**)**
  

## Parameters

**Graphic Color syntax:**

* The [INTEGER](INTEGER.md) *column* and *row* coordinates designate the pixel position color on the screen to read.
* The return value is an [INTEGER](INTEGER.md) palette attribute value or an [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) [_RGBA](_RGBA.md) 32 bit value in QB64.

**Graphic cursor position syntax:**

* The [INTEGER](INTEGER.md) position number can be 0 to 3 depending on the cursor position desired:
	+ POINT(0) returns the current graphic cursor [SCREEN](SCREEN.md) column pixel coordinate.
	+ POINT(1) returns the current graphic cursor [SCREEN](SCREEN.md) row pixel coordinate.
	+ POINT(2) returns the current graphic cursor [WINDOW](WINDOW.md) column position.
	+ POINT(3) returns the current graphic cursor [WINDOW](WINDOW.md) row position.
* If a [WINDOW](WINDOW.md) view port has not been established, the coordinate returned will be the [SCREEN](SCREEN.md) cursor pixel position.
* The return value is the current graphic cursor *column* or *row* pixel position on the [SCREEN](SCREEN.md) or [WINDOW](WINDOW.md).
* Graphic cursor positions returned will be the last ones used in a graphic shape such as a [CIRCLE](CIRCLE.md) center point.

  

*Usage:*

* Use **[_SOURCE](_SOURCE.md)** first to set the image handle that POINT should read or QB64 will assume the current source image.

**_SOURCE 0** 'sets POINT to read the current SCREEN image after reading a previous source image
* **POINT cannot be used in SCREEN 0!** Use the [SCREEN](SCREEN.md) "SCREEN (function)") function to point text character codes and colors in SCREEN 0.

  

* The [INTEGER](INTEGER.md) color attributes returned are limited by the number of colors in the legacy SCREEN mode used.
* *Column* and *row* [INTEGER](INTEGER.md) parameters denote the graphic pixel coordinate to read.
* In **QB64** the offscreen or off image value returned is -1. Use IF POINT(x, y) <> -1 THEN...
* In QBasic the coordinates MUST be on the screen or an [Illegal Function Call error](Illegal Function Call error.md) will occur.

  

* Returns [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) 32 bit color values. Use [_UNSIGNED](_UNSIGNED.md) values when you don't want negative values.
* **[_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) variables should be used when comparing POINT returns with [_RGB](_RGB.md) or [_RGB32](_RGB32.md) [_ALPHA](_ALPHA.md) bit values**
* Convert 32 bit color values to RGB intensities(0 to 255) using the [_RED32](_RED32.md), [_GREEN32](_GREEN32.md) and [_BLUE32](_BLUE32.md) functions.
* To convert color intensities to OUT &H3C9 color port palette intensity values divide the values of 0 to 255 by 4.
* Use the [_PALETTECOLOR (function)](_PALETTECOLOR (function).md) "PALETTECOLOR (function)") to convert color port palette intensities in 32 bit modes.

  

*Example 1:* How [_RGB](_RGB.md) 32 bit values return [DOUBLE](DOUBLE.md) or [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) values in QB64.

``` [DIM](DIM.md) clr [AS](AS.md) [LONG](LONG.md) 'DO NOT use LONG in older versions of QB64 (V .936 down) [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) [CLS](CLS.md) , [_RGB](_RGB.md)(255, 255, 255)  'makes the background opaque white  [PRINT](PRINT.md) "POINT(100, 100) ="; POINT(100, 100) clr = POINT(100, 100) [PRINT](PRINT.md) "Variable clr = ";  clr [IF](IF.md) clr = [_RGB](_RGB.md)(255, 255, 255) [THEN](THEN.md) [PRINT](PRINT.md) "Long OK" [IF](IF.md) POINT(100, 100) = [_RGB](_RGB.md)(255, 255, 255) [THEN](THEN.md) [PRINT](PRINT.md) "_RGB OK" [IF](IF.md) POINT(100, 100) = clr [THEN](THEN.md) [PRINT](PRINT.md) "Type OK" 'will not print with a LONG variable type  
```

**Note:** Change the [DIM](DIM.md) *clr* variable type to [LONG](LONG.md) to see how the last [IF](IF.md) statement doesn't [PRINT](PRINT.md) as shown in the output below:

``` POINT(100, 100) = 4294967295 Variable clr = -1 Long OK _RGB OK  
```

  

*Example 2:* Using a POINT mouse routine to get the 32 bit color values of the image.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) [_TITLE](_TITLE.md) "Mouse POINTer 32"   '[LINE INPUT](LINE INPUT.md) "Enter an image file: ", image$  'use quotes around file names with spaces image$ = "QB64bee.png" 'any 24/32 bit image up to 320 X 240 with current [_PUTIMAGE](_PUTIMAGE.md) settings i& = [_LOADIMAGE](_LOADIMAGE.md)(image$, 32) [IF](IF.md) i& >= -1 [THEN](THEN.md) [BEEP](BEEP.md): [PRINT](PRINT.md) "Could [NOT](NOT.md) load image!": [END](END.md) w& = [_WIDTH](_WIDTH.md) "WIDTH (function)")(i&): h& = [_HEIGHT](_HEIGHT.md)(i&)  [PRINT](PRINT.md) "Make background transparent?(Y\N)"; BG$ = [UCASE$](UCASE$.md)([INPUT$](INPUT$.md)(1)) [PRINT](PRINT.md) BG$ [_DELAY](_DELAY.md) 1  '[CLS](CLS.md) 'commented to keep background alpha 0  [IF](IF.md) BG$ = "Y" [THEN](THEN.md) [_CLEARCOLOR](_CLEARCOLOR.md) [_RGB32](_RGB32.md)(255, 255, 255), i& 'make white Background transparent [_PUTIMAGE](_PUTIMAGE.md) (320 - w&, 240 - h&)-((2 * w&) + (320 - w&), (2 * h&) + (240 - h&)), i&, 0 [_FREEIMAGE](_FREEIMAGE.md) i&  [_MOUSEMOVE](_MOUSEMOVE.md) 320, 240 'center mouse pointer on screen  [DO](DO.md): [_LIMIT](_LIMIT.md) 100   [DO](DO.md) [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)     mx = [_MOUSEX](_MOUSEX.md)     my = [_MOUSEY](_MOUSEY.md)     c& = POINT(mx, my)     r = [_RED32](_RED32.md)(c&)     g = [_GREEN32](_GREEN32.md)(c&)     b = [_BLUE32](_BLUE32.md)(c&)     a = [_ALPHA32](_ALPHA32.md)(c&)     [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) mx; my, "R:"; r, "G:"; g, "B:"; b, "A:"; a; "  "     [LOCATE](LOCATE.md) 2, 2: [PRINT](PRINT.md) "HTML Color: [&H](&H.md)" + [RIGHT$](RIGHT$.md)([HEX$](HEX$.md)(c&), 6)   [LOOP](LOOP.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) > "" [END](END.md)  
```

*Explanation:* Use the mouse pointer to get the background RGB of the image to make it transparent with [_CLEARCOLOR](_CLEARCOLOR.md).
  

*Snippet:* Creating an image mask to PUT an image over other colored backgrounds. See: [GET and PUT Demo](GET and PUT Demo.md) to run code.

```  FOR c = 0 TO 59    '60 X 60 area from 0 pixel    FOR r = 0 TO 59     IF POINT(c, r) = 0 THEN [PSET](PSET.md) (c, r), 15 ELSE PSET (c, r), 0    NEXT r  NEXT c  [GET](GET.md) "GET (graphics statement)")(0, 0)-(60, 60), Image(1500) ' save mask in an array(indexed above original image).  
```

*Explanation:* In the procedure all black areas(background) are changed to white for a PUT using AND over other colored objects. The other image colors are changed to black for a PUT of the original image using XOR. The array images can be [BSAVEd](BSAVEd.md) for later use. **QB64 can also** [PUT](PUT.md) **a full screen 12 image from an array directly into a** [BINARY](BINARY.md) **file.**
### More Examples

* [SaveImage SUB](SaveImage SUB.md)
* [Program ScreenShots](Program ScreenShots.md)
* [ThirtyTwoBit SUB](ThirtyTwoBit SUB.md)
* [ThirtyTwoBit MEM SUB](ThirtyTwoBit MEM SUB.md)

  

## See also

* [_NEWIMAGE](_NEWIMAGE.md), [_LOADIMAGE](_LOADIMAGE.md)
* [_MEMIMAGE](_MEMIMAGE.md), [_MEMGET](_MEMGET.md)
* [PSET](PSET.md), [PRESET](PRESET.md)
* [SCREEN](SCREEN.md), [SCREEN (function)](SCREEN (function).md) "SCREEN (function)")
* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)"), [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [Bitmaps](Bitmaps.md), [Creating Sprite Masks](Creating Sprite Masks.md), [Text Using Graphics](Text Using Graphics.md)

  
