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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [MKS\$](MKS\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MKS%24)
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


* singlePrecisionVariableOrLiteral# is converted to four ASCII characters. To see this in action, try [PRINT](PRINT.md) MKS$(1345678) .
* [SINGLE](SINGLE.md) values can range up to 7 decimal point digits. Decimal point accuracy depends on whole value places taken.
* [MKS&dollar;](MKS&dollar;.md) string values can be converted back to [SINGLE](SINGLE.md) numerical values using the [CVS](CVS.md) function.
* [SINGLE](SINGLE.md) numerical variable values [PUT](PUT.md) into a [BINARY](BINARY.md) file are automatically placed as an [MKS&dollar;](MKS&dollar;.md) ASCII string value.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [MKI&dollar;](MKI&dollar;.md) , [MKD&dollar;](MKD&dollar;.md) , [MKL&dollar;](MKL&dollar;.md)
* [CVD](CVD.md) , [CVI](CVI.md) , [CVS](CVS.md) , [CVL](CVL.md)
* [_MK&dollar;](MK&dollar;.md) , [_CV](CV.md)
</blockquote>
