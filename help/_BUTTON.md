# _BUTTON

The _BUTTON function returns -1 when specified button number on a controller device is pressed.

  

## Syntax

*press%%* = _BUTTON(*button_number%*)
  

## Description

* Values returned are -1 for a press and 0 when a button is released or not pressed.
* The *button_number%* must be a number which does not exceed the number of buttons found by the [_LASTBUTTON](_LASTBUTTON.md) function.
* **The number of [_DEVICES](_DEVICES.md) must be read before using [_DEVICE$](_DEVICE$.md), [_DEVICEINPUT](_DEVICEINPUT.md) or [_LASTBUTTON](_LASTBUTTON.md).**
* **Note:** The number 2 button is the center button in this device configuration. Center is also designated as [_MOUSEBUTTON](_MOUSEBUTTON.md)(3).

  

## Examples

*Example:* Reading multiple controller device buttons, axis and wheels.

``` [FOR](FOR.md) i = 1 [TO](TO.md) [_DEVICES](_DEVICES.md)     [PRINT](PRINT.md) [STR$](STR$.md)(i) + ") " + [_DEVICE$](_DEVICE$.md)(i) + " Buttons:"; [_LASTBUTTON](_LASTBUTTON.md)(i); ",Axis:"; [_LASTAXIS](_LASTAXIS.md)(i); ",Wheel:"; [_LASTWHEEL](_LASTWHEEL.md)(i) [NEXT](NEXT.md)  [DO](DO.md)     d& = [_DEVICEINPUT](_DEVICEINPUT.md)     [IF](IF.md) d& [THEN](THEN.md) '             the device number cannot be zero!         [PRINT](PRINT.md) "Found"; d&;         [FOR](FOR.md) b = 1 [TO](TO.md) [_LASTBUTTON](_LASTBUTTON.md)(d&)             [PRINT](PRINT.md) [_BUTTONCHANGE](_BUTTONCHANGE.md)(b); _BUTTON(b);         [NEXT](NEXT.md)         [FOR](FOR.md) a = 1 [TO](TO.md) [_LASTAXIS](_LASTAXIS.md)(d&)             [PRINT](PRINT.md) [_AXIS](_AXIS.md)(a);         [NEXT](NEXT.md)         [FOR](FOR.md) w = 1 [TO](TO.md) [_LASTWHEEL](_LASTWHEEL.md)(d&)             [PRINT](PRINT.md) [_WHEEL](_WHEEL.md)(w);         [NEXT](NEXT.md)         [PRINT](PRINT.md)     [END IF](END IF.md) [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) 'escape key exit  [END](END.md)  
```

*Note:* When there is no device control to read, a [FOR](FOR.md) n = 1 TO 0 loop will not run thus avoiding a control function read error.
  

## See also

* [_LASTWHEEL](_LASTWHEEL.md), [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md)
* [_AXIS](_AXIS.md), [_WHEEL](_WHEEL.md), [_BUTTONCHANGE](_BUTTONCHANGE.md)
* [_DEVICE$](_DEVICE$.md), [_DEVICES](_DEVICES.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [Controller Devices](Controller Devices.md)

  
