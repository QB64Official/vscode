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


## [_BUTTONCHANGE](BUTTONCHANGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BUTTONCHANGE)
---
<blockquote>

### The _BUTTONCHANGE function returns -1 or 1 when a specified button number on a controller device has been pressed or released.

</blockquote>

#### SYNTAX

<blockquote>

`press% = _BUTTONCHANGE ( button_number% )`

</blockquote>

#### DESCRIPTION

<blockquote>


* Values returned are -1 for a press and 1 when a button is released. No press or release event returns zero.
* The button_number% must be a number which does not exceed the number of buttons found by the [_LASTBUTTON](LASTBUTTON.md) function.
* The number of [_DEVICES](DEVICES.md) must be read before using [_DEVICE&dollar;](DEVICE&dollar;.md) , [_DEVICEINPUT](DEVICEINPUT.md) or [_LASTBUTTON](LASTBUTTON.md) .
* Note: The center mouse button is button number 2. Center can also be read using [_MOUSEBUTTON](MOUSEBUTTON.md) (3).

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Reading multiple controller device buttons, axis and wheels.
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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LASTWHEEL](LASTWHEEL.md) , [_LASTBUTTON](LASTBUTTON.md) , [_LASTAXIS](LASTAXIS.md)
* [_AXIS](AXIS.md) , [_WHEEL](WHEEL.md) , [_BUTTON](BUTTON.md)
* [_DEVICE&dollar;](DEVICE&dollar;.md) , [_DEVICES](DEVICES.md)
* [_MOUSEBUTTON](MOUSEBUTTON.md)
* Controller Devices
</blockquote>
