## _PALETTECOLOR
---

### The _PALETTECOLOR statement sets the color value of a palette entry of an image using 256 color modes or less (4 or 8 BPP).

#### SYNTAX

`_PALETTECOLOR attribute% , newColor& [, destHandle& ]`

#### DESCRIPTION
* The attribute% is the palette index number of the color to set, ranging from 0 to 15 (4 bit) or 0 to 255 (8 bit) color modes.
* The [LONG](./LONG.md) newColor& is the new color value to set using [_RGB32](./_RGB32.md) or [_RGBA32](./_RGBA32.md) values or using HEX$ 32 Bit Values .
* If destHandle& is omitted, destination is assumed to be the current write page or screen surface.
* If attribute% is outside of image or screen mode attribute range (0 to 15 or 0 to 255), an illegal function call error will occur.
* If destHandle& does not use a palette, an illegal function call error occurs. Will not work in 24/32 bit color palette modes.
* If destHandle& is an invalid handle value, an invalid handle error occurs.


#### EXAMPLES
##### Example: Creating custom background colors in SCREEN 0 that follow the text. CLS makes entire background one color.
```vb
_PALETTECOLOR 1, _RGB32(255, 255, 255) ' white.
_PALETTECOLOR 2, _RGB32(255, 170, 170) ' lighter red.
_PALETTECOLOR 3, _RGB32(255, 85, 85) ' light red.
_PALETTECOLOR 4, _RGB32(255, 0, 0) ' red.
_PALETTECOLOR 5, _RGB32(170, 0, 0) ' dark red.
_PALETTECOLOR 6, _RGB32(85, 0, 0) ' darker red.

COLOR 0, 1: PRINT "black on white."
COLOR 0, 2: PRINT "black on lighter red."
COLOR 0, 3: PRINT "black on light red."
COLOR 0, 4: PRINT "black on red."
COLOR 0, 5: PRINT "black on dark red."
COLOR 0, 6: PRINT "black on darker red.

COLOR 1, 6: PRINT "white on darker red"
COLOR 2, 6: PRINT "ligher red on darker red"
```
  


#### SEE ALSO
* [COLOR](./COLOR.md) , [_RGB32](./_RGB32.md) , [_RGBA32](./_RGBA32.md)
* [_PALETTECOLOR](./_PALETTECOLOR.md) (function)
* [PALETTE](./PALETTE.md) , [OUT](./OUT.md) , [INP](./INP.md)
* Images
* HEX$ 32 Bit Values
