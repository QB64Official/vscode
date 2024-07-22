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

## [CINT](CINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CINT)
---
<blockquote>

### The CINT function rounds decimal point numbers up or down to the nearest INTEGER value.

</blockquote>

#### SYNTAX

<blockquote>

`value% = CINT ( expression )`

</blockquote>

#### PARAMETERS

<blockquote>

*  expression is any [TYPE](TYPE.md)  of literal or variable numerical value or mathematical calculation.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Values greater than .5 are rounded up. Values lower than .5 are rounded down.
*  Warning: Since [CINT](CINT.md)  is used for integer values, the input values cannot exceed 32767 to -32768!
*  Use [CLNG](CLNG.md)  for [LONG](LONG.md)  [INTEGER](INTEGER.md)  values exceeding [INTEGER](INTEGER.md)  limitations.
*  Note: When decimal point values are given to BASIC functions requiring INTEGERs the value will be CINTed .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ROUND](ROUND.md)  , [_CEIL](CEIL.md) 
*  [CLNG](CLNG.md)  , [CSNG](CSNG.md)  , [CDBL](CDBL.md) 
*  [INT](INT.md)  , [FIX](FIX.md) 

</blockquote>
