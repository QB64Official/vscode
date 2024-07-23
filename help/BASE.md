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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [OPTION BASE](OPTION_BASE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPTION%20BASE)
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


* This statement affects array declarations where the lower bound of a dimension is not specified.
* When used, [OPTION](OPTION.md) [BASE](BASE.md) must come before any array declarations ( [DIM](DIM.md) ) to be affected.
* By default, the lower bound for arrays is zero, and may be changed to one using the statement.
* Otherwise, arrays will be dimensioned from element 0 if you [DIM](DIM.md) just the upper bounds.
* You can also set other array boundaries by using [TO](TO.md) in the [DIM](DIM.md) declaration such as [DIM](DIM.md) array(5 [TO](TO.md) 10)

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Set the default lower bound for array declarations to one.
```vb
OPTION BASE 1

' Declare a 5-element one-dimensional array with element indexes of one through five.
DIM array(5) AS INTEGER

PRINT LBOUND(array)
```
  
<br>

```vb
1
```
  
<br>



##### Example 2: Set the default lower bound for array declarations to zero.
```vb
OPTION BASE 0

' Declare an 18-element two-dimensional array with element indexes of zero through two
' for the first dimension, and 10 through 15 for the second dimension.
DIM array(2, 10 to 15) AS INTEGER

PRINT LBOUND(array, 1)
PRINT LBOUND(array, 2)
```
  
<br>

```vb
0
10
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Arrays , [LBOUND](LBOUND.md) , [UBOUND](UBOUND.md)
* [DIM](DIM.md) , [REDIM](REDIM.md) , [STATIC](STATIC.md) , [COMMON](COMMON.md)
</blockquote>
