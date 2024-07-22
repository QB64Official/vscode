## _CLEARCOLOR (function)
---
<blockquote>

### The _CLEARCOLOR function returns the current transparent color of an image or page.

</blockquote>

#### SYNTAX

<blockquote>

`result& = _CLEARCOLOR [ Source_Handle& ]`

</blockquote>

#### DESCRIPTION

<blockquote>

* If Source_Handle& is omitted, it is assumed to be the current destination write page.
* If Source_Handle& is an invalid handle value(-1), then an invalid handle value is returned.
* In color modes using a palette, the index of the current transparent color value is returned, or -1 if no transparent color is set.
* In 32-bit color modes, zero is returned.
* Returns the color that currently is transparent, or if no color is transparent -1 without error.
* A [_CLEARCOLOR](./_CLEARCOLOR.md) statement can set the transparent color of an image or screen.
* NOTE: Default 32 bit backgrounds are clear black or [_RGBA](./_RGBA.md) (0, 0, 0, 0). Use [CLS](./CLS.md) to make the black opaque.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

* [_CLEARCOLOR](./_CLEARCOLOR.md) (sets a clear color)
* [_SETALPHA](./_SETALPHA.md) (sets color transparency)
* Images

</blockquote>
