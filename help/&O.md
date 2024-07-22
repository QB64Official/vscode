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

## [&O](&O.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/&O)
---
<blockquote>

### The &O prefix denotes that an integer value is expressed in a Octal base 8 format.

</blockquote>

#### SYNTAX

<blockquote>

`a& = &O 377`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The base 8 numbering system uses octal digit values of 0 to 7 only.
*  Leading zero values can be omitted just like in decimal values as they add nothing to the return value.
*  Decimal values returned can be any signed [INTEGER](INTEGER.md)  , [LONG](LONG.md)  [INTEGER](INTEGER.md) , or [_INTEGER64](INTEGER64.md)  value so use those type of variables when converting directly as shown above in the Syntax. The program "overflow" error limits are listed as:


</blockquote>

#### SEE ALSO

<blockquote>

*  _BIN$ , HEX$ , OCT$ , [STR\$](STR\$.md) 
*  &B (binary), &H (hexadecimal), [VAL](VAL.md) 
*  Base Comparisons

</blockquote>
