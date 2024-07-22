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

## [\$DYNAMIC](\$DYNAMIC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$DYNAMIC)
---
<blockquote>

### The $DYNAMIC metacommand allows the creation of dynamic (resizable) arrays.

</blockquote>

#### SYNTAX

<blockquote>

`{ REM | ' } $DYNAMIC`

</blockquote>

#### DESCRIPTION

<blockquote>

*  QBasic metacommands require [REM](REM.md)  or apostrophe (') before them and are normally placed at the start of the main module.
*  Dynamic arrays can be resized using [REDIM](REDIM.md)  . The array's type cannot be changed.
*  All data in the array will be lost when REDIMensioned except when [_PRESERVE](PRESERVE.md)  is used.
*  [REDIM](REDIM.md)  [_PRESERVE](PRESERVE.md)  can preserve and may move the previous array data when the array boundaries change.
*  [_PRESERVE](PRESERVE.md)  allows the upper and lower boundaries of an array to be changed. The number of dimensions cannot change.
*  $DYNAMIC arrays must be REDIMensioned if [ERASE](ERASE.md)  or [CLEAR](CLEAR.md)  are used [AS](AS.md)  the arrays are removed completely.


</blockquote>

#### SEE ALSO

<blockquote>

*  $STATIC , $INCLUDE
*  [DIM](DIM.md)  , [REDIM](REDIM.md)  , [_DEFINE](DEFINE.md) 
*  [STATIC](STATIC.md) 
*  [ERASE](ERASE.md)  , [CLEAR](CLEAR.md) 
*  Arrays , Metacommand

</blockquote>
