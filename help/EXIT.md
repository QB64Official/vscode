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

## [EXIT](EXIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/EXIT)
---
<blockquote>

### The EXIT statement is used to exit certain QBasic procedures.

</blockquote>

#### SYNTAX

<blockquote>

`EXIT {DO|WHILE|FOR|SUB|FUNCTION|SELECT|CASE}`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [EXIT](EXIT.md)  leaves any of the following procedures immediately.
	* [EXIT](EXIT.md) [DO](DO.md)  exits a [DO](DO.md) ... [LOOP](LOOP.md)  .
	* [EXIT](EXIT.md)  [WHILE](WHILE.md)  exits a [WHILE](WHILE.md) ... [WEND](WEND.md)  loop.
	* [EXIT](EXIT.md) [FOR](FOR.md)  exits a [FOR](FOR.md) ... [NEXT](NEXT.md)  counter loop.
	* [EXIT](EXIT.md) [SUB](SUB.md)  exits a [SUB](SUB.md)  procedure before it ends. Use before any [GOSUB](GOSUB.md)  procedures using [RETURN](RETURN.md)  .
	* [EXIT](EXIT.md)  [FUNCTION](FUNCTION.md)  exits a [FUNCTION](FUNCTION.md)  procedure before it ends. The value passed by the [FUNCTION](FUNCTION.md) 's name should be defined.
	* [EXIT](EXIT.md)  [SELECT](SELECT.md)  exits a [SELECT](SELECT.md) [CASE](CASE.md)  block.
	* [EXIT](EXIT.md)  [CASE](CASE.md)  does the same [AS](AS.md)  [EXIT](EXIT.md)  [SELECT](SELECT.md)  unless when used in a [SELECT](SELECT.md)  [EVERYCASE](EVERYCASE.md)  block; in such [CASE](CASE.md) , execution proceeds to the next [CASE](CASE.md)  evaluation.
*  [EXIT](EXIT.md)  statements normally use an [IF](IF.md) ... [THEN](THEN.md)  statement to evaluate a program condition that would require the [EXIT](EXIT.md) .
*  To exit a program and allow the last program screen to be displayed with the message "Press any key to continue...", use [END](END.md)  .
*  To exit the program immediately, use [SYSTEM](SYSTEM.md)  .


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_EXIT]( [EXIT](EXIT.md) .md)  (function)
*  [END](END.md)  , [SYSTEM](SYSTEM.md) 
*  [STOP](STOP.md) 

</blockquote>
