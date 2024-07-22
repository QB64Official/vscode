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

## [ATN](ATN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ATN)
---
<blockquote>

### The ATN or arctangent function returns the angle in radians of a numerical tangent value.

</blockquote>

#### SYNTAX

<blockquote>

`radianAngle = ATN ( tangent! )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The return is the tangent!' s angle in radians .
*  tangent! [SINGLE](SINGLE.md)  or [DOUBLE](DOUBLE.md)  values are used by the function. EX: Pi = 4 * [ATN](ATN.md) (1)

</blockquote>

#### DESCRIPTION

<blockquote>

*  To convert from radians to degrees, multiply radians * (180 / π).
*  The tangent value would be equal to the tangent value of an angle. Ex: [TAN](TAN.md)  ( [ATN](ATN.md) (1)) = 1
*  The function return value is between -π / 2 and π / 2.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PI](PI.md)  (QB64 function)
*  [_ATAN2](ATAN2.md)  ((QB64 function)
*  [TAN](TAN.md)  (tangent function)
*  [SIN](SIN.md)  , [COS](COS.md) 
*  Mathematical Operations
*  Derived Mathematical Functions

</blockquote>
