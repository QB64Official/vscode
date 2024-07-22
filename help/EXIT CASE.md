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

## [EXIT_CASE](EXIT_CASE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/EXIT CASE)
---
<blockquote>

### The EXIT CASE statement does exit from a CASE in a SELECT [EVERY]CASE block.

</blockquote>

#### SYNTAX

<blockquote>

`EXIT CASE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use [EXIT](EXIT.md)  [CASE](CASE.md)  to immediately [EXIT](EXIT.md)  from a [CASE](CASE.md)  .
*  In [SELECT](SELECT.md)  [EVERYCASE](EVERYCASE.md)  blocks execution will proceed with the next matching [CASE](CASE.md)  .
*  In regular [SELECT](SELECT.md) [CASE](CASE.md)  blocks execution will proceed after [END](END.md)  [SELECT](SELECT.md)  , i.e. [EXIT](EXIT.md)  [CASE](CASE.md)  and [EXIT](EXIT.md)  [SELECT](SELECT.md)  behave the same way here.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [SELECT](SELECT.md) [CASE](CASE.md) 
*  [EXIT](EXIT.md)  [SELECT](SELECT.md) 
*  [END](END.md)  [SELECT](SELECT.md) 

</blockquote>
