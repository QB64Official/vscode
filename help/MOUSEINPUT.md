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


## [_MOUSEINPUT](MOUSEINPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEINPUT)
---
<blockquote>

### The _MOUSEINPUT function is used to monitor any new mouse positions, button presses or movements of the scroll wheel. Must be called before other mouse information becomes available.

</blockquote>

#### SYNTAX

<blockquote>

`infoExists%% = _MOUSEINPUT`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns -1 if new mouse information is available, otherwise it returns 0.
* Must be called before reading any of the other mouse functions. The function will not miss any mouse input even during an [INPUT](INPUT.md) entry.
* Use in a loop to monitor the mouse buttons, scroll wheel and coordinate positions.
* To clear all previous mouse data, use [_MOUSEINPUT](MOUSEINPUT.md) in a loop until it returns 0.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Mouse coordinate, click and scroll events are returned sequentially inside of a _MOUSEINPUT loop.
```vb
DO
DO WHILE _MOUSEINPUT '      Check the mouse status
PRINT _MOUSEX, _MOUSEY, _MOUSEBUTTON(1), _MOUSEWHEEL
LOOP
LOOP UNTIL INKEY$ <> ""
```
  
<br>



##### Example 2: How to use a _MOUSEINPUT loop to locate PSET positions on a screen using a right mouse button click.
```vb
SCREEN 12

DO ' main program loop

' your program code

DO WHILE _MOUSEINPUT'mouse status changes only
x = _MOUSEX
y = _MOUSEY
IF x > 0 AND x < 640 AND y > 0 AND y < 480 THEN
IF _MOUSEBUTTON(2) THEN
PSET (x, y), 15
LOCATE 1, 1: PRINT x, y
END IF
END IF
LOOP

' your program code

LOOP UNTIL INKEY$ = CHR$(27)
```
  
<br>



##### Example 3: Clearing any mouse data read before or during an INPUT entry. Press "I" to enter input:
```vb
PRINT "Press I to enter input! Press Q to quit"
DO
K$ = UCASE$(INKEY$)
DO
IF _MOUSEBUTTON(1) = -1 THEN PRINT "*"    'indicates a mouse click event
LOOP WHILE _MOUSEINPUT
IF K$ = "Q" THEN END
IF K$ = "I" THEN                                          'press I to enter text
INPUT "Click the mouse and enter something: ", entry$   'enter some text
GOSUB Clickcheck                                        'clear mouse data
END IF
LOOP

END

Clickcheck:
count = 0
DO
count = count + 1
LOOP WHILE _MOUSEINPUT
PRINT count        'returns the number of loops before mouse data is cleared
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md) , [_MOUSEBUTTON](MOUSEBUTTON.md) , [_MOUSEWHEEL](MOUSEWHEEL.md)
* [_MOUSESHOW](MOUSESHOW.md) , [_MOUSEHIDE](MOUSEHIDE.md) , [_MOUSEMOVE](MOUSEMOVE.md)
* Controller Devices
</blockquote>
