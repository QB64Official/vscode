# LONG

LONG defines a variable as a 4 byte number type definition for larger [INTEGER](INTEGER.md) values.

  

## Syntax

[DIM](DIM.md) *variable* AS LONG
  

* LONG integer values range from -2147483648 to 2147483647.
* **QB64'**s [_UNSIGNED](_UNSIGNED.md) LONG integer values range from 0 to 4294967295.
* **QB64** [_UNSIGNED](_UNSIGNED.md) [_INTEGER64](_INTEGER64.md) values range from 0 to 18446744073709551615.
* Decimal point values assigned to a LONG variable will be rounded to the nearest whole number.
* The LONG variable type suffix is & or ~& for [_UNSIGNED](_UNSIGNED.md). Suffix can also be placed after a literal or hexadecimal numerical value.
* [_INTEGER64](_INTEGER64.md) uses the **&&** or **~&&** [_UNSIGNED](_UNSIGNED.md) suffix.
* Values can be converted to 4 byte [ASCII](ASCII.md) string values using [MKL$](MKL$.md) and back with [CVL](CVL.md).
* **When a variable has not been assigned or has no type suffix, the type defaults to [SINGLE](SINGLE.md).**
* **Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.**

  

## See also

* [DIM](DIM.md), [DEFLNG](DEFLNG.md)
* [LEN](LEN.md), [CLNG](CLNG.md)
* [MKL$](MKL$.md), [CVL](CVL.md)
* [INTEGER](INTEGER.md), [_INTEGER64](_INTEGER64.md)
* [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md)
* [_DEFINE](_DEFINE.md), [_UNSIGNED](_UNSIGNED.md)
* [Variable Types](Variable Types.md)

  
