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


* The return is the tangent!' s angle in radians .
* tangent! [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) values are used by the function. EX: Pi = 4 
* ATN(1)
</blockquote>

#### DESCRIPTION

<blockquote>


* To convert from radians to degrees, multiply radians 
* (180 / π).
* The tangent value would be equal to the tangent value of an angle. Ex: [TAN](TAN.md) (ATN(1)) = 1
* The function return value is between -π / 2 and π / 2.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: When the TANgent value equals 1, the line is drawn at a 45 degree angle (.7853982 radians) where SIN / COS = 1.
```vb
SCREEN 12
x = 100 * COS(ATN(1))
y = 100 * SIN(ATN(1))
LINE (200, 200)-(200 + x, 200 + y)
```
  
<br>



##### Example 2: ATN can be used to define π in SINGLE or DOUBLE precision. The calculation cannot be used as a CONSTant .
```vb
Pi = 4 * ATN(1)   'SINGLE precision
Pi# = 4 * ATN(1#) 'DOUBLE precision
PRINT Pi, Pi#
```
  
<br>



##### Example 3: Finds the angle from the center point to the mouse pointer.
```vb
SCREEN _NEWIMAGE(640, 480, 32)
x1! = 320
y1! = 240

DO
PRESET (x1!, y1!), _RGB(255, 255, 255)
dummy% = _MOUSEINPUT
x2! = _MOUSEX
y2! = _MOUSEY
LINE (x1, y1)-(x2, y2), _RGB(255, 0, 0)
LOCATE 1, 1: PRINT getangle(x1!, y1!, x2!, y2!)
_DISPLAY
_LIMIT 200
CLS
LOOP UNTIL INKEY$ <> ""
END

FUNCTION getangle# (x1#, y1#, x2#, y2#) 'returns 0-359.99...
IF y2# = y1# THEN
IF x1# = x2# THEN EXIT FUNCTION
IF x2# > x1# THEN getangle# = 90 ELSE getangle# = 270
EXIT FUNCTION
END IF
IF x2# = x1# THEN
IF y2# > y1# THEN getangle# = 180
EXIT FUNCTION
END IF
IF y2# < y1# THEN
IF x2# > x1# THEN
getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131
ELSE
getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131 + 360
END IF
ELSE
getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131 + 180
END IF
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PI](PI.md) (QB64 function)
* [_ATAN2](ATAN2.md) ((QB64 function)
* [TAN](TAN.md) (tangent function)
* [SIN](SIN.md) , [COS](COS.md)
* Mathematical Operations
* Derived Mathematical Functions
</blockquote>
