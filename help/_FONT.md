# _FONT

The _FONT statement sets the current [_LOADFONT](_LOADFONT.md) function font handle to be used by [PRINT](PRINT.md).

  

## Syntax

_FONT *fontHandle&*[, *imageHandle&*]
  

## Parameters

* *fontHandle&* is the handle retrieved from [_LOADFONT](_LOADFONT.md) function, the [_FONT](_FONT.md) "FONT (function)") function, or a predefined handle.
* If the image handle is omitted the current image [_DESTination](_DESTination.md) is used. Zero can designate the current program [SCREEN](SCREEN.md).

  

## Description

* Predefined **QB64** font handle numbers can be used before freeing a font:
	+ **_FONT 8**  - default font for [SCREEN](SCREEN.md) 1, 2, 7, 8 or 13
	+ **_FONT 14** - default font for [SCREEN](SCREEN.md) 9 or 10
	+ **_FONT 16** - default font for [SCREEN](SCREEN.md) 0 ([WIDTH](WIDTH.md) 80, 25 text only), 11 or 12
	+ **_FONT 9, 15** and **17** are the double width versions of 8, 14 and 16 respectively in text **SCREEN 0 only**.
* [Unicode](Unicode.md) characters can be assigned to a monospace font that contains those unicode characters using the [_MAPUNICODE](_MAPUNICODE.md) TO [ASCII](ASCII.md) mapping statement. The optional **IME cyberbit.ttf** font included with QB64 can also be used.
* Can alpha blend a font with a background screen created by [_NEWIMAGE](_NEWIMAGE.md) in 32 bit color.
* **Check for valid handle values greater than 0 before using or freeing font handles.**
* Free **unused** font handles with [_FREEFONT](_FREEFONT.md). Freeing invalid handles will create an ["illegal function call"]("illegal function call".md) error.
* **NOTE: SCREEN 0 can only use one font type and style per viewed SCREEN page. Font size may also affect the window size.**

  

## Examples

*Example:* Previewing a font in SCREEN 0. A different true type font can be substituted below.

``` fontpath$ = [ENVIRON$](ENVIRON$.md)("SYSTEMROOT") + "\fonts\lucon.ttf" 'Find Windows Folder Path. [DO](DO.md): [CLS](CLS.md)     [DO](DO.md)         style$ = "MONOSPACE"         [PRINT](PRINT.md)         [INPUT](INPUT.md) "Enter A FONT Size 8 TO 25: ", fontsize%     [LOOP UNTIL](LOOP UNTIL.md) fontsize% > 7 [AND](AND.md) "AND (boolean)") fontsize% < 26     [DO](DO.md)         [PRINT](PRINT.md)         [INPUT](INPUT.md) "Enter (0) for REGULAR OR (1) for ITALIC FONT: ", italic%     [LOOP UNTIL](LOOP UNTIL.md) italic% = 0 [OR](OR.md) "OR (boolean)") italic% = 1     [DO](DO.md)         [PRINT](PRINT.md)         [INPUT](INPUT.md) "Enter (0) for REGULAR OR (1) for BOLD FONT: ", bold%     [LOOP UNTIL](LOOP UNTIL.md) italic% = 0 [OR](OR.md) "OR (boolean)") italic% = 1     [IF](IF.md) italic% = 1 [THEN](THEN.md) style$ = style$ + ", ITALIC"     [IF](IF.md) bold% = 1 [THEN](THEN.md) style$ = style$ + ", BOLD"      [GOSUB](GOSUB.md) ClearFont     font& = [_LOADFONT](_LOADFONT.md)(fontpath$, fontsize%, style$)     _FONT font&     [PRINT](PRINT.md)     [PRINT](PRINT.md) "This is your LUCON font! Want to try another STYLE?(Y/N): ";     [DO](DO.md): [SLEEP](SLEEP.md): K$ = [UCASE$](UCASE$.md)([INKEY$](INKEY$.md)): [LOOP UNTIL](LOOP UNTIL.md) K$ = "Y" [OR](OR.md) "OR (boolean)") K$ = "N" [LOOP UNTIL](LOOP UNTIL.md) K$ = "N" [GOSUB](GOSUB.md) ClearFont  [PRINT](PRINT.md) "This is the QB64 default _FONT 16!" [END](END.md)  ClearFont: [IF](IF.md) font& > 0 [THEN](THEN.md)     _FONT 16 'select inbuilt 8x16 default font     [_FREEFONT](_FREEFONT.md) font& [END IF](END IF.md) [RETURN](RETURN.md)  
```

**NOTE:** [ENVIRON$](ENVIRON$.md)("SYSTEMROOT") returns a string value of: "C:\WINDOWS". Add the "\FONTS\" folder and the **.TTF** font file name.

  

## See also

* [_FONT (function)](_FONT (function).md) "FONT (function)")
* [_LOADFONT](_LOADFONT.md), [_FREEFONT](_FREEFONT.md)
* [Unicode](Unicode.md), [_MAPUNICODE](_MAPUNICODE.md)
* [Windows Font Dialog Box](Windows Font Dialog Box.md)

  
