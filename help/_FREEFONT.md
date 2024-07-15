# _FREEFONT

The _FREEFONT statement frees a font handle that was created by [_LOADFONT](_LOADFONT.md).

  

## Syntax

_FREEFONT (*fontHandle&*)
  

## Description

* Unloads fonts that are no longer in use or needed in order to free program memory and resources.
* You cannot free a font which is in use. Change the font to a QB64 default font size before freeing the handle (see example below).
* Predefined **QB64** font handle numbers can be used before freeing a font:
	+ **_FONT 8**  - default font for [SCREEN](SCREEN.md) 1, 2, 7, 8 or 13
	+ **_FONT 14** - default font for [SCREEN](SCREEN.md) 9 or 10
	+ **_FONT 16** - default font for [SCREEN](SCREEN.md) 0 ([WIDTH](WIDTH.md) 80, 25 text only), 11 or 12
	+ **_FONT 9, 15** and **17** are the double width versions of 8, 14 and 16 respectively in text **SCREEN 0**.
* If the font handle is invalid (equals -1 or 0), an [error](error.md) will occur. **Check handle values before using or freeing them.**
* You cannot free inbuilt/default QB64 fonts nor do they ever need freed.

  

## Examples

*Example 1:* Previews and creates a file list of valid MONOSPACE TTF fonts by checking the [_LOADFONT](_LOADFONT.md) handle values.

``` [SCREEN](SCREEN.md) 12 path$ = "C:\WINDOWS\Fonts\" 'path to the font folder [SHELL](SHELL.md) [_HIDE](_HIDE.md) "DIR /b " + path$ + "\*.ttf > TTFonts.INF" style$ = "monospace" 'set style to MONOSPACE [OPEN](OPEN.md) "TTFonts.INF" [FOR](FOR.md) [INPUT](INPUT.md) [AS](AS.md) #1 'list of TTF fonts only [OPEN](OPEN.md) "TTFMono.INF" [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #2 'will hold list of valid MONOSPACE fonts  [DO UNTIL](DO UNTIL.md) [EOF](EOF.md)(1): found = found + 1     [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #1, font$     f& = [_LOADFONT](_LOADFONT.md)(path$ + font$, 30, style$)     [IF](IF.md) f& > 0 [THEN](THEN.md) 'check for valid handle values > 0         OK = OK + 1         [PRINT](PRINT.md) "PRINT (file statement)") #2, font$         [_FONT](_FONT.md) f& 'will create error if handle is invalid!         [PRINT](PRINT.md) "Hello World!"         [PRINT](PRINT.md): [PRINT](PRINT.md): [PRINT](PRINT.md) font$; f&         [PRINT](PRINT.md) "Press any key."         K$ = [INPUT$](INPUT$.md)(1)         [_FONT](_FONT.md) 16 'use QB64 default font to free tested font         _FREEFONT f& 'returns an error if handle <= 0!         [CLS](CLS.md)     [END IF](END IF.md)     [PRINT](PRINT.md)     [IF](IF.md) K$ = [CHR$](CHR$.md)(27) [THEN](THEN.md) [EXIT DO](EXIT DO.md) [LOOP](LOOP.md) [CLOSE](CLOSE.md) [PRINT](PRINT.md): [PRINT](PRINT.md): [PRINT](PRINT.md) "Found"; found; "TTF files,"; OK; "can use Monospace," [END](END.md)  
```

``` Found 106 TTF files, 13 can use Monospace.  
```

---

*Example 2:* Using a _FREEFONT sub-procedure.

``` fontpath$ = [ENVIRON$](ENVIRON$.md)("SYSTEMROOT") + "\fonts\lucon.ttf" style$ = "MONOSPACE, ITALIC, BOLD" fontsize% = 20  [_FONT](_FONT.md) 16 [PRINT](PRINT.md) [PRINT](PRINT.md) "This is the QB64 default _FONT 16! To change, press any key!" [DO](DO.md): [SLEEP](SLEEP.md): [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""  [GOSUB](GOSUB.md) ClearFont 'call will not free anything if font& = 0  font& = [_LOADFONT](_LOADFONT.md)(fontpath$, fontsize%, style$) [IF](IF.md) font > 0 [THEN](THEN.md) [_FONT](_FONT.md) font& 'NEVER try to load a font value less than 1! [PRINT](PRINT.md) [PRINT](PRINT.md) "A NEW _FONT style. To change to default, press any key!" [DO](DO.md): [SLEEP](SLEEP.md): [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""  [GOSUB](GOSUB.md) ClearFont 'call will free a valid font handle from memory  [END](END.md)  ClearFont: [IF](IF.md) font& > 0 [THEN](THEN.md)     [_FONT](_FONT.md) 16 'change used font to the QB64 8x16 default font     _FREEFONT font&     [PRINT](PRINT.md): [PRINT](PRINT.md) "The previous font was freed with _FREEFONT!" [ELSE](ELSE.md): [PRINT](PRINT.md): [PRINT](PRINT.md) "_FREEFONT was not used!" [END IF](END IF.md) [RETURN](RETURN.md)  
```

  

## See also

* [_FONT](_FONT.md)
* [_LOADFONT](_LOADFONT.md)

  
