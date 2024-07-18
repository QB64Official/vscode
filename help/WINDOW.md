## WINDOW
---

### The WINDOW command scales the graphics coordinate system of the current _DEST image, optionally inverting the direction of the vertical axis. Any coordinates used in drawing commands made to the image are scaled such that the image seems have have the dimensions requested.

#### SYNTAX

`WINDOW [ [ SCREEN ] ( x1! , y1! ) - ( x2! , y2! )]`

#### PARAMETERS


#### DESCRIPTION


#### EXAMPLES
##### Demonstrate a circle's radius only matching the scaling in the horizontal direction by comparing against a box:
```vb
SCREEN _NEWIMAGE(640, 480, 32) 'Not a square image
WINDOW SCREEN (0, 0)-(10, 10) 'SCREEN keeps the axis direction the same
LINE (4, 4)-(6, 6), _RGB32(255, 0, 0), BF 'Red square centred on (5, 5); will be stretched into a rectangle
CIRCLE (5, 5), 1, _RGB32(0, 255, 0) 'Green circle at (5, 5) with radius 1
```
  


#### SEE ALSO
* [PMAP](./PMAP.md)
* [VIEW](./VIEW.md)
* [VIEW](./VIEW.md) [PRINT](./PRINT.md)
