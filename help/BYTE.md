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


## [_BYTE](BYTE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BYTE)
---
<blockquote>

### A _BYTE variable can hold signed variable values from -128 to 127 (one byte or 8 _BITs ). Unsigned from 0 to 255.

</blockquote>

#### SYNTAX

<blockquote>

`DIM byte AS [[[_UNSIGNED]]] _BYTE`

</blockquote>

#### DESCRIPTION

<blockquote>


* Signed [_BYTE](BYTE.md) values can range from -128 to 127.
* [_UNSIGNED](UNSIGNED.md) _BYTEs can hold values from 0 to 255. [_UNSIGNED](UNSIGNED.md) expands the range of positive values.
* Can be defined in a QB64 [_DEFINE](DEFINE.md) statement using a starting letter range of variable names.
* Also can be used in a subroutine parameter [AS](AS.md) [_BYTE](BYTE.md) variable definitions.
* Define a byte using the suffix %% after the variable name: variable%% = -54
* Define an unsigned byte by adding the suffix ~%% after the variable name: variable~%% = 54
* When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md) .

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Offset or Position:    0    1   2   3   4   5   6   7      Example: 11110000
----------------------------------             --------
Big-Endian Bit On Value:   128  64  32  16   8   4   2   1                 240
Little-Endian Bit On Value:    1    2   4   8  16  32  64  128                 15
```
  
<br>

```vb
16 BIT INTEGER OR REGISTER
AH (High Byte Bits)                         AL (Low Byte Bits)
BIT:    15    14   13   12   11   10   9   8  |   7   6    5   4    3    2   1    0
---------------------------------------|--------------------------------------
HEX:   8000  4000 2000 1000  800 400  200 100 |  80   40  20   10   8    4   2    1
```
  
<br>

```vb
DIM unsig AS _UNSIGNED _BYTE
DIM sig AS _BYTE

CLS
unsig = 1
sig = 1
PRINT "&B00000001 = unsigned & signed are both" + STR$(unsig AND sig)

unsig = 127
sig = 127
PRINT "&B01111111 = unsigned & signed are both" + STR$(unsig AND sig)

unsig = 255
sig = 255
PRINT "&B11111111 = unsigned is" + STR$(unsig) + " but signed is " + STR$(sig)

unsig = 254
sig = 254
PRINT "&B11111110 = unsigned is" + STR$(unsig) + " but signed is " + STR$(sig)

unsig = 253
sig = 253
PRINT "&B11111101 = unsigned is" + STR$(unsig) + " but signed is " + STR$(sig)

PRINT
PRINT "The signed value needs the MSB bit for the sign."
PRINT "The most significant bit is furthest to the left."
```
  
<br>

```vb
&B00000001 = unsigned & signed are both 1
&B01111111 = unsigned & signed are both 127
&B11111111 = unsigned is 255 but signed is -1
&B11111110 = unsigned is 254 but signed is -2
&B11111101 = unsigned is 253 but signed is -3

The signed value needs the MSB bit for the sign.
The most significant bit is furthest to the left.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_BIT](BIT.md) , &B
* [_DEFINE](DEFINE.md) , [DIM](DIM.md)
* [_UNSIGNED](UNSIGNED.md)
* [_SHL](SHL.md) , [_SHR](SHR.md)
* Mathematical Operations
* Screen Memory
* Variable Types
* Converting Bytes to Bits
</blockquote>
