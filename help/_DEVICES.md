# _DEVICES

The **_DEVICES** function returns the number of input devices on your computer including keyboard, mouse and game devices.

  

## Syntax

*device_count%* = _DEVICES
  

## Description

* Returns the number of devices that can be listed separately with the [_DEVICE$](_DEVICE$.md) function by the device number.
* Devices include keyboard, mouse, joysticks, game pads and multiple stick game controllers.

Note
This function must be read before trying to use the [_DEVICE$](_DEVICE$.md), [_DEVICEINPUT](_DEVICEINPUT.md) or any of the **_LASTxxx** control functions.
  

## Examples

Checking for the system's input devices.

``` devices% = _DEVICES 'MUST be read in order for other 2 device functions to work! [PRINT](PRINT.md) "Number of input devices found ="; devices% [FOR](FOR.md) i% = 1 [TO](TO.md) devices%     [PRINT](PRINT.md) [_DEVICE$](_DEVICE$.md)(i%)     [PRINT](PRINT.md) "Buttons:"; [_LASTBUTTON](_LASTBUTTON.md)(i%) [NEXT](NEXT.md) i% [END](END.md)  
```

``` Number of input devices found = 2 [KEYBOARD][BUTTON] Buttons: 512 [MOUSE][BUTTON][AXIS][WHEEL] Buttons: 3  
```

Note
The [STRIG](STRIG.md) and [STICK](STICK.md) commands won't read from the keyboard or mouse device the above example lists.
  

## See also

* [_DEVICE$](_DEVICE$.md), [_DEVICEINPUT](_DEVICEINPUT.md)
* [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md), [_LASTWHEEL](_LASTWHEEL.md)
* [_BUTTON](_BUTTON.md), [_BUTTONCHANGE](_BUTTONCHANGE.md)
* [_AXIS](_AXIS.md), [_WHEEL](_WHEEL.md)
* [_MOUSEINPUT](_MOUSEINPUT.md), [_MOUSEX](_MOUSEX.md), [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [STRIG](STRIG.md), [STICK](STICK.md)
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)")
* [Controller Devices](Controller Devices.md)

  
