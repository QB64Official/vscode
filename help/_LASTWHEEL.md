# _LASTWHEEL

The _LASTWHEEL function returns the number of wheels a specified number INPUT device on your computer has.

  

## Syntax

*wheelCount%* = _LASTWHEEL(*deviceNumber*)
  

* Returns the number of wheels that can be used on a specified device number within the number of [_DEVICES](_DEVICES.md) found.
* A valid number can be sent to the [_WHEEL](_WHEEL.md) function to find any relative positive or negative wheel movements.
* The devices are listed in a numerical order determined by the OS and can be read by the [_DEVICE$](_DEVICE$.md) function.
* **The [_DEVICES](_DEVICES.md) function must be read before using _LASTWHEEL or an ["Illegal Function Call" error]("Illegal Function Call" error.md) may occur.**
* Devices include keyboard (reported as 1), mouse (reported as 2), joysticks, game pads and multiple stick game controllers.

  

## Examples

*Example:* Checking for the system's input devices and number of wheels available.

``` devices = [_DEVICES](_DEVICES.md)  'MUST be read in order for other 2 device functions to work! PRINT "Number of input devices found ="; devices FOR i = 1 TO devices   PRINT [_DEVICE$](_DEVICE$.md)(i)   IF [INSTR](INSTR.md)([_DEVICE$](_DEVICE$.md)(i), "[WHEEL]") THEN PRINT "Wheels:"; _LASTWHEEL(i) NEXT  
```

``` Number of input devices found = 2 [KEYBOARD][BUTTON] [MOUSE][BUTTON][AXIS][WHEEL] Wheels: 3  
```

*Note:* A mouse may have 3 wheels listed when there is only one scroll wheel.
  

## See also

* [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md)
* [_AXIS](_AXIS.md), [_BUTTON](_BUTTON.md), [_WHEEL](_WHEEL.md)
* [_DEVICE$](_DEVICE$.md), [_DEVICES](_DEVICES.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [STRIG](STRIG.md), [STICK](STICK.md)
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)")

  
