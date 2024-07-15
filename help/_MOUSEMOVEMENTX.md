# _MOUSEMOVEMENTX

The _MOUSEMOVEMENTX function returns the relative horizontal position of the mouse cursor as positive or negative values.

  

## Syntax

*horizontalMove* = _MOUSEMOVEMENTX
  

* Returns the relative horizontal cursor pixel position compared to the previous cursor position. Negative values are moves to the left.
* **Note:** A [_MOUSESHOW](_MOUSESHOW.md) statement will disable _MOUSEMOVEMENTX or [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md) relative mouse movement reads.
* Can also be used to check for any mouse movements to enable a program or close [Screen Saver Programs](Screen Saver Programs.md).
* Sets the mouse to a relative movement mode which can be read by [_WHEEL](_WHEEL.md) instead of [_AXIS](_AXIS.md) as mouse [device](device.md) 2.

  

## Examples

Example 1
Since values returned are relative to the last position, the returns can be positive or negative.

``` [SCREEN](SCREEN.md) 12 PX = 320: PY = 240 'center position [DO](DO.md): [_LIMIT](_LIMIT.md) 200     [DO WHILE](DO WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)         PX = PX + _MOUSEMOVEMENTX         PY = PY + [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)     [LOOP](LOOP.md)     [CLS](CLS.md)     [CIRCLE](CIRCLE.md) (PX, PY), 10, 10     [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) PX, PY [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) 'escape key exit  
```

---

Example 2
MOD is used to keep horizontal movement of the circle and cursor inside of the SCREEN 13 window(320).
Note when using the function this way, then give the user a keypress exit option. Make sure the user has some way to exit that is not dependent on clicking the X button.

``` [SCREEN](SCREEN.md) 13, , 1, 0 [DO](DO.md): [_LIMIT](_LIMIT.md) 200     [DO WHILE](DO WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)         x = x + _MOUSEMOVEMENTX         y = y + [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)     [LOOP](LOOP.md)     x = (x + 320) [MOD](MOD.md) 320 'keeps object on screen     y = (y + 200) [MOD](MOD.md) 200 'remove if off screen moves are desired     [CLS](CLS.md)     [CIRCLE](CIRCLE.md) (x, y), 20     [PCOPY](PCOPY.md) 1, 0 [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> "" 'press any key to exit  
```

  

## See also

* [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)
* [_MOUSEINPUT](_MOUSEINPUT.md), [_MOUSEX](_MOUSEX.md)
* [_DEVICES](_DEVICES.md), [_DEVICEINPUT](_DEVICEINPUT.md)
* [_WHEEL](_WHEEL.md), [_LASTWHEEL](_LASTWHEEL.md)
* [_AXIS](_AXIS.md), [_LASTAXIS](_LASTAXIS.md)
* [_MOUSESHOW](_MOUSESHOW.md), [_MOUSEHIDE](_MOUSEHIDE.md)
* [Screen Saver Programs](Screen Saver Programs.md)

  
