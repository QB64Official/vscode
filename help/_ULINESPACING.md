# _ULINESPACING

The **_ULINESPACING** function returns the vertical line spacing (distance between two consecutive baselines) in pixels.

  

## Syntax

*pixels&* = _ULINESPACING[(*fontHandle&*)]
  

## Parameters

* *fontHandle&* is an optional font handle.

  

## Description

* Returns the vertical line spacing of the last font used if a handle is not designated.
* If no font is set, it returns the current screen mode's text block height.
* This can be used to leave the correct amount of line gap between lines.

  

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
How to use _ULINESPACING.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32)  [DIM](DIM.md) fh [AS](AS.md) [LONG](LONG.md): fh = [_LOADFONT](_LOADFONT.md)("LHANDW.TTF", 23) [IF](IF.md) fh <= 0 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to load font file!"     [END](END.md) [END IF](END IF.md)  [_FONT](_FONT.md) fh  [CLS](CLS.md) , [_RGB32](_RGB32.md)(200, 200, 200) [COLOR](COLOR.md) [_RGB32](_RGB32.md)(0, 0, 0) [_PRINTMODE](_PRINTMODE.md) [_KEEPBACKGROUND](_KEEPBACKGROUND.md)  [DIM](DIM.md) l [AS](AS.md) [STRING](STRING.md), i [AS](AS.md) [LONG](LONG.md) [FOR](FOR.md) i = 0 [TO](TO.md) 4     [READ](READ.md) l     [_UPRINTSTRING](_UPRINTSTRING.md) (0, _ULINESPACING * i), l [NEXT](NEXT.md)  [END](END.md)  [DATA](DATA.md) "We are not now that strength which in old days" [DATA](DATA.md) "Moved earth and heaven; that which we are,we are;" [DATA](DATA.md) "One equal temper of heroic hearts," [DATA](DATA.md) "Made weak by time and fate,but strong in will" [DATA](DATA.md) "To strive,to seek,to find,and not to yield."  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_UPRINTWIDTH](_UPRINTWIDTH.md), [_UFONTHEIGHT](_UFONTHEIGHT.md), [_UPRINTSTRING](_UPRINTSTRING.md), [_UCHARPOS](_UCHARPOS.md)
* [_FONTWIDTH](_FONTWIDTH.md), [_FONTHEIGHT](_FONTHEIGHT.md), [_FONT](_FONT.md)
* [_PRINTWIDTH](_PRINTWIDTH.md), [_PRINTSTRING](_PRINTSTRING.md)
* [SCREEN](SCREEN.md), [_LOADFONT](_LOADFONT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
