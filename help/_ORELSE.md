## _ORELSE
---

### _ORELSE is a boolean logical operator that performs short-circuiting inclusive logical disjunction on two expressions.

#### SYNTAX

`result = firstvalue _ORELSE secondvalue`

#### DESCRIPTION
* A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
* If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
* Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
* If either or both expressions evaluate to true, result is true.


#### EXAMPLES
##### Example: OR versus _ORELSE
```vb
PRINT "Trying _ORELSE"

' _ORELSE performs short-circuiting logical conjunction and hence for "strawberry", only isFruit() is called
IF isFruit("strawberry") _ORELSE isRed("strawberry") _ORELSE isSeasonal("strawberry") THEN
   PRINT "Probably a strawberry."
ELSE
   PRINT "Certainly not a strawberry."
END IF

PRINT
PRINT "Trying OR"

' OR does not performs short-circuiting logical conjunction and hence all is***() functions are called
IF isFruit("strawberry") OR isRed("strawberry") OR isSeasonal("strawberry") THEN
   PRINT "Probably a strawberry."
ELSE
   PRINT "Certainly not a strawberry."
END IF

END

FUNCTION isFruit%% (fruit AS STRING)
   PRINT "isFruit() called!"
   isFruit = (fruit = "strawberry")
END FUNCTION

FUNCTION isRed%% (fruit AS STRING)
   PRINT "isRed() called!"
   isRed = (fruit = "strawberry")
END FUNCTION

FUNCTION isSeasonal%% (fruit AS STRING)
   PRINT "isSeasonal() called!"
   isSeasonal = (fruit = "strawberry")
END FUNCTION
```
  
```vb
Trying _ORELSE
isFruit() called!
Probably a strawberry.

Trying OR
isFruit() called!
isRed() called!
isSeasonal() called!
Probably a strawberry.
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_BIT](./_BIT.md) , &B , [_BYTE](./_BYTE.md)
* [AND](./AND.md) , [XOR](./XOR.md) , [OR](./OR.md)
* [AND](./AND.md) (boolean) , [XOR](./XOR.md) (boolean) , [OR](./OR.md) (boolean)
* [_ANDALSO](./_ANDALSO.md) , [_NEGATE](./_NEGATE.md)
* Binary , Boolean
* Mathematical Operations
