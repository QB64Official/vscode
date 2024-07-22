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

## [GOTO](GOTO.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GOTO)
---
<blockquote>

### The GOTO statement sends the procedure to a line label or a line number in the program.

</blockquote>

#### SYNTAX

<blockquote>

`GOTO { lineNumber | lineLabel }`

</blockquote>

#### DESCRIPTION

<blockquote>

*  lineNumber or lineLabel must already exist or an IDE status error will be displayed until it is created.
*  Can be used in [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures using their own line labels or numbers.
*  The frequent use of [GOTO](GOTO.md)  statements can become confusing when trying [TO](TO.md)  follow the code and it could also cause endless loops.
*  [GOTO](GOTO.md)  is an easy trap for new programmers. Use loops instead when possible.


</blockquote>

#### SEE ALSO

<blockquote>

*  [GOSUB](GOSUB.md)  , [ON](ON.md)  [ERROR](ERROR.md) 
*  [ON](ON.md) ... [GOTO](GOTO.md)  , [ON](ON.md) ... [GOSUB](GOSUB.md) 
*  [DO](DO.md) ... [LOOP](LOOP.md)  , [FOR](FOR.md) ... [NEXT](NEXT.md) 
*  [IF](IF.md) ... [THEN](THEN.md)  , [SELECT](SELECT.md) [CASE](CASE.md) 
*  Line numbers and labels

</blockquote>
