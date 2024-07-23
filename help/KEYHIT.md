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


## [_KEYHIT](KEYHIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_KEYHIT)
---
<blockquote>

### The _KEYHIT function returns ASCII one and two byte, OpenGL Virtual Key and Unicode keyboard key press codes.

</blockquote>

#### SYNTAX

<blockquote>

`keycode& = _KEYHIT`

</blockquote>

#### DESCRIPTION

<blockquote>


* Return values range up to &H40000000 so use a [LONG](LONG.md) or [_INTEGER64](INTEGER64.md) variable type. See the [_KEYDOWN](KEYDOWN.md) code list:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'                                _KEYHIT Keyboard Codes
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
'         Lower value = LCase/NumLock On __________________ + = add 100000
```
  
<br>



##### Example: This routine will return the codes for any keyboard presses.
```vb
DEFLNG A-Z
SCREEN _NEWIMAGE(800, 600, 8)
CLS , 1
font = _LOADFONT("cyberbit.ttf", 24)
unifont = _LOADFONT("cyberbit.ttf", 24, "UNICODE")
_FONT font

DO
x = _KEYHIT
IF x THEN
IF x < 0 THEN  'negative value means key released
COLOR 2
PRINT "Released ";
x = -x
ELSE
COLOR 10
PRINT "Pressed ";   'positive value means key pressed
END IF
IF x < 256 THEN    'ASCII code values
PRINT "ASCII "; x;
IF x >= 32 AND x <= 255 THEN PRINT "[" + CHR$(x) + "]" ELSE PRINT
END IF
IF x >= 256 AND x < 65536 THEN '2 byte key codes
PRINT "2-BYTE-COMBO "; x AND 255; x \ 256;
x2 = x \ 256
IF x2 >= 32 AND x2 <= 255 THEN PRINT "[" + CHR$(x2) + "]" ELSE PRINT
END IF
IF x >= 100000 AND x < 200000 THEN      'QB84 Virtual Key codes
PRINT "SDL VK"; x - 100000
END IF
IF x >= 200000 AND x < &H40000000 THEN
PRINT "QB64 VK"; x - 200000
END IF
IF x >= &H40000000 THEN              'Unicode values (IME Input mode)
PRINT "UNICODE "; x - &H40000000; "0x" + HEX$(x - &H40000000) + " ...";
cx = POS(1): cy = CSRLIN
_FONT unifont
LOCATE cy, cx
COLOR 15
z$ = MKL$(x - &H40000000) + MKL$(0)
PRINT z$ + z$ + z$;
_FONT font
LOCATE cy, 1: PRINT
END IF
END IF
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_KEYDOWN](KEYDOWN.md) , [_CINP](CINP.md)
* [_MAPUNICODE](MAPUNICODE.md) , [_MAPUNICODE](MAPUNICODE.md) (function)
* [INKEY&dollar;](INKEY&dollar;.md) , ASCII (code table) ,
* Unicode , Code Pages (by region)
* [INP](INP.md) ( &H60 ), Scancodes
* [ON](ON.md) KEY(n) , KEY(n) , [KEY](KEY.md) n
* Windows hot keys
</blockquote>
