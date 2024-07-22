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

## [OCT\$](OCT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OCT$)
---
<blockquote>

### This function returns the octal (base 8) representation of any numeric value.

</blockquote>

#### SYNTAX

<blockquote>

`octvalue$ = OCT$ ( number )`

</blockquote>

#### PARAMETERS

<blockquote>

*  number can be any [INTEGER](INTEGER.md)  , [LONG](LONG.md)  or [_INTEGER64](INTEGER64.md)  value, positive or negative.
*  number can also be any [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md)  or [_FLOAT](FLOAT.md)  value, but only the integer part of the value is converted in that case. That is, from the value -123.45 the function would convert the -123 only.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function returns the base 8 (octal) representation of the given number as [STRING](STRING.md)  .
*  Different from STR$ , this function does not return a leading sign placeholder space, so no LTRIM$ to strip that space from positive numbers is necessary.
*  [VAL](VAL.md)  can convert the returned oct string value back to a decimal value by prefixing the string with " &O ".
	* Eg. decimal = [VAL](VAL.md)  ("&O" + octvalue$) .


</blockquote>

#### SEE ALSO

<blockquote>

*  _BIN$ , HEX$ , [STR\$](STR\$.md) 
*  &B , &H , &O , [VAL](VAL.md) 
*  Base Comparisons

</blockquote>
