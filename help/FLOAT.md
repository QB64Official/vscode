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

## [_FLOAT](FLOAT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FLOAT)
---
<blockquote>

### _FLOAT numerical values offer the maximum floating-point decimal precision available using QB64 .

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS _FLOAT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  QB64 always allocates 32 bytes to store this value.
*  It is safe to assume this value is at least as precise as [DOUBLE](DOUBLE.md)  .
*  Under the current implementation it is stored in a 10-byte floating point variable.
*  [_FLOAT](FLOAT.md)  variables can also use the ## variable name type suffix.
*  Values returned may be expressed using exponential or scientific notation using E for [SINGLE](SINGLE.md)  or D for [DOUBLE](DOUBLE.md)  precision.
*  According to IEEE-754 this can store a value of up to 1.1897E+4932 compared to a [DOUBLE](DOUBLE.md)  which goes up to 1.7976E+308.
*  Floating decimal point numerical values cannot be [_UNSIGNED](UNSIGNED.md)  .
*  Values can be converted to 32 byte ASCII strings using _MK$ and back with [_CV](CV.md)  .
*  When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md)  .


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [DOUBLE](DOUBLE.md)  , [SINGLE](SINGLE.md) 
*  _MK$ , [_CV](CV.md) 
*  [_DEFINE](DEFINE.md)  , [DIM](DIM.md) 
*  CURRENCY
*  Variable Types

</blockquote>
