# _UPRINTSTRING

The **_UPRINTSTRING** statement prints ASCII / UNICODE text [strings](strings.md) using graphic column and row coordinate positions.

  

## Syntax

_UPRINTSTRING (*column*, *row*), *textExpression$*[, *maxWidth&*][, *utfEncoding&*][, *fontHandle&*][, *imageHandle&*]
  

## Parameters

* *column* and *row* are [INTEGER](INTEGER.md) or [LONG](LONG.md) starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
* *textExpression$* is any literal or variable [string](string.md) value of text to be displayed.
* *maxWidth&* is an optional horizontal pixel limit after which the text rendering will be clipped.
* *utfEncoding&* is an optional UTF encoding of *textExpression$*. This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* *fontHandle&* is an optional font handle.
* *imageHandle&* is the optional image or destination to use. Zero designates current [SCREEN](SCREEN.md) page.

  

## Description

* The starting coordinate sets the top left corner of the text to be printed.
* If *maxWidth&* is omitted, then the entire *textExpression$* is rendered.
* If *utfEncoding&* is omitted, then it is assumed to be 0 (ASCII).
* If *fontHandle&* is omitted, then the current write page font is used.
* [_UPRINTWIDTH](_UPRINTWIDTH.md) can be used to determine how wide a text print will be so that the screen width is not exceeded. Alternatively, *maxWidth&* can be used to clip text rending after a certain amount of pixel width.
* [_ULINESPACING](_ULINESPACING.md) can be used to calculate the next [font](font.md) vertical position.
* Unicode byte order mark (BOM) is not processed and must be handled by user code except for UTF-16.
* UTF-16 LE is assumed if BOM is absent in the string and *utfEncoding&* is 16.
* Can use the current font alpha blending with a designated image background. See the [_RGBA](_RGBA.md) function example.
* Use the [_PRINTMODE](_PRINTMODE.md) statement before printing to set how the background is rendered.
	+ Use the [_PRINTMODE (function)](_PRINTMODE (function).md) "PRINTMODE (function)") to find the current _PRINTMODE setting.
* SCREEN 0 (text only) mode is not supported. Attempting to use this in SCREEN 0 will generate an error.

  

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

Example 1
Centers and prints a Russian text on a graphics screen.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32)  [DIM](DIM.md) fh [AS](AS.md) [LONG](LONG.md): fh = [_LOADFONT](_LOADFONT.md)("cyberbit.ttf", 21) [IF](IF.md) fh <= 0 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to load font file!"     [END](END.md) [END IF](END IF.md)  [_FONT](_FONT.md) fh  [RESTORE](RESTORE.md) text_data [DIM](DIM.md) myString [AS](AS.md) [STRING](STRING.md): myString = LoadUData$  _UPRINTSTRING ([_WIDTH](_WIDTH.md) "WIDTH (function)") \ 2 - [_UPRINTWIDTH](_UPRINTWIDTH.md)(myString, 8, fh) \ 2, [_HEIGHT](_HEIGHT.md) \ 2 - [_UFONTHEIGHT](_UFONTHEIGHT.md) \ 2), myString, [_WIDTH](_WIDTH.md) "WIDTH (function)"), 8  [END](END.md)  text_data: [DATA](DATA.md) 6F,D0,91,D1,8B,D1,81,D1,82,D1,80,D0,B0,D1,8F,20,D0,BA,D0,BE,D1,80,D0,B8,D1 [DATA](DATA.md) 87,D0,BD,D0,B5,D0,B2,D0,B0,D1,8F,20,D0,BB,D0,B8,D1,81,D0,B0,20,D0,BF,D0,B5 [DATA](DATA.md) D1,80,D0,B5,D0,BF,D1,80,D1,8B,D0,B3,D0,B8,D0,B2,D0,B0,D0,B5,D1,82,20,D1,87 [DATA](DATA.md) D0,B5,D1,80,D0,B5,D0,B7,20,D0,BB,D0,B5,D0,BD,D0,B8,D0,B2,D1,83,D1,8E,20,D1 [DATA](DATA.md) 81,D0,BE,D0,B1,D0,B0,D0,BA,D1,83,2E  [FUNCTION](FUNCTION.md) LoadUData$     [DIM](DIM.md) [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) i, s     [DIM](DIM.md) d [AS](AS.md) [STRING](STRING.md)     [DIM](DIM.md) buffer [AS](AS.md) [STRING](STRING.md)      [READ](READ.md) d     s = [VAL](VAL.md)("&h" + d)     buffer = [SPACE$](SPACE$.md)(s)      [FOR](FOR.md) i = 1 [TO](TO.md) s         [READ](READ.md) d         [ASC](ASC.md)(buffer, i) = [VAL](VAL.md)("&h" + d)     [NEXT](NEXT.md)      LoadUData = buffer [END FUNCTION](END FUNCTION.md)  
```

---

Example 2
Prints multiple lines of text using a recommended line gap.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32)  [DIM](DIM.md) fh [AS](AS.md) [LONG](LONG.md): fh = [_LOADFONT](_LOADFONT.md)("LHANDW.TTF", 23) [IF](IF.md) fh <= 0 [THEN](THEN.md)     [PRINT](PRINT.md) "Failed to load font file!"     [END](END.md) [END IF](END IF.md)  [_FONT](_FONT.md) fh  [CLS](CLS.md) , [_RGB32](_RGB32.md)(200, 200, 200) [COLOR](COLOR.md) [_RGB32](_RGB32.md)(0, 0, 0) [_PRINTMODE](_PRINTMODE.md) [_KEEPBACKGROUND](_KEEPBACKGROUND.md)  [DIM](DIM.md) l [AS](AS.md) [STRING](STRING.md), i [AS](AS.md) [LONG](LONG.md) [FOR](FOR.md) i = 0 [TO](TO.md) 4     [READ](READ.md) l     _UPRINTSTRING (0, [_ULINESPACING](_ULINESPACING.md) * i), l [NEXT](NEXT.md)  [END](END.md)  [DATA](DATA.md) "We are not now that strength which in old days" [DATA](DATA.md) "Moved earth and heaven; that which we are,we are;" [DATA](DATA.md) "One equal temper of heroic hearts," [DATA](DATA.md) "Made weak by time and fate,but strong in will" [DATA](DATA.md) "To strive,to seek,to find,and not to yield."  
```

  

## See also

* [Featured in our "Keyword of the Day" series (Part 1)](Featured in our "Keyword of the Day" series (Part 1).md)
* [Featured in our "Keyword of the Day" series (Part 2)](Featured in our "Keyword of the Day" series (Part 2).md)
* [_UPRINTWIDTH](_UPRINTWIDTH.md), [_UFONTHEIGHT](_UFONTHEIGHT.md), [_ULINESPACING](_ULINESPACING.md), [_UCHARPOS](_UCHARPOS.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_PRINTWIDTH](_PRINTWIDTH.md), [_PRINTMODE](_PRINTMODE.md)
* [_CONTROLCHR](_CONTROLCHR.md)
* [_FONT](_FONT.md), [_LOADFONT](_LOADFONT.md), [_FONTHEIGHT](_FONTHEIGHT.md), [_FONTWIDTH](_FONTWIDTH.md)
* [_SCREENIMAGE](_SCREENIMAGE.md), [_SCREENPRINT](_SCREENPRINT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
