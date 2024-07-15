# PRESET

The **PRESET** graphic [SCREEN](SCREEN.md) statement turns a pixel at a coordinate to the background color or a designated color attribute.

  

## Syntax

**PRESET** [STEP]**(***column%*, *row%***)**[, colorAttribute]
  

*[Parameters](Parameters.md):*

* Can use [STEP](STEP.md) when relative graphics coordinates are required.
* *column* and *row* coordinates can be literal ot variable [INTEGER](INTEGER.md) values which can be offscreen.
* If the *colorAttribute* is omitted, PRESET will use the current [destination](destination.md) page's [_BACKGROUNDCOLOR](_BACKGROUNDCOLOR.md).

  

*Usage:*

* Color attributes are limited to those available in the [SCREEN](SCREEN.md) mode used. [PSET](PSET.md) can be used to adopt previously used colors.
* Any color value other than 0 will be white in monochrome [SCREEN](SCREEN.md) modes 2 and 11 where the [COLOR](COLOR.md) statement cannot be used.
* PRESET can invisibly locate other graphics objects like [CIRCLEs](CIRCLEs.md) and add color to subsequent graphic objects and [DRAW](DRAW.md) when used.
* The PRESET action can be used in a graphics [PUT](PUT.md) "PUT (graphics statement)") to produce a color inverted image on any background. See Example 2.
* The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md) relative coordinates.
* **PRESET can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only!**

  

*Example 1:* Using PRESET to locate a [DRAW](DRAW.md) statement that draws a box that is bright red.

``` SCREEN 12 PRESET(100, 100) [DRAW](DRAW.md) "C12 U20 R20 D20 L20"  
```

*Explanation:* The [DRAW](DRAW.md) string required a color designation as PRESET defaulted to the black background color.
  

*Example 2:* Displays the flags of countries that use simple horizontal or vertical color blocks with a highlighted arrow key menu.

``` [DIM](DIM.md) [SHARED](SHARED.md) c$(21), x$(21), gg%(477)  ARRAY SETUP SELECTION TERMINATE  [END](END.md)  [SUB](SUB.md) ARRAY c$(1) = "Armenia H040914" c$(2) = "Austria H041504" c$(3) = "Belgium V001404" c$(4) = "Bulgaria H150204" c$(5) = "Chad V011404" c$(6) = "C“te D'Ivoire V061502" c$(7) = "Estonia H090015" c$(8) = "France V011504" c$(9) = "Germany H000414" c$(10) = "Hungary H041502" c$(11) = "Ireland V021506" c$(12) = "Italy V021504" c$(13) = "Lithuania H140204" c$(14) = "Luxembourg H041509" c$(15) = "Mali V021404" c$(16) = "Netherlands H041501" c$(17) = "Nigeria V021502" c$(18) = "Romania V091404" c$(19) = "Russia H150104" c$(20) = "Sierra Leone H021509" c$(21) = "Yemen H041500" [END SUB](END SUB.md)  [SUB](SUB.md) DISPLAY.FLAG (calc%) f% = [VAL](VAL.md)([MID$](MID$.md) "MID$ (function)")(x$(calc%), 2, 2)) s% = [VAL](VAL.md)([MID$](MID$.md) "MID$ (function)")(x$(calc%), 4, 2)) t% = [VAL](VAL.md)([MID$](MID$.md) "MID$ (function)")(x$(calc%), 6, 2))  [IF](IF.md) [LEFT$](LEFT$.md)(x$(calc%), 1) = "V" [THEN](THEN.md)   [LINE](LINE.md) (120, 225)-(253, 465), f%, BF   [LINE](LINE.md) (254, 225)-(385, 465), s%, BF   [LINE](LINE.md) (386, 225)-(519, 465), t%, BF [END IF](END IF.md)  [IF](IF.md) [LEFT$](LEFT$.md)(x$(calc%), 1) = "H" [THEN](THEN.md)   [LINE](LINE.md) (120, 225)-(519, 305), f%, BF   [LINE](LINE.md) (120, 306)-(519, 386), s%, BF   [LINE](LINE.md) (120, 387)-(519, 465), t%, BF [END IF](END IF.md) [END SUB](END SUB.md)  [SUB](SUB.md) SELECTION 'menu selection using arrow keys x% = 2: y% = 4  DO   [WHILE](WHILE.md) (x% <> prevx% [OR](OR.md) "OR (boolean)") y% <> prevy%) [AND](AND.md) "AND (boolean)") k$ <> [CHR$](CHR$.md)(27)     k$ = [INKEY$](INKEY$.md)     x% = x% + (k$ = ([CHR$](CHR$.md)(0) + "K") [AND](AND.md) "AND (boolean)") x% > 1) + [ABS](ABS.md)(k$ = ([CHR$](CHR$.md)(0) + "M") [AND](AND.md) "AND (boolean)") x% < 3)     y% = y% + (k$ = ([CHR$](CHR$.md)(0) + "H") [AND](AND.md) "AND (boolean)") y% > 1) + [ABS](ABS.md)(k$ = ([CHR$](CHR$.md)(0) + "P") [AND](AND.md) "AND (boolean)") y% < 7)     calc% = (x% - 1) * 7 + y%: [LOCATE](LOCATE.md) 14, 18: [PRINT](PRINT.md) c$(calc%); [SPACE$](SPACE$.md)(10)     x1% = 140 + (x% - 1) * 128     x2% = x1% + [LEN](LEN.md)(c$(calc%)) * 8 + 7     y1% = 48 + y% * 16     [IF](IF.md) x1% <> prevx1% [OR](OR.md) "OR (boolean)") y1% <> prevy1% [THEN](THEN.md)       [IF](IF.md) g% [THEN](THEN.md) [PUT](PUT.md) "PUT (graphics statement)")(prevx1%, prevy1%), gg%(), [PSET](PSET.md)       [GET](GET.md) "GET (graphics statement)")(x1%, y1%)-(x2%, y1% + 16), gg%(): g% = 1       [PUT](PUT.md) "PUT (graphics statement)")(x1%, y1%), gg%(), PRESET       prevx1% = x1%: prevx2% = x2%: prevy1% = y1%       DISPLAY.FLAG calc%     [END IF](END IF.md)   [WEND](WEND.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) k$ = [CHR$](CHR$.md)(27) [END SUB](END SUB.md)  [SUB](SUB.md) SETUP [SCREEN](SCREEN.md) 12 [COLOR](COLOR.md) 6 c% = 1  [FOR](FOR.md) x% = 11 [TO](TO.md) 50 [STEP](STEP.md) 16   [FOR](FOR.md) y% = 1 [TO](TO.md) 7     x$(c%) = [RIGHT$](RIGHT$.md)(c$(c%), 7)     c$(c%) = [RTRIM$](RTRIM$.md)([LEFT$](LEFT$.md)(c$(c%), [LEN](LEN.md)(c$(c%)) - 7))     [LOCATE](LOCATE.md) y% + 4, x% + 8: [PRINT](PRINT.md) c$(c%)     c% = c% + 1 [NEXT](NEXT.md) y%, x%  [COLOR](COLOR.md) 11: [LOCATE](LOCATE.md) 3, 20: [PRINT](PRINT.md) "Use the Cursor Keys to Select a Country:" [LINE](LINE.md) (119, 224)-(520, 466), 7, B [END SUB](END SUB.md)  [SUB](SUB.md) TERMINATE [FOR](FOR.md) c% = 1 [TO](TO.md) 219   [LINE](LINE.md) (116 + c%, 29 + c%)-(523 - c%, 469 - c%), 0, B [NEXT](NEXT.md) [END SUB](END SUB.md)  
```

*Explanation:* Using the [PUT](PUT.md) "PUT (graphics statement)") PRESET action highlights the menu selection in graphic screen modes by returning a negative image.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)")
* [CIRCLE](CIRCLE.md), [LINE](LINE.md), [PSET](PSET.md)

  
