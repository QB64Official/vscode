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

## [LOG](LOG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOG)
---
<blockquote>

### The LOG math function returns the natural logarithm of a specified numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`logarithm! = LOG ( value )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  value MUST be greater than 0. "Illegal function call" error occurs if negative or zero values are used.
*  The natural logarithm is the logarithm to the base e = 2.718282 (approximately).
*  The natural logarithm of a is defined as the integral from 1 to a of dx/x.
*  Returns are default [SINGLE](SINGLE.md)  precision unless the value parameter uses [DOUBLE](DOUBLE.md)  precision.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [EXP](EXP.md)  , &B (binary number)
*  Derived Mathematical Functions

</blockquote>
