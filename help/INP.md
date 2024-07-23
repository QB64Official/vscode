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


## [INP](INP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INP)
---
<blockquote>

### INP returns a value from a computer register or port values at a specified physical address.

</blockquote>

#### SYNTAX

<blockquote>

`i = INP ( address )`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Reading the current RGB color settings used in a bitmap to an array.
```vb
SCREEN 12
DIM Colors%(47)
OUT &H3C7, 0 ' set color port for INP reads at attribute 0 to start
FOR i = 0 TO 47
Colors%(i) = INP(&H3C9) ' moves to next color attribute every 3 loops
NEXT
```
  
<br>



##### Example 2: Reading the keyboard Scan Codes as an alternative to INKEY\$
```vb
DO: SLEEP
scancode% = INP(&H60)
a$ = INKEY$ ' clears keyboard buffer
PRINT scancode%;
LOOP UNTIL scancode% = 1 ' [ESC] keypress exit
```
  
<br>



##### Example 3: A simple ping pong game using an array function to read multiple keys for two players.
```vb
DEFINT A-Z
SCREEN 12
DIM ball%(100)        ' Set aside enough space to hold the ball sprite
CIRCLE (4, 3), 4, 4
PAINT (4, 3), 12, 4   ' Draw a filled circle and fill for ball
GET (0, 0)-(8, 7), ball%(0) ' Get the sprite into the Ball% array

begin:
xmin = 10: ymin = 10
xmax = 630: ymax = 470
x = 25: y = 25
dx = 1: dy = 1
LTpos = 50: RTpos = 50

DO: _LIMIT 100 'adjust higher for faster
CLS
IF ScanKey%(17) THEN LTpos = LTpos - 1
IF ScanKey%(31) THEN LTpos = LTpos + 1
IF ScanKey%(72) THEN RTpos = RTpos - 1
IF ScanKey%(80) THEN RTpos = RTpos + 1

PRINT "Player 1 : "; ponescore; " Player 2 : "; ptwoscore

IF x > xmax - 15 AND y >= RTpos AND y <= RTpos + 100 THEN
dx = -1
ELSEIF x > xmax THEN
ponescore = ponescore + 1
GOSUB begin
END IF

IF x < xmin + 15 AND y >= LTpos AND y <= LTpos + 100 THEN
dx = 1
ELSEIF x < xmin THEN
ptwoscore = ptwoscore + 1
GOSUB begin
END IF

IF y > ymax - 5 THEN dy = -1
IF y < ymin + 5 THEN dy = 1
' Display the sprite elsewhere on the screen

x = x + dx
y = y + dy

PUT(x, y), ball%(0)


LINE (20, LTpos)-(20, LTpos + 100)
LINE (620, RTpos)-(620, RTpos + 100)

_DISPLAY 'shows completed screen every call

LOOP UNTIL ScanKey%(1)
END


FUNCTION ScanKey% (scancode%)
STATIC Ready%, keyflags%()
IF NOT Ready% THEN REDIM keyflags%(0 TO 127): Ready% = -1
i% = INP(&H60) 'read keyboard states
IF (i% AND 128) THEN keyflags%(i% XOR 128) = 0
IF (i% AND 128) = 0 THEN keyflags%(i%) = -1
K$ = INKEY$
ScanKey% = keyflags%(scancode%)
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [OUT](OUT.md) (write to register) , [PEEK](PEEK.md) (read memory)
* [INKEY&dollar;](INKEY&dollar;.md) , [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* Bitmaps , Scancodes (keyboard)
* Port Access Libraries (COM or LPT registers)
</blockquote>
