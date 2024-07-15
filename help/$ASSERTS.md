# $ASSERTS

The **$ASSERTS** [metacommand](metacommand.md) enables debug tests with the [_ASSERT](_ASSERT.md) macro.

  

## Syntax

**$ASSERTS**
**$ASSERTS:CONSOLE**
  

## Description

* This metacommand does not require a comment *[']('.md)* or [REM](REM.md) before it. There is no space between the metacommand name, the colon and the CONSOLE parameter.
* If this metacommand is used in a program and any of the set [_ASSERT](_ASSERT.md) checkpoints will fail, then the program will stop with an **_ASSERT failed** error.
* Detailed error messages passed to the [_ASSERT](_ASSERT.md) statement will be displayed in the console window, but only if **$ASSERTS:CONSOLE** is used.

Note
This metacommand is the main switch to enable debug tests during development. Later just remove this metacommand to compile the program without debugging code, all the [_ASSERT](_ASSERT.md) statements may remain in the code for later debugging sessions, they are simply ignored without this metacommand.
  

## Availability

* [![v1.4](![v1.4.md)](File:Qb64.png "v1.4")

**v1.4**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example
Adding test checks for parameter inputs in a function.

``` $ASSERTS:CONSOLE  [DO](DO.md)     a = [INT](INT.md)([RND](RND.md) * 10)     b$ = myFunc$(a)     [PRINT](PRINT.md) a, , b$     [_LIMIT](_LIMIT.md) 3 [LOOP UNTIL](LOOP UNTIL.md) [_KEYHIT](_KEYHIT.md) [END](END.md)  [FUNCTION](FUNCTION.md) myFunc$ (value [AS](AS.md) [SINGLE](SINGLE.md))     [_ASSERT](_ASSERT.md) value > 0, "Value cannot be zero"     [_ASSERT](_ASSERT.md) value <= 10, "Value cannot exceed 10"      [IF](IF.md) value > 1 [THEN](THEN.md) plural$ = "s"     myFunc$ = [STRING$](STRING$.md)(value, "*") + [STR$](STR$.md)(value) + " star" + plural$ + " :-)" [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [Metacommand](Metacommand.md)
* [_ASSERT](_ASSERT.md)
* [$CHECKING]($CHECKING.md)
* [Relational Operations](Relational Operations.md)
* [ERROR Codes](ERROR Codes.md)

  
