# _DEVICE$

The **_DEVICE$** function returns a [STRING](STRING.md) value holding the controller type, name and input types of the input devices on a computer.

  

## Syntax

*device$* = _DEVICE$(*device_number*)
  

* The **[_DEVICES](_DEVICES.md) function must be read first to get the number of devices and to enable _DEVICE$ and [_DEVICEINPUT](_DEVICEINPUT.md).**
* The *device_number* parameter indicates the number of the controller device to be read.
* Returns the [STRING](STRING.md) control type, name of the device and input types each can use included in brackets:

* Control type:

[KEYBOARD] always listed as first device when keyboard(s) available. Only one keyboard will show.
[MOUSE always listed as second device when keyboard(s) and mouse(mice) are available. Only one mouse will show.
[CONTROLLER] subsequent devices are listed as controllers which include joysticks and game pads.
* When [CONTROLLER] is returned it may also give the [STRING](STRING.md) [[NAME] [device description of the controller.
* When [DISCONNECTED] is returned, then the device was unplugged after device init.
* Returns the type of input after the device name as one or more of the following types:

[[[BUTTON] indicates there are button types of input. [_LASTBUTTON](_LASTBUTTON.md) can return the number of buttons available.
[[[AXIS] indicates there are stick types of input. [_LASTAXIS](_LASTAXIS.md) can return the number of axis available.
[[[WHEEL] indicates that a scrolling input can be read. [_LASTWHEEL](_LASTWHEEL.md) can return the number of wheels available.
* **Device numbers above the number of [devices](devices.md) found will return an OS error.**
* Devices found include keyboard, mouse, joysticks, game pads and multiple stick game controllers.

  

## Examples

*Example 1:* Checking for the system's input devices and the number of buttons available.

``` devices = [_DEVICES](_DEVICES.md) 'MUST be read in order for other 2 device functions to work! [PRINT](PRINT.md) "Number of input devices found ="; devices [FOR](FOR.md) i = 1 [TO](TO.md) devices     [PRINT](PRINT.md) _DEVICE$(i)     [PRINT](PRINT.md) "Buttons:"; [_LASTBUTTON](_LASTBUTTON.md)(i); "Axis:"; [_LASTAXIS](_LASTAXIS.md)(i); "Wheels:"; [_LASTWHEEL](_LASTWHEEL.md)(i) [NEXT](NEXT.md)  
```

``` Number of input devices found = 3 [KEYBOARD][BUTTON] Buttons: 512 Axis: 0 Wheels: 0 [MOUSE][BUTTON][AXIS][WHEEL] Buttons: 3 Axis: 2 Wheels: 3 [CONTROLLER][[NAME][Microsoft Sidewinder Precision Pro (USB)[BUTTON][AXIS] Buttons: 9 Axis: 6 Wheels: 0  
```

Note: The [STRIG](STRIG.md)/[STICK](STICK.md) commands won't read from the keyboard or mouse device the above example lists. They will only work on controllers.

---

*Example 2:* Finding the number of mouse buttons available in QB64. This could also be used for other devices.

``` [FOR](FOR.md) d = 1 [TO](TO.md) [_DEVICES](_DEVICES.md) 'number of input devices found     dev$ = _DEVICE$(d)     [IF](IF.md) [INSTR](INSTR.md)(dev$, "[MOUSE]") [THEN](THEN.md) buttons = [_LASTBUTTON](_LASTBUTTON.md)(d): [EXIT FOR](EXIT FOR.md) [NEXT](NEXT.md) [PRINT](PRINT.md) buttons; "mouse buttons available"  
```

  

## See also

* [_DEVICES](_DEVICES.md), [_DEVICEINPUT](_DEVICEINPUT.md)
* [_LASTBUTTON](_LASTBUTTON.md), [_LASTAXIS](_LASTAXIS.md), [_LASTWHEEL](_LASTWHEEL.md)
* [_BUTTON](_BUTTON.md), [_BUTTONCHANGE](_BUTTONCHANGE.md)
* [_AXIS](_AXIS.md), [_WHEEL](_WHEEL.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [STRIG](STRIG.md), [STICK](STICK.md)
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)")
* [Controller Devices](Controller Devices.md)

  
