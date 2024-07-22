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

## [ASC_(function)](ASC_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ASC (function))
---
<blockquote>

### The ASC function returns the ASCII code number of a certain STRING text character.

</blockquote>

#### SYNTAX

<blockquote>

`code% = ASC ( text$ [, position% ])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The text$ parameter must have a length of at least 1 byte or an error occurs.
*  In QB64 only the optional position% parameter specifies the character in a string to be returned. Must be greater than 0.
*  If the optional position% parameter is omitted, [ASC](ASC.md)  will return the ASCII code of the first character.
*  ASCII code  values returned range from 0 to 255.
*  In QB64 , the [ASC](ASC.md)  function reads string byte positions about 5 times faster than MID$ when parsing strings character wise. See MID$ Example 2 .


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [ASC](ASC.md) 
*  [_KEYHIT](KEYHIT.md)  , [_KEYDOWN](KEYDOWN.md) 
*  MID$ , MID$ (function)
*  CHR$ , [INKEY\$](INKEY\$.md) 
*  [VAL](VAL.md)  , [STRING\$](STRING\$.md) 
*  ASCII , [_MAPUNICODE](MAPUNICODE.md) 
*  Scancodes

</blockquote>
