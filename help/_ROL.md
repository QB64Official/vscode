# _ROL

The _ROL function is used to rotate the bits of a numerical value to the left. A rotation (or circular shift) is an operation similar to shift ([_SHL](_SHL.md) and [_SHR](_SHR.md)) except that the bits that fall off at one end are put back to the other end.

  

## Syntax

*result* = _ROL(*numericalVariable*, *numericalValue*)
  

## Parameters

* *numericalVariable* is the variable to shift the bits of and can be of the following types: [_BYTE](_BYTE.md), [INTEGER](INTEGER.md), [LONG](LONG.md), or [_INTEGER64](_INTEGER64.md).
* Integer values can be signed or [_UNSIGNED](_UNSIGNED.md).
* *numericalValue* is the number of places to rotate the bits.
* While 0 is a valid value it will have no affect on the variable being rotated.

  

## Description

* In left rotation, the bits that fall off at left end are put back at right end.
* The type of variable used to store the results should match the type of the variable being shifted.

  

## Availability

* **QB64-PE v3.1.0 and up**

  

## Examples

``` [OPTION _EXPLICIT](OPTION _EXPLICIT.md)  [DIM](DIM.md) a [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md) [DIM](DIM.md) b [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [INTEGER](INTEGER.md) [DIM](DIM.md) c [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) [DIM](DIM.md) d [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_INTEGER64](_INTEGER64.md)  a = &B11110000 b = &B1111111100000000 c = &B11111111111111110000000000000000 d = &B1111111111111111111111111111111100000000000000000000000000000000  [DO](DO.md)     a = _ROL(a, 1)     b = _ROL(b, 1)     c = _ROL(c, 1)     d = _ROL(d, 1)      [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) [RIGHT$](RIGHT$.md)([STRING$](STRING$.md)(8, "0") + [_BIN$](_BIN$.md)(a), 8);     [LOCATE](LOCATE.md) 2, 1: [PRINT](PRINT.md) [RIGHT$](RIGHT$.md)([STRING$](STRING$.md)(16, "0") + [_BIN$](_BIN$.md)(b), 16);     [LOCATE](LOCATE.md) 3, 1: [PRINT](PRINT.md) [RIGHT$](RIGHT$.md)([STRING$](STRING$.md)(32, "0") + [_BIN$](_BIN$.md)(c), 32);     [LOCATE](LOCATE.md) 4, 1: [PRINT](PRINT.md) [RIGHT$](RIGHT$.md)([STRING$](STRING$.md)(64, "0") + [_BIN$](_BIN$.md)(d), 64);      [_LIMIT](_LIMIT.md) 15 [LOOP](LOOP.md) [WHILE](WHILE.md) [_KEYHIT](_KEYHIT.md) <> 27  
```

  

## See also

* [_ROR](_ROR.md), [_SHL](_SHL.md), [_SHR](_SHR.md)
* [_BYTE](_BYTE.md), [INTEGER](INTEGER.md)
* [LONG](LONG.md), [_INTEGER64](_INTEGER64.md)

  
