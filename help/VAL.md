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

## [VAL](VAL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/VAL)
---
<blockquote>

### The VAL Function returns the decimal numerical equivalent value of a STRING numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`value = VAL ( string_value$ )`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Differences in values returned with QBasic and QB64:
```vb
PRINT VAL("&H") '203 in QB, 0 in QB64
PRINT VAL("&HFFFF") ' -1 QB, 65535 in QB64
PRINT VAL("&HFFFF&") '65535 in both
```
  
<br>

##### Example 2: Converting a string with some number characters
```vb
text$ = "1.23Hello"
number! = VAL(text$)
PRINT number!
```
  
<br>

##### Example 2: Converting a string with some number characters
```vb
1.23
```
  
<br>

##### Example 3: Converting literal and variable string values to numerical values.
```vb
a$ = "33"
PRINT VAL("10") + VAL(a$) + 1
```
  
<br>

##### Example 3: Converting literal and variable string values to numerical values.
```vb
44
```
  
<br>

##### Example 4: Converting a hexadecimal value to decimal value using HEX$ with VAL.
```vb
decnumber% = 96
hexnumber$ = "&H" + HEX$(decnumber%)  'convert decimal value to hex and add hex prefix
PRINT hexnumber$
decimal% = VAL(hexnumber$)
PRINT decimal%
```
  
<br>

##### Example 4: Converting a hexadecimal value to decimal value using HEX$ with VAL.
```vb
&H60
96
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [ASC](ASC.md)  (function) , [STR\$](STR\$.md) 
*  _BIN$ , HEX$ , [OCT\$](OCT\$.md) 

</blockquote>
