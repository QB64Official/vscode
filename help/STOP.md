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

## [STOP](STOP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STOP)
---
<blockquote>

### The STOP statement is used to stop program execution when troubleshooting a program or to suspend event trapping.

</blockquote>

#### SYNTAX

<blockquote>

`STOP`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [STOP](STOP.md)  used in the QBasic IDE does not close any files or go [TO](TO.md)  the operating system. It returns [TO](TO.md)  the IDE.
*  In the QB64 compiler, [STOP](STOP.md)  closes the program window and returns [TO](TO.md)  the IDE when the code is compiled from there.
*  [STOP](STOP.md)  is [ONLY](ONLY.md)  used for debugging purposes and should not be used [TO](TO.md)  exit programs!
*  [STOP](STOP.md)  can also be used [TO](TO.md)  suspend an event trap in the following statements: [KEY](KEY.md) (n) , [STRIG](STRIG.md) (n) and [TIMER](TIMER.md) (n) . The trap can be turned back [ON](ON.md)  with [ON](ON.md)  and returns any trap events since [STOP](STOP.md)  was used.


</blockquote>

#### SEE ALSO

<blockquote>

*  [END](END.md)  , [SYSTEM](SYSTEM.md) 
*  [ON](ON.md)  , [OFF](OFF.md) 

</blockquote>
