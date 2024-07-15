# _ATAN2

The _ATAN2 function returns the radian angle between the positive x-axis of a plane and the point given by the coordinates (x, y).

  

## Syntax

*angle!* = _ATAN2(*y*, *x*)
  

## Parameters

* *y* is the vertical axis position (row) as a positive, zero or negative floating point value.
* *x* is the horizontal axis position (column) as a positive, zero or negative floating point value.

  

## Description

* The [DOUBLE](DOUBLE.md) radian angle returned is **positive** for upper row values where y > 0.

* _ATAN2(y, x) = [ATN](ATN.md)(y# / x#) when x > 0
* _ATAN2(y, x) = [ATN](ATN.md)(y# / x#) + [_PI](_PI.md) when x < 0
* _ATAN2(y, x) = [_PI](_PI.md) / 2 when x = 0

* The [DOUBLE](DOUBLE.md) radian angle returned is 0 when x > 0 and [_PI](_PI.md) when x < 0 where y = 0
* The [DOUBLE](DOUBLE.md) radian angle returned is **negative** for lower row values where y < 0.

* _ATAN2(y, x) = [ATN](ATN.md)(y# / x#) when x > 0
* _ATAN2(y, x) = [ATN](ATN.md)(y# / x#) - [_PI](_PI.md) when x < 0
* _ATAN2(y, x) = -[_PI](_PI.md) / 2 when x = 0

* _ATAN2(0, 0) is undefined and the function returns 0 instead of a division error.

### Errors

* With [ATN](ATN.md)(y / x), x can never be 0 as that would create a Division by Zero [error](error.md) 11 or #IND.

  

## See also

* [ATN](ATN.md) (arctangent)
* [_PI](_PI.md) (QB64 function)
* [Mathematical Operations](Mathematical Operations.md)
* [Atan2 reference](Atan2 reference.md)

  
