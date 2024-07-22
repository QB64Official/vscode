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

## [_INCLERRORLINE](INCLERRORLINE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INCLERRORLINE)
---
<blockquote>

### The _INCLERRORFILE$ function returns the line number in an $INCLUDE file that caused the most recent error.

</blockquote>

#### SYNTAX

<blockquote>

`errline& = _INCLERRORLINE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the last [ERROR](ERROR.md)  occurred in the main module, [_INCLERRORLINE](INCLERRORLINE.md)  returns 0.
*  By checking [_INCLERRORLINE](INCLERRORLINE.md)  you can report exactly what [LINE](LINE.md)  inside an included module caused the last [ERROR](ERROR.md) .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_INCLERRORFILE\$](INCLERRORFILE\$.md) 
*  [ON](ON.md)  [ERROR](ERROR.md)  , [ERR](ERR.md) 
*  [ERROR](ERROR.md) 
*  [ERROR](ERROR.md)  Codes
*  $INCLUDE

</blockquote>
