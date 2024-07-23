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


## [_MOUSEMOVE](MOUSEMOVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEMOVE)
---
<blockquote>

### The _MOUSEMOVE statement moves the mouse pointer to a new position on the screen as determined by the column and row coordinates.

</blockquote>

#### SYNTAX

<blockquote>

`_MOUSEMOVE column% , row%`

</blockquote>

#### PARAMETERS

<blockquote>


* column% is the horizontal pixel coordinate to place the mouse pointer and can be any value from 0 to [_WIDTH](WIDTH.md) (0) - 1.
* row% is the vertical pixel position to place the mouse pointer and can be any value from 0 to [_HEIGHT](HEIGHT.md) (0) - 1
</blockquote>

#### DESCRIPTION

<blockquote>


* Maximum coordinate values are based on a program's current [SCREEN](SCREEN.md) mode resolution or the pixel size set by [_NEWIMAGE](NEWIMAGE.md) .
* [SCREEN](SCREEN.md) 0 uses text block coordinates. Coordinates off the screen area will create an "Illegal Function Call" [ERROR](ERROR.md)
* Can be used to position the pointer to a default dialog button or move the cursor away from a button so it is not clicked twice.
* Does not require [_MOUSEINPUT](MOUSEINPUT.md) to be used, but all moves will be remembered and can be read by mouse functions.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: How to move the mouse cursor using remembered mouse movements. Press any key to quit.
```vb
SCREEN 12
i = _MOUSEINPUT 'start reading mouse events before INPUT to hold in memory
PRINT
INPUT "Move the mouse pointer and make a few clicks, then press Enter!", dummy$
_MOUSEMOVE 1, 1
DO: _LIMIT 30
count = count + 1
i = _MOUSEINPUT
x = _MOUSEX: y = _MOUSEY
b = _MOUSEBUTTON(1)
PRINT count, x, y, b
_MOUSEMOVE x, y
LOOP UNTIL i = 0 OR INKEY$ > ""
PRINT "Done!"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_SCREENIMAGE](SCREENIMAGE.md)
</blockquote>
