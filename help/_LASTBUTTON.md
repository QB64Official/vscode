## _LASTBUTTON
---

### The _LASTBUTTON function returns the number of buttons a specified INPUT device on your computer has.

#### SYNTAX

`buttonCount% = _ _LASTBUTTON ( deviceNumber )`

#### EXAMPLES
##### Example: Checking for the system's input devices.
```vb
devices = _DEVICES  'MUST be read in order for other 2 device functions to work!
PRINT "Number of input devices found ="; devices
FOR i = 1 TO devices
 PRINT _DEVICE$(i)
 PRINT "Buttons:"; _LASTBUTTON(i)
NEXT
```
  
```vb
Number of input devices found = 2
[KEYBOARD][BUTTON]
Buttons: 512
[MOUSE][BUTTON][AXIS][WHEEL]
Buttons: 3
```
  


#### SEE ALSO
* [_LASTAXIS](./_LASTAXIS.md) , [_LASTWHEEL](./_LASTWHEEL.md)
* [_AXIS](./_AXIS.md) , [_BUTTON](./_BUTTON.md) , [_WHEEL](./_WHEEL.md)
* [_DEVICES](./_DEVICES.md) , _DEVICE$
* [_DEVICEINPUT](./_DEVICEINPUT.md)
* [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* [STRIG](./STRIG.md) , [STICK](./STICK.md)
* [ON](./ON.md) [STRIG](./STRIG.md)(n) , [STRIG](./STRIG.md)(n)
