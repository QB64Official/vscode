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


## [CINT](CINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CINT)
---
<blockquote>

### The CINT function rounds decimal point numbers up or down to the nearest INTEGER value.

</blockquote>

#### SYNTAX

<blockquote>

`value% = CINT ( expression )`

</blockquote>

#### PARAMETERS

<blockquote>


* expression is any [TYPE](TYPE.md) of literal or variable numerical value or mathematical calculation.
</blockquote>

#### DESCRIPTION

<blockquote>


* Values greater than .5 are rounded up. Values lower than .5 are rounded down.
* Warning: Since [CINT](CINT.md) is used for integer values, the input values cannot exceed 32767 to -32768!
* Use [CLNG](CLNG.md) for [LONG](LONG.md) integer values exceeding [INTEGER](INTEGER.md) limitations.
* Note: When decimal point values are given to BASIC functions requiring INTEGERs the value will be CINTed .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Shows how CINT rounds values up or down as in "bankers' rounding".
```vb
a% = CINT(1.49): b% = CINT(1.50): c = 11.5
COLOR c: PRINT a%, b%, c
```
  
<br>

```vb
1       2       11.5
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ROUND](ROUND.md) , [_CEIL](CEIL.md)
* [CLNG](CLNG.md) , [CSNG](CSNG.md) , [CDBL](CDBL.md)
* [INT](INT.md) , [FIX](FIX.md)
</blockquote>
