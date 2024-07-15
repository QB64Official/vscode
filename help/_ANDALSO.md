# _ANDALSO

_ANDALSO is a [boolean](boolean.md) logical operator that performs short-circuiting logical conjunction on two expressions.

  

## Syntax

*result* = *firstvalue* _ANDALSO *secondvalue*
  

## Description

* A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
* If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
* Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
* If both expressions evaluate to true, result is true.

  

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

*Example:* AND versus _ANDALSO

``` [DIM](DIM.md) [AS](AS.md) [LONG](LONG.md) index, values(1 [TO](TO.md) 10), v  [FOR](FOR.md) index = 1 [TO](TO.md) 10     values(index) = [RND](RND.md) * 255 [NEXT](NEXT.md) index  ' value of index is now > 10  [PRINT](PRINT.md) "Trying _ANDALSO"  ' _ANDALSO performs short-circuiting logical conjunction and hence the GetArrayValue check is completely bypassed [IF](IF.md) index >= 1 _ANDALSO index <= 10 _ANDALSO GetArrayValue(values(), index, v) [THEN](THEN.md)     [PRINT](PRINT.md) "_ANDALSO: Value ="; v [ELSE](ELSE.md)     [PRINT](PRINT.md) "_ANDALSO: Outside range." [END IF](END IF.md)  [PRINT](PRINT.md) [PRINT](PRINT.md) "Trying AND"  ' AND does not performs short-circuiting logical conjunction and hence QB64-PE will throw a runtime error: Subscript out of range [IF](IF.md) index >= 1 [AND](AND.md) "AND (boolean)") index <= 10 [AND](AND.md) "AND (boolean)") GetArrayValue(values(), index, v) [THEN](THEN.md)     [PRINT](PRINT.md) "AND: Value ="; v [ELSE](ELSE.md)     [PRINT](PRINT.md) "AND: Outside range." [END IF](END IF.md)  [END](END.md)  [FUNCTION](FUNCTION.md) GetArrayValue%% (arr() [AS](AS.md) [LONG](LONG.md), idx [AS](AS.md) [LONG](LONG.md), value [AS](AS.md) [LONG](LONG.md))     value = arr(idx)     GetArrayValue = -1 ' return true [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_BIT](_BIT.md), [&B](&B.md), [_BYTE](_BYTE.md)
* [AND](AND.md), [XOR](XOR.md), [OR](OR.md)
* [AND (boolean)](AND (boolean).md) "AND (boolean)"), [XOR (boolean)](XOR (boolean).md) "XOR (boolean)"), [OR (boolean)](OR (boolean).md) "OR (boolean)")
* [_ORELSE](_ORELSE.md), [_NEGATE](_NEGATE.md)
* [Binary](Binary.md), [Boolean](Boolean.md)
* [Mathematical Operations](Mathematical Operations.md)

  
