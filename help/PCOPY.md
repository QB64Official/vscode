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


## [PCOPY](PCOPY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PCOPY)
---
<blockquote>

### The PCOPY statement copies one source screen page to a destination page in memory.

</blockquote>

#### SYNTAX

<blockquote>

`PCOPY sourcePage% , destinationPage%`

</blockquote>

#### DESCRIPTION

<blockquote>


* sourcePage% is an image page in video memory.
* destinationPage% is the video memory location to copy the source image to.
* The working page is set as 0. All drawing occurs there.
* The visible page is set as any page number that the [SCREEN](SCREEN.md) mode allows.
* The [_DISPLAY](DISPLAY.md) (function) return can be used a page number reference in QB64 (See Example 1).
* The QB64 [_DISPLAY](DISPLAY.md) statement can also be used to stop screen flicker without page flipping or [CLS](CLS.md) and is the recommended practice .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Creating a mouse cursor using a page number that you create in memory without setting up page flipping.
```vb
SCREEN _NEWIMAGE(640, 480, 32) 'any graphics mode should work without setting up pages
_MOUSEHIDE
SetupCursor
PRINT "Hello World!"
DO: _LIMIT 30
DO WHILE _MOUSEINPUT: LOOP 'main loop must contain _MOUSEINPUT
'       other program code
LOOP

SUB SetupCursor
ON TIMER(0.02) UpdateCursor
TIMER ON
END SUB

SUB UpdateCursor
PCOPY _DISPLAY, 100  'any page number as desination with the _DISPLAY function as source
PSET (_MOUSEX, _MOUSEY), _RGB(0, 255, 0)
DRAW "ND10F10L3F5L4H5L3"
_DISPLAY                  'statement shows image
PCOPY 100, _DISPLAY 'function return as destination page
END SUB
```
  
<br>



##### Example 2: Bouncing balls
```vb
SCREEN 7, 0, 1, 0
DIM x(10), y(10), dx(10), dy(10)
FOR a = 1 TO 10
x(a) = INT(RND * 320) + 1
y(a) = INT(RND * 200) + 1
dx(a) = (RND * 2) - 1
dy(a) = (RND * 2) - 1
NEXT
DO
PCOPY 1, 0                           'place image on the visible page 0
CLS
_LIMIT 100                           'regulates speed of balls in QB64
FOR a = 1 TO 10
CIRCLE(x(a), y(a)), 5, 15          'all erasing and drawing is done on page 1
x(a) = x(a) + dx(a)
y(a) = y(a) + dy(a)
IF x(a) > 320 THEN dx(a) = -dx(a): x(a) = x(a) - 1
IF x(a) < 0 THEN dx(a) = -dx(a): x(a) = x(a) + 1
IF y(a) > 200 THEN dy(a) = -dy(a): y(a) = y(a) - 1
IF y(a) < 0 THEN dy(a) = -dy(a): y(a) = y(a) + 1
NEXT
LOOP UNTIL INKEY$ = CHR$(27) ' escape exit
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DISPLAY](DISPLAY.md)
* [SCREEN](SCREEN.md)
</blockquote>
