# ATN

The ATN or arctangent function returns the angle in radians of a numerical [tangent](tangent.md) value.

  

## Syntax

*radianAngle* = ATN(*tangent!*)
  

## Parameters

* The return is the *tangent!'*s angle in **radians**.
* *tangent!* [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) values are used by the function. EX:**Pi = 4 * ATN(1)**

  

## Description

* To convert from radians to degrees, multiply radians * (180 / π).
* The *tangent* value would be equal to the tangent value of an angle. Ex: **[TAN](TAN.md)(ATN(1)) = 1**
* The function return value is between -π / 2 and π / 2.

  

## Examples

*Example 1:* When the [TANgent](TANgent.md) value equals 1, the line is drawn at a 45 degree angle (.7853982 radians) where [SIN](SIN.md) / [COS](COS.md) = 1.

``` [SCREEN](SCREEN.md) 12 x = 100 * [COS](COS.md)(ATN(1)) y = 100 * [SIN](SIN.md)(ATN(1)) [LINE](LINE.md) (200, 200)-(200 + x, 200 + y)  
```

  

*Example 2:* ATN can be used to define π in [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) precision. The calculation cannot be used as a [CONSTant](CONSTant.md).

``` Pi = 4 * ATN(1)   '[SINGLE](SINGLE.md) precision Pi# = 4 * ATN(1#) '[DOUBLE](DOUBLE.md) precision PRINT Pi, Pi#  
```

*Note:* You can use QB64's native [_PI](_PI.md) function.
  

*Example 3:* Finds the angle from the center point to the mouse pointer.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) x1! = 320 y1! = 240  DO   [PRESET](PRESET.md) (x1!, y1!), [_RGB](_RGB.md)(255, 255, 255)   dummy% = [_MOUSEINPUT](_MOUSEINPUT.md)   x2! = [_MOUSEX](_MOUSEX.md)   y2! = [_MOUSEY](_MOUSEY.md)   [LINE](LINE.md) (x1, y1)-(x2, y2), [_RGB](_RGB.md)(255, 0, 0)   [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) getangle(x1!, y1!, x2!, y2!)   [_DISPLAY](_DISPLAY.md)   [_LIMIT](_LIMIT.md) 200   [CLS](CLS.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> "" [END](END.md)  [FUNCTION](FUNCTION.md) getangle# (x1#, y1#, x2#, y2#) 'returns 0-359.99... [IF](IF.md) y2# = y1# [THEN](THEN.md)   [IF](IF.md) x1# = x2# [THEN](THEN.md) [EXIT FUNCTION](EXIT FUNCTION.md)   [IF](IF.md) x2# > x1# [THEN](THEN.md) getangle# = 90 [ELSE](ELSE.md) getangle# = 270   [EXIT FUNCTION](EXIT FUNCTION.md) [END IF](END IF.md) [IF](IF.md) x2# = x1# [THEN](THEN.md)   [IF](IF.md) y2# > y1# [THEN](THEN.md) getangle# = 180   [EXIT FUNCTION](EXIT FUNCTION.md) [END IF](END IF.md) [IF](IF.md) y2# < y1# [THEN](THEN.md)   [IF](IF.md) x2# > x1# [THEN](THEN.md)     getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131   [ELSE](ELSE.md)     getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131 + 360   [END IF](END IF.md) [ELSE](ELSE.md)   getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131 + 180 [END IF](END IF.md) [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [_PI](_PI.md) (QB64 function)
* [_ATAN2](_ATAN2.md) ((QB64 function)
* [TAN](TAN.md) (tangent function)
* [SIN](SIN.md), [COS](COS.md)
* [Mathematical Operations](Mathematical Operations.md)
* [Derived Mathematical Functions](Derived Mathematical Functions.md)

  
