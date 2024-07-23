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


## [_DISPLAY](DISPLAY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DISPLAY)
---
<blockquote>

### The _DISPLAY statement turns off the automatic display while only displaying the screen changes when called.

</blockquote>

#### SYNTAX

<blockquote>

`_DISPLAY`

</blockquote>

#### DESCRIPTION

<blockquote>


* [_DISPLAY](DISPLAY.md) turns off the auto refresh screen default [_AUTODISPLAY](AUTODISPLAY.md) behavior. Prevents screen flickering.
* Call [_DISPLAY](DISPLAY.md) each time the screen graphics are to be displayed. Place call after the image has been changed.
* Re-enable automatic display refreshing by calling [_AUTODISPLAY](AUTODISPLAY.md) . If it isn't re-enabled, things may not be displayed later.
* [_DISPLAY](DISPLAY.md) tells QB64 to render all of the hardware [_PUTIMAGE](PUTIMAGE.md) commands loaded into the buffer previously.
* The [_AUTODISPLAY](AUTODISPLAY.md) (function) can be used to detect the current display behavior.
* QB64 can set the graphic rendering order of _SOFTWARE, _HARDWARE, and [_GLRENDER](GLRENDER.md) with [_DISPLAYORDER](DISPLAYORDER.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Displaying a circle bouncing around the screen.
```vb
SCREEN 12
x = 21: y = 31 'start position
dx = 3: dy = 3 'number of pixel moves per loop
DO
_LIMIT 100 ' set to 100 frames per second
x = x + dx: y = y + dy
IF x < 0 OR x > 640 THEN dx = -dx 'limit columns and reverse column direction each side
IF y < 0 OR y > 480 THEN dy = -dy 'limit rows and reverse row direction top or bottom
IF px <> x OR py <> y THEN FOR d = 1 TO 20: CIRCLE (px, py), d, 0: NEXT 'erase
FOR c = 1 TO 20: CIRCLE (x, y), c, 6: NEXT 'draw new circle at new position
px = x: py = y 'save older coordinates to erase older circle next loop
_DISPLAY 'after new circle is set, show it
LOOP UNTIL INKEY$ = CHR$(27)
```
  
<br>



##### Example 2: _DISPLAY must be used to render hardware images placed with _PUTIMAGE ( version 1.000 and up ).
```vb
CONST MenuHeight = 200


SCREEN _NEWIMAGE(640, 480, 32)
'SLEEP 1
LOCATE 20
DO
_LIMIT 30
DisplayMenu
k = _KEYHIT
IF k <> 0 THEN PRINT k,
LOOP UNTIL k = 32 OR k = 27


SUB DisplayMenu
STATIC init, MS_HW AS LONG
IF NOT init THEN
init = -1
MS = _NEWIMAGE(640, MenuHeight, 32) 'MenuScreen image
D = _DEST: _DEST MS
CLS , &HFFAAAAAA 'background color gray
_PRINTSTRING (20, 2), "Menu Test" 'image text
MS_HW = _COPYIMAGE(MS, 33) 'create the MenuScreen_HardWare image
_FREEIMAGE MS
_DEST D
END IF
_PUTIMAGE (0, 0)-(640, MenuHeight), MS_HW
_DISPLAY
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DISPLAY](DISPLAY.md) (function)
* [_DISPLAYORDER](DISPLAYORDER.md)
* [_AUTODISPLAY](AUTODISPLAY.md) , [_AUTODISPLAY](AUTODISPLAY.md) (function)
* [_PUTIMAGE](PUTIMAGE.md)
* [PCOPY](PCOPY.md)
</blockquote>
