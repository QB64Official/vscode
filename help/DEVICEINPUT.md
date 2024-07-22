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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
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

*  Use the device% [INTEGER](INTEGER.md)  returned to find the number of the controller device being used.
*  A literal specific device_number% parameter can be used to return -1 if active or 0 if inactive, e.g. [WHILE](WHILE.md)  [_DEVICEINPUT](DEVICEINPUT.md)  ( 2 ) .

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use [_DEVICES](DEVICES.md)  to find the number of controller devices available BEFORE using this function.
*  _DEVICE$ can be used to list the device names and control types using valid [_DEVICES](DEVICES.md)  numbers.
*  When a device button is pressed or a scroll wheel or axis is moved, the device number will be returned.
*  Devices are numbered as 1 for keyboard and 2 for mouse. Other controller devices will be numbered 3 or higher if installed.
*  [_LASTBUTTON](LASTBUTTON.md)  , [_LASTAXIS](LASTAXIS.md)  , or [_LASTWHEEL](LASTWHEEL.md)  will indicate the number of functions available with the specified device% number.
*  User input events can be monitored reading valid numbered [_AXIS](AXIS.md)  , [_BUTTON](BUTTON.md)  , [_BUTTONCHANGE](BUTTONCHANGE.md)  or [_WHEEL](WHEEL.md)  functions.
*  [ON](ON.md)  [_DEVICEINPUT](DEVICEINPUT.md) [GOSUB](GOSUB.md)  keyboard, mouse, gamecontrol could be used to easily branch to device specific handler routines (see Example 3 below).


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DEVICES](DEVICES.md)  , [_DEVICE\$](DEVICE\$.md) 
*  [_LASTBUTTON](LASTBUTTON.md)  , [_LASTAXIS](LASTAXIS.md)  , [_LASTWHEEL](LASTWHEEL.md) 
*  [_BUTTON](BUTTON.md)  , [_AXIS](AXIS.md)  , [_WHEEL](WHEEL.md) 
*  [STRIG](STRIG.md)  , [STICK](STICK.md) 
*  [ON](ON.md) ... [GOSUB](GOSUB.md) 
*  Controller Devices

</blockquote>
