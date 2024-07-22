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

## [CALL](CALL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CALL)
---
<blockquote>

### CALL sends code execution to a subroutine procedure in a program. In QB64 the subroutine doesn't need to be declared.

</blockquote>

#### SYNTAX

<blockquote>

`CALL ProcedureName ( parameter1 , parameter2 ,...)]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [CALL](CALL.md)  requires [SUB](SUB.md)  program parameters to be enclosed in brackets (parenthesis).
*  [CALL](CALL.md)  is not required to [CALL](CALL.md)  a subprocedure. Use the [SUB](SUB.md) -procedure name and list any parameters without parenthesis.
*  Neither syntax can be used to call [GOSUB](GOSUB.md)  linelabel [SUB](SUB.md)  procedures.
*  To pass parameters by value, instead of by reference, enclose passed variables in parenthesis.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SUB](SUB.md)  , [FUNCTION](FUNCTION.md) 

</blockquote>
