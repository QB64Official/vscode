## _PALETTECOLOR (function)
---
<blockquote>

### The _PALETTECOLOR function is used to return the 32 bit attribute color setting of an image or screen page handle's palette.

</blockquote>

#### SYNTAX

<blockquote>

`color32Value& = _PALETTECOLOR ( attributeNumber% , imgHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

* attributeNumber% is the color attribute value from 0 to 255 for 1, 4 or 8 bit images.
* imgHandle& is the image handle being read for color data. Zero can be used to read the current screen mode palette.
* Returns the 32 bit color value to be used by the 32 bit RGB functions.
* For 32 bit images send the [_PALETTECOLOR](./_PALETTECOLOR.md) return value to [_RED32](./_RED32.md) , [_GREEN32](./_GREEN32.md) and [_BLUE32](./_BLUE32.md) functions to get the red, green, and blue intensity values.
* Although 32 bit palette values are returned, the function cannot be used with 32 bit images or screen modes.


</blockquote>

#### SEE ALSO

<blockquote>

* [_PALETTECOLOR](./_PALETTECOLOR.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_LOADIMAGE](./_LOADIMAGE.md)
* SaveImage [SUB](./SUB.md)

</blockquote>
