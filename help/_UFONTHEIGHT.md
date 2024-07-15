# _UFONTHEIGHT

The **_UFONTHEIGHT** function returns the global glyph height (incl. ascender/descender) of a font loaded by [_LOADFONT](_LOADFONT.md).

  

## Syntax

*pixelHeight&* = _UFONTHEIGHT[(*fontHandle&*)]
  

## Parameters

* *fontHandle&* is an optional font handle.

  

## Description

* Returns the height of the last font used if a handle is not designated.
* If no font is set, it returns the current screen mode's text block height.
* This is different from [_FONTHEIGHT](_FONTHEIGHT.md) as it may return larger values when using scalable fonts.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.7.0](![v3.7.0.md)](File:Qbpe.png "v3.7.0")

**v3.7.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example
Show the difference of **_UFONTHEIGHT** vs. [_FONTHEIGHT](_FONTHEIGHT.md).

``` [DIM](DIM.md) fh [AS](AS.md) [LONG](LONG.md): fh = [_LOADFONT](_LOADFONT.md)("LHANDW.TTF", 23)  [PRINT](PRINT.md) "_FONTHEIGHT ="; [_FONTHEIGHT](_FONTHEIGHT.md)(fh) [PRINT](PRINT.md) "_UFONTHEIGHT ="; _UFONTHEIGHT(fh)  
```

``` _FONTHEIGHT = 23 _UFONTHEIGHT = 32  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_UPRINTWIDTH](_UPRINTWIDTH.md), [_ULINESPACING](_ULINESPACING.md), [_UPRINTSTRING](_UPRINTSTRING.md), [_UCHARPOS](_UCHARPOS.md)
* [_FONTWIDTH](_FONTWIDTH.md), [_FONTHEIGHT](_FONTHEIGHT.md), [_FONT](_FONT.md)
* [_PRINTWIDTH](_PRINTWIDTH.md), [_PRINTSTRING](_PRINTSTRING.md)
* [SCREEN](SCREEN.md), [_LOADFONT](_LOADFONT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
