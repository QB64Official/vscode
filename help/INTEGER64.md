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

## [_INTEGER64](INTEGER64.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INTEGER64)
---
<blockquote>

### _INTEGER64 is an 8 byte number type definition that can hold whole numerical values.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS _INTEGER64`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Can be used in 32 bit and 64 bit systems.
*  Signed numerical values can range from -9223372036854775808 to 9223372036854775807.
*  [_UNSIGNED](UNSIGNED.md)  [_INTEGER64](INTEGER64.md)  values range from 0 to 18446744073709551615.
*  Variable type suffix is && or ~&& for [_UNSIGNED](UNSIGNED.md)  . Suffix can also be placed after a literal or hexadecimal numerical value.
*  Values can be converted to 8 byte ASCII character strings using _MK$ and back using [_CV](CV.md)  .
*  When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md)  .


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [INTEGER](INTEGER.md)  , [LONG](LONG.md) 
*  [_DEFINE](DEFINE.md)  , [DIM](DIM.md) 
*  [_UNSIGNED](UNSIGNED.md) 
*  [_CV](CV.md)  , [_MK\$](MK\$.md) 
*  CURRENCY
*  Variable Types

</blockquote>
