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


## [ON STRIG(n)](ON_STRIG(n).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ON%20STRIG%28n%29)
---
<blockquote>

### The ON STRIG(n) statement is an event procedure that directs program flow upon the press of a specified joystick button.

</blockquote>

#### SYNTAX

<blockquote>

`ON STRIG ( buttonFunction ) GOSUB { lineNumber | lineLabel }`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Reading a STRIG event to do something in a GOSUB procedure.
```vb
ON STRIG(0) GOSUB 10
STRIG(0)ON

DO
PRINT ".";
_LIMIT 30
LOOP UNTIL INKEY$ <> ""
END

10
a$ = "[STRIG 0 EVENT]"
FOR x = 1 TO LEN(a$)
PRINT MID$(a$, x, 1);
_DELAY 0.02
NEXT
RETURN
```
  
<br>



##### Example 2: Displays any number of game pad or joystick device button presses.
```vb
FOR j = 1 TO 256
FOR b = 1 TO 256
ON STRIG((b - 1) * 4, j) JoyButton (j - 1) * 256 + b - 1
NEXT
NEXT
STRIG ON

DO
PRINT ".";
_LIMIT 30
LOOP UNTIL INKEY$ <> ""
END

SUB JoyButton (js AS LONG)
PRINT "Joystick #"; js \ 256 + 1; "button #"; (js AND 255) + 1; "pressed!"
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [STRIG](STRIG.md) , [STICK](STICK.md)
* STRIG(n)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md) , [_LASTBUTTON](LASTBUTTON.md)
* Single and Dual Stick Controllers
</blockquote>
