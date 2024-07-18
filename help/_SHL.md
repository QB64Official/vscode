## _SHL
---

### The _SHL function is used to shift the bits of a numerical value to the left.

#### SYNTAX

`result = _SHL ( numericalVariable , numericalValue )`

#### PARAMETERS
* numericalVariable is the variable to shift the bits of and can be of the following types: [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md) , or [_BYTE](./_BYTE.md) .
* Integer values can be signed or [_UNSIGNED](./_UNSIGNED.md) .
* numericalValue is the number of places to shift the bits.
* While 0 is a valid value it will have no affect on the variable being shifted.


#### DESCRIPTION
* Allows for multiplication of a value by 2 faster than normal multiplication (see example 2 below).
* Bits that reach the end of a variable's bit count are dropped (when using a variable of the same type - otherwise they will carry over).
* The type of variable used to store the results should match the type of the variable being shifted.


#### EXAMPLES
##### Example 1:
```vb
A~%% = 1 'set right most bit of an_UNSIGNED _BYTE
PRINT A~%%
PRINT _SHL(A~%%,7)
B~%% = _SHL(A~%%,8) 'shift the bit off the left 'edge'
PRINT B~%%
```
  
```vb
1
128
0
```
  
##### Example 2:
```vb
A~%% = 1
FOR I%% = 0 TO 8
   PRINT _SHL(A~%%, I%%)
NEXT I%%
```
  
```vb
1
  2
  4
  8
 16
 32
 64
128
256
```
  


#### SEE ALSO
* [_SHR](./_SHR.md) , [_ROL](./_ROL.md) , [_ROR](./_ROR.md)
* [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md)
* [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md)
