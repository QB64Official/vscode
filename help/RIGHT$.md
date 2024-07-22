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

## [RIGHT\$](RIGHT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RIGHT$)
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

*  The stringvalue$ can be any [STRING](STRING.md)  of ASCII characters [AS](AS.md)  a [STRING](STRING.md)  variable.
*  The numberofcharacters [INTEGER](INTEGER.md)  value determines the number of characters to return from the right end of the string.

</blockquote>

#### DESCRIPTION

<blockquote>

*  If the number of characters exceeds the string length( [LEN](LEN.md)  ) the entire string is returned.
*  RIGHT$ returns always start at the last character of the string, even if a space. RTRIM$ can remove ending spaces.
*  Number of characters cannot be a negative value.


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

##### Example 1: Getting the right portion of a string value such as a person's last name.
```vb
Williams
```
  
<br>

##### Example 2: Adding the leading zero in single digit HEX$ values using RIGHT to take the right two hexadecimal string digits.
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

##### Example 2: Adding the leading zero in single digit HEX$ values using RIGHT to take the right two hexadecimal string digits.
```vb
&HFFFF0080
Colored text
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  LEFT$ , MID$ (function)
*  LTRIM$ , [RTRIM\$](RTRIM\$.md) 
*  [INSTR](INSTR.md)  , [HEX\$](HEX\$.md) 

</blockquote>
