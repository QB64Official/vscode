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


## [ON KEY(n)](ON_KEY(n).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ON%20KEY%28n%29)
---
<blockquote>

### The ON KEY(n) statement defines a line number or label to go to (or a SUB to run) when a specified key is pressed.

</blockquote>

#### SYNTAX

<blockquote>

`ON KEY(n) GOSUB linelabel | linenumber`

</blockquote>

#### DESCRIPTION

<blockquote>


* Predefined and user defined [KEY](KEY.md) event number assignments to use with [ON](ON.md) KEY(n):

</blockquote>

#### EXAMPLES

<blockquote>

```vb
1 to 10.............Reserved F1 to F10 function keys only.
11, 12, 13 and 14...Reserved Up, Left, Right and Down numeric keypad arrows only
15 to 29............user-defined keys using value: CHR$(keyflag) + CHR$(scancode)
30 and 31...........Reserved F11 and F12 function keys only.
```
  
<br>



##### Example 1: Using ON KEY with GOSUB to execute code.
```vb
KEY(1) ON
ON KEY(1) GOSUB trap
PRINT "Press F1 to quit!"
DO:LOOP          'never ending loop

trap:
PRINT "You pressed F1 like I told you to :)"
END
RETURN
```
  
<br>



##### Example 2: Setting multiple ON KEY statements to send different values to a SUB procedure.
```vb
FOR n = 1 TO 10
KEY n, STR$(n)  '   assigns soft key as a numerical string
ON KEY(n) Funct n  'designate SUB procedure and parameter value passed
KEY(n) ON '         turns each key event monitor on
NEXT
KEY ON  'displays F1 to F10 soft key assignments at bottom of screen

DO
LOOP UNTIL INKEY$ = CHR$(27)
END

SUB Funct (num%)
CLS'                  clears the screen and refreshes bottom soft key list
PRINT "You pressed F"; LTRIM$(STR$(num%))
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* KEY(n) , [KEY](KEY.md) n
* ON...GOSUB , Scancodes
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
</blockquote>
