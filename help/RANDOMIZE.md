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


## [RANDOMIZE](RANDOMIZE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RANDOMIZE)
---
<blockquote>

### RANDOMIZE is used with a seed value to generate different random number sequences using the RND function.

</blockquote>

#### SYNTAX

<blockquote>

`RANDOMIZE [USING] { seednumber |TIMER}`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using RANDOMIZE TIMER to set a different starting sequence of random numbers every run.
```vb
RANDOMIZE TIMER
DO
randnum% = INT(RND * 11) + 2  'add one to multiplier as INT rounds down and never equals 10
PRINT randnum%
K$ = INPUT$(1)
LOOP UNTIL UCASE$(K$) = "Q"  'q = quit
END
```
  
<br>



##### Example 2: Repeating a random number sequence with RANDOMIZE USING and a specific seed value in QB64 only.
```vb
seed = 10
RANDOMIZE seed
Print7
RANDOMIZE seed
Print7
PRINT "Press a key to start sequence over!"
K$ = INPUT$(1)
RANDOMIZE USING seed
Print7

SUB Print7
FOR r = 1 TO 7
PRINT RND;
NEXT
PRINT: PRINT
END SUB
```
  
<br>



##### Example 3: Random fireworks explosions:
```vb
RANDOMIZE TIMER
DEFINT A-Z

TYPE ftype
vx AS SINGLE
vy AS SINGLE
END TYPE
DIM frag(500) AS ftype 'fragments

DIM pi AS SINGLE
pi = 3.141593

DIM x AS SINGLE, y AS SINGLE
DIM t AS SINGLE, g AS SINGLE, p AS SINGLE
t = 0
g = 0.4 'gravity
p = 15 'explosion power

sw = 800
sh = 600

SCREEN _NEWIMAGE(sw, sh, 32)

DO
FOR i = 0 TO UBOUND(frag)
frag(i).vx = RND * COS(2 * pi * RND)
frag(i).vy = RND * SIN(2 * pi * RND)
NEXT

x = sw * RND
y = sh * RND

FOR t = 0 TO 25 STEP 0.1
LINE (0, 0)-(sw, sh), _RGB(0, 0, 0), BF
FOR i = 0 TO UBOUND(frag)
PSET (x + t * p * frag(i).vx, y + t * p * frag(i).vy + g * t * t), _RGB(255, 255, 0)
NEXT
_DISPLAY
_LIMIT 150

IF _KEYHIT = -27 THEN EXIT DO
NEXT
LOOP
SYSTEM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [RND](RND.md) , [INT](INT.md) , [CINT](CINT.md)
* [TIMER](TIMER.md) (function)
</blockquote>
