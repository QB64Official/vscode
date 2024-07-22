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

## [DOUBLE](DOUBLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DOUBLE)
---
<blockquote>

### DOUBLE type floating point numerical values use 8 bytes per value.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS DOUBLE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Literal or variable values can range up to 15 decimal point places.
*  The variable suffix type is # .
*  Use [DOUBLE](DOUBLE.md)  and [_FLOAT](FLOAT.md)  variables sparingly as they use a lot of program memory.
*  Values returned may be expressed using exponential or scientific notation using E for [SINGLE](SINGLE.md)  or D for [DOUBLE](DOUBLE.md)  precision.
*  Floating decimal point numerical values cannot be [_UNSIGNED](UNSIGNED.md)  .
*  Values can be converted to 8 byte ASCII string values using _MKD$ and back with _CVD .
*  When a variable has not been defined or has no type suffix, the value defaults to [SINGLE](SINGLE.md)  .
*  Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [DIM](DIM.md)  , [DEFDBL](DEFDBL.md) 
*  MKD$ , [CVD](CVD.md) 
*  [SINGLE](SINGLE.md)  , [_FLOAT](FLOAT.md) 
*  [LEN](LEN.md) 
*  Variable Types

</blockquote>
