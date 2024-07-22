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

## [TIMER](TIMER.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TIMER)
---
<blockquote>

### A TIMER statement enables, turns off or stops timer event trapping. QBasic only uses the base timer, but QB64 can run many.

</blockquote>

#### PARAMETERS

<blockquote>

*  number denotes a specific numbered timer event in QB64 only . QB64 can run many timer events at once including the base timer.
*  [TIMER](TIMER.md) [ON](ON.md)  enables event trapping of an [ON](ON.md)  [TIMER](TIMER.md) (n) statement. While enabled, a check is made after every code statement to see if the specified time has elapsed and the [ON](ON.md)  [TIMER](TIMER.md)  [GOSUB](GOSUB.md)  (or [SUB](SUB.md)  in QB64) procedure is executed.
*  [TIMER](TIMER.md) [STOP](STOP.md)  disables [TIMER](TIMER.md)  event trapping. When an event occurs while stopped, it is remembered. If [TIMER](TIMER.md)  events are turned back on later, any remembered events are immediately executed.
*  [TIMER](TIMER.md) [OFF](OFF.md)  turns [TIMER](TIMER.md)  event trapping completely [OFF](OFF.md)  and no subsequent events are remembered.
QB64 only

</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md)  [TIMER](TIMER.md) (n) , [TIMER](TIMER.md)  (function)
*  [_DELAY](DELAY.md)  , [_LIMIT](LIMIT.md) 

</blockquote>
