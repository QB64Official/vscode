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


## [ScreenMode](ScreenMode.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ScreenMode)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DO
PRINT
PRINT
PRINT "  Screen    W      H     Colors "
PRINT "    0     80/40   (25)     16 "
PRINT "    1     (320)  (200)      4 "
PRINT "    2     (640)   200       2 "
PRINT "    ........................  "
PRINT "    7      320    200      16 "
PRINT "    8      640    200      16 "
PRINT "    9     (640)   350      16 "
PRINT "   10     (640)   350       4 "
PRINT "   11     (640)   480       2 "
PRINT "   12     (640)   480      16 "
PRINT "   13      320    200     256 "
PRINT "  QB64 _NEWIMAGE screens      "
PRINT "   14     (600, 600, 32)   32 bit"
PRINT "   15     (800, 600, 256) 256 "
PRINT "   16     (900, 600, 13)  256 " 'simulate screen 13
PRINT "   17     (900, 600, 10)    4 " 'simulate screen 10
PRINT
PRINT "SCREEN ="; scr&; "mode ="; ScreenMode&; "Colors ="; colors
PRINT "_DEST ="; _DEST

IF ScreenMode& THEN CIRCLE (200, 100), 50, 3
INPUT "Enter a SCREEN mode 0 to 17(18 quits): ", scrn$

scr& = VAL(scrn$)
IF (scr& < 3 OR scr& > 6) AND scr& < 14 THEN SCREEN scr&
IF scr& = 14 THEN handle& = _NEWIMAGE(600, 600, 32): SCREEN handle&
IF scr& = 15 THEN handle& = _NEWIMAGE(800, 600, 256): SCREEN handle&
IF scr& = 16 THEN handle& = _NEWIMAGE(900, 600, 13): SCREEN handle&
IF scr& = 17 THEN handle& = _NEWIMAGE(900, 600, 10): SCREEN handle&

LOOP UNTIL scr& > 17

FUNCTION ScreenMode&
SHARED colors 'share number of colors with main program
mode& = -1
_DEST 0 'destination zero always current screen mode
OUT &H3C7, 1 'set attribute to read
FOR colors = 1 TO 18 'get RGB color settings
red = INP(&H3C9): grn = INP(&H3C9): blu = INP(&H3C9)
IF red + grn + blu = 0 AND colors <> 16 THEN EXIT FOR
NEXT
wide& = _WIDTH: deep& = _HEIGHT 'get screen dimension
IF colors = 4 THEN mode& = 1
IF colors = 2 AND deep& = 200 THEN mode& = 2
IF colors = 17 AND wide& = 320 AND deep& = 200 THEN mode& = 7
IF colors = 17 AND wide& = 640 AND deep& = 200 THEN mode& = 8
IF colors = 17 AND deep& = 350 THEN mode& = 9
IF colors = 1 AND wide& = 640 AND deep& = 350 THEN mode& = 10
IF colors = 2 AND deep& = 480 THEN mode& = 11
IF colors = 17 AND deep& = 480 THEN mode& = 12
IF colors > 17 AND wide& = 320 AND deep& = 200 THEN mode& = 13
IF _PIXELSIZE = 0 THEN mode& = 0 'screen 0 any size
IF mode& = -1 THEN mode& = _DEST 'must be a QB64 screen
IF colors = 1 THEN colors = 4
IF colors = 17 THEN colors = 16
IF colors > 17 THEN colors = 256
IF _PIXELSIZE = 4 THEN colors = 32
ScreenMode& = mode&
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SCREEN](SCREEN.md)
* [SCREEN](SCREEN.md) (function)
* [_NEWIMAGE](NEWIMAGE.md)
* [_PIXELSIZE](PIXELSIZE.md)
</blockquote>
