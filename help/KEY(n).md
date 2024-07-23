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


## [KEY(n)](KEY(n).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/KEY%28n%29)
---
<blockquote>

### KEY(n) assigns, enables, disables or suspends event trapping of a keypress by setting the flag ON , STOP or OFF .

</blockquote>

#### SYNTAX

<blockquote>

`KEY( number ) { ON | OFF | STOP }`

</blockquote>

#### DESCRIPTION

<blockquote>


* Predefined and user defined [KEY](KEY.md) event number assignments to use with KEY(n):

</blockquote>

#### EXAMPLES

<blockquote>

```vb
1 to 10.............Reserved F1 to F10 function keys only.
11, 12, 13 and 14...Reserved Up, Left, Right and Down numeric keypad arrows only
15 to 29............user-defined keys using value: CHR$(keyflag)  + CHR$(scancode)
30 and 31...........Reserved F11 and F12 function keys only.
```
  
<br>



##### Example 1: How to trap the LEFT direction keys on both the dedicated cursor keypad and the numeric keypad.
```vb
KEY 15, CHR$(128) + CHR$(75) ' Assign trap for LEFT arrow key on the cursor keypad
ON KEY(15) GOSUB CursorPad
KEY(15) ON ' enable event trapping

ON KEY(12) GOSUB NumericPad ' Trap LEFT key on number pad
KEY(12) ON ' enable event trapping

DO
LOOP UNTIL UCASE$(INKEY$) = "Q" ' Idle loop for demo
SYSTEM

CursorPad:
PRINT "Pressed LEFT key on cursor keypad."
RETURN

NumericPad:
PRINT "Pressed LEFT key on numeric keypad."
RETURN
```
  
<br>



##### Example 2: Trapping the F5 keypress.
```vb
KEY(5) ON
ON KEY(5) GOSUB execute
PRINT "Press F5 (or ESC) to quit!)"
DO
LOOP UNTIL INKEY$ = CHR$(27) ' idle loop
SYSTEM
execute:
PRINT "You pressed the F5 key..."
SLEEP 1
PRINT "Press any key to continue..."
SLEEP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ON](ON.md) KEY(n) , [KEY](KEY.md) n (softkeys)
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* Keyboard scancodes
</blockquote>
