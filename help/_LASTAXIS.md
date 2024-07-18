## _LASTAXIS
---

### The _LASTAXIS function returns the number of axis a specified number INPUT device on your computer has.

#### SYNTAX

`axisCount% = _LASTAXIS ( deviceNumber )`

#### DESCRIPTION
* Returns the number of axis that can be read on a specified device number within the number of [_DEVICES](./_DEVICES.md) found.
* A valid number can be sent to the [_AXIS](./_AXIS.md) function to find any relative axis movements.
* The devices are listed in a numerical order determined by the OS and can be read by the DEVICE$ function.
* The [_DEVICES](./_DEVICES.md) function must be read before using [_LASTAXIS](./_LASTAXIS.md) or an "Illegal Function Call" error will occur.
* Devices include keyboard(1), mouse(2), joysticks, game pads and multiple stick game controllers.


#### EXAMPLES
##### Example: Checking for the system's input devices and number of axis.
```vb
devices = _DEVICES  'MUST be read in order for other 2 device functions to work!
PRINT "Number of input devices found ="; devices
FOR i = 1 TO devices
 PRINT _DEVICE$(i)
 IF INSTR(_DEVICE$(i), "[AXIS]") THEN PRINT "Axis:"; _LASTAXIS(i)
NEXT
```
  
```vb
Number of input devices found = 2
[KEYBOARD][BUTTON]
[MOUSE][BUTTON][AXIS][WHEEL]
Axis: 2
```
  


#### SEE ALSO
* [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTWHEEL](./_LASTWHEEL.md)
* [_AXIS](./_AXIS.md) , [_BUTTON](./_BUTTON.md) , [_WHEEL](./_WHEEL.md)
* _DEVICE$ , [_DEVICES](./_DEVICES.md)
* [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* [STRIG](./STRIG.md) , [STICK](./STICK.md)
* [ON](./ON.md) [STRIG](./STRIG.md)(n) , [STRIG](./STRIG.md)(n)
