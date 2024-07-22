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

## [_FREEFONT](FREEFONT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FREEFONT)
---
<blockquote>

### The _FREEFONT statement frees a font handle that was created by _LOADFONT .

</blockquote>

#### SYNTAX

<blockquote>

`_FREEFONT ( fontHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Unloads fonts that are no longer in use or needed in order to free program memory and resources.
*  You cannot free a font which is in use. Change the font to a QB64 default font size before freeing the handle (see example below).
*  Predefined QB64 font handle numbers can be used before freeing a font:
	* [_FONT](FONT.md)  8 - default font for [SCREEN](SCREEN.md)  1, 2, 7, 8 or 13
	* [_FONT](FONT.md)  14 - default font for [SCREEN](SCREEN.md)  9 or 10
	* [_FONT](FONT.md)  16 - default font for [SCREEN](SCREEN.md)  0 ( [WIDTH](WIDTH.md)  80, 25 text only), 11 or 12
	* [_FONT](FONT.md)  9, 15 and 17 are the double width versions of 8, 14 and 16 respectively in text [SCREEN](SCREEN.md)  0 .
*  If the font handle is invalid (equals -1 or 0), an error will occur. Check handle values before using or freeing them.
*  You cannot free inbuilt/default QB64 fonts nor do they ever need freed.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FONT](FONT.md) 
*  [_LOADFONT](LOADFONT.md) 

</blockquote>
