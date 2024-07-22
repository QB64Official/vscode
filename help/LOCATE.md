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

## [LOCATE](LOCATE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOCATE)
---
<blockquote>

### The LOCATE statement locates the screen text row and column positions for a PRINT or INPUT procedure.

</blockquote>

#### SYNTAX

<blockquote>

`LOCATE [ row% ][, column% ] [, cursor% ][, cursorStart% , cursorStop% ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  optional text row% [INTEGER](INTEGER.md)  values are from 1 to 25, 43 or 50 in [SCREEN](SCREEN.md)  0 and  25 in most other legacy graphic [SCREEN](SCREEN.md)  modes, except screens 11 and 12 which can have 30 or 60 rows.
*  optional column% [INTEGER](INTEGER.md)  values are from 1 to 40 or 80 in [SCREEN](SCREEN.md)  0 and 80 in all other legacy [SCREEN](SCREEN.md)  modes.
*  optional cursor% value can be 0 to turn displaying the cursor off or 1 to turn it on.
*  optional cursorStart% and cursorStop% values define the shape of the cursor by setting the start and stop scanline (values range from 0 to 31) for the cursor character.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [WIDTH](WIDTH.md)  statement can be used to determine the text [WIDTH](WIDTH.md)  and height in [SCREEN](SCREEN.md)  0 and height of 30 or 60 in [SCREEN](SCREEN.md)  11 or 12.
*  In [_NEWIMAGE](NEWIMAGE.md)  graphic screen the number of text rows are calculated as [_HEIGHT](HEIGHT.md)  \ 16 except when a [_FONT](FONT.md)  is used. Use [_FONTHEIGHT](FONTHEIGHT.md)  to calculate font rows.
*  [_NEWIMAGE](NEWIMAGE.md)  graphic screen text columns are calculated as [_WIDTH]( [WIDTH](WIDTH.md) .md)  \ 8 except when a [_FONT](FONT.md)  is used. Use [_PRINTWIDTH](PRINTWIDTH.md)  to measure a line of font text.
	* Additionally, when a variable width [_FONT](FONT.md)  is active, then the columns are not counted as char positions anymore but as pixel positions instead.
*  The text row position is not required if the [PRINT](PRINT.md)  is going to be on the next row. The comma and a column value are required to set the column.
*  If only the row parameter is given, then the column position remains the same. Neither row or column parameter can be 0.
*  When PRINTing on the bottom 2 rows , use a semicolon after the [PRINT](PRINT.md)  expression to avoid a screen roll.
*  If the cursorStart% line is given, the cursorStop% line must also be given. A wider range between them produces a taller cursor.
*  If you use [LOCATE](LOCATE.md)  beyond the current number of rows in text mode, QB64 will try to adapt the screen instead of tossing an error.
*  When writing to the console, only the row and column arguments are used, all others are ignored. Furthermore, on non-Windows systems [LOCATE](LOCATE.md)  statements that do not give both a row and column will be ignored entirely.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [CSRLIN](CSRLIN.md)  , [POS](POS.md)  (cursor position)
*  [SCREEN](SCREEN.md)  , [PRINT](PRINT.md)  , [COLOR](COLOR.md) 
*  INPUT , [LINE](LINE.md)  INPUT , INPUT$ (keyboard input)
*  [WIDTH](WIDTH.md)  , INPUT$ , [INKEY\$](INKEY\$.md) 

</blockquote>
