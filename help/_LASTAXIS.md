# _LASTAXIS

The _LASTAXIS function returns the number of axis a specified number INPUT device on your computer has.

  

## Syntax

*axisCount%* = _LASTAXIS(*deviceNumber*)
  

## Description

* Returns the number of axis that can be read on a specified device number within the number of [_DEVICES](_DEVICES.md) found.
* A valid number can be sent to the [_AXIS](_AXIS.md) function to find any relative axis movements.
* The devices are listed in a numerical order determined by the OS and can be read by the [DEVICE$](DEVICE$.md) function.
* **The [_DEVICES](_DEVICES.md) function must be read before using _LASTAXIS or an ["Illegal Function Call" error]("Illegal Function Call" error.md) will occur.**
* Devices include keyboard(1), mouse(2), joysticks, game pads and multiple stick game controllers.

  

## Examples

*Example:* Checking for the system's input devices and number of axis.

``` devices = [_DEVICES](_DEVICES.md)  'MUST be read in order for other 2 device functions to work! PRINT "Number of input devices found ="; devices FOR i = 1 TO devices   PRINT [_DEVICE$](_DEVICE$.md)(i)   IF [INSTR](INSTR.md)([_DEVICE$](_DEVICE$.md)(i), "[AXIS]") THEN PRINT "Axis:"; _LASTAXIS(i) NEXT  
```

``` Number of input devices found = 2 [KEYBOARD][BUTTON] [MOUSE][BUTTON][AXIS][WHEEL] Axis: 2  
```

Note: The [STRIG](STRIG.md)/[STICK](STICK.md) commands won't read from the keyboard or mouse device the above example lists.
  

## See also

* [_LASTBUTTON](_LASTBUTTON.md), [_LASTWHEEL](_LASTWHEEL.md)
* [_AXIS](_AXIS.md), [_BUTTON](_BUTTON.md), [_WHEEL](_WHEEL.md)
* [_DEVICE$](_DEVICE$.md), [_DEVICES](_DEVICES.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [STRIG](STRIG.md), [STICK](STICK.md)
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)")

  
