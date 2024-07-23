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


## [_BIT](BIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BIT)
---
<blockquote>

### The _BIT datatype can return only values of 0 (bit off) and -1 (bit on).

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS [[[_UNSIGNED]]] _BIT [* numberofbits ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* An [_UNSIGNED](UNSIGNED.md) [_BIT](BIT.md) can hold 0 or 1 instead of 0 and -1, if you set the numberofbits you can hold larger values depending on the number of bits you have set (_BIT 
* 8 can hold the same values as [_BYTE](BYTE.md) for example) and the information below is compromised if setting any number of bits other than 1.
* If you set the variable to any other number then the least significant bit of that number will be set as the variables number, if the bit is 1 (on) then the variable will be -1 and if the bit is 0 (off) then the variable will be 0.
* The least significant bit is the last bit on a string of bits (11111) since that bit will only add 1 to the value if set. The most significant bit is the first bit on a string of bits and changes the value more dramatically (significantly) if set on or off.
* The [_BIT](BIT.md) datatype can be succesfully used as a Boolean (TRUE or FALSE) and it requires minimal amount of memory (the lowest amount possible actually, one byte can hold 8 bits, if you want to use bits in order to decrease memory usage, use them as arrays as a [_BIT](BIT.md) variable by itself allocates 4 bytes - [DIM](DIM.md) bitarray(800) [AS](AS.md) [_BIT](BIT.md) uses 100 bytes).
* When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md) .
* [_BIT](BIT.md) is not supported in User Defined TYPES. Use a [_BYTE](BYTE.md) and assign up to 8 bit values as shown below.

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
|
DEC: -32768 16384 8192 4096 2048 1024 512 256 | 128   64  32   16   8    4   2    1
```
  
<br>



##### Example: Shifting bits in a value in QB64 versions prior to 1.3 (you can use _SHL and _SHR starting with version 1.3).
```vb
n = 24
Shift = 3

PRINT LShift(n, Shift)
PRINT RShift(n, Shift)
END

FUNCTION LShift& (n AS LONG, LS AS LONG)
IF LS < 0 THEN EXIT FUNCTION
LShift = INT(n * (2 ^ LS))
END FUNCTION

FUNCTION RShift& (n AS LONG, RS AS LONG)
IF RS < 0 THEN EXIT FUNCTION
RShift = INT(n / (2 ^ RS))
END FUNCTION
```
  
<br>

```vb
192
3
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* &B (binary), [_BYTE](BYTE.md)
* [_SHL](SHL.md) , [_SHR](SHR.md)
* [_DEFINE](DEFINE.md) , [_UNSIGNED](UNSIGNED.md)
* [DIM](DIM.md)
* Binary , Boolean
* Variable Types
* Converting Bytes to Bits
</blockquote>
