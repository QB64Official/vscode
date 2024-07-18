## _ASSERT
---

### The _ASSERT statement can be used to perform tests in code that's in development, for debugging purposes.

#### SYNTAX

`_ASSERT condition [, errorMessage$ ]`

#### DESCRIPTION
* condition is the condition that must be met in order to consider the [_ASSERT](./_ASSERT.md) valid.
* Optional errorMessage$ is the message to be displayed in the console window if $ASSERTS:[CONSOLE](./CONSOLE.md) is used.
* If the condition is not met (that is, if it evaluates to 0), an error occurs ("[_ASSERT](./_ASSERT.md) failed on line #") and program execution stops.


#### EXAMPLES
##### Example: Adding test checks for parameter inputs in a function.
```vb
$ASSERTS:CONSOLE

DO
   a = INT(RND * 10)
   b$ = myFunc$(a)
   PRINT a, , b$
   _LIMIT 3
LOOP UNTIL _KEYHIT
END

FUNCTION myFunc$ (value AS SINGLE)
   _ASSERT value > 0, "Value cannot be zero"
   _ASSERT value <= 10, "Value cannot exceed 10"

   IF value > 1 THEN plural$ = "s"
   myFunc$ = STRING$(value, "*") + STR$(value) + " star" + plural$ + " :-)"
END FUNCTION
```
  


#### SEE ALSO
* $ASSERTS
* $CHECKING
* Relational Operations
