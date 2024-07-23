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


## [_FULLSCREEN (function)](FULLSCREEN_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FULLSCREEN%20%28function%29)
---
<blockquote>

### The _FULLSCREEN function returns the present full screen mode setting of the screen window.

</blockquote>

#### SYNTAX

<blockquote>

`full% = _FULLSCREEN`

</blockquote>

#### DESCRIPTION

<blockquote>


* Function returns:
* 0 = [_OFF](OFF.md) (any positive non-0 value means fullscreen is on)
* 1 = [_STRETCH](STRETCH.md)
* 2 = [_SQUAREPIXELS](SQUAREPIXELS.md)
* It cannot be assumed that calling [_FULLSCREEN](FULLSCREEN.md) will succeed. It cannot be assumed that the type of full screen will match the requested one. Always check the [_FULLSCREEN](FULLSCREEN.md) (function) return in your programs.
* Warning: Despite your software, the user's hardware, drivers and monitor may not function in some modes. Thus, it is highly recommended that you manually confirm with the user whether the switch to full screen was successful. This can be done "quietly" in some cases by getting the user to click on a button on screen with their mouse or press an unusual key. If the user does not respond after about 8 seconds, switch them back to windowed mode.Using large fonts with _FULLSCREEN can cause monitor or Windows Desktop problems or kill a program.


</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Shows how fonts and the _FULLSCREEN mode can resize a program window.
```vb
CLS
fontpath$ = ENVIRON$("SYSTEMROOT") + "\fonts\lucon.ttf" 'Find Windows Folder Path.
f& = _FONT: defaultf& = f&
DO
INPUT "1) DEFAULT  2) SIZE WINDOW  3) FULL SCREEN   4) FULL STRETCHED  Q) QUIT: ", winmode$

IF UCASE$(winmode$) = "Q" THEN EXIT DO

style$ = "MONOSPACE"

SELECT CASE winmode$
CASE "1"
full = _FULLSCREEN 'get current full screen mode
IF full <> 0 THEN _FULLSCREEN _OFF
GOSUB ChangeFont

CASE "2"
DO
PRINT
INPUT "Enter a FONT SIZE 5 to 25: ", fontsize%
LOOP UNTIL fontsize% > 4 AND fontsize% < 26

DO
PRINT
INPUT "Enter (0) for REGULAR or (1) for ITALIC FONT: ", italic%
LOOP UNTIL italic% = 0 OR italic% = 1

DO
PRINT
INPUT "Enter (0) for REGULAR or (1) for BOLD FONT: ", bold%
LOOP UNTIL italic% = 0 OR italic% = 1

IF italic% = 1 THEN style$ = style$ + ", ITALIC"
IF bold% = 1 THEN style$ = style$ + ", BOLD"
full = _FULLSCREEN 'get current full screen mode
IF full <> 0 THEN _FULLSCREEN _OFF
GOSUB ChangeFont

CASE "3"
GOSUB ChangeFont
_FULLSCREEN _SQUAREPIXELS
GOSUB CheckFull

CASE "4"
GOSUB ChangeFont
_FULLSCREEN _STRETCH
GOSUB CheckFull

END SELECT

PRINT: PRINT "_FullScreen mode ="; _FULLSCREEN
PRINT
LOOP
GOSUB ChangeFont
END

CheckFull: '<<<<<<<<<<<<<< turn off full screen if function returns 0!
full = _FULLSCREEN 'get current full screen mode
IF full = 0 THEN _FULLSCREEN _OFF: SOUND 100, .75
RETURN

ChangeFont:
IF winmode$ <> "2" THEN
_FONT 16 'select inbuilt 8x16 default font
currentf& = _FONT
ELSE
currentf& = _LOADFONT(fontpath$, fontsize%, style$)
_FONT currentf&
END IF

IF currentf& <> f& AND f& <> defaultf& THEN _FREEFONT f&
f& = currentf&
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FULLSCREEN](FULLSCREEN.md) (statement)
* [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md)
* [_SCREENMOVE](SCREENMOVE.md) , [_SCREENX](SCREENX.md) , [_SCREENY](SCREENY.md)
</blockquote>
