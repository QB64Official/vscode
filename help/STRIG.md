# STRIG

The **STRIG** function returns button press True or False status of game port (&H201) or USB joystick control device(s).

  

## Syntax

QuickBASIC
IF STRIG(button_function%) THEN ...
QB64
IF STRIG(*button_function%*[, *device_number%*]) THEN ...
  

## Description

* Function returns -1 when a button event(even functions) has occurred or a button is pressed(odd functions).
* STRIG will not read keyboard or mouse buttons detected by [_DEVICES](_DEVICES.md).
* The *device number* must be used with more than 2 devices. Use device 1 function numbers for just one joystick.
* **QB64** can read many buttons from many devices and allows the use of devices with more than 2 buttons.
* Returns True(-1) or False(0) button press values for 2 devices. Each leading STRIG checks for missed button press events:

```   **STRIG(0) = -1  'lower button 1 on device 1 pressed since last STRIG(0) read**   **STRIG(1) = -1  'lower button 1 on device 1 currently pressed**   STRIG(2) = -1  'lower button 1 on device 2 pressed since last STRIG(2) read   STRIG(3) = -1  'lower button 1 on device 2 currently pressed   **STRIG(4) = -1  'upper button 2 on device 1 pressed since last STRIG(4) read**   **STRIG(5) = -1  'upper button 2 on device 1 currently pressed**   STRIG(6) = -1  'upper button 2 on device 2 pressed since last STRIG(6) read   STRIG(7) = -1  'upper button 2 on device 2 currently pressed (maximum in QBasic)   **STRIG(8) = -1  'button 3 on device 1 pressed since last STRIG(8) read**  'QB64 only   **STRIG(9) = -1  'button 3 on device 1 currently pressed**   STRIG(10) = -1 'button 3 on device 2 pressed since last STRIG(10) read 'QB64 only   STRIG(11) = -1 'button 3 on device 2 currently pressed  
```

* STRIG(0), STRIG(2), STRIG(4), STRIG(6), STRIG(8), STRIG(10) are used to monitor any presses that might have been missed.
* **QB64** allows more than two controllers by using the second parameter as the stick number and the odd or even STRIG values:

``` **STRIG(0, 3): STRIG(1, 3): STRIG(4, 3): STRIG(5, 3): STRIG(8, 3): STRIG(9, 3) 'device 3 {odd)** STRIG(2, 4): STRIG(3, 4): STRIG(6, 4): STRIG(7, 4): STRIG(10, 4): STRIG(11, 4) 'device 4 (even)  
```

Odd devices use 0, 1, 4, 5, 8 and 9 and Even devices use 2, 3, 6, 7, 10 and 11 as first parameters with device number following.
* **There will not be an error if you try to read too many device axis or buttons!**

  

## Examples

*Example:* Displays the input from 3 joysticks, all with dual sticks and 3 buttons.

``` [DO](DO.md): [_LIMIT](_LIMIT.md) 10    [LOCATE](LOCATE.md) 1, 1   [PRINT](PRINT.md) "JOY1: [STICK](STICK.md)"; [STICK](STICK.md)(0); [STICK](STICK.md)(1); [STICK](STICK.md)(0, 2); [STICK](STICK.md)(1, 2);_   "STRIG"; STRIG(0); STRIG(1); STRIG(4); STRIG(5); STRIG(8); STRIG(9)    [PRINT](PRINT.md) "JOY2: [STICK](STICK.md)"; [STICK](STICK.md)(2); [STICK](STICK.md)(3); [STICK](STICK.md)(2, 2); [STICK](STICK.md)(3, 2);_   "STRIG"; STRIG(2); STRIG(3); STRIG(6); STRIG(7); STRIG(10); STRIG(11)    [PRINT](PRINT.md) "JOY3: [STICK](STICK.md)"; [STICK](STICK.md)(4); [STICK](STICK.md)(5); [STICK](STICK.md)(4, 2); [STICK](STICK.md)(5, 2);_   "STRIG"; STRIG(0, 3); STRIG(1, 3); STRIG(4, 3); STRIG(5, 3); STRIG(8, 3); STRIG(9, 3)  [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) > ""  
```

*Explanation:* Notice the extra **QB64 only** parameters used to cater for the 2nd stick and the buttons of the 3rd joystick.
  

## See also

* [STRIG(n)](STRIG(n).md) "STRIG(n)")
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)"), [STICK](STICK.md)
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md), [_LASTBUTTON](_LASTBUTTON.md)
* [Single and Dual Stick Controllers](Single and Dual Stick Controllers.md)

  
