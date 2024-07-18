## _DEVICES
---

### The _DEVICES function returns the number of input devices on your computer including keyboard, mouse and game devices.

#### SYNTAX

`device_count% = _DEVICES`

#### DESCRIPTION
* Returns the number of devices that can be listed separately with the _DEVICE$ function by the device number.
* Devices include keyboard, mouse, joysticks, game pads and multiple stick game controllers.


#### EXAMPLES
```vb
devices% = _DEVICES 'MUST be read in order for other 2 device functions to work!
PRINT "Number of input devices found ="; devices%
FOR i% = 1 TO devices%
   PRINT _DEVICE$(i%)
   PRINT "Buttons:"; _LASTBUTTON(i%)
NEXT i%
END
```
  
```vb
Number of input devices found = 2
[KEYBOARD][BUTTON]
Buttons: 512
[MOUSE][BUTTON][AXIS][WHEEL]
Buttons: 3
```
  


#### SEE ALSO
* _DEVICE$ , [_DEVICEINPUT](./_DEVICEINPUT.md)
* [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTAXIS](./_LASTAXIS.md) , [_LASTWHEEL](./_LASTWHEEL.md)
* [_BUTTON](./_BUTTON.md) , [_BUTTONCHANGE](./_BUTTONCHANGE.md)
* [_AXIS](./_AXIS.md) , [_WHEEL](./_WHEEL.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md) , [_MOUSEX](./_MOUSEX.md) , [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* [STRIG](./STRIG.md) , [STICK](./STICK.md)
* [ON](./ON.md) [STRIG](./STRIG.md)(n) , [STRIG](./STRIG.md)(n)
* Controller Devices
