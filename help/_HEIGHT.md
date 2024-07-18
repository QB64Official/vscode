## _HEIGHT
---

### The _HEIGHT function returns the height of an image handle or of the current write page.

#### SYNTAX

`columns& = _HEIGHT [( imageHandle& )]`

#### DESCRIPTION
* If imageHandle& is omitted, it's assumed to be the handle of the current [SCREEN](./SCREEN.md) or write page.
* To get the height of the current program screen window use zero for the handle value or nothing: lines& = [_HEIGHT](./_HEIGHT.md) (0) or lines& = [_HEIGHT](./_HEIGHT.md)
* If the image specified by imageHandle& is in text only( [SCREEN](./SCREEN.md) 0) mode, the number of lines of rows of characters are returned.
* If the image specified by imageHandle& is in graphics mode, the number rows of pixels is returned.
* If imageHandle& is an invalid handle, then an invalid handle error is returned.
* The last visible pixel coordinate of a program screen is [_HEIGHT](./_HEIGHT.md) - 1 .


#### SEE ALSO
* [_WIDTH](./_WIDTH.md) (function) , [_LOADIMAGE](./_LOADIMAGE.md) , [_NEWIMAGE](./_NEWIMAGE.md)
* Bitmaps
