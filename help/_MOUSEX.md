# _MOUSEX

The _MOUSEX function returns the current horizontal (column) mouse cursor position when read after [_MOUSEINPUT](_MOUSEINPUT.md).

  

## Syntax

*pixelColumn%* = _MOUSEX
  

## Description

* [SCREEN](SCREEN.md) 0 returns the [INTEGER](INTEGER.md) horizontal text column position (from build 20170817/62 onward); older versions return a [SINGLE](SINGLE.md) horizontal text column position. Use [INTEGER](INTEGER.md) variables to avoid floating decimal returns.
* Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](_NEWIMAGE.md) 32 bit return the [INTEGER](INTEGER.md) pixel columns.
* To calculate text columns in graphic modes, divide the return by 8 or the [_FONTWIDTH](_FONTWIDTH.md) of [_FONT](_FONT.md) characters.
* [_MOUSEINPUT](_MOUSEINPUT.md) must be used to detect any changes in the mouse position and is **required** for any coordinate returns.

### QBasic/QuickBASIC

* In [SCREEN](SCREEN.md) 0, QBasic's [ABSOLUTE](ABSOLUTE.md) returned graphic coordinates. QB64 mouse functions return the text coordinates.

  

## Examples

*Example:* A simple mouse drawing board using _MOUSEX and [_MOUSEY](_MOUSEY.md) coordinate values.

``` [SCREEN](SCREEN.md) 12 [LINE](LINE.md) (99, 9)-(601, 401), 7, BF [LINE](LINE.md) (101, 11)-(599, 399), 8, BF tm$ = " Column = ###  Row = ###  Button1 = ##  Button2 = ##  Button3 = ##" [LOCATE](LOCATE.md) 29, 20: [PRINT](PRINT.md) "LeftButton = draw - RightButton = Erase"; [DO](DO.md): K$ = [INKEY$](INKEY$.md)   [DO](DO.md) [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)     X = _MOUSEX: Y = [_MOUSEY](_MOUSEY.md)     [IF](IF.md) X > 100 [AND](AND.md) "AND (boolean)") X < 600 [AND](AND.md) "AND (boolean)") PX > 100 [AND](AND.md) "AND (boolean)") PX < 600 [THEN](THEN.md)       [IF](IF.md) Y > 10 [AND](AND.md) "AND (boolean)") Y < 400 [AND](AND.md) "AND (boolean)") PY > 10 [AND](AND.md) "AND (boolean)") PY < 400 [THEN](THEN.md)         [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(1) [THEN](THEN.md) [LINE](LINE.md) (PX, PY)-(X, Y), 15         [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(2) [THEN](THEN.md) [LINE](LINE.md) (101, 11)-(599, 399), 8, BF       [END IF](END IF.md)     [END IF](END IF.md)     PX = X: PY = Y     [LOCATE](LOCATE.md) 28, 10: [PRINT USING](PRINT USING.md) tm$; X; Y; [_MOUSEBUTTON](_MOUSEBUTTON.md)(1); [_MOUSEBUTTON](_MOUSEBUTTON.md)(2); [_MOUSEBUTTON](_MOUSEBUTTON.md)(3)   [LOOP](LOOP.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = [CHR$](CHR$.md)(27) [SYSTEM](SYSTEM.md)  
```

  

## See also

* [_MOUSEY](_MOUSEY.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md), [_MOUSEWHEEL](_MOUSEWHEEL.md)
* [_MOUSEINPUT](_MOUSEINPUT.md), [_MOUSEMOVE](_MOUSEMOVE.md)
* [_MOUSESHOW](_MOUSESHOW.md), [_MOUSEHIDE](_MOUSEHIDE.md)
* [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md), [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)
* [Controller Devices](Controller Devices.md)

  
