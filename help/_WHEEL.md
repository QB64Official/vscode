## _WHEEL
---

### The _WHEEL function returns the relative position of a specified wheel number on a controller device.

#### SYNTAX

`move = _WHEEL ( wheelNumber% )`

#### EXAMPLES
##### Example 1: Reading multiple controller device buttons, axis and wheels.
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
  
##### Example 2: Why does a mouse have 3 wheels? Relative x and y movements can be read using the first 2 _WHEEL reads.
```vb
ignore = _MOUSEMOVEMENTX 'dummy call to put mouse into relative movement mode

PRINT "Move your mouse and/or your mouse wheel (ESC to exit)"

d = _DEVICES '  always read number of devices to enable device input
DO: _LIMIT 30  'main loop
 DO WHILE _DEVICEINPUT(2) 'loop only runs during a device 2 mouse event
       PRINT _WHEEL(1), _WHEEL(2), _WHEEL(3)
 LOOP
LOOP UNTIL INKEY$ = CHR$(27)
```
  


#### SEE ALSO
* [_MOUSEWHEEL](./_MOUSEWHEEL.md)
* [_LASTWHEEL](./_LASTWHEEL.md) , [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTAXIS](./_LASTAXIS.md)
* [_AXIS](./_AXIS.md) , [_BUTTON](./_BUTTON.md) , [_BUTTONCHANGE](./_BUTTONCHANGE.md)
* [_DEVICES](./_DEVICES.md) , _DEVICE$ , [_DEVICEINPUT](./_DEVICEINPUT.md)
* [_MOUSEMOVEMENTX](./_MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](./_MOUSEMOVEMENTY.md)
* Controller Devices
