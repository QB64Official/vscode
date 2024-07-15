# _ASSERT

The _ASSERT statement can be used to perform tests in code that's in development, for debugging purposes.

  

## Syntax

_ASSERT *condition*[, *errorMessage$*]
  

## Description

* *condition* is the condition that must be met in order to consider the _ASSERT valid.
* Optional *errorMessage$* is the message to be displayed in the console window if [$ASSERTS:CONSOLE]($ASSERTS:CONSOLE.md) is used.
* If the condition is not met (that is, if it evaluates to 0), an error occurs ("_ASSERT failed on line #") and program execution stops.

  

## Availability

* **Version 1.4 and up**.

  

## Examples

*Example:* Adding test checks for parameter inputs in a function.

``` [$ASSERTS]($ASSERTS.md):CONSOLE  [DO](DO.md)     a = [INT](INT.md)([RND](RND.md) * 10)     b$ = myFunc$(a)     [PRINT](PRINT.md) a, , b$     [_LIMIT](_LIMIT.md) 3 [LOOP UNTIL](LOOP UNTIL.md) [_KEYHIT](_KEYHIT.md) [END](END.md)  [FUNCTION](FUNCTION.md) myFunc$ (value [AS](AS.md) [SINGLE](SINGLE.md))     _ASSERT value > 0, "Value cannot be zero"     _ASSERT value <= 10, "Value cannot exceed 10"      [IF](IF.md) value > 1 [THEN](THEN.md) plural$ = "s"     myFunc$ = [STRING$](STRING$.md)(value, "*") + [STR$](STR$.md)(value) + " star" + plural$ + " :-)" [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [$ASSERTS]($ASSERTS.md)
* [$CHECKING]($CHECKING.md)
* [Relational Operations](Relational Operations.md)

  
