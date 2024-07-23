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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
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


* [EXIT](EXIT.md) leaves any of the following procedures immediately.
* [EXIT](EXIT.md) [DO](DO.md) exits a DO...LOOP .
* [EXIT](EXIT.md) [WHILE](WHILE.md) exits a WHILE...WEND loop.
* [EXIT](EXIT.md) [FOR](FOR.md) exits a FOR...NEXT counter loop.
* [EXIT](EXIT.md) [SUB](SUB.md) exits a [SUB](SUB.md) procedure before it ends. Use before any [GOSUB](GOSUB.md) procedures using [RETURN](RETURN.md) .
* [EXIT](EXIT.md) [FUNCTION](FUNCTION.md) exits a [FUNCTION](FUNCTION.md) procedure before it ends. The value passed by the function's name should be defined.
* [EXIT](EXIT.md) [SELECT](SELECT.md) exits a [SELECT](SELECT.md) [CASE](CASE.md) block.
* [EXIT](EXIT.md) [CASE](CASE.md) does the same as [EXIT](EXIT.md) [SELECT](SELECT.md) unless when used in a [SELECT](SELECT.md) [EVERYCASE](EVERYCASE.md) block; in such case, execution proceeds to the next [CASE](CASE.md) evaluation.
* [EXIT](EXIT.md) statements normally use an IF...THEN statement to evaluate a program condition that would require the EXIT.
* To exit a program and allow the last program screen to be displayed with the message "Press any key to continue...", use [END](END.md) .
* To exit the program immediately, use [SYSTEM](SYSTEM.md) .

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_EXIT](EXIT.md) (function)
* [END](END.md) , [SYSTEM](SYSTEM.md)
* [STOP](STOP.md)
</blockquote>
