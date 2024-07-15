# PSET

The **PSET** grahics [SCREEN](SCREEN.md) statement sets a pixel to a coordinate with a default or designated color attribute.

  

## Syntax

**PSET** [STEP]**(***column%*, *row%***)**[, *colorAttribute*]
  

*[Parameters](Parameters.md):*

* Can use [STEP](STEP.md) relative graphics coordinates from a previous graphic object.
* *Column* and *row* can be literal or variable [INTEGER](INTEGER.md) coordinates values which can be offscreen.
* If the *colorAttribute* is omitted, PSET will use the current [destination](destination.md) page's _DEFAULTCOLOR.

  

*Usage:*

* *Color attributes* are limited to the SCREEN mode used. Any color value other than 0 will be white in [SCREENs](SCREENs.md) 2 or 11.
* PSET can locate other graphics objects and color [DRAW](DRAW.md) statements.
* The PSET action can be used in a graphics [PUT](PUT.md) "PUT (graphics statement)") to produce an identical image on any background.
* The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md) relative coordinates.
* **PSET can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only! (Or in any _NEWIMAGE(x, y, 0) screens which are text only as well.)**

  

*Example:* Using PSET to locate and color a [DRAW](DRAW.md) statement.

``` SCREEN 12 PSET(100, 100), 12 [DRAW](DRAW.md) "U20 R20 D20 L20"  
```

*Screen results:* A drawn box that is bright red.
  

*Example 2:* Magnifying a box portion of a Mandelbrot image with PSET

``` [DEFSTR](DEFSTR.md) A-Z [DIM](DIM.md) red(15) [AS](AS.md) [INTEGER](INTEGER.md), green(15) [AS](AS.md) [INTEGER](INTEGER.md), blue(15) [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) i [AS](AS.md) [INTEGER](INTEGER.md) [SCREEN](SCREEN.md) 12 [FOR](FOR.md) i = 0 [TO](TO.md) 15: [READ](READ.md) red(i): [NEXT](NEXT.md) [FOR](FOR.md) i = 0 [TO](TO.md) 15: [READ](READ.md) green(i): [NEXT](NEXT.md) [FOR](FOR.md) i = 0 [TO](TO.md) 15: [READ](READ.md) blue(i): [NEXT](NEXT.md) [FOR](FOR.md) i = 0 [TO](TO.md) 15: [PALETTE](PALETTE.md) i, 65536 * blue(i) + 256& * green(i) + red(i): [NEXT](NEXT.md) [DATA](DATA.md) 0,63,63,63,63,63,31, 0, 0,31,31,31,47,63,63,63 [DATA](DATA.md) 0, 0,15,31,47,63,63,63,63,31,15, 0, 0, 0, 0, 0 [DATA](DATA.md) 0, 0, 0, 0, 0, 0, 0, 0,31,63,63,63,63,63,42,21  [DIM](DIM.md) dmag [AS](AS.md) [INTEGER](INTEGER.md), dlogmag [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) a [AS](AS.md) [DOUBLE](DOUBLE.md), b [AS](AS.md) [DOUBLE](DOUBLE.md), mag [AS](AS.md) [DOUBLE](DOUBLE.md) [DIM](DIM.md) dx [AS](AS.md) [INTEGER](INTEGER.md), dy [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) mx [AS](AS.md) [INTEGER](INTEGER.md), my [AS](AS.md) [INTEGER](INTEGER.md), mz [AS](AS.md) [INTEGER](INTEGER.md)  dmag = 16 mag = 1  a = -.75 b = 0 DO   [DIM](DIM.md) limitx [AS](AS.md) [DOUBLE](DOUBLE.md), limit [AS](AS.md) [INTEGER](INTEGER.md)   [DIM](DIM.md) inc [AS](AS.md) [DOUBLE](DOUBLE.md), left [AS](AS.md) [DOUBLE](DOUBLE.md), top [AS](AS.md) [DOUBLE](DOUBLE.md)    limitx = 150 * ([LOG](LOG.md)(mag) + 1)   [IF](IF.md) limitx > 32767 [THEN](THEN.md) limitx = 32767   limit = [INT](INT.md)(limitx)   inc = .004 / mag   left = a - inc * 319   top = b + inc * 239   [CLS](CLS.md)    [DIM](DIM.md) yy [AS](AS.md) [INTEGER](INTEGER.md), xx [AS](AS.md) [INTEGER](INTEGER.md)   [DIM](DIM.md) x [AS](AS.md) [DOUBLE](DOUBLE.md), y [AS](AS.md) [DOUBLE](DOUBLE.md), z [AS](AS.md) [INTEGER](INTEGER.md)    [FOR](FOR.md) yy = 0 [TO](TO.md) 479     y = top - inc * yy     [FOR](FOR.md) xx = 0 [TO](TO.md) 639         x = left + inc * xx         z = mandel(x, y, limit)         [IF](IF.md) z < limit [THEN](THEN.md) PSET (xx, yy), 1 + z [MOD](MOD.md) 15         [IF](IF.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) [THEN](THEN.md) [SYSTEM](SYSTEM.md)     [NEXT](NEXT.md)   [NEXT](NEXT.md)   mz = 0   [CALL](CALL.md) readmouse(mx, my, mz)   DO     dx = 319 \ dmag     dy = 239 \ dmag     [CALL](CALL.md) readmouse(mx, my, mz)     [IF](IF.md) mz [THEN](THEN.md) [EXIT DO](EXIT DO.md)     [CALL](CALL.md) rectangle(mx - dx, my - dy, mx + dx, my + dy)     [DIM](DIM.md) t [AS](AS.md) [DOUBLE](DOUBLE.md)     t = [TIMER](TIMER.md) "TIMER (function)")     [WHILE](WHILE.md) t = [TIMER](TIMER.md) "TIMER (function)")       key$ = [INKEY$](INKEY$.md)       [SELECT CASE](SELECT CASE.md) key$         [CASE](CASE.md) [CHR$](CHR$.md)(27)           [SYSTEM](SYSTEM.md)         [CASE](CASE.md) [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(72)           dmag = dmag \ 2           [IF](IF.md) dmag < 2 [THEN](THEN.md) dmag = 2         [CASE](CASE.md) [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(80)           dmag = dmag * 2           [IF](IF.md) dmag > 128 [THEN](THEN.md) dmag = 128       [END SELECT](END SELECT.md)     [WEND](WEND.md)     [CALL](CALL.md) rectangle(mx - dx, my - dy, mx + dx, my + dy)   [LOOP](LOOP.md)   a = a + inc * (mx - 319): b = b - inc * (my - 239)   [IF](IF.md) (mz = 1) [THEN](THEN.md) mag = dmag * mag [ELSE](ELSE.md) mag = mag / dmag   [IF](IF.md) (mag < 1) [THEN](THEN.md) mag = 1 [LOOP](LOOP.md)  [FUNCTION](FUNCTION.md) mandel% (x [AS](AS.md) [DOUBLE](DOUBLE.md), y [AS](AS.md) [DOUBLE](DOUBLE.md), limit [AS](AS.md) [INTEGER](INTEGER.md))   [DIM](DIM.md) a [AS](AS.md) [DOUBLE](DOUBLE.md), b [AS](AS.md) [DOUBLE](DOUBLE.md), t [AS](AS.md) [DOUBLE](DOUBLE.md)   [DIM](DIM.md) n [AS](AS.md) [INTEGER](INTEGER.md)   n = 0: a = 0: b = 0   DO     t = a * a - b * b + x     b = 2 * a * b + y: a = t     n = n + 1   [LOOP](LOOP.md) [UNTIL](UNTIL.md) a * a + b * b > 4 [OR](OR.md) "OR (boolean)") n > limit   mandel = n [END FUNCTION](END FUNCTION.md)  [SUB](SUB.md) readmouse (x [AS](AS.md) [INTEGER](INTEGER.md), y [AS](AS.md) [INTEGER](INTEGER.md), z [AS](AS.md) [INTEGER](INTEGER.md)) z=0 DO if [_MOUSEBUTTON](_MOUSEBUTTON.md)(1) [THEN](THEN.md) z = z [OR](OR.md) "OR (boolean)") 1 if [_MOUSEBUTTON](_MOUSEBUTTON.md)(2) [THEN](THEN.md) z = z [OR](OR.md) "OR (boolean)") 2 if [_MOUSEBUTTON](_MOUSEBUTTON.md)(3) [THEN](THEN.md) z = z [OR](OR.md) "OR (boolean)") 4 [LOOP](LOOP.md) [UNTIL](UNTIL.md) [_MOUSEINPUT](_MOUSEINPUT.md)=0 x=[_MOUSEX](_MOUSEX.md) y=[_MOUSEY](_MOUSEY.md) [END SUB](END SUB.md)  [SUB](SUB.md) rectangle (x1 [AS](AS.md) [INTEGER](INTEGER.md), y1 [AS](AS.md) [INTEGER](INTEGER.md), x2 [AS](AS.md) [INTEGER](INTEGER.md), y2 [AS](AS.md) [INTEGER](INTEGER.md))   [DIM](DIM.md) i [AS](AS.md) [INTEGER](INTEGER.md), j [AS](AS.md) [INTEGER](INTEGER.md)   [FOR](FOR.md) i = x1 [TO](TO.md) x2     j = [POINT](POINT.md)(i, y1)     PSET (i, y1), j [XOR](XOR.md) "XOR (boolean)") 15     j = [POINT](POINT.md)(i, y2)     PSET (i, y2), j [XOR](XOR.md) "XOR (boolean)") 15   [NEXT](NEXT.md)   [FOR](FOR.md) i = y1 [TO](TO.md) y2     j = [POINT](POINT.md)(x1, i)     PSET (x1, i), j [XOR](XOR.md) "XOR (boolean)") 15     j = [POINT](POINT.md)(x2, i)     PSET (x2, i), j [XOR](XOR.md) "XOR (boolean)") 15   [NEXT](NEXT.md) [END SUB](END SUB.md)  
```

*Notes:* Left click, to zoom in on the rectangle. Right click, to zoom out. Up arrow makes the rectangle bigger and down arrow makes the rectangle smaller.
  

## See also

* [PRESET](PRESET.md), [CIRCLE](CIRCLE.md), [LINE](LINE.md)
* [COLOR](COLOR.md), [POINT](POINT.md)
* [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)")
* [Text Using Graphics](Text Using Graphics.md)

  
