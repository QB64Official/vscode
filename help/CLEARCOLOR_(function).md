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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_CLEARCOLOR (function)](CLEARCOLOR_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLEARCOLOR%20%28function%29)
---
<blockquote>

### The _CLEARCOLOR function returns the current transparent color of an image or page.

</blockquote>

#### SYNTAX

<blockquote>

`result& = _CLEARCOLOR [ Source_Handle& ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* If Source_Handle& is omitted, it is assumed to be the current destination write page.
* If Source_Handle& is an invalid handle value(-1), then an invalid handle value is returned.
* In color modes using a palette, the index of the current transparent color value is returned, or -1 if no transparent color is set.
* In 32-bit color modes, zero is returned.
* Returns the color that currently is transparent, or if no color is transparent -1 without error.
* A [_CLEARCOLOR](CLEARCOLOR.md) statement can set the transparent color of an image or screen.
* NOTE: Default 32 bit backgrounds are clear black or [_RGBA](RGBA.md) (0, 0, 0, 0). Use [CLS](CLS.md) to make the black opaque.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CLEARCOLOR](CLEARCOLOR.md) (sets a clear color)
* [_SETALPHA](SETALPHA.md) (sets color transparency)
* Images
</blockquote>
