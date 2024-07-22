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

## [_MK\$](MK\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MK$)
---
<blockquote>

### The _MK$ function can convert any numerical type into an ASCII STRING value that can be converted back using _CV .

</blockquote>

#### SYNTAX

<blockquote>

`string_value$ = _MK$ ( numericalType , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>

*  numericalType is any QB64 numerical type: [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md)  , [_INTEGER64](INTEGER64.md)  , [_BYTE](BYTE.md)  or [_BIT](BIT.md)  .
*  Whole integer values can be signed or [_UNSIGNED](UNSIGNED.md)  .
*  numericalValue must match the numericalType used.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Supports converting any QBasic or QB64 numerical value into a string value.
*  Some resulting ASCII string characters might not be able to be printed to the screen.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_CV](CV.md) 
*  MKI$ , [CVI](CVI.md)  , [INTEGER](INTEGER.md) 
*  MKL$ , [CVL](CVL.md)  , [LONG](LONG.md) 
*  MKS$ , [CVS](CVS.md)  , [SINGLE](SINGLE.md) 
*  MKD$ , [CVD](CVD.md)  , [DOUBLE](DOUBLE.md) 
*  MKSMBF$ , [CVSMBF](CVSMBF.md) 
*  MKDMBF$ , [CVDMBF](CVDMBF.md) 
*  CURRENCY

</blockquote>
