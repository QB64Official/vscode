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

## [Unicode](Unicode.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Unicode)
---
<blockquote>

### CP437 is the character set of the original IBM PC. It is also known as DOS-US, OEM-US or IBM Extended character set. They also may erroneously be referred to as the OEM font, Extended ASCII or High ASCII.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Setting up Unicode functionality in a program using any monospace font containing characters from a Code Page.
```vb
_FONT _LOADFONT("c:\windows\fonts\cour.ttf", 24, "MONOSPACE")
'use codepage 850
RESTORE CP850
FOR ascii_code& = 0 TO 255
READ unicode_code&
_MAPUNICODE unicode_code& TO ascii_code&
NEXT

FOR x = 128 TO 255
PRINT CHR$(x);                'demo: display the upper character map
NEXT

PRINT: PRINT
INPUT "Type some characters now >", Alt_numpad$ 'input some characters with Alt + number pad
PRINT
PRINT Alt_numpad$


CP850:
DATA 0,9786,9787,9829,9830,9827,9824,8226,9688,9675,9689,9794,9792,9834,9835,9788,9658,9668
DATA 8597,8252,182,167,9644,8616,8593,8595,8594,8592,8735,8596,9650,9660,32,33,34,35,36,37
DATA 38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66
DATA 67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95
DATA 96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,
DATA 118,119,120,121,122,123,124,125,126,8962,199,252,233,226,228,224,229,231,234,235,232
DATA 239,238,236,196,197,201,230,198,244,246,242,251,249,255,214,220,248,163,216,215,402,225
DATA 237,243,250,241,209,170,186,191,174,172,189,188,161,171,187,9617,9618,9619,9474,9508
DATA 193,194,192,169,9571,9553,9559,9565,162,165,9488,9492,9524,9516,9500,9472,9532,227,195
DATA 9562,9556,9577,9574,9568,9552,9580,164,240,208,202,203,200,305,205,206,207,9496,9484
DATA 9608,9604,166,204,9600,211,223,212,210,245,213,181,254,222,218,219,217,253,221,175,180
DATA 173,177,8215,190,182,167,247,184,176,168,183,185,179,178,9632,160
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  ASCII , ASCII Table
*  [_KEYHIT](KEYHIT.md)  , [_KEYDOWN](KEYDOWN.md) 
*  [_MAPUNICODE](MAPUNICODE.md) 
*  Code Pages
*  Text Using Graphics

</blockquote>
