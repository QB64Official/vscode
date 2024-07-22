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

## [CALL_ABSOLUTE](CALL_ABSOLUTE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CALL ABSOLUTE)
---
<blockquote>

### CALL ABSOLUTE is used to access interrupts on the computer or execute assembly type procedures.

</blockquote>

#### SYNTAX

<blockquote>

`CALL ABSOLUTE ([ argumentList ,] integerOffset )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [CALL](CALL.md)  and parameter brackets are required in the statement.
*  argumentList contains the list of arguments passed to the procedure.
*  integerOffset contains the offset from the current code segment, set by [DEF](DEF.md) [SEG](SEG.md)  and [SADD](SADD.md)  , to the starting location of the called procedure.
*  QBasic and QB64 have the [ABSOLUTE](ABSOLUTE.md)  statement built in and require no library, like QuickBASIC did.
*  NOTE: QB64 does [NOT](NOT.md)  support [INT](INT.md)  33h mouse functions above 3 or [BYVAL](BYVAL.md)  in an [ABSOLUTE](ABSOLUTE.md)  statement. Registers are emulated.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [SADD](SADD.md)  , [INTERRUPT](INTERRUPT.md) 
*  [_MOUSEINPUT](MOUSEINPUT.md) 

</blockquote>
