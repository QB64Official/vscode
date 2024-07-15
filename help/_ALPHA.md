# _ALPHA

The _ALPHA function returns the alpha channel transparency level of a color value used on a screen page or image.

  

## Syntax

*result&* = _ALPHA(*color~&* [, *imageHandle&*])
  

## Description

* If *imageHandle&* is omitted, it is assumed to be the current write page. Invalid handles will create [Illegal function call](Illegal function call.md) errors.
* [_NEWIMAGE](_NEWIMAGE.md) 32 bit [SCREEN](SCREEN.md) modes will always use an [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) *color~&* value.
	+ Color values that are set as a [_CLEARCOLOR](_CLEARCOLOR.md) always have an alpha level of 0 (transparent).
	+ [_SETALPHA](_SETALPHA.md) can set any alpha level from 0 (or fully transparent) to 255 (or opaque).
	+ Normal color values that are set by [_RGB](_RGB.md) or [_RGB32](_RGB32.md) always have an alpha level of 255(opaque).
* In 4 (16 color) or 8 (256 color) bit palette screens the function will always return 255.
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md), [_BLUE32](_BLUE32.md) and [_ALPHA32](_ALPHA32.md) are all equivalent to [_RED](_RED.md), [_GREEN](_GREEN.md), [_BLUE](_BLUE.md) and _ALPHA but they are highly optimized and only accept a 32-bit color (B8:G8:R8:A8). Using them (opposed to dividing then ANDing 32-bit color values manually) makes code easy to read.
* **NOTE: 32 bit [_NEWIMAGE](_NEWIMAGE.md) screen page backgrounds are transparent black or _ALPHA 0. Use [_DONTBLEND](_DONTBLEND.md) or [CLS](CLS.md) for opaque.**

  

## Examples

*Example 1:* Alpha transparency levels are always 255 in 4 or 8 bit screen modes.

``` [SCREEN](SCREEN.md) 13  clr~& = [_RGBA](_RGBA.md)(255, 0, 255, 192) 'returns closest palette color attribute [PRINT](PRINT.md) "Color:"; clr~&  [COLOR](COLOR.md) clr~& [PRINT](PRINT.md) "Alpha:"; _ALPHA(clr~&)  [END](END.md)  
```

``` Color 36 Alpha: 255  
```

*Explanation:* [_RGBA](_RGBA.md) cannot change the _ALPHA level. [_ALPHA32](_ALPHA32.md) would return 0 on any non-32 bit image or page.

---

*Example 2:* Finding the transparency of a 32 bit screen mode's background before and after [CLS](CLS.md).

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) BG& = [POINT](POINT.md)(1, 1) [PRINT](PRINT.md) "Alpha ="; _ALPHA(BG&); "Press a key to use CLS!" K$ = [INPUT$](INPUT$.md)(1) [CLS](CLS.md) BG& = [POINT](POINT.md)(1, 1) [PRINT](PRINT.md) "CLS Alpha ="; _ALPHA(BG&)  
```

``` CLS Alpha = 255    
```

*Explanation:* Set the ALPHA value to 255 using [CLS](CLS.md) to make the background opaque when overlaying pages.
  

## See also

* [_ALPHA32](_ALPHA32.md), [_SETALPHA](_SETALPHA.md)
* [_RGBA](_RGBA.md), [_RGBA32](_RGBA32.md) (set color with alpha)
* [_CLEARCOLOR](_CLEARCOLOR.md), [_CLEARCOLOR (function)](_CLEARCOLOR (function).md) "CLEARCOLOR (function)")
* [_RED](_RED.md), [_GREEN](_GREEN.md), [_BLUE](_BLUE.md)
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md). [_BLUE32](_BLUE32.md)
* [CLS](CLS.md), [COLOR](COLOR.md), [Images](Images.md)

  
