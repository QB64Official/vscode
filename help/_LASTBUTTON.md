# _LASTBUTTON

The _LASTBUTTON function returns the number of buttons a specified INPUT device on your computer has.

  

## Syntax

*buttonCount%* = __LASTBUTTON(*deviceNumber*)
  

* Returns the number of buttons that can be read on a specified device number within the number of [_DEVICES](_DEVICES.md) found.
* A valid number can be sent to the [_BUTTON](_BUTTON.md) or [_BUTTONCHANGE](_BUTTONCHANGE.md) function to find any button events.
* The specific device name and functions can be found by the [_DEVICE$](_DEVICE$.md) function [string](string.md).
* The devices are listed in a numerical order determined by the OS and can be read by the [DEVICE$](DEVICE$.md) function.
* **The [_DEVICES](_DEVICES.md) function must be read before using _LASTBUTTON or an ["Illegal Function Call" error]("Illegal Function Call" error.md) will occur.**
* Devices include keyboard (reported as 1), mouse (reported as 2), joysticks, game pads and multiple stick game controllers.

  

## Examples

*Example:* Checking for the system's input devices.

``` devices = [_DEVICES](_DEVICES.md)  'MUST be read in order for other 2 device functions to work! PRINT "Number of input devices found ="; devices FOR i = 1 TO devices   PRINT [_DEVICE$](_DEVICE$.md)(i)   PRINT "Buttons:"; _LASTBUTTON(i) NEXT  
```

``` Number of input devices found = 2 [KEYBOARD][BUTTON] Buttons: 512 [MOUSE][BUTTON][AXIS][WHEEL] Buttons: 3  
```

Note: The [STRIG](STRIG.md)/[STICK](STICK.md) commands won't read from the keyboard or mouse device the above example lists.
  

## See also

* [_LASTAXIS](_LASTAXIS.md), [_LASTWHEEL](_LASTWHEEL.md)
* [_AXIS](_AXIS.md), [_BUTTON](_BUTTON.md), [_WHEEL](_WHEEL.md)
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md)
* [_DEVICEINPUT](_DEVICEINPUT.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [STRIG](STRIG.md), [STICK](STICK.md)
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)")

  
