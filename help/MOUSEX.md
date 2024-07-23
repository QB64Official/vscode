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


## [_MOUSEX](MOUSEX.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEX)
---
<blockquote>

### The _MOUSEX function returns the current horizontal (column) mouse cursor position when read after _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`pixelColumn% = _MOUSEX`

</blockquote>

#### DESCRIPTION

<blockquote>


* [SCREEN](SCREEN.md) 0 returns the [INTEGER](INTEGER.md) horizontal text column position (from build 20170817/62 onward); older versions return a [SINGLE](SINGLE.md) horizontal text column position. Use [INTEGER](INTEGER.md) variables to avoid floating decimal returns.
* Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](NEWIMAGE.md) 32 bit return the [INTEGER](INTEGER.md) pixel columns.
* To calculate text columns in graphic modes, divide the return by 8 or the [_FONTWIDTH](FONTWIDTH.md) of [_FONT](FONT.md) characters.
* [_MOUSEINPUT](MOUSEINPUT.md) must be used to detect any changes in the mouse position and is required for any coordinate returns.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: A simple mouse drawing board using _MOUSEX and _MOUSEY coordinate values.
```vb
SCREEN 12
LINE (99, 9)-(601, 401), 7, BF
LINE (101, 11)-(599, 399), 8, BF
tm$ = " Column = ###  Row = ###  Button1 = ##  Button2 = ##  Button3 = ##"
LOCATE 29, 20: PRINT "LeftButton = draw - RightButton = Erase";
DO: K$ = INKEY$
DO WHILE _MOUSEINPUT
X = _MOUSEX: Y = _MOUSEY
IF X > 100 AND X < 600 AND PX > 100 AND PX < 600 THEN
IF Y > 10 AND Y < 400 AND PY > 10 AND PY < 400 THEN
IF _MOUSEBUTTON(1) THEN LINE (PX, PY)-(X, Y), 15
IF _MOUSEBUTTON(2) THEN LINE (101, 11)-(599, 399), 8, BF
END IF
END IF
PX = X: PY = Y
LOCATE 28, 10: PRINT USING tm$; X; Y; _MOUSEBUTTON(1); _MOUSEBUTTON(2); _MOUSEBUTTON(3)
LOOP
LOOP UNTIL K$ = CHR$(27)
SYSTEM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MOUSEY](MOUSEY.md)
* [_MOUSEBUTTON](MOUSEBUTTON.md) , [_MOUSEWHEEL](MOUSEWHEEL.md)
* [_MOUSEINPUT](MOUSEINPUT.md) , [_MOUSEMOVE](MOUSEMOVE.md)
* [_MOUSESHOW](MOUSESHOW.md) , [_MOUSEHIDE](MOUSEHIDE.md)
* [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md)
* Controller Devices
</blockquote>
