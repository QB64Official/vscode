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

## [MKI\$](MKI\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MKI$)
---
<blockquote>

### The MKI$ function encodes an INTEGER numerical value into a 2-byte ASCII STRING value.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = MKI$ ( integerVariableOrLiteral% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  integerVariableOrLiteral% is converted to two ASCII characters.
*  [INTEGER](INTEGER.md)  values can range from -32768 to 32767.
*  MKI$ string values can be converted back to numerical [INTEGER](INTEGER.md)  values using [CVI](CVI.md)  .
*  The function takes up less byte space in a file than using the text numerical value when the value is over 2 digits.
*  When a variable value is used with [PUT](PUT.md)  a numerical value is converted automatically in [RANDOM](RANDOM.md) [AND](AND.md)  [BINARY](BINARY.md)  files.


</blockquote>

#### SEE ALSO

<blockquote>

*  MKD$ , MKS$ , [MKL\$](MKL\$.md) 
*  [CVD](CVD.md)  , [CVI](CVI.md)  , [CVS](CVS.md)  , [CVL](CVL.md) 
*  _MK$ , [_CV](CV.md) 

</blockquote>
