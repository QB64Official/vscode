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

## [UBOUND](UBOUND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/UBOUND)
---
<blockquote>

### The UBOUND function returns the largest valid index (upper bound) of an array dimension.

</blockquote>

#### SYNTAX

<blockquote>

`result% = UBOUND (arrayName[, dimension%])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  arrayName specifies the name of the array.
*  dimension% specifies the dimension number, starting with 1 for the first dimension.
	* If omitted, dimension% is assumed to be 1 .
	* If dimension% is less than 1 or is greater than the number of dimensions, a subscript out of range error occurs.
*  [UBOUND](UBOUND.md)  , along with [LBOUND](LBOUND.md)  , is used to determine the range of valid indexes of an array.


</blockquote>

#### SEE ALSO

<blockquote>

*  Arrays , [LBOUND](LBOUND.md) 
*  [DIM](DIM.md)  , [COMMON](COMMON.md)  , [STATIC](STATIC.md)  , [SHARED](SHARED.md) 

</blockquote>
