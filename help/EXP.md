## EXP
---

### The EXP math function calculates the exponential function ( e raised to the power of a numericExpression ).

#### SYNTAX

`result = EXP ( numericExpression )`

#### DESCRIPTION
* e is defined as the base of natural logarithms or as the limit of (1 + 1 / n) ^ n, as n goes to infinity.
* When passing numericExpression as a [SINGLE](./SINGLE.md) variable or as literal number without an explicit type suffix, then it must be less than or equal to 88.02969 or an "overflow" error will occur.
* When passing numericExpression as a [DOUBLE](./DOUBLE.md) or [_FLOAT](./_FLOAT.md) variable, then it must be less than or equal to 709.782712893 or an "overflow" error will occur. You may pass literal numbers as [DOUBLE](./DOUBLE.md) or [_FLOAT](./_FLOAT.md) values by explicitly adding the # or ## type suffix to it respectively, e.g. result = [EXP](./EXP.md) (678.9##) .
* The value returned is e to the exponent parameter ( e = 2.718282 approximately).
* The precision of the returned values depends on the provided result variable type, but is usually not higher than that of the given numericExpression .
* Positive exponent values indicate the number of times to multiply e by itself.
* Negative exponent values indicate the number of times to divide by e . Example: e ^ -3 = 1 / e ^ 3 = 1 / (e * e * e)


#### SEE ALSO
* [LOG](./LOG.md)
* Mathematical Operations
* Derived Mathematical Functions
