# GOTO

The GOTO statement sends the procedure to a line label or a line number in the program.

  

## Syntax

GOTO {*lineNumber*|*lineLabel*}
  

***IF** Syntax:*

IF condition GOTO {*lineNumber*|*lineLabel*}
  

## Description

* *lineNumber* or *lineLabel* must already exist or an IDE status error will be displayed until it is created.
* Can be used in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures using their own line labels or numbers.
* The frequent use of GOTO statements can become confusing when trying to follow the code and it could also cause endless loops.
* GOTO is an easy trap for new programmers. Use loops instead when possible.

  

## Examples

*Example:*

``` 1 [PRINT](PRINT.md) "first line": GOTO gohere 2 [PRINT](PRINT.md) "second line": GOTO 3  gohere: [PRINT](PRINT.md) "third line" GOTO 2  3 [END](END.md)  
```

``` first line third line second line  
```

*Explanation:* After it prints "first line" it goes to the line label "gohere" where it prints "third line", then it goes to the line that is numbered "2" and prints "second line" and goes to line number 3 and an [END](END.md) statement which ends the program.
  

## See also

* [GOSUB](GOSUB.md), [ON ERROR](ON ERROR.md)
* [ON...GOTO](ON...GOTO.md), [ON...GOSUB](ON...GOSUB.md)
* [DO...LOOP](DO...LOOP.md), [FOR...NEXT](FOR...NEXT.md)
* [IF...THEN](IF...THEN.md), [SELECT CASE](SELECT CASE.md)
* [Line numbers and labels](Line numbers and labels.md)

  
