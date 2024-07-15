# LINE

The LINE statement is used in graphic [SCREEN](SCREEN.md) modes to create lines or boxes.

  

## Syntax

LINE [STEP] [**(***column1***,** *row1***)**]**-**[STEP] **(***column2*, *row2***),** *color*[, [{B|BF}], *style%*]
  

## Parameters

* The [STEP](STEP.md) keyword make *column* and *row* coordinates relative to the previously coordinates set by any graphic statement.
* The optional parameters (*column1*, *row1*) set the line's starting point.
* The dash and second coordinate parameters (*column2*, *row2*) must be designated to complete the line or box.
* The [INTEGER](INTEGER.md) *color* attribute or [LONG](LONG.md) [_RGB32](_RGB32.md) 32 bit color value sets the drawing color. If omitted, the current [destination](destination.md) page's [_DEFAULTCOLOR](_DEFAULTCOLOR.md) is used.
* Optional **B** keyword creates a rectangle (**b**ox) using the start and end coordinates as diagonal corners. **BF** creates a **b**ox **f**illed.
* The *style%* signed [INTEGER](INTEGER.md) value sets a dotted pattern to draw the line or rectangle outline.

  

## Description

* Creates a colored line between the given coordinates. Can be drawn partially off screen.
* **B** creates a box outline with each side parallel to the program screen sides. **BF** creates a filled box.
* *style%* can be used to create a dotted pattern to draw the line.
	+ **B** can be used with a *style%* to draw the rectangle outline using the desired pattern.
	+ **BF** ignores the *style%* parameter. See examples 2, 3 and 4 below.
* The graphic cursor is set to the center of the program window on program start. Using the [STEP](STEP.md) keyword makes the coordinates relative to the current graphic cursor.
* LINE **can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.**

  

## Examples

*Example 1:* Following one line with another by omitting the second line's first coordinate parameter bracket entirely:

``` [SCREEN](SCREEN.md) 12  LINE (100, 100)-(200, 200), 10    'creates a line LINE -(400, 200), 12              'creates a second line from end of first  [END](END.md)  
```

*Explanation:* The full equivalent LINE statement would be: **LINE(200, 200)-(400, 200), 12**
  

*Example 2:* Creating styled lines and boxes with the LINE statement. Different style values create different dashed line spacing.

``` [SCREEN](SCREEN.md) 12  LINE (100, 100)-(300, 300), 10, , 63    'creates a styled line LINE (100, 100)-(300, 300), 12, B, 255  'creates styled box shape  [END](END.md)  
```

*Explanation:* The first diagonal dashed green line bisects the red dashed square from Top Left to Bottom Right Corners.
  

*Example 3:* The *style* value sets each 16 pixel line section as the value's bits are set on or off:

``` [SCREEN](SCREEN.md) 13 [_FULLSCREEN](_FULLSCREEN.md) 'required in QB64 only [_DELAY](_DELAY.md) 5 [FOR](FOR.md) i% = 1 [TO](TO.md) 2 ^ 15 'use exponential value instead of -32768     [COLOR](COLOR.md) 15:[LOCATE](LOCATE.md) 10, 5: [PRINT](PRINT.md) i%;     LINE (10, 60)-(300, 60), 0 'erase previous lines     LINE (10, 60)-(300, 60), 12, , i%     tmp$ = ""     [FOR](FOR.md) b% = 15 [TO](TO.md) 0 [STEP](STEP.md) -1 'create binary text value showing bits on as █, off as space         [IF](IF.md) i% [AND](AND.md) 2 ^ b% [THEN](THEN.md) tmp$ = tmp$ + [CHR$](CHR$.md)(219) [ELSE](ELSE.md) tmp$ = tmp$ + [SPACE$](SPACE$.md)(1)     [NEXT](NEXT.md)     [COLOR](COLOR.md) 12:[LOCATE](LOCATE.md) 10, 20: [PRINT](PRINT.md) tmp$;     [IF](IF.md) [INKEY$](INKEY$.md) <> "" [THEN](THEN.md) [EXIT](EXIT.md) [FOR](FOR.md) 'any key exit     [_DELAY](_DELAY.md) .001 'set delay time as required [NEXT](NEXT.md)  
```

*Explanation:* The *style* value's Most Significant Bit (MSB) is set to the left with LSB on right as 16 text blocks are set on or off.
  

*Example 4:* Using [binary code](binary code.md) to design a style pattern:

``` [SCREEN](SCREEN.md) 12  LINE (100, 100)-(300, 100), 10, , &B0000111100001111 '16-bits LINE (100, 110)-(300, 110), 11, , &B0011001100110011 LINE (100, 120)-(300, 120), 12, , &B0101010101010101 LINE (100, 130)-(300, 130), 13, , &B1000100010001000  
```

*Explanation:* The binary pattern created with 0s and 1s using the [&B](&B.md) number prefix define the pattern to draw the colored lines.
  

## See also

* [SCREEN](SCREEN.md), [COLOR](COLOR.md)
* [DRAW](DRAW.md), [CIRCLE](CIRCLE.md), [STEP](STEP.md)
* [PSET](PSET.md), [PRESET](PRESET.md)
* [AND](AND.md), [OR](OR.md) (logical operators)

  
