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

## [_MOUSEBUTTON](MOUSEBUTTON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEBUTTON)
---
<blockquote>

### The _MOUSEBUTTON function returns the button status of a specified mouse button when read after _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`buttonStatus%% = _MOUSEBUTTON ( buttoNumber )`

</blockquote>

#### PARAMETERS

<blockquote>

*  [INTEGER](INTEGER.md)  buttoNumber designates the mouse button to read (See [_DEVICES](DEVICES.md)  for more than 3).
	* 1 = Left mouse button
	* 2 = Right mouse button
	* 3 = Center or scroll button

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns -1 if the corresponding buttoNumber is pressed or zero when released.
*  Read [_MOUSEINPUT](MOUSEINPUT.md)  first to return the current button up or down status. (See Example 2)
*  Button clicks and mouse movements will be remembered and should be cleared after an [INPUT](INPUT.md)  statement or other interruption.
*  To clear unread mouse [INPUT](INPUT.md) , use a [_MOUSEINPUT](MOUSEINPUT.md)  loop that loops until it returns 0.
*  Use _DEVICE$ [TO](TO.md)  find the "[MOUSE]" [_DEVICES](DEVICES.md)  number [TO](TO.md)  find the number of buttons available using [_LASTBUTTON](LASTBUTTON.md)  .
*  Note: The center mouse button can also be read as [_BUTTON](BUTTON.md)  (2) [ON](ON.md)  [_DEVICEINPUT](DEVICEINPUT.md)  (2) when a mouse is present.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MOUSEX](MOUSEX.md)  , [_MOUSEY](MOUSEY.md)  , [_MOUSEWHEEL](MOUSEWHEEL.md) 
*  [_MOUSEINPUT](MOUSEINPUT.md)  , [_MOUSEMOVE](MOUSEMOVE.md) 
*  [_MOUSESHOW](MOUSESHOW.md)  , [_MOUSEHIDE](MOUSEHIDE.md) 
*  [_DEVICES](DEVICES.md)  , _DEVICE$ , [_LASTBUTTON](LASTBUTTON.md) 
*  [_BUTTON](BUTTON.md)  , [_BUTTONCHANGE](BUTTONCHANGE.md) 
*  Controller Devices

</blockquote>
