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

## [_KEYHIT](KEYHIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_KEYHIT)
---
<blockquote>

### The _KEYHIT function returns ASCII one and two byte, OpenGL Virtual Key and Unicode keyboard key press codes.

</blockquote>

#### SYNTAX

<blockquote>

`keycode& = _KEYHIT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Return values range up to &H40000000 so use a [LONG](LONG.md)  or [_INTEGER64](INTEGER64.md)  variable type. See the [_KEYDOWN](KEYDOWN.md)  code list:


</blockquote>

#### SEE ALSO

<blockquote>

*  [_KEYDOWN](KEYDOWN.md)  , [_CINP](CINP.md) 
*  [_MAPUNICODE](MAPUNICODE.md)  , [_MAPUNICODE](MAPUNICODE.md)  (function)
*  INKEY$ , ASCII (code table) ,
*  Unicode , Code Pages (by region)
*  [INP](INP.md)  ( &H60 ), Scancodes
*  [ON](ON.md)  [KEY](KEY.md) (n) , [KEY](KEY.md) (n) , [KEY](KEY.md)  n
*  Windows hot keys

</blockquote>
