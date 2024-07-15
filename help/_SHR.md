# _SHR

The _SHR function is used to shift the bits of a numerical value to the right.

  

## Syntax

*result* = _SHR(*numericalVariable*, *numericalValue*)
  

## Parameters

* *numericalVariable* is the variable to shift the bits of and can be of the following types: [INTEGER](INTEGER.md), [LONG](LONG.md), [_INTEGER64](_INTEGER64.md), or [_BYTE](_BYTE.md).
* Integer values can be signed or [_UNSIGNED](_UNSIGNED.md).
* *numericalValue* the number of places to shift the bits.
* While 0 is a valid value it will have no affect on the variable being shifted.

  

## Description

* Allows for division of a value by 2 faster than normal division (see example 2 below).
* Bits that reach the end of a variables bit count are dropped.
* The type of variable used to store the results should match the type of the variable being shifted.
* NOTE: When dealing with SIGNED variables, shifting the bits right will leave the sign bit set. This is due to how C++ deals with bit shifting under the hood.

  

## Availability

* **Version 1.3 and up**.

  

## Examples

*Example 1:*

``` A~%% = 128 'set left most bit of an[_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md) [PRINT](PRINT.md) A~%% [PRINT](PRINT.md) _SHR(A~%%,7) [PRINT](PRINT.md) _SHR(A~%%,8) 'shift the bit off the right 'edge'  
```

```  128  1  0  
```

  

*Example 2:*

``` A~%% = 128 [FOR](FOR.md) I%% = 0 [TO](TO.md) 8     [PRINT](PRINT.md) _SHR(A~%%, I%%) [NEXT](NEXT.md) I%%  
```

```  128   64   32   16   8   4   2   1   0  
```

  

## See also

* [_SHL](_SHL.md), [_ROL](_ROL.md), [_ROR](_ROR.md)
* [_BYTE](_BYTE.md), [INTEGER](INTEGER.md)
* [LONG](LONG.md), [_INTEGER64](_INTEGER64.md)

  
