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

## [_FONT](FONT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FONT)
---
<blockquote>

### The _FONT statement sets the current _LOADFONT function font handle to be used by PRINT .

</blockquote>

#### SYNTAX

<blockquote>

`_FONT fontHandle& [, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  fontHandle& is the handle retrieved from [_LOADFONT](LOADFONT.md)  function, the [_FONT](FONT.md)  function, or a predefined handle.
*  If the image handle is omitted the current image _DESTination is used. Zero can designate the current program [SCREEN](SCREEN.md)  .

</blockquote>

#### DESCRIPTION

<blockquote>

*  Predefined QB64 font handle numbers can be used before freeing a font:
	* [_FONT](FONT.md)  8 - default font for [SCREEN](SCREEN.md)  1, 2, 7, 8 or 13
	* [_FONT](FONT.md)  14 - default font for [SCREEN](SCREEN.md)  9 or 10
	* [_FONT](FONT.md)  16 - default font for [SCREEN](SCREEN.md)  0 ( [WIDTH](WIDTH.md)  80, 25 text only), 11 or 12
	* [_FONT](FONT.md)  9, 15 and 17 are the double width versions of 8, 14 and 16 respectively in text [SCREEN](SCREEN.md)  0 only .
*  Unicode characters can be assigned [TO](TO.md)  a monospace font that contains those unicode characters using the [_MAPUNICODE](MAPUNICODE.md) [TO](TO.md)  ASCII mapping statement. The optional IME cyberbit.ttf font included with QB64 can also be used.
*  Can alpha blend a font with a background screen created by [_NEWIMAGE](NEWIMAGE.md)  in 32 bit color.
*  Check for valid handle values greater than 0 before using or freeing font handles.
*  [FREE](FREE.md)  unused font handles with [_FREEFONT](FREEFONT.md)  . Freeing invalid handles will create an "illegal function call" error.
*  NOTE: [SCREEN](SCREEN.md)  0 can only use one font type and style per viewed [SCREEN](SCREEN.md)  page. Font size may also affect the window size.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FONT](FONT.md)  (function)
*  [_LOADFONT](LOADFONT.md)  , [_FREEFONT](FREEFONT.md) 
*  Unicode , [_MAPUNICODE](MAPUNICODE.md) 
*  Windows Font Dialog Box

</blockquote>
