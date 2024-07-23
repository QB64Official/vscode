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


## [_MOUSEBUTTON](MOUSEBUTTON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEBUTTON)
---
<blockquote>

### The _MOUSEBUTTON function returns the button status of a specified mouse button when read after _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`buttonStatus%% = _MOUSEBUTTON ( buttoNumber )`

</blockquote>

#### PARAMETERS

<blockquote>


* [INTEGER](INTEGER.md) buttoNumber designates the mouse button to read (See [_DEVICES](DEVICES.md) for more than 3).
* 1 = Left mouse button
* 2 = Right mouse button
* 3 = Center or scroll button
</blockquote>

#### DESCRIPTION

<blockquote>


* Returns -1 if the corresponding buttoNumber is pressed or zero when released.
* Read [_MOUSEINPUT](MOUSEINPUT.md) first to return the current button up or down status. (See Example 2)
* Button clicks and mouse movements will be remembered and should be cleared after an [INPUT](INPUT.md) statement or other interruption.
* To clear unread mouse input, use a [_MOUSEINPUT](MOUSEINPUT.md) loop that loops until it returns 0.
* Use [_DEVICE&dollar;](DEVICE&dollar;.md) to find the "[MOUSE]" [_DEVICES](DEVICES.md) number to find the number of buttons available using [_LASTBUTTON](LASTBUTTON.md) .
* Note: The center mouse button can also be read as [_BUTTON](BUTTON.md) (2) on [_DEVICEINPUT](DEVICEINPUT.md) (2) when a mouse is present.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Finding the number of mouse buttons available in QB64. This could also be used for other controller devices.
```vb
FOR d = 1 TO _DEVICES  'number of input devices found
dev$ = _DEVICE$(d)
IF INSTR(dev$, "[MOUSE]") THEN buttons = _LASTBUTTON(d): EXIT FOR
NEXT
PRINT buttons; "mouse buttons available"
```
  
<br>



##### Example 2: How to monitor when a button is down or wait until a mouse button is not held down.
```vb
PRINT "Hold down the left mouse button until you want to quit!"
DO
i = _MOUSEINPUT ' read #1
IF _MOUSEBUTTON(1) THEN PRINT "Left button down!": EXIT DO
LOOP
DO '                                                      need to wait
i = _MOUSEINPUT '  read #2                         until the mouse
LOOP UNTIL NOT _MOUSEBUTTON(1) '                       button is released

PRINT "DONE!"
```
  
<br>



##### Example 3: Checking for a click or a double-click by the user.
```vb
DO  'main program loop

DO WHILE _MOUSEINPUT                'check mouse status
buttondown = _MOUSEBUTTON(1)
LOOP
DO WHILE buttondown                 'check for button release
i = _MOUSEINPUT
buttondown = _MOUSEBUTTON(1)
Click = 1
LOOP

IF Click = 1 THEN                   'if button was pressed and released
t = TIMER + .3
DO WHILE TIMER < t      'check for a second press within .3 seconds
i = _MOUSEINPUT
IF _MOUSEBUTTON(1) THEN Click = 2: EXIT DO
LOOP
IF Click = 2 THEN PRINT "Double click" ELSE PRINT "Click"
END IF
Click = 0: buttondown = 0            'reset where needed
LOOP UNTIL INKEY$ = CHR$(27)
```
  
<br>



##### Example 4: Verifying that a user clicked and released a mouse button on a program button.
```vb
SCREEN 12
LINE (250, 250)-(300, 300), 14, BF

DO
Mouser mx, my, mb
IF mb THEN
IF mx >= 250 AND my >= 250 AND mx <= 300 AND my <= 300 THEN 'button down
DO WHILE mb 'wait for button release
Mouser mx, my, mb
LOOP
'verify mouse still in box area
IF mx >= 250 AND my >= 250 AND mx <= 300 AND my <= 300 THEN PRINT "Click verified on yellow box!"
END IF
END IF
LOOP

SUB Mouser (x, y, b)
mi = _MOUSEINPUT
b = _MOUSEBUTTON(1)
x = _MOUSEX
y = _MOUSEY
END SUB
```
  
<br>

```vb
SUB Catchup
DO WHILE _MOUSEINPUT: LOOP 
END SUB
```
  
<br>



##### Example 5: Combining mouse button or keyboard selections in a menu or test:
```vb
DO 'main program loop in demo only
LOCATE 10, 10: PRINT "A" 'position A, B & C in same position on every question
LOCATE 12, 10: PRINT "B"
LOCATE 14, 10: PRINT "C" 'demo only

DO: _LIMIT 10 'get user answer loop
DO WHILE _MOUSEINPUT: LOOP 'read mouse
K$ = UCASE$(INKEY$) 'read keypresses also
x% = _MOUSEX
y% = _MOUSEY
Lclick = _MOUSEBUTTON(1)

LOCATE 20, 10: PRINT x%, y%, Lclick 'only used to find mouse coordinates
IF x% = 10 AND y% = 10 AND Lclick THEN 'position clicked
DO
i = _MOUSEINPUT
x% = _MOUSEX
y% = _MOUSEY
LOOP WHILE _MOUSEBUTTON(1)
IF x% = 10 AND y% = 10 THEN K$ = "A" 'position released
END IF
IF x% = 10 AND y% = 12 AND Lclick THEN 'position clicked
DO
i = _MOUSEINPUT
x% = _MOUSEX
y% = _MOUSEY
LOOP WHILE _MOUSEBUTTON(1)
IF x% = 10 AND y% = 12 THEN K$ = "B" 'position released
END IF
IF x% = 10 AND y% = 14 AND Lclick THEN 'position clicked
DO
i = _MOUSEINPUT
x% = _MOUSEX
y% = _MOUSEY
LOOP WHILE _MOUSEBUTTON(1)
IF x% = 10 AND y% = 14 THEN K$ = "C" 'position released
END IF
LOOP UNTIL K$ = "A" OR K$ = "B" OR K$ = "C" 'GOTO next question

IF LEN(K$) THEN 'DEMO ONLY
LOCATE 22, 35: PRINT "  Answer = "; K$ 'display user answer at location
_DELAY 2 'allow time for user to view answer
LOCATE 22, 35: PRINT "SELECT AGAIN"
K$ = "" 'reset K$
END IF
LOOP 'DEMO only loop use red X box to quit
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md) , [_MOUSEWHEEL](MOUSEWHEEL.md)
* [_MOUSEINPUT](MOUSEINPUT.md) , [_MOUSEMOVE](MOUSEMOVE.md)
* [_MOUSESHOW](MOUSESHOW.md) , [_MOUSEHIDE](MOUSEHIDE.md)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md) , [_LASTBUTTON](LASTBUTTON.md)
* [_BUTTON](BUTTON.md) , [_BUTTONCHANGE](BUTTONCHANGE.md)
* Controller Devices
</blockquote>
