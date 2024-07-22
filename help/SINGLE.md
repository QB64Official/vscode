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

## [SINGLE](SINGLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SINGLE)
---
<blockquote>

### SINGLE variables are 4 byte floating decimal point numerical values up to seven digits in length.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS SINGLE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Values can range up to 7 digits. Decimal point accuracy depends on whole value places taken.
*  Single is the default variable type assigned to undefined variables without a type suffix.
*  Variable suffix type designation is ! . Suffix can also be placed after a literal numerical value by user or automatically by the IDE.
*  Values returned may be expressed using exponential or scientific notation using E for [SINGLE](SINGLE.md)  or D for [DOUBLE](DOUBLE.md)  precision.
*  Floating decimal point numerical values cannot be [_UNSIGNED](UNSIGNED.md)  !
*  Values can be converted to 4 byte ASCII string values using _MKS$ and back with _CVS .
*  Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix!


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [DIM](DIM.md)  , [DEFSNG](DEFSNG.md) 
*  MKS$ , [CVS](CVS.md) 
*  [DOUBLE](DOUBLE.md)  , [_FLOAT](FLOAT.md) 
*  [LEN](LEN.md) 
*  Variable Types

</blockquote>
