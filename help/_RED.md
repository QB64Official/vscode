## _RED
---

### The _RED function returns the palette index or the red component intensity of a 32-bit image color.

#### SYNTAX

`redIntensity& = _RED ( rgbaColorIndex& [, imageHandle& ])`

#### DESCRIPTION
* rgbaColorIndex& is the RGBA color value or palette index of the color to retrieve the red component intensity from.
* The [LONG](./LONG.md) intensity value returned ranges from 0 (no intensity, not present) to 255 (full intensity).
* imageHandle& is optional.
* If imageHandle& specifies a 32-bit color image, rgbaColorIndex& is interpreted as a 32-bit RGBA color value.
* If imageHandle& specifies an image that uses a palette, rgbaColorIndex& is interpreted as a palette index.
* If imageHandle& is not specified, it is assumed to be the current write page.
* If imageHandle& is an invalid handle, an invalid handle error occurs.
* If rgbaColorIndex& is outside the range of valid indexes for a given image mode, an illegal function call error occurs.
* Uses index parameters passed by the [_RGB](./_RGB.md) , [_RGBA](./_RGBA.md) , [_RGB32](./_RGB32.md) or [_RGBA32](./_RGBA32.md) functions.


#### EXAMPLES


#### SEE ALSO
* [_GREEN](./_GREEN.md) , [_BLUE](./_BLUE.md)
* [_RGB](./_RGB.md) , RGB32
* [_LOADIMAGE](./_LOADIMAGE.md)
