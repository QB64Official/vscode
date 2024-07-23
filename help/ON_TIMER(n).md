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


## [ON TIMER(n)](ON_TIMER(n).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ON%20TIMER%28n%29)
---
<blockquote>

### The ON TIMER statement sets up a timed event to be repeated at specified intervals throughout a program when enabled.

</blockquote>

#### SYNTAX

<blockquote>

`ON TIMER ( seconds% ) GOSUB { lineLabel | lineNumber }`

</blockquote>

#### DESCRIPTION

<blockquote>



</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Using a numbered TIMER to check the mouse button press status in QB64 .
```vb
DIM SHARED Button AS LONG    'share variable value with Sub

t1 = _FREETIMER              'get a timer number from _FREETIMER ONLY!
ON TIMER(t1, .05) MouseClick
TIMER(t1) ON

DO
LOCATE 1, 1
IF Button THEN
PRINT "Mouse button"; Button; "is pressed.";
ELSE PRINT SPACE$(70)
END IF
_DISPLAY
LOOP UNTIL INKEY$ = CHR$(27)
TIMER(t1) OFF
TIMER(t1) FREE 'release timer
END

SUB MouseClick
DO WHILE _MOUSEINPUT
IF _MOUSEBUTTON(1) THEN
COLOR 10: Button = 1
ELSEIF _MOUSEBUTTON(2) THEN
COLOR 12: Button = 2
ELSE Button = 0
END IF
LOOP
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FREETIMER](FREETIMER.md) , [TIMER](TIMER.md)
* [_DELAY](DELAY.md) , [_LIMIT](LIMIT.md)
* [&dollar;CHECKING](&dollar;CHECKING.md)
</blockquote>
