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

## [ERL](ERL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ERL)
---
<blockquote>

### The ERL function returns the closest previous line number before the last error.

</blockquote>

#### SYNTAX

<blockquote>

`lastErrorLine& = ERL`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Used in an error handler to report the last line number used before the error.
*  If the program does not use line numbers, then [ERL](ERL.md)  returns 0.
*  Use [_ERRORLINE](ERRORLINE.md)  to return the actual code [LINE](LINE.md)  position of an [ERROR](ERROR.md)  in a QB64 program.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ERR](ERR.md) 
*  [ERROR](ERROR.md) 
*  [ON](ON.md)  [ERROR](ERROR.md) 
*  [_ERRORLINE](ERRORLINE.md)  , [_INCLERRORLINE](INCLERRORLINE.md)  , [_INCLERRORFILE\$](INCLERRORFILE\$.md) 
*  [ERROR](ERROR.md)  Codes

</blockquote>
