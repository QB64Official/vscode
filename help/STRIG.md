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

## [STRIG](STRIG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STRIG)
---
<blockquote>

### The STRIG function returns button press True or False status of game port (&H201) or USB joystick control device(s).

</blockquote>

#### DESCRIPTION

<blockquote>

*  Function returns -1 when a button event(even functions) has occurred or a button is pressed(odd functions).
*  [STRIG](STRIG.md)  will not read keyboard or mouse buttons detected by [_DEVICES](DEVICES.md)  .
*  The device number must be used with more than 2 devices. Use device 1 function numbers for just one joystick.
*  QB64 can read many buttons from many devices and allows the use of devices with more than 2 buttons.
*  Returns True(-1) or False(0) button press values for 2 devices. Each leading [STRIG](STRIG.md)  checks for missed button press events:


</blockquote>

#### SEE ALSO

<blockquote>

*  [STRIG](STRIG.md) (n)
*  [ON](ON.md)  [STRIG](STRIG.md) (n) , [STICK](STICK.md) 
*  [_DEVICES](DEVICES.md)  , _DEVICE$ , [_LASTBUTTON](LASTBUTTON.md) 
*  Single and Dual Stick Controllers

</blockquote>
