## _ANDALSO
---

### _ANDALSO is a boolean logical operator that performs short-circuiting logical conjunction on two expressions.

#### SYNTAX

`result = firstvalue _ANDALSO secondvalue`

#### DESCRIPTION
* A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
* If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
* Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
* If both expressions evaluate to true, result is true.


#### EXAMPLES
##### Example: AND versus _ANDALSO
```vb
DIM AS LONG index, values(1 TO 10), v

FOR index = 1 TO 10
   values(index) = RND * 255
NEXT index

' value of index is now > 10

PRINT "Trying _ANDALSO"

' _ANDALSO performs short-circuiting logical conjunction and hence the GetArrayValue check is completely bypassed
IF index >= 1 _ANDALSO index <= 10 _ANDALSO GetArrayValue(values(), index, v) THEN
   PRINT "_ANDALSO: Value ="; v
ELSE
   PRINT "_ANDALSO: Outside range."
END IF

PRINT
PRINT "Trying AND"

' AND does not performs short-circuiting logical conjunction and hence QB64-PE will throw a runtime error: Subscript out of range
IF index >= 1 AND index <= 10 AND GetArrayValue(values(), index, v) THEN
   PRINT "AND: Value ="; v
ELSE
   PRINT "AND: Outside range."
END IF

END

FUNCTION GetArrayValue%% (arr() AS LONG, idx AS LONG, value AS LONG)
   value = arr(idx)
   GetArrayValue = -1 ' return true
END FUNCTION
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_BIT](./_BIT.md) , &B , [_BYTE](./_BYTE.md)
* [AND](./AND.md) , [XOR](./XOR.md) , [OR](./OR.md)
* [AND](./AND.md) (boolean) , [XOR](./XOR.md) (boolean) , [OR](./OR.md) (boolean)
* [_ORELSE](./_ORELSE.md) , [_NEGATE](./_NEGATE.md)
* Binary , Boolean
* Mathematical Operations
