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

## [WHILE...WEND](WHILE...WEND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WHILE...WEND)
---
<blockquote>

### The WHILE...WEND statement is used to repeat a block of statements while the condition is met.

</blockquote>

#### SYNTAX

<blockquote>

`WHILE condition`

</blockquote>

#### DESCRIPTION

<blockquote>

*  condition is a numeric expression used to determine if the loop will execute.
*  statements will execute repeatedly while condition is a non-zero value.
*  [EXIT](EXIT.md)  [WHILE](WHILE.md)  can be used for emergency exits from the loop in QB64 only.
*  A [DO](DO.md) ... [LOOP](LOOP.md)  can use the same [DO](DO.md)  [WHILE](WHILE.md)  condition to get the same results.
*  [WHILE](WHILE.md)  loops only run if the [WHILE](WHILE.md)  condition is True.


</blockquote>

#### SEE ALSO

<blockquote>

*  [DO](DO.md) ... [LOOP](LOOP.md) 
*  [FOR](FOR.md) ... [NEXT](NEXT.md) 
*  [UNTIL](UNTIL.md) 
*  [_CONTINUE](CONTINUE.md) 

</blockquote>
