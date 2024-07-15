# _RGBA32

The _RGBA32 function returns the 32-bit *RGBA* color value with the specified red, green, blue and alpha component intensities.

  

## Syntax

*color32value~&* = _RGBA32(*red&*, *green&*, *blue&*, *alpha&*)
  

## Description

* The value returned is a 32-bit [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) color value.
* **Return variable types must be [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) or resulting color may lose the [_BLUE](_BLUE.md) value.**
* *red&* specifies the red component intensity from 0 to 255.
* *green&* specifies the green component intensity from 0 to 255.
* *blue&* specifies the blue component intensity from 0 to 255.
* *alpha&* specifies the [*alpha*](*alpha*.md) component transparency value from 0 (fully transparent) to 255 (opaque).
* Alpha or intensity values outside of the valid range of 0 to 255 are clipped.
* Returns [LONG](LONG.md) 32-bit hexadecimal values from **&H00000000** to **&HFFFFFFFF** with varying [_ALPHA](_ALPHA.md) transparency.
* When [LONG](LONG.md) values are [PUT](PUT.md) to file, the ARGB values become BGRA. Use [LEFT$](LEFT$.md)([MKL$](MKL$.md)(*color32value~&*), 3) to place 3 colors.
* **NOTE: Default 32-bit backgrounds are clear black or [_RGBA](_RGBA.md)(0, 0, 0, 0). Use [CLS](CLS.md) to make the black opaque.**

  

## Examples

*Example:* Changing the [ALPHA](ALPHA.md) value to fade an image in and out using a 32 bit PNG image.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(600, 400, 32)  img& = [_LOADIMAGE](_LOADIMAGE.md)("qb64_trans.png")  'use any 24/32 bit image 'Turn off auto display [_DISPLAY](_DISPLAY.md)  ' Fade in [FOR](FOR.md) i% = 255 [TO](TO.md) 0 [STEP](STEP.md) -5   [_LIMIT](_LIMIT.md) 20                          'control fade speed   [_PUTIMAGE](_PUTIMAGE.md) (0, 0)-(600, 400), img&   [LINE](LINE.md) (0, 0)-(600, 400), [_RGBA](_RGBA.md)(0, 0, 0, i%), BF 'decrease black box transparency   [_DISPLAY](_DISPLAY.md) [NEXT](NEXT.md)  ' Fade out [FOR](FOR.md) i% = 0 [TO](TO.md) 255 [STEP](STEP.md) 5   [_LIMIT](_LIMIT.md) 20                          'control fade speed   [_PUTIMAGE](_PUTIMAGE.md) (0, 0)-(600, 400), img&   [LINE](LINE.md) (0, 0)-(600, 400), [_RGBA](_RGBA.md)(0, 0, 0, i%), BF 'increase black box transparency   [_DISPLAY](_DISPLAY.md) [NEXT](NEXT.md) [END](END.md)  
```

  

## See also

* [_RGB32](_RGB32.md), [_RGBA](_RGBA.md), [_RGB](_RGB.md)
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md), [_BLUE32](_BLUE32.md)
* [HEX$ 32 Bit Values](HEX$ 32 Bit Values.md), [POINT](POINT.md)
* [SaveImage SUB](SaveImage SUB.md)
* [Hexadecimal Color Values](Hexadecimal Color Values.md)

  
