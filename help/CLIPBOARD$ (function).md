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

## [_CLIPBOARD\$_(function)](CLIPBOARD\$_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARD$ (function))
---
<blockquote>

### The _CLIPBOARD$ function returns the current Operating System's clipboard contents as a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`result$ = _CLIPBOARD$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Text returned can contain the entire contents of a copied file or web page or text from a previous _CLIPBOARD$ statement.
*  The string returned can also contain formatting like CRLF ( CHR$ (13) + CHR$ (10)) end of line characters.
*  The clipboard can be used to copy, paste and communicate between running programs.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  _CLIPBOARD$ (statement)
*  [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md)  (function) , [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md)  (statement)

</blockquote>
