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

## [CLS](CLS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CLS)
---
<blockquote>

### The CLS statement clears the current write page or the designated image.

</blockquote>

#### SYNTAX

<blockquote>

`CLS [ method% ] [, bgColor& ] [, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  method% specifies which parts of the page to clear, and can have one of the following values:
	* [CLS](CLS.md)  - clears the active graphics or text viewport or the entire text screen and refreshes bottom function [KEY](KEY.md) [ON](ON.md)  line.
	* [CLS](CLS.md)  0 - Clears the entire page of text and graphics. Print cursor is moved to row 1 at column 1.
	* [CLS](CLS.md)  1 - Clears only the graphics view port. Has no effect for text mode.
	* [CLS](CLS.md)  2 - Clears only the text view port. The print cursor is moved to the top row of the text view port at column 1.
*  The bgColor& specifies the color attribute or palette index to use when clearing the screen in QB64 .
*  imageHandle& specifies an image handle to clear. If it is not specified, then [CLS](CLS.md)  clears the current write page .

</blockquote>

#### DESCRIPTION

<blockquote>

*  In legacy [SCREEN](SCREEN.md)  modes bgColor& specifies the color attribute of the background.
*  For 32-bit graphics mode, bgColor& specifies the [_RGB32](RGB32.md)  or [_RGBA32](RGBA32.md)  color to use.
*  32-bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md)  so that they are transparent when placed over other surfaces.
	* Use [CLS](CLS.md)  or [_DONTBLEND](DONTBLEND.md)  to make a new surface background [_ALPHA](ALPHA.md)  255 or opaque.
*  If not specified, bgColor& is assumed to be the current background color. 32-bit backgrounds will change to opaque.
*  If bgColor& is not a valid attribute, an illegal function call error will occur.
*  Use [_PRINTMODE](PRINTMODE.md)  to allow the background colors to be visible through the text or the text background.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SCREEN](SCREEN.md) 
*  [_RGB](RGB.md)  , [_RGBA](RGBA.md)  , [_RGB32](RGB32.md)  , [_RGBA32](RGBA32.md) 
*  [VIEW](VIEW.md)  [PRINT](PRINT.md)  , [VIEW](VIEW.md) 
*  [_CLEARCOLOR](CLEARCOLOR.md) 

</blockquote>
