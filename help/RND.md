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

## [RND](RND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RND)
---
<blockquote>

### The RND function returns a random number with a value between 0 (inclusive) and 1 (exclusive).

</blockquote>

#### SYNTAX

<blockquote>

`result! = RND [( n )]`

</blockquote>

#### PARAMETERS

<blockquote>

*  n is a [SINGLE](SINGLE.md)  numeric value that defines the behavior of the [RND](RND.md)  function but is [NOT](NOT.md)  normally required :

</blockquote>

#### DESCRIPTION

<blockquote>

*  The random numbers generated range from 0 minimum to .9999999 maximum [SINGLE](SINGLE.md)  values that never equal 1.
*  To get values in a range larger than 1, multiply [RND](RND.md)  with a number to get returns up to but not including that numerical value.
*  To get values starting at a certain number, add that number to the [RND](RND.md)  result as [RND](RND.md)  minimums can be 0.
*  If you need an integer range of numbers, like a dice roll, round it down to an [INT](INT.md)  . Add 1 to the maximum number with [INT](INT.md)  .
*  The random sequence is 2 ^ 24 or 16,777,216 entries long, which can allow repeated patterns in some procedures.
*  Formulas for the Integer or Closest Integer of ANY number range from min% (lowest value) to max% (greatest value):


</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Generating a random integer value between 1 and 6 (inclusive) using INT.
```vb
dice% = INT(RND * 6) + 1 'add one as INT value never reaches 6
```
  
<br>

##### Example 2: Using uniform random numbers to create random numbers with a gaussian distribution ( Marsaglia's polar method ).
```vb
DO
u! = RND * 2 - 1
v! = RND * 2 - 1
s! = u! * u! + v! * v!
LOOP WHILE s! >= 1 OR s! = 0
s! = SQR(-2 * LOG(s!) / s!) * 0.5
u! = u! * s!
v! = v! * s!
```
  
<br>

##### Example 3: Random flashes from an explosion
```vb
SCREEN _NEWIMAGE(640, 480, 32)
RANDOMIZE TIMER
BC = 120 ' BALL COUNT
DIM ballx(1 TO BC)
DIM bally(1 TO BC)
DIM velx(1 TO BC)
DIM vely(1 TO BC)
DIM bsize(1 TO BC)
Y = INT(RND * (400 - 100 + 1)) + 100
X0 = 325
Y0 = 300
Tmax = 150
DO
FOR p = 1 TO BC
T = INT(RND * (Tmax - 50 + 1)) + 50
X = INT(RND * (1000 + 500 + 1)) - 500
velx(p) = (X - X0) / T '                       calculate velocity based on flight time
vely(p) = -1 * (Y - .05 * (T ^ 2 + 20 * Y0)) / (T) ' verticle velocity
NEXT p

FOR w = 1 TO BC
bsize(w) = INT(RND * (10 - 0 + 1)) + 0 'size
NEXT w

FOR J = 1 TO Tmax
_LIMIT 60
CLS
'FOR i = 0 TO 255 STEP .5
'CIRCLE (X0, Y0), i, _RGB(255 - i, 0, 0), 0, 3.147
' NEXT i

R = INT(RND * (25 - 20 + 1)) + 20 'random glimmer
FOR z = 1 TO BC
ballx(z) = X0 + velx(z) * J
bally(z) = Y0 - vely(z) * J + .5 * .1 * J ^ 2
NEXT z

FOR d = 1 TO BC
RCOL = INT(RND * (255 - 0 + 1)) 'color
FOR i = 0 TO bsize(d) + 1 STEP .4 'draw balls
CIRCLE (ballx(d), bally(d)), i, _RGBA(255, RCOL - (R * i), RCOL - R * i, 255)
NEXT i
NEXT d

_DISPLAY

NEXT J

LOOP UNTIL INKEY$ <> ""
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [RANDOMIZE](RANDOMIZE.md)  , [TIMER](TIMER.md)  (function)
*  [INT](INT.md)  , [CINT](CINT.md)  , [FIX](FIX.md) 

</blockquote>
