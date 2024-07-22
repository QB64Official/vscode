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

## [MKS\$](MKS\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MKS$)
---
<blockquote>

### The MKS$ function encodes a SINGLE numerical value into a 4-byte ASCII STRING value.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = MKS$ ( singlePrecisionVariableOrLiteral# )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  singlePrecisionVariableOrLiteral# is converted to four ASCII characters. To see this in action, try [PRINT](PRINT.md)  MKS$(1345678) .
*  [SINGLE](SINGLE.md)  values can range up to 7 decimal point digits. Decimal point accuracy depends on whole value places taken.
*  MKS$ string values can be converted back to [SINGLE](SINGLE.md)  numerical values using the [CVS](CVS.md)  function.
*  [SINGLE](SINGLE.md)  numerical variable values [PUT](PUT.md)  into a [BINARY](BINARY.md)  file are automatically placed [AS](AS.md)  an MKS$ ASCII string value.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  MKI$ , MKD$ , [MKL\$](MKL\$.md) 
*  [CVD](CVD.md)  , [CVI](CVI.md)  , [CVS](CVS.md)  , [CVL](CVL.md) 
*  _MK$ , [_CV](CV.md) 

</blockquote>
