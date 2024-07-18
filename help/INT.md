## INT
---

### The INT function rounds a numeric value down to the next whole number.

#### SYNTAX

`result = INT ( expression )`

#### PARAMETERS
* expression is any type of literal or variable numerical value or mathematical calculation.


#### DESCRIPTION
* [INT](./INT.md) returns the first whole number [INTEGER](./INTEGER.md) that is less than the expression value.
* This means that [INT](./INT.md) rounds down for both positive and negative numbers.
* Use [FIX](./FIX.md) to round negative values up. It is identical to [INT](./INT.md) for positive values.


#### EXAMPLES
##### Example: Displaying the rounding behavior of INT .
```vb
PRINT INT(2.5)
PRINT INT(-2.5)
```
  
```vb
2
-3
```
  


#### SEE ALSO
* [CINT](./CINT.md) , [CLNG](./CLNG.md) , [FIX](./FIX.md)
* [CSNG](./CSNG.md) , [CDBL](./CDBL.md)
* [_ROUND](./_ROUND.md) , [_CEIL](./_CEIL.md)
