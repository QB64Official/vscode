# _ORELSE

_ORELSE is a [boolean](boolean.md) logical operator that performs short-circuiting inclusive logical disjunction on two expressions.

  

## Syntax

*result* = *firstvalue* _ORELSE *secondvalue*
  

## Description

* A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
* If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
* Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
* If either or both expressions evaluate to true, result is true.

  

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

*Example:* OR versus _ORELSE

``` [PRINT](PRINT.md) "Trying _ORELSE"  ' _ORELSE performs short-circuiting logical conjunction and hence for "strawberry", only isFruit() is called [IF](IF.md) isFruit("strawberry") _ORELSE isRed("strawberry") _ORELSE isSeasonal("strawberry") [THEN](THEN.md)     [PRINT](PRINT.md) "Probably a strawberry." [ELSE](ELSE.md)     [PRINT](PRINT.md) "Certainly not a strawberry." [END IF](END IF.md)  [PRINT](PRINT.md) [PRINT](PRINT.md) "Trying OR"  ' OR does not performs short-circuiting logical conjunction and hence all is***() functions are called [IF](IF.md) isFruit("strawberry") [OR](OR.md) "OR (boolean)") isRed("strawberry") [OR](OR.md) "OR (boolean)") isSeasonal("strawberry") [THEN](THEN.md)     [PRINT](PRINT.md) "Probably a strawberry." [ELSE](ELSE.md)     [PRINT](PRINT.md) "Certainly not a strawberry." [END IF](END IF.md)  [END](END.md)  [FUNCTION](FUNCTION.md) isFruit%% (fruit [AS](AS.md) [STRING](STRING.md))     [PRINT](PRINT.md) "isFruit() called!"     isFruit = (fruit = "strawberry") [END FUNCTION](END FUNCTION.md)  [FUNCTION](FUNCTION.md) isRed%% (fruit [AS](AS.md) [STRING](STRING.md))     [PRINT](PRINT.md) "isRed() called!"     isRed = (fruit = "strawberry") [END FUNCTION](END FUNCTION.md)  [FUNCTION](FUNCTION.md) isSeasonal%% (fruit [AS](AS.md) [STRING](STRING.md))     [PRINT](PRINT.md) "isSeasonal() called!"     isSeasonal = (fruit = "strawberry") [END FUNCTION](END FUNCTION.md)  
```

``` Trying _ORELSE isFruit() called! Probably a strawberry.  Trying OR isFruit() called! isRed() called! isSeasonal() called! Probably a strawberry.  
```

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_BIT](_BIT.md), [&B](&B.md), [_BYTE](_BYTE.md)
* [AND](AND.md), [XOR](XOR.md), [OR](OR.md)
* [AND (boolean)](AND (boolean).md) "AND (boolean)"), [XOR (boolean)](XOR (boolean).md) "XOR (boolean)"), [OR (boolean)](OR (boolean).md) "OR (boolean)")
* [_ANDALSO](_ANDALSO.md), [_NEGATE](_NEGATE.md)
* [Binary](Binary.md), [Boolean](Boolean.md)
* [Mathematical Operations](Mathematical Operations.md)

  
