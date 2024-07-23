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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
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


* The drawString$ can be [DRAW](DRAW.md) instructions in quotation marks or a [STRING](STRING.md) variable using [DRAW](DRAW.md) instructions.
* [DRAW](DRAW.md) starting coordinates can be set using [PSET](PSET.md) , [PRESET](PRESET.md) , [CIRCLE](CIRCLE.md) or [LINE](LINE.md) ending positions.
* Other graphic objects can be located at or relative to the last [DRAW](DRAW.md) position using [STEP](STEP.md) .
* [DRAW](DRAW.md) can inherit colors from other graphic statements such as [PSET](PSET.md) , [LINE](LINE.md) and [CIRCLE](CIRCLE.md) .
* Draw strings use letters followed by the number of pixels to move, an angle, coordinate or a color value.
* Draw strings are flexible with spacing. Spacing is not required. [DRAW](DRAW.md) will look for a number value after a valid letter.
* [DRAW](DRAW.md) statements are not case sensitive.
* " B " (blind) before a line move designates that the line move will be hidden. Use to offset from a "P" or [PAINT](PAINT.md) border.
* " C n" designates the color attribute or [_RGB](RGB.md) string numerical color value to be used in the draw statement immediately after.
* " M x, y" can move to another coordinate area of the screen. When a + or - sign is used before a coordinate, it is a relative coordinate move similar to using the [STEP](STEP.md) graphics keyword. [DRAW](DRAW.md) "M+=" + [VARPTR&dollar;](VARPTR&dollar;.md) (variable%)
* " N " before a line move designates that the graphic cursor will return to the starting position after the line is drawn.
* " P f [, b]" is used to paint enclosed objects. f denotes the fill color and b the border color, if needed.
* " S n" changes the pixel move size of the lines. Default is 4 (1 pixel) minimum. "S8" would double the pixel line moves.
* " X " + [VARPTR&dollar;](VARPTR&dollar;.md) (value) can draw another substring.
* Certain letter designations create line moves on the SCREEN. Each move is followed by the number of pixels:
* " D n" draws a line vertically DOWN n pixels.
* " E n" draws a diagonal / line going UP and RIGHT n pixels each direction.
* " F n" draws a diagonal \ line going DOWN and RIGHT n pixels each direction.
* " G n" draws a diagonal / [LINE](LINE.md) going DOWN and LEFT n pixels each direction.
* " H n" draws a diagonal \ [LINE](LINE.md) going UP and LEFT n pixels each direction.
* " L n" draws a line horizontally LEFT n pixels.
* " R n" draws a line horizontally RIGHT n pixels.
* " U n" draws a line vertically UP n pixels.
* Angles are used to rotate all subsequent draw moves.
* " A n" can use values of 1 to 3 to rotate up to 3 90 degree(270) angles.
* TA n" can use any n angle from -360 to 0 to 360 to rotate a [DRAW](DRAW.md) (Turn Angle). "TA0" resets to normal.
* When [VARPTR&dollar;](VARPTR&dollar;.md) is used, [DRAW](DRAW.md) functions such as TA angles use an equal sign: "TA=" + VARPTR$(angle%)
* The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md) relative coordinates.
* [DRAW](DRAW.md) can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Placing an octagon shape DRAW across the the screen using PSET.
```vb
SCREEN 12
octagon$ = "C12 R10 F10 D10 G10 L10 H10 U10 E10"  'create a DRAW string value
SCREEN 12
FOR i% = 1 TO 11
PSET (i% * 50, 100), 15
_DELAY .5         ' delay for demo
DRAW octagon$     ' DRAW the octagon using variable
_DELAY .5         ' delay for demo
NEXT i%
```
  
<br>



##### Example 2: Creating an analog clock's hour markers using "TA=" + VARPTR\$ (angle).
```vb
SCREEN 12
FOR angle = 0 TO 360 STEP 30             ' 360/12 hour circles = 30 degrees apart
PSET (175, 250), 6 ' stay at center point of clock
DRAW "TA=" + VARPTR$(angle) + "BU100" ' move invisibly to set next circle's center point
CIRCLE STEP(0, 0), 5, 12 ' circle placed at end of blind line
DRAW "P9, 12" ' paint inside of circle
SLEEP 1     ' slowed for demo only
NEXT
```
  
<br>



##### Example 3: Creating a moving second hand for the clock above (SCREEN 12). (See TIME\$ example 1)
```vb
DO: sec$ = RIGHT$(TIME$, 2) ' get actual seconds from TIME$ function
degree$ = STR$(VAL(sec$) * -6) ' 60 second moves. TA uses negative angles for clockwise moves
PSET (175, 250), 9 ' stay at clock center
DRAW "TA" + degree$ + "U90" ' up becomes TA directional line
DO: LOOP UNTIL RIGHT$(TIME$, 2) <> sec$ ' wait for a new second value
IF INKEY$ <> "" THEN EXIT DO ' any key exit
PSET (175, 250), 0 ' set at clock center to erase line
DRAW "TA" + degree$ + "U90" ' erases old second hand line using color 0 from PSET
LOOP
```
  
<br>



##### Example 4: Creating digital displays using DRAW format strings to create the LED segments. (See SELECT EVERYCASE example 5)
```vb
SCREEN 12
DO
LOCATE 1, 1: INPUT "Enter a number 0 to 9: ", num
CLS
SELECT CASE num
CASE 0, 2, 3, 5 TO 9: PSET (20, 20), 12
DRAW "E2R30F2G2L30H2BR5P12,12" 'top horiz
END SELECT

SELECT CASE num
CASE 0, 4 TO 6, 8, 9: PSET (20, 20), 12
DRAW "F2D30G2H2U30E2BD5P12,12" 'left top vert
END SELECT

SELECT CASE num
CASE 0, 2, 6, 8: PSET (20, 54), 12
DRAW "F2D30G2H2U30E2BD5P12, 12" 'left bot vert
END SELECT

SELECT CASE num
CASE 2 TO 6, 8, 9: PSET (20, 54), 12
DRAW "E2R30F2G2L30H2BR5P12, 12" 'middle horiz
END SELECT

SELECT CASE num
CASE 0 TO 4, 7 TO 9: PSET (54, 20), 12
DRAW "F2D30G2H2U30E2BD5P12,12" 'top right vert
END SELECT

SELECT CASE num
CASE 0, 1, 3 TO 9: PSET (54, 54), 12
DRAW "F2D30G2H2U30E2BD5P12,12" 'bottom right vert
END SELECT

SELECT CASE num
CASE 0, 2, 3, 5, 6, 8: PSET (20, 88), 12
DRAW "E2R30F2G2L30H2BR5P12,12" 'bottom horiz
END SELECT
LOOP UNTIL num > 9
```
  
<br>



##### Example 5: Using 32 bit or _RGB color string values when using the DRAW C text statement
```vb
SCREEN _NEWIMAGE(800, 800, 12)
PRINT _ALPHA(10), _RED(10), _GREEN(10), _BLUE(10)

SLEEP

SCREEN _NEWIMAGE(800, 800, 32) 'comment out this line to use the non-32 bit screen mode 12
PRINT _ALPHA(10), _RED(10), _GREEN(10), _BLUE(10)

PSET (400, 400), 0 ' move to 320, 240... draw will start where pset leaves off
c = 14
DIM k AS _UNSIGNED LONG
k = _RGB(80, 255, 80)
FOR repeat = 1 TO 16
FOR p = 0 TO 359
c = c + 1: d = c / 14
DRAW "c" + STR$(k) + " ta" + STR$(p) + " bu " + STR$(d) + "l7 u7 r7 d7 bd " + STR$(d)
NEXT p
NEXT repeat
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [LINE](LINE.md) , [PSET](PSET.md) , [PRESET](PRESET.md) , [CIRCLE](CIRCLE.md)
* [PAINT](PAINT.md) , [SCREEN](SCREEN.md)
* [COLOR](COLOR.md) , [PLAY](PLAY.md)
* [TIME&dollar;](TIME&dollar;.md)
</blockquote>
