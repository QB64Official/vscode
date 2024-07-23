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


## [Controller Devices](Controller_Devices.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Controller%20Devices)
---
<blockquote>

### QB64 supports all kinds of keyboard, mouse, joystick, gamepad, steering wheel and other multi-stick controller input devices.

</blockquote>

#### SYNTAX

<blockquote>

`Displays all keyboard, mouse and game controller button, axis and wheel control input values when each device is being used.`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'                                  Keyboard Device Button Numbers
'
' Esc F1  F2  F3  F4  F5  F6  F7  F8  F9  F10  F11 F12      SysReq ScrL Pause
'  2  60  61  62  63  64  65  66  67  68  --   88  89        --    71    70
' &grave;~  1!  2@  3#  4$  5%  6^  7&  8*  9(  0)  -_  =+ BkSpc  Insert Home PgUp   NumL    /    *    -
' 42   3   4   5   6   7   8   9  10  11  12  13  14  15     339   328   330   326    310  56   75
' Tab  Q   W   E   R   T   Y   U   I   O   P   [{  ]}  \|   Delete End  PgDn   7/Home 8/▲  9/PU  +
' 16  17  18  19  20  21  22  23  24  25  26   27  28  44    340   336   338   72     73   74   79
' CapL  A   S   D   F   G   H   J   K   L   ;:  '"   Enter                     4/◄-    5   6/-►  E
' 59   31  32  33  34  35  36  37  38  39   40  41    29                       76     77   78    n
' Shift  Z   X   C   V   B   N   M  ,<  .>  /?       Shift          ▲          1/End  2/▼  3/PD  t
' 43    45  46  47  48  49  50  51  52  53  54        55           329         80     81   82    e
' Ctrl Win  Alt    Spacebar    Alt  Win  Menu Ctrl            ◄-    ▼    -►    0/Insert    ./Del r
' 30   348  --       58        --   349  350  286             332  337  334    83          84   285
'
```
  
<br>

```vb
PRINT "Use relative mouse movement mode with ESC key exit only?(Y/N) ";
K$ = UCASE$(INPUT$(1))
PRINT K$
PRINT

FOR i = 1 TO _DEVICES 'DEVICES MUST be read first!
PRINT STR$(i) + ") " + _DEVICE$(i) + " Buttons:"; _LASTBUTTON(i); ",Axis:"; _LASTAXIS(i); ",Wheel:"; _LASTWHEEL(i)
NEXT
IF K$ = "Y" THEN dummy = _MOUSEMOVEMENTX 'enable relative mouse movement reads
PRINT

DO
x& = _DEVICEINPUT 'determines which device is currently being used
IF x& = 1 THEN
PRINT "Keyboard: ";
FOR b = 1 TO _LASTBUTTON(x&)
bb = _BUTTONCHANGE(b)
IF bb THEN PRINT b; bb; _BUTTON(b);
NEXT
PRINT
END IF
IF x& > 1 THEN '  skip keyboard reads
PRINT "Device:"; x&;
FOR b = 1 TO _LASTBUTTON(x&)
PRINT _BUTTONCHANGE(b); _BUTTON(b);
NEXT
FOR a = 1 TO _LASTAXIS(x&)
PRINT _AXIS(a); 'mouse axis returns -1 to 1 with 0 center screen
NEXT
FOR w = 1 TO _LASTWHEEL(x&)
PRINT _WHEEL(w); 'wheels 1 and 2 of mouse return relative pixel moves when enabled
NEXT
PRINT
END IF
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit

END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DEVICEINPUT](DEVICEINPUT.md) , [_AXIS](AXIS.md) , [_BUTTON](BUTTON.md) , [_BUTTONCHANGE](BUTTONCHANGE.md) , [_WHEEL](WHEEL.md)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md) , [_LASTAXIS](LASTAXIS.md) , [_LASTBUTTON](LASTBUTTON.md) , [_LASTWHEEL](LASTWHEEL.md)
* [_MOUSEINPUT](MOUSEINPUT.md) , [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md) , [_MOUSEBUTTON](MOUSEBUTTON.md) , [_MOUSEWHEEL](MOUSEWHEEL.md)
* [_MOUSEMOVE](MOUSEMOVE.md) , [_MOUSEHIDE](MOUSEHIDE.md) , [_MOUSESHOW](MOUSESHOW.md)
* [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md) (relative movement)
* [STRIG](STRIG.md) (button) , [STICK](STICK.md) (axis)
</blockquote>
