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

## [_SHR](SHR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SHR)
---
<blockquote>

### The _SHR function is used to shift the bits of a numerical value to the right.

</blockquote>

#### SYNTAX

<blockquote>

`result = _SHR ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>

*  numericalVariable is the variable to shift the bits of and can be of the following types: [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , [_INTEGER64](INTEGER64.md)  , or [_BYTE](BYTE.md)  .
*  Integer values can be signed or [_UNSIGNED](UNSIGNED.md)  .
*  numericalValue the number of places to shift the bits.
*  While 0 is a valid value it will have no affect on the variable being shifted.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Allows for division of a value by 2 faster than normal division (see example 2 below).
*  Bits that reach the end of a variables bit count are dropped.
*  The type of variable used to store the results should match the type of the variable being shifted.
*  NOTE: When dealing with SIGNED variables, shifting the bits right will leave the sign bit set. This is due to how C++ deals with bit shifting under the hood.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SHL](SHL.md)  , [_ROL](ROL.md)  , [_ROR](ROR.md) 
*  [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md) 
*  [LONG](LONG.md)  , [_INTEGER64](INTEGER64.md) 

</blockquote>
