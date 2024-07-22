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

## [CSRLIN](CSRLIN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CSRLIN)
---
<blockquote>

### The CSRLIN function returns the current text row position of the PRINT cursor.

</blockquote>

#### SYNTAX

<blockquote>

`row% = CSRLIN`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The value returned is within the range of 1 to the current number of rows in the [SCREEN](SCREEN.md)  mode used.
	* In [SCREEN](SCREEN.md)  0 (text mode), the [_HEIGHT](HEIGHT.md)  function returns the number of text rows.
	* In graphic modes, the number of available text rows can be calculated by dividing [_HEIGHT](HEIGHT.md)  (measured in pixels in graphic modes) by [_FONTHEIGHT](FONTHEIGHT.md)  : totalRows% = [_HEIGHT](HEIGHT.md)  / [_FONTHEIGHT](FONTHEIGHT.md) 
*  In screen modes that support page flipping, the [CSRLIN](CSRLIN.md)  function returns the vertical coordinate of the cursor on the active page.
*  x = [POS](POS.md)  (0) returns the column location of the cursor.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SCREEN](SCREEN.md)  , [LOCATE](LOCATE.md)  , [POS](POS.md) 
*  [_PRINTSTRING](PRINTSTRING.md)  (graphic [PRINT](PRINT.md) )

</blockquote>
