# _UPRINTWIDTH

The **_UPRINTWIDTH** function returns the width in pixels of the text [string](string.md) specified. The function supports Unicode encoded text.

  

## Syntax

*pixelWidth&* = _UPRINTWIDTH(*text$*[, *utfEncoding&*][, *fontHandle&*])
  

## Parameters

* *text$* is any literal or variable [STRING](STRING.md) value.
* *utfEncoding&* is an optional UTF encoding of *text$*. This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* *fontHandle&* is an optional font handle.

  

## Description

* If the *utfEncoding&* is omitted, then it is assumed to be 0 (ASCII).
* If *fontHandle&* is omitted, then the current write page font is used.
* All multi-byte UTF encodings are expected in little-endian.
* Unicode byte order mark (BOM) is not processed and must be handled by user code.
* This can be useful to find the width of the font print [string](string.md) before actually printing it.
* Can be used with variable-width fonts or built-in fonts, unlike [_FONTWIDTH](_FONTWIDTH.md) which requires a MONOSPACE font handle.
* Unlike [_PRINTWIDTH](_PRINTWIDTH.md), _UPRINTWIDTH always returns the width of the text string in pixels.

  

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
Centers and prints a Russian text on a graphics screen.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32)  [DIM](DIM.md) fh [AS](AS.md) [LONG](LONG.md): fh = [_LOADFONT](_LOADFONT.md)("cyberbit.ttf", 21) [IF](IF.md) fh <= 0 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to load font file!"     [END](END.md) [END IF](END IF.md)  [_FONT](_FONT.md) fh  [RESTORE](RESTORE.md) text_data [DIM](DIM.md) myString [AS](AS.md) [STRING](STRING.md): myString = LoadUData$  [_UPRINTSTRING](_UPRINTSTRING.md) ([_WIDTH](_WIDTH.md) "WIDTH (function)") \ 2 - _UPRINTWIDTH(myString, 8, fh) \ 2, [_HEIGHT](_HEIGHT.md) \ 2 - [_UFONTHEIGHT](_UFONTHEIGHT.md) \ 2), myString, [_WIDTH](_WIDTH.md) "WIDTH (function)"), 8  [END](END.md)  text_data: [DATA](DATA.md) 6F,D0,91,D1,8B,D1,81,D1,82,D1,80,D0,B0,D1,8F,20,D0,BA,D0,BE,D1,80,D0,B8,D1 [DATA](DATA.md) 87,D0,BD,D0,B5,D0,B2,D0,B0,D1,8F,20,D0,BB,D0,B8,D1,81,D0,B0,20,D0,BF,D0,B5 [DATA](DATA.md) D1,80,D0,B5,D0,BF,D1,80,D1,8B,D0,B3,D0,B8,D0,B2,D0,B0,D0,B5,D1,82,20,D1,87 [DATA](DATA.md) D0,B5,D1,80,D0,B5,D0,B7,20,D0,BB,D0,B5,D0,BD,D0,B8,D0,B2,D1,83,D1,8E,20,D1 [DATA](DATA.md) 81,D0,BE,D0,B1,D0,B0,D0,BA,D1,83,2E  [FUNCTION](FUNCTION.md) LoadUData$     [DIM](DIM.md) [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) i, s     [DIM](DIM.md) d [AS](AS.md) [STRING](STRING.md)     [DIM](DIM.md) buffer [AS](AS.md) [STRING](STRING.md)      [READ](READ.md) d     s = [VAL](VAL.md)("&h" + d)     buffer = [SPACE$](SPACE$.md)(s)      [FOR](FOR.md) i = 1 [TO](TO.md) s         [READ](READ.md) d         [ASC](ASC.md)(buffer, i) = [VAL](VAL.md)("&h" + d)     [NEXT](NEXT.md)      LoadUData = buffer [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_UFONTHEIGHT](_UFONTHEIGHT.md), [_ULINESPACING](_ULINESPACING.md), [_UPRINTSTRING](_UPRINTSTRING.md), [_UCHARPOS](_UCHARPOS.md)
* [_FONTWIDTH](_FONTWIDTH.md), [_FONTHEIGHT](_FONTHEIGHT.md), [_PRINTWIDTH](_PRINTWIDTH.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_LOADFONT](_LOADFONT.md)
* [_PRINTSTRING](_PRINTSTRING.md), [_FONT](_FONT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
