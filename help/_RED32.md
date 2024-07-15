# _RED32

The _RED32 function returns the red component intensity of a 32-bit image or surface color.

  

## Syntax

*red32color&* = _RED32(*rgbaColor&*)
  

## Description

* *rgbaColor&* is the 32-bit *RGBA* color value to retrieve the red component intensity value from.
* *RGBA* color values are returned by the [_PALETTECOLOR](_PALETTECOLOR.md) "PALETTECOLOR (function)"), [POINT](POINT.md), [_RGB](_RGB.md), [_RGB32](_RGB32.md), [_RGBA](_RGBA.md) or [_RGBA32](_RGBA32.md) functions.
* [LONG](LONG.md) intensity values returned range from 0 (no intensity, not present) to 255 (full intensity).

  

## Examples

* See the example in [POINT](POINT.md).

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_BLUE32](_BLUE32.md), [_GREEN32](_GREEN32.md)
* [_RGB32](_RGB32.md), [_RED](_RED.md)

  
