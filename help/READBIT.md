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

## [_READBIT](READBIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_READBIT)
---
<blockquote>

### The _READBIT function is used to check the state of a specified bit of a integer value.

</blockquote>

#### SYNTAX

<blockquote>

`result = _READBIT ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>

*  numericalVariable is the variable to read the state of a bit of and can be of the following types: [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , or [_INTEGER64](INTEGER64.md)  .
*  Integer values can be signed or [_UNSIGNED](UNSIGNED.md)  .
*  numericalValue the number of the bit to be read.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Used to check the current state of a bit in an integer value.
*  Returns -1 if the bit is set(1), otherwise returns 0 if the bit is not set(0)
*  Bits start at 0 (so a [_BYTE](BYTE.md)  has bits 0 to 7, [INTEGER](INTEGER.md)  0 to 15, and so on)


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SHL](SHL.md)  , [_SHR](SHR.md)  , [INTEGER](INTEGER.md)  , [LONG](LONG.md) 
*  [_SETBIT](SETBIT.md)  , [_BYTE](BYTE.md)  , [_INTEGER64](INTEGER64.md) 
*  [_RESETBIT](RESETBIT.md)  , [_TOGGLEBIT](TOGGLEBIT.md) 

</blockquote>
