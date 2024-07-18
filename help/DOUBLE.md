## DOUBLE
---

### DOUBLE type floating point numerical values use 8 bytes per value.

#### SYNTAX

`DIM variable AS DOUBLE`

#### DESCRIPTION
* Literal or variable values can range up to 15 decimal point places.
* The variable suffix type is # .
* Use [DOUBLE](./DOUBLE.md) and [_FLOAT](./_FLOAT.md) variables sparingly as they use a lot of program memory.
* Values returned may be expressed using exponential or scientific notation using E for [SINGLE](./SINGLE.md) or D for [DOUBLE](./DOUBLE.md) precision.
* Floating decimal point numerical values cannot be [_UNSIGNED](./_UNSIGNED.md) .
* Values can be converted to 8 byte ASCII string values using _MKD$ and back with _CVD .
* When a variable has not been defined or has no type suffix, the value defaults to [SINGLE](./SINGLE.md) .
* Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.


#### SEE ALSO
* [DIM](./DIM.md) , [DEFDBL](./DEFDBL.md)
* MKD$ , [CVD](./CVD.md)
* [SINGLE](./SINGLE.md) , [_FLOAT](./_FLOAT.md)
* [LEN](./LEN.md)
* Variable Types
