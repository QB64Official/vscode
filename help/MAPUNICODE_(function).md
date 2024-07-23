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


## [_MAPUNICODE (function)](MAPUNICODE_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MAPUNICODE%20%28function%29)
---
<blockquote>

### The _MAPUNICODE function returns the Unicode (UTF-32) code point value of a mapped ASCII character code.

</blockquote>

#### SYNTAX

<blockquote>

`utfValue& = _MAPUNICODE ( asciiCode% )`

</blockquote>

#### DESCRIPTION

<blockquote>


* UTF-32 values have 4-byte encoding so the return variable should be [LONG](LONG.md) .
* The asciiCode% can be any [INTEGER](INTEGER.md) value from 0 to 255.
* Returns can be used to verify or catalog the present Unicode mapping.
* The function returns Unicode values for the control characters, CHR$(127) and extended characters without mapping them first.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Store function return values in an array for ASCII codes 0 to 255 to restore them later.
```vb
DIM Unicode&(255)
SCREEN 0
_FONT _LOADFONT("C:\Windows\Fonts\Cour.ttf", 20, "MONOSPACE") 'select monospace font

FOR ascii = 0 TO 255
Unicode&(ascii) = _MAPUNICODE(ascii)     'read Unicode values
PRINT Unicode&(ascii);                   'display values in demo
NEXT
'rest of program
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_MAPUNICODE](MAPUNICODE.md)
* Unicode , Code Pages
* ASCII , [CHR&dollar;](CHR&dollar;.md) , [ASC](ASC.md) (function)
* Text Using Graphics
</blockquote>
