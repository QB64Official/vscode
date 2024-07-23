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


## [INKEY\$](INKEY\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INKEY%24)
---
<blockquote>

### The INKEY$ function returns user input as ASCII STRING character(s) from the keyboard buffer.

</blockquote>

#### SYNTAX

<blockquote>

`keypress$ = INKEY$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns ASCII character string values in upper or lower cases. See: [UCASE&dollar;](UCASE&dollar;.md) and [LCASE&dollar;](LCASE&dollar;.md)
* Returns "" if no key has been pressed since the last keyboard read.
* Some control keys cannot be read by [INKEY&dollar;](INKEY&dollar;.md) or will return 2 byte ASCII codes.
* [INKEY&dollar;](INKEY&dollar;.md) can also be used to clear a [SLEEP](SLEEP.md) key press or the keyboard buffer in a loop.
* Assign the [INKEY&dollar;](INKEY&dollar;.md) return to a string variable to save the key entry.
* [LOCATE](LOCATE.md) , , 1 displays the [INKEY&dollar;](INKEY&dollar;.md) cursor. Use [LOCATE](LOCATE.md) , , 0 to turn it off.
* To receive input from a [&dollar;CONSOLE](&dollar;CONSOLE.md) window, use [_CINP](CINP.md) .
* Returns can be evaluated as certain ASCII characters or codes.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'                                ASCII Keyboard Codes
'
'  Esc  F1  F2  F3  F4  F5  F6  F7  F8  F9  F10  F11  F12  Sys ScL Pause
'   27 +59 +60 +61 +62 +63 +64 +65 +66 +67 +68  +133 +134   -   -    -
'  &grave;~  1!  2@  3#  4$  5%  6^  7&  8*  9(  0) -_ =+ BkSp   Ins Hme PUp   NumL  /   *    -
'  126 33  64  35  36  37  94  38  42  40  41 95 43   8    +82 +71 +73    -    47  42   45
'   96 49  50  51  52  53  54  55  56  57  48 45 61
'  Tab Q   W   E   R   T   Y   U   I   O   P  [{  ]}  \|   Del End PDn   7Hme 8/▲  9PU  + 
'   9  81  87  69  82  84  89  85  73  79  80 123 125 124  +83 +79 +81   +71  +72  +73  43
'     113 119 101 114 116 121 117 105 111 112  91  93  92                 55   56   57 
'  CapL  A   S   D   F   G   H   J   K   L   ;:  '" Enter                4/◄-  5   6/-►
'    -   65  83  68  70  71  72  74  75  76  58  34  13                  +75  +76  +77  E
'        97 115 100 102 103 104 106 107 108  59  39                       52   53   54  n
'  Shift  Z   X   C   V   B   N   M   ,<  .>  /?    Shift       ▲        1End 2/▼  3PD  t
'    *    90  88  67  86  66  78  77  60  62  63      *        +72       +79  +80  +81  e
'        122 120  99 118  98 110 109  44  46  47                          49   50   51  r
'  Ctrl Win Alt       Spacebar          Alt Win Menu Ctrl   ◄-  ▼   -►   0Ins     .Del 
'   *    -   *           32              *   -   -    *    +75 +80 +77   +82       +83  13
'                                                                         48        46
'
'      Italics = LCase/NumLock On  * = 2 byte combo only,  + = 2 Byte: CHR$(0) + CHR$(code)
'
```
  
<br>

```vb
Two Byte Characters        Key                 CHR$(0) + "?" 

CHR$(0) + CHR$(16-50)      [Alt] + letter
CHR$(0) + CHR$(59)         [F1]                 ";"
CHR$(0) + CHR$(60)         [F2]                 "<"
CHR$(0) + CHR$(61)         [F3]                 "="
CHR$(0) + CHR$(62)         [F4]                 ">"
CHR$(0) + CHR$(63)         [F5]                 "?"
CHR$(0) + CHR$(64)         [F6]                 "@"
CHR$(0) + CHR$(65)         [F7]                 "A"
CHR$(0) + CHR$(66)         [F8]                 "B"
CHR$(0) + CHR$(67)         [F9]                 "C"
CHR$(0) + CHR$(68)         [F10]                "D"
CHR$(0) + CHR$(71)         [Home]               "G"
CHR$(0) + CHR$(72)         [↑] Arrow            "H"
CHR$(0) + CHR$(73)         [Page Up]            "I"
CHR$(0) + CHR$(75)         [←] Arrow            "K"
CHR$(0) + CHR$(76)         [5 NumberPad]        "L" (NumLock off in QB64)
CHR$(0) + CHR$(77)         [→] Arrow            "M"
CHR$(0) + CHR$(79)         [End]                "O"
CHR$(0) + CHR$(80)         [↓] Arrow            "P"
CHR$(0) + CHR$(81)         [Page Down]          "Q"
CHR$(0) + CHR$(82)         [Insert]             "R"
CHR$(0) + CHR$(83)         [Delete]             "S"
CHR$(0) + CHR$(84-93)      [Shift] + F1-10
CHR$(0) + CHR$(94-103)     [Ctrl] + F1-10
CHR$(0) + CHR$(104-113)    [Alt] + F1-10
CHR$(0) + CHR$(114-119)    [Ctrl] + keypad
CHR$(0) + CHR$(120-129)    [Alt] + number
CHR$(0) + CHR$(130 or 131) [Alt] + _/- or +/=   "é" or "â"
CHR$(0) + CHR$(133)        [F11]                "à"
CHR$(0) + CHR$(134)        [F12]                "å"
CHR$(0) + CHR$(135)        [Shift] + [F11]      "ç"
CHR$(0) + CHR$(136)        [Shift] + [F12]      "ê"
CHR$(0) + CHR$(137)        [Ctrl] + [F11]       "ë"
CHR$(0) + CHR$(138)        [Ctrl] + [F12]       "è"
CHR$(0) + CHR$(139)        [Alt] + [F11]        "ï"
CHR$(0) + CHR$(140)        [Alt] + [F12]        "î"
```
  
<br>



##### Example 1: Clearing the keyboard buffer after SLEEP delays for later INPUT .
```vb
PRINT "Press any keyboard typing key to end SLEEP"
SLEEP
DO: K$ = INKEY$: PRINT K$: LOOP UNTIL K$ = ""
```
  
<br>



##### Example 2: Entering a Ctrl + letter keypress combination will print ASCII Control characters 1 to 26. .
```vb
DO
K$ = INKEY$
IF K$ <> "" THEN PRINT K$; " ";
LOOP UNTIL K$ = CHR$(27) 'Esc key exit
```
  
<br>



##### Example 3: Use UCASE\$ (INKEY\$) in a keyboard read loop looking for uppercase "Y" or "N" user inputs to avoid multiple IF statements.
```vb
DO
PRINT "Do you want to continue? (Y/N): ";  'semicolon saves position for user entry
DO: K$ = UCASE$(INKEY$) 'change any user key press to uppercase
LOOP UNTIL K$ = "Y" OR K$ = "N"
PRINT K$  'print valid user entry
IF K$ = "N" THEN END
LOOP
```
  
<br>



##### Example 4: Getting just number values entered by a user in an INKEY\$ input loop.
```vb
LOCATE 10, 10: PRINT "Enter a number value: ";
DO: SLEEP
K$ = INKEY$
IF K$ >= CHR$(48) AND K$ <= CHR$(57) THEN entry$ = entry$ + K$ ' numbers only
L = LEN(entry$) ' check entry length for possible backspace
IF K$ = CHR$(46) AND flag = 0 THEN entry$ = entry$ + K$: flag = 1: mark = L ' decimal point
IF K$ = CHR$(8) AND L > 0 THEN ' backspace pressed and entry has a length
entry$ = MID$(entry$, 1, L - 1) ' remove one character from entry$
IF LEN(entry$) < mark THEN flag = 0 ' allow decimal point entry if other was removed.
LOCATE CSRLIN, POS(0) - 1: PRINT SPACE$(1); ' remove end character from screen
END IF
LOCATE 10, 32: PRINT entry$; ' display entry to user (semicolon required for correct POS)
LOOP UNTIL K$ = CHR$(13) AND L > 0 'assures something is entered
```
  
<br>



##### Example 5: Using arrow keys to move a text character. A change from a previous position tells program when to PRINT:
```vb
movey = 1: movex = 1 'text coordinates can never be 0
at$ = "@"  'text sprite could be almost any ASCII character
LOCATE movey, movex: PRINT at$;
DO
px = movex: py = movey 'previous positions
B$ = INKEY$
IF B$ = CHR$(0) + CHR$(72) AND movey > 1 THEN movey = movey - 1 'rows 1 to 23 only
IF B$ = CHR$(0) + CHR$(80) AND movey < 23 THEN movey = movey + 1
IF B$ = CHR$(0) + CHR$(75) AND movex > 1 THEN movex = movex - 1 'columns 1 to 80 only
IF B$ = CHR$(0) + CHR$(77) AND movex < 80 THEN movex = movex + 1

IF px <> movex OR py <> movey THEN 'only changes when needed
LOCATE py, px: PRINT SPACE$(1); 'erase old sprite
LOCATE movey, movex: PRINT at$; 'show new position
END IF
LOOP UNTIL B$ = CHR$(27) 'ESCape key exit
END
```
  
<br>



##### Example 6: Using INKEY\$ with the arrow or WASD keys to move the QB64 bee image sprite with _PUTIMAGE :
```vb
DIM image AS LONG
DIM x AS INTEGER
DIM y AS INTEGER
DIM Keypress AS STRING

SCREEN _NEWIMAGE(800, 600, 32)

x = 0
y = 0
image = _LOADIMAGE("QB64bee.png") 'Here I actually used the QB64 icon

DO
_PUTIMAGE (x, y), image
DO
Keypress = UCASE$(INKEY$)
' ***** The following line detects the arrow keys *****
IF LEN(Keypress) > 1 THEN Keypress = RIGHT$(Keypress, 1)
LOOP UNTIL Keypress > ""

CLS ' blank screen after valid key press to avoid smearing image on page

SELECT CASE Keypress
CASE "W", "H": y = y - 10 'Up
CASE "A", "K": x = x - 10 'Left
CASE "S", "P": y = y + 10 'Down
CASE "D", "M": x = x + 10 'Right
CASE "Q", CHR$(27): END 'Q or Esc Ends prog.
END SELECT
_PUTIMAGE (x, y), image
LOOP
```
  
<br>



##### Example 7: Creating upper ASCII characters in a QB program using Alt + three number keys:
```vb
DO
A$ = "": WHILE A$ = "": A$ = INKEY$: WEND
IF LEN(A$) = 2 THEN '2 byte INKEY$ return
B$ = RIGHT$(A$, 1)  'read second byte
b% = ASC(B$)        'read second byte code
IF b% > 119 AND b% < 130 THEN ' Alt + number codes only
C% = b% - 119  ' convert to actual number
IF C% > 9 THEN C% = 0
num$ = num$ + LTRIM$(STR$(C%))
END IF
END IF
LOOP UNTIL LEN(num$) = 3  ' 3 digit codes only

PRINT num$
PRINT CHR$(VAL(num$)
```
  
<br>

```vb
155 ¢
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md) , [_MAPUNICODE](MAPUNICODE.md)
* [_KEYCLEAR](KEYCLEAR.md)
* [INPUT](INPUT.md) , [LINE](LINE.md) [INPUT](INPUT.md)
* [INPUT&dollar;](INPUT&dollar;.md) , [INP](INP.md)
* [CHR&dollar;](CHR&dollar;.md) , ASCII
* [ASC](ASC.md) (function) , Scancodes (keyboard)
* Windows hot keys
</blockquote>
