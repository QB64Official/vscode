# _ALPHA32

The _ALPHA32 function returns the alpha transparency level of a 32 bit color value.

  

## Syntax

*alpha&* = _ALPHA32(*color32~&*)
  

## Parameters

* *color32&* is the [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) 32 bit color value used to retrieve the alpha level.
	+ Color values that are set as a [_CLEARCOLOR](_CLEARCOLOR.md) always have an alpha level of 0 (transparent).
	+ [_SETALPHA](_SETALPHA.md) can set any alpha level from 0 (or fully transparent) to 255 (or opaque).
	+ Normal color values that are set by [_RGB](_RGB.md) or [_RGB32](_RGB32.md) always have an alpha level of 255 (opaque).

  

## Description

* In 4-bit (16 colors) or 8-bit (256 colors) palette screens the function will return 0.
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md), [_BLUE32](_BLUE32.md) and _ALPHA32 are all equivalent to [_RED](_RED.md), [_GREEN](_GREEN.md), [_BLUE](_BLUE.md) and [_ALPHA](_ALPHA.md) but they are highly optimized and only accept a 32-bit color (RGBA) value. Using these in your code (opposed to dividing then ANDing 32-bit color values) makes code easy to read.
* **NOTE: 32 bit [_NEWIMAGE](_NEWIMAGE.md) screen page backgrounds are transparent black or [_ALPHA](_ALPHA.md) 0. Use [_DONTBLEND](_DONTBLEND.md) or [CLS](CLS.md) for opaque!**

  

## Examples

*Example:* Finding the alpha transparency level in a 32 bit screen using an [_RGBA](_RGBA.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) color value.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32)  clr~& = [_RGBA](_RGBA.md)(255, 0, 255, 192) [PRINT](PRINT.md) "Color:"; clr~&  [COLOR](COLOR.md) clr~& [PRINT](PRINT.md) "Alpha32:"; _ALPHA32(clr~&)  [END](END.md)  
```

``` Color: 3237937407 Alpha32: 192  
```

*Notes:* The color value is equivalent to [hexadecimal](hexadecimal.md) &HC0FF00FF where &HC0 equals 192. [_RGB](_RGB.md) alphas are always &HFF(255).
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_ALPHA](_ALPHA.md), [_SETALPHA](_SETALPHA.md)
* [_RGBA](_RGBA.md), [_RGBA32](_RGBA32.md) (set color with alpha)
* [_RED](_RED.md), [_GREEN](_GREEN.md), [_BLUE](_BLUE.md)
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md). [_BLUE32](_BLUE32.md)
* [_CLEARCOLOR](_CLEARCOLOR.md), [_CLEARCOLOR (function)](_CLEARCOLOR (function).md) "CLEARCOLOR (function)")
* [Images](Images.md)

  
