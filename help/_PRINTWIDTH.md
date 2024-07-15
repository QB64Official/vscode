# _PRINTWIDTH

The _PRINTWIDTH function returns the width in pixels of the text [string](string.md) specified.

  

## Syntax

*pixelWidth%* = _PRINTWIDTH(*textToPrint$*[, *destinationHandle&*])
  

## Description

* *textToPrint$* is any literal or variable [STRING](STRING.md) value.
* If the *destinationHandle&* is omitted, the current destination image or screen page is used.
* Useful to find the width of the font print [string](string.md) before actually printing it.
* Can be used with variable-width fonts or built-in fonts, unlike [_FONTWIDTH](_FONTWIDTH.md) which requires a MONOSPACE font handle.
* In SCREEN 0, _PRINTWIDTH returns the character length of a text string, exactly as [LEN](LEN.md)(*textToPrint$*) (**version 1.000 and up**).

  

## Examples

*Example:* SUB returns font or screen mode's text block size using _PRINTWIDTH and [_FONTHEIGHT](_FONTHEIGHT.md) without a handle parameter.

``` [DO](DO.md)   [INPUT](INPUT.md) "Enter Screen mode 1, 2 or 7 to 13: ", scr$   mode% = [VAL](VAL.md)(scr$) [LOOP](LOOP.md) [UNTIL](UNTIL.md) mode% > 0 [SCREEN](SCREEN.md) mode% [INPUT](INPUT.md) "Enter first name of TTF font to use or hit enter for text size: ", TTFont$ [IF](IF.md) [LEN](LEN.md)(TTFont$) [THEN](THEN.md) [INPUT](INPUT.md) "INPUT (file mode)") "Enter font height: ", hi$ height& = [VAL](VAL.md)(hi$) [IF](IF.md) height& > 0 [THEN](THEN.md) [_FONT](_FONT.md) [_LOADFONT](_LOADFONT.md)("C:\Windows\Fonts\" + TTFont$ + ".ttf", height&, style$)  TextSize wide&, high&       'get the font or current screen mode's text block pixel size  [_PRINTSTRING](_PRINTSTRING.md) (20, 100), [CHR$](CHR$.md)(1) + [STR$](STR$.md)(wide&) + " X" + [STR$](STR$.md)(high&) + " " + [CHR$](CHR$.md)(2)  [END](END.md)  [SUB](SUB.md) TextSize (TextWidth&, TextHeight&) TextWidth& = _PRINTWIDTH("W")     'measure width of one font or text character TextHeight& = [_FONTHEIGHT](_FONTHEIGHT.md)         'can measure normal text block heights also [END SUB](END SUB.md)  
```

  

## See also

* [_FONTWIDTH](_FONTWIDTH.md), [_FONTHEIGHT](_FONTHEIGHT.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_LOADFONT](_LOADFONT.md)
* [_PRINTSTRING](_PRINTSTRING.md), [_FONT](_FONT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
