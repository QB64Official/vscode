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

## [STICK](STICK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STICK)
---
<blockquote>

### The STICK function returns the directional axis coordinate move of game port (&H201) joystick or USB controller devices.

</blockquote>

#### DESCRIPTION

<blockquote>

*  QB64 allows any number of coordinate pairs for more than two game device controllers. [STICK](STICK.md)  will not read a mouse axis.
*  axis_number can be used as the next axis parameter for controllers with multiple axis using the SAME directional parameters.
*  The axis_number 1 can be omitted for the main stick column and row parameter reads.
*  Point of view "hats" also have 2 axis. Slide, turn or twist controls have one. The device determines the order of the axis.
*  Returns coordinate values from 1 to 254. QBasic only returned values from 1 to 200.
*  [STICK](STICK.md) (0) is required to get values from the other [STICK](STICK.md)  functions. Always read it first!


</blockquote>

#### SEE ALSO

<blockquote>

*  [STRIG](STRIG.md) 
*  [ON](ON.md)  [STRIG](STRIG.md) (n)
*  [_DEVICES](DEVICES.md)  , _DEVICE$ , [_LASTBUTTON](LASTBUTTON.md) 
*  Single and Dual Stick Controllers

</blockquote>
