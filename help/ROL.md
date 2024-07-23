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


## [_ROL](ROL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ROL)
---
<blockquote>

### The _ROL function is used to rotate the bits of a numerical value to the left. A rotation (or circular shift) is an operation similar to shift ( _SHL and _SHR ) except that the bits that fall off at one end are put back to the other end.

</blockquote>

#### SYNTAX

<blockquote>

`result = _ROL ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>


* numericalVariable is the variable to shift the bits of and can be of the following types: [_BYTE](BYTE.md) , [INTEGER](INTEGER.md) , [LONG](LONG.md) , or [_INTEGER64](INTEGER64.md) .
* Integer values can be signed or [_UNSIGNED](UNSIGNED.md) .
* numericalValue is the number of places to rotate the bits.
* While 0 is a valid value it will have no affect on the variable being rotated.
</blockquote>

#### DESCRIPTION

<blockquote>


* In left rotation, the bits that fall off at left end are put back at right end.
* The type of variable used to store the results should match the type of the variable being shifted.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
OPTION _EXPLICIT

DIM a AS _UNSIGNED _BYTE
DIM b AS _UNSIGNED INTEGER
DIM c AS _UNSIGNED LONG
DIM d AS _UNSIGNED _INTEGER64

a = &B11110000
b = &B1111111100000000
c = &B11111111111111110000000000000000
d = &B1111111111111111111111111111111100000000000000000000000000000000

DO
a = _ROL(a, 1)
b = _ROL(b, 1)
c = _ROL(c, 1)
d = _ROL(d, 1)

LOCATE 1, 1: PRINT RIGHT$(STRING$(8, "0") + _BIN$(a), 8);
LOCATE 2, 1: PRINT RIGHT$(STRING$(16, "0") + _BIN$(b), 16);
LOCATE 3, 1: PRINT RIGHT$(STRING$(32, "0") + _BIN$(c), 32);
LOCATE 4, 1: PRINT RIGHT$(STRING$(64, "0") + _BIN$(d), 64);

_LIMIT 15
LOOP WHILE _KEYHIT <> 27
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ROR](ROR.md) , [_SHL](SHL.md) , [_SHR](SHR.md)
* [_BYTE](BYTE.md) , [INTEGER](INTEGER.md)
* [LONG](LONG.md) , [_INTEGER64](INTEGER64.md)
</blockquote>
