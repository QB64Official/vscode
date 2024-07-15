# _ASIN

The _ASIN function returns the angle measured in radians based on an input [SINe](SINe.md) value ranging from -1 to 1.

  

## Syntax

*radian_angle!* = _ASIN(*sine_value!*)
  

## Description

* The *sine_value!* must be measured >= -1 and <= 1, or else it will generate a return value of **-1.#IND**, which is basically QB64's way of telling us that the number doesn't exist.
* ARCSINE is the inverse function of [SINe](SINe.md), and turns a [SINe](SINe.md) value back into an angle.
* Note: Due to rounding with floating point math, the _ASIN may not always give a perfect match for the [SIN](SIN.md) angle which generated this. You can reduce the number of rounding errors by increasing the precision of your calculations by using [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md) precision variables instead of [SINGLE](SINGLE.md).

  

## Availability

* **Version 1.000 and up**

  

## Examples

*Example:* Converting a radian angle to its SINe and using that value to find the angle in degrees again using _ASIN:

``` [DEFDBL](DEFDBL.md) A-Z  [INPUT](INPUT.md) "Give me an Angle (in Degrees) => "; Angle [PRINT](PRINT.md) C = [SIN](SIN.md)([_D2R](_D2R.md)(Angle)) '_D2R is the command to convert Degrees to Radians, which is what SIN expects [PRINT](PRINT.md) "The SINE of the Angle is: "; C A = _ASIN(C) [PRINT](PRINT.md) "The ASIN of "; C; " is: "; A [PRINT](PRINT.md) "Notice, A is the Angle in Radians.  If we convert it to degrees, the value is "; [_R2D](_R2D.md)(A)  
```

``` Give me an Angle (in Degrees) => ? 60  The SINE of the Angle is:  .8660254037844386 The ACOS of   .8660254037844386  is:   1.047197551196598 Notice, A is the Angle in Radians.  If we convert it to degrees, we discover the value is  60  
```

  

## See also

* [_D2G](_D2G.md) (degree to gradient, [_D2R](_D2R.md) (degree to radian)
* [_G2D](_G2D.md) (gradient to degree), [_G2R](_G2R.md) (gradient to degree
* [_R2D](_R2D.md) (radian to degree), [_R2G](_R2G.md) (radian to gradient
* [COS](COS.md) (cosine), [SIN](SIN.md) (sine), [TAN](TAN.md) (tangent)
* [_ACOS](_ACOS.md) (arc cosine), [ATN](ATN.md) (arc tangent)
* [_ACOSH](_ACOSH.md) (arc hyperbolic cosine), [_ASINH](_ASINH.md) (arc hyperbolic sine), [_ATANH](_ATANH.md) (arc hyperbolic tangent)
* [_ATAN2](_ATAN2.md) (Compute arc tangent with two parameters)
* [_HYPOT](_HYPOT.md) (hypotenuse)
* [Mathematical Operations](Mathematical Operations.md)
* [Derived Mathematical Functions](Derived Mathematical Functions.md)

  
