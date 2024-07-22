## _WIDTH (function)
---
<blockquote>

### The _WIDTH function returns the width of an image handle or of the current write page.

</blockquote>

#### SYNTAX

<blockquote>

`columns& = _WIDTH [( imageHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

* If imageHandle& is omitted, it's assumed to be the handle of the current [SCREEN](./SCREEN.md) or write page.
* To get the width of the current program screen window use zero for the handle value or nothing: columns& = [_WIDTH](./_WIDTH.md) (0) or columns& = [_WIDTH](./_WIDTH.md)
* If the image specified by imageHandle& is in text only( [SCREEN](./SCREEN.md) 0) mode, the number of characters per row is returned.
* If the image specified by imageHandle& is in graphics mode, the number of pixels per row is returned.
* If imageHandle& is an invalid handle, then an invalid handle error is returned.
* The last visible pixel coordinate of a program screen is [_WIDTH](./_WIDTH.md) - 1 .


</blockquote>

#### SEE ALSO

<blockquote>

* [_HEIGHT](./_HEIGHT.md) , [_LOADIMAGE](./_LOADIMAGE.md) , [_NEWIMAGE](./_NEWIMAGE.md)
* [WIDTH](./WIDTH.md)
* Bitmaps

</blockquote>
