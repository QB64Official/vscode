# PAINT

The PAINT statement is used to fill a delimited area in a graphic screen mode with color.

  

## Syntax

PAINT [**STEP**] (*column%*, *row%*), *fillColor*[, *borderColor%*]
  

## Parameters

* Can use the [STEP](STEP.md) keyword for relative coordinate placements. See example 1 below.
* *fillColor* is an [INTEGER](INTEGER.md) or [LONG](LONG.md) 32-bit value to paint the inside of an object. Colors are limited to the [SCREEN](SCREEN.md) mode used.
* Optional [INTEGER](INTEGER.md) or [LONG](LONG.md) 32-bit *borderColor%* is the color of the border of the shape to be filled when this is different from the fill color.
* *fillColor* can be a string made up of a sequence of [CHR$](CHR$.md) values, each representing a tiling pattern to fill the shape. See Example 3 below.

  

## Description

* Graphic *column%* and *row%* [INTEGER](INTEGER.md) pixel coordinates should be inside of a fully closed "shape", whether it's a rectangle, circle or custom-drawn shape using [DRAW](DRAW.md).
* If the coordinates passed to the PAINT statement are on a pixel that matches the border colors, no filling will occur.
* If the shape's border isn't continuous, the "paint" will "leak".
* If the shape is not totally closed, every color except the border color may be painted over.
* [DRAW](DRAW.md) shapes can be filled using the string "P *fillColor*, *borderColor*". Use a "B" blind move to offset from the shape's border.

  

## Examples

*Example 1:* Painting a [CIRCLE](CIRCLE.md) immediately after it is drawn using [STEP](STEP.md)(0, 0) to paint from the circle's center point.

``` [SCREEN](SCREEN.md) 12 x = 200: y = 200 [CIRCLE](CIRCLE.md) (x, y), 100, 10 PAINT [STEP](STEP.md)(0, 0), 2, 10  
```

*Results:* A circle located at x and y with a bright green border filled in dark green. The last coordinate used was the circle's center point and PAINT used it also with the [STEP](STEP.md) relative coordinates being zero.
  

*Example 2:* Routine to check a [DRAW](DRAW.md) string to make sure that the drawn shape is fully closed so that a PAINT does not "leak".

``` [SCREEN](SCREEN.md) 12 drw$ = "C15S20R9D4R6U3R3D3R7U5H3U2R9D3G2D6F1D3F5L10D1G1L4H2L7G2L3H2L3U8L2U5R1BF4"  [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(drw$)   tmp$ = [UCASE$](UCASE$.md)([MID$](MID$.md) "MID$ (function)")(drw$, i, 1))   check = 1   [SELECT CASE](SELECT CASE.md) tmp$     [CASE](CASE.md) "U": ver = -1: hor = 0     [CASE](CASE.md) "D": ver = 1: hor = 0     [CASE](CASE.md) "E": ver = -1: hor = 1     [CASE](CASE.md) "F": ver = 1: hor = 1     [CASE](CASE.md) "G": ver = 1: hor = -1     [CASE](CASE.md) "H": ver = -1: hor = -1     [CASE](CASE.md) "L": ver = 0: hor = -1     [CASE](CASE.md) "R": ver = 0: hor = 1     [CASE ELSE](CASE ELSE.md): check = 0   [END SELECT](END SELECT.md)   [IF](IF.md) check [THEN](THEN.md)     snum$ = ""     [FOR](FOR.md) j = i + 1 [TO](TO.md) i + 4 'set for up to 4 digits and spaces       [IF](IF.md) j > [LEN](LEN.md)(drw$) [THEN](THEN.md) [EXIT](EXIT.md) [FOR](FOR.md)       n$ = [MID$](MID$.md) "MID$ (function)")(drw$, j, 1)       num = [ASC](ASC.md) "ASC (function)")(n$)       [IF](IF.md) (num > 47 [AND](AND.md) "AND (boolean)") num < 58) [OR](OR.md) "OR (boolean)") num = 32 [THEN](THEN.md)         snum$ = snum$ + n$       [ELSE](ELSE.md): [EXIT](EXIT.md) [FOR](FOR.md)       [END IF](END IF.md)     [NEXT](NEXT.md)     vertical = vertical + (ver * [VAL](VAL.md)(snum$))     horizont = horizont + (hor * [VAL](VAL.md)(snum$))   [END IF](END IF.md)   [PRINT](PRINT.md) tmp$, horizont, vertical   '[SLEEP](SLEEP.md) [NEXT](NEXT.md) [PSET](PSET.md) (300, 300): [DRAW](DRAW.md) drw$  
```

*Explanation:* If the [DRAW](DRAW.md) string is fully closed, the end values should each be 0. In the example, the proper result should be 4, 4 as there is a BF4 offset for PAINT which cannot be on a border. The result is 4, 5 because the shape is not completely closed.
  

*Example 3:* Tiling using PAINT to create a red brick pattern inside a yellow border:

``` [DIM](DIM.md) Row$(1 [TO](TO.md) 8) [SCREEN](SCREEN.md) 12     'make red-brick wall     Row$(1) = [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)FE) + [CHR$](CHR$.md)([&H](&H.md)FE)     Row$(2) = Row$(1)     Row$(3) = Row$(1)     Row$(4) = [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)0)     Row$(5) = [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)0) + [CHR$](CHR$.md)([&H](&H.md)EF) + [CHR$](CHR$.md)([&H](&H.md)EF)     Row$(6) = Row$(5)     Row$(7) = Row$(5)     Row$(8) = Row$(4)     Tile$ = Row$(1) + Row$(2) + Row$(3) + Row$(4) + Row$(5) + Row$(6) + Row$(7) + Row$(8)      [LINE](LINE.md) (59, 124)-(581, 336), 14, B 'yellow box border to paint inside     PAINT (320, 240), Tile$, 14 'paints brick tiles within yellow border  
```

  

*Example 4:* Generating a tiling pattern for PAINT from [DATA](DATA.md) statements:

``` ptndata: [DATA](DATA.md) "c4444444" [DATA](DATA.md) "c4444444" [DATA](DATA.md) "cccccccc" [DATA](DATA.md) "444c4444" [DATA](DATA.md) "444c4444" [DATA](DATA.md) "444c4444" [DATA](DATA.md) "cccccccc" [DATA](DATA.md) "c4444444" [DATA](DATA.md) ---  [RESTORE](RESTORE.md) ptndata: ptn$ = loadpattern$  [SCREEN](SCREEN.md) 7 [DRAW](DRAW.md) "c15l15f10g10r30g10f10l50u80r100m160,100" PAINT (160, 90), ptn$, 15  [FUNCTION](FUNCTION.md) loadpattern$     [DIM](DIM.md) quad(0 TO 3) [AS](AS.md) [INTEGER](INTEGER.md)     res$ = ""     [DO](DO.md)         [READ](READ.md) row$         [IF](IF.md) [LEFT$](LEFT$.md)(row$, 3) = "---" [THEN](THEN.md) [EXIT](EXIT.md) [DO](DO.md)         [FOR](FOR.md) x = 0 [TO](TO.md) 7             pixel = [VAL](VAL.md)("&h" + [MID$](MID$.md) "MID$ (function)")(row$, x + 1, 1))             [FOR](FOR.md) bit = 0 [TO](TO.md) 3                 [IF](IF.md) pixel [AND](AND.md) 2 ^ bit [THEN](THEN.md)                     quad(bit) = quad(bit) [OR](OR.md) (2 ^ (7 - x))                 [END](END.md) [IF](IF.md)             [NEXT](NEXT.md)         [NEXT](NEXT.md)         [FOR](FOR.md) i = 0 [TO](TO.md) 3             res$ = res$ + [CHR$](CHR$.md)(quad(i))             quad(i) = 0         [NEXT](NEXT.md)     [LOOP](LOOP.md)     loadpattern$ = res$ [END](END.md) [FUNCTION](FUNCTION.md)  
```

*Code provided by collaborator <https://github.com/NEONTEC75>*
  

## See also

* [PSET](PSET.md), [PRESET](PRESET.md)
* [CIRCLE](CIRCLE.md), [LINE](LINE.md), [DRAW](DRAW.md)
* [SCREEN](SCREEN.md), [CHR$](CHR$.md)

  
