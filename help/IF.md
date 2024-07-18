## IF...THEN
---

### IF...THEN statements make boolean (true or false) evaluations to automate program decision making.

#### DESCRIPTION
* The conditionStatement evaluation by [IF](./IF.md) must be true (-1) or a non-zero numerical value for the [THEN](./THEN.md) {code} to be executed.
* Multiple conditional evaluations can be made using inclusive [AND](./AND.md) or alternative [OR](./OR.md) conditional expressions.
* [THEN](./THEN.md) is not required when [GOTO](./GOTO.md) is used to send program flow to a line number or label.
* [IF](./IF.md) statements can also have alternative evaluations using [ELSEIF](./ELSEIF.md) and [ELSE](./ELSE.md) conditions.
* When the [IF](./IF.md) statement and/or code to be run is more than code line, an [END](./END.md) [IF](./IF.md) statement must be used.
* With multiple code lines to run, end the [IF](./IF.md) statement with [THEN](./THEN.md) and place all of the code on lines below that line.
* Multiple code line block statements require that the [IF](./IF.md)...[THEN](./THEN.md) , [ELSEIF](./ELSEIF.md) , [ELSE](./ELSE.md) and [END](./END.md) [IF](./IF.md) be on separate lines.
* The IDE may return an error of [NEXT](./NEXT.md) without [FOR](./FOR.md) or [LOOP](./LOOP.md) without [DO](./DO.md) when [END](./END.md) [IF](./IF.md) does not end a statement block.
* The QB64 IDE will indicate an error in the [IF](./IF.md) statement line until [END](./END.md) [IF](./IF.md) closes the statement block.
* Use colons to execute multiple statements in a single-line [IF](./IF.md) statement.
* An underscore can be used anywhere after the code on a single-line to continue it to the next line in QB64 .
* NOTE: [STRING](./STRING.md) values can only be evaluated in an [IF](./IF.md) statement if a value is compared to a literal or CHR$ string value. QB64 may not compile literal [IF](./IF.md) string statements or indicate an IDE coding error. Use [LEN](./LEN.md) or [ASC](./ASC.md) to compare strings numerically.


#### EXAMPLES
##### Example 1: In a one line IF statement, only REM can be used to comment out the action without an END IF error:
```vb
INPUT "Enter a number over or under 100: ", x
IF x > 100 THEN PRINT x
IF x > 100 THEN REM PRINT x  '
```
  
##### Example 2: IF statement blocks require that the IF THEN and END IF statements be separate from the code executed.
```vb
INPUT "Enter a number over or under 100: ", x
IF x > 100 THEN
 y = 200
 PRINT y
 PRINT x
END IF
```
  
##### Example 3: True or False evaluation of a numerical value executes only when the value is not 0. Cannot evaluate STRING values.
```vb
INPUT "Enter a number or just hit Enter: ", x
IF x THEN PRINT x
```
  
##### Example 4: Multiple evaluations using parenthesis to determine the order.
```vb
INPUT "Enter a number over or under 100 or 50: ", value
IF (value% > 100 AND value% < 200) OR value% = 50 THEN PRINT "OK"
```
  
##### Example 5: Using multiple IF options in a one line statement.
```vb
INPUT "Enter a number over or under 200: ", x
IF x > 200 THEN PRINT "High" [[ELSEIF|ELSEIF]] x < 0 THEN PRINT "Low" [[ELSE|ELSE]] PRINT "OK"
```
  
##### Example 6: STRING values can be compared using greater than, less than, not equal to or equal to operators only.
```vb
PRINT "Press a letter key: ";
Key$ = INPUT$(1)
PRINT Key$
IF Key$ >= CHR$(65) AND Key$ <= CHR$(90) THEN PRINT "A to Z"
```
  
```vb
x# = 5 / 10
y# = 6 / 10
z# = x# + y#
PRINT x#, y#, z#
IF x# + y# = z# THEN PRINT "equal" ELSE PRINT "unequal"
```
  


#### SEE ALSO
* [ELSEIF](./ELSEIF.md) , [ELSE](./ELSE.md)
* [AND](./AND.md) (boolean) , [OR](./OR.md) (boolean)
* [NOT](./NOT.md) , [GOTO](./GOTO.md)
* [SELECT](./SELECT.md) [CASE](./CASE.md)
* Boolean (numerical comparisons return a true or false value)
