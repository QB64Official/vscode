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

## [LSET](LSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LSET)
---
<blockquote>

### LSET left-justifies a fixed length string expression based on the size of the STRING variable and string expression.

</blockquote>

#### SYNTAX

<blockquote>

`LSET {stringVariable = stringExpression | stringExpression1 = stringExpression2}`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the string expression is longer than a fixed length string variable the value is truncated from the right side in [LSET](LSET.md)  or [RSET](RSET.md)  .
*  If the [LSET](LSET.md)  string expression is smaller, spaces will occupy the extra positions to the right in the string.
*  [LSET](LSET.md)  can be used with a [FIELD](FIELD.md)  or [TYPE](TYPE.md)  definition to set the buffer position before a [PUT](PUT.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [RSET](RSET.md)  , [RTRIM\$](RTRIM\$.md) 
*  [FIELD](FIELD.md)  , [TYPE](TYPE.md) 

</blockquote>
