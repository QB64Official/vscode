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


## [_MAPUNICODE](MAPUNICODE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MAPUNICODE)
---
<blockquote>

### The _MAPUNICODE statement maps a Unicode value to an ASCII character code value.

</blockquote>

#### SYNTAX

<blockquote>

`_MAPUNICODE unicode& TO asciiCode%`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Converting the extended ASCII characters to other characters using DATA from the Unicode Code Pages .
```vb
SCREEN 0
_FONT _LOADFONT("C:\windows\fonts\cour.ttf", 20, "MONOSPACE")

RESTORE Microsoft_pc_cpMIK
FOR ASCIIcode = 128 TO 255
READ unicode
_MAPUNICODE Unicode TO ASCIIcode
NEXT


FOR i = 128 TO 255
PRINT CHR$(i) + " ";
cnt = cnt + 1
IF cnt MOD 16 = 0 THEN PRINT
NEXT
END

Microsoft_pc_cpMIK:
DATA 1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055
DATA 1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071
DATA 1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087
DATA 1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103
DATA 9492,9524,9516,9500,9472,9532,9571,9553,9562,9566,9577,9574,9568,9552,9580,9488
DATA 9617,9618,9619,9474,9508,8470,167,9559,9565,9496,9484,9608,9604,9612,9616,9600
DATA 945,223,915,960,931,963,181,964,934,920,937,948,8734,966,949,8745
DATA 8801,177,8805,8804,8992,8993,247,8776,176,8729,183,8730,8319,178,9632,160
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_MAPUNICODE](MAPUNICODE.md) (function)
* ASCII , Unicode , [_FONT](FONT.md)
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* [ASC](ASC.md) , [INKEY&dollar;](INKEY&dollar;.md) , [CHR&dollar;](CHR&dollar;.md)
* Code Pages
* Text Using Graphics
</blockquote>
