# _DEVICEINPUT

The **_DEVICEINPUT** function returns the device number when a controller device button, wheel or axis event occurs.

  

## Syntax

*device%* = _DEVICEINPUT
*device_active%* = _DEVICEINPUT(*device_number%*)
  

## Parameters

* Use the *device%* [INTEGER](INTEGER.md) returned to find the number of the controller device being used.
* A literal specific *device_number%* parameter can be used to return -1 if active or 0 if inactive, e.g. [WHILE](WHILE.md) _DEVICEINPUT(2).

  

## Description

* Use [_DEVICES](_DEVICES.md) to find the number of controller devices available BEFORE using this function.
* [_DEVICE$](_DEVICE$.md) can be used to list the device names and control types using valid [_DEVICES](_DEVICES.md) numbers.
* When a device button is pressed or a scroll wheel or axis is moved, the device number will be returned.
* Devices are numbered as 1 for keyboard and 2 for mouse. Other controller devices will be numbered 3 or higher if installed.
* [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md), or [_LASTWHEEL](_LASTWHEEL.md) will indicate the number of functions available with the specified *device%* number.
* User input events can be monitored reading valid numbered [_AXIS](_AXIS.md), [_BUTTON](_BUTTON.md), [_BUTTONCHANGE](_BUTTONCHANGE.md) or [_WHEEL](_WHEEL.md) functions.
* [ON _DEVICEINPUT GOSUB](ON _DEVICEINPUT GOSUB.md) keyboard, mouse, gamecontrol could be used to easily branch to device specific handler routines (see Example 3 below).

  

## Examples

Example 1
Checking device controller interfaces and finding out what devices are being used.

``` [FOR](FOR.md) i% = 1 [TO](TO.md) [_DEVICES](_DEVICES.md)     [PRINT](PRINT.md) [STR$](STR$.md)(i%) + ") " + [_DEVICE$](_DEVICE$.md)(i%)     [PRINT](PRINT.md) "Button:"; [_LASTBUTTON](_LASTBUTTON.md)(i%); ",Axis:"; [_LASTAXIS](_LASTAXIS.md)(i%); ",Wheel:"; [_LASTWHEEL](_LASTWHEEL.md)(i%) [NEXT](NEXT.md) i%  [PRINT](PRINT.md) [DO](DO.md)     x% = _DEVICEINPUT     [IF](IF.md) x% [THEN](THEN.md) [PRINT](PRINT.md) "Device ="; x%; [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  [END](END.md)  
```

``` [KEYBOARD][BUTTON] Buttons: 512 Axis: 0 Wheels: 0 [MOUSE][BUTTON][AXIS][WHEEL] Buttons: 3 Axis: 2 Wheels: 3 [CONTROLLER][[NAME][Microsoft Sidewinder Precision Pro (USB)[BUTTON][AXIS] Buttons: 9 Axis: 6 Wheels: 0  Device = 2 Device = 2  
```

``` **Note**  Mouse events must be within the program screen area. Keyboard presses  are registered only when program is in focus.  
```

---

Example 2
Why does a mouse have 3 wheels? Relative x and y movements can be read using the first 2 [_WHEEL](_WHEEL.md) reads.

``` ignore% = [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md) 'dummy call to put mouse into relative movement mode  [PRINT](PRINT.md) "Move your mouse and/or your mouse wheel (ESC to exit)"  d% = [_DEVICES](_DEVICES.md) 'always read number of devices to enable device input [DO](DO.md)     [_LIMIT](_LIMIT.md) 30 'main loop     [DO WHILE](DO WHILE.md) _DEVICEINPUT(2) 'loop only runs during a device 2 mouse event         [PRINT](PRINT.md) [_WHEEL](_WHEEL.md)(1), [_WHEEL](_WHEEL.md)(2), [_WHEEL](_WHEEL.md)(3)     [LOOP](LOOP.md) [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  [END](END.md)  
```

``` **Explanation**  Referencing the [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md) function hides the mouse and sets  the mouse to a relative movement mode which can be read by [_WHEEL](_WHEEL.md).  _DEVICEINPUT(2) returns -1 (true) only when the mouse is moved,  scrolled or clicked.  
```

---

Example 3
Using [ON...GOSUB](ON...GOSUB.md) with the _DEVICEINPUT number to add keyboard, mouse and game controller event procedures.

``` n% = [_DEVICES](_DEVICES.md) 'required when reading devices [PRINT](PRINT.md) "Number of devices found ="; n% [FOR](FOR.md) i% = 1 [TO](TO.md) n%     [PRINT](PRINT.md) i%; [_DEVICE$](_DEVICE$.md)(i%) '1 = keyboard, 2 = mouse, 3 = other controller, etc. [NEXT](NEXT.md) i%  [PRINT](PRINT.md) [DO](DO.md)     device% = _DEVICEINPUT     [ON](ON.md) device% [GOSUB](GOSUB.md) keyboard, mouse, controller 'must be inside program loop [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  [END](END.md)  keyboard: [PRINT](PRINT.md) device%; "Keyboard"; [RETURN](RETURN.md)  mouse: [PRINT](PRINT.md) device%; "Mouse "; [RETURN](RETURN.md)  controller: [PRINT](PRINT.md) device%; "Game control "; [RETURN](RETURN.md)  
```

``` **Note**  [ON...GOSUB](ON...GOSUB.md) and [ON...GOTO](ON...GOTO.md) events require numerical values to match  the order of line labels listed in the event used inside loops.  
```

  

## See also

* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md)
* [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md), [_LASTWHEEL](_LASTWHEEL.md)
* [_BUTTON](_BUTTON.md), [_AXIS](_AXIS.md), [_WHEEL](_WHEEL.md)
* [STRIG](STRIG.md), [STICK](STICK.md)
* [ON...GOSUB](ON...GOSUB.md)
* [Controller Devices](Controller Devices.md)

  
