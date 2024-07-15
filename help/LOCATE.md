# LOCATE

The LOCATE statement locates the screen text row and column positions for a [PRINT](PRINT.md) or [INPUT](INPUT.md) procedure.

  

## Syntax

LOCATE [*row%*][, *column%*] [, *cursor%*][, *cursorStart%*, *cursorStop%*]
  

## Parameters

* optional text *row%* [INTEGER](INTEGER.md) values are from 1 to 25, 43 or 50 in [SCREEN](SCREEN.md) 0 and 25 in most other legacy graphic screen modes, except screens 11 and 12 which can have 30 or 60 rows.
* optional *column%* [INTEGER](INTEGER.md) values are from 1 to 40 or 80 in [SCREEN](SCREEN.md) 0 and 80 in all other legacy screen modes.
* optional *cursor%* value can be 0 to turn displaying the cursor off or 1 to turn it on.
* optional *cursorStart%* and *cursorStop%* values define the shape of the cursor by setting the start and stop scanline (values range from 0 to 31) for the cursor character.

  

## Description

* [WIDTH](WIDTH.md) statement can be used to determine the text width and height in [SCREEN](SCREEN.md) 0 and height of 30 or 60 in [SCREEN](SCREEN.md) 11 or 12.
* In [_NEWIMAGE](_NEWIMAGE.md) graphic screen the number of text *rows* are calculated as [_HEIGHT](_HEIGHT.md) \ 16 except when a [_FONT](_FONT.md) is used. Use [_FONTHEIGHT](_FONTHEIGHT.md) to calculate font rows.
* [_NEWIMAGE](_NEWIMAGE.md) graphic screen text *columns* are calculated as [_WIDTH](_WIDTH.md) "WIDTH (function)") \ 8 except when a [_FONT](_FONT.md) is used. Use [_PRINTWIDTH](_PRINTWIDTH.md) to measure a line of font text.
	+ Additionally, when a variable width [_FONT](_FONT.md) is active, then the *columns* are not counted as char positions anymore but as pixel positions instead.
* The text *row* position is not required if the [PRINT](PRINT.md) is going to be on the next row. The [comma](comma.md) and a *column* value are required to set the column.
* If only the *row* parameter is given, then the column position remains the same. **Neither *row* or *column* parameter can be 0.**
* When [PRINTing](PRINTing.md) on the bottom 2 *rows*, use a [semicolon](semicolon.md) after the PRINT expression to avoid a screen roll.
* If the *cursorStart%* line is given, the *cursorStop%* line must also be given. A wider range between them produces a taller cursor.
* If you use LOCATE beyond the current number of rows in text mode, QB64 will try to adapt the screen instead of tossing an error.
* When writing to the console, only the *row* and *column* arguments are used, all others are ignored. Furthermore, on non-Windows systems LOCATE statements that do not give both a *row* and *column* will be ignored entirely.

  

## Examples

*Example:* Moving the cursor around (now you can finally create a Commodore 64 emulator!). **Default SCREEN 0 only:**

``` crx = 10 cry = 10 [DO](DO.md)     LOCATE cry, crx, 1, 0, 8     a$ = [INKEY$](INKEY$.md)     [SELECT CASE](SELECT CASE.md) a$         [CASE](CASE.md) [CHR$](CHR$.md)(0) + "H": [IF](IF.md) cry > 1 [THEN](THEN.md) cry = cry - 1 'up         [CASE](CASE.md) [CHR$](CHR$.md)(0) + "P": [IF](IF.md) cry < 25 [THEN](THEN.md) cry = cry + 1 'down         [CASE](CASE.md) [CHR$](CHR$.md)(0) + "K": [IF](IF.md) crx > 1 [THEN](THEN.md) crx = crx - 1 'left         [CASE](CASE.md) [CHR$](CHR$.md)(0) + "M": [IF](IF.md) crx < 80 [THEN](THEN.md) crx = crx + 1 'right         [CASE](CASE.md) [CHR$](CHR$.md)(27): [END](END.md)     [END SELECT](END SELECT.md) [LOOP](LOOP.md)  
```

Explanation: The CHR$(0) + "H", "P", "K", "M" represents the cursor arrow keys. start = 0, stop = 8 is the tallest cursor, experiment with the start and stop values for different effects (start = 8, stop = 8 is the default producing a _ cursor).
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [CSRLIN](CSRLIN.md), [POS](POS.md) (cursor position)
* [SCREEN](SCREEN.md), [PRINT](PRINT.md), [COLOR](COLOR.md)
* [INPUT](INPUT.md), [LINE INPUT](LINE INPUT.md), [INPUT$](INPUT$.md) (keyboard input)
* [WIDTH](WIDTH.md), [INPUT$](INPUT$.md), [INKEY$](INKEY$.md)

  
