# _GREEN32

The _GREEN32 function returns the green component intensity of a 32-bit image or surface color.

  

## Syntax

green32color& = _GREEN32(*rgbaColor&*)
  

## Description

* *rgbaColor&* is the 32-bit *RGBA* color value to retrieve the green component intensity value from.
* *RGBA* color values are returned by the [_PALETTECOLOR](_PALETTECOLOR.md) "PALETTECOLOR (function)"), [POINT](POINT.md), [_RGB](_RGB.md), [_RGB32](_RGB32.md), [_RGBA](_RGBA.md) or [_RGBA32](_RGBA32.md) functions.
* [LONG](LONG.md) intensity values returned range from 0 (no intensity, not present) to 255 (full intensity).

  

## Examples

* See example in [POINT](POINT.md).

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_RED32](_RED32.md), [_BLUE32](_BLUE32.md)
* [_RGB32](_RGB32.md), [_GREEN](_GREEN.md)

  
