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


## [LOG](LOG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOG)
---
<blockquote>

### The LOG math function returns the natural logarithm of a specified numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`logarithm! = LOG ( value )`

</blockquote>

#### DESCRIPTION

<blockquote>


* value MUST be greater than 0. "Illegal function call" error occurs if negative or zero values are used.
* The natural logarithm is the logarithm to the base e = 2.718282 (approximately).
* The natural logarithm of a is defined as the integral from 1 to a of dx/x.
* Returns are default [SINGLE](SINGLE.md) precision unless the value parameter uses [DOUBLE](DOUBLE.md) precision.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: FUNCTION to find the base ten logarithm of a numerical value.
```vb
FUNCTION Log10#(value AS DOUBLE) STATIC
Log10# = LOG(value) / LOG(10.#)
END FUNCTION
```
  
<br>



##### Example 2: A binary FUNCTION to convert INTEGER values using LOG to find the number of digits the return will be.
```vb
FUNCTION BinStr$ (n&)
IF n& < 0 THEN EXIT FUNCTION            'positive numbers only! negative error!
FOR p% = 0 TO INT(LOG(n& + .1) / LOG(2))     ' added +.1 to get 0 to work
IF n& AND 2 ^ p% THEN s$ = "1" + s$ ELSE s$ = "0" + s$  'find bits on
NEXT p%
IF s$ = "" THEN BinStr$ = "&B0" ELSE BinStr$ = "&B" + s$       'check for zero return
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [EXP](EXP.md) , &B (binary number)
* Derived Mathematical Functions
</blockquote>
