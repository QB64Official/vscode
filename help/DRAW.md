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

## [DRAW](DRAW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DRAW)
---
<blockquote>

### The DRAW statement uses a STRING expression to draw lines on the screen.

</blockquote>

#### SYNTAX

<blockquote>

`DRAW drawString$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The drawString$ can be [DRAW](DRAW.md)  instructions in quotation marks or a [STRING](STRING.md)  variable using [DRAW](DRAW.md)  instructions.
*  [DRAW](DRAW.md)  starting coordinates can be set using [PSET](PSET.md)  , [PRESET](PRESET.md)  , [CIRCLE](CIRCLE.md)  or [LINE](LINE.md)  ending positions.
*  Other graphic objects can be located at or relative to the last [DRAW](DRAW.md)  position using [STEP](STEP.md)  .
*  [DRAW](DRAW.md)  can inherit colors from other graphic statements such as [PSET](PSET.md)  , [LINE](LINE.md)  and [CIRCLE](CIRCLE.md)  .
*  Draw strings use letters followed by the number of pixels to move, an angle, coordinate or a color value.
*  [DRAW](DRAW.md)  strings are flexible with spacing. Spacing is not required. [DRAW](DRAW.md)  will look for a number value after a valid letter.
*  [DRAW](DRAW.md)  statements are not case sensitive.
	* " B " (blind) before a line move designates that the line move will be hidden. Use to offset from a "P" or [PAINT](PAINT.md)  border.
	* " C n" designates the color attribute or [_RGB](RGB.md)  string numerical color value to be used in the draw statement immediately after.
	* " M x, y" can move to another coordinate area of the screen. When a + or - sign is used before a coordinate, it is a relative coordinate move similar to using the [STEP](STEP.md)  graphics keyword. [DRAW](DRAW.md)  "M+=" + VARPTR$ (variable%)
	* " N " before a line move designates that the graphic cursor will return to the starting position after the line is drawn.
	* " P f [, b]" is used to paint enclosed objects. f denotes the fill color and b the border color, if needed.
	* " S n" changes the pixel move size of the lines. Default is 4 (1 pixel) minimum. "S8" would double the pixel line moves.
	* " X " + VARPTR$ (value) can draw another substring.
*  Certain letter designations create line moves on the [SCREEN](SCREEN.md) . Each move is followed by the number of pixels:
	* " D n" draws a line vertically DOWN n pixels.
	* " E n" draws a diagonal / line going UP and RIGHT n pixels each direction.
	* " F n" draws a diagonal \ line going DOWN and RIGHT n pixels each direction.
	* " G n" draws a diagonal / [LINE](LINE.md)  going DOWN and LEFT n pixels each direction.
	* " H n" draws a diagonal \ [LINE](LINE.md)  going UP and LEFT n pixels each direction.
	* " L n" draws a line horizontally LEFT n pixels.
	* " R n" draws a line horizontally RIGHT n pixels.
	* " U n" draws a line vertically UP n pixels.
*  Angles are used to rotate all subsequent draw moves.
	* " A n" can use values of 1 to 3 to rotate up to 3 90 degree(270) angles.
	* TA n" can use any n angle from -360 to 0 to 360 to rotate a [DRAW](DRAW.md)  (Turn Angle). "TA0" resets to normal.
	* When VARPTR$ is used, [DRAW](DRAW.md)  functions such as TA angles use an equal sign: "TA=" + VARPTR$(angle%)
*  The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md)  relative coordinates.
*  [DRAW](DRAW.md)  can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.


</blockquote>

#### SEE ALSO

<blockquote>

*  [LINE](LINE.md)  , [PSET](PSET.md)  , [PRESET](PRESET.md)  , [CIRCLE](CIRCLE.md) 
*  [PAINT](PAINT.md)  , [SCREEN](SCREEN.md) 
*  [COLOR](COLOR.md)  , [PLAY](PLAY.md) 
*  [TIME\$](TIME\$.md) 

</blockquote>
