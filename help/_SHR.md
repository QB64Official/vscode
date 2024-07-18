## _SHR
---

### The _SHR function is used to shift the bits of a numerical value to the right.

#### SYNTAX

`result = _SHR ( numericalVariable , numericalValue )`

#### PARAMETERS
* numericalVariable is the variable to shift the bits of and can be of the following types: [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md) , or [_BYTE](./_BYTE.md) .
* Integer values can be signed or [_UNSIGNED](./_UNSIGNED.md) .
* numericalValue the number of places to shift the bits.
* While 0 is a valid value it will have no affect on the variable being shifted.


#### DESCRIPTION
* Allows for division of a value by 2 faster than normal division (see example 2 below).
* Bits that reach the end of a variables bit count are dropped.
* The type of variable used to store the results should match the type of the variable being shifted.
* NOTE: When dealing with SIGNED variables, shifting the bits right will leave the sign bit set. This is due to how C++ deals with bit shifting under the hood.


#### EXAMPLES
##### Example 1:
```vb
A~%% = 128 'set left most bit of an_UNSIGNED _BYTE
PRINT A~%%
PRINT _SHR(A~%%,7)
PRINT _SHR(A~%%,8) 'shift the bit off the right 'edge'
```
  
```vb
128
1
0
```
  
##### Example 2:
```vb
A~%% = 128
FOR I%% = 0 TO 8
   PRINT _SHR(A~%%, I%%)
NEXT I%%
```
  
```vb
128
 64
 32
 16
 8
 4
 2
 1
 0
```
  


#### SEE ALSO
* [_SHL](./_SHL.md) , [_ROL](./_ROL.md) , [_ROR](./_ROR.md)
* [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md)
* [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md)
