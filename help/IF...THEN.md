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

## [IF...THEN](IF...THEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/IF...THEN)
---
<blockquote>

### IF...THEN statements make boolean (true or false) evaluations to automate program decision making.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The conditionStatement evaluation by [IF](IF.md)  must be true (-1) or a non-zero numerical value for the [THEN](THEN.md)  {code} to be executed.
*  Multiple conditional evaluations can be made using inclusive [AND](AND.md) [OR](OR.md)  alternative [OR](OR.md)  conditional expressions.
*  [THEN](THEN.md)  is not required when [GOTO](GOTO.md)  is used [TO](TO.md)  send program flow [TO](TO.md)  a line number or label.
*  [IF](IF.md)  statements can also have alternative evaluations using [ELSEIF](ELSEIF.md)  and [ELSE](ELSE.md)  conditions.
*  When the [IF](IF.md)  statement and/or code to be run is more than code line, an [END](END.md) [IF](IF.md)  statement must be used.
*  With multiple code lines to run, end the [IF](IF.md)  statement with [THEN](THEN.md)  and place all of the code on lines below that line.
*  Multiple code line block statements require that the [IF](IF.md) ... [THEN](THEN.md)  , [ELSEIF](ELSEIF.md)  , [ELSE](ELSE.md)  and [END](END.md) [IF](IF.md)  be on separate lines.
*  The IDE may return an error of [NEXT](NEXT.md)  without [FOR](FOR.md) [OR](OR.md)  [LOOP](LOOP.md)  without [DO](DO.md)  when [END](END.md) [IF](IF.md)  does not [END](END.md)  a statement block.
*  The QB64 IDE will indicate an error in the [IF](IF.md)  statement line until [END](END.md) [IF](IF.md)  closes the statement block.
*  Use colons to execute multiple statements in a single-line [IF](IF.md)  statement.
*  An underscore can be used anywhere after the code on a single-line to continue it to the next line in QB64 .
*  NOTE: [STRING](STRING.md)  values can only be evaluated in an [IF](IF.md)  statement [IF](IF.md)  a value is compared to a literal or CHR$ [STRING](STRING.md)  value. QB64 may [NOT](NOT.md)  compile literal [IF](IF.md)  [STRING](STRING.md)  statements or indicate an IDE coding error. Use [LEN](LEN.md)  or [ASC](ASC.md)  to compare strings numerically.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ELSEIF](ELSEIF.md)  , [ELSE](ELSE.md) 
*  [AND](AND.md)  (boolean) , [OR](OR.md)  (boolean)
*  [NOT](NOT.md)  , [GOTO](GOTO.md) 
*  [SELECT](SELECT.md) [CASE](CASE.md) 
*  Boolean (numerical comparisons return a true or false value)

</blockquote>
