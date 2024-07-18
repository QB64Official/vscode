## _BUTTON
---

### The _BUTTON function returns -1 when specified button number on a controller device is pressed.

#### SYNTAX

`press%% = _BUTTON ( button_number% )`

#### DESCRIPTION
* Values returned are -1 for a press and 0 when a button is released or not pressed.
* The button_number% must be a number which does not exceed the number of buttons found by the [_LASTBUTTON](file:/home/grymmjack/git/QB64pe/internal/help/_LASTBUTTON.md) function.
* The number of [_DEVICES](file:/home/grymmjack/git/QB64pe/internal/help/_DEVICES.md) must be read before using _DEVICE$ , [_DEVICEINPUT](file:/home/grymmjack/git/QB64pe/internal/help/_DEVICEINPUT.md) or [_LASTBUTTON](file:/home/grymmjack/git/QB64pe/internal/help/_LASTBUTTON.md) .
* Note: The number 2 button is the center button in this device configuration. Center is also designated as [_MOUSEBUTTON](file:/home/grymmjack/git/QB64pe/internal/help/_MOUSEBUTTON.md) (3).


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
* [_LASTWHEEL](file:/home/grymmjack/git/QB64pe/internal/help/_LASTWHEEL.md) , [_LASTBUTTON](file:/home/grymmjack/git/QB64pe/internal/help/_LASTBUTTON.md) , [_LASTAXIS](file:/home/grymmjack/git/QB64pe/internal/help/_LASTAXIS.md)
* [_AXIS](file:/home/grymmjack/git/QB64pe/internal/help/_AXIS.md) , [_WHEEL](file:/home/grymmjack/git/QB64pe/internal/help/_WHEEL.md) , [_BUTTONCHANGE](file:/home/grymmjack/git/QB64pe/internal/help/_BUTTONCHANGE.md)
* _DEVICE$ , [_DEVICES](file:/home/grymmjack/git/QB64pe/internal/help/_DEVICES.md)
* [_MOUSEBUTTON](file:/home/grymmjack/git/QB64pe/internal/help/_MOUSEBUTTON.md)
* Controller Devices
