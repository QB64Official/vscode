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

*  Used to find [Ctrl], [Alt], [Shift], [Caps Lock], [Scroll Lock], [Num Lock] and [F]unction key controls.
*  The keyboard input is stored at decimal register 96 or &H60 hexadecimal.
*  Returns values from 0 to 127 for keypresses. 129 to 255 for key releases. Codes 91 to 93 are available in QB64 only .
*  Every key (except Prt Scr/Sys Rq) has an identifying code that will not change with Caps Lock or Shift.
*  Release codes are the original key press code + 128 . Example: [Esc] key press = 1 and  release = 129.
*  Extended (added) keys on modern keyboards may alternate codes with Left Shift codes 42 and 170 because of Num Lock mode.
*  Keyboards with Alt Gr [KEY](KEY.md) : [_KEYHIT](KEYHIT.md)  may return both Alt (100307) and Ctrl (100306) codes when [KEY](KEY.md)  is pressed or released.
*  Linux with foreign keyboards: [SHELL](SHELL.md) [_HIDE](HIDE.md)  "setxkbmap us" can be used to setup a keyboard to read US scan codes .
*  To clear the keyboard buffer, use the INKEY$ function before or after the [INP](INP.md)  read to avoid buffer overflows and beeps.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_KEYHIT](KEYHIT.md)  , [_KEYDOWN](KEYDOWN.md) 
*  [ASC](ASC.md)  (function) , ASCII
*  Keyboard scancodes
*  Creating Sprite Masks
*  Windows hot keys
*  Keyboard Scan Codes
*  Other Keyboards

</blockquote>
