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

## [_RESIZEWIDTH](RESIZEWIDTH.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_RESIZEWIDTH)
---
<blockquote>

### The _RESIZEWIDTH function returns the user resized screen pixel width if $RESIZE :ON allows it and _RESIZE returns -1

</blockquote>

#### SYNTAX

<blockquote>

`newWidth& = _RESIZEWIDTH`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_RESIZE](RESIZE.md)  function must return true (-1) before the requested screen dimensions can be returned by the function.
*  The program should decide if the request is allowable for proper program interaction.


</blockquote>

#### SEE ALSO

<blockquote>

*  $RESIZE
*  [_RESIZE](RESIZE.md)  (function)
*  [_RESIZEHEIGHT](RESIZEHEIGHT.md) 

</blockquote>
