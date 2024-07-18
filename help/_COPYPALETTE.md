## _COPYPALETTE
---

### The _COPYPALETTE statement copies the color palette intensities from one 4 or 8 BPP image to another image or a _NEWIMAGE screen page using 256 or less colors.

#### SYNTAX

`_COPYPALETTE [ sourceImageHandle& [, destinationImageHandle& ]]`

#### DESCRIPTION
* Palette Intensity settings are not used by 24/32 bit images. Use only with 4 or 8 BPP images.
* [_PIXELSIZE](./_PIXELSIZE.md) function returns 1 to indicate that [_COPYPALETTE](./_COPYPALETTE.md) can be used. 4 indicates 24/32 bit images.
* If sourceImageHandle& is omitted, it is assumed to be the current read page.
* If destinationImageHandle& is omitted, it is assumed to be the current write page.
* If either of the images specified by sourceImageHandle& or destinationImageHandle& do not use a palette, an illegal function call error is returned.
* If either sourceImageHandle& or destinationImageHandle& is an invalid handle, an invalid handle error is returned.
* When loading 4 or 8 BPP image files, it is necessary to adopt the color palette of the image or it may not have the correct colors!


#### EXAMPLES


#### SEE ALSO
* [_LOADIMAGE](./_LOADIMAGE.md)
* [_PIXELSIZE](./_PIXELSIZE.md)
* [_PALETTECOLOR](./_PALETTECOLOR.md) , [_PALETTECOLOR](./_PALETTECOLOR.md) (function)
* [PALETTE](./PALETTE.md) , Images
