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


* Can use the [STEP](STEP.md) keyword for relative coordinate placements. See example 1 below.
* fillColor is an [INTEGER](INTEGER.md) or [LONG](LONG.md) 32-bit value to paint the inside of an object. Colors are limited to the [SCREEN](SCREEN.md) mode used.
* Optional [INTEGER](INTEGER.md) or [LONG](LONG.md) 32-bit borderColor% is the color of the border of the shape to be filled when this is different from the fill color.
* fillColor can be a string made up of a sequence of [CHR&dollar;](CHR&dollar;.md) values, each representing a tiling pattern to fill the shape. See Example 3 below.
</blockquote>

#### DESCRIPTION

<blockquote>


* Graphic column% and row% [INTEGER](INTEGER.md) pixel coordinates should be inside of a fully closed "shape", whether it's a rectangle, circle or custom-drawn shape using [DRAW](DRAW.md) .
* If the coordinates passed to the [PAINT](PAINT.md) statement are on a pixel that matches the border colors, no filling will occur.
* If the shape's border isn't continuous, the "paint" will "leak".
* If the shape is not totally closed, every color except the border color may be painted over.
* [DRAW](DRAW.md) shapes can be filled using the string "P fillColor , borderColor ". Use a "B" blind move to offset from the shape's border.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Painting a CIRCLE immediately after it is drawn using STEP (0, 0) to paint from the circle's center point.
```vb
SCREEN 12
x = 200: y = 200
CIRCLE (x, y), 100, 10
PAINT STEP(0, 0), 2, 10
```
  
<br>



##### Example 2: Routine to check a DRAW string to make sure that the drawn shape is fully closed so that a PAINT does not "leak".
```vb
SCREEN 12
drw$ = "C15S20R9D4R6U3R3D3R7U5H3U2R9D3G2D6F1D3F5L10D1G1L4H2L7G2L3H2L3U8L2U5R1BF4"

FOR i = 1 TO LEN(drw$)
tmp$ = UCASE$(MID$(drw$, i, 1))
check = 1
SELECT CASE tmp$
CASE "U": ver = -1: hor = 0
CASE "D": ver = 1: hor = 0
CASE "E": ver = -1: hor = 1
CASE "F": ver = 1: hor = 1
CASE "G": ver = 1: hor = -1
CASE "H": ver = -1: hor = -1
CASE "L": ver = 0: hor = -1
CASE "R": ver = 0: hor = 1
CASE ELSE: check = 0
END SELECT
IF check THEN
snum$ = ""
FOR j = i + 1 TO i + 4 'set for up to 4 digits and spaces
IF j > LEN(drw$) THEN EXIT FOR
n$ = MID$(drw$, j, 1)
num = ASC(n$)
IF (num > 47 AND num < 58) OR num = 32 THEN
snum$ = snum$ + n$
ELSE: EXIT FOR
END IF
NEXT
vertical = vertical + (ver * VAL(snum$))
horizont = horizont + (hor * VAL(snum$))
END IF
PRINT tmp$, horizont, vertical
'SLEEP
NEXT
PSET (300, 300): DRAW drw$
```
  
<br>



##### Example 3: Tiling using PAINT to create a red brick pattern inside a yellow border:
```vb
DIM Row$(1 TO 8)
SCREEN 12

'make red-brick wall
Row$(1) = CHR$(&H0) + CHR$(&H0) + CHR$(&HFE) + CHR$(&HFE)
Row$(2) = Row$(1)
Row$(3) = Row$(1)
Row$(4) = CHR$(&H0) + CHR$(&H0) + CHR$(&H0) + CHR$(&H0)
Row$(5) = CHR$(&H0) + CHR$(&H0) + CHR$(&HEF) + CHR$(&HEF)
Row$(6) = Row$(5)
Row$(7) = Row$(5)
Row$(8) = Row$(4)
Tile$ = Row$(1) + Row$(2) + Row$(3) + Row$(4) + Row$(5) + Row$(6) + Row$(7) + Row$(8)

LINE (59, 124)-(581, 336), 14, B 'yellow box border to paint inside
PAINT (320, 240), Tile$, 14 'paints brick tiles within yellow border
```
  
<br>



##### Example 4: Generating a tiling pattern for PAINT from DATA statements:
```vb
ptndata:
DATA "c4444444"
DATA "c4444444"
DATA "cccccccc"
DATA "444c4444"
DATA "444c4444"
DATA "444c4444"
DATA "cccccccc"
DATA "c4444444"
DATA ---

RESTORE ptndata: ptn$ = loadpattern$

SCREEN 7
DRAW "c15l15f10g10r30g10f10l50u80r100m160,100"
PAINT (160, 90), ptn$, 15

FUNCTION loadpattern$
DIM quad(0 TO 3) AS INTEGER
res$ = ""
DO
READ row$
IF LEFT$(row$, 3) = "---" THEN EXIT DO
FOR x = 0 TO 7
pixel = VAL("&h" + MID$(row$, x + 1, 1))
FOR bit = 0 TO 3
IF pixel AND 2 ^ bit THEN
quad(bit) = quad(bit) OR (2 ^ (7 - x))
END IF
NEXT
NEXT
FOR i = 0 TO 3
res$ = res$ + CHR$(quad(i))
quad(i) = 0
NEXT
LOOP
loadpattern$ = res$
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PSET](PSET.md) , [PRESET](PRESET.md)
* [CIRCLE](CIRCLE.md) , [LINE](LINE.md) , [DRAW](DRAW.md)
* [SCREEN](SCREEN.md) , [CHR&dollar;](CHR&dollar;.md)
</blockquote>
