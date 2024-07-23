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


## [KEY n](KEY_n.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/KEY%20n)
---
<blockquote>

### The KEY n statement is used to assign a "soft key" string or a flag and scan code to a function key or display function soft key assignments.

</blockquote>

#### SYNTAX

<blockquote>

`KEY n% , textString$`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
KEY 1, "Help" 'returns the string "Help" to INPUT variable when F1 is pressed
```
  
<br>

```vb
Function Key Flag Combination Values

0 = no function key combination flag(single key)
1 = Left Shift key flag
2 = Right Shift key flag
4 = Ctrl flag
8 = Alt flag
32 = Number Lock flag
64 = Caps Lock flag
128 = Extended keys (see trapping extended keys below)

Flag values can be added to monitor multiple function key combinations.
```
  
<br>

```vb
'                           Soft Key Scan Code Values
'
'      1  2  3  4  5  6  7  8  9  10   30  31                       Predefined Keys
' Esc  F1 F2 F3 F4 F5 F6 F7 F8 F9 F10  F11 F12   SysReq ScrL Pause
'  1   59 60 61 62 63 64 65 66 67 68   87  88     --    70    29
' &grave;~  1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0) -_ =+ BkSpc  Insert Home PgUp   NumL   /     *    -
'  41 2  3  4  5  6  7  8  9  10 11 12 13  14     82    71    73    32/69  53    55   74
' Tab  Q  W  E  R  T  Y  U  I  O  P  [{ ]} \|    Delete End  PgDn   7/Home 8/▲  9/PU  + 
'  15  16 17 18 19 20 21 22 23 24 25 26 27 43     83    79    81     71   11/72  73   78
' CapL  A  S  D  F  G  H  J  K  L  ;: '"  Enter                     4/◄-   5    6/-►  E
' 64/58 30 31 32 33 34 35 36 37 38 39 40   28                       12/75  76   13/77 n
' Shift  Z  X  C  V  B  N  M  ,< .> /?    Shift         ▲           1/End  2/▼  3/PD  t
' 1/42   44 45 46 47 48 49 50 51 52 53    2/54          72           79   14/80  81   e
' Ctrl Win Alt    Spacebar    Alt Win Menu Ctrl     ◄-  ▼   -►      0/Insert    ./Del r
' 4/29  91 8/56      57       56  92   93  29       75  80  77       82          83   28
'
'  Keyflag: Function(0, 1, 2, 4, 8, 32, 64), Extended(128) Scan Code: 1-88, QB64 only(91-93)
'
'        Reserved and function key combinations can be made using the scan code instead.
'             Add function flag values to 128 for Extended key combinations.
```
  
<br>

```vb
KEY 15, CHR$(4) + CHR$(13) 'enabled event when Ctrl and + key are pressed
```
  
<br>

```vb
KEY n, CHR$(128) + CHR$(scancode) ' where n = 15 to 29. See: Scancodes

KEY 15, CHR$(128) + CHR$(75)  'left arrow cursor pad

KEY 16, CHR$(128) + CHR$(72)  'up arrow cursor pad

KEY 17, CHR$(128) + CHR$(77)  'right arrow cursor pad

KEY 18, CHR$(128) + CHR$(80)  'down arrow cursor pad
```
  
<br>



##### Example 1: Shows a list of all the string assignments to the function keys F1-F12 (Prints help every time F1 is pressed in the input)
```vb
KEY 1, "Help"
KEY LIST
INPUT "Press F1 or to quit press ENTER: ", a$
```
  
<br>

```vb
F1 Help
F2
F3
F4
F5
F6
F7
F8
F9
F10
F11
F12
Press F1 or to quit press ENTER: HelpHelpHelpHelp
```
  
<br>



##### Example 2: Trapping the Control + key combination. Use the Control Keyboard flag 4 and + key scancode 13.
```vb
CLS
KEY 15, CHR$(4) + CHR$(13)     'scancode for "=" or "+" key is 13
ON KEY(15) GOSUB control       'action of user defined key press
KEY(15) ON                     'turn ON event trapping for key combination
PRINT "Press Ctrl and plus key combination, escape quits!"
DO: SLEEP
count = count + 1
PRINT count;
IF INKEY$ = CHR$(27) THEN END  'escape key exit
LOOP

control:                             'NUMBER LOCK MUST BE OFF!
PRINT "Control and + keys pressed!";
RETURN
```
  
<br>



##### Example 3: Differentiating the extended cursor keypad arrows from the predefined Number Pad arrow keys.
```vb
'predefined keys 11 to 14 for number pad arrows only
ON KEY(11) GOSUB UpNum: KEY(11) ON 'up
ON KEY(12) GOSUB LNum: KEY(12) ON  'left
ON KEY(13) GOSUB RNum: KEY(13) ON  'right
ON KEY(14) GOSUB DnNum: KEY(14) ON 'down
'user defined keys use extended key flag 128 + scan code
ON KEY(15) GOSUB UpPad
KEY 15, CHR$(128) + CHR$(72): KEY(15) ON 'cursor up
ON KEY(16) GOSUB LPad
KEY 16, CHR$(128) + CHR$(75): KEY(16) ON 'cursor left
ON KEY(17) GOSUB RPad
KEY 17, CHR$(128) + CHR$(77): KEY(17) ON 'cursor right
ON KEY(18) GOSUB DnPad
KEY 18, CHR$(128) + CHR$(80): KEY(18) ON 'cursor down

DEF SEG = 0
DO
numL = PEEK(1047) AND 32 '32 if on
capL = PEEK(1047) AND 64 '64 on
IF numL OR capL THEN
COLOR 12: LOCATE 13, 50: PRINT "Turn Num or Cap Lock OFF!"
ELSE : COLOR 10: LOCATE 13, 50: PRINT "Number and Cap Lock OK!  "
SLEEP                  ' KEY or TIMER event breaks a sleep
END IF
LOOP UNTIL INKEY$ = CHR$(27)
DEF SEG

KEY(15) OFF: KEY(16) OFF: KEY(17) OFF: KEY(18) OFF
KEY(11) OFF: KEY(12) OFF: KEY(13) OFF: KEY(14) OFF
END

UpPad:
COLOR 14: LOCATE 11, 26: PRINT " Up cursor pad  "
RETURN
LPad:
COLOR 14: LOCATE 11, 26: PRINT "Left cursor pad "
RETURN
RPad:
COLOR 14: LOCATE 11, 26: PRINT "Right cursor pad"
RETURN
DnPad:
COLOR 14: LOCATE 11, 26: PRINT "Down cursor pad "
RETURN
UpNum:
COLOR 11: LOCATE 11, 26: PRINT " Up number pad  "
RETURN
LNum:
COLOR 11: LOCATE 11, 26: PRINT "Left number pad "
RETURN
RNum:
COLOR 11: LOCATE 11, 26: PRINT "Right number pad"
RETURN
DnNum:
COLOR 11: LOCATE 11, 26: PRINT "Down number pad "
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [KEY](KEY.md) [LIST](LIST.md) , [ON](ON.md) KEY(n)
* KEY(n) , [INKEY&dollar;](INKEY&dollar;.md)
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* Keyboard scancodes
</blockquote>
