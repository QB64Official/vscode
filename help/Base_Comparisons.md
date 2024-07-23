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


## [Base Comparisons](Base_Comparisons.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Base%20Comparisons)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```
Comparing the Base Numbering Systems

Decimal (base 10)    Binary (base 2)    Hexadecimal (base 16)    Octal (base 8)

0                  0000                  0                     0
1                  0001                  1                     1
2                  0010                  2                     2
3                  0011                  3                     3
4                  0100                  4                     4
5                  0101                  5                     5
6                  0110                  6                     6
7                  0111                  7                     7 -- maxed
8                  1000                  8                    10
maxed-- 9                  1001                  9                    11
10                  1010                  A                    12
11                  1011                  B                    13
12                  1100                  C                    14
13                  1101                  D                    15
14                  1110                  E                    16
15  -------------   1111 <--- Match --->  F  ----------------  17 -- max 2
16                 10000                 10                    20

When the Decimal value is 15, the other 2 base systems are all maxed out!
The Binary values can be compared to all of the HEX value digit values so
it is possible to convert between the two quite easily. To convert a HEX
value to Binary just add the 4 binary digits for each HEX digit place so:

F      A      C      E
&HFACE = 1111 + 1010 + 1100 + 1101 = &B1111101011001101

To convert a Binary value to HEX you just need to divide the number into
sections of four digits starting from the right(LSB) end. If one has less
than 4 digits on the left end you could add the leading zeros like below:

&B101011100010001001 = 0010 1011 1000 1000 1001
hexadecimal =  2  + B  + 8 +  8  + 9 = &H2B889

See the Decimal to Binary conversion function that uses HEX$ on the &H page,
but take it for education only. In QB64-PE just use the new _BIN$ function.
```
  
<br>

```vb
tabletop$ = " Decimal | Hexadecimal | Octal | Binary "
tablesep$ = "---------+-------------+-------+--------"
tableout$ = "  \ \    |      \\     |   \\  |  \  \  " 'the PRINT USING template

LOCATE 2, 10: PRINT tabletop$
LOCATE 3, 10: PRINT tablesep$
FOR n% = 0 TO 15
LOCATE 4 + n%, 10: PRINT USING tableout$; STR$(n%); HEX$(n%); OCT$(n%); _BIN$(n%)
NEXT n%
```
  
<br>

```vb
Decimal | Hexadecimal | Octal | Binary
---------+-------------+-------+--------
0     |      0      |   0   |  0
1     |      1      |   1   |  1
2     |      2      |   2   |  10
3     |      3      |   3   |  11
4     |      4      |   4   |  100
5     |      5      |   5   |  101
6     |      6      |   6   |  110
7     |      7      |   7   |  111
8     |      8      |   10  |  1000
9     |      9      |   11  |  1001
10    |      A      |   12  |  1010
11    |      B      |   13  |  1011
12    |      C      |   14  |  1100
13    |      D      |   15  |  1101
14    |      E      |   16  |  1110
15    |      F      |   17  |  1111
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_BIN&dollar;](BIN&dollar;.md) , [HEX&dollar;](HEX&dollar;.md) , [OCT&dollar;](OCT&dollar;.md) , [STR&dollar;](STR&dollar;.md)
* &B (binary), &H (hexadecimal), &O (octal), [VAL](VAL.md)
</blockquote>
