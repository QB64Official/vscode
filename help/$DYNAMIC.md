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


## [\$DYNAMIC](\$DYNAMIC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24DYNAMIC)
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


* QBasic metacommands require [REM](REM.md) or apostrophe (') before them and are normally placed at the start of the main module.
* Dynamic arrays can be resized using [REDIM](REDIM.md) . The array's type cannot be changed.
* All data in the array will be lost when REDIMensioned except when [_PRESERVE](PRESERVE.md) is used.
* [REDIM](REDIM.md) [_PRESERVE](PRESERVE.md) can preserve and may move the previous array data when the array boundaries change.
* [_PRESERVE](PRESERVE.md) allows the upper and lower boundaries of an array to be changed. The number of dimensions cannot change.
* [&dollar;DYNAMIC](&dollar;DYNAMIC.md) arrays must be REDIMensioned if [ERASE](ERASE.md) or [CLEAR](CLEAR.md) are used as the arrays are removed completely.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: REDIMing a \$DYNAMIC array using _PRESERVE to retain previous array values.
```vb
REM $DYNAMIC             'create dynamic arrays only
DIM array(10)            'create array with 11 elements
FOR i = 0 TO 10
array(i) = i: PRINT array(i); 'set and display element values
NEXT
PRINT
REDIM _PRESERVE array(10 TO 20)
FOR i = 10 TO 20
PRINT array(i);
NEXT
END
```
  
<br>

```vb
0  1  2  3  4  5  6  7  8  9  10

0  1  2  3  4  5  6  7  8  9  10
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;STATIC](&dollar;STATIC.md) , [&dollar;INCLUDE](&dollar;INCLUDE.md)
* [DIM](DIM.md) , [REDIM](REDIM.md) , [_DEFINE](DEFINE.md)
* [STATIC](STATIC.md)
* [ERASE](ERASE.md) , [CLEAR](CLEAR.md)
* Arrays , Metacommand
</blockquote>
