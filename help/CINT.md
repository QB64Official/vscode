## CINT
---

### The CINT function rounds decimal point numbers up or down to the nearest INTEGER value.

#### SYNTAX

`value% = CINT ( expression )`

#### PARAMETERS
* expression is any [TYPE](./TYPE.md) of literal or variable numerical value or mathematical calculation.


#### DESCRIPTION
* Values greater than .5 are rounded up. Values lower than .5 are rounded down.
* Warning: Since [CINT](./CINT.md) is used for integer values, the input values cannot exceed 32767 to -32768!
* Use [CLNG](./CLNG.md) for [LONG](./LONG.md) integer values exceeding [INTEGER](./INTEGER.md) limitations.
* Note: When decimal point values are given to BASIC functions requiring INTEGERs the value will be CINTed .


#### EXAMPLES
##### Example: Shows how CINT rounds values up or down as in "bankers' rounding".
```vb
a% = CINT(1.49): b% = CINT(1.50): c = 11.5
COLOR c: PRINT a%, b%, c
```
  
```vb
1       2       11.5
```
  


#### SEE ALSO
* [_ROUND](./_ROUND.md) , [_CEIL](./_CEIL.md)
* [CLNG](./CLNG.md) , [CSNG](./CSNG.md) , [CDBL](./CDBL.md)
* [INT](./INT.md) , [FIX](./FIX.md)
