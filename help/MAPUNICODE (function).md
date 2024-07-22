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

## [_MAPUNICODE_(function)](MAPUNICODE_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MAPUNICODE (function))
---
<blockquote>

### The _MAPUNICODE function returns the Unicode (UTF-32) code point value of a mapped ASCII character code.

</blockquote>

#### SYNTAX

<blockquote>

`utfValue& = _MAPUNICODE ( asciiCode% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  UTF-32 values have 4-byte encoding so the return variable should be [LONG](LONG.md)  .
*  The asciiCode% can be any [INTEGER](INTEGER.md)  value from 0 to 255.
*  Returns can be used to verify or catalog the present Unicode mapping.
*  The function returns Unicode values for the control characters, CHR$(127) and extended characters without mapping them first.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_MAPUNICODE](MAPUNICODE.md) 
*  Unicode , Code Pages
*  ASCII , CHR$ , [ASC](ASC.md)  (function)
*  Text Using Graphics

</blockquote>
