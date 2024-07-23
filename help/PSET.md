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


## [PSET](PSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PSET)
---
<blockquote>

### The PSET grahics SCREEN statement sets a pixel to a coordinate with a default or designated color attribute.

</blockquote>

#### SYNTAX

<blockquote>

`PSET [STEP] ( column% , row% ) [, colorAttribute ]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Using PSET to locate and color a DRAW statement.
```vb
SCREEN 12
PSET(100, 100), 12
DRAW "U20 R20 D20 L20"
```
  
<br>



##### Example 2: Magnifying a box portion of a Mandelbrot image with PSET
```vb
DEFSTR A-Z
DIM red(15) AS INTEGER, green(15) AS INTEGER, blue(15) AS INTEGER
DIM i AS INTEGER
SCREEN 12
FOR i = 0 TO 15: READ red(i): NEXT
FOR i = 0 TO 15: READ green(i): NEXT
FOR i = 0 TO 15: READ blue(i): NEXT
FOR i = 0 TO 15: PALETTE i, 65536 * blue(i) + 256& * green(i) + red(i): NEXT
DATA 0,63,63,63,63,63,31, 0, 0,31,31,31,47,63,63,63
DATA 0, 0,15,31,47,63,63,63,63,31,15, 0, 0, 0, 0, 0
DATA 0, 0, 0, 0, 0, 0, 0, 0,31,63,63,63,63,63,42,21

DIM dmag AS INTEGER, dlogmag AS INTEGER
DIM a AS DOUBLE, b AS DOUBLE, mag AS DOUBLE
DIM dx AS INTEGER, dy AS INTEGER
DIM mx AS INTEGER, my AS INTEGER, mz AS INTEGER

dmag = 16
mag = 1

a = -.75
b = 0
DO
DIM limitx AS DOUBLE, limit AS INTEGER
DIM inc AS DOUBLE, left AS DOUBLE, top AS DOUBLE

limitx = 150 * (LOG(mag) + 1)
IF limitx > 32767 THEN limitx = 32767
limit = INT(limitx)
inc = .004 / mag
left = a - inc * 319
top = b + inc * 239
CLS

DIM yy AS INTEGER, xx AS INTEGER
DIM x AS DOUBLE, y AS DOUBLE, z AS INTEGER

FOR yy = 0 TO 479
y = top - inc * yy
FOR xx = 0 TO 639
x = left + inc * xx
z = mandel(x, y, limit)
IF z < limit THEN PSET (xx, yy), 1 + z MOD 15
IF INKEY$ = CHR$(27) THEN SYSTEM
NEXT
NEXT
mz = 0
CALL readmouse(mx, my, mz)
DO
dx = 319 \ dmag
dy = 239 \ dmag
CALL readmouse(mx, my, mz)
IF mz THEN EXIT DO
CALL rectangle(mx - dx, my - dy, mx + dx, my + dy)
DIM t AS DOUBLE
t = TIMER
WHILE t = TIMER
key$ = INKEY$
SELECT CASE key$
CASE CHR$(27)
SYSTEM
CASE CHR$(0) + CHR$(72)
dmag = dmag \ 2
IF dmag < 2 THEN dmag = 2
CASE CHR$(0) + CHR$(80)
dmag = dmag * 2
IF dmag > 128 THEN dmag = 128
END SELECT
WEND
CALL rectangle(mx - dx, my - dy, mx + dx, my + dy)
LOOP
a = a + inc * (mx - 319): b = b - inc * (my - 239)
IF (mz = 1) THEN mag = dmag * mag ELSE mag = mag / dmag
IF (mag < 1) THEN mag = 1
LOOP

FUNCTION mandel% (x AS DOUBLE, y AS DOUBLE, limit AS INTEGER)
DIM a AS DOUBLE, b AS DOUBLE, t AS DOUBLE
DIM n AS INTEGER
n = 0: a = 0: b = 0
DO
t = a * a - b * b + x
b = 2 * a * b + y: a = t
n = n + 1
LOOP UNTIL a * a + b * b > 4 OR n > limit
mandel = n
END FUNCTION

SUB readmouse (x AS INTEGER, y AS INTEGER, z AS INTEGER)
z=0
DO
if _MOUSEBUTTON(1) THEN z = z OR 1
if _MOUSEBUTTON(2) THEN z = z OR 2
if _MOUSEBUTTON(3) THEN z = z OR 4
LOOP UNTIL _MOUSEINPUT=0
x=_MOUSEX
y=_MOUSEY
END SUB

SUB rectangle (x1 AS INTEGER, y1 AS INTEGER, x2 AS INTEGER, y2 AS INTEGER)
DIM i AS INTEGER, j AS INTEGER
FOR i = x1 TO x2
j = POINT(i, y1)
PSET (i, y1), j XOR 15
j = POINT(i, y2)
PSET (i, y2), j XOR 15
NEXT
FOR i = y1 TO y2
j = POINT(x1, i)
PSET (x1, i), j XOR 15
j = POINT(x2, i)
PSET (x2, i), j XOR 15
NEXT
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRESET](PRESET.md) , [CIRCLE](CIRCLE.md) , [LINE](LINE.md)
* [COLOR](COLOR.md) , [POINT](POINT.md)
* [PUT](PUT.md) (graphics statement)
* [GET](GET.md) (graphics statement)
* Text Using Graphics
</blockquote>
