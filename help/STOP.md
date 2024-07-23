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


* [STOP](STOP.md) used in the QBasic IDE does not close any files or go to the operating system. It returns to the IDE.
* In the QB64 compiler, [STOP](STOP.md) closes the program window and returns to the IDE when the code is compiled from there.
* [STOP](STOP.md) is [ONLY](ONLY.md) used for debugging purposes and should not be used to exit programs!
* [STOP](STOP.md) can also be used to suspend an event trap in the following statements: KEY(n) , STRIG(n) and TIMER(n) . The trap can be turned back on with [ON](ON.md) and returns any trap events since [STOP](STOP.md) was used.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: When run in the QBasic IDE, the program will return to the IDE at STOP. Press F5 to finish the program.
```vb
PRINT "start"

SLEEP 3

STOP

PRINT "resumed"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [END](END.md) , [SYSTEM](SYSTEM.md)
* [ON](ON.md) , [OFF](OFF.md)
</blockquote>
