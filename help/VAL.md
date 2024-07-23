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


<div class="explanation">Explanation: HEX\$ converts a decimal number to hexadecimal, but VAL will only recognize it as a valid value with the "&H" prefix. Especially since hexadecimal numbers can use "A" through "F" in them. Create a converter function from this code!</div>

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

```vb
44
```
  
<br>



##### Example 4: Converting a hexadecimal value to decimal value using HEX\$ with VAL.
```vb
decnumber% = 96
hexnumber$ = "&H" + HEX$(decnumber%)  'convert decimal value to hex and add hex prefix
PRINT hexnumber$
decimal% = VAL(hexnumber$)
PRINT decimal%
```
  
<br>

```vb
&H60
96
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ASC](ASC.md) (function) , [STR&dollar;](STR&dollar;.md)
* [_BIN&dollar;](BIN&dollar;.md) , [HEX&dollar;](HEX&dollar;.md) , [OCT&dollar;](OCT&dollar;.md)
</blockquote>
