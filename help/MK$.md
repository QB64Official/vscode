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


## [_MK\$](MK\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MK%24)
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


* numericalType is any QB64 numerical type: [INTEGER](INTEGER.md) , [LONG](LONG.md) , [SINGLE](SINGLE.md) , [DOUBLE](DOUBLE.md) , [_INTEGER64](INTEGER64.md) , [_BYTE](BYTE.md) or [_BIT](BIT.md) .
* Whole integer values can be signed or [_UNSIGNED](UNSIGNED.md) .
* numericalValue must match the numericalType used.
</blockquote>

#### DESCRIPTION

<blockquote>


* Supports converting any QBasic or QB64 numerical value into a string value.
* Some resulting ASCII string characters might not be able to be printed to the screen.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CV](CV.md)
* [MKI&dollar;](MKI&dollar;.md) , [CVI](CVI.md) , [INTEGER](INTEGER.md)
* [MKL&dollar;](MKL&dollar;.md) , [CVL](CVL.md) , [LONG](LONG.md)
* [MKS&dollar;](MKS&dollar;.md) , [CVS](CVS.md) , [SINGLE](SINGLE.md)
* [MKD&dollar;](MKD&dollar;.md) , [CVD](CVD.md) , [DOUBLE](DOUBLE.md)
* [MKSMBF&dollar;](MKSMBF&dollar;.md) , [CVSMBF](CVSMBF.md)
* [MKDMBF&dollar;](MKDMBF&dollar;.md) , [CVDMBF](CVDMBF.md)
* CURRENCY
</blockquote>
