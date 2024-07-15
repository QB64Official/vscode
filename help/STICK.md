# STICK

The **STICK** function returns the directional axis coordinate move of game port (&H201) joystick or USB controller devices.

  

## Syntax

QuickBASIC
coordinate_move% = STICK*(direction%)*
QB64
coordinate_move% = STICK*(direction%[, axis_number%])*
  

## Description

* **QB64** allows any number of coordinate pairs for more than two game device controllers. STICK will not read a mouse axis.
* *axis_number* can be used as the next axis parameter for controllers with multiple axis using the SAME *directional* parameters.
* The *axis_number* 1 can be omitted for the main stick column and row parameter reads.
* Point of view "hats" also have 2 axis. Slide, turn or twist controls have one. The device determines the order of the axis.
* Returns coordinate values from 1 to 254. QBasic only returned values from 1 to 200.
* STICK(0) is required to get values from the other STICK functions. Always read it first!

``` **STICK(0) returns the column coordinate of device 1. Enables reads of the other STICK values.** **STICK(1) returns row coordinate of device 1.** STICK(2) returns column coordinate of device 2. (second joystick if used) STICK(3) returns row coordinate of device 2 if used. (QBasic maximum was 2 controllers) **STICK(4) returns column coordinate of device 3. (other joysticks if used in QB64 only!)** **STICK(5) returns row coordinate of device 3 if used.**  
```

* **QB64** allows more joysticks by extending the numbers in pairs like device 3 above. EX: STICK(6): STICK(7) 'device 4
* **QB64** allows a dual stick to be read using the same first parameters and 2 as the second parameter. EX: STICK(0, 2)
* **There will not be an error if you try to read too many device axis or buttons!**

  

## Examples

*Example 1:* Displays the input from 3 joysticks, all with dual sticks and 3 buttons.

``` [DO](DO.md): [_LIMIT](_LIMIT.md) 10    [LOCATE](LOCATE.md) 1, 1   [PRINT](PRINT.md) "JOY1: STICK"; STICK(0); STICK(1); STICK(0, 2); STICK(1, 2);_   "STRIG"; [STRIG](STRIG.md)(0); [STRIG](STRIG.md)(1); [STRIG](STRIG.md)(4); [STRIG](STRIG.md)(5); [STRIG](STRIG.md)(8); [STRIG](STRIG.md)(9)    [PRINT](PRINT.md) "JOY2: STICK"; STICK(2); STICK(3); STICK(2, 2); STICK(3, 2);_   "STRIG"; [STRIG](STRIG.md)(2); [STRIG](STRIG.md)(3); [STRIG](STRIG.md)(6); [STRIG](STRIG.md)(7); [STRIG](STRIG.md)(10); [STRIG](STRIG.md)(11)    [PRINT](PRINT.md) "JOY3: STICK"; STICK(4); STICK(5); STICK(4, 2); STICK(5, 2);_   "STRIG"; [STRIG](STRIG.md)(0, 3); [STRIG](STRIG.md)(1, 3); [STRIG](STRIG.md)(4, 3); [STRIG](STRIG.md)(5, 3); [STRIG](STRIG.md)(8, 3); [STRIG](STRIG.md)(9, 3)  [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) > ""  
```

*Explanation:* Notice the extra **QB64 only** parameters used to cater for the 2nd stick and the buttons of the 3rd joystick.
  

*Example 2:* Displays the Sidewinder Precision Pro Stick, Slider, Z Axis, and Hat Point of View.

``` [SCREEN](SCREEN.md) 12 d = [_DEVICES](_DEVICES.md) [PRINT](PRINT.md) "Number of input devices found ="; d [FOR](FOR.md) i = 1 [TO](TO.md) d   [PRINT](PRINT.md) [_DEVICE$](_DEVICE$.md)(i)   buttons = [_LASTBUTTON](_LASTBUTTON.md)(i)   [PRINT](PRINT.md) "Buttons:"; buttons [NEXT](NEXT.md)  DO: [_LIMIT](_LIMIT.md) 50   [LOCATE](LOCATE.md) 10, 1   [PRINT](PRINT.md) "   X    Main    Y          Slider         Z-axis           POV"   [PRINT](PRINT.md) STICK(0, 1), STICK(1, 1), STICK(0, 2), STICK(1, 2), STICK(0, 3); STICK(1, 3); "   "   [PRINT](PRINT.md) "                   Buttons"   [FOR](FOR.md) i = 0 [TO](TO.md) 4 * buttons - 1 [STEP](STEP.md) 4     [PRINT](PRINT.md) [STRIG](STRIG.md)(i); [STRIG](STRIG.md)(i + 1); [CHR$](CHR$.md)(219);   [NEXT](NEXT.md)   [PRINT](PRINT.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  
```

*Explanation:* Each axis on the first controller found is either STICK(0, n) or STICK(1, n) with n increasing when necessary.

``` Number of input devices found = 3 [KEYBOARD][BUTTON Buttons: 512 [MOUSE][BUTTON][AXIS][WHEEL] Buttons: 3 [CONTROLLER][[NAME][Microsoft Sidewinder Precision Pro (USB)[BUTTON][AXIS] Buttons: 9     X    Main     Y          Slider         Z-axis           POV  127           127           254           127           127  127                       Buttons -0 -1 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █  
```

*Note:* A Sidewinder Precision Pro requires that pins 2 and 7(blue and purple) be connected together for digital USB recognition.
  

## See also

* [STRIG](STRIG.md)
* [ON STRIG(n)](ON STRIG(n).md) "ON STRIG(n)")
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md), [_LASTBUTTON](_LASTBUTTON.md)
* [Single and Dual Stick Controllers](Single and Dual Stick Controllers.md)

  
