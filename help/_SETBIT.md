## _SETBIT
---

### The _SETBIT function is used to set a specified bit of a numerical value to 1 (on state).

#### SYNTAX

`result = _SETBIT ( numericalVariable , numericalValue )`

#### PARAMETERS
* numericalVariable is the variable to set the bit of and can be of the following types: [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , or [_INTEGER64](./_INTEGER64.md) .
* Integer values can be signed or [_UNSIGNED](./_UNSIGNED.md) .
* numericalValue the number of the bit to be set.


#### DESCRIPTION
* Can be used to manually manipulate individual bits of an integer value by setting them to 1 (on state).
* Setting a bit that is already set to 1 will have no effect.
* Bits start at 0 (so a [_BYTE](./_BYTE.md) has bits 0 to 7, [INTEGER](./INTEGER.md) 0 to 15, and so on)


#### EXAMPLES
##### Example 1:
```vb
A~%% = 0 '_UNSIGNED _BYTE
PRINT A~%%
A~%% = _SETBIT(A~%%,6) 'set the seventh bit of A~%%
PRINT A~%%
```
  
```vb
0
64
```
  


#### SEE ALSO
* [_SHL](./_SHL.md) , [_SHR](./_SHR.md) , [INTEGER](./INTEGER.md) , [LONG](./LONG.md)
* [_READBIT](./_READBIT.md) , [_BYTE](./_BYTE.md) , [_INTEGER64](./_INTEGER64.md)
* [_RESETBIT](./_RESETBIT.md) , [_TOGGLEBIT](./_TOGGLEBIT.md)
