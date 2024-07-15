# _FLOAT

**_FLOAT** numerical values offer the maximum floating-point decimal precision available using **QB64**.

  

## Syntax

[DIM](DIM.md) *variable* AS _FLOAT
  

## Description

* **QB64** always allocates 32 bytes to store this value.
* It is safe to assume this value is at least as precise as [DOUBLE](DOUBLE.md).
* Under the current implementation it is stored in a 10-byte floating point variable.
* _FLOAT variables can also use the ## variable name type suffix.
* Values returned may be expressed using exponential or [scientific notation](scientific notation.md) using **E** for SINGLE or **D** for DOUBLE precision.
* According to [IEEE-754](IEEE-754.md) this can store a value of up to 1.1897E+4932 compared to a DOUBLE which goes up to 1.7976E+308.
* Floating decimal point numerical values cannot be [_UNSIGNED](_UNSIGNED.md).
* Values can be converted to 32 byte [ASCII](ASCII.md) strings using [_MK$](_MK$.md) and back with [_CV](_CV.md).
* **When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md).**

  

## See also

* [DOUBLE](DOUBLE.md), [SINGLE](SINGLE.md)
* [_MK$](_MK$.md), [_CV](_CV.md)
* [_DEFINE](_DEFINE.md), [DIM](DIM.md)
* [CURRENCY](CURRENCY.md)_Procedures#CURRENCY "PDS(7.1) Procedures")
* [Variable Types](Variable Types.md)

  
