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


## [_LASTAXIS](LASTAXIS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_LASTAXIS)
---
<blockquote>

### The _LASTAXIS function returns the number of axis a specified number INPUT device on your computer has.

</blockquote>

#### SYNTAX

<blockquote>

`axisCount% = _LASTAXIS ( deviceNumber )`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns the number of axis that can be read on a specified device number within the number of [_DEVICES](DEVICES.md) found.
* A valid number can be sent to the [_AXIS](AXIS.md) function to find any relative axis movements.
* The devices are listed in a numerical order determined by the OS and can be read by the DEVICE$ function.
* The [_DEVICES](DEVICES.md) function must be read before using [_LASTAXIS](LASTAXIS.md) or an "Illegal Function Call" error will occur.
* Devices include keyboard(1), mouse(2), joysticks, game pads and multiple stick game controllers.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Checking for the system's input devices and number of axis.
```vb
devices = _DEVICES  'MUST be read in order for other 2 device functions to work!
PRINT "Number of input devices found ="; devices
FOR i = 1 TO devices
PRINT _DEVICE$(i)
IF INSTR(_DEVICE$(i), "[AXIS]") THEN PRINT "Axis:"; _LASTAXIS(i)
NEXT
```
  
<br>

```vb
Number of input devices found = 2
[KEYBOARD][BUTTON]
[MOUSE][BUTTON][AXIS][WHEEL]
Axis: 2
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_LASTBUTTON](LASTBUTTON.md) , [_LASTWHEEL](LASTWHEEL.md)
* [_AXIS](AXIS.md) , [_BUTTON](BUTTON.md) , [_WHEEL](WHEEL.md)
* [_DEVICE&dollar;](DEVICE&dollar;.md) , [_DEVICES](DEVICES.md)
* [_MOUSEBUTTON](MOUSEBUTTON.md)
* [STRIG](STRIG.md) , [STICK](STICK.md)
* [ON](ON.md) STRIG(n) , STRIG(n)
</blockquote>
