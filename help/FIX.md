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


## [FIX](FIX.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FIX)
---
<blockquote>

### The FIX function rounds a numerical value to the next whole number closest to zero.

</blockquote>

#### SYNTAX

<blockquote>

`result = FIX ( expression )`

</blockquote>

#### PARAMETERS

<blockquote>


* expression is any type of literal or variable numerical value or mathematical calculation.
</blockquote>

#### DESCRIPTION

<blockquote>


* [FIX](FIX.md) effectively truncates (removes) the fractional part of expression , returning the integer part.
* This means that [FIX](FIX.md) rounds down for positive values and up for negative values.
* Use [INT](INT.md) to round down negative values. Positive values are rounded down by both.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Showing the behavior of FIX with positive and negative decimal point values.
```vb
PRINT FIX(2.5)
PRINT FIX(-2.5)
```
  
<br>

```vb
2
-2
```
  
<br>



##### Example 2: The NORMAL arithmetic method (round half up) can be achieved using the function in the example code below:
```vb
PRINT MATHROUND(0.5)
PRINT MATHROUND(1.5)
PRINT MATHROUND(2.5)
PRINT MATHROUND(3.5)
PRINT MATHROUND(4.5)
PRINT MATHROUND(5.5)

FUNCTION MATHROUND(n)
MATHROUND = FIX(n + 0.5 * SGN(n))
END FUNCTION
```
  
<br>

```vb
1
2
3
4
5
6
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CEIL](CEIL.md)
* [INT](INT.md) , [CINT](CINT.md)
* [CLNG](CLNG.md) , [_ROUND](ROUND.md)
* [MOD](MOD.md) , Integer Division
* Normal division
</blockquote>
