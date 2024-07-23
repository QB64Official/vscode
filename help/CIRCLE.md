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


## [CIRCLE](CIRCLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CIRCLE)
---
<blockquote>

### The CIRCLE statement is used in graphic SCREEN modes to create circles, arcs or ellipses.

</blockquote>

#### SYNTAX

<blockquote>

`CIRCLE [[[STEP]]] ( column , row ), radius% , [ drawColor% ][, startRadian! , stopRadian! ] [, aspect! ]`

</blockquote>

#### PARAMETERS

<blockquote>


* Can use [STEP](STEP.md) for relative coordinate moves from the previous graphic coordinates.
* Coordinates designate the center position of the circle. Can be partially drawn offscreen.
* radius% is an [INTEGER](INTEGER.md) value for half of the total circle diameter.
* drawColor% is any available color attribute in the [SCREEN](SCREEN.md) mode used.
* startRadian! and stopRadian! can be any [SINGLE](SINGLE.md) value from 0 to 2 
* π to create partial circles or ellipses.
* aspect! [SINGLE](SINGLE.md) values of 0 to 1 affect the vertical height and values over 1 affect the horizontal width of an ellipse. Aspect = 1 is a normal circle.
</blockquote>

#### DESCRIPTION

<blockquote>


* When using aspect! the startRadian! and stopRadian! commas must be included even if not used.
* Radians move in a counter clockwise direction from 0 to 2 
* π. Zero and 2 
* π are the same circle radian at 3 o'clock.
* Negative radian values can be used to draw lines from the end of an arc or partial ellipse to the circle center.
* Commas after the drawColor% parameter are not required when creating a normal circle. drawColor% can also be omitted to use the last color used in a draw statement.
* The graphic cursor is set to the center of the program window on program start for [STEP](STEP.md) relative coordinates.
* [CIRCLE](CIRCLE.md) can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Finding when the mouse is inside of a circular area:
```vb
SCREEN 12

r& = 200 'radius    change circle size and position here
cx& = 320 'center x horizontal
cy& = 240 'center y vertical

DO
i = _MOUSEINPUT
x& = _MOUSEX
y& = _MOUSEY
xy& = ((x& - cx&) ^ 2) + ((y& - cy&) ^ 2) 'Pythagorean theorem
IF r& ^ 2 >= xy& THEN CIRCLE (cx&, cy&), r&, 10 ELSE CIRCLE (cx&, cy&), r&, 12
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit
```
  
<br>



##### Example 2: Program illustrates how the CIRCLE command using a negative radian value can be used to create the hands of a clock.
```vb
CONST PI = 3.141593 'The mathematical value of PI to six places. You can also use QB64's native _PI.
DIM clock(60)             'A dimensioned array to hold 60 radian points
clockcount% = 15          'A counter to keep track of the radians

'* Start at radian 2*PI and continue clockwise to radian 0
'* Since radian 2*PI points directly right, we need to start clockcount%
'* at 15 (for 15 seconds).  The FOR/NEXT loop counts backwards in increments
'* of 60 giving us the 60 second clock points.  These points are then stored
'* in the dimensioned array clock() to be used later.
'*
FOR radian = 2 * PI TO 0 STEP -(2 * PI) / 60
clock(clockcount%) = radian
clockcount% = clockcount% + 1
IF clockcount% = 61 THEN clockcount% = 1
NEXT radian
'* Change to a graphics screen and draw the clock face
SCREEN 7
CLS
LOCATE 1, 1
COLOR 14, 0
PRINT "Ritchie's Clock"
COLOR 9, 0
PRINT "Uses CIRCLE to"
PRINT "draw hands!"
COLOR 8, 0
CIRCLE (160, 100), 110, 8 'circle with radius of 110 and dark gray
CIRCLE (160, 100), 102, 8 'circle with radius of 102 and dark gray
PAINT (265, 100), 8, 8 'fill between the two dark gray circles with gray
CIRCLE (160, 100), 110, 7 'circle with radius of 110 and light gray
'*
'* Get the current time from the QuickBASIC built in variable TIME$
'* Since TIME$ is a string, we need to extract the hours, minutes and
'* seconds from it using LEFT$, RIGHT$ and MID$. Then, each of these
'* extractions need to be converted to a numeric value using VAL and
'* stored in their respective variables.
'*
seconds% = INT(VAL(RIGHT$(TIME$, 2))) 'extract seconds from TIME$
IF seconds% = 0 THEN seconds% = 60 'array counts 1 to 60 not 0 to 59
previoussecond% = seconds% 'hold current second for later use
minutes% = INT(VAL(MID$(TIME$, 4, 2))) 'extract minutes from TIME$
IF minutes% = 0 THEN minutes% = 60 'array counts 1 to 60 not 0 to 59
previousminute% = minutes% 'hold current minute for later use
hours% = INT(VAL(LEFT$(TIME$, 2))) 'extract hour from TIME$
IF hours% >= 12 THEN hours% = hours% - 12 'convert from military time
IF hours% = 0 THEN hours% = 12 'count from 1 to 12 not 0 to 11
previoushour% = hours% 'hold current hour for later use
'*
'* Start of main program loop
'*
DO
IF seconds% <> previoussecond% THEN 'has a second elapsed?
LOCATE 22, 17 'print the time on the screen at
PRINT TIME$; 'position 22, 17
'* Since a second has elapsed we need to erase the old second hand
'* position and draw the new position

CIRCLE (160, 100), 100, 0, -clock(previoussecond%), clock(previoussecond%)
CIRCLE (160, 100), 100, 15, -clock(seconds%), clock(seconds%)
previoussecond% = seconds% 'hold current second for later use
IF minutes% <> previousminute% THEN 'has a minute elapsed?
'* Since a minute has elapsed we need to erase the old hour hand position
CIRCLE (160, 100), 90, 0, -clock(previousminute%), clock(previousminute%)
previousminute% = minutes% 'hold current minute for later use
END IF
'*
'* Draw the current minute hand position
'*
CIRCLE (160, 100), 90, 14, -clock(minutes%), clock(minutes%)
IF hours% <> previoushour% THEN 'has an hour elapsed?
'* Since an hour has elapsed we need to erase the old hour hand position
CIRCLE (160, 100), 75, 0, -clock(previoushour% * 5), clock(previoushour% * 5)
previoushour% = hours% 'hold current hour for later use
END IF
'*
'* Draw the current hour hand position
'*
CIRCLE (160, 100), 75, 12, -clock(hours% * 5), clock(hours% * 5)
END IF
seconds% = VAL(RIGHT$(TIME$, 2)) 'extract time again and do all over
IF seconds% = 0 THEN seconds% = 60
minutes% = VAL(MID$(TIME$, 4, 2))
IF minutes% = 0 THEN minutes% = 60
hours% = VAL(LEFT$(TIME$, 2))
IF hours% >= 12 THEN hours% = hours% - 12
IF hours% = 0 THEN hours% = 12
LOOP UNTIL INKEY$ <> "" 'stop program if user presses a key
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [STEP](STEP.md) , [DRAW](DRAW.md)
* [LINE](LINE.md) , [PSET](PSET.md) , [PRESET](PRESET.md)
* [SCREEN](SCREEN.md) , [SCREEN](SCREEN.md) (function)
* Alternative circle routine (member-contributed program)
</blockquote>
