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


## [STICK](STICK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STICK)
---
<blockquote>

### The STICK function returns the directional axis coordinate move of game port (&H201) joystick or USB controller devices.

</blockquote>

#### DESCRIPTION

<blockquote>


* QB64 allows any number of coordinate pairs for more than two game device controllers. [STICK](STICK.md) will not read a mouse axis.
* axis_number can be used as the next axis parameter for controllers with multiple axis using the SAME directional parameters.
* The axis_number 1 can be omitted for the main stick column and row parameter reads.
* Point of view "hats" also have 2 axis. Slide, turn or twist controls have one. The device determines the order of the axis.
* Returns coordinate values from 1 to 254. QBasic only returned values from 1 to 200.
* STICK(0) is required to get values from the other [STICK](STICK.md) functions. Always read it first!

</blockquote>

#### EXAMPLES

<blockquote>

```vb
STICK(0) returns the column coordinate of device 1. Enables reads of the other STICK values.
STICK(1) returns row coordinate of device 1.
STICK(2) returns column coordinate of device 2. (second joystick if used)
STICK(3) returns row coordinate of device 2 if used. (QBasic maximum was 2 controllers)
STICK(4) returns column coordinate of device 3. (other joysticks if used in QB64 only!)
STICK(5) returns row coordinate of device 3 if used.
```
  
<br>



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
  
<br>



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
  
<br>

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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [STRIG](STRIG.md)
* [ON](ON.md) STRIG(n)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md) , [_LASTBUTTON](LASTBUTTON.md)
* Single and Dual Stick Controllers
</blockquote>
