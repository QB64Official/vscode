## _UFONTHEIGHT
---

### The _UFONTHEIGHT function returns the global glyph height (incl. ascender/descender) of a font loaded by _LOADFONT .

#### SYNTAX

`pixelHeight& = _UFONTHEIGHT [( fontHandle& )]`

#### PARAMETERS
* fontHandle& is an optional font handle.


#### DESCRIPTION
* Returns the height of the last font used if a handle is not designated.
* If no font is set, it returns the current screen mode's text block height.
* This is different from [_FONTHEIGHT](./_FONTHEIGHT.md) as it may return larger values when using scalable fonts.


#### EXAMPLES
```vb
DIM fh AS LONG: fh = _LOADFONT("LHANDW.TTF", 23)

PRINT "_FONTHEIGHT ="; _FONTHEIGHT(fh)
PRINT "_UFONTHEIGHT ="; _UFONTHEIGHT(fh)
```
  
```vb
_FONTHEIGHT = 23
_UFONTHEIGHT = 32
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_UPRINTWIDTH](./_UPRINTWIDTH.md) , [_ULINESPACING](./_ULINESPACING.md) , [_UPRINTSTRING](./_UPRINTSTRING.md) , [_UCHARPOS](./_UCHARPOS.md)
* [_FONTWIDTH](./_FONTWIDTH.md) , [_FONTHEIGHT](./_FONTHEIGHT.md) , [_FONT](./_FONT.md)
* [_PRINTWIDTH](./_PRINTWIDTH.md) , [_PRINTSTRING](./_PRINTSTRING.md)
* [SCREEN](./SCREEN.md) , [_LOADFONT](./_LOADFONT.md)
* Text Using Graphics
