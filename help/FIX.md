## FIX
---

### The FIX function rounds a numerical value to the next whole number closest to zero.

#### SYNTAX

`result = FIX ( expression )`

#### PARAMETERS
* expression is any type of literal or variable numerical value or mathematical calculation.


#### DESCRIPTION
* [FIX](./FIX.md) effectively truncates (removes) the fractional part of expression , returning the integer part.
	* This means that [FIX](./FIX.md) rounds down for positive values and up for negative values.
* Use [INT](./INT.md) to round down negative values. Positive values are rounded down by both.


#### EXAMPLES
##### Example 1: Showing the behavior of FIX with positive and negative decimal point values.
```vb
PRINT FIX(2.5)
PRINT FIX(-2.5)
```
  
```vb
2
-2
```
  
##### Example 2: The NORMAL arithmetic method (round half up) can be achieved using the function in the example code below:
```vb
PRINT MATHROUND(0.5)
PRINT MATHROUND(1.5)
PRINT MATHROUND(2.5)
PRINT MATHROUND(3.5)
PRINT MATHROUND(4.5)
PRINT MATHROUND(5.5)

FUNCTION MATHROUND(n)
   MATHROUND = FIX(n + 0.5 * SGN(n))
END FUNCTION
```
  
```vb
1
2
3
4
5
6
```
  


#### SEE ALSO
* [_CEIL](./_CEIL.md)
* [INT](./INT.md) , [CINT](./CINT.md)
* [CLNG](./CLNG.md) , [_ROUND](./_ROUND.md)
* [MOD](./MOD.md) , Integer Division
* Normal division
