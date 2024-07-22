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

## [_BLEND_(function)](BLEND_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BLEND (function))
---
<blockquote>

### The _BLEND function returns enabled or disabled for the current window or a specified image handle when 32 bit.

</blockquote>

#### SYNTAX

<blockquote>

`result% = _BLEND [( imageHandle& )]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_BLEND](BLEND.md)  returns -1 if enabled or 0 if disabled by [_DONTBLEND](DONTBLEND.md)  statement.
*  Note: [_DONTBLEND](DONTBLEND.md)  is faster than the default [_BLEND](BLEND.md)  unless you really need to use it in 32 bit.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_DONTBLEND](DONTBLEND.md)  , [_BLEND](BLEND.md) 
*  Images

</blockquote>
