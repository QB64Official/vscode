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

## [CIRCLE](CIRCLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CIRCLE)
---
<blockquote>

### The CIRCLE statement is used in graphic SCREEN modes to create circles, arcs or ellipses.

</blockquote>

#### SYNTAX

<blockquote>

`CIRCLE [[[STEP]]] ( column , row ), radius% , [ drawColor% ][, startRadian! , stopRadian! ] [, aspect! ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  Can use [STEP](STEP.md)  for relative coordinate moves from the previous graphic coordinates.
*  Coordinates designate the center position of the circle. Can be partially drawn offscreen.
*  radius% is an [INTEGER](INTEGER.md)  value for half of the total circle diameter.
*  drawColor% is any available color attribute in the [SCREEN](SCREEN.md)  mode used.
*  startRadian! and stopRadian! can be any [SINGLE](SINGLE.md)  value from 0 to 2 * π to create partial circles or ellipses.
*  aspect! [SINGLE](SINGLE.md)  values of 0 to 1 affect the vertical height and values over 1 affect the horizontal width of an ellipse. Aspect = 1 is a normal circle.

</blockquote>

#### DESCRIPTION

<blockquote>

*  When using aspect! the startRadian! and stopRadian! commas must be included even if not used.
*  Radians move in a counter clockwise direction from 0 to 2 * π. Zero and 2 * π are the same circle radian at 3 o'clock.
*  Negative radian values can be used to draw lines from the end of an arc or partial ellipse to the circle center.
*  Commas after the drawColor% parameter are not required when creating a normal circle. drawColor% can also be omitted to use the last color used in a draw statement.
*  The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md)  relative coordinates.
*  [CIRCLE](CIRCLE.md)  can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.


</blockquote>

#### SEE ALSO

<blockquote>

*  [STEP](STEP.md)  , [DRAW](DRAW.md) 
*  [LINE](LINE.md)  , [PSET](PSET.md)  , [PRESET](PRESET.md) 
*  [SCREEN](SCREEN.md)  , [SCREEN](SCREEN.md)  (function)
*  Alternative circle routine (member-contributed program)

</blockquote>
