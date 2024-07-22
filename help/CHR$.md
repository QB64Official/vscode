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

## [CHR\$](CHR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CHR$)
---
<blockquote>

### The CHR$ function returns the character associated with a certain character code as a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`result$ = CHR$ ( code% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Valid ASCII code% numbers range from 0 to 255.
*  The character code of a character can be found using the [ASC](ASC.md)  (function) .
*  Some control codes below 32 will not [PRINT](PRINT.md)  or will move the screen cursor, unless [_CONTROLCHR](CONTROLCHR.md) [OFF](OFF.md)  is used.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ASC](ASC.md)  , [ASC](ASC.md)  (function)
*  [INKEY\$](INKEY\$.md) 
*  ASCII character codes

</blockquote>
