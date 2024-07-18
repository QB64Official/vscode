## _CEIL
---

### The _CEIL function rounds a numeric value up to the next whole number or INTEGER value.

#### SYNTAX

`result = _CEIL ( expression )`

#### EXAMPLES
##### Example: Displaying the rounding behavior of INT , CINT and FIX vs _CEIL .
```vb
PRINT INT(2.5), CINT(2.5), FIX(2.5), _CEIL(2.5)
PRINT INT(-2.5), CINT(-2.5), FIX(-2.5), _CEIL(-2.5)
```
  
```vb
2        2         2         3
-3       -2        -2        -2
```
  


#### SEE ALSO
* [INT](file:/home/grymmjack/git/QB64pe/internal/help/INT.md) , [FIX](file:/home/grymmjack/git/QB64pe/internal/help/FIX.md)
* [CINT](file:/home/grymmjack/git/QB64pe/internal/help/CINT.md) , [CLNG](file:/home/grymmjack/git/QB64pe/internal/help/CLNG.md) ,
* [CSNG](file:/home/grymmjack/git/QB64pe/internal/help/CSNG.md) , [CDBL](file:/home/grymmjack/git/QB64pe/internal/help/CDBL.md)
* [_ROUND](file:/home/grymmjack/git/QB64pe/internal/help/_ROUND.md)
