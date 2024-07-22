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

*  [REDIM](REDIM.md)  or the $DYNAMIC metacommand must be used when the array is first created to be able to resize and preserve.
*  If [_PRESERVE](PRESERVE.md)  is not used, the current contents of the array are cleared by [REDIM](REDIM.md)  .
	* All element values of an array are preserved if the array size is increased.
	* The remaining elements of the array are preserved if the array size is decreased.
	* If the new index range is different from the original, all values will be moved to the new corresponding indices.
*  [REDIM](REDIM.md)  [_PRESERVE](PRESERVE.md)  cannot change the number of array dimensions, but can change the number of elements.
*  Always use the same array [TYPE](TYPE.md)  suffix ( [AS](AS.md)  [TYPE](TYPE.md) ) or a new array [TYPE](TYPE.md)  with the same name may be created.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [REDIM](REDIM.md) 
*  $DYNAMIC
*  Arrays

</blockquote>
