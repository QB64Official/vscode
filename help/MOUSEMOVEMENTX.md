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


## [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEMOVEMENTX)
---
<blockquote>

### The _MOUSEMOVEMENTX function returns the relative horizontal position of the mouse cursor as positive or negative values.

</blockquote>

#### SYNTAX

<blockquote>

`horizontalMove = _MOUSEMOVEMENTX`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN 12
PX = 320: PY = 240 'center position
DO: _LIMIT 200
DO WHILE _MOUSEINPUT
PX = PX + _MOUSEMOVEMENTX
PY = PY + _MOUSEMOVEMENTY
LOOP
CLS
CIRCLE (PX, PY), 10, 10
LOCATE 1, 1: PRINT PX, PY
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit
```
  
<br>

```vb
SCREEN 13, , 1, 0
DO: _LIMIT 200
DO WHILE _MOUSEINPUT
x = x + _MOUSEMOVEMENTX
y = y + _MOUSEMOVEMENTY
LOOP
x = (x + 320) MOD 320 'keeps object on screen
y = (y + 200) MOD 200 'remove if off screen moves are desired
CLS
CIRCLE (x, y), 20
PCOPY 1, 0
LOOP UNTIL INKEY$ <> "" 'press any key to exit
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md)
* [_MOUSEINPUT](MOUSEINPUT.md) , [_MOUSEX](MOUSEX.md)
* [_DEVICES](DEVICES.md) , [_DEVICEINPUT](DEVICEINPUT.md)
* [_WHEEL](WHEEL.md) , [_LASTWHEEL](LASTWHEEL.md)
* [_AXIS](AXIS.md) , [_LASTAXIS](LASTAXIS.md)
* [_MOUSESHOW](MOUSESHOW.md) , [_MOUSEHIDE](MOUSEHIDE.md)
* Screen Saver Programs
</blockquote>
