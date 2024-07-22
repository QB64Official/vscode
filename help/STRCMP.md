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

## [_STRCMP](STRCMP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_STRCMP)
---
<blockquote>

### The _STRCMP function compares the relationship between two strings, comparing upper or lower case.

</blockquote>

#### SYNTAX

<blockquote>

`comparison% = _STRCMP ( string1$ , string2$ )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Function returns -1 when string1$ is less than string2$ , 0 when equal or 1 when string1$ is greater than string2$ .
*  Upper case letters are valued less than lower case letters in the ASCII evaluation.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_STRICMP](STRICMP.md) 
*  [STR\$](STR\$.md) 
*  [STRING](STRING.md) 
*  ASCII

</blockquote>
