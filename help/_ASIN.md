## _ASIN
---

### The _ASIN function returns the angle measured in radians based on an input SINe value ranging from -1 to 1.

#### SYNTAX

`radian_angle! = _ASIN ( sine_value! )`

#### DESCRIPTION
* The sine_value! must be measured >= -1 and <= 1, or else it will generate a return value of -1.#IND , which is basically QB64's way of telling us that the number doesn't exist.
* ARCSINE is the inverse function of SINe , and turns a SINe value back into an angle.
* Note: Due to rounding with floating point math, the [_ASIN](./_ASIN.md) may not always give a perfect match for the [SIN](./SIN.md) angle which generated this. You can reduce the number of rounding errors by increasing the precision of your calculations by using [DOUBLE](./DOUBLE.md) or [_FLOAT](./_FLOAT.md) precision variables instead of [SINGLE](./SINGLE.md) .


#### EXAMPLES
##### Example: Converting a radian angle to its SINe and using that value to find the angle in degrees again using _ASIN:
```vb
DEFDBL A-Z

INPUT "Give me an Angle (in Degrees) => "; Angle
PRINT
C = SIN(_D2R(Angle)) '_D2R is the command to convert Degrees to Radians, which is what SIN expects
PRINT "The SINE of the Angle is: "; C
A = _ASIN(C)
PRINT "The ASIN of "; C; " is: "; A
PRINT "Notice, A is the Angle in Radians.  If we convert it to degrees, the value is "; _R2D(A)
```
  
```vb
Give me an Angle (in Degrees) => ? 60

The SINE of the Angle is:  .8660254037844386
The ACOS of   .8660254037844386  is:   1.047197551196598
Notice, A is the Angle in Radians.  If we convert it to degrees, we discover the value is  60
```
  


#### SEE ALSO
* [_D2G](./_D2G.md) (degree to gradient , [_D2R](./_D2R.md) (degree to radian)
* [_G2D](./_G2D.md) (gradient to degree) , [_G2R](./_G2R.md) (gradient to degree
* [_R2D](./_R2D.md) (radian to degree) , [_R2G](./_R2G.md) (radian to gradient
* [COS](./COS.md) (cosine) , [SIN](./SIN.md) (sine) , [TAN](./TAN.md) (tangent)
* [_ACOS](./_ACOS.md) (arc cosine) , [ATN](./ATN.md) (arc tangent)
* [_ACOSH](./_ACOSH.md) (arc hyperbolic  cosine) , [_ASINH](./_ASINH.md) (arc hyperbolic  sine) , [_ATANH](./_ATANH.md) (arc hyperbolic  tangent)
* [_ATAN2](./_ATAN2.md) (Compute arc tangent with two parameters)
* [_HYPOT](./_HYPOT.md) (hypotenuse)
* Mathematical Operations
* Derived Mathematical Functions
