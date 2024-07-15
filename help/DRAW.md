# DRAW

The DRAW statement uses a [STRING](STRING.md) expression to draw lines on the screen.

  

## Syntax

DRAW *drawString$*
  

## Description

* The *drawString$* can be DRAW instructions in quotation marks or a [STRING](STRING.md) variable using DRAW instructions.
* DRAW starting coordinates can be set using [PSET](PSET.md), [PRESET](PRESET.md), [CIRCLE](CIRCLE.md) or [LINE](LINE.md) ending positions.
* Other graphic objects can be located at or relative to the last DRAW position using [STEP](STEP.md).
* DRAW can inherit colors from other graphic statements such as [PSET](PSET.md), [LINE](LINE.md) and [CIRCLE](CIRCLE.md).
* Draw strings use letters followed by the number of pixels to move, an angle, coordinate or a color value.
* Draw strings are flexible with spacing. **Spacing is not required.** DRAW will look for a number value after a valid letter.
* DRAW statements are not case sensitive.
	+ "**B**" (blind) before a line move designates that the line move will be hidden. Use to offset from a "P" or [PAINT](PAINT.md) border.
	+ "**C** n" designates the color attribute or [_RGB](_RGB.md) [string](string.md) numerical color value to be used in the draw statement immediately after.
	+ "**M** x, y" can move to another coordinate area of the screen. When a + or - sign is used before a coordinate, it is a relative coordinate move similar to using the [STEP](STEP.md) graphics keyword. DRAW "M+=" + [VARPTR$](VARPTR$.md)(variable%)
	+ "**N**" before a line move designates that the graphic cursor will return to the starting position after the line is drawn.
	+ "**P** f [, b]" is used to [paint](paint.md) enclosed objects. f denotes the fill color and b the border color, if needed.
	+ "**S** n" changes the pixel move size of the lines. Default is 4 (1 pixel) minimum. "S8" would double the pixel line moves.
	+ "**X**" + [VARPTR$](VARPTR$.md)(value) can draw another substring.

* Certain letter designations create line moves on the SCREEN. Each move is followed by the number of pixels:
	+ "**D** n" draws a line vertically DOWN n pixels.
	+ "**E** n" draws a diagonal / line going UP and RIGHT n pixels each direction.
	+ "**F** n" draws a diagonal \ line going DOWN and RIGHT n pixels each direction.
	+ "**G** n" draws a diagonal / LINE going DOWN and LEFT n pixels each direction.
	+ "**H** n" draws a diagonal \ LINE going UP and LEFT n pixels each direction.
	+ "**L** n" draws a line horizontally LEFT n pixels.
	+ "**R** n" draws a line horizontally RIGHT n pixels.
	+ "**U** n" draws a line vertically UP n pixels.

* Angles are used to rotate all subsequent draw moves.
	+ "**A** n" can use values of 1 to 3 to rotate up to 3 90 degree(270) angles.
	+ **TA** n" can use any n angle from -360 to 0 to 360 to rotate a DRAW (Turn Angle). "TA0" resets to normal.
	+ When [VARPTR$](VARPTR$.md) is used, DRAW functions such as **TA** angles use an equal sign: "TA=" + VARPTR$(angle%)
* The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md) relative coordinates.
* **DRAW can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.**

  

## Examples

*Example 1:* Placing an octagon shape DRAW across the the screen using PSET.

```  SCREEN 12  octagon$ = "C12 R10 F10 D10 G10 L10 H10 U10 E10"  'create a DRAW string value  [SCREEN](SCREEN.md) 12  FOR i% = 1 TO 11    [PSET](PSET.md) (i% * 50, 100), 15    [_DELAY](_DELAY.md) .5         ' delay for demo    DRAW octagon$     ' DRAW the octagon using variable    [_DELAY](_DELAY.md) .5         ' delay for demo  NEXT i%  
```

*Explanation:* Once a DRAW string variable is created, it can be used to draw a shape throughout the program at any time.

  

*Example 2:* Creating an analog clock's hour markers using "TA=" + [VARPTR$](VARPTR$.md)(angle).

```  SCREEN 12  FOR angle = 0 TO 360 [STEP](STEP.md) 30             ' 360/12 hour circles = 30 degrees apart    PSET (175, 250), 6 ' stay at center point of clock    DRAW "TA=" + [VARPTR$](VARPTR$.md)(angle) + "BU100" ' move invisibly to set next circle's center point    [CIRCLE](CIRCLE.md) [STEP](STEP.md)(0, 0), 5, 12 ' circle placed at end of blind line    DRAW "P9, 12" ' paint inside of circle    [SLEEP](SLEEP.md) 1     ' slowed for demo only  NEXT  
```

*Explanation:* To place 12 circles in a circle each move is 30 degrees. PSET sets the center of the circular path every loop. TA moves counter-clockwise with positive degree angles. Once TA sets the angle a blind Up move is at that angle. The hour circles use the end point of the blind line as centers using the STEP relative coordinates of 0. After the circles are drawn, a draw "P" string paints the circle centers. DRAW paint strings use the last coordinate position also.

  

*Example 3:* Creating a moving second hand for the clock above (SCREEN 12). (See [TIME$](TIME$.md) example 1)

```  DO: sec$ = [RIGHT$](RIGHT$.md)([TIME$](TIME$.md), 2) ' get actual seconds from TIME$ function    degree$ = [STR$](STR$.md)([VAL](VAL.md)(sec$) * -6) ' 60 second moves. TA uses negative angles for clockwise moves    [PSET](PSET.md) (175, 250), 9 ' stay at clock center    DRAW "TA" + degree$ + "U90" ' up becomes TA directional line    DO: LOOP UNTIL RIGHT$(TIME$, 2) <> sec$ ' wait for a new second value    IF INKEY$ <> "" THEN [EXIT DO](EXIT DO.md) ' any key exit    PSET (175, 250), 0 ' set at clock center to erase line    DRAW "TA" + degree$ + "U90" ' erases old second hand line using color 0 from PSET  LOOP  
```

*Explanation:* The degrees to move from the original UP line move is calculated by dividing 360/60 seconds in a full rotation. That value of 6 is made negative to use TA correctly and multiplied by the [VALue](VALue.md) of seconds from the TIME$ function. The degree angle is converted by [STR$](STR$.md) to a string and added to the DRAW string using the [STRING](STRING.md) **concatenation +** operator. Do not use semicolons to create DRAW strings. Once the second hand is placed on the screen, a loop waits for the second value to change. It then erases the hand and it repeats the process again.

  

*Example 4:* Creating digital displays using DRAW format strings to create the LED segments. (See [SELECT EVERYCASE](SELECT EVERYCASE.md) example 5)

``` [SCREEN](SCREEN.md) 12 DO   [LOCATE](LOCATE.md) 1, 1: [INPUT](INPUT.md) "Enter a number 0 to 9: ", num   [CLS](CLS.md)   [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 0, 2, 3, 5 [TO](TO.md) 9: [PSET](PSET.md) (20, 20), 12       DRAW "E2R30F2G2L30H2BR5P12,12" 'top horiz   [END SELECT](END SELECT.md)    [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 0, 4 [TO](TO.md) 6, 8, 9: [PSET](PSET.md) (20, 20), 12       DRAW "F2D30G2H2U30E2BD5P12,12" 'left top vert   [END SELECT](END SELECT.md)    [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 0, 2, 6, 8: [PSET](PSET.md) (20, 54), 12       DRAW "F2D30G2H2U30E2BD5P12, 12" 'left bot vert   [END SELECT](END SELECT.md)    [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 2 [TO](TO.md) 6, 8, 9: [PSET](PSET.md) (20, 54), 12       DRAW "E2R30F2G2L30H2BR5P12, 12" 'middle horiz   [END SELECT](END SELECT.md)    [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 0 [TO](TO.md) 4, 7 [TO](TO.md) 9: [PSET](PSET.md) (54, 20), 12       DRAW "F2D30G2H2U30E2BD5P12,12" 'top right vert   [END SELECT](END SELECT.md)    [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 0, 1, 3 [TO](TO.md) 9: [PSET](PSET.md) (54, 54), 12       DRAW "F2D30G2H2U30E2BD5P12,12" 'bottom right vert   [END SELECT](END SELECT.md)    [SELECT CASE](SELECT CASE.md) num     [CASE](CASE.md) 0, 2, 3, 5, 6, 8: [PSET](PSET.md) (20, 88), 12       DRAW "E2R30F2G2L30H2BR5P12,12" 'bottom horiz   [END SELECT](END SELECT.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) num > 9  
```

*Explanation:* The DRAW strings can be used more than once with different [PSET](PSET.md) positions to create more digits.
  

*Example 5:* Using 32 bit or [_RGB](_RGB.md) color [string](string.md) values when using the DRAW C text statement

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 800, 12) [PRINT](PRINT.md) [_ALPHA](_ALPHA.md)(10), [_RED](_RED.md)(10), [_GREEN](_GREEN.md)(10), [_BLUE](_BLUE.md)(10)  [SLEEP](SLEEP.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 800, 32) 'comment out this line to use the non-32 bit screen mode 12 [PRINT](PRINT.md) [_ALPHA](_ALPHA.md)(10), [_RED](_RED.md)(10), [_GREEN](_GREEN.md)(10), [_BLUE](_BLUE.md)(10)  [PSET](PSET.md) (400, 400), 0 ' move to 320, 240... draw will start where pset leaves off c = 14 [DIM](DIM.md) k [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) k = [_RGB](_RGB.md)(80, 255, 80) [FOR](FOR.md) repeat = 1 [TO](TO.md) 16   [FOR](FOR.md) p = 0 [TO](TO.md) 359     c = c + 1: d = c / 14     DRAW "c" + [STR$](STR$.md)(k) + " ta" + [STR$](STR$.md)(p) + " bu " + [STR$](STR$.md)(d) + "l7 u7 r7 d7 bd " + [STR$](STR$.md)(d)   [NEXT](NEXT.md) p [NEXT](NEXT.md) repeat  
```

*Explanation:* DRAW strings will ignore spaces between letters and numbers so string trimming is not necessary.
  

## See also

* [LINE](LINE.md), [PSET](PSET.md), [PRESET](PRESET.md), [CIRCLE](CIRCLE.md)
* [PAINT](PAINT.md), [SCREEN](SCREEN.md)
* [COLOR](COLOR.md), [PLAY](PLAY.md)
* [TIME$](TIME$.md)

  
