# _MOUSEY

The _MOUSEY function returns the current vertical (row) mouse cursor position when read after [_MOUSEINPUT](_MOUSEINPUT.md).

  

## Syntax

*pixelRow%* = _MOUSEY
  

## Description

* [SCREEN](SCREEN.md) 0 returns the [INTEGER](INTEGER.md) vertical text row position (from build 20170817/62 onward); older versions return a [SINGLE](SINGLE.md) vertical text row position. Use [INTEGER](INTEGER.md) variables to avoid floating decimal returns.
* Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](_NEWIMAGE.md) 32 bit return the [INTEGER](INTEGER.md) pixel columns.
* To calculate text rows in graphic modes divide the return by 16 or the [_FONTHEIGHT](_FONTHEIGHT.md) of [_FONT](_FONT.md) characters.
* [_MOUSEINPUT](_MOUSEINPUT.md) must be used to detect any changes in the mouse position and is **required** for any coordinate returns.

### QBasic/QuickBASIC

* In [SCREEN](SCREEN.md) 0, QBasic's [ABSOLUTE](ABSOLUTE.md) returned graphic coordinates. QB64 mouse functions return the text coordinates.

  

## Examples

*Example:* Highlighting a row of text in Screen 0.

``` minX = 20: maxX = 60: minY = 10: maxY = 24 selection = 0 'the screen Y coordinate of the previously highlighted item [FOR](FOR.md) i% = 1 [TO](TO.md) 25: [LOCATE](LOCATE.md) i%, 40: [PRINT](PRINT.md) i%;: [NEXT](NEXT.md) [DO](DO.md): [_LIMIT](_LIMIT.md) 100   [IF](IF.md) [_MOUSEINPUT](_MOUSEINPUT.md) [THEN](THEN.md)     'Un-highlight any selected row     [IF](IF.md) selection [THEN](THEN.md) selectRow selection, minX, maxX, 0     x = [_MOUSEX](_MOUSEX.md)     y = _MOUSEY     [IF](IF.md) x >= minX [AND](AND.md) "AND (boolean)") x <= maxX [AND](AND.md) "AND (boolean)") y >= minY [AND](AND.md) "AND (boolean)") y <= maxY [THEN](THEN.md)       selection = y     [ELSE](ELSE.md)       selection = 0     [END IF](END IF.md)     'Highlight any selected row     [IF](IF.md) selection [THEN](THEN.md) SelectRow selection, minX, maxX, 2     [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(1) [THEN](THEN.md) [LOCATE](LOCATE.md) 1, 2: [PRINT](PRINT.md) x, y, selection   [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  [SUB](SUB.md) SelectRow (y, x1, x2, col) [DEF SEG](DEF SEG.md) = [&H](&H.md)B800 addr& = (x1 - 1 + (y - 1) * [_WIDTH](_WIDTH.md) "WIDTH (function)")) * 2 + 1 [FOR](FOR.md) x = x1 [TO](TO.md) x2   oldCol = [PEEK](PEEK.md)(addr&) [AND](AND.md) "AND (boolean)") [&B](&B.md)10001111   ' Mask foreground color and blink bit   [POKE](POKE.md) addr&, oldCol [OR](OR.md) ((col [AND](AND.md) "AND (boolean)") [&B](&B.md)111) * [&B](&B.md)10000) ' Apply background color   addr& = addr& + 2 [NEXT](NEXT.md) [END SUB](END SUB.md)  
```

  

## See also

* [_MOUSEX](_MOUSEX.md), [_MOUSEBUTTON](_MOUSEBUTTON.md), [_MOUSEWHEEL](_MOUSEWHEEL.md)
* [_MOUSEINPUT](_MOUSEINPUT.md), [_MOUSEMOVE](_MOUSEMOVE.md)
* [_MOUSESHOW](_MOUSESHOW.md), [_MOUSEHIDE](_MOUSEHIDE.md)
* [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md), [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)
* [Controller Devices](Controller Devices.md)

  
