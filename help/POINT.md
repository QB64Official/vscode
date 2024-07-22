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

## [POINT](POINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/POINT)
---
<blockquote>

### The POINT function returns the pixel COLOR attribute at a specified graphics coordinate or the current graphic cursor position.

</blockquote>

#### PARAMETERS

<blockquote>


</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: How _RGB 32 bit values return DOUBLE or _UNSIGNED LONG values in QB64.
```vb
DIM clr AS LONG 'DO NOT use LONG in older versions of QB64 (V .936 down)
SCREEN _NEWIMAGE(640, 480, 32)
CLS , _RGB(255, 255, 255)  'makes the background opaque white

PRINT "POINT(100, 100) ="; POINT(100, 100)
clr = POINT(100, 100)
PRINT "Variable clr = ";  clr
IF clr = _RGB(255, 255, 255) THEN PRINT "Long OK"
IF POINT(100, 100) = _RGB(255, 255, 255) THEN PRINT "_RGB OK"
IF POINT(100, 100) = clr THEN PRINT "Type OK" 'will not print with a LONG variable type
```
  
<br>

##### Example 1: How _RGB 32 bit values return DOUBLE or _UNSIGNED LONG values in QB64.
```vb
POINT(100, 100) = 4294967295
Variable clr = -1
Long OK
_RGB OK
```
  
<br>

##### Example 2: Using a POINT mouse routine to get the 32 bit color values of the image.
```vb
SCREEN _NEWIMAGE(640, 480, 32)
_TITLE "Mouse POINTer 32"


'LINE INPUT "Enter an image file: ", image$  'use quotes around file names with spaces
image$ = "QB64bee.png" 'any 24/32 bit image up to 320 X 240 with current _PUTIMAGE settings
i& = _LOADIMAGE(image$, 32)
IF i& >= -1 THEN BEEP: PRINT "Could NOT load image!": END
w& = _WIDTH(i&): h& = _HEIGHT(i&)

PRINT "Make background transparent?(Y\N)";
BG$ = UCASE$(INPUT$(1))
PRINT BG$
_DELAY 1

'CLS 'commented to keep background alpha 0

IF BG$ = "Y" THEN _CLEARCOLOR _RGB32(255, 255, 255), i& 'make white Background transparent
_PUTIMAGE (320 - w&, 240 - h&)-((2 * w&) + (320 - w&), (2 * h&) + (240 - h&)), i&, 0
_FREEIMAGE i&

_MOUSEMOVE 320, 240 'center mouse pointer on screen

DO: _LIMIT 100
DO WHILE _MOUSEINPUT
mx = _MOUSEX
my = _MOUSEY
c& = POINT(mx, my)
r = _RED32(c&)
g = _GREEN32(c&)
b = _BLUE32(c&)
a = _ALPHA32(c&)
LOCATE 1, 1: PRINT mx; my, "R:"; r, "G:"; g, "B:"; b, "A:"; a; "  "
LOCATE 2, 2: PRINT "HTML Color: &H" + RIGHT$(HEX$(c&), 6)
LOOP
LOOP UNTIL INKEY$ > ""
END
```
  
<br>```vb
FOR c = 0 TO 59    '60 X 60 area from 0 pixel
FOR r = 0 TO 59
IF POINT(c, r) = 0 THEN PSET (c, r), 15 ELSE PSET (c, r), 0
NEXT r
NEXT c
GET(0, 0)-(60, 60), Image(1500) ' save mask in an array(indexed above original image).
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_NEWIMAGE](NEWIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md) 
*  [_MEMIMAGE](MEMIMAGE.md)  , [_MEMGET](MEMGET.md) 
*  [PSET](PSET.md)  , [PRESET](PRESET.md) 
*  [SCREEN](SCREEN.md)  , [SCREEN](SCREEN.md)  (function)
*  [GET](GET.md)  (graphics statement) , [PUT](PUT.md)  (graphics statement)
*  Bitmaps , Creating Sprite Masks , Text Using Graphics

</blockquote>
