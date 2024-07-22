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

## [_AXIS](AXIS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_AXIS)
---
<blockquote>

### The _AXIS function returns the relative position of a specified axis number on a controller device.

</blockquote>

#### SYNTAX

<blockquote>

`move! = _AXIS ( axis_number% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [SINGLE](SINGLE.md)  values returned range between -1 and 1 as maximums and 0 indicating minimum or axis center.
*  When the mouse is moved on the program screen, moves left or above center are negative while below or right are positive.
*  The axis_number must be a number which does not exceed the number of axis found by the [_LASTAXIS](LASTAXIS.md)  function.
*  The number of [_DEVICES](DEVICES.md)  must be read before using _DEVICE$ , [_DEVICEINPUT](DEVICEINPUT.md)  or [_LASTAXIS](LASTAXIS.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LASTWHEEL](LASTWHEEL.md)  , [_LASTBUTTON](LASTBUTTON.md)  , [_LASTAXIS](LASTAXIS.md) 
*  [_WHEEL](WHEEL.md)  , [_BUTTON](BUTTON.md)  , [_BUTTONCHANGE](BUTTONCHANGE.md) 
*  _DEVICE$ , [_DEVICES](DEVICES.md) 
*  [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md)  , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md)  (relative movement)
*  Controller Devices

</blockquote>
