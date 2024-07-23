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


## [\$CONSOLE](\$CONSOLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24CONSOLE)
---
<blockquote>

### The $CONSOLE Metacommand creates a console window that can be used throughout a QB64 program module.

</blockquote>

#### SYNTAX

<blockquote>

`$CONSOLE [:ONLY]`

</blockquote>

#### DESCRIPTION

<blockquote>


* [_CONSOLE](CONSOLE.md) [ON](ON.md) or [OFF](OFF.md) may be used to show or hide the console window at run time.
* The :ONLY option can be used when only a console window is desired without a program window.
* [_DEST](DEST.md) [_CONSOLE](CONSOLE.md) may be used to send screen output to the console window.
* [_SCREENHIDE](SCREENHIDE.md) and [_SCREENSHOW](SCREENSHOW.md) can be used to hide or show the main program window.
* [_DELAY](DELAY.md) or [SLEEP](SLEEP.md) can be used to allow the console window to be set in front of the main program window.
* QB64 Metacommands are not commented out with ' or REM, unlike QuickBASIC metacommands
* Change the title of the [&dollar;CONSOLE](&dollar;CONSOLE.md) windows created using [_CONSOLETITLE](CONSOLETITLE.md)
* Note: Text can be copied partially or totally from console screens in Windows by highlighting and using the title bar menu.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Hiding and displaying a console window. Use _DELAY to place console in front of main program window.
```vb
$CONSOLE
_DELAY 4

_CONSOLE OFF
_DELAY 4
_CONSOLE ON

_DEST _CONSOLE
PRINT "Close this console window or click main window and press a key!"
```
  
<br>



##### Example 2: How to use a Console window to copy screen output using the Edit menu by right clicking the console title bar.
```vb
$CONSOLE
_DEST _CONSOLE

c&& = -1: d& = -1: e% = -1: f%% = -1
hx$ = HEX$(f%%)
PRINT "Max hex _BYTE = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(e%)
PRINT "Max hex INTEGER = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(d&)
PRINT "Max hex LONG = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(c&&)
PRINT "Max hex _INTEGER64 = "; hx$; " with"; LEN(hx$); "digits ="; VAL("&H" + hx$)
hx$ = HEX$(9223372036854775807)
PRINT "Max _INTEGER64 value = "; hx$; " with"; LEN(hx$); "digits"
hx$ = HEX$(-9223372036854775808)
PRINT "Min _INTEGER64 value = "; hx$; " with"; LEN(hx$); "digits"
```
  
<br>


<div class="explanation">Console: Right click and select Edit > Select All (mouse highlight after) then hit Enter or select Edit > Copy to the clipboard.</div>

```vb
Max hex _BYTE = FF with 2 digits = 255
Max hex INTEGER = FFFF with 4 digits = 65535
Max hex LONG = FFFFFFFF with 8 digits = 4294967295
Max hex _INTEGER64 = FFFFFFFFFFFFFFFF with 16 digits =-1
Max _INTEGER64 value = 7FFFFFFFFFFFFFFF with 16 digits
Min _INTEGER64 value = 8000000000000000 with 16 digits
```
  
<br>

```vb
Max hex _BYTE = FF with 2 digits = 255
Max hex INTEGER = FFFF with 4 digits = 65535
Max hex LONG = FFFFFFFF with 8 digits = 4294967295
Max hex _INTEGER64 = FFFFFFFFFFFFFFFF with 16 digits =-1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) (function) , [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) (statement)
* [_CONSOLE](CONSOLE.md) , [_ECHO](ECHO.md)
* [&dollar;SCREENHIDE](&dollar;SCREENHIDE.md) , [&dollar;SCREENSHOW](&dollar;SCREENSHOW.md) (QB64 Metacommands )
* [_SCREENHIDE](SCREENHIDE.md) , [_SCREENSHOW](SCREENSHOW.md)
* C Console Library
</blockquote>
