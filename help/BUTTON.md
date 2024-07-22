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

## [_BUTTON](BUTTON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BUTTON)
---
<blockquote>

### The _BUTTON function returns -1 when specified button number on a controller device is pressed.

</blockquote>

#### SYNTAX

<blockquote>

`press%% = _BUTTON ( button_number% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Values returned are -1 for a press and 0 when a button is released or not pressed.
*  The button_number% must be a number which does not exceed the number of buttons found by the [_LASTBUTTON](LASTBUTTON.md)  function.
*  The number of [_DEVICES](DEVICES.md)  must be read before using _DEVICE$ , [_DEVICEINPUT](DEVICEINPUT.md)  or [_LASTBUTTON](LASTBUTTON.md)  .
*  Note: The number 2 button is the center button in this device configuration. Center is also designated as [_MOUSEBUTTON](MOUSEBUTTON.md)  (3).


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LASTWHEEL](LASTWHEEL.md)  , [_LASTBUTTON](LASTBUTTON.md)  , [_LASTAXIS](LASTAXIS.md) 
*  [_AXIS](AXIS.md)  , [_WHEEL](WHEEL.md)  , [_BUTTONCHANGE](BUTTONCHANGE.md) 
*  _DEVICE$ , [_DEVICES](DEVICES.md) 
*  [_MOUSEBUTTON](MOUSEBUTTON.md) 
*  Controller Devices

</blockquote>
