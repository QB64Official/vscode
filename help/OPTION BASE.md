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

## [OPTION_BASE](OPTION_BASE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPTION BASE)
---
<blockquote>

### The OPTION BASE statement is used to set the default lower bound of arrays.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION BASE {0|1}`

</blockquote>

#### DESCRIPTION

<blockquote>

*  This statement affects array declarations where the lower bound of a dimension is not specified.
*  When used, [OPTION](OPTION.md) [BASE](BASE.md)  must come before any array declarations ( [DIM](DIM.md)  ) to be affected.
*  By default, the lower bound for arrays is zero, and may be changed to one using the statement.
*  Otherwise, arrays will be dimensioned from element 0 if you [DIM](DIM.md)  just the upper bounds.
*  You can also set other array boundaries by using [TO](TO.md)  in the [DIM](DIM.md)  declaration such as [DIM](DIM.md)  array(5 [TO](TO.md)  10)


</blockquote>

#### SEE ALSO

<blockquote>

*  Arrays , [LBOUND](LBOUND.md)  , [UBOUND](UBOUND.md) 
*  [DIM](DIM.md)  , [REDIM](REDIM.md)  , [STATIC](STATIC.md)  , [COMMON](COMMON.md) 

</blockquote>
