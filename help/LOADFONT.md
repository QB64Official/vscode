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

## [_LOADFONT](LOADFONT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_LOADFONT)
---
<blockquote>

### The _LOADFONT function loads a FreeType supported font file in a specific size and style and returns a LONG font handle.

</blockquote>

#### SYNTAX

<blockquote>

`handle& = _LOADFONT ( fontFileName$ , size& [, "{MONOSPACE|, BOLD|, ITALIC|, UNDERLINE|, UNICODE|, DONTBLEND|, MEMORY|, AUTOMONO}"][, fontIndex& ])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The assigned [LONG](LONG.md)  font handle& variable return value designates a font style to be used somewhere in a program. Valid handle values are greater than 0 ( handle& > 0 ).
*  fontFileName$ is the filename of a font. It can include the path to the font file. TTF, TTC, OTF, FNT, FON, PCF and BDF font file formats are supported. Best practice is to include font files with a program.
*  If no path is specified for fontFileName$ and the font file isn't in the same folder as the resulting binary, QB64 attempts to load from the default %SystemRoot%\Fonts path. Similar known locations are searched in other operating systems.
*  size& is the [INTEGER](INTEGER.md)  height of the font. If the size is too large or small an error will occur.
*  Optional comma separated style parameter(s) used are literal STRINGs (in quotes) or can be contained in variable(s).
	* "MONOSPACE" loads a font with all characters occupying the same width. Results may be too spaced out for fonts that aren't designed for monospace use.
	* "BOLD", "ITALIC" or "UNDERLINE" create bold, italic or underlined fonts when available in font.
		* (valid for QB64 versions prior to 1.000).
		* For QB64 1.000 or later , you must specify the proper file name according to the desired attributes. For example, Courier New is in font cour.ttf while Courier New Bold is in font courbd.ttf , as shipped with Windows.
	* "UNICODE" loads Unicode fonts such as cyberbit.ttf which is included in the QB64 downloads.
	* "DONTBLEND" turns off [_ALPHA](ALPHA.md)  blending of fonts. This can also be done with the [_DONTBLEND](DONTBLEND.md)  statement.
	* "MEMORY" will treat fontFileName$ as a memory buffer containing the font file instead of a file name.
	* "AUTOMONO" will automatically detect monospace fonts and set the "MONOSPACE" flag if fontFileName$ is monospaced.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FONT](FONT.md)  , [_FONT](FONT.md)  (function)
*  [_FREEFONT](FREEFONT.md) 
*  [_PRINTSTRING](PRINTSTRING.md)  , [_PRINTWIDTH](PRINTWIDTH.md) 
*  [_PRINTMODE](PRINTMODE.md)  , [_PRINTMODE](PRINTMODE.md)  (function)
*  [_FONTHEIGHT](FONTHEIGHT.md)  , [_FONTWIDTH](FONTWIDTH.md) 
*  Text Using Graphics (Demo)
*  Windows Font Dialog Box

</blockquote>
