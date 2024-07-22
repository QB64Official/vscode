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

## [_DONTBLEND](DONTBLEND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DONTBLEND)
---
<blockquote>

### The _DONTBLEND statement turns off 32 bit alpha blending for the current image or screen mode where _BLEND is default.

</blockquote>

#### SYNTAX

<blockquote>

`_DONTBLEND [ imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  If imageHandle& is omitted, it is assumed to be the current _DESTination write page.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If imageHandle& is not valid, an Invalid handle error will occur.
*  [_DONTBLEND](DONTBLEND.md)  is faster than the default [_BLEND](BLEND.md)  . You may want to disable it , unless you really need to use it in 32 bit.
*  32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md)  so that they are transparent when placed over other surfaces.
*  Use [CLS](CLS.md)  to make a new surface background [_ALPHA](ALPHA.md)  255 or opaque.
*  Both [_SOURCE](SOURCE.md)  and [_DEST](DEST.md)  must have [_BLEND](BLEND.md)  enabled, or else colors will [NOT](NOT.md)  blend.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_BLEND](BLEND.md) 
*  [_BLEND](BLEND.md)  (function)
*  Images

</blockquote>
