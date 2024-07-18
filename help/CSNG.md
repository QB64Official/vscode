## CSNG
---

### CSNG converts a numerical value to the closest SINGLE -precision number.

#### SYNTAX

`singleValue! = CSNG ( expression )`

#### PARAMETERS
* expression is any [TYPE](./TYPE.md) of literal or variable numerical value or mathematical calculation.


#### DESCRIPTION
* Returns the closest [SINGLE](./SINGLE.md) decimal point value.
* Also used to define a value as [SINGLE](./SINGLE.md) -precision up to 7 decimals.


#### EXAMPLES
```vb
A# = 975.3421222#
PRINT A#, CSNG(A#)
```
  
```vb
975.3421222      975.3421
```
  


#### SEE ALSO
* [CDBL](./CDBL.md) , [CLNG](./CLNG.md)
* [CINT](./CINT.md) , [INT](./INT.md)
* [_ROUND](./_ROUND.md)
