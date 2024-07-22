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

## [MOD](MOD.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MOD)
---
<blockquote>

### The MOD operator gives the remainder after division of one number by another (sometimes called modulus).

</blockquote>

#### SYNTAX

<blockquote>

`remainder = numerator MOD divisor`

</blockquote>

#### PARAMETERS

<blockquote>

*  Returns the [INTEGER](INTEGER.md)  division remainder as a whole [INTEGER](INTEGER.md)  , [LONG](LONG.md)  or [_INTEGER64](INTEGER64.md)  value.
*  numerator is the [INTEGER](INTEGER.md)  value to divide.
*  divisor is the [INTEGER](INTEGER.md)  value to divide by.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Floating decimal point numerator and divisor values are [CINT](CINT.md)  rounded (e.g. 19 [MOD](MOD.md)  6.7 returns 5 just like 19 [MOD](MOD.md)  7 would).
*  [MOD](MOD.md)  returns 0 if a number is evenly divisible by integer division ( \ ) or the number divided is 0.
*  divisor (second value) must not be between 0 and .5 . This will create a "Division by zero" error due to [CINT](CINT.md)  rounding the value to 0.
*  The result has the same sign as the numerator (e.g. -1 [MOD](MOD.md)  7 returns -1, not 6).
*  Division and multiplication operations are performed before addition and subtraction in QBasic's order of operations.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  / (normal division operator)
*  \ (integer division operator)
*  [INT](INT.md)  , [CINT](CINT.md)  , [FIX](FIX.md)  , [_ROUND](ROUND.md)  , [_CEIL](CEIL.md) 
*  Mathematical Operations

</blockquote>
