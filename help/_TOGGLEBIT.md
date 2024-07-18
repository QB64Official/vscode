## _TOGGLEBIT
---

### The _TOGGLEBIT function is used to toggle a specified bit of a numerical value.

#### SYNTAX

`result = _TOGGLEBIT ( numericalVariable , numericalValue )`

#### PARAMETERS
* numericalVariable is the variable to toggle the bit of and can be of the following types: [_BYTE](./_BYTE.md) , [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , or [_INTEGER64](./_INTEGER64.md) .
* Integer values can be signed or [_UNSIGNED](./_UNSIGNED.md) .
* numericalValue the number of the bit to be set.


#### DESCRIPTION
* Can be used to manually manipulate individual bits of an integer value by toggling their state.
* A bit set to 1 is changed to 0 and a bit set to 0 is changed to 1.
* Bits start at 0 (so a [_BYTE](./_BYTE.md) has bits 0 to 7, [INTEGER](./INTEGER.md) 0 to 15, and so on)


#### EXAMPLES
##### Example 1:
```vb
A~%% = 0 '_UNSIGNED _BYTE
PRINT A~%%
A~%% = _TOGGLEBIT(A~%%,4) 'toggle the fourth bit of A~%%
PRINT A~%%
A~%% = _TOGGLEBIT(A~%%,4) 'toggle the fourth bit of A~%%
PRINT A~%%
```
  
```vb
0
16
0
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_SHL](./_SHL.md) , [_SHR](./_SHR.md) , [INTEGER](./INTEGER.md) , [LONG](./LONG.md)
* [_SETBIT](./_SETBIT.md) , [_BYTE](./_BYTE.md) , [_INTEGER64](./_INTEGER64.md)
* [_RESETBIT](./_RESETBIT.md) , [_READBIT](./_READBIT.md)
