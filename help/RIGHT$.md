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


## [RIGHT\$](RIGHT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RIGHT%24)
---
<blockquote>

### The RIGHT$ function returns a set number of characters in a STRING variable starting from the end and counting backwards.

</blockquote>

#### SYNTAX

<blockquote>

`RIGHT$( stringvalue$, numberofcharacters% )`

</blockquote>

#### PARAMETERS

<blockquote>


* The stringvalue$ can be any string of ASCII characters as a [STRING](STRING.md) variable.
* The numberofcharacters [INTEGER](INTEGER.md) value determines the number of characters to return from the right end of the string.
</blockquote>

#### DESCRIPTION

<blockquote>


* If the number of characters exceeds the string length( [LEN](LEN.md) ) the entire string is returned.
* [RIGHT&dollar;](RIGHT&dollar;.md) returns always start at the last character of the string, even if a space. [RTRIM&dollar;](RTRIM&dollar;.md) can remove ending spaces.
* Number of characters cannot be a negative value.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Getting the right portion of a string value such as a person's last name.
```vb
name$ = "Tom Williams"

Last$ = RIGHT$(name$, LEN(name$) - INSTR(name$, " ")) 'subtract space position from string length

PRINT Last$
```
  
<br>

```vb
Williams
```
  
<br>


<div class="explanation">Note: When a single hexadecimal digit is returned the resulting value will need the leading zero added. Otherwise the hexa- decimal value created will have a byte missing from the value. EX: Color &HFF000000 is valid while &HFF000 is not.</div>



##### Example 2: Adding the leading zero in single digit HEX\$ values using RIGHT to take the right two hexadecimal string digits.
```vb
SCREEN _NEWIMAGE(640, 480, 32) '32 bit screen modes ONLY!
red = 255
green = 0
blue = 128

Color32 red, green, blue
PRINT "Colored text"

SUB Color32 (R, G, B)
R = R AND &HFF: G = G AND &HFF: B = B AND &HFF '    limit values to 0 to 255
hexadecimal$ = "&HFF" + RIGHT$("0" + HEX$(R), 2) + RIGHT$("0" + HEX$(G), 2) + RIGHT$("0" + HEX$(B), 2)
PRINT hexadecimal$
COLOR VAL(hexadecimal$)
END SUB
```
  
<br>

```vb
&HFFFF0080
Colored text
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [LEFT&dollar;](LEFT&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [LTRIM&dollar;](LTRIM&dollar;.md) , [RTRIM&dollar;](RTRIM&dollar;.md)
* [INSTR](INSTR.md) , [HEX&dollar;](HEX&dollar;.md)
</blockquote>
