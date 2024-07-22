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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
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

*  The sine_value! must be measured >= -1 and <= 1, or else it will generate a return value of -1.#IND , which is basically QB64's way of telling us that the number doesn't exist.
*  ARCSINE is the inverse function of SINe , and turns a SINe value back into an angle.
*  Note: Due to rounding with floating point math, the [_ASIN](ASIN.md)  may not always give a perfect match for the [SIN](SIN.md)  angle which generated this. You can reduce the number of rounding errors by increasing the precision of your calculations by using [DOUBLE](DOUBLE.md)  or [_FLOAT](FLOAT.md)  precision variables instead of [SINGLE](SINGLE.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_D2G](D2G.md)  (degree to gradient , [_D2R](D2R.md)  (degree to radian)
*  [_G2D](G2D.md)  (gradient to degree) , [_G2R](G2R.md)  (gradient to degree
*  [_R2D](R2D.md)  (radian to degree) , [_R2G](R2G.md)  (radian to gradient
*  [COS](COS.md)  (cosine) , [SIN](SIN.md)  (sine) , [TAN](TAN.md)  (tangent)
*  [_ACOS](ACOS.md)  (arc cosine) , [ATN](ATN.md)  (arc tangent)
*  [_ACOSH](ACOSH.md)  (arc hyperbolic  cosine) , [_ASINH](ASINH.md)  (arc hyperbolic  sine) , [_ATANH](ATANH.md)  (arc hyperbolic  tangent)
*  [_ATAN2](ATAN2.md)  (Compute arc tangent with two parameters)
*  [_HYPOT](HYPOT.md)  (hypotenuse)
*  Mathematical Operations
*  Derived Mathematical Functions

</blockquote>
