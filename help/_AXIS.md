# _AXIS

The _AXIS function returns the relative position of a specified axis number on a controller device.

  

## Syntax

*move!* = _AXIS(*axis_number%*)
  

## Description

* [SINGLE](SINGLE.md) values returned range between -1 and 1 as maximums and 0 indicating minimum or axis center.
* When the mouse is moved on the program screen, moves left or above center are negative while below or right are positive.
* The *axis_number* must be a number which does not exceed the number of axis found by the [_LASTAXIS](_LASTAXIS.md) function.
* **The number of [_DEVICES](_DEVICES.md) must be read before using [_DEVICE$](_DEVICE$.md), [_DEVICEINPUT](_DEVICEINPUT.md) or [_LASTAXIS](_LASTAXIS.md).**

  

## Examples

*Example:* Reading multiple controller device buttons, axis and wheels.

``` [FOR](FOR.md) i = 1 [TO](TO.md) [_DEVICES](_DEVICES.md)     [PRINT](PRINT.md) [STR$](STR$.md)(i) + ") " + [_DEVICE$](_DEVICE$.md)(i) + " Buttons:"; [_LASTBUTTON](_LASTBUTTON.md)(i); ",Axis:"; [_LASTAXIS](_LASTAXIS.md)(i); ",Wheel:"; [_LASTWHEEL](_LASTWHEEL.md)(i) [NEXT](NEXT.md)  [DO](DO.md)     d& = [_DEVICEINPUT](_DEVICEINPUT.md)     [IF](IF.md) d& [THEN](THEN.md) '             the device number cannot be zero!         [PRINT](PRINT.md) "Found"; d&;         [FOR](FOR.md) b = 1 [TO](TO.md) [_LASTBUTTON](_LASTBUTTON.md)(d&)             [PRINT](PRINT.md) [_BUTTONCHANGE](_BUTTONCHANGE.md)(b); [_BUTTON](_BUTTON.md)(b);         [NEXT](NEXT.md)         [FOR](FOR.md) a = 1 [TO](TO.md) [_LASTAXIS](_LASTAXIS.md)(d&)             [PRINT](PRINT.md) _AXIS(a);         [NEXT](NEXT.md)         [FOR](FOR.md) w = 1 [TO](TO.md) [_LASTWHEEL](_LASTWHEEL.md)(d&)             [PRINT](PRINT.md) [_WHEEL](_WHEEL.md)(w);         [NEXT](NEXT.md)         [PRINT](PRINT.md)     [END IF](END IF.md) [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) 'escape key exit  [END](END.md)  
```

*Note:* When there is no device control to read, a [FOR](FOR.md) n = 1 TO 0 loop will not run thus avoiding a control function read error.
  

## See also

* [_LASTWHEEL](_LASTWHEEL.md), [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md)
* [_WHEEL](_WHEEL.md), [_BUTTON](_BUTTON.md), [_BUTTONCHANGE](_BUTTONCHANGE.md)
* [_DEVICE$](_DEVICE$.md), [_DEVICES](_DEVICES.md)
* [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md), [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md) (relative movement)
* [Controller Devices](Controller Devices.md)

  
