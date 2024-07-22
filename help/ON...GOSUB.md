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

## [ON...GOSUB](ON...GOSUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ON...GOSUB)
---
<blockquote>

### ON...GOSUB is a control-flow statement that branches to a line or label in a list depending on a numerical expression.

</blockquote>

#### SYNTAX

<blockquote>

`ON numericalExpression GOSUB labelOrNumber [, labelOrNumber ][,...]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  numericalExpression represents the line or label that the program should branch to: 1 branches to the first line or label in the list, 2 branches to the second, etc.
*  The procedure must be used after the number value is determined or in a loop to monitor current user events.
*  [RETURN](RETURN.md)  returns to the next code statement after the [ON](ON.md) ... [GOSUB](GOSUB.md)  statement. [END](END.md)  or [SYSTEM](SYSTEM.md)  can be used to [END](END.md)  program.
*  Note: [SELECT](SELECT.md) [CASE](CASE.md)  provides a much more convenient way of doing this task.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md) ... [GOTO](GOTO.md) 
*  [GOSUB](GOSUB.md)  , [GOTO](GOTO.md) 
*  [SELECT](SELECT.md) [CASE](CASE.md)  , [RETURN](RETURN.md) 

</blockquote>
