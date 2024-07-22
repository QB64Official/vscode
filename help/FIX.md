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

## [FIX](FIX.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FIX)
---
<blockquote>

### The FIX function rounds a numerical value to the next whole number closest to zero.

</blockquote>

#### SYNTAX

<blockquote>

`result = FIX ( expression )`

</blockquote>

#### PARAMETERS

<blockquote>

*  expression is any type of literal or variable numerical value or mathematical calculation.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [FIX](FIX.md)  effectively truncates (removes) the fractional part of expression , returning the integer part.
	* This means that [FIX](FIX.md)  rounds down for positive values and up for negative values.
*  Use [INT](INT.md)  to round down negative values. Positive values are rounded down by both.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_CEIL](CEIL.md) 
*  [INT](INT.md)  , [CINT](CINT.md) 
*  [CLNG](CLNG.md)  , [_ROUND](ROUND.md) 
*  [MOD](MOD.md)  , Integer Division
*  Normal division

</blockquote>
