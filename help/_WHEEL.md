# _WHEEL

The _WHEEL function returns the relative position of a specified wheel number on a controller device.

  

## Syntax

*move* = _WHEEL(*wheelNumber%*)
  

* Returns -1 when scrolling up and 1 when scrolling down with 0 indicating no movement since last read.
* Add consecutive wheel values to determine a cumulative value over time for scrolling or moving objects.
* *wheelNumber%* must be a number which does not exceed the number of wheels found by the [_LASTWHEEL](_LASTWHEEL.md) function.
* When a mouse indicates it has 3 wheels, the first two are for relative movement reads. The third wheel is for scrolling.
* **The number of [_DEVICES](_DEVICES.md) must be read before using [_DEVICE$](_DEVICE$.md), [_DEVICEINPUT](_DEVICEINPUT.md) or [_LASTWHEEL](_LASTWHEEL.md).**

  

## Examples

*Example 1:* Reading multiple controller device buttons, axis and wheels.

``` [FOR](FOR.md) i = 1 [TO](TO.md) [_DEVICES](_DEVICES.md)   [PRINT](PRINT.md) [STR$](STR$.md)(i) + ") " + [_DEVICE$](_DEVICE$.md)(i) + " Buttons:"; [_LASTBUTTON](_LASTBUTTON.md)(i); ",Axis:"; [_LASTAXIS](_LASTAXIS.md)(i); ",Wheel:"; [_LASTWHEEL](_LASTWHEEL.md)(i) [NEXT](NEXT.md)  [DO](DO.md)   d& = [_DEVICEINPUT](_DEVICEINPUT.md)   [IF](IF.md) d& [THEN](THEN.md) '             the device number cannot be zero!     [PRINT](PRINT.md) "Found"; d&;     [FOR](FOR.md) b = 1 [TO](TO.md) [_LASTBUTTON](_LASTBUTTON.md)(d&)       [PRINT](PRINT.md) [_BUTTONCHANGE](_BUTTONCHANGE.md)(b); [_BUTTON](_BUTTON.md)(b);     [NEXT](NEXT.md)     [FOR](FOR.md) a = 1 [TO](TO.md) [_LASTAXIS](_LASTAXIS.md)(d&)       [PRINT](PRINT.md) [_AXIS](_AXIS.md)(a);     [NEXT](NEXT.md)     [FOR](FOR.md) w = 1 [TO](TO.md) [_LASTWHEEL](_LASTWHEEL.md)(d&)       [PRINT](PRINT.md) _WHEEL(w);     [NEXT](NEXT.md)     [PRINT](PRINT.md)   [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) 'escape key exit  [END](END.md)  
```

*Note:* When there is no device control to read, a [FOR](FOR.md) n = 1 TO 0 loop will not run thus avoiding a control function read error.
  

*Example 2:* Why does a mouse have 3 wheels? Relative x and y movements can be read using the first 2 _WHEEL reads.

``` ignore = [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md) 'dummy call to put mouse into relative movement mode  [PRINT](PRINT.md) "Move your mouse and/or your mouse wheel (ESC to exit)"  d = [_DEVICES](_DEVICES.md) '  always read number of devices to enable device input DO: [_LIMIT](_LIMIT.md) 30  'main loop   [DO](DO.md) [WHILE](WHILE.md) [_DEVICEINPUT](_DEVICEINPUT.md)(2) 'loop only runs during a device 2 mouse event         [PRINT](PRINT.md) _WHEEL(1), _WHEEL(2), _WHEEL(3)   [LOOP](LOOP.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  
```

*Explanation:* Referencing the [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md) function hides the mouse and sets the mouse to a relative movement mode which can be read by _WHEEL. [_DEVICEINPUT](_DEVICEINPUT.md)(2) returns -1 (true) only when the mouse is moved, scrolled or clicked.
  

## See also

* [_MOUSEWHEEL](_MOUSEWHEEL.md)
* [_LASTWHEEL](_LASTWHEEL.md), [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md)
* [_AXIS](_AXIS.md), [_BUTTON](_BUTTON.md), [_BUTTONCHANGE](_BUTTONCHANGE.md)
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md), [_DEVICEINPUT](_DEVICEINPUT.md)
* [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md), [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)
* [Controller Devices](Controller Devices.md)

  
