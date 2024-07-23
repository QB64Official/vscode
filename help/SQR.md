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


## [SQR](SQR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SQR)
---
<blockquote>

### The SQR function returns the square root of a numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`square_root = SQR( value )`

</blockquote>

#### DESCRIPTION

<blockquote>


* The square root returned is normally a [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) numerical value.
* The value parameter can be any positive numerical type. Negative parameter values will not work!
* Other exponential root functions can use fractional exponents( ^ ) enclosed in parenthesis only . EX: root  =  c ^ (a / b)

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Finding the hypotenuse of a right triangle:
```vb
A% = 3: B% = 4
PRINT "hypotenuse! ="; SQR((A% ^ 2) + (B% ^ 2))
```
  
<br>

```vb
hypotenuse = 5
```
  
<br>


<div class="explanation">Explanation: A negative root means that the exponent value is actually inverted to a fraction of 1. So x ^ -2 actually means the result will be: 1 / (x ^ 2).</div>



##### Example 2: Finding the Cube root of a number.
```vb
number = 8
cuberoot = number ^ (1/3)
PRINT cuberoot
```
  
<br>

```vb
2
```
  
<br>



##### Example 3: Negative roots return fractional values of one.
```vb
number = 8
negroot = number ^ -2
PRINT negroot
```
  
<br>

```vb
.015625
```
  
<br>



##### Example 4: Fast Prime number checker limits the numbers checked to the square root (half way).
```vb
DEFLNG P
DO
PRIME = -1   'set PRIME as True
INPUT "Enter any number to check up to 2 million (Enter quits): ", guess$
PR = VAL(guess$)
IF PR MOD 2 THEN              'check for even number
FOR P = 3 TO SQR(PR) STEP 2 'largest number that could be a multiple is the SQR
IF PR MOD P = 0 THEN PRIME = 0: EXIT FOR 'MOD = 0 when evenly divisible by another
NEXT
ELSE : PRIME = 0 'number to be checked is even so it cannot be a prime
END IF
IF PR = 2 THEN PRIME = -1 '2 is the ONLY even prime
IF PR = 1 THEN PRIME = 0  'MOD returns true but 1 is not a prime by definition
IF PRIME THEN PRINT "PRIME! How'd you find me? " ELSE PRINT "Not a prime, you lose!"
LOOP UNTIL PR = 0
```
  
<br>

```vb
Enter any number to check up to 2 million (Enter quits): 12379
PRIME! How'd you find me?
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [MOD](MOD.md)
* ^
* Mathematical Operations
* Derived Mathematical Functions
</blockquote>
