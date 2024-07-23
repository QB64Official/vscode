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


## [_MOUSEY](MOUSEY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEY)
---
<blockquote>

### The _MOUSEY function returns the current vertical (row) mouse cursor position when read after _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`pixelRow% = _MOUSEY`

</blockquote>

#### DESCRIPTION

<blockquote>


* [SCREEN](SCREEN.md) 0 returns the [INTEGER](INTEGER.md) vertical text row position (from build 20170817/62 onward); older versions return a [SINGLE](SINGLE.md) vertical text row position. Use [INTEGER](INTEGER.md) variables to avoid floating decimal returns.
* Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](NEWIMAGE.md) 32 bit return the [INTEGER](INTEGER.md) pixel columns.
* To calculate text rows in graphic modes divide the return by 16 or the [_FONTHEIGHT](FONTHEIGHT.md) of [_FONT](FONT.md) characters.
* [_MOUSEINPUT](MOUSEINPUT.md) must be used to detect any changes in the mouse position and is required for any coordinate returns.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Highlighting a row of text in Screen 0.
```vb
minX = 20: maxX = 60: minY = 10: maxY = 24
selection = 0 'the screen Y coordinate of the previously highlighted item
FOR i% = 1 TO 25: LOCATE i%, 40: PRINT i%;: NEXT
DO: _LIMIT 100
IF _MOUSEINPUT THEN
'Un-highlight any selected row
IF selection THEN selectRow selection, minX, maxX, 0
x = _MOUSEX
y = _MOUSEY
IF x >= minX AND x <= maxX AND y >= minY AND y <= maxY THEN
selection = y
ELSE
selection = 0
END IF
'Highlight any selected row
IF selection THEN SelectRow selection, minX, maxX, 2
IF _MOUSEBUTTON(1) THEN LOCATE 1, 2: PRINT x, y, selection
END IF
LOOP UNTIL INKEY$ <> ""

SUB SelectRow (y, x1, x2, col)
DEF SEG = &HB800
addr& = (x1 - 1 + (y - 1) * _WIDTH) * 2 + 1
FOR x = x1 TO x2
oldCol = PEEK(addr&) AND &B10001111   ' Mask foreground color and blink bit
POKE addr&, oldCol OR ((col AND &B111) * &B10000) ' Apply background color
addr& = addr& + 2
NEXT
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MOUSEX](MOUSEX.md) , [_MOUSEBUTTON](MOUSEBUTTON.md) , [_MOUSEWHEEL](MOUSEWHEEL.md)
* [_MOUSEINPUT](MOUSEINPUT.md) , [_MOUSEMOVE](MOUSEMOVE.md)
* [_MOUSESHOW](MOUSESHOW.md) , [_MOUSEHIDE](MOUSEHIDE.md)
* [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md)
* Controller Devices
</blockquote>
