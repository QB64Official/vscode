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

## [_BYTE](BYTE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BYTE)
---
<blockquote>

### A _BYTE variable can hold signed variable values from -128 to 127 (one byte or 8 _BITs ). Unsigned from 0 to 255.

</blockquote>

#### SYNTAX

<blockquote>

`DIM byte AS [[[_UNSIGNED]]] _BYTE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Signed [_BYTE](BYTE.md)  values can range from -128 to 127.
*  [_UNSIGNED](UNSIGNED.md)  _BYTEs can hold values from 0 to 255. [_UNSIGNED](UNSIGNED.md)  expands the range of positive values.
*  Can be defined in a QB64 [_DEFINE](DEFINE.md)  statement using a starting letter range of variable names.
*  Also can be used in a subroutine parameter [AS](AS.md)  [_BYTE](BYTE.md)  variable definitions.
*  Define a byte using the suffix %% after the variable name: variable%% = -54
*  Define an unsigned byte by adding the suffix ~%% after the variable name: variable~%% = 54
*  When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_BIT](BIT.md)  , &B
*  [_DEFINE](DEFINE.md)  , [DIM](DIM.md) 
*  [_UNSIGNED](UNSIGNED.md) 
*  [_SHL](SHL.md)  , [_SHR](SHR.md) 
*  Mathematical Operations
*  Screen Memory
*  Variable Types
*  Converting Bytes to Bits

</blockquote>
