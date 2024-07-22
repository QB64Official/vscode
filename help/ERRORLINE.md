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

## [_ERRORLINE](ERRORLINE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ERRORLINE)
---
<blockquote>

### The _ERRORLINE function returns the source code line number that caused the most recent runtime error.

</blockquote>

#### SYNTAX

<blockquote>

`e% = _ERRORLINE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Used in program error troubleshooting.
*  Does not require that the program use line numbers as it counts the actual lines of code.
*  The code line can be found using the QB64 IDE (Use the shortcut Ctrl+G to go to a specific line) or any other text editor such as Notepad.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md)  [ERROR](ERROR.md) 
*  [_INCLERRORLINE](INCLERRORLINE.md)  , [_INCLERRORFILE\$](INCLERRORFILE\$.md) 
*  [ERR](ERR.md)  , [ERL](ERL.md) 
*  [ERROR](ERROR.md) 
*  [ERROR](ERROR.md)  Codes

</blockquote>
