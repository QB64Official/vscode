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

## [FUNCTION](FUNCTION.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FUNCTION)
---
<blockquote>

### A FUNCTION block statement is used to create a function procedure to return a calculated value to a program.

</blockquote>

#### SYNTAX

<blockquote>

`FUNCTION procedureName [type-suffix] [( parameters )] {code} 'variable definitions and procedure statements ⋮ procedureName = returnValue`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function type can be any variable type that it will return to the program and is represented by the type suffix.
*  Functions hold one return value in the function's name which is a variable type. Other values can be passed through parameters .
*  Functions are often referred to in program calculations, not called like [SUB](SUB.md)  procedures. [CALL](CALL.md)  cannot be used with functions.
*  If there are no parameters passed or they are [SHARED](SHARED.md)  the parameters and parenthesis are not required.
*  Variable names within the procedure do not have to match the names used in the reference parameters, just the value types.
*  To pass parameter variables by value to protect the value in a call, parenthesis can be placed around each variable name also.
*  To pass arrays to a sub-procedure use empty brackets after the name or indicate the index in the call.
*  All dynamic variable values return to 0 or null strings when the procedure is exited except when a variable or the entire [FUNCTION](FUNCTION.md)  is [STATIC](STATIC.md)  . This can save program memory as all dynamic memory used in a [FUNCTION](FUNCTION.md)  is released [ON](ON.md)  procedure exit.
*  [FUNCTION](FUNCTION.md)  procedure code can use [GOSUB](GOSUB.md)  and [GOTO](GOTO.md)  line numbers or labels inside of the procedure when necessary.
*  For early [FUNCTION](FUNCTION.md)  exits use [EXIT](EXIT.md)  [FUNCTION](FUNCTION.md)  before [END](END.md)  [FUNCTION](FUNCTION.md)  and [GOSUB](GOSUB.md)  procedures using [RETURN](RETURN.md)  .
*  QB64 ignores all procedural [DECLARE](DECLARE.md)  statements. Define all parameter types in the [FUNCTION](FUNCTION.md)  procedure.
*  Images are not deallocated when the [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  they are created in ends. [FREE](FREE.md)  them with [_FREEIMAGE](FREEIMAGE.md)  .
*  The IDE can create the [FUNCTION](FUNCTION.md)  and [END](END.md)  [FUNCTION](FUNCTION.md)  lines for you. Use the New [FUNCTION](FUNCTION.md) ... option in the Edit Menu. A box will come up for you to enter a name for the [FUNCTION](FUNCTION.md) . Enter all code between the [FUNCTION](FUNCTION.md)  and [END](END.md)  [FUNCTION](FUNCTION.md)  lines.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SUB](SUB.md)  , [SCREEN](SCREEN.md) 
*  [EXIT](EXIT.md)  (statement), [END](END.md) 
*  [_EXIT]( [EXIT](EXIT.md) .md)  (function)

</blockquote>
