# COS

The COS function returns the horizontal component or the cosine of an angle measured in radians.

  

## Syntax

*value!* = COS(*radianAngle!*)
  

## Parameters

* The *radianAngle!* must be measured in radians.

  

## Description

* To convert from degrees to radians, multiply degrees * π / 180.
* COSINE is the horizontal component of a unit vector in the direction theta (θ).
* COS(x) can be calculated in either [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) precision depending on its argument.

COS(4) = -.6536436 ...... COS(4#) = -.6536436208636119
  

## Examples

*Example 1:* Converting degree angles to radians for QBasic's trig functions and drawing the line at the angle.

``` [SCREEN](SCREEN.md) 12 PI = 4 * [ATN](ATN.md)(1) [PRINT](PRINT.md) "PI = 4 * [ATN](ATN.md)(1) ="; PI [PRINT](PRINT.md) "COS(PI) = "; COS(PI) [PRINT](PRINT.md) "SIN(PI) = "; [SIN](SIN.md)(PI) [DO](DO.md)   [PRINT](PRINT.md)   [INPUT](INPUT.md) "Enter the degree angle (0 quits): ", DEGREES%   RADIANS = DEGREES% * PI / 180   [PRINT](PRINT.md) "RADIANS = DEGREES% * PI / 180 = "; RADIANS   [PRINT](PRINT.md) "X = COS(RADIANS) = "; COS(RADIANS)   [PRINT](PRINT.md) "Y = SIN(RADIANS) = "; [SIN](SIN.md)(RADIANS)   [CIRCLE](CIRCLE.md) (400, 240), 2, 12   [LINE](LINE.md) (400, 240)-(400 + (50 * [SIN](SIN.md)(RADIANS)), 240 + (50 * COS(RADIANS))), 11   DEGREES% = RADIANS * 180 / PI   [PRINT](PRINT.md) "DEGREES% = RADIANS * 180 / PI ="; DEGREES% [LOOP](LOOP.md) [UNTIL](UNTIL.md) DEGREES% = 0  
```

``` PI = 4 * ATN(1) = 3.141593 COS(PI) = -1 SIN(PI) = -8.742278E-08  Enter the degree angle (0 quits): 45 RADIANS = DEGREES% * PI / 180 = .7853982 X = COS(RADIANS) = .7071068 Y = SIN(RADIANS) = .7071068 DEGREES% = RADIANS * 180 / PI = 45  
```

*Explanation:* When 8.742278E-08(.00000008742278) is returned by [SIN](SIN.md) or COS the value is essentially zero.
  

*Example 2:* Creating 12 analog clock hour points using [CIRCLEs](CIRCLEs.md) and [PAINT](PAINT.md)

```  PI2 = 8 * [ATN](ATN.md)(1)                  '2 * π  arc! = PI2 / 12                          'arc interval between hour circles  [SCREEN](SCREEN.md) 12  FOR t! = 0 TO PI2 STEP arc!    cx% = [CINT](CINT.md)(COS(t!) * 70) ' pixel columns (circular radius = 70)    cy% = [CINT](CINT.md)([SIN](SIN.md)(t!) * 70) ' pixel rows    [CIRCLE](CIRCLE.md) (cx% + 320, cy% + 240), 3, 12    [PAINT](PAINT.md) [STEP](STEP.md)(0, 0), 9, 12  NEXT  
```

*Explanation:* The 12 circles are placed at radian angles that are 1/12 of 6.28318 or .523598 radians apart.

  

*Example 3:* Creating a rotating spiral with COS and [SIN](SIN.md).

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32)  [DO](DO.md)   [LINE](LINE.md) (0, 0)-(640, 480), [_RGB](_RGB.md)(0, 0, 0), BF   j = j + 1   [PSET](PSET.md) (320, 240)   [FOR](FOR.md) i = 0 [TO](TO.md) 100 [STEP](STEP.md) .1     [LINE](LINE.md) -(.05 * i * i * COS(j + i) + 320, .05 * i * i * [SIN](SIN.md)(j + i) + 240)   [NEXT](NEXT.md)   [PSET](PSET.md) (320, 240)   [FOR](FOR.md) i = 0 [TO](TO.md) 100 [STEP](STEP.md) .1     [LINE](LINE.md) -(.05 * i * i * COS(j + i + 10) + 320, .05 * i * i * [SIN](SIN.md)(j + i + 10) + 240)   [NEXT](NEXT.md)   [PSET](PSET.md) (320, 240)   [FOR](FOR.md) i = 0 [TO](TO.md) 100 [STEP](STEP.md) .1     [PAINT](PAINT.md) (.05 * i * i * COS(j + i + 5) + 320, .05 * i * i * [SIN](SIN.md)(j + i + 5) + 240)   [NEXT](NEXT.md)    [_DISPLAY](_DISPLAY.md)   [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INP](INP.md)([&H](&H.md)60) = 1 'escape exit  
```

  

## See also

* [_PI](_PI.md) (QB64 function)
* [SIN](SIN.md) (sine)
* [ATN](ATN.md) (arctangent)
* [TAN](TAN.md) (tangent)
* [Mathematical Operations](Mathematical Operations.md)
* [Derived Mathematical Functions](Derived Mathematical Functions.md)

  
