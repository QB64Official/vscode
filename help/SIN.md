# SIN

The SIN function returns the vertical component or sine of an angle measured in radians.

  

## Syntax

value! = **SIN(***radian_angle!***)**
  

## Parameters

* The *radian_angle* must be measured in radians from 0 to 2 * Pi.

  

## Description

* To convert from degrees to radians, multiply degrees * π/180.
* SINE is the vertical component of a unit vector in the direction theta (θ).
* Accuracy can be determined as [SINGLE](SINGLE.md) by default or [DOUBLE](DOUBLE.md) by following the parameter value with a # suffix.

  

*Example 1:* Converting degree angles to radians for QBasic's trig functions and drawing the line at the angle.

``` [SCREEN](SCREEN.md) 12 PI = 4 * [ATN](ATN.md)(1) [PRINT](PRINT.md) "PI = 4 * [ATN](ATN.md)(1) ="; PI [PRINT](PRINT.md) "COS(PI) = "; [COS](COS.md)(PI) [PRINT](PRINT.md) "SIN(PI) = "; SIN(PI) DO   [PRINT](PRINT.md)   [INPUT](INPUT.md) "Enter the degree angle (0 quits): ", DEGREES%   RADIANS = DEGREES% * PI / 180   [PRINT](PRINT.md) "RADIANS = DEGREES% * PI / 180 = "; RADIANS   [PRINT](PRINT.md) "X = COS(RADIANS) = "; [COS](COS.md)(RADIANS)   [PRINT](PRINT.md) "Y = SIN(RADIANS) = "; SIN(RADIANS)   [CIRCLE](CIRCLE.md) (400, 240), 2, 12   [LINE](LINE.md) (400, 240)-(400 + (50 * SIN(RADIANS)), 240 + (50 * [COS](COS.md)(RADIANS))), 11   DEGREES% = RADIANS * 180 / PI   [PRINT](PRINT.md) "DEGREES% = RADIANS * 180 / PI ="; DEGREES% [LOOP](LOOP.md) [UNTIL](UNTIL.md) DEGREES% = 0  
```

``` PI = 4 * ATN(1) = 3.141593 COS(PI) = -1 SIN(PI) = -8.742278E-08  Enter the degree angle (0 quits): 45 RADIANS = DEGREES% * PI / 180 = .7853982 X = COS(RADIANS) = .7071068 Y = SIN(RADIANS) = .7071068 DEGREES% = RADIANS * 180 / PI = 45  
```

*Explanation:* When 8.742278E-08(.00000008742278) is returned by SIN or [COS](COS.md) the value is essentially zero.
  

*Example 2:* Displays rotating gears made using SIN and [COS](COS.md) to place the teeth lines.

``` [SCREEN](SCREEN.md) 9 [DIM](DIM.md) [SHARED](SHARED.md) Pi [AS](AS.md) [SINGLE](SINGLE.md) Pi = 4 * [ATN](ATN.md)(1) [DO](DO.md)     [FOR](FOR.md) G = 0 [TO](TO.md) Pi * 2 [STEP](STEP.md) Pi / 100         [CLS](CLS.md)                                   'erase previous         [CALL](CALL.md) GEARZ(160, 60, 40, 20, 4, G, 10)         [CALL](CALL.md) GEARZ(240, 60, 40, 20, 4, -G, 11)         [CALL](CALL.md) GEARZ(240, 140, 40, 20, 4, G, 12)         [CALL](CALL.md) GEARZ(320, 140, 40, 20, 4, -G, 13)         [CALL](CALL.md) GEARZ(320 + 57, 140 + 57, 40, 20, 4, G, 14)         [CALL](CALL.md) GEARZ(320 + 100, 140 + 100, 20, 10, 4, -G * 2 - 15, 15)         [_DISPLAY](_DISPLAY.md)         [_LIMIT](_LIMIT.md) 20                 'regulates gear speed and CPU usage     [NEXT](NEXT.md) G [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> "" [END](END.md)  [SUB](SUB.md) GEARZ (XP, YP, RAD, Teeth, TH, G, CLR) t = 0 x = XP + (RAD + TH * SIN(0)) * [COS](COS.md)(0) y = YP + (RAD + TH * SIN(0)) * SIN(0) [PRESET](PRESET.md) (x, y) m = Teeth * G [FOR](FOR.md) t = -Pi / 70 [TO](TO.md) 2 * Pi [STEP](STEP.md) Pi / 70     x = XP + (RAD + TH * SIN((Teeth * t + m)) ^ 3) * [COS](COS.md)(t)     y = YP + (RAD + TH * SIN((Teeth * t + m)) ^ 3) * SIN(t)     [LINE](LINE.md) -(x, y), CLR     IF [INKEY$](INKEY$.md) <> "" THEN [END](END.md) [NEXT](NEXT.md) t [PAINT](PAINT.md) (XP, YP), CLR            'gear colors optional [END SUB](END SUB.md)  
```

  

*Example 3:* Displaying the current seconds for an analog clock. See [COS](COS.md) for the clock face hour markers.

``` [SCREEN](SCREEN.md) 12 Pi2! = 8 * [ATN](ATN.md)(1): sec! = Pi2! / 60  ' (2 * pi) / 60 movements per rotation [CIRCLE](CIRCLE.md) (320, 240), 80, 1 [DO](DO.md)   [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) [TIME$](TIME$.md)   Seconds% = [VAL](VAL.md)([RIGHT$](RIGHT$.md)([TIME$](TIME$.md), 2)) - 15 ' update seconds   S! = Seconds% * sec! ' radian from the TIME$ value   Sx% = [CINT](CINT.md)([COS](COS.md)(S!) * 60)   ' pixel columns (60 = circular radius)   Sy% = [CINT](CINT.md)(SIN(S!) * 60)   ' pixel rows   [LINE](LINE.md) (320, 240)-(Sx% + 320, Sy% + 240), 12   [DO](DO.md): Check% = [VAL](VAL.md)([RIGHT$](RIGHT$.md)([TIME$](TIME$.md), 2)) - 15: [LOOP](LOOP.md) UNTIL Check% <> Seconds%  ' wait loop   [LINE](LINE.md) (320, 240)-(Sx% + 320, Sy% + 240), 0 ' erase previous line [LOOP](LOOP.md) UNTIL [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) ' escape keypress exits  
```

The value of 2 π is used to determine the sec! multiplier that determines the radian value as S! The value is divided by 60 second movements. To calculate the seconds the [TIME$](TIME$.md) function is used and that value is subtracted 15 seconds because the 0 value of pi is actually the 3 hour of the clock (15 seconds fast). SIN and COS will work with negative values the same as positive ones! Then the column and row coordinates for one end of the line are determined using SIN and [COS](COS.md) multiplied by the radius of the circular line movements. The minute and hour hands could use similar procedures to read different parts of TIME$.

  

## See also

* [_PI](_PI.md)
* [COS](COS.md)
* [ATN](ATN.md)
* [TAN](TAN.md)
* [Mathematical Operations](Mathematical Operations.md)
* [Derived Mathematical Functions](Derived Mathematical Functions.md)

  
