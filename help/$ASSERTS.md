## $ASSERTS
---

### The $ASSERTS metacommand enables debug tests with the _ASSERT macro.

#### SYNTAX

`$ASSERTS`

#### DESCRIPTION
* This metacommand does not require a comment ' or [REM](./REM.md) before it. There is no space between the metacommand name, the colon and the [CONSOLE](./CONSOLE.md) parameter.
* If this metacommand is used in a program and any of the set [_ASSERT](./_ASSERT.md) checkpoints will fail, then the program will stop with an [_ASSERT](./_ASSERT.md) failed error.
* Detailed error messages passed to the [_ASSERT](./_ASSERT.md) statement will be displayed in the console window, but only if $ASSERTS:[CONSOLE](./CONSOLE.md) is used.


#### EXAMPLES
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
* Metacommand
* [_ASSERT](./_ASSERT.md)
* $CHECKING
* Relational Operations
* [ERROR](./ERROR.md) Codes
