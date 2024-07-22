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

## [LINE](LINE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LINE)
---
<blockquote>

### The LINE statement is used in graphic SCREEN modes to create lines or boxes.

</blockquote>

#### SYNTAX

<blockquote>

`LINE [STEP] [ ( column1 , row1 ) ] - [STEP] ( column2 , row2 ), color [, [{B|BF}], style% ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The [STEP](STEP.md)  keyword make column and row coordinates relative to the previously coordinates set by any graphic statement.
*  The optional parameters ( column1 , row1 ) set the line's starting point.
*  The dash and second coordinate parameters ( column2 , row2 ) must be designated to complete the line or box.
*  The [INTEGER](INTEGER.md) [COLOR](COLOR.md)  attribute [OR](OR.md)  [LONG](LONG.md)  [_RGB32](RGB32.md)  32 bit [COLOR](COLOR.md)  value sets the drawing [COLOR](COLOR.md) .  If omitted, the current destination page's [_DEFAULTCOLOR](DEFAULTCOLOR.md)  is used.
*  Optional B keyword creates a rectangle ( b ox) using the start and end coordinates as diagonal corners. BF creates a b ox f illed.
*  The style% signed [INTEGER](INTEGER.md)  value sets a dotted pattern to draw the line or rectangle outline.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Creates a colored line between the given coordinates. Can be drawn partially off screen.
*  B creates a box outline with each side parallel to the program screen sides. BF creates a filled box.
*  style% can be used to create a dotted pattern to draw the line.
	* B can be used with a style% to draw the rectangle outline using the desired pattern.
	* BF ignores the style% parameter. See examples 2, 3 and 4 below.
*  The graphic cursor is set to the center of the program window on program start. Using the [STEP](STEP.md)  keyword makes the coordinates relative to the current graphic cursor.
*  [LINE](LINE.md)  can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SCREEN](SCREEN.md)  , [COLOR](COLOR.md) 
*  [DRAW](DRAW.md)  , [CIRCLE](CIRCLE.md)  , [STEP](STEP.md) 
*  [PSET](PSET.md)  , [PRESET](PRESET.md) 
*  [AND](AND.md)  , [OR](OR.md)  (logical operators)

</blockquote>
