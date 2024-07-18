## _LASTWHEEL
---

### The _LASTWHEEL function returns the number of wheels a specified number INPUT device on your computer has.

#### SYNTAX

`wheelCount% = _LASTWHEEL ( deviceNumber )`

#### EXAMPLES
##### Example: Checking for the system's input devices and number of wheels available.
```vb
devices = _DEVICES  'MUST be read in order for other 2 device functions to work!
PRINT "Number of input devices found ="; devices
FOR i = 1 TO devices
 PRINT _DEVICE$(i)
 IF INSTR(_DEVICE$(i), "[WHEEL]") THEN PRINT "Wheels:"; _LASTWHEEL(i)
NEXT
```
  
```vb
Number of input devices found = 2
[KEYBOARD][BUTTON]
[MOUSE][BUTTON][AXIS][WHEEL]
Wheels: 3
```
  


#### SEE ALSO
* [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTAXIS](./_LASTAXIS.md)
* [_AXIS](./_AXIS.md) , [_BUTTON](./_BUTTON.md) , [_WHEEL](./_WHEEL.md)
* _DEVICE$ , [_DEVICES](./_DEVICES.md)
* [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* [STRIG](./STRIG.md) , [STICK](./STICK.md)
* [ON](./ON.md) [STRIG](./STRIG.md)(n) , [STRIG](./STRIG.md)(n)
