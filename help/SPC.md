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

## [SPC](SPC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SPC)
---
<blockquote>

### The SPC function is used in PRINT and LPRINT statements to print or output a number of space characters.

</blockquote>

#### SYNTAX

<blockquote>

`SPC( count% )`

</blockquote>

#### PARAMETERS

<blockquote>

*  count designates the number of column spaces to move the cursor in a [PRINT](PRINT.md)  statement.

</blockquote>

#### DESCRIPTION

<blockquote>

*  When used in a [PRINT](PRINT.md)  statement,
	* count% is the number of space characters to print, overwriting existing characters.
	* If count% is greater than the number of columns left in the current row, remaining space characters are printed on the next row.
*  When used in a [PRINT](PRINT.md)  # statement,
	* count% is the number of space characters to output.
	* If count% is less than or equal to zero, the function has no effect.


</blockquote>

#### SEE ALSO

<blockquote>

*  [PRINT](PRINT.md)  , [PRINT](PRINT.md)  #
*  [LPRINT](LPRINT.md)  , [STRING\$](STRING\$.md) 
*  [TAB](TAB.md)  , [SPACE\$](SPACE\$.md) 

</blockquote>
