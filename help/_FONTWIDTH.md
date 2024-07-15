# _FONTWIDTH

The _FONTWIDTH function returns the font width of a MONOSPACE font handle created by [_LOADFONT](_LOADFONT.md).

  

## Syntax

*pixelWidth%* = _FONTWIDTH[(*fontHandle&*)]
  

* Returns the character width of the last font used if a handle is not specified.
* **Variable width fonts always return *pixelWidth%* = 0.** Even fixed width fonts return 0 unless the ["MONOSPACE"]("MONOSPACE".md) style option is used.
* QB64 **version 1.000 and up** can load a variable width font as monospaced with the ["MONOSPACE"]("MONOSPACE".md) style parameter.
* The font width is generally 3/4 of the [_FONTHEIGHT](_FONTHEIGHT.md) specified when loading the font.
* In **graphics** [screen](screen.md) modes, [_PRINTWIDTH](_PRINTWIDTH.md) can return the total **pixel width** of a literal or variable [string](string.md) of text.

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_FONTHEIGHT](_FONTHEIGHT.md)
* [_FONT](_FONT.md)
* [_LOADFONT](_LOADFONT.md)
* [_PRINTWIDTH](_PRINTWIDTH.md)

  
