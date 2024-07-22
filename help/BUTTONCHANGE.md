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

*  Values returned are -1 for a press and 1 when a button is released. No press or release event returns zero.
*  The button_number% must be a number which does not exceed the number of buttons found by the [_LASTBUTTON](LASTBUTTON.md)  function.
*  The number of [_DEVICES](DEVICES.md)  must be read before using _DEVICE$ , [_DEVICEINPUT](DEVICEINPUT.md)  or [_LASTBUTTON](LASTBUTTON.md)  .
*  Note: The center mouse button is button number 2. Center can also be read using [_MOUSEBUTTON](MOUSEBUTTON.md)  (3).


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LASTWHEEL](LASTWHEEL.md)  , [_LASTBUTTON](LASTBUTTON.md)  , [_LASTAXIS](LASTAXIS.md) 
*  [_AXIS](AXIS.md)  , [_WHEEL](WHEEL.md)  , [_BUTTON](BUTTON.md) 
*  _DEVICE$ , [_DEVICES](DEVICES.md) 
*  [_MOUSEBUTTON](MOUSEBUTTON.md) 
*  Controller Devices

</blockquote>
