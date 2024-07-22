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

## [GOSUB](GOSUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GOSUB)
---
<blockquote>

### GOSUB sends the program flow to a sub procedure identified by a line number or label.

</blockquote>

#### SYNTAX

<blockquote>

`GOSUB { lineNumber | label }`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use [RETURN](RETURN.md)  in a [SUB](SUB.md)  procedure to [RETURN](RETURN.md)  to the next line of code after the original [GOSUB](GOSUB.md)  call. [END](END.md)  or [SYSTEM](SYSTEM.md)  can also be used to [END](END.md)  program.
*  [GOSUB](GOSUB.md)  and [GOTO](GOTO.md)  can be used within [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures, but cannot refer [TO](TO.md)  a label located outside the procedure.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md) ... [GOSUB](GOSUB.md) 
*  [ON](ON.md) ... [GOTO](GOTO.md)  , [GOTO](GOTO.md) 
*  [ON](ON.md)  [ERROR](ERROR.md)  , [RESUME](RESUME.md) 
*  [ON](ON.md)  [TIMER](TIMER.md) (n)
*  Line number

</blockquote>
