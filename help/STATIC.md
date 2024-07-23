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


## [STATIC](STATIC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STATIC)
---
<blockquote>

### The STATIC keyword is used in declaration statements to control where variables are stored.

</blockquote>

#### DESCRIPTION

<blockquote>


* A [STATIC](STATIC.md) list can be used in [SUB](SUB.md) and [FUNCTION](FUNCTION.md) procedures to designate one or more variables to retain their values.
* Variables and arrays with static storage will retain their values in between procedure calls. The values may also be used recursively.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Finding the binary bit settings from a 32 bit LONG register return using recursion.
```vb
INPUT "Enter a numerical value to see binary value: ", num&
PRINT BinStr$(num&)

END

FUNCTION BinStr$ (n&) STATIC 'comment out STATIC to see what happens!
DIM p%, s$
IF 2 ^ p% > n& THEN
p% = 0
ELSE
IF n& AND 2 ^ p% THEN s$ = "1" + s$ ELSE s$ = "0" + s$
IF n& > 2 ^ p% THEN
p% = p% + 1
s$ = BinStr$(n&) 'recursive call to itself
ELSE: p% = 0
END IF
END IF
IF s$ = "" THEN BinStr$ = "0" ELSE BinStr$ = s$
END FUNCTION
```
  
<br>



##### Example 2: Using a static array to cache factorials, speeding up repeated calculations:
```vb
PRINT Factorial(0)
PRINT Factorial(5)
PRINT Factorial(50

FUNCTION Factorial# ( n AS DOUBLE )
CONST maxNToCache = 50
STATIC resultCache() AS DOUBLE
STATIC firstCall AS INTEGER

' The lookup table is initially empty, so re-size it..
IF firstCall = 0 THEN
firstCall = -1
REDIM resultCache(maxNToCache) AS DOUBLE

' ..and pre-calculate some factorials.
resultCache(0) = 1
resultCache(1) = 1
resultCache(2) = 2
END IF

' See if we have the result cached. If so, we're done.
IF n <= maxNToCache THEN
IF resultCache(n) <> 0 THEN
Factorial = resultCache(n)
EXIT FUNCTION
END IF
END IF

' If not, we use recursion to calculate the result, then cache it for later use:
resultCache(n) = INT(n) * Factorial(INT(n) - 1)
Factorial = resultCache(n)
END FUNCTION
```
  
<br>

```vb
1
120
3.041409320171338D+64
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DIM](DIM.md) , [REDIM](REDIM.md) , [COMMON](COMMON.md)
* [SUB](SUB.md) , [FUNCTION](FUNCTION.md)
* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)
* [TYPE](TYPE.md) , Arrays
* [&dollar;STATIC](&dollar;STATIC.md) , [&dollar;DYNAMIC](&dollar;DYNAMIC.md)
* Data types
</blockquote>
