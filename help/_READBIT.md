# _READBIT

The _READBIT function is used to check the state of a specified bit of a integer value.

  

## Syntax

*result* = _READBIT(*numericalVariable*, *numericalValue*)
  

## Parameters

* *numericalVariable* is the variable to read the state of a bit of and can be of the following types: [_BYTE](_BYTE.md), [INTEGER](INTEGER.md), [LONG](LONG.md), or [_INTEGER64](_INTEGER64.md).
* Integer values can be signed or [_UNSIGNED](_UNSIGNED.md).
* *numericalValue* the number of the bit to be read.

  

## Description

* Used to check the current state of a bit in an integer value.
* Returns -1 if the bit is set(1), otherwise returns 0 if the bit is not set(0)
* Bits start at 0 (so a [_BYTE](_BYTE.md) has bits 0 to 7, [INTEGER](INTEGER.md) 0 to 15, and so on)

  

## Availability

* **Version 1.4 and up**.

  

## Examples

*Example 1:*

``` A~%% = [_SETBIT](_SETBIT.md)(A~%%,4) [PRINT](PRINT.md) "Bit 4 is currently "; IF _READBIT(A~%%,4) = -1 THEN [PRINT](PRINT.md) "ON" ELSE [PRINT](PRINT.md) "OFF" [PRINT](PRINT.md) "And bit 2 is currently "; IF _READBIT(A~%%,2) = -1 THEN [PRINT](PRINT.md) "ON" ELSE [PRINT](PRINT.md) "OFF"  
```

``` Bit 4 is currently ON And bit 2 is currently OFF  
```

*Example 2:*

``` B& = 12589575 [PRINT](PRINT.md) "B& ="; B& FOR I%% = 31 TO 0 STEP -1 '32 bits for a [LONG](LONG.md) value  Binary$ = Binary$ + [LTRIM$](LTRIM$.md)([STR$](STR$.md)([ABS](ABS.md)(_READBIT(B&, I%%)))) NEXT I%% [PRINT](PRINT.md) "B& in binary is: "; Binary$ 
```

``` B& = 12589575 B& in binary is: 00000000110000000001101000000111  
```

  

## See also

* [_SHL](_SHL.md), [_SHR](_SHR.md), [INTEGER](INTEGER.md), [LONG](LONG.md)
* [_SETBIT](_SETBIT.md), [_BYTE](_BYTE.md), [_INTEGER64](_INTEGER64.md)
* [_RESETBIT](_RESETBIT.md), [_TOGGLEBIT](_TOGGLEBIT.md)

  
