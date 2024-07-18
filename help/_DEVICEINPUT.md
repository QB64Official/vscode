## _DEVICEINPUT
---

### The _DEVICEINPUT function returns the device number when a controller device button, wheel or axis event occurs.

#### SYNTAX

`device% = _DEVICEINPUT`

#### PARAMETERS
* Use the device% [INTEGER](./INTEGER.md) returned to find the number of the controller device being used.
* A literal specific device_number% parameter can be used to return -1 if active or 0 if inactive, e.g. [WHILE](./WHILE.md) [_DEVICEINPUT](./_DEVICEINPUT.md) ( 2 ) .


#### DESCRIPTION
* Use [_DEVICES](./_DEVICES.md) to find the number of controller devices available BEFORE using this function.
* _DEVICE$ can be used to list the device names and control types using valid [_DEVICES](./_DEVICES.md) numbers.
* When a device button is pressed or a scroll wheel or axis is moved, the device number will be returned.
* Devices are numbered as 1 for keyboard and 2 for mouse. Other controller devices will be numbered 3 or higher if installed.
* [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTAXIS](./_LASTAXIS.md) , or [_LASTWHEEL](./_LASTWHEEL.md) will indicate the number of functions available with the specified device% number.
* User input events can be monitored reading valid numbered [_AXIS](./_AXIS.md) , [_BUTTON](./_BUTTON.md) , [_BUTTONCHANGE](./_BUTTONCHANGE.md) or [_WHEEL](./_WHEEL.md) functions.
* [ON](./ON.md) [_DEVICEINPUT](./_DEVICEINPUT.md) [GOSUB](./GOSUB.md) keyboard, mouse, gamecontrol could be used to easily branch to device specific handler routines (see Example 3 below).


#### EXAMPLES
```vb
FOR i% = 1 TO _DEVICES
   PRINT STR$(i%) + ") " + _DEVICE$(i%)
   PRINT "Button:"; _LASTBUTTON(i%); ",Axis:"; _LASTAXIS(i%); ",Wheel:"; _LASTWHEEL(i%)
NEXT i%

PRINT
DO
   x% = _DEVICEINPUT
   IF x% THEN PRINT "Device ="; x%;
LOOP UNTIL INKEY$ = CHR$(27)

END
```
  
```vb
[KEYBOARD][BUTTON]
Buttons: 512 Axis: 0 Wheels: 0
[MOUSE][BUTTON][AXIS][WHEEL]
Buttons: 3 Axis: 2 Wheels: 3
[CONTROLLER][[NAME][Microsoft Sidewinder Precision Pro (USB)]][BUTTON][AXIS]
Buttons: 9 Axis: 6 Wheels: 0

Device = 2 Device = 2
```
  
```vb
Note
Mouse events must be within the program screen area. Keyboard presses
are registered only when program is in focus.
```
  
```vb
ignore% = _MOUSEMOVEMENTX 'dummy call to put mouse into relative movement mode

PRINT "Move your mouse and/or your mouse wheel (ESC to exit)"

d% = _DEVICES 'always read number of devices to enable device input
DO
   _LIMIT 30 'main loop
   DO WHILE _DEVICEINPUT(2) 'loop only runs during a device 2 mouse event
       PRINT _WHEEL(1), _WHEEL(2), _WHEEL(3)
   LOOP
LOOP UNTIL INKEY$ = CHR$(27)

END
```
  
```vb
Explanation
Referencing the _MOUSEMOVEMENTX function hides the mouse and sets
the mouse to a relative movement mode which can be read by _WHEEL.
_DEVICEINPUT(2) returns -1 (true) only when the mouse is moved,
scrolled or clicked.
```
  
```vb
n% = _DEVICES 'required when reading devices
PRINT "Number of devices found ="; n%
FOR i% = 1 TO n%
   PRINT i%; _DEVICE$(i%) '1 = keyboard, 2 = mouse, 3 = other controller, etc.
NEXT i%

PRINT
DO
   device% = _DEVICEINPUT
   ON device% GOSUB keyboard, mouse, controller 'must be inside program loop
LOOP UNTIL INKEY$ = CHR$(27)

END

keyboard:
PRINT device%; "Keyboard";
RETURN

mouse:
PRINT device%; "Mouse ";
RETURN

controller:
PRINT device%; "Game control ";
RETURN
```
  
```vb
Note
ON...GOSUB and ON...GOTO events require numerical values to match
the order of line labels listed in the event used inside loops.
```
  


#### SEE ALSO
* [_DEVICES](./_DEVICES.md) , _DEVICE$
* [_LASTBUTTON](./_LASTBUTTON.md) , [_LASTAXIS](./_LASTAXIS.md) , [_LASTWHEEL](./_LASTWHEEL.md)
* [_BUTTON](./_BUTTON.md) , [_AXIS](./_AXIS.md) , [_WHEEL](./_WHEEL.md)
* [STRIG](./STRIG.md) , [STICK](./STICK.md)
* [ON](./ON.md)...[GOSUB](./GOSUB.md)
* Controller Devices
