## _FONTHEIGHT (function)
---
<blockquote>

### The _FONTHEIGHT function returns the font height of a font handle created by _LOADFONT .

</blockquote>

#### SYNTAX

<blockquote>

`pixelHeight% = _FONTHEIGHT [( fontHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

* Returns the height of the last font used if a handle is not designated.
* If no font is set it returns the current screen mode's text block height.


</blockquote>

#### SEE ALSO

<blockquote>

* [_FONTWIDTH](./_FONTWIDTH.md) , [_FONT](./_FONT.md)
* [_PRINTWIDTH](./_PRINTWIDTH.md) , [_PRINTSTRING](./_PRINTSTRING.md)
* [SCREEN](./SCREEN.md) , [_LOADFONT](./_LOADFONT.md)
* Text Using Graphics (Demo)

</blockquote>
