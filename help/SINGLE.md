# SINGLE

**SINGLE** variables are 4 byte floating decimal point numerical values up to seven digits in length.

  

## Syntax

[DIM](DIM.md) *variable* AS SINGLE
  

## Description

* Values can range up to 7 digits. Decimal point accuracy depends on whole value places taken.
* Single is the **default variable type** assigned to undefined variables without a type suffix.
* Variable suffix type designation is **!**. Suffix can also be placed after a literal numerical value by user or automatically by the IDE.
* Values returned may be expressed using exponential or [scientific notation](scientific notation.md) using **E** for SINGLE or **D** for DOUBLE precision.
* Floating decimal point numerical values cannot be [_UNSIGNED](_UNSIGNED.md)!
* Values can be converted to 4 byte [ASCII](ASCII.md) string values using [_MKS$](_MKS$.md) and back with [_CVS](_CVS.md).
* **Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix!**

  

## See also

* [DIM](DIM.md), [DEFSNG](DEFSNG.md)
* [MKS$](MKS$.md), [CVS](CVS.md)
* [DOUBLE](DOUBLE.md), [_FLOAT](_FLOAT.md)
* [LEN](LEN.md)
* [Variable Types](Variable Types.md)

  
