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

## [EXP](EXP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/EXP)
---
<blockquote>

### The EXP math function calculates the exponential function ( e raised to the power of a numericExpression ).

</blockquote>

#### SYNTAX

<blockquote>

`result = EXP ( numericExpression )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  e is defined as the base of natural logarithms or as the limit of (1 + 1 / n) ^ n, as n goes to infinity.
*  When passing numericExpression as a [SINGLE](SINGLE.md)  variable or as literal number without an explicit type suffix, then it must be less than or equal to 88.02969 or an "overflow" error will occur.
*  When passing numericExpression as a [DOUBLE](DOUBLE.md)  or [_FLOAT](FLOAT.md)  variable, then it must be less than or equal to 709.782712893 or an "overflow" error will occur. You may pass literal numbers as [DOUBLE](DOUBLE.md)  or [_FLOAT](FLOAT.md)  values by explicitly adding the # or ## type suffix to it respectively, e.g. result = [EXP](EXP.md)  (678.9##) .
*  The value returned is e to the exponent parameter ( e = 2.718282 approximately).
*  The precision of the returned values depends on the provided result variable type, but is usually not higher than that of the given numericExpression .
*  Positive exponent values indicate the number of times to multiply e by itself.
*  Negative exponent values indicate the number of times to divide by e . Example: e ^ -3 = 1 / e ^ 3 = 1 / (e * e * e)


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [LOG](LOG.md) 
*  Mathematical Operations
*  Derived Mathematical Functions

</blockquote>
