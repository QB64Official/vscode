## GOTO
---

### The GOTO statement sends the procedure to a line label or a line number in the program.

#### SYNTAX

`GOTO { lineNumber | lineLabel }`

#### DESCRIPTION
* lineNumber or lineLabel must already exist or an IDE status error will be displayed until it is created.
* Can be used in [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedures using their own line labels or numbers.
* The frequent use of [GOTO](./GOTO.md) statements can become confusing when trying to follow the code and it could also cause endless loops.
* [GOTO](./GOTO.md) is an easy trap for new programmers. Use loops instead when possible.


#### EXAMPLES
##### Example:
```vb
1 PRINT "first line": GOTO gohere
2 PRINT "second line": GOTO 3

gohere:
PRINT "third line"
GOTO 2

3 END
```
  
```vb
first line
third line
second line
```
  


#### SEE ALSO
* [GOSUB](./GOSUB.md) , [ON](./ON.md) [ERROR](./ERROR.md)
* [ON](./ON.md)...[GOTO](./GOTO.md) , [ON](./ON.md)...[GOSUB](./GOSUB.md)
* [DO](./DO.md)...[LOOP](./LOOP.md) , [FOR](./FOR.md)...[NEXT](./NEXT.md)
* [IF](./IF.md)...[THEN](./THEN.md) , [SELECT](./SELECT.md) [CASE](./CASE.md)
* Line numbers and labels
