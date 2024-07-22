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

## [_UNSIGNED](UNSIGNED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_UNSIGNED)
---
<blockquote>

### _UNSIGNED defines a numerical value as being only positive.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS [[[_UNSIGNED]]] datatype`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Datatype can be any of the following: [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , [_BIT](BIT.md)  , [_BYTE](BYTE.md)  , [_INTEGER64](INTEGER64.md)  , [_OFFSET](OFFSET.md) 
*  [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md)  and [_FLOAT](FLOAT.md)  variable types cannot be [_UNSIGNED](UNSIGNED.md) .
*  [_UNSIGNED](UNSIGNED.md)  can be used in a [_DEFINE](DEFINE.md)  statement to set undefined variable name first letters as all positive-only values.
*  Can also be used in [DIM](DIM.md)  statements or subprocedure parameter definitions following [AS](AS.md)  .
*  [_UNSIGNED](UNSIGNED.md)  allows larger positive numerical variable value limits than signed ones.
*  The unsigned variable type suffix used is the tilde (~) , right before the number's own type suffix: variableName~&


</blockquote>

#### SEE ALSO

<blockquote>

*  [DECLARE](DECLARE.md) , [SUB](SUB.md)  , [FUNCTION](FUNCTION.md) 
*  [DIM](DIM.md)  , [_DEFINE](DEFINE.md) 
*  [DEFSTR](DEFSTR.md)  , [DEFLNG](DEFLNG.md)  , [DEFINT](DEFINT.md)  , [DEFSNG](DEFSNG.md)  , [DEFDBL](DEFDBL.md) 
*  [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , [_INTEGER64](INTEGER64.md) 
*  [ABS](ABS.md)  , [SGN](SGN.md) 
*  Variable Types

</blockquote>
