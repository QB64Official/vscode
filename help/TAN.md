# TAN

The TAN function returns the ratio of [SINe](SINe.md) to [COSine](COSine.md) or tangent value of an angle measured in radians.

  

## Syntax

tangent! = **TAN(***radian_angle!***)**
  

## Parameters

* The *radian_angle* must be measured in radians.

  

## Description

* To convert from degrees to radians, multiply degrees * π/180.
* TANGENT is the gradient or slope of the circle or arc at [SIN](SIN.md)(θ) / [COS](COS.md)(θ). Do not use division when the [COS](COS.md) = 0 to avoid [errors](errors.md).

  

*Example:* Spiraling text using the [SIN](SIN.md) and TAN functions.

``` [DIM](DIM.md) [SHARED](SHARED.md) text [AS](AS.md) [STRING](STRING.md) text$ = "S P I R A L" [DIM](DIM.md) [SHARED](SHARED.md) word(1 [TO](TO.md) [LEN](LEN.md)(text$) * 8, 1 [TO](TO.md) 16)  [CALL](CALL.md) analyse [CLS](CLS.md) [CALL](CALL.md) redraw  [SUB](SUB.md) analyse [CLS](CLS.md) [SCREEN](SCREEN.md) 12 [COLOR](COLOR.md) 2: [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) text$ [DIM](DIM.md) px [AS](AS.md) [INTEGER](INTEGER.md), py [AS](AS.md) [INTEGER](INTEGER.md), cnt [AS](AS.md) [INTEGER](INTEGER.md), ltrcnt [AS](AS.md) [INTEGER](INTEGER.md) px = 1: py = 1 DO   word(px, py) = [POINT](POINT.md)(px, py)   [PSET](PSET.md) (px, py), 1   px = px + 1   [IF](IF.md) px = [LEN](LEN.md)(text$) * 8 [THEN](THEN.md)     px = 1     py = py + 1   [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) py = 16 [END SUB](END SUB.md)  [SUB](SUB.md) redraw [CLS](CLS.md) [DIM](DIM.md) row [AS](AS.md) [INTEGER](INTEGER.md), cnt [AS](AS.md) [INTEGER](INTEGER.md), cstart [AS](AS.md) [SINGLE](SINGLE.md), cend [AS](AS.md) [SINGLE](SINGLE.md) [DIM](DIM.md) xrot [AS](AS.md) [INTEGER](INTEGER.md), yrot [AS](AS.md) [INTEGER](INTEGER.md), SCALE [AS](AS.md) [INTEGER](INTEGER.md), pan [AS](AS.md) [INTEGER](INTEGER.md) cstart = 0: cend = 6.2 xrot = 6: yrot = 6: SCALE = 3: pan = 30 [OUT](OUT.md) [&H](&H.md)3C8, 1: [OUT](OUT.md) [&H](&H.md)3C9, 10: [OUT](OUT.md) [&H](&H.md)3C9, 10: [OUT](OUT.md) [&H](&H.md)3C9, 60 DO   row = 2   DO     DO       [FOR](FOR.md) i = cend [TO](TO.md) cstart [STEP](STEP.md) -.03         x = (SCALE * 60 - (row * xrot / 4)) * TAN([COS](COS.md)(i))         y = [SIN](SIN.md)(SCALE * 60 - (row * yrot)) * TAN([SIN](SIN.md)(i)) * pan         cnt = cnt + 1         [IF](IF.md) word(cnt, row) > 0 [THEN](THEN.md)           [CIRCLE](CIRCLE.md) (x + 320, y + 220), SCALE + 1, 1              'circled letters           '[LINE](LINE.md) (x + 320, y + 220)-[STEP](STEP.md)(12, 12), 1, BF  'boxed letters         [END IF](END IF.md)         [IF](IF.md) cnt = [LEN](LEN.md)(text$) * 8 [THEN](THEN.md) cnt = 0: [EXIT DO](EXIT DO.md)       [NEXT](NEXT.md)     [LOOP](LOOP.md)     row = row + 1   [LOOP](LOOP.md) [UNTIL](UNTIL.md) row = 16   cend = cend + .1   cstart = cstart + .1   now! = [TIMER](TIMER.md) "TIMER (function)")   DO     newnow! = [TIMER](TIMER.md) "TIMER (function)")   [LOOP](LOOP.md) [UNTIL](UNTIL.md) newnow! - now! >= .15   [LINE](LINE.md) (1, 100)-(639, 280), 0, BF [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) [END SUB](END SUB.md)  
```

  

## See also

* [_PI](_PI.md)
* [SIN](SIN.md), [COS](COS.md)
* [ATN](ATN.md)
* [Mathematical Operations](Mathematical Operations.md)
* [Text Using Graphics](Text Using Graphics.md)
* [Derived Mathematical Functions](Derived Mathematical Functions.md)

  
