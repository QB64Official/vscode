# _HYPOT

The _HYPOT function returns the hypotenuse of a right-angled triangle whose legs are x and y.

  

## Syntax

*result!* = _HYPOT(*x*, *y*)
  

## Parameters

* *x* and *y* are the floating point values corresponding to the legs of a right-angled (90 degree) triangle for which the hypotenuse is computed.

  

## Description

* The function returns what would be the square root of the sum of the squares of x and y (as per the Pythagorean theorem).
* The hypotenuse is the longest side between the two 90 degree angle sides

  

## Examples

*Example:*

``` [DIM](DIM.md) leg_x [AS](AS.md) [DOUBLE](DOUBLE.md), leg_y [AS](AS.md) [DOUBLE](DOUBLE.md), result [AS](AS.md) [DOUBLE](DOUBLE.md) leg_x = 3 leg_y = 4 result = _HYPOT(leg_x, leg_y) [PRINT USING](PRINT USING.md) "## , ## and ## form a right-angled triangle."; leg_x; leg_y; result  
```

```  3 , 4 and 5 form a right-angled triangle.  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [ATN](ATN.md) (arctangent)
* [_PI](_PI.md) (function)
* [Mathematical Operations](Mathematical Operations.md)
* [C++ reference for hypot() - source of the text and sample above](C++ reference for hypot() - source of the text and sample above.md)

  
