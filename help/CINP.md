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


## [_CINP](CINP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CINP)
---
<blockquote>

### The _CINP function returns keyboard key press codes from a $CONSOLE window. Windows-only.

</blockquote>

#### SYNTAX

<blockquote>

`keycode& = _CINP`

</blockquote>

#### DESCRIPTION

<blockquote>


* Return values are the same as the ones for [INP](INP.md) when used to read keyboard input. See table below.
* Negative values returned indicate that a key was released or a lock function key has been turned off.
* Keyword not supported in Linux or macOS versions

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
```
  
<br>



##### Example 1: Reading individual key strokes from a console window (Windows).
```vb
$CONSOLE:ONLY
_DEST _CONSOLE: _SOURCE _CONSOLE

PRINT "Press any key, and I'll give you the scan code for it.  <ESC> quits the demo."
PRINT
PRINT
DO
x = _CONSOLEINPUT
IF x = 1 THEN 'read only keyboard input ( = 1)
c = _CINP
PRINT c;
END IF
LOOP UNTIL c = 1
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;CONSOLE](&dollar;CONSOLE.md) , [_CONSOLE](CONSOLE.md)
* [_CONSOLEINPUT](CONSOLEINPUT.md)
* [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md) , [_MOUSEBUTTON](MOUSEBUTTON.md) , [_MOUSEWHEEL](MOUSEWHEEL.md)
</blockquote>
