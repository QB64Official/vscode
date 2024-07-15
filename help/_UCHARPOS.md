# _UCHARPOS

The **_UCHARPOS** function calculates the starting pixel positions of every character of the text [string](string.md) (0 being the starting pixel position of the first character). This information is returned in a [long](long.md) array. The function also returns the number of characters in the text [string](string.md). The function supports Unicode encoded text.

  

## Syntax

*codepoints&* = _UCHARPOS(*text$*[, *posArray&()*][, *utfEncoding&*][, *fontHandle&*])
  

## Parameters

* *text$* is any literal or variable [STRING](STRING.md) value. This can be a Unicode encoded text.
* *posArray&()* is a [long](long.md) array that contains the pixel position information after a call to **_UCHARPOS**.
* *utfEncoding&* is an optional UTF encoding of *text$*. This can be 0 for ASCII, 8 for UTF-8, 16 for UTF-16 or 32 for UTF-32.
* *fontHandle&* is an optional font handle.

  

## Description

* If *posArray&()* is omitted, then the function simply returns the number of characters in the text [string](string.md).
* If *utfEncoding&* is omitted, then it is assumed to be 0 (ASCII).
* If *fontHandle&* is omitted, then the current write page font is used.
* *posArray&(codepoints&)* (assuming *posArray&()* is declared (indexed) as 0 [TO](TO.md) *codepoints&*) will hold the (ending pixel position of the last character) + 1.
* All multi-byte UTF encodings are expected in little-endian.
* Unicode byte order mark (BOM) is not processed and must be handled by user code.
* This can be useful when the positions of every character in a string is required (e.g., when underling text or drawing a text cursor). This can be especially helpful when using variable width fonts.
* When working with Unicode excoded text, instead of calling the function twice (first time to get the array size and then a second time to get the pixel positions), call it once with a large enough array (0 [TO](TO.md) [LEN](LEN.md)(*text$*)) and then resize the array (0 [TO](TO.md) *codepoints&*) using [REDIM](REDIM.md) [PRESERVE](PRESERVE.md).

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.8.0](![v3.8.0.md)](File:Qbpe.png "v3.8.0")

**v3.8.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example
Underlines every character of a text printed using a variable width font.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [SCREEN](SCREEN.md) 12  [CONST](CONST.md) TEXT = "Hello, world!" [CONST](CONST.md) TEXT_X = 220 [CONST](CONST.md) TEXT_Y = 220  [DIM](DIM.md) fh [AS](AS.md) [LONG](LONG.md): fh = [_LOADFONT](_LOADFONT.md)("arial.ttf", 32) [_FONT](_FONT.md) fh  [DIM](DIM.md) arr(0 [TO](TO.md) [LEN](LEN.md)(TEXT)) [AS](AS.md) [LONG](LONG.md), i [AS](AS.md) [LONG](LONG.md)  [PRINT](PRINT.md) "Len of "; TEXT; " ="; _UCHARPOS(TEXT, arr())  [_UPRINTSTRING](_UPRINTSTRING.md) (TEXT_X, TEXT_Y), TEXT  [FOR](FOR.md) i = [LBOUND](LBOUND.md)(arr) [TO](TO.md) [UBOUND](UBOUND.md)(arr) - 1     [PRINT](PRINT.md) arr(i + 1);     [LINE](LINE.md) (TEXT_X + arr(i), TEXT_Y + [_UFONTHEIGHT](_UFONTHEIGHT.md))-(TEXT_X + arr(i + 1) - 1, TEXT_Y + [_UFONTHEIGHT](_UFONTHEIGHT.md)), 9 + i [MOD](MOD.md) 7 [NEXT](NEXT.md)  [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_UFONTHEIGHT](_UFONTHEIGHT.md), [_ULINESPACING](_ULINESPACING.md), [_UPRINTWIDTH](_UPRINTWIDTH.md), [_UPRINTSTRING](_UPRINTSTRING.md)
* [_FONTWIDTH](_FONTWIDTH.md), [_FONTHEIGHT](_FONTHEIGHT.md), [_PRINTWIDTH](_PRINTWIDTH.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_LOADFONT](_LOADFONT.md)
* [_PRINTSTRING](_PRINTSTRING.md), [_FONT](_FONT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
