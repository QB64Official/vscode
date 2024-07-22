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

## [_ANDALSO](ANDALSO.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ANDALSO)
---
<blockquote>

### _ANDALSO is a boolean logical operator that performs short-circuiting logical conjunction on two expressions.

</blockquote>

#### SYNTAX

<blockquote>

`result = firstvalue _ANDALSO secondvalue`

</blockquote>

#### DESCRIPTION

<blockquote>

*  A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
*  If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
*  Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
*  If both expressions evaluate to true, result is true.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_BIT](BIT.md)  , &B , [_BYTE](BYTE.md) 
*  [AND](AND.md)  , [XOR](XOR.md)  , [OR](OR.md) 
*  [AND](AND.md)  (boolean) , [XOR](XOR.md)  (boolean) , [OR](OR.md)  (boolean)
*  [_ORELSE](ORELSE.md)  , [_NEGATE](NEGATE.md) 
*  Binary , Boolean
*  Mathematical Operations

</blockquote>
