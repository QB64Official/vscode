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

## [RESUME](RESUME.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RESUME)
---
<blockquote>

### The RESUME statement is used with NEXT or a line number or label in an error handling routine.

</blockquote>

#### SYNTAX

<blockquote>

`RESUME { NEXT | lineLabel | lineNumber }`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [NEXT](NEXT.md)  returns execution to the code immediately following the error.
*  A lineLabel or lineNumber is the code line to return to after an error.
*  If the line label or number is omitted or the line number = 0, the code execution resumes at the code that created the original error.
*  RESUMEcan only be used in [ERROR](ERROR.md)  handling routines. Use [RETURN](RETURN.md)  in normal [GOSUB](GOSUB.md)  procedures.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md)  [ERROR](ERROR.md)  , [ERROR](ERROR.md) 
*  [RETURN](RETURN.md)  , [ERROR](ERROR.md)  Codes
*  [FOR](FOR.md) ... [NEXT](NEXT.md) 

</blockquote>
