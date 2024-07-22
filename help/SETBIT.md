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

## [_SETBIT](SETBIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SETBIT)
---
<blockquote>

### The _SETBIT function is used to set a specified bit of a numerical value to 1 (on state).

</blockquote>

#### SYNTAX

<blockquote>

`result = _SETBIT ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>

*  numericalVariable is the variable to set the bit of and can be of the following types: [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , or [_INTEGER64](INTEGER64.md)  .
*  Integer values can be signed or [_UNSIGNED](UNSIGNED.md)  .
*  numericalValue the number of the bit to be set.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Can be used to manually manipulate individual bits of an integer value by setting them to 1 (on state).
*  Setting a bit that is already set to 1 will have no effect.
*  Bits start at 0 (so a [_BYTE](BYTE.md)  has bits 0 to 7, [INTEGER](INTEGER.md)  0 to 15, and so on)


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SHL](SHL.md)  , [_SHR](SHR.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md) 
*  [_READBIT](READBIT.md)  , [_BYTE](BYTE.md)  , [_INTEGER64](INTEGER64.md) 
*  [_RESETBIT](RESETBIT.md)  , [_TOGGLEBIT](TOGGLEBIT.md) 

</blockquote>
