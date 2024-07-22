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

## [STRIG(n)](STRIG(n).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STRIG(n))
---
<blockquote>

### The STRIG(n) statement controls event trapping for a particular joystick or game pad device button.

</blockquote>

#### DESCRIPTION

<blockquote>

*  button function specifies the device's button function. Even functions record events while odd ones read the actual presses.
*  QB64 can designate a button function and controller device number from 0 to 256.
*  When no parameters are used QB64 enables, disables or suspends the reading of ALL button events.
*  [ON](ON.md)  specifies that event trapping is turned [ON](ON.md)  for the specified button.
*  [OFF](OFF.md)  specifies that event trapping is turned [OFF](OFF.md)  for the specified button.
*  If [STOP](STOP.md)  is specified, event trapping is suspended for the specified button. Further joystick button events are remembered and trapped, in order, after the next [STRIG](STRIG.md) (n) [ON](ON.md)  statement is used.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md)  [STRIG](STRIG.md) (n)
*  [STRIG](STRIG.md)  , [STICK](STICK.md) 
*  Single and Dual Stick Controllers

</blockquote>
