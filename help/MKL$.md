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

## [MKL\$](MKL\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MKL$)
---
<blockquote>

### The MKL$ function encodes a LONG numerical value into a 4-byte ASCII STRING value.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = MKL$ ( longVariableOrLiteral& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  longVariableOrLiteral& is converted to four ASCII characters. To see this in action, try [PRINT](PRINT.md)  MKL$(12345678) .
*  The numerical data usually takes up less bytes than printing the [LONG](LONG.md)  number to a file.
*  [LONG](LONG.md)  integer values can range from -2147483648 to 2147483647.
*  Since the representation of a long number can use up to 10 ASCII characters (ten bytes), writing to a file using MKL$ conversion, and then reading back with the [CVL](CVL.md)  conversion can save up to 6 bytes of storage space.
*  [CVL](CVL.md)  can convert the value back to a [LONG](LONG.md)  numerical value.
*  [LONG](LONG.md)  numerical variable values [PUT](PUT.md)  into a [BINARY](BINARY.md)  file are automatically placed [AS](AS.md)  an MKL$ ASCII string value.


</blockquote>

#### SEE ALSO

<blockquote>

*  MKI$ , MKS$ , [MKD\$](MKD\$.md) 
*  [CVD](CVD.md)  , [CVI](CVI.md)  , [CVS](CVS.md)  , [CVL](CVL.md) 
*  _MK$ , [_CV](CV.md) 

</blockquote>
