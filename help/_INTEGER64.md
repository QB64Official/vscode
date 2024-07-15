# _INTEGER64

_INTEGER64 is an 8 byte number type definition that can hold whole numerical values.

  

## Syntax

[DIM](DIM.md) *variable* [AS](AS.md) _INTEGER64
  

## Description

* Can be used in 32 bit and 64 bit systems.
* Signed numerical values can range from -9223372036854775808 to 9223372036854775807.
* [_UNSIGNED](_UNSIGNED.md) _INTEGER64 values range from 0 to 18446744073709551615.
* Variable type suffix is **&&** or **~&&** for [_UNSIGNED](_UNSIGNED.md). Suffix can also be placed after a literal or hexadecimal numerical value.
* Values can be converted to 8 byte [ASCII](ASCII.md) character strings using [_MK$](_MK$.md) and back using [_CV](_CV.md).
* **When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md).**

  

## See also

* [INTEGER](INTEGER.md), [LONG](LONG.md)
* [_DEFINE](_DEFINE.md), [DIM](DIM.md)
* [_UNSIGNED](_UNSIGNED.md)
* [_CV](_CV.md), [_MK$](_MK$.md)
* [CURRENCY](CURRENCY.md)_Procedures#CURRENCY "PDS(7.1) Procedures")
* [Variable Types](Variable Types.md)

  
