## _FLOAT
---

### _FLOAT numerical values offer the maximum floating-point decimal precision available using QB64 .

#### SYNTAX

`DIM variable AS _FLOAT`

#### DESCRIPTION
* QB64 always allocates 32 bytes to store this value.
* It is safe to assume this value is at least as precise as [DOUBLE](./DOUBLE.md) .
* Under the current implementation it is stored in a 10-byte floating point variable.
* [_FLOAT](./_FLOAT.md) variables can also use the ## variable name type suffix.
* Values returned may be expressed using exponential or scientific notation using E for [SINGLE](./SINGLE.md) or D for [DOUBLE](./DOUBLE.md) precision.
* According to IEEE-754 this can store a value of up to 1.1897E+4932 compared to a [DOUBLE](./DOUBLE.md) which goes up to 1.7976E+308.
* Floating decimal point numerical values cannot be [_UNSIGNED](./_UNSIGNED.md) .
* Values can be converted to 32 byte ASCII strings using _MK$ and back with [_CV](./_CV.md) .
* When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](./SINGLE.md) .


#### SEE ALSO
* [DOUBLE](./DOUBLE.md) , [SINGLE](./SINGLE.md)
* _MK$ , [_CV](./_CV.md)
* [_DEFINE](./_DEFINE.md) , [DIM](./DIM.md)
* CURRENCY
* Variable Types
