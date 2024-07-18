## STICK
---

### The STICK function returns the directional axis coordinate move of game port (&H201) joystick or USB controller devices.

#### DESCRIPTION
* QB64 allows any number of coordinate pairs for more than two game device controllers. [STICK](./STICK.md) will not read a mouse axis.
* axis_number can be used as the next axis parameter for controllers with multiple axis using the SAME directional parameters.
* The axis_number 1 can be omitted for the main stick column and row parameter reads.
* Point of view "hats" also have 2 axis. Slide, turn or twist controls have one. The device determines the order of the axis.
* Returns coordinate values from 1 to 254. QBasic only returned values from 1 to 200.
* [STICK](./STICK.md)(0) is required to get values from the other [STICK](./STICK.md) functions. Always read it first!


#### EXAMPLES
##### Example 1: Displays the input from 3 joysticks, all with dual sticks and 3 buttons.
```vb
DO: _LIMIT 10

 LOCATE 1, 1
 PRINT "JOY1: STICK"; STICK(0); STICK(1); STICK(0, 2); STICK(1, 2);_
 "STRIG"; STRIG(0); STRIG(1); STRIG(4); STRIG(5); STRIG(8); STRIG(9)

 PRINT "JOY2: STICK"; STICK(2); STICK(3); STICK(2, 2); STICK(3, 2);_
 "STRIG"; STRIG(2); STRIG(3); STRIG(6); STRIG(7); STRIG(10); STRIG(11)

 PRINT "JOY3: STICK"; STICK(4); STICK(5); STICK(4, 2); STICK(5, 2);_
 "STRIG"; STRIG(0, 3); STRIG(1, 3); STRIG(4, 3); STRIG(5, 3); STRIG(8, 3); STRIG(9, 3)

LOOP UNTIL INKEY$ > ""
```
  
##### Example 2: Displays the Sidewinder Precision Pro Stick, Slider, Z Axis, and Hat Point of View.
```vb
SCREEN 12
d = _DEVICES
PRINT "Number of input devices found ="; d
FOR i = 1 TO d
 PRINT _DEVICE$(i)
 buttons = _LASTBUTTON(i)
 PRINT "Buttons:"; buttons
NEXT

DO: _LIMIT 50
 LOCATE 10, 1
 PRINT "   X    Main    Y          Slider         Z-axis           POV"
 PRINT STICK(0, 1), STICK(1, 1), STICK(0, 2), STICK(1, 2), STICK(0, 3); STICK(1, 3); "   "
 PRINT "                   Buttons"
 FOR i = 0 TO 4 * buttons - 1 STEP 4
   PRINT STRIG(i); STRIG(i + 1); CHR$(219);
 NEXT
 PRINT
LOOP UNTIL INKEY$ <> ""
```
  
```vb
Number of input devices found = 3
[KEYBOARD][BUTTON]]
Buttons: 512
[MOUSE][BUTTON][AXIS][WHEEL]
Buttons: 3
[CONTROLLER][[NAME][Microsoft Sidewinder Precision Pro (USB)]][BUTTON][AXIS]
Buttons: 9


 X    Main     Y          Slider         Z-axis           POV
127           127           254           127           127  127
                     Buttons
-0 -1 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █ 0  0 █
```
  


#### SEE ALSO
* [STRIG](./STRIG.md)
* [ON](./ON.md) [STRIG](./STRIG.md)(n)
* [_DEVICES](./_DEVICES.md) , _DEVICE$ , [_LASTBUTTON](./_LASTBUTTON.md)
* Single and Dual Stick Controllers
