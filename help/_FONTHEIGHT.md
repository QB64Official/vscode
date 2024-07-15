# _FONTHEIGHT

The _FONTHEIGHT function returns the font height of a font handle created by [_LOADFONT](_LOADFONT.md).

  

## Syntax

*pixelHeight%* = _FONTHEIGHT[(*fontHandle&*)]
  

## Description

* Returns the height of the last font used if a handle is not designated.
* If no font is set it returns the current screen mode's text block height.

  

## Examples

*Example:* Finding the [font](font.md) or text block size of printed [string](string.md) characters in graphic [SCREEN](SCREEN.md) modes.

``` [DO](DO.md)     [INPUT](INPUT.md) "Enter Screen mode 1, 2 or 7 to 13 or 256, 32 for _NEWIMAGE: ", scr$     mode% = [VAL](VAL.md)(scr$) [LOOP UNTIL](LOOP UNTIL.md) mode% > 0 [SELECT CASE](SELECT CASE.md) mode%     [CASE](CASE.md) 1, 2, 7 [TO](TO.md) 13: [SCREEN](SCREEN.md) mode%     [CASE](CASE.md) 256, 32: [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, mode%)     [CASE](CASE.md) [ELSE](ELSE.md): [PRINT](PRINT.md) "Invalid mode selected!": [END](END.md) [END SELECT](END SELECT.md)  [INPUT](INPUT.md) "Enter first name of TTF font to use or hit enter for text block size: ", TTFont$ [IF](IF.md) [LEN](LEN.md)(TTFont$) [THEN](THEN.md) [INPUT](INPUT.md) "Enter font height: ", hi$ height& = [VAL](VAL.md)(hi$) [IF](IF.md) height& > 0 [THEN](THEN.md)     fnt& = [_LOADFONT](_LOADFONT.md)("C:\Windows\Fonts\" + TTFont$ + ".ttf", height&, style$)     [IF](IF.md) fnt& <= 0 [THEN](THEN.md) [PRINT](PRINT.md) "Invalid Font handle!": [END](END.md)     [_FONT](_FONT.md) fnt& [END IF](END IF.md)  TextSize wide&, high& 'get the font or current screen mode's text block pixel size  [_PRINTSTRING](_PRINTSTRING.md) (20, 100), "Block size = " + [CHR$](CHR$.md)(1) + [STR$](STR$.md)(wide&) + " X" + [STR$](STR$.md)(high&) + " " + [CHR$](CHR$.md)(2)  [END](END.md)  [SUB](SUB.md) TextSize (TextWidth&, TextHeight&)     TextWidth& = [_PRINTWIDTH](_PRINTWIDTH.md)("W") 'measure width of one font or text character     TextHeight& = _FONTHEIGHT 'can measure normal text block heights also [END SUB](END SUB.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_FONTWIDTH](_FONTWIDTH.md), [_FONT](_FONT.md)
* [_PRINTWIDTH](_PRINTWIDTH.md), [_PRINTSTRING](_PRINTSTRING.md)
* [SCREEN](SCREEN.md), [_LOADFONT](_LOADFONT.md)
* [Text Using Graphics](Text Using Graphics.md) (Demo)

  
