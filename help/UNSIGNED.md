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


## [_UNSIGNED](UNSIGNED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_UNSIGNED)
---
<blockquote>

### _UNSIGNED defines a numerical value as being only positive.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS [[[_UNSIGNED]]] datatype`

</blockquote>

#### DESCRIPTION

<blockquote>


* Datatype can be any of the following: [INTEGER](INTEGER.md) , [LONG](LONG.md) , [_BIT](BIT.md) , [_BYTE](BYTE.md) , [_INTEGER64](INTEGER64.md) , [_OFFSET](OFFSET.md)
* [SINGLE](SINGLE.md) , [DOUBLE](DOUBLE.md) and [_FLOAT](FLOAT.md) variable types cannot be _UNSIGNED.
* [_UNSIGNED](UNSIGNED.md) can be used in a [_DEFINE](DEFINE.md) statement to set undefined variable name first letters as all positive-only values.
* Can also be used in [DIM](DIM.md) statements or subprocedure parameter definitions following [AS](AS.md) .
* [_UNSIGNED](UNSIGNED.md) allows larger positive numerical variable value limits than signed ones.
* The unsigned variable type suffix used is the tilde (~) , right before the number's own type suffix: variableName~&

</blockquote>

#### EXAMPLES

<blockquote>

```vb
00000001 - unsigned & signed are both 1
01111111 - unsigned & signed are both 127
11111111 - unsigned is 255 but signed is -1
11111110 - unsigned is 254 but signed is -2
11111101 - unsigned is 253 but signed is -3
```
  
<br>



##### Example 1: In QB64 , when a signed INTEGER value exceeds 32767, the value may become a negative value:
```vb
i% = 38000
PRINT i%
```
  
<br>


<div class="explanation">Explanation: In QB64 an unsigned integer value of 65536 would be 0 with values increasing by the value minus 65536.</div>

```vb
-27536
```
  
<br>



##### Example 2: In QB64 , _UNSIGNED INTEGER values greater than 65535 cycle over again from zero:
```vb
i~% = 70000
PRINT i~%
```
  
<br>

```vb
4464
```
  
<br>



##### Example 3: Demonstrating how _UNSIGNED variables expand the INTEGER range.
```vb
DIM n AS _UNSIGNED INTEGER
DIM pn AS _UNSIGNED INTEGER
LOCATE 3, 6: PRINT "Press Esc to exit loop"
FOR n = 1 TO 80000
_LIMIT 10000 ' 6.5 second loop
LOCATE 12, 37: PRINT n ' display current value
IF n > 0 THEN pn = n ' find highest value
IF n = 0 THEN Count = Count + 1: LOCATE 14, 37: PRINT "Count:"; Count; "Max:"; pn
IF INP(&H60) = 1 THEN EXIT FOR ' escape key exit
NEXT n
END
```
  
<br>

```vb
Press Esc to exit loop




65462

Count: 13 Max: 65535
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* DECLARE, [SUB](SUB.md) , [FUNCTION](FUNCTION.md)
* [DIM](DIM.md) , [_DEFINE](DEFINE.md)
* [DEFSTR](DEFSTR.md) , [DEFLNG](DEFLNG.md) , [DEFINT](DEFINT.md) , [DEFSNG](DEFSNG.md) , [DEFDBL](DEFDBL.md)
* [INTEGER](INTEGER.md) , [LONG](LONG.md) , [_INTEGER64](INTEGER64.md)
* [ABS](ABS.md) , [SGN](SGN.md)
* Variable Types
</blockquote>
