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

*  Returns the number of axis that can be read on a specified device number within the number of [_DEVICES](DEVICES.md)  found.
*  A valid number can be sent to the [_AXIS](AXIS.md)  function to find any relative axis movements.
*  The devices are listed in a numerical order determined by the OS and can be read by the DEVICE$ function.
*  The [_DEVICES](DEVICES.md)  function must be read before using [_LASTAXIS](LASTAXIS.md)  or an "Illegal Function Call" error will occur.
*  Devices include keyboard(1), mouse(2), joysticks, game pads and multiple stick game controllers.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LASTBUTTON](LASTBUTTON.md)  , [_LASTWHEEL](LASTWHEEL.md) 
*  [_AXIS](AXIS.md)  , [_BUTTON](BUTTON.md)  , [_WHEEL](WHEEL.md) 
*  _DEVICE$ , [_DEVICES](DEVICES.md) 
*  [_MOUSEBUTTON](MOUSEBUTTON.md) 
*  [STRIG](STRIG.md)  , [STICK](STICK.md) 
*  [ON](ON.md)  [STRIG](STRIG.md) (n) , [STRIG](STRIG.md) (n)

</blockquote>
