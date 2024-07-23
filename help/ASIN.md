<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_ASIN](ASIN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ASIN)
---
<blockquote>

### The _ASIN function returns the angle measured in radians based on an input SINe value ranging from -1 to 1.

</blockquote>

#### SYNTAX

<blockquote>

`radian_angle! = _ASIN ( sine_value! )`

</blockquote>

#### DESCRIPTION

<blockquote>


* The sine_value! must be measured >= -1 and <= 1, or else it will generate a return value of -1.#IND , which is basically QB64's way of telling us that the number doesn't exist.
* ARCSINE is the inverse function of SINe , and turns a SINe value back into an angle.
* Note: Due to rounding with floating point math, the [_ASIN](ASIN.md) may not always give a perfect match for the [SIN](SIN.md) angle which generated this. You can reduce the number of rounding errors by increasing the precision of your calculations by using [DOUBLE](DOUBLE.md) or [_FLOAT](FLOAT.md) precision variables instead of [SINGLE](SINGLE.md) .

</blockquote>

#### EXAMPLES

<blockquote>



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
  
<br>

```vb
Give me an Angle (in Degrees) => ? 60

The SINE of the Angle is:  .8660254037844386
The ACOS of   .8660254037844386  is:   1.047197551196598
Notice, A is the Angle in Radians.  If we convert it to degrees, we discover the value is  60
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_D2G](D2G.md) (degree to gradient , [_D2R](D2R.md) (degree to radian)
* [_G2D](G2D.md) (gradient to degree) , [_G2R](G2R.md) (gradient to degree
* [_R2D](R2D.md) (radian to degree) , [_R2G](R2G.md) (radian to gradient
* [COS](COS.md) (cosine) , [SIN](SIN.md) (sine) , [TAN](TAN.md) (tangent)
* [_ACOS](ACOS.md) (arc cosine) , [ATN](ATN.md) (arc tangent)
* [_ACOSH](ACOSH.md) (arc hyperbolic  cosine) , [_ASINH](ASINH.md) (arc hyperbolic  sine) , [_ATANH](ATANH.md) (arc hyperbolic  tangent)
* [_ATAN2](ATAN2.md) (Compute arc tangent with two parameters)
* [_HYPOT](HYPOT.md) (hypotenuse)
* Mathematical Operations
* Derived Mathematical Functions
</blockquote>
