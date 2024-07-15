# _PRINTIMAGE

The _PRINTIMAGE statement prints a colored image on the printer, stretching it to full paper size first.

  

## Syntax

_PRINTIMAGE *imageHandle&*
  

* *imageHandle&* is created by the [_LOADIMAGE](_LOADIMAGE.md), [_NEWIMAGE](_NEWIMAGE.md) or [_COPYIMAGE](_COPYIMAGE.md) functions.
* Use a white background to save ink. [CLS](CLS.md) , [_RGB](_RGB.md)(255, 255, 255) can be used to set the white background in any [SCREEN](SCREEN.md) mode.
* The image may be stretched disproportionately using normal screen sizes. To compensate, use a [_NEWIMAGE](_NEWIMAGE.md) screen that is proportional to the paper size. *e.g.* A 640 X 900 SCREEN page is roughly the same as 3 times a 210mm X 297mm paper size.
* [_NEWIMAGE](_NEWIMAGE.md) or graphic screen pages can use [_PRINTSTRING](_PRINTSTRING.md) to print different sized text [_FONTs](_FONTs.md).
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Examples

*Example 1:* Shows how to transfer custom font text on screen pages to the printer in Windows. Change the font path for other OS's.

``` PageScale = 10 PageHeight = 297 * PageScale 'A4 paper size is 210 X 297 mm PageWidth = 210 * PageScale Page& = [_NEWIMAGE](_NEWIMAGE.md)(PageWidth, PageHeight, 32) [_DEST](_DEST.md) Page&: [CLS](CLS.md) , [_RGB](_RGB.md)(255, 255, 255): [_DEST](_DEST.md) 0  'make background white to save ink! CursorPosY = 0  'example text to print PointSize = 12 text$ = "The rain in Spain falls mainly on the plain." [GOSUB](GOSUB.md) PrintText  PointSize = 50 text$ = "BUT!" [GOSUB](GOSUB.md) PrintText  PointSize = 12 text$ = "In Hartford, Hereford, and Hampshire, hurricanes hardly happen." [GOSUB](GOSUB.md) PrintText  [INPUT](INPUT.md) "Preview (Y/N)?", i$                      'print preview of screen (optional) [IF](IF.md) [UCASE$](UCASE$.md)(i$) = "Y" [THEN](THEN.md)   Prev& = [_NEWIMAGE](_NEWIMAGE.md)(600, 900, 32)               'print preview smaller image   [_PUTIMAGE](_PUTIMAGE.md) , Page&, Prev&   [SCREEN](SCREEN.md) Prev&   DO: [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""   [SCREEN](SCREEN.md) 0 [END IF](END IF.md)  [INPUT](INPUT.md) "Print on printer (Y/N)?", i$             'print screen page on printer [IF](IF.md) [UCASE$](UCASE$.md)(i$) = "Y" [THEN](THEN.md)   _PRINTIMAGE Page& [END IF](END IF.md)  [END](END.md)  PrintText: FontHeight = [INT](INT.md)(PointSize * 0.3527 * PageScale) FontHandle = [_LOADFONT](_LOADFONT.md)("c:\windows\fonts\times.ttf", FontHeight) [_DEST](_DEST.md) Page& [_FONT](_FONT.md) FontHandle [COLOR](COLOR.md) [_RGB](_RGB.md)(255, 0, 0), [_RGBA](_RGBA.md)(0, 0, 0, 0)        'RED text on clear black background [_PRINTSTRING](_PRINTSTRING.md) (0, CursorPosY), text$ [_FONT](_FONT.md) 16                               'change to the QB64 default font to free it [_FREEFONT](_FREEFONT.md) FontHandle [_DEST](_DEST.md) 0 CursorPosY = CursorPosY + FontHeight            'adjust print position down [RETURN](RETURN.md)  
```

*Explanation:* CLS with the color white makes sure that the background is not printed a color. The PrintText [GOSUB](GOSUB.md) sets the [COLOR](COLOR.md) of the text to red with a transparent background using [_RGBA](_RGBA.md) to set the [_ALPHA](_ALPHA.md) transparency to zero or clear black.
  

*Example 2:* Printing an old SCREEN 12 [ASCII](ASCII.md) table using a deeper sized page to prevent stretching by _PRINTIMAGE.

``` [_TITLE](_TITLE.md) "Print Preview ASCII Table" [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 900, 256)  'size is proportional to 210mm X 297mm(8-1/2 X 11) paper  [OUT](OUT.md) [&H](&H.md)3C8, 0: [OUT](OUT.md) [&H](&H.md)3C9, 63: [OUT](OUT.md) [&H](&H.md)3C9, 63: [OUT](OUT.md) [&H](&H.md)3C9, 63 'white background saves ink!  Align 8, 2, "ASCII and Extended Character Code Table using [CHR$](CHR$.md)(n%)" [PRINT](PRINT.md) [STRING$](STRING$.md)(80, 223) [COLOR](COLOR.md) 40 [PRINT](PRINT.md) " "; [FOR](FOR.md) i% = 0 [TO](TO.md) 13   [PRINT](PRINT.md) i%;: SetCHR [CSRLIN](CSRLIN.md), [POS](POS.md)(0), 40, i%   [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md), [POS](POS.md)(0) + 1 [NEXT](NEXT.md) i% [FOR](FOR.md) i% = 14 [TO](TO.md) 16   [PRINT](PRINT.md) i%; [CHR$](CHR$.md)(i%); [NEXT](NEXT.md) [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md) + 1, 2 [FOR](FOR.md) i = 17 [TO](TO.md) 27   [PRINT](PRINT.md) i; [CHR$](CHR$.md)(i); [NEXT](NEXT.md) [FOR](FOR.md) i% = 28 [TO](TO.md) 31   [PRINT](PRINT.md) i%;: SetCHR [CSRLIN](CSRLIN.md), [POS](POS.md)(0), 40, i%   [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md), [POS](POS.md)(0) + 1 [NEXT](NEXT.md) i% [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md) + 1, 2 [COLOR](COLOR.md) 2: [PRINT](PRINT.md) 32; [CHR$](CHR$.md)(32); [FOR](FOR.md) i% = 33 [TO](TO.md) 255   [SELECT CASE](SELECT CASE.md) i%     [CASE](CASE.md) 45, 58, 71, 84: [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md) + 1, 1     [CASE](CASE.md) [IS](IS.md) > 96: [IF](IF.md) (i% - 97) [MOD](MOD.md) 11 = 0 [THEN](THEN.md) [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md) + 1, 1   [END SELECT](END SELECT.md)   [SELECT CASE](SELECT CASE.md) i%     [CASE](CASE.md) 48 [TO](TO.md) 57: [COLOR](COLOR.md) 9 'denotes number keys 48 to 57     [CASE](CASE.md) 65 [TO](TO.md) 90: [COLOR](COLOR.md) 5 ' A to Z keys 65 to 90     [CASE](CASE.md) 97 [TO](TO.md) 122: [COLOR](COLOR.md) 36 'a to z keys 97 to 122     [CASE](CASE.md) 127 [TO](TO.md) 175: [COLOR](COLOR.md) 42     [CASE](CASE.md) 176 [TO](TO.md) 223: [COLOR](COLOR.md) 6 'drawing characters 176 to 223     [CASE](CASE.md) [IS](IS.md) > 223: [COLOR](COLOR.md) 42     [CASE ELSE](CASE ELSE.md): [COLOR](COLOR.md) 2   [END SELECT](END SELECT.md)   [IF](IF.md) i% = 98 [OR](OR.md) "OR (boolean)") i% = 99 [OR](OR.md) "OR (boolean)") i% = 100 [THEN](THEN.md) [PRINT](PRINT.md) [SPACE$](SPACE$.md)(1);   [PRINT](PRINT.md) " "; i%; [CHR$](CHR$.md)(i%); [NEXT](NEXT.md) i% [COLOR](COLOR.md) 3: [PRINT](PRINT.md) "= NBSP(Non-Breaking Space)" [COLOR](COLOR.md) 8: [PRINT](PRINT.md) [STRING$](STRING$.md)(80, [CHR$](CHR$.md)(220)) Border 8 [COLOR](COLOR.md) 4: [LOCATE](LOCATE.md) 27, 4: [PRINT](PRINT.md) "7) BELL, 8) Backspace, 9) Tab, 10) LineFeed(printer), 12) FormFeed(printer)" [LOCATE](LOCATE.md) 28, 4: [PRINT](PRINT.md) "  13) Return, 26) End Of File, 27) Escape  30) Line up, 31) Line down "  Align 13, 29, "Press Ctrl + P to PRINT!"  DO: [SLEEP](SLEEP.md): K$ = [INKEY$](INKEY$.md): [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ <> "" Align 13, 29, [SPACE$](SPACE$.md)(50) [IF](IF.md) K$ = [CHR$](CHR$.md)(16) [THEN](THEN.md)   _PRINTIMAGE 0              '<<<<<<<<<<<< to PRINTER   Align 11, 29, "Use the ASCII Table for a reference of the codes!"   [SOUND](SOUND.md) 700, 4 [END IF](END IF.md) K$ = [INPUT$](INPUT$.md)(1) [SYSTEM](SYSTEM.md)  [SUB](SUB.md) Align (Tclr, Trow, txt$) Tcol = 41 - ([LEN](LEN.md)(txt$) \ 2) [COLOR](COLOR.md) Tclr: [LOCATE](LOCATE.md) Trow, Tcol: [PRINT](PRINT.md) txt$; [END SUB](END SUB.md)  [SUB](SUB.md) Border (clr%) [COLOR](COLOR.md) clr% [FOR](FOR.md) row = 1 [TO](TO.md) 30   [LOCATE](LOCATE.md) row, 1: [PRINT](PRINT.md) [CHR$](CHR$.md)(179);   [LOCATE](LOCATE.md) row, 80: [PRINT](PRINT.md) [CHR$](CHR$.md)(179); [NEXT](NEXT.md) row [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) [STRING$](STRING$.md)(80, 196); [LOCATE](LOCATE.md) 30, 1: [PRINT](PRINT.md) [STRING$](STRING$.md)(80, 196); [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) [CHR$](CHR$.md)(218); [LOCATE](LOCATE.md) 1, 80: [PRINT](PRINT.md) [CHR$](CHR$.md)(191); [LOCATE](LOCATE.md) 30, 1: [PRINT](PRINT.md) [CHR$](CHR$.md)(192); [LOCATE](LOCATE.md) 30, 80: [PRINT](PRINT.md) [CHR$](CHR$.md)(217); [END SUB](END SUB.md)  [SUB](SUB.md) SetCHR (Trow, Tcol, FG, ASCode) Srow = 16 * (Trow - 1): Scol = 8 * (Tcol - 1) 'convert text to graphic coordinates [COLOR](COLOR.md) FG: [_PRINTSTRING](_PRINTSTRING.md) (Scol, Srow), [CHR$](CHR$.md)(ASCode) [END SUB](END SUB.md)  
```

*Explanation:* The [ASCII](ASCII.md) character table was originally made in [SCREEN](SCREEN.md) 12 (640 X 480) and was adapted to 256 colors.
  

## See also

* [_LOADIMAGE](_LOADIMAGE.md), [_NEWIMAGE](_NEWIMAGE.md)
* [_COPYIMAGE](_COPYIMAGE.md), [_SAVEIMAGE](_SAVEIMAGE.md)
* [LPRINT](LPRINT.md)
* [Windows Printer Settings](Windows Printer Settings.md)

  
