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

## [_ROR](ROR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ROR)
---
<blockquote>

### The _ROR function is used to rotate the bits of a numerical value to the right. A rotation (or circular shift) is an operation similar to shift ( _SHL and _SHR ) except that the bits that fall off at one end are put back to the other end.

</blockquote>

#### SYNTAX

<blockquote>

`result = _ROR ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>

*  numericalVariable is the variable to shift the bits of and can be of the following types: [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , or [_INTEGER64](INTEGER64.md)  .
*  Integer values can be signed or [_UNSIGNED](UNSIGNED.md)  .
*  numericalValue is the number of places to rotate the bits.
*  While 0 is a valid value it will have no affect on the variable being rotated.

</blockquote>

#### DESCRIPTION

<blockquote>

*  In right rotation, the bits that fall off at right end are put back at left end.
*  The type of variable used to store the results should match the type of the variable being shifted.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ROL](ROL.md)  , [_SHL](SHL.md)  , [_SHR](SHR.md) 
*  [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md) 
*  [LONG](LONG.md)  , [_INTEGER64](INTEGER64.md) 

</blockquote>
