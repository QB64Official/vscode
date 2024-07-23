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


## [SIN](SIN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SIN)
---
<blockquote>

### The SIN function returns the vertical component or sine of an angle measured in radians.

</blockquote>

#### SYNTAX

<blockquote>

`value! = SIN( radian_angle! )`

</blockquote>

#### PARAMETERS

<blockquote>


* The radian_angle must be measured in radians from 0 to 2 
* Pi.
</blockquote>

#### DESCRIPTION

<blockquote>


* To convert from degrees to radians, multiply degrees 
* π/180.
* [SIN](SIN.md) E is the vertical component of a unit vector in the direction theta (θ).
* Accuracy can be determined as [SINGLE](SINGLE.md) by default or [DOUBLE](DOUBLE.md) by following the parameter value with a # suffix.

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



##### Example 2: Displays rotating gears made using SIN and COS to place the teeth lines.
```vb
SCREEN 9
DIM SHARED Pi AS SINGLE
Pi = 4 * ATN(1)
DO
FOR G = 0 TO Pi * 2 STEP Pi / 100
CLS                                   'erase previous
CALL GEARZ(160, 60, 40, 20, 4, G, 10)
CALL GEARZ(240, 60, 40, 20, 4, -G, 11)
CALL GEARZ(240, 140, 40, 20, 4, G, 12)
CALL GEARZ(320, 140, 40, 20, 4, -G, 13)
CALL GEARZ(320 + 57, 140 + 57, 40, 20, 4, G, 14)
CALL GEARZ(320 + 100, 140 + 100, 20, 10, 4, -G * 2 - 15, 15)
_DISPLAY
_LIMIT 20                 'regulates gear speed and CPU usage
NEXT G
LOOP UNTIL INKEY$ <> ""
END

SUB GEARZ (XP, YP, RAD, Teeth, TH, G, CLR)
t = 0
x = XP + (RAD + TH * SIN(0)) * COS(0)
y = YP + (RAD + TH * SIN(0)) * SIN(0)
PRESET (x, y)
m = Teeth * G
FOR t = -Pi / 70 TO 2 * Pi STEP Pi / 70
x = XP + (RAD + TH * SIN((Teeth * t + m)) ^ 3) * COS(t)
y = YP + (RAD + TH * SIN((Teeth * t + m)) ^ 3) * SIN(t)
LINE -(x, y), CLR
IF INKEY$ <> "" THEN END
NEXT t
PAINT (XP, YP), CLR            'gear colors optional
END SUB
```
  
<br>



##### Example 3: Displaying the current seconds for an analog clock. See COS for the clock face hour markers.
```vb
SCREEN 12
Pi2! = 8 * ATN(1): sec! = Pi2! / 60  ' (2 * pi) / 60 movements per rotation
CIRCLE (320, 240), 80, 1
DO
LOCATE 1, 1: PRINT TIME$
Seconds% = VAL(RIGHT$(TIME$, 2)) - 15 ' update seconds
S! = Seconds% * sec! ' radian from the TIME$ value
Sx% = CINT(COS(S!) * 60)   ' pixel columns (60 = circular radius)
Sy% = CINT(SIN(S!) * 60)   ' pixel rows
LINE (320, 240)-(Sx% + 320, Sy% + 240), 12
DO: Check% = VAL(RIGHT$(TIME$, 2)) - 15: LOOP UNTIL Check% <> Seconds%  ' wait loop
LINE (320, 240)-(Sx% + 320, Sy% + 240), 0 ' erase previous line
LOOP UNTIL INKEY$ = CHR$(27) ' escape keypress exits
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PI](PI.md)
* [COS](COS.md)
* [ATN](ATN.md)
* [TAN](TAN.md)
* Mathematical Operations
* Derived Mathematical Functions
</blockquote>
