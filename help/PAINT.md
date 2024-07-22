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

## [PAINT](PAINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PAINT)
---
<blockquote>

### The PAINT statement is used to fill a delimited area in a graphic screen mode with color.

</blockquote>

#### SYNTAX

<blockquote>

`PAINT [ STEP ] ( column% , row% ), fillColor [, borderColor% ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  Can use the [STEP](STEP.md)  keyword for relative coordinate placements. See example 1 below.
*  fillColor is an [INTEGER](INTEGER.md)  or [LONG](LONG.md)  32-bit value to paint the inside of an object. Colors are limited to the [SCREEN](SCREEN.md)  mode used.
*  Optional [INTEGER](INTEGER.md)  or [LONG](LONG.md)  32-bit borderColor% is the color of the border of the shape to be filled when this is different from the fill color.
*  fillColor can be a string made up of a sequence of CHR$ values, each representing a tiling pattern to fill the shape. See Example 3 below.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Graphic column% and row% [INTEGER](INTEGER.md)  pixel coordinates should be inside of a fully closed "shape", whether it's a rectangle, circle or custom-drawn shape using [DRAW](DRAW.md)  .
*  If the coordinates passed to the [PAINT](PAINT.md)  statement are on a pixel that matches the border colors, no filling will occur.
*  If the shape's border isn't continuous, the "paint" will "leak".
*  If the shape is not totally closed, every color except the border color may be painted over.
*  [DRAW](DRAW.md)  shapes can be filled using the string "P fillColor , borderColor ". Use a "B" blind move to offset from the shape's border.


</blockquote>

#### SEE ALSO

<blockquote>

*  [PSET](PSET.md)  , [PRESET](PRESET.md) 
*  [CIRCLE](CIRCLE.md)  , [LINE](LINE.md)  , [DRAW](DRAW.md) 
*  [SCREEN](SCREEN.md)  , [CHR\$](CHR\$.md) 

</blockquote>
