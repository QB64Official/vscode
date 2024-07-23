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


## [_MOUSESHOW](MOUSESHOW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSESHOW)
---
<blockquote>

### The _MOUSESHOW statement displays the mouse cursor and can change its shape.

</blockquote>

#### SYNTAX

<blockquote>

`_MOUSESHOW [ cursorShape$ ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* Simply use the statement whenever [_MOUSEHIDE](MOUSEHIDE.md) has been used previously.
* In version 1.000 and up the following cursorShape$ can be displayed:

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: QB64 1.000 and up allow special cursors to be displayed by using special string parameters:
```vb
_MOUSESHOW "default": _DELAY 0.5
_MOUSESHOW "link": _DELAY 0.5 'a hand, typically used in web browsers
_MOUSESHOW "text": _DELAY 0.5
_MOUSESHOW "crosshair": _DELAY 0.5
_MOUSESHOW "vertical": _DELAY 0.5
_MOUSESHOW "horizontal": _DELAY 0.5
_MOUSESHOW "topleft_bottomright": _DELAY 0.5
_MOUSESHOW "topright_bottomleft": _DELAY 0.5
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MOUSEHIDE](MOUSEHIDE.md)
* [_MOUSEINPUT](MOUSEINPUT.md)
* [_MOUSEMOVE](MOUSEMOVE.md)
* [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md)
* [_MOUSEBUTTON](MOUSEBUTTON.md)
* [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md)
</blockquote>
