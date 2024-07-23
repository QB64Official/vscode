<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_DEVICEINPUT](DEVICEINPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEVICEINPUT)
---
<blockquote>

### The _DEVICEINPUT function returns the device number when a controller device button, wheel or axis event occurs.

</blockquote>

#### SYNTAX

<blockquote>

`device% = _DEVICEINPUT`

</blockquote>

#### PARAMETERS

<blockquote>


* Use the device% [INTEGER](INTEGER.md) returned to find the number of the controller device being used.
* A literal specific device_number% parameter can be used to return -1 if active or 0 if inactive, e.g. [WHILE](WHILE.md) [_DEVICEINPUT](DEVICEINPUT.md) ( 2 ) .
</blockquote>

#### DESCRIPTION

<blockquote>


* Use [_DEVICES](DEVICES.md) to find the number of controller devices available BEFORE using this function.
* [_DEVICE&dollar;](DEVICE&dollar;.md) can be used to list the device names and control types using valid [_DEVICES](DEVICES.md) numbers.
* When a device button is pressed or a scroll wheel or axis is moved, the device number will be returned.
* Devices are numbered as 1 for keyboard and 2 for mouse. Other controller devices will be numbered 3 or higher if installed.
* [_LASTBUTTON](LASTBUTTON.md) , [_LASTAXIS](LASTAXIS.md) , or [_LASTWHEEL](LASTWHEEL.md) will indicate the number of functions available with the specified device% number.
* User input events can be monitored reading valid numbered [_AXIS](AXIS.md) , [_BUTTON](BUTTON.md) , [_BUTTONCHANGE](BUTTONCHANGE.md) or [_WHEEL](WHEEL.md) functions.
* [ON](ON.md) [_DEVICEINPUT](DEVICEINPUT.md) [GOSUB](GOSUB.md) keyboard, mouse, gamecontrol could be used to easily branch to device specific handler routines (see Example 3 below).

</blockquote>

#### EXAMPLES

<blockquote>

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
  
<br>

```vb
[KEYBOARD][BUTTON]
Buttons: 512 Axis: 0 Wheels: 0
[MOUSE][BUTTON][AXIS][WHEEL]
Buttons: 3 Axis: 2 Wheels: 3
[CONTROLLER][[NAME][Microsoft Sidewinder Precision Pro (USB)]][BUTTON][AXIS]
Buttons: 9 Axis: 6 Wheels: 0

Device = 2 Device = 2
```
  
<br>

```vb
Note
Mouse events must be within the program screen area. Keyboard presses
are registered only when program is in focus.
```
  
<br>

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
  
<br>

```vb
Explanation
Referencing the _MOUSEMOVEMENTX function hides the mouse and sets
the mouse to a relative movement mode which can be read by _WHEEL.
_DEVICEINPUT(2) returns -1 (true) only when the mouse is moved,
scrolled or clicked.
```
  
<br>

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
  
<br>

```vb
Note
ON...GOSUB and ON...GOTO events require numerical values to match
the order of line labels listed in the event used inside loops.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md)
* [_LASTBUTTON](LASTBUTTON.md) , [_LASTAXIS](LASTAXIS.md) , [_LASTWHEEL](LASTWHEEL.md)
* [_BUTTON](BUTTON.md) , [_AXIS](AXIS.md) , [_WHEEL](WHEEL.md)
* [STRIG](STRIG.md) , [STICK](STICK.md)
* ON...GOSUB
* Controller Devices
</blockquote>
