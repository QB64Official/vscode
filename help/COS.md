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


## [COS](COS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/COS)
---
<blockquote>

### The COS function returns the horizontal component or the cosine of an angle measured in radians.

</blockquote>

#### SYNTAX

<blockquote>

`value! = COS ( radianAngle! )`

</blockquote>

#### PARAMETERS

<blockquote>


* The radianAngle! must be measured in radians.
</blockquote>

#### DESCRIPTION

<blockquote>


* To convert from degrees to radians, multiply degrees 
* π / 180.
* [COS](COS.md) INE is the horizontal component of a unit vector in the direction theta (θ).
* COS(x) can be calculated in either [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) precision depending on its argument.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Converting degree angles to radians for QBasic's trig functions and drawing the line at the angle.
```vb
SCREEN 12
PI = 4 * ATN(1)
PRINT "PI = 4 * ATN(1) ="; PI
PRINT "COS(PI) = "; COS(PI)
PRINT "SIN(PI) = "; SIN(PI)
DO
PRINT
INPUT "Enter the degree angle (0 quits): ", DEGREES%
RADIANS = DEGREES% * PI / 180
PRINT "RADIANS = DEGREES% * PI / 180 = "; RADIANS
PRINT "X = COS(RADIANS) = "; COS(RADIANS)
PRINT "Y = SIN(RADIANS) = "; SIN(RADIANS)
CIRCLE (400, 240), 2, 12
LINE (400, 240)-(400 + (50 * SIN(RADIANS)), 240 + (50 * COS(RADIANS))), 11
DEGREES% = RADIANS * 180 / PI
PRINT "DEGREES% = RADIANS * 180 / PI ="; DEGREES%
LOOP UNTIL DEGREES% = 0
```
  
<br>

```vb
PI = 4 * ATN(1) = 3.141593
COS(PI) = -1
SIN(PI) = -8.742278E-08

Enter the degree angle (0 quits): 45
RADIANS = DEGREES% * PI / 180 = .7853982
X = COS(RADIANS) = .7071068
Y = SIN(RADIANS) = .7071068
DEGREES% = RADIANS * 180 / PI = 45
```
  
<br>


<div class="explanation">Explanation: When 8.742278E-08(.00000008742278) is returned by SIN or COS the value  is essentially zero.</div>



##### Example 2: Creating 12 analog clock hour points using CIRCLEs and PAINT
```vb
PI2 = 8 * ATN(1)                  '2 * π
arc! = PI2 / 12                          'arc interval between hour circles
SCREEN 12
FOR t! = 0 TO PI2 STEP arc!
cx% = CINT(COS(t!) * 70) ' pixel columns (circular radius = 70)
cy% = CINT(SIN(t!) * 70) ' pixel rows
CIRCLE (cx% + 320, cy% + 240), 3, 12
PAINT STEP(0, 0), 9, 12
NEXT
```
  
<br>



##### Example 3: Creating a rotating spiral with COS and SIN .
```vb
SCREEN _NEWIMAGE(640, 480, 32)

DO
LINE (0, 0)-(640, 480), _RGB(0, 0, 0), BF
j = j + 1
PSET (320, 240)
FOR i = 0 TO 100 STEP .1
LINE -(.05 * i * i * COS(j + i) + 320, .05 * i * i * SIN(j + i) + 240)
NEXT
PSET (320, 240)
FOR i = 0 TO 100 STEP .1
LINE -(.05 * i * i * COS(j + i + 10) + 320, .05 * i * i * SIN(j + i + 10) + 240)
NEXT
PSET (320, 240)
FOR i = 0 TO 100 STEP .1
PAINT (.05 * i * i * COS(j + i + 5) + 320, .05 * i * i * SIN(j + i + 5) + 240)
NEXT

_DISPLAY
_LIMIT 30
LOOP UNTIL INP(&H60) = 1 'escape exit
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PI](PI.md) (QB64 function)
* [SIN](SIN.md) (sine)
* [ATN](ATN.md) (arctangent)
* [TAN](TAN.md) (tangent)
* Mathematical Operations
* Derived Mathematical Functions
</blockquote>
