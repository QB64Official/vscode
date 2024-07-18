## _BUTTONCHANGE
---

### The _BUTTONCHANGE function returns -1 or 1 when a specified button number on a controller device has been pressed or released.

#### SYNTAX

`press% = _BUTTONCHANGE ( button_number% )`

#### DESCRIPTION
* Values returned are -1 for a press and 1 when a button is released. No press or release event returns zero.
* The button_number% must be a number which does not exceed the number of buttons found by the [_LASTBUTTON](./_LASTBUTTON.md) function.
* The number of [_DEVICES](./_DEVICES.md) must be read before using _DEVICE$ , [_DEVICEINPUT](./_DEVICEINPUT.md) or [_LASTBUTTON](./_LASTBUTTON.md) .
* Note: The center mouse button is button number 2. Center can also be read using [_MOUSEBUTTON](./_MOUSEBUTTON.md) (3).


#### EXAMPLES
##### Example: Reading multiple controller device buttons, axis and wheels.
```vb
FOR i = 1 TO _DEVICES
   PRINT STR$(i) + ") " + _DEVICE$(i) + " Buttons:"; _LASTBUTTON(i); ",Axis:"; _LASTAXIS(i); ",Wheel:"; _LASTWHEEL(i)
NEXT

DO
   d& = _DEVICEINPUT
   IF d& THEN '             the device number cannot be zero!
       PRINT "Found"; d&;
       FOR b = 1 TO _LASTBUTTON(d&)
           PRINT _BUTTONCHANGE(b); _BUTTON(b);
       NEXT
       FOR a = 1 TO _LASTAXIS(d&)
           PRINT _AXIS(a);
       NEXT
       FOR w = 1 TO _LASTWHEEL(d&)
           PRINT _WHEEL(w);
       NEXT
       PRINT
   END IF
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit

END
```
  


#### SEE ALSO
* [_LASTWHEEL](./_LASTWHEEL.md) , [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTAXIS](./_LASTAXIS.md)
* [_AXIS](./_AXIS.md) , [_WHEEL](./_WHEEL.md) , [_BUTTON](./_BUTTON.md)
* _DEVICE$ , [_DEVICES](./_DEVICES.md)
* [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* Controller Devices
