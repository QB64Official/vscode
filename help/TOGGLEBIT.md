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

## [_TOGGLEBIT](TOGGLEBIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_TOGGLEBIT)
---
<blockquote>

### The _TOGGLEBIT function is used to toggle a specified bit of a numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`result = _TOGGLEBIT ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>

*  numericalVariable is the variable to toggle the bit of and can be of the following types: [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , or [_INTEGER64](INTEGER64.md)  .
*  Integer values can be signed or [_UNSIGNED](UNSIGNED.md)  .
*  numericalValue the number of the bit to be set.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Can be used to manually manipulate individual bits of an integer value by toggling their state.
*  A bit set to 1 is changed to 0 and a bit set to 0 is changed to 1.
*  Bits start at 0 (so a [_BYTE](BYTE.md)  has bits 0 to 7, [INTEGER](INTEGER.md)  0 to 15, and so on)


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_SHL](SHL.md)  , [_SHR](SHR.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md) 
*  [_SETBIT](SETBIT.md)  , [_BYTE](BYTE.md)  , [_INTEGER64](INTEGER64.md) 
*  [_RESETBIT](RESETBIT.md)  , [_READBIT](READBIT.md) 

</blockquote>
