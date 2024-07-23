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


## [Scancodes](Scancodes.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Scancodes)
---
<blockquote>

### This page is maintained for historic purposes. The functionality of the code below can now be achieved through the _KEYDOWN function.

</blockquote>

#### SYNTAX

<blockquote>

`scanCode% = INP (&H60)`

</blockquote>

#### DESCRIPTION

<blockquote>


* Used to find [Ctrl], [Alt], [Shift], [Caps Lock], [Scroll Lock], [Num Lock] and [F]unction key controls.
* The keyboard input is stored at decimal register 96 or &H60 hexadecimal.
* Returns values from 0 to 127 for keypresses. 129 to 255 for key releases. Codes 91 to 93 are available in QB64 only .
* Every key (except Prt Scr/Sys Rq) has an identifying code that will not change with Caps Lock or Shift.
* Release codes are the original key press code + 128 . Example: [Esc] key press = 1 and  release = 129.
* Extended (added) keys on modern keyboards may alternate codes with Left Shift codes 42 and 170 because of Num Lock mode.
* Keyboards with Alt Gr key: [_KEYHIT](KEYHIT.md) may return both Alt (100307) and Ctrl (100306) codes when key is pressed or released.
* Linux with foreign keyboards: [SHELL](SHELL.md) [_HIDE](HIDE.md) "setxkbmap us" can be used to setup a keyboard to read US scan codes .
* To clear the keyboard buffer, use the [INKEY&dollar;](INKEY&dollar;.md) function before or after the [INP](INP.md) read to avoid buffer overflows and beeps.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'                            Extended Keyboard Press Scancodes
'
' Esc  F1 F2 F3 F4 F5 F6 F7 F8 F9 F10  F11 F12   SysReq ScrL Pause
'  1   59 60 61 62 63 64 65 66 67 68   87  88     0     70    29
' &grave;~  1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0) -_ =+ BkSpc  Insert Home PgUp   NumL   /     *    -
'  41 2  3  4  5  6  7  8  9  10 11 12 13  14     82    71    73     69    53    55   74
' Tab  Q  W  E  R  T  Y  U  I  O  P  [{ ]} \|    Delete End  PgDn   7/Home 8/▲  9/PU  + 
'  15  16 17 18 19 20 21 22 23 24 25 26 27 43     83    79    81     71    72    73   78
' CapL  A  S  D  F  G  H  J  K  L  ;: '"  Enter                     4/◄-   5    6/-►  E
'  58   30 31 32 33 34 35 36 37 38 39 40   28                        75    76    77   n
' Shift  Z  X  C  V  B  N  M  ,< .> /?    Shift         ▲           1/End  2/▼  3/PD  t
'  42    44 45 46 47 48 49 50 51 52 53     54           72           79    80    81   e
' Ctrl Win Alt    Spacebar    Alt Win Menu Ctrl     ◄-  ▼   -►      0/Insert    ./Del r
'  29  91  56        57       56  92   93  29       75  80  77       82          83   28
'
'  QB64 codes only! Release codes = Press code + 128. Pause/Break may lock code returns.
```
  
<br>



##### Example 1: Displays the scan codes for most any keyboard press or release by the user.
```vb
DO
scancode% = INP(&H60)
LOCATE 15, 30
IF scancode% < 128 THEN COLOR 10: PRINT "Pressed Code ="; scancode%; SPACE$(1)
IF scancode% > 127 THEN COLOR 12: PRINT "Release Code ="; scancode%; SPACE$(1)
a$ = INKEY$           ' prevent keyboard beeps
LOOP UNTIL scancode% = 1  ' [Esc] key exit
```
  
<br>



##### Example 2: Unlike QBasic, INP(&H60) in QB64 reads from a queue so you never miss a key press.
```vb
DEFINT A-Z
DIM SHARED KeyPress(127)
CLS
tmp$ = " ## \\ "
DEF SEG = 0
DO
i = INP(&H60)  'update keydown states
DO             'key read loop
IF (i AND 128) THEN KeyPress(i XOR 128) = 0
IF (i AND 128) = 0 THEN KeyPress(i) = -1
i2 = i
i = INP(&H60)
POKE 1050, PEEK(1052)  'clear keyboard buffer
LOOP UNTIL i = i2

row = 2           'display the key down states to show you how it works!
FOR x% = 1 TO 88  'read each key scancode from KeyDown array
L = x% MOD 10: column = (7 * L) + 5
IF L = 0 THEN row = row + 2
LOCATE row, column
IF KeyPress(x%) THEN PRINT USING tmp$; x%; STRING$(2, 219) ELSE PRINT USING tmp$; x%; "UP"
NEXT
LOOP UNTIL i = 1
DEF SEG
END
```
  
<br>



##### Example 3: A simple MULTIKEY demo using the SC Array to hold multiple key presses for diagonal arrow key moves.
```vb
DEFINT A-Z
DIM BG(300), Box(300), SC(127) ' BG holds background images. Box holds the Box image.
SCREEN 13 ' graphic coordinate minimums are 0 to 319 column or 199 row maximums.
' set up screen background
COLOR 4: LOCATE 10, 5: PRINT "Multikey Keyboard input routine"
COLOR 10: LOCATE 12, 4: PRINT "Use the arrow keys to move the box."
LOCATE 13, 4: PRINT "Note that you can press two or more"
LOCATE 14, 4: PRINT "keys at once for diagonal movement!"
COLOR 14: LOCATE 16, 4: PRINT " Also demonstrates how GET and PUT "
LOCATE 17, 4: PRINT "are used to preserve the background."
COLOR 11: LOCATE 20, 11: PRINT "Press [Esc] to quit"
x = 150: y = 50: PX = x: PY = y ' actual box starting position

GET (x, y)-(x + 15, y + 15), BG      ' GET original BG at start box position
LINE (x, y)-(x + 15, y + 15), 9, BF  ' the plain blue box to move
GET (x, y)-(x + 15, y + 15), Box     ' GET to Box Array

DO  'main loop
t! = TIMER + .05
DO         ' 1 Tick (1/18th second) keypress scancode read loop
a$ = INKEY$        ' So the keyboard buffer won't get full
code% = INP(&H60)  ' Get keyboard scan code from port 96
IF code% < 128 THEN SC(code%) = 1 ELSE SC(code% - 128) = 0 ' true/false values to array
LOOP UNTIL  TIMER > t!' loop until one tick has passed

PX = x: PY = y  ' previous coordinates
IF SC(75) = 1 THEN x = x - 5: IF x < 0   THEN x = 0
IF SC(77) = 1 THEN x = x + 5: IF x > 304 THEN x = 304
IF SC(72) = 1 THEN y = y - 5: IF y < 0   THEN y = 0
IF SC(80) = 1 THEN y = y + 5: IF y > 184 THEN y = 184
IF x <> PX OR y <> PY THEN               ' look for a changed coordinate value
WAIT 936, 8: PUT (PX, PY), BG, PSET  ' replace previous BG first
GET (x, y)-(x + 15, y + 15), BG      ' GET BG at new position before box is set
PUT (x, y), Box, PSET                ' PUT box image at new position
END IF
LOOP UNTIL SC(1) = 1 ' main loop until [Esc] key (scan code 1) is pressed
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* [ASC](ASC.md) (function) , ASCII
* Keyboard scancodes
* Creating Sprite Masks
* Windows hot keys
* Keyboard Scan Codes
* Other Keyboards
</blockquote>
