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

## [EXIT_SELECT](EXIT_SELECT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/EXIT SELECT)
---
<blockquote>

### The EXIT SELECT statement does exit from a SELECT EVERYCASE block, doesn't matter which CASE is currently executed.

</blockquote>

#### SYNTAX

<blockquote>

`EXIT SELECT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use [EXIT](EXIT.md)  [SELECT](SELECT.md)  to immediately [EXIT](EXIT.md)  an entire [SELECT](SELECT.md)  [EVERYCASE](EVERYCASE.md)  block.
*  Execution will proceed after [END](END.md)  [SELECT](SELECT.md)  .
*  If you just wanna [EXIT](EXIT.md)  from a certain [CASE](CASE.md)  while still checking for further [CASE](CASE.md)  matches, then use [EXIT](EXIT.md)  [CASE](CASE.md)  instead.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [SELECT](SELECT.md) [CASE](CASE.md) 
*  [EXIT](EXIT.md)  [CASE](CASE.md) 
*  [END](END.md)  [SELECT](SELECT.md) 

</blockquote>
