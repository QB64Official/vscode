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


## [MKI\$](MKI\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MKI%24)
---
<blockquote>

### The MKI$ function encodes an INTEGER numerical value into a 2-byte ASCII STRING value.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = MKI$ ( integerVariableOrLiteral% )`

</blockquote>

#### DESCRIPTION

<blockquote>


* integerVariableOrLiteral% is converted to two ASCII characters.
* [INTEGER](INTEGER.md) values can range from -32768 to 32767.
* [MKI&dollar;](MKI&dollar;.md) string values can be converted back to numerical [INTEGER](INTEGER.md) values using [CVI](CVI.md) .
* The function takes up less byte space in a file than using the text numerical value when the value is over 2 digits.
* When a variable value is used with [PUT](PUT.md) a numerical value is converted automatically in [RANDOM](RANDOM.md) and [BINARY](BINARY.md) files.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: How MKI\$ creates a two byte string integer value to save file space.
```vb
SCREEN 12    '_PRINTSTRING requires a graphic screen mode
DO
COLOR 14: LOCATE 13, 20: INPUT "Enter an Integer from 1 to 32767(0 quits): ", number%
IF number% < 1 THEN EXIT DO
CLS
A$ = CHR$(number% MOD 256)   'first digit(0 to 255)
B$ = CHR$(number% \ 256)     'second digit(0 to 127)

MKIvalue$ = A$ + B$
Q$ = CHR$(34)
strng$ = "CHR$(" + LTRIM$(STR$(number% MOD 256)) + ") + CHR$(" + LTRIM$(STR$(number% \ 256)) + ")"
COLOR 11
_PRINTSTRING (222, 252), STR$(number%) + " = " + strng$
_PRINTSTRING (252, 300), "MKI$ value = " + Q$ + MKIvalue$ + Q$ 'print ASCII characters
LOOP
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [MKD&dollar;](MKD&dollar;.md) , [MKS&dollar;](MKS&dollar;.md) , [MKL&dollar;](MKL&dollar;.md)
* [CVD](CVD.md) , [CVI](CVI.md) , [CVS](CVS.md) , [CVL](CVL.md)
* [_MK&dollar;](MK&dollar;.md) , [_CV](CV.md)
</blockquote>
