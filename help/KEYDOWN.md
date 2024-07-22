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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [_KEYDOWN](KEYDOWN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_KEYDOWN)
---
<blockquote>

### The _KEYDOWN function returns whether modifying keys like CTRL, ALT, SHIFT, and any other keys are pressed.

</blockquote>

#### SYNTAX

<blockquote>

`return% = _KEYDOWN( code& )`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
The QB64 Virtual Key constant values used: 

0-255: ASCII and Extended code values (Refer to CP437)

256-65535: ASCII 2-byte character codes (unaffected by SHIFT/ALT/CTRL modifiers)
Use CVI to convert ASCII 2-byte codes to _KEYDOWN values.

'                                _KEYDOWN Keyboard Values
'
' Esc  F1    F2    F3    F4    F5    F6    F7    F8    F9    F10   F11   F12   Sys  ScL Pause
'  27 15104 15360 15616 15872 16128 16384 16640 16896 17152 17408 34048 34304 +316 +302 +019
' &grave;~  1!  2@  3#  4$  5%  6^  7&  8*  9(  0) -_ =+ BkSp   Ins   Hme   PUp   NumL   /     *    -
' 126 33  64  35  36  37  94  38  42  40  41 95 43   8   20992 18176 18688 +300   47    42   45
'  96 49  50  51  52  53  54  55  56  57  48 45 61
' Tab Q   W   E   R   T   Y   U   I   O   P  [{  ]}  \|   Del   End   PDn   7Hme  8/▲   9PU   + 
'  9  81  87  69  82  84  89  85  73  79  80 123 125 124 21248 20224 20736 18176 18432 18688 43
'    113 119 101 114 116 121 117 105 111 112  91  93  92                    55    56    57 
' CapL   A   S   D   F   G   H   J   K   L   ;:  '" Enter                   4/◄-   5    6/-►
' +301  65  83  68  70  71  72  74  75  76  58  34  13                     19200 19456 19712  E
'       97 115 100 102 103 104 106 107 108  59  39                          52    53    54    n
' Shift   Z   X   C   V   B   N   M   ,<  .>  /?    Shift       ▲           1End  2/▼   3PD   t
' +304   90  88  67  86  66  78  77  60  62  63    +303       18432        20224 20480 20736  e
'       122 120  99 118  98 110 109  44  46  47                             49    50    51    r
' Ctrl   Win  Alt     Spacebar      Alt  Win  Menu  Ctrl   ◄-   ▼   -►      0Ins        .Del 
' +306  +311 +308       32         +307 +312 +319  +305 19200 20480 19712  20992       21248 13
'                                                                           48          46
'
'          Lower value = LCase/NumLock On __________________ + = add 100000
```
  
<br>```vb
65536-&H40000000: QB64-specific Virtual Key codes:

CONST KEY_PAUSE& = 100019
CONST KEY_NUMLOCK& = 100300
CONST KEY_CAPSLOCK& = 100301
CONST KEY_SCROLLOCK& = 100302
CONST KEY_RSHIFT& = 100303
CONST KEY_LSHIFT& = 100304
CONST KEY_RCTRL& = 100305
CONST KEY_LCTRL& = 100306
CONST KEY_RALT& = 100307
CONST KEY_LALT& = 100308
CONST KEY_RMETA& = 100309 'Left 'Apple' key (macOS)
CONST KEY_LMETA& = 100310 'Right 'Apple' key (macOS)
CONST KEY_LSUPER& = 100311 'Left "Windows" key
CONST KEY_RSUPER& = 100312 'Right "Windows"key
CONST KEY_MODE& = 100313 '"AltGr" key
CONST KEY_COMPOSE& = 100314
CONST KEY_HELP& = 100315
CONST KEY_PRINT& = 100316
CONST KEY_SYSREQ& = 100317
CONST KEY_BREAK& = 100318
CONST KEY_MENU& = 100319
CONST KEY_POWER& = 100320
CONST KEY_EURO& = 100321
CONST KEY_UNDO& = 100322
CONST KEY_KP0& = 100256
CONST KEY_KP1& = 100257
CONST KEY_KP2& = 100258
CONST KEY_KP3& = 100259
CONST KEY_KP4& = 100260
CONST KEY_KP5& = 100261
CONST KEY_KP6& = 100262
CONST KEY_KP7& = 100263
CONST KEY_KP8& = 100264
CONST KEY_KP9& = 100265
CONST KEY_KP_PERIOD& = 100266
CONST KEY_KP_DIVIDE& = 100267
CONST KEY_KP_MULTIPLY& = 100268
CONST KEY_KP_MINUS& = 100269
CONST KEY_KP_PLUS& = 100270
CONST KEY_KP_ENTER& = 100271
CONST KEY_KP_INSERT& = 200000
CONST KEY_KP_END& = 200001
CONST KEY_KP_DOWN& = 200002
CONST KEY_KP_PAGE_DOWN& = 200003
CONST KEY_KP_LEFT& = 200004
CONST KEY_KP_MIDDLE& = 200005
CONST KEY_KP_RIGHT& = 200006
CONST KEY_KP_HOME& = 200007
CONST KEY_KP_UP& = 200008
CONST KEY_KP_PAGE_UP& = 200009
CONST KEY_KP_DELETE& = 200010
CONST KEY_SCROLL_LOCK_MODE& = 200011
CONST KEY_INSERT_MODE& = 200012

&H40000000 up: Unicode using the cyberbit.ttf font when available.

Use _KEYHIT to find the key codes to be monitored by _KEYDOWN!
```
  
<br>

##### Example 1: Comparing the _KEYDOWN returns using constant values with 2 byte INKEY$ returns.
```vb
CONST RSHIFT& = 100303
CONST LSHIFT& = 100304
DO
x = _KEYHIT
IF x = CVI(CHR$(0) + CHR$(59)) THEN
IF _KEYDOWN(LSHIFT&) OR _KEYDOWN(RSHIFT&) THEN
PRINT "KEYHIT: SHIFT + F1"
ELSE
PRINT "KEYHIT: F1"
END IF
END IF
k$ = INKEY$         'compare key press return values
IF k$ = CHR$(0) + CHR$(59) THEN PRINT "INKEY$: F1"
IF k$ = CHR$(0) + CHR$(84) THEN PRINT "INKEY$: SHIFT+F1"
LOOP UNTIL k$ = CHR$(27)     'escape key exit
```
  
<br>

##### Example 2: How to calculate the _KEYDOWN codes of the 2 byte INKEY$ arrow key codes using CVI .
```vb
SCREEN 12

x = 320: y = 240
col = _RGB(255, 0, 0)
radius = 20

DO
CLS
LOCATE 1, 1: PRINT "Use the arrow keys to move the circle."
CIRCLE (x, y), radius, col
PAINT (x, y), col

IF _KEYDOWN(CVI(CHR$(0) + "P")) THEN y = y + 1   '_KEYDOWN(20480)
IF _KEYDOWN(CVI(CHR$(0) + "H")) THEN y = y - 1   '_KEYDOWN(18432)
IF _KEYDOWN(CVI(CHR$(0) + "K")) THEN x = x - 1   '_KEYDOWN(19200)
IF _KEYDOWN(CVI(CHR$(0) + "M")) THEN x = x + 1   '_KEYDOWN(19712)

_DISPLAY
_LIMIT 100 'limit to 100 frames per second
LOOP
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_KEYHIT](KEYHIT.md)  , Unicode , Code Pages (by region)
*  [_MAPUNICODE](MAPUNICODE.md)  , [_MAPUNICODE](MAPUNICODE.md)  (function)
*  INKEY$ , ASCII , [CVI](CVI.md) 
*  [INP](INP.md)  (&H60), Scancodes
*  [ON](ON.md)  [KEY](KEY.md) (n) , [KEY](KEY.md) (n) , [KEY](KEY.md)  n
*  Windows hot keys

</blockquote>
