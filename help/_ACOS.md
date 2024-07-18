## _ACOS
---

### The _ACOS function returns the angle measured in radians based on an input COSine value ranging from -1 to 1.

#### SYNTAX

`radian_angle! = _ACOS ( cosine_value! )`

#### DESCRIPTION
* The cosine_value! must be measured >= -1 and <= 1, or an error will be generated.  ([PRINT](./PRINT.md) [_ACOS](./_ACOS.md)(1.2) would give the result of -1.#IND, which is basically QB64's way of telling us that the number doesn't exist, much like 1/0 would.)
* ARCCOSINE is the inverse function of COSine , which lets us turn a COSine value back into an angle.
* Note: Due to rounding with floating point math, the [_ACOS](./_ACOS.md) may not always give a perfect match for the [COS](./COS.md) angle which generated this.  You can reduce the number of rounding errors by increasing the precision of your calculations by using [DOUBLE](./DOUBLE.md) or [_FLOAT](./_FLOAT.md) precision variables instead of [SINGLE](./SINGLE.md) .


#### EXAMPLES
##### Example: Converting a radian angle to its COSine and using that value to find the angle in degrees again using _ACOS:
```vb
DEFDBL A-Z

INPUT "Give me an Angle (in Degrees) => "; Angle
PRINT
C = COS(_D2R(Angle)) '_D2R is the command to convert Degrees to Radians, which is what COS expects
PRINT "The COSINE of the Angle is: "; C
A = _ACOS(C)
PRINT "The ACOS of "; C; " is: "; A
PRINT "Notice, A is the Angle in Radians.  If we convert it to degrees, the value is "; _R2D(A)
```
  
```vb
Give me an Angle (in Degrees) => ? 60

The COSINE of the Angle is:  .5000000000000001
The ACOS of  .5000000000000001  is:  1.047197551196598
Notice, A is the Angle in Radians.  If we convert it to degrees, we discover the value is  60
```
  


#### SEE ALSO
* [_D2G](./_D2G.md) (degree to gradient , [_D2R](./_D2R.md) (degree to radian)
* [_G2D](./_G2D.md) (gradient to degree) , [_G2R](./_G2R.md) (gradient to degree
* [_R2D](./_R2D.md) (radian to degree) , [_R2G](./_R2G.md) (radian to gradient
* [COS](./COS.md) (cosine) , [SIN](./SIN.md) (sine) , [TAN](./TAN.md) (tangent)
* [_ASIN](./_ASIN.md) (arc sine) , [ATN](./ATN.md) (arc tangent)
* [_ACOSH](./_ACOSH.md) (arc hyperbolic  cosine) , [_ASINH](./_ASINH.md) (arc hyperbolic  sine) , [_ATANH](./_ATANH.md) (arc hyperbolic  tangent)
* [_ATAN2](./_ATAN2.md) (Compute arc tangent with two parameters)
* [_HYPOT](./_HYPOT.md) (hypotenuse)
* Mathematical Operations
* Derived Mathematical Functions
