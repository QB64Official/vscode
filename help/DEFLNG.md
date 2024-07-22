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

## [DEFLNG](DEFLNG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DEFLNG)
---
<blockquote>

### The DEFLNG statement defines all variables with names starting with the specified letter (or letter range) AS LONG variables instead of the SINGLE type default.

</blockquote>

#### SYNTAX

<blockquote>

`DEFLNG letter [- range ], letter2 [- range2 ], [...]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  letter (or range ) can be from A-Z or any other range, like G-M .
*  You can also use commas for specific undefined variable first letters.
*  Variables DIMensioned as another variable type or that use type suffixes are not affected by [DEFLNG](DEFLNG.md)  .
*  [DEFLNG](DEFLNG.md)  sets the type of all variable names with the starting letter(s) or letter ranges when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](SUB.md)  procedures).
*  For [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md)  , use [_DEFINE](DEFINE.md) 
*  Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.


</blockquote>

#### SEE ALSO

<blockquote>

*  [DEFSNG](DEFSNG.md)  , [DEFDBL](DEFDBL.md)  , [DEFINT](DEFINT.md)  , [DEFSTR](DEFSTR.md) 
*  [_DEFINE](DEFINE.md) 

</blockquote>
