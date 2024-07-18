## _NEGATE
---

### _NEGATE is a boolean logical operator that will change a false statement to a true one and vice-versa.

#### SYNTAX

`result = _NEGATE value`

#### DESCRIPTION
* Unlike [NOT](./NOT.md) , which evaluates a value and returns the bitwise opposite, [_NEGATE](./_NEGATE.md) returns the logical opposite. Meaning that [_NEGATE](./_NEGATE.md) non_zero_value = 0 .
* Often called a negative logic operator, it returns the opposite of a value as true or false.


#### EXAMPLES
##### Example: NOT versus _NEGATE
```vb
DECLARE LIBRARY
   FUNCTION isdigit& (BYVAL n AS LONG)
END DECLARE

IF NOT isdigit(ASC("1")) THEN
   PRINT "NOT: 1 is not a digit."
ELSE
   PRINT "NOT: 1 is a digit."
END IF

IF _NEGATE isdigit(ASC("1")) THEN
   PRINT "_NEGATE: 1 is not a digit."
ELSE
   PRINT "_NEGATE: 1 is a digit."
END IF

END
```
  
```vb
NOT: 1 is not a digit.
_NEGATE: 1 is a digit.
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_BIT](./_BIT.md) , &B , [_BYTE](./_BYTE.md)
* [AND](./AND.md) , [XOR](./XOR.md) , [OR](./OR.md)
* [AND](./AND.md) (boolean) , [XOR](./XOR.md) (boolean) , [OR](./OR.md) (boolean)
* [_ANDALSO](./_ANDALSO.md) , [_ORELSE](./_ORELSE.md)
* Binary , Boolean
* Mathematical Operations
