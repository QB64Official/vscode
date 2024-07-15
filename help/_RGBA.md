# _RGBA

The _RGBA function returns the closest palette index (legacy SCREEN modes) OR the 32-bit [LONG](LONG.md) color value (32-bit screens).

  

## Syntax

*colorIndex~&* = _RGBA(*red&*, *green&*, *blue&*, *alpha&*[, *imageHandle&*]**)**
  

* The value returned is either the closest color attribute number or a 32-bit [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) color value.
* **Return variable types must be [LONG](LONG.md) or the resulting color may lose the [_BLUE](_BLUE.md) value.**
* *red&* specifies the red component intensity from 0 to 255.
* *green&* specifies the green component intensity from 0 to 255.
* *blue&* specifies the blue component intensity from 0 to 255.
* The [*alpha&*](*alpha&*.md) value can be set to make the color transparent (0), opaque (255) or somewhere in between.
* Parameter values outside of the 0 to 255 range are clipped.
* Returns [LONG](LONG.md) 32-bit hexadecimal values from **&H00000000** to **&HFFFFFFFF** with varying [_ALPHA](_ALPHA.md) transparency.
* When [LONG](LONG.md) values are [PUT](PUT.md) to file, the ARGB values become BGRA. Use [LEFT$](LEFT$.md)([MKL$](MKL$.md)(*colorIndex~&*), 3) to place 3 colors.
* If *imageHandle&* is omitted, the image is assumed to be the current [destination](destination.md) or [SCREEN](SCREEN.md) page.
* Allows the blending of pixel colors red, green and blue to create any of 16 million colors.
* **NOTE: Default 32-bit backgrounds are clear black or _RGBA(0, 0, 0, 0). Use [CLS](CLS.md) to make the black opaque.**

  

## Examples

*Example:* Setting a font's background color alpha to clear to overlay a second text color.

``` scrn& = [_NEWIMAGE](_NEWIMAGE.md)(400, 400, 32) [SCREEN](SCREEN.md) scrn& fnt& = [_LOADFONT](_LOADFONT.md)("C:\WINDOWS\FONTS\ARIAL.TTF", 26) [_FONT](_FONT.md) fnt& X% = 20 Y% = 20 [COLOR](COLOR.md) [_RGB](_RGB.md)(255, 255, 255), [_RGB](_RGB.md)(0, 0, 0) 'Foreground set to WHITE background to BLACK [_PRINTSTRING](_PRINTSTRING.md) (X%, Y%), "Hello World" [COLOR](COLOR.md) [_RGB](_RGB.md)(255, 0, 0), _RGBA(0, 0, 0, 0) 'Foreground set to RED background to TRANSPARENT BLACK [_PRINTSTRING](_PRINTSTRING.md) (X% + 2, Y% + 2), "Hello World" [END](END.md)  
```

*Explanation:* [_PRINTSTRING](_PRINTSTRING.md) allows text or font colors to be alpha blended in 32 bit screens.

  

## See also

* [_RGB](_RGB.md), [_RGB32](_RGB32.md), [_RGBA32](_RGBA32.md)
* [_RED](_RED.md), [_GREEN](_GREEN.md), [_BLUE](_BLUE.md)
* [_LOADIMAGE](_LOADIMAGE.md)
* [_PRINTSTRING](_PRINTSTRING.md)
* [HEX$ 32 Bit Values](HEX$ 32 Bit Values.md), [POINT](POINT.md)
* [SaveImage SUB](SaveImage SUB.md)
* [Hexadecimal Color Values](Hexadecimal Color Values.md)

  
