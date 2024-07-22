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

## [VARPTR\$](VARPTR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/VARPTR$)
---
<blockquote>

### VARPTR$ is a memory function that returns a STRING representation of a variable's memory address value for use in a DRAW or PLAY statement.

</blockquote>

#### SYNTAX

<blockquote>

`string_value$ = VARPTR$( variable )`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: How VARPTR$ reads consecutive values from memory.
```vb
SCREEN 2
CLS
WIND$ = "r10 d7 l10 u7 br20"   'create draw string to be read by function
ROW$ = "x"+VARPTR$(WIND$)+"x"+VARPTR$(WIND$)+"x"+VARPTR$(WIND$)+" x"+VARPTR$(WIND$)+"bl80 bd11"
LINE (100, 50)-(200, 160), , B
DRAW "bm 115,52"
FOR I = 1 TO 10
DRAW "x" + VARPTR$(ROW$)
NEXT
```
  
<br>

##### Example 2: Using the function to change a Turn Angle value using DRAW.
```vb
SCREEN 12
'Demonstrates how string DRAW angles are used with TA
FOR i = 0 TO 360 STEP 30           'mark clock hours every 30 degrees
angle$ = STR$(i)                 'change degree value i to a string
PSET (175, 250), 6               'clock center
DRAW "TA" + angle$ + "BU100"     'add string angle to Turn Angle and draw blind up
CIRCLE STEP(0, 0), 5, 12         'place a circle at end of Up line
DRAW "P9, 12"
_DELAY .5
NEXT
'Demonstrates how VARPTR$ is used with TA=
DO: sec$ = RIGHT$(TIME$, 2)        'get current second value from time
degree = VAL(sec$) * -6          'use a negative value to Turn Angle clockwise
PSET (175, 250), 9               'clock center
DRAW "TA=" + VARPTR$(degree) + "U90"  'VARPTR$ value requires = in DRAW
DO: _LIMIT 30: LOOP UNTIL RIGHT$(TIME$, 2) <> sec$  'loop until seconds value changes
IF INKEY$ <> "" THEN EXIT DO
PSET (175, 250), 0
DRAW "TA=" + VARPTR$(degree) + "U90"  'erase previous second hand draw
LOOP
```
  
<br>

##### Example 3: Comparing DRAW moves using VARPTR$ and STR$ values.
```vb
SCREEN 12
PSET (200, 200), 12
CIRCLE STEP(0, 0), 5, 10
A = 100: B = 100
DRAW "M+=" + VARPTR$(A) + ",-=" + VARPTR$(B)

PSET (400, 400), 10
CIRCLE STEP(0, 0), 5, 12
C = 100: D = -100
DRAW "M+" + STR$(C) + "," + STR$(D) 'must add + for positive relative moves
END
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [VARPTR](VARPTR.md)  , [STR\$](STR\$.md) 
*  [DRAW](DRAW.md)  , [PLAY](PLAY.md) 

</blockquote>
