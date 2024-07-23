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


## [STRIG](STRIG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STRIG)
---
<blockquote>

### The STRIG function returns button press True or False status of game port (&H201) or USB joystick control device(s).

</blockquote>

#### DESCRIPTION

<blockquote>


* Function returns -1 when a button event(even functions) has occurred or a button is pressed(odd functions).
* [STRIG](STRIG.md) will not read keyboard or mouse buttons detected by [_DEVICES](DEVICES.md) .
* The device number must be used with more than 2 devices. Use device 1 function numbers for just one joystick.
* QB64 can read many buttons from many devices and allows the use of devices with more than 2 buttons.
* Returns True(-1) or False(0) button press values for 2 devices. Each leading [STRIG](STRIG.md) checks for missed button press events:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
STRIG(0) = -1  'lower button 1 on device 1 pressed since last STRIG(0) read
STRIG(1) = -1  'lower button 1 on device 1 currently pressed
STRIG(2) = -1  'lower button 1 on device 2 pressed since last STRIG(2) read
STRIG(3) = -1  'lower button 1 on device 2 currently pressed
STRIG(4) = -1  'upper button 2 on device 1 pressed since last STRIG(4) read
STRIG(5) = -1  'upper button 2 on device 1 currently pressed
STRIG(6) = -1  'upper button 2 on device 2 pressed since last STRIG(6) read
STRIG(7) = -1  'upper button 2 on device 2 currently pressed (maximum in QBasic)
STRIG(8) = -1  'button 3 on device 1 pressed since last STRIG(8) read  'QB64 only
STRIG(9) = -1  'button 3 on device 1 currently pressed
STRIG(10) = -1 'button 3 on device 2 pressed since last STRIG(10) read 'QB64 only
STRIG(11) = -1 'button 3 on device 2 currently pressed
```
  
<br>

```vb
STRIG(0, 3): STRIG(1, 3): STRIG(4, 3): STRIG(5, 3): STRIG(8, 3): STRIG(9, 3) 'device 3 {odd)
STRIG(2, 4): STRIG(3, 4): STRIG(6, 4): STRIG(7, 4): STRIG(10, 4): STRIG(11, 4) 'device 4 (even)
```
  
<br>



##### Example: Displays the input from 3 joysticks, all with dual sticks and 3 buttons.
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


</blockquote>

#### SEE ALSO

<blockquote>


* STRIG(n)
* [ON](ON.md) STRIG(n) , [STICK](STICK.md)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md) , [_LASTBUTTON](LASTBUTTON.md)
* Single and Dual Stick Controllers
</blockquote>
