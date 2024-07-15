# ELSE

ELSE is used in [IF...THEN](IF...THEN.md) or [SELECT CASE](SELECT CASE.md) statements to offer an alternative to other conditional statements.

  

## Syntax

*Single-line syntax:*

[IF](IF.md) *condition* [THEN](THEN.md) *{code}* ELSE *{alternative-code}*
  

*Block syntax:*

[IF](IF.md) *condition* [THEN](THEN.md)
*{code}*
⋮
[ELSEIF](ELSEIF.md) *condition2* [THEN](THEN.md)
*{code}*
⋮
ELSE
*{alternative-code}*
⋮
[END IF](END IF.md)
  

## Description

* ELSE is used in a IF block statement to cover any remaining conditions not covered in the main block by IF or [ELSEIF](ELSEIF.md).
* [CASE ELSE](CASE ELSE.md) covers any remaining conditions not covered by the other CASE statements.
* ELSE can also be used as a false comparison to a true IF statement when a condition will only be true or false.
* Other [IF...THEN](IF...THEN.md) statements can be inside of an ELSE statement.

  

## Examples

*Example 1:* One line IF statement

```   IF x = 100 THEN PRINT "100" ELSE PRINT "Not 100"   
```

*Example 2:* Multiple line IF statement block

```   IF x = 100 THEN ' code executed MUST be on next statement line!    PRINT "100" ELSE PRINT "Not 100" END IF   
```

  

*Example 3:* To alternate between any two values (as long as the value after ELSE is the same as the condition)

```   IF a = 3 THEN a = 5 ELSE a = 3   
```

  

## See also

* [ELSEIF](ELSEIF.md)
* [IF...THEN](IF...THEN.md)

  
