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

## [ON_ERROR](ON_ERROR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ON ERROR)
---
<blockquote>

### ON ERROR is used with GOTO to handle errors in a program.

</blockquote>

#### SYNTAX

<blockquote>

`ON ERROR GOTO { lineNumber | lineLabel }`

</blockquote>

#### DESCRIPTION

<blockquote>

*  An untreated error in a program will cause execution to stop and an error message is displayed to the user, who can choose to continue (ignore the error - which could have unexpected results) or end the program.
*  Use [ON](ON.md)  [ERROR](ERROR.md)  when your program performs operations that are likely to generate errors, like file access operations.
*  [ON](ON.md)  [ERROR](ERROR.md)  statements can be in the main module code [OR](OR.md)  in [SUB](SUB.md) [OR](OR.md)  [FUNCTION](FUNCTION.md)  procedures.
*  [ON](ON.md)  [ERROR](ERROR.md)  statements take precedence in the order they are encountered. It will also handle any subroutine errors.
*  [ON](ON.md)  [ERROR](ERROR.md) [GOTO](GOTO.md)  0 can be used [TO](TO.md)  disable custom [ON](ON.md)  [ERROR](ERROR.md)  trapping and give default [ERROR](ERROR.md)  messages.
*  A subsequent [ON](ON.md)  [ERROR](ERROR.md)  statement will override the previous one.
*  [GOTO](GOTO.md)  is required in the statement. Cannot use [GOSUB](GOSUB.md)  .
*  Comment out [ON](ON.md)  [ERROR](ERROR.md)  to find specific [ERROR](ERROR.md)  locations. QB64 can return the file [LINE](LINE.md)  position with [_ERRORLINE](ERRORLINE.md) 
*  Note: QB64 does not support the PDS (QuickBASIC 7) [ON](ON.md)  [ERROR](ERROR.md)  [RESUME](RESUME.md) [NEXT](NEXT.md)  statement.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ERR](ERR.md)  , [ERL](ERL.md)  , [RESUME](RESUME.md) 
*  [ON](ON.md) ... [GOTO](GOTO.md) 
*  [_ERRORLINE](ERRORLINE.md)  , [_INCLERRORLINE](INCLERRORLINE.md)  , [_INCLERRORFILE\$](INCLERRORFILE\$.md) 
*  [ERROR](ERROR.md) 
*  [ERROR](ERROR.md)  Codes

</blockquote>
