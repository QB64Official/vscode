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


## [ASCII](ASCII.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ASCII)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
CTRL + A = CHR$(1)   ☺  StartHeader (SOH)    CTRL + B = CHR$(2)   ☻  StartText         (STX)
CTRL + C = CHR$(3)   ♥  EndText     (ETX)    CTRL + D = CHR$(4)   ♦  EndOfTransmit     (EOT)
CTRL + E = CHR$(5)   ♣  Enquiry     (ENQ)    CTRL + F = CHR$(6)   ♠  Acknowledge       (ACK)
CTRL + G = CHR$(7)   •  Bell        (BEL)    CTRL + H = CHR$(8)   ◘  [Backspace]       (BSP)
CTRL + I = CHR$(9)   ○  Horiz.Tab   [Tab]    CTRL + J = CHR$(10)  ◙  LineFeed(printer) (LF)
CTRL + K = CHR$(11)  ♂  Vert. Tab   (VT)     CTRL + L = CHR$(12)  ♀  FormFeed(printer) (FF)
CTRL + M = CHR$(13)  ♪  [Enter]     (CR)     CTRL + N = CHR$(14)  ♫  ShiftOut          (SO)
CTRL + O = CHR$(15)  ☼  ShiftIn     (SI)     CTRL + P = CHR$(16)  ►  DataLinkEscape    (DLE)
CTRL + Q = CHR$(17)  ◄  DevControl1 (DC1)    CTRL + R = CHR$(18)  ↕  DeviceControl2    (DC2)
CTRL + S = CHR$(19)  ‼  DevControl3 (DC3)    CTRL + T = CHR$(20)  ¶  DeviceControl4    (DC4)
CTRL + U = CHR$(21)  §  NegativeACK (NAK)    CTRL + V = CHR$(22)  ▬  Synchronous Idle  (SYN)
CTRL + W = CHR$(23)  ↨  EndTXBlock  (ETB)    CTRL + X = CHR$(24)  ↑  Cancel            (CAN)
CTRL + Y = CHR$(25)  ↓  EndMedium   (EM)     CTRL + Z = CHR$(26)  →  End Of File(SUB)  (EOF)

Red symbols will format text and not PRINT the symbol. _PRINTSTRING can print in QB64
```
  
<br>

```vb
SCREEN 12
COLOR 14: PRINT "Press Control + letter key combinations."
DO
K$ = INKEY$
IF LEN(K$) THEN
code = ASC(K$)
IF code < 32 THEN _PRINTSTRING (220, 100), "Ctrl + " + CHR$(code + 64) + " = " + K$ + " "
END IF
LOOP UNTIL K$ = CHR$(27)

END
```
  
<br>

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
'      Italics = LCase/NumLock On  ____________  + = 2 Byte: CHR$(0) + CHR$(code)
```
  
<br>

```vb
'             Demo displays all ASCII codes and 2 byte code combinations
DO: K$ = INKEY$
IF K$ <> "" THEN 'ASC will return an error if an empty string is read!
IF ASC(K$) > 0 THEN
PRINT "CHR$(" + LTRIM$(STR$(ASC(K$))) + ")" 'display normal keypress codes
ELSE PRINT "CHR$(0) + CHR$(" + LTRIM$(STR$(ASC(K$, 2))) + ")" 'display 2 byte codes
END IF
END IF
LOOP UNTIL K$ = CHR$(27) 'escape key press exits
```
  
<br>

```vb
Two Byte Character Codes       Key                 CHR$(0) + "?" 

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
CHR$(0) + CHR$(72)         [↑] Up Arrow         "H"
CHR$(0) + CHR$(73)         [Page Up]            "I"
CHR$(0) + CHR$(75)         [←] Left Arrow       "K"
CHR$(0) + CHR$(76)         [5 NumberPad]        "L" (NumLock off in QB64)
CHR$(0) + CHR$(77)         [→] Right Arrow      "M"
CHR$(0) + CHR$(79)         [End]                "O"
CHR$(0) + CHR$(80)         [↓] Down Arrow       "P"
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



##### Example 1: Using arrow keys to move a text character. A change from a previous position tells program when to PRINT:
```vb
movey = 1: movex = 1 'text coordinates can never be 0
at$ = "@" 'text sprite could be almost any ASCII character
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



##### Example 2: Routine displays all keypress codes including Ctrl, Alt and Shift combinations. Ctrl + letter = control codes 1 to 26.
```vb
SCREEN 13
tmp$ = "   CHR$(###),\\,\          \       "
tmp2$ = "  CHR$(0) + CHR$(###) \           \"
COLOR 14: LOCATE 3, 3: PRINT "The code can tell what key is pressed"
COLOR 12: LOCATE 5, 14: PRINT CHR$(3); SPACE$(3);
COLOR 13: PRINT CHR$(5); SPACE$(3);
COLOR 12: PRINT CHR$(4); SPACE$(3);
COLOR 13: PRINT CHR$(6)
COLOR 10: LOCATE 7, 4: PRINT " Hit a key to find the ASCII Code"
COLOR 5: LOCATE 13, 1: PRINT " Codes below 33 are called control keys"
LOCATE 14, 1: PRINT " CHR$(0) + are 2 byte Extended key codes"
COLOR 13: LOCATE 16, 1: PRINT " Extended: Press Alt + numberpad: Enter"
LOCATE 18, 1: PRINT "  Try some Ctrl, Alt, or Shift Combo's"
COLOR 5: LOCATE 20, 1: PRINT " INKEY$ is used to detect the key entry"
COLOR 2: LOCATE 22, 15: PRINT CHR$(1); "       "; CHR$(2)
COLOR 4: LOCATE 24, 10: PRINT "To Quit hit the TAB key";

COLOR 9
DO
DO: SLEEP: A$ = INKEY$: LOOP UNTIL A$ <> "" 'legal ASC read keys
IF ASC(A$) > 0 THEN ' normal key codes
code% = ASC(A$)
SELECT CASE code%
CASE 7: Key$ = "Beep"
CASE 8: Key$ = "Backspace"
CASE 9: Key$ = "Tab Key"
CASE 10: Key$ = "Line Feed"
CASE 12: Key$ = "Form Feed"
CASE 13: Key$ = "Enter"
CASE 27: Key$ = "Escape"
CASE 32: Key$ = "Space Bar"
CASE 48 TO 57: Key$ = "Number"
CASE 65 TO 90: Key$ = "Uppercase"
CASE 97 TO 122: Key$ = "Lowercase"
CASE ELSE: Key$ = ""
END SELECT
SELECT CASE code% 'check for unprintable control combo characters
CASE 10 TO 13: Kcode% = 32
CASE ELSE: Kcode% = code%
END SELECT
COLOR 9: LOCATE 10, 5: PRINT USING tmp$; code%; CHR$(Kcode%); Key$;
END IF
IF ASC(A$) = 0 THEN 'two byte key codes
code% = ASC(RIGHT$(A$, 1)) 'QBasic code
'code% = ASC(A$, 2)        'QB64 code alternative
SELECT CASE code%
CASE 16 TO 50: Key$ = "Alt+ letter"
CASE 72: Key$ = CHR$(24) + " Arrow"
CASE 75: Key$ = CHR$(27) + " Arrow"
CASE 77: Key$ = CHR$(26) + " Arrow"
CASE 80: Key$ = CHR$(25) + " Arrow"
CASE 83: Key$ = "Delete"
CASE 59: Key$ = "F1"
CASE 60: Key$ = "F2"
CASE 61: Key$ = "F3"
CASE 62: Key$ = "F4"
CASE 63: Key$ = "F5"
CASE 64: Key$ = "F6"
CASE 65: Key$ = "F7"
CASE 66: Key$ = "F8"
CASE 67: Key$ = "F9"
CASE 68: Key$ = "F10"
CASE 71: Key$ = "Home"
CASE 73: Key$ = "Page " + CHR$(24)
CASE 79: Key$ = "End"
CASE 81: Key$ = "Page " + CHR$(25)
CASE 82: Key$ = "Insert"
CASE 83: Key$ = "Delete"
CASE 84 TO 93: Key$ = "Shift+ F"
CASE 94 TO 103: Key$ = "Ctrl+ F"
CASE 104 TO 113: Key$ = "Alt+ F"
CASE 114 TO 119: Key$ = "Ctrl + pad"
CASE 120 TO 129: Key$ = "Alt+ number"
CASE 132: Key$ = "Ctrl + pad"
CASE 133: Key$ = "F11"
CASE 134: Key$ = "F12"
CASE 135: Key$ = "Shift+ F11"
CASE 136: Key$ = "Shift+ F12"
CASE 137: Key$ = "Ctrl+ F11"
CASE 138: Key$ = "Ctrl+ F12"
CASE 139: Key$ = "Alt+ F11"
CASE 140: Key$ = "Alt+ F12"
CASE ELSE: Key$ = ""
END SELECT
LOCATE 10, 5: PRINT USING tmp2$; code%; Key$
END IF
LOOP UNTIL A$ = CHR$(9)
SOUND 400, 4
SLEEP 3
SYSTEM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* [_MAPUNICODE](MAPUNICODE.md) , [_MAPUNICODE](MAPUNICODE.md) (function)
* Code Pages
* [ASC](ASC.md) , [ASC](ASC.md) (function)
* [MID&dollar;](MID&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [INSTR](INSTR.md) , [CHR&dollar;](CHR&dollar;.md) , [INKEY&dollar;](INKEY&dollar;.md)
* [LEFT&dollar;](LEFT&dollar;.md) , [RIGHT&dollar;](RIGHT&dollar;.md)
* [PRINT](PRINT.md) , [SCREEN](SCREEN.md)
* [MKI&dollar;](MKI&dollar;.md) , [MKL&dollar;](MKL&dollar;.md) , [MKS&dollar;](MKS&dollar;.md) , [MKD&dollar;](MKD&dollar;.md) , [_MK&dollar;](MK&dollar;.md)
* [_PRINTSTRING](PRINTSTRING.md) , [_SCREENPRINT](SCREENPRINT.md)
* [_CONTROLCHR](CONTROLCHR.md)
* Scancodes , Unicode
* Text Using Graphics
</blockquote>
