# VARPTR$

**VARPTR$** is a memory function that returns a [STRING](STRING.md) representation of a variable's memory address value for use in a [DRAW](DRAW.md) or [PLAY](PLAY.md) statement.

  

## Syntax

string_value$ = VARPTR$(*variable*)
  

* Can use any [string](string.md) or numerical variable reference **existing** in memory.
* If the parameter value is from an array it must be dimensioned already. Cannot use fixed length string arrays.
* When using **numerical** *variable* values in [DRAW](DRAW.md) strings, use an = sign after the function letter. "TA=" + VARPTR$(*variable%*)
* Always use variable X as in "X" + VARPTR$(*string_variable$*) to [DRAW](DRAW.md) or [PLAY](PLAY.md) another [STRING](STRING.md) value.
* DRAW relative Moves use a + or - before the equal sign. EX: DRAW "M+=" + VARPTR$(x%) + ",-=" + VARPTR$(y%)

  

*Example 1:* How VARPTR$ reads consecutive values from memory.

``` [SCREEN](SCREEN.md) 2 [CLS](CLS.md) WIND$ = "r10 d7 l10 u7 br20"   'create draw string to be read by function ROW$ = "x"+VARPTR$(WIND$)+"x"+VARPTR$(WIND$)+"x"+VARPTR$(WIND$)+" x"+VARPTR$(WIND$)+"bl80 bd11" [LINE](LINE.md) (100, 50)-(200, 160), , B [DRAW](DRAW.md) "bm 115,52" [FOR](FOR.md) I = 1 [TO](TO.md) 10     [DRAW](DRAW.md) "x" + VARPTR$(ROW$) [NEXT](NEXT.md)  
```

*NOTE:* **GWBasic** allows **semicolons** to be used in the ROW$ definition, but QBasic and **QB64** MUST use **+** concatenation.
  

*Example 2:* Using the function to change a Turn Angle value using DRAW.

``` [SCREEN](SCREEN.md) 12                            'Demonstrates how string DRAW angles are used with TA [FOR](FOR.md) i = 0 [TO](TO.md) 360 [STEP](STEP.md) 30           'mark clock hours every 30 degrees   angle$ = [STR$](STR$.md)(i)                 'change degree value i to a string   [PSET](PSET.md) (175, 250), 6               'clock center   [DRAW](DRAW.md) "TA" + angle$ + "BU100"     'add string angle to Turn Angle and draw blind up   [CIRCLE](CIRCLE.md) [STEP](STEP.md)(0, 0), 5, 12         'place a circle at end of Up line   [DRAW](DRAW.md) "P9, 12"   [_DELAY](_DELAY.md) .5 [NEXT](NEXT.md)                             'Demonstrates how VARPTR$ is used with TA= [DO](DO.md): sec$ = [RIGHT$](RIGHT$.md)([TIME$](TIME$.md), 2)        'get current second value from time   degree = [VAL](VAL.md)(sec$) * -6          'use a negative value to Turn Angle clockwise   [PSET](PSET.md) (175, 250), 9               'clock center   [DRAW](DRAW.md) "TA=" + VARPTR$(degree) + "U90"  'VARPTR$ value requires = in DRAW   [DO](DO.md): [_LIMIT](_LIMIT.md) 30: [LOOP](LOOP.md) [UNTIL](UNTIL.md) [RIGHT$](RIGHT$.md)([TIME$](TIME$.md), 2) <> sec$  'loop until seconds value changes   [IF](IF.md) [INKEY$](INKEY$.md) <> "" [THEN](THEN.md) [EXIT DO](EXIT DO.md)   [PSET](PSET.md) (175, 250), 0   [DRAW](DRAW.md) "TA=" + VARPTR$(degree) + "U90"  'erase previous second hand draw [LOOP](LOOP.md)  
```

*Explanation:* When the VARPTR$ value is used in DRAW, **=** MUST be used to pass the value to the draw! Negative Turn Angle values move clockwise and each second moves the hand 6 degrees. **TA** uses actual degree angles starting at 0 or noon.
  

*Example 3:* Comparing DRAW moves using VARPTR$ and [STR$](STR$.md) values.

``` [SCREEN](SCREEN.md) 12 [PSET](PSET.md) (200, 200), 12 [CIRCLE](CIRCLE.md) [STEP](STEP.md)(0, 0), 5, 10 A = 100: B = 100 [DRAW](DRAW.md) "M+=" + VARPTR$(A) + ",-=" + VARPTR$(B)  [PSET](PSET.md) (400, 400), 10 [CIRCLE](CIRCLE.md) [STEP](STEP.md)(0, 0), 5, 12 C = 100: D = -100 [DRAW](DRAW.md) "M+" + [STR$](STR$.md)(C) + "," + [STR$](STR$.md)(D) 'must add + for positive relative moves [END](END.md)  
```

*Explanation:* A negative STR$ value will move the DRAW relatively where VARPTR$ won't without the sign before the equal.
  

## See also

* [VARPTR](VARPTR.md), [STR$](STR$.md)
* [DRAW](DRAW.md), [PLAY](PLAY.md)

  
