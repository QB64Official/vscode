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


## [_PRESERVE](PRESERVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PRESERVE)
---
<blockquote>

### The _PRESERVE REDIM action preserves the current contents of dynamic arrays , when resizing or changing indices.

</blockquote>

#### SYNTAX

<blockquote>

`REDIM _PRESERVE array( newLowerIndex& [TO newUpperIndex& ]) [AS variabletype]`

</blockquote>

#### DESCRIPTION

<blockquote>


* [REDIM](REDIM.md) or the [&dollar;DYNAMIC](&dollar;DYNAMIC.md) metacommand must be used when the array is first created to be able to resize and preserve.
* If [_PRESERVE](PRESERVE.md) is not used, the current contents of the array are cleared by [REDIM](REDIM.md) .
* All element values of an array are preserved if the array size is increased.
* The remaining elements of the array are preserved if the array size is decreased.
* If the new index range is different from the original, all values will be moved to the new corresponding indices.
* [REDIM](REDIM.md) [_PRESERVE](PRESERVE.md) cannot change the number of array dimensions, but can change the number of elements.
* Always use the same array [TYPE](TYPE.md) suffix ( [AS](AS.md) type) or a new array type with the same name may be created.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Changing the upper and lower array bounds
```vb
REDIM a(5 TO 10) ' create array as dynamic using REDIM
a(5) = 123
REDIM _PRESERVE a(20 TO 40)
PRINT a(20)
```
  
<br>



##### Example 2: Sizing an array while storing file data.
```vb
REDIM Array$(1)                'create a dynamic string array
filename$ = "Readme.txt"       'QB64 information text file
OPEN filename$ FOR INPUT AS #1
DO UNTIL EOF(1)
count = count + 1
IF count > UBOUND(Array$) THEN
REDIM _PRESERVE Array$(count * 3 / 2)'increase array's size by 50% without losing data
END IF

LINE INPUT #1, textline$
Array$(count) = textline$
LOOP
CLOSE #1
FOR c = 1 TO count
PRINT Array$(c)
IF c MOD 20 = 0 THEN k$ = INPUT$(1)
NEXT
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [REDIM](REDIM.md)
* [&dollar;DYNAMIC](&dollar;DYNAMIC.md)
* Arrays
</blockquote>
