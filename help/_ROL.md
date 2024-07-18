## _ROL
---

### The _ROL function is used to rotate the bits of a numerical value to the left. A rotation (or circular shift) is an operation similar to shift ( _SHL and _SHR ) except that the bits that fall off at one end are put back to the other end.

#### SYNTAX

`result = _ROL ( numericalVariable , numericalValue )`

#### PARAMETERS
* numericalVariable is the variable to shift the bits of and can be of the following types: [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , or [_INTEGER64](./_INTEGER64.md) .
* Integer values can be signed or [_UNSIGNED](./_UNSIGNED.md) .
* numericalValue is the number of places to rotate the bits.
* While 0 is a valid value it will have no affect on the variable being rotated.


#### DESCRIPTION
* In left rotation, the bits that fall off at left end are put back at right end.
* The type of variable used to store the results should match the type of the variable being shifted.


#### EXAMPLES
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
  


#### SEE ALSO
* [_ROR](./_ROR.md) , [_SHL](./_SHL.md) , [_SHR](./_SHR.md)
* [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md)
* [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md)
