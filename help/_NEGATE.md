# _NEGATE

_NEGATE is a [boolean](boolean.md) logical operator that will change a false statement to a true one and vice-versa.

  

## Syntax

*result* = _NEGATE *value*
  

## Description

* Unlike [NOT](NOT.md), which evaluates a value and returns the bitwise opposite, _NEGATE returns the logical opposite. Meaning that _NEGATE *non_zero_value* = 0.
* Often called a negative logic operator, it returns the opposite of a value as true or false.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.13.0](![v3.13.0.md)](File:Qbpe.png "v3.13.0")

**v3.13.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

*Example:* NOT versus _NEGATE

``` [DECLARE LIBRARY](DECLARE LIBRARY.md)     [FUNCTION](FUNCTION.md) isdigit& ([BYVAL](BYVAL.md) n [AS](AS.md) [LONG](LONG.md)) [END DECLARE](END DECLARE.md)  [IF](IF.md) [NOT](NOT.md) isdigit([ASC](ASC.md) "ASC (function)")("1")) [THEN](THEN.md)     [PRINT](PRINT.md) "NOT: 1 is not a digit." [ELSE](ELSE.md)     [PRINT](PRINT.md) "NOT: 1 is a digit." [END IF](END IF.md)  [IF](IF.md) _NEGATE isdigit([ASC](ASC.md) "ASC (function)")("1")) [THEN](THEN.md)     [PRINT](PRINT.md) "_NEGATE: 1 is not a digit." [ELSE](ELSE.md)     [PRINT](PRINT.md) "_NEGATE: 1 is a digit." [END IF](END IF.md)  [END](END.md)  
```

``` NOT: 1 is not a digit. _NEGATE: 1 is a digit.  
```

*Explanation:* NOT is a bitwise operator that inverts all the bits in an integer, whereas _NEGATE is a logical operator that flips the truth value of a boolean expression.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_BIT](_BIT.md), [&B](&B.md), [_BYTE](_BYTE.md)
* [AND](AND.md), [XOR](XOR.md), [OR](OR.md)
* [AND (boolean)](AND (boolean).md) "AND (boolean)"), [XOR (boolean)](XOR (boolean).md) "XOR (boolean)"), [OR (boolean)](OR (boolean).md) "OR (boolean)")
* [_ANDALSO](_ANDALSO.md), [_ORELSE](_ORELSE.md)
* [Binary](Binary.md), [Boolean](Boolean.md)
* [Mathematical Operations](Mathematical Operations.md)

  
