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


## [_FULLSCREEN](FULLSCREEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FULLSCREEN)
---
<blockquote>

### The _FULLSCREEN statement attempts to make the program window fullscreen.

</blockquote>

#### SYNTAX

<blockquote>

`_FULLSCREEN [ _STRETCH | _SQUAREPIXELS| _OFF ][, _SMOOTH ]`

</blockquote>

#### PARAMETERS

<blockquote>


* [_STRETCH](STRETCH.md) default first choice attempts to mimic QBasic's full screens if possible. [_FULLSCREEN](FULLSCREEN.md) (function) returns 1.
* [_SQUAREPIXELS](SQUAREPIXELS.md) alternate choice enlarges the pixels into squares on some monitors. [_FULLSCREEN](FULLSCREEN.md) returns 2
* [_OFF](OFF.md) turns [_FULLSCREEN](FULLSCREEN.md) off after full screen has been enabled. [_FULLSCREEN](FULLSCREEN.md) (function) returns 0.
* Second optional parameter [_SMOOTH](SMOOTH.md) applies antialiasing to the stretched screen.
</blockquote>

#### DESCRIPTION

<blockquote>


* Set the [SCREEN](SCREEN.md) mode and text [WIDTH](WIDTH.md) when necessary first. Otherwise there may be desktop view issues.
* [_FULLSCREEN](FULLSCREEN.md) with no parameters chooses [_STRETCH](STRETCH.md) or [_SQUAREPIXELS](SQUAREPIXELS.md) (prioritizes [_STRETCH](STRETCH.md) to mimic QBasic if possible)
* Check the fullscreen mode with the [_FULLSCREEN](FULLSCREEN.md) function in your programs when a method is required.
* It is advisable to get input from the user to confirm that fullscreen was completed or there were possible monitor incompatibilities.
* If fullscreen is not confirmed with a [_FULLSCREEN](FULLSCREEN.md) (function) return greater than 0 , then disable with [_FULLSCREEN](FULLSCREEN.md) [_OFF](OFF.md) .
* NOTE: [_FULLSCREEN](FULLSCREEN.md) can also be affected by custom [_FONT](FONT.md) size settings and make program screens too large.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Setting the screen mode first prevents enlargement of the desktop before the program window is set:
```vb
SCREEN 12
_FULLSCREEN
IF _FULLSCREEN = 0 THEN _FULLSCREEN _OFF 'check that a full screen mode initialized

LINE (100, 100)-(500, 400), 13, BF
```
  
<br>



##### Example 2: How fonts and _FULLSCREEN affect the program's window size.
```vb
SCREEN 0
DO
PRINT
LINE INPUT "Enter MODE 1) ENLARGE WINDOW  2) FULL _SQUAREPIXELS  3) FULL _STRETCH: ", WMODE$
PRINT
IF WMODE$ = "1" THEN INPUT "SIZE 1 TO 9: ", ENLARGE%

SELECT CASE ENLARGE%
CASE 1, 2, 3, 4, 5: STYLE$ = "MONOSPACE, BOLD"
CASE 6, 7, 8, 9: STYLE$ = "MONOSPACE"
CASE ELSE: STYLE$ = "MONOSPACE"
END SELECT

SELECT CASE WMODE$
CASE "1"
full = _FULLSCREEN
IF full > 0 THEN _FULLSCREEN _OFF
f& = _LOADFONT("c:\windows\fonts\lucon.ttf", 13 + ENLARGE%, STYLE$)
_FONT f&
CASE "2"
_FULLSCREEN _SQUAREPIXELS
full = _FULLSCREEN
IF full = 0 THEN GOSUB FCHECK
CASE "3"
_FULLSCREEN _STRETCH
full = _FULLSCREEN
IF full = 0 THEN GOSUB FCHECK
END SELECT

mode = _FULLSCREEN
PRINT
PRINT "_FULLSCREEN mode ="; mode,
PRINT "PRESS ESC TO END OR ENTER TO CONTINUE..."

DO: SLEEP: B$ = INKEY$: LOOP UNTIL B$ = CHR$(13) OR B$ = CHR$(27)

GOSUB ClearFont

LOOP UNTIL B$ = CHR$(27)
GOSUB ClearFont
END

FCHECK:
Z3 = TIMER
DO
IF TIMER < Z3 THEN Z3 = Z3 - TIMER
IF TIMER - Z3 > 4 THEN EXIT DO
LOOP
full = _FULLSCREEN
IF full = 0 THEN _FULLSCREEN _OFF: SOUND 100, .75
RETURN

ClearFont:
IF f& > 0 THEN
_FONT 16 'select inbuilt 8x16 default font
_FREEFONT f&
END IF
RETURN
```
  
<br>



##### Example 3: Testing all fullscreen methods.
```vb
PRINT "Hello, world!"
PRINT "Hit 1 for windowed mode;"
PRINT "    2 for _STRETCH"
PRINT "    3 for _SQUAREPIXELS"
PRINT "    4 for _STRETCH, _SMOOTH"
PRINT "    5 for _SQUAREPIXELS, _SMOOTH"
DO
k$ = INKEY$
SELECT CASE VAL(k$)
CASE 1
_FULLSCREEN _OFF
CASE 2
_FULLSCREEN _STRETCH
CASE 3
_FULLSCREEN _SQUAREPIXELS
CASE 4
_FULLSCREEN _STRETCH , _SMOOTH
CASE 5
_FULLSCREEN _SQUAREPIXELS , _SMOOTH
END SELECT
_LIMIT 30
LOOP UNTIL _EXIT
SYSTEM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FULLSCREEN](FULLSCREEN.md) (function)
* [_SMOOTH](SMOOTH.md) (function)
* [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md)
* [_FONT](FONT.md) , [SCREEN](SCREEN.md)
* [_SCREENIMAGE](SCREENIMAGE.md)
* [_SCREENMOVE](SCREENMOVE.md) , [_SCREENX](SCREENX.md) , [_SCREENY](SCREENY.md)
</blockquote>
