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


## [&B](&B.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%26B)
---
<blockquote>

### The &B prefix denotes that an integer value is expressed in a Binary base 2 format. Every 8 digits represent a _BYTE .

</blockquote>

#### SYNTAX

<blockquote>

`a& = &B 10010110`

</blockquote>

#### DESCRIPTION

<blockquote>


* The base 2 numbering system uses binary digit values of 0 and 1 only.
* Leading zero values can be omitted just like in decimal values as they add nothing to the return value.
* Decimal values returned can be any signed [INTEGER](INTEGER.md) , [LONG](LONG.md) integer, or [_INTEGER64](INTEGER64.md) value so use those type of variables when converting directly as shown above in the Syntax. The program "overflow" error limits are listed as:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
c&& = -1: d& = -1: e% = -1: f%% = -1
bi$ = _BIN$(f%%)
PRINT "Max binary _BYTE = "; bi$; " with"; LEN(bi$); "digits ="; VAL("&B" + bi$)
bi$ = _BIN$(e%)
PRINT "Max binary INTEGER = "; bi$; " with"; LEN(bi$); "digits ="; VAL("&B" + bi$)
bi$ = _BIN$(d&)
PRINT "Max binary LONG = "; bi$; " with"; LEN(bi$); "digits ="; VAL("&B" + bi$)
bi$ = _BIN$(c&&)
PRINT "Max binary _INTEGER64 = "; bi$; " with"; LEN(bi$); "digits ="; VAL("&B" + bi$)
bi$ = _BIN$(9223372036854775807)
PRINT "Max _INTEGER64 value = "; bi$; " with"; LEN(bi$); "digits"
bi$ = _BIN$(-9223372036854775808)
PRINT "Min _INTEGER64 value = "; bi$; " with"; LEN(bi$); "digits"
```
  
<br>

```vb
Max binary _BYTE = 11111111 with 8 digits = 255
Max binary INTEGER = 1111111111111111 with 16 digits = 65535
Max binary LONG = 11111111111111111111111111111111 with 32 digits = 4294967295
Max binary _INTEGER64 = 1111111111111111111111111111111111111111111111111111111111111111 with 64 digits =-1
Max _INTEGER64 value = 111111111111111111111111111111111111111111111111111111111111111 with 63 digits
Min _INTEGER64 value = 1000000000000000000000000000000000000000000000000000000000000000 with 64 digits
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_BIN&dollar;](BIN&dollar;.md) , [HEX&dollar;](HEX&dollar;.md) , [OCT&dollar;](OCT&dollar;.md) , [STR&dollar;](STR&dollar;.md)
* &H (hexadecimal), &O (octal), [VAL](VAL.md)
* Base Comparisons
</blockquote>
