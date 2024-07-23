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


## [TIMER](TIMER.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TIMER)
---
<blockquote>

### A TIMER statement enables, turns off or stops timer event trapping. QBasic only uses the base timer, but QB64 can run many.

</blockquote>

#### PARAMETERS

<blockquote>


* number denotes a specific numbered timer event in QB64 only . QB64 can run many timer events at once including the base timer.
* [TIMER](TIMER.md) [ON](ON.md) enables event trapping of an [ON](ON.md) TIMER(n) statement. While enabled, a check is made after every code statement to see if the specified time has elapsed and the [ON](ON.md) [TIMER](TIMER.md) [GOSUB](GOSUB.md) (or [SUB](SUB.md) in QB64) procedure is executed.
* [TIMER](TIMER.md) [STOP](STOP.md) disables timer event trapping. When an event occurs while stopped, it is remembered. If timer events are turned back on later, any remembered events are immediately executed.
* [TIMER](TIMER.md) [OFF](OFF.md) turns timer event trapping completely off and no subsequent events are remembered.QB64 only

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: How to update the time while printing at the same time in a program.
```vb
TIMER ON ' enable timer event trapping
LOCATE 4, 2 ' set the starting PRINT position
ON TIMER(10) GOSUB Clock ' set procedure execution repeat time
DO WHILE INKEY$ = "": PRINT "A"; : SLEEP 6: LOOP
TIMER OFF
SYSTEM

Clock:
row = CSRLIN ' Save current print cursor row.
col = POS(0) ' Save current print cursor column.
LOCATE 2, 37: PRINT TIME$; ' print current time at top of screen.
LOCATE row, col ' return to last print cursor position
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ON](ON.md) TIMER(n) , [TIMER](TIMER.md) (function)
* [_DELAY](DELAY.md) , [_LIMIT](LIMIT.md)
</blockquote>
