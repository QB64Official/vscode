## ELSE
---

### ELSE is used in IF...THEN or SELECT CASE statements to offer an alternative to other conditional statements.

#### DESCRIPTION
* [ELSE](./ELSE.md) is used in a [IF](./IF.md) block statement to cover any remaining conditions not covered in the main block by [IF](./IF.md) or [ELSEIF](./ELSEIF.md) .
* [CASE](./CASE.md) [ELSE](./ELSE.md) covers any remaining conditions not covered by the other [CASE](./CASE.md) statements.
* [ELSE](./ELSE.md) can also be used as a false comparison to a true [IF](./IF.md) statement when a condition will only be true or false.
* Other [IF](./IF.md)...[THEN](./THEN.md) statements can be inside of an [ELSE](./ELSE.md) statement.


#### EXAMPLES
##### Example 1: One line IF statement
```vb
IF x = 100 THEN PRINT "100" ELSE PRINT "Not 100"
```
  
##### Example 2: Multiple line IF statement block
```vb
IF x = 100 THEN ' code executed MUST be on next statement line!
  PRINT "100"
ELSE PRINT "Not 100"
END IF
```
  
##### Example 3: To alternate between any two values (as long as the value after ELSE is the same as the condition)
```vb
IF a = 3 THEN a = 5 ELSE a = 3
```
  


#### SEE ALSO
* [ELSEIF](./ELSEIF.md)
* [IF](./IF.md)...[THEN](./THEN.md)
