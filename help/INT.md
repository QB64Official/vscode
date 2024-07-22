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

## [INT](INT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INT)
---
<blockquote>

### The INT function rounds a numeric value down to the next whole number.

</blockquote>

#### SYNTAX

<blockquote>

`result = INT ( expression )`

</blockquote>

#### PARAMETERS

<blockquote>

*  expression is any type of literal or variable numerical value or mathematical calculation.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [INT](INT.md)  returns the first whole number [INTEGER](INTEGER.md)  that is less than the expression value.
*  This means that [INT](INT.md)  rounds down for both positive and negative numbers.
*  Use [FIX](FIX.md)  to round negative values up. It is identical to [INT](INT.md)  for positive values.


</blockquote>

#### SEE ALSO

<blockquote>

*  [CINT](CINT.md)  , [CLNG](CLNG.md)  , [FIX](FIX.md) 
*  [CSNG](CSNG.md)  , [CDBL](CDBL.md) 
*  [_ROUND](ROUND.md)  , [_CEIL](CEIL.md) 

</blockquote>
