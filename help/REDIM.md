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


## [REDIM](REDIM.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/REDIM)
---
<blockquote>

### A REDIM statement can re-dimension one dynamic (flexible) array or a comma separated list of arrays.

</blockquote>

#### SYNTAX

<blockquote>

`REDIM [[[_PRESERVE]]] [[[SHARED]]] ArrayName[ typesuffix ] ({ max_element |low_element[[[TO]] upper_element , ...]}) [[[AS]] Type ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* Can change the number of elements in an array (the present array data is lost unless [_PRESERVE](PRESERVE.md) is used).
* Dynamic array elements can also be sized or resized by a program user's entry.
* The [_PRESERVE](PRESERVE.md) option also allows the element range values to be moved upward or downward in QB64 only!
* Array is the name of the array to be dimensioned or re-dimensioned.
* elements is the number of elements the array should hold. Use the optional [TO](TO.md) elements2 to set a range.
* Always use the same array [TYPE](TYPE.md) suffix ( [AS](AS.md) type) or a new array type with the same name may be created.
* [REDIM](REDIM.md) cannot change [&dollar;STATIC](&dollar;STATIC.md) arrays created with a [DIM](DIM.md) statement unless the [&dollar;DYNAMIC](&dollar;DYNAMIC.md) Metacommand is used!
* To create a dynamic array use the [&dollar;DYNAMIC](&dollar;DYNAMIC.md) metacommand or use [REDIM](REDIM.md) rather than [DIM](DIM.md) when first creating the array.
* Use [REDIM](REDIM.md) [_PRESERVE](PRESERVE.md) to change the range or number of array elements without losing the remaining elements. Data may move up or down to accommodate those boundary changes.
* [REDIM](REDIM.md) [_PRESERVE](PRESERVE.md) cannot change the number of array dimensions or type!
* Dynamic arrays MUST be REDIMensioned if [ERASE](ERASE.md) or [CLEAR](CLEAR.md) are used to clear the arrays as they no longer exist.
* When [AS](AS.md) is used to declare the type, use [AS](AS.md) to retain that type or it will change to [SINGLE](SINGLE.md) !
* NOTE: Many QBasic keyword variable names CAN be used with a [STRING](STRING.md) suffix($) ONLY! You CANNOT use them without the suffix, use a numerical suffix or use [DIM](DIM.md) , [REDIM](REDIM.md) , [_DEFINE](DEFINE.md) , [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable [AS](AS.md) statements!
* Warning! Do not use negative array upper bound index values as OS access or "Out of Memory" errors will occur!

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: The \$DYNAMIC Metacommand allows an array to be re-sized using DIM and REDIM.
```vb
'$DYNAMIC

INPUT "Enter array size: ", size
DIM Array(size)

REDIM Array(2 * size)

PRINT UBOUND(Array)
```
  
<br>



##### Example 2: Shows the difference between REDIM and REDIM _PRESERVE .
```vb
REDIM array(20)
array(10) = 24

PRINT array(10)

REDIM _PRESERVE array(30)
PRINT array(10)

REDIM array(15)
PRINT array(10)
```
  
<br>


<div class="explanation">Explanation: REDIM without _PRESERVE erases the array data and cannot change the number of dimensions.</div>

```vb
24
24
0
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Arrays
* [DIM](DIM.md) , [SHARED](SHARED.md)
* [_PRESERVE](PRESERVE.md) , [ERASE](ERASE.md)
* [&dollar;DYNAMIC](&dollar;DYNAMIC.md) , [&dollar;STATIC](&dollar;STATIC.md)
</blockquote>
