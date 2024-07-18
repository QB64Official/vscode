## GOSUB
---

### GOSUB sends the program flow to a sub procedure identified by a line number or label.

#### SYNTAX

`GOSUB { lineNumber | label }`

#### DESCRIPTION
* Use [RETURN](./RETURN.md) in a sub procedure to return to the next line of code after the original [GOSUB](./GOSUB.md) call. [END](./END.md) or [SYSTEM](./SYSTEM.md) can also be used to end program.
* [GOSUB](./GOSUB.md) and [GOTO](./GOTO.md) can be used within [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedures, but cannot refer to a label located outside the procedure.


#### EXAMPLES
##### Example: Simple usage of GOSUB
```vb
PRINT "1. It goes to the subroutine."
GOSUB subroutine
PRINT "3. And it returns."
END

subroutine:
PRINT "2. It is at the subroutine."
RETURN
```
  
```vb
1. It goes to the subroutine.
2. It is at the subroutine.
3. And it returns.
```
  
##### Example: What happens if two GOSUB executes then two RETURN's?
```vb
start:

a = a + 1
IF a = 1 THEN GOSUB here: PRINT "It returned to IF a = 1": END
IF a = 2 THEN GOSUB there: PRINT "It returned to IF a = 2": RETURN



here:
PRINT "It went here."
GOTO start

there:
PRINT "It went there."
RETURN
```
  
```vb
It went here.
It went there.
It returned to IF a = 2
It returned to IF a = 1
```
  
##### Explanation: When a = 1 it uses GOSUB to go to "here:", then it uses GOTO to go back to "start:". a is increased by one so when a = 2 it uses GOSUB to go to "there:", and uses RETURN to go the last GOSUB (which is on the IF a = 2 line), it then encounters another RETURN which makes it return to the first GOSUB call we used on the IF a = 1 line.


#### SEE ALSO
* [ON](./ON.md)...[GOSUB](./GOSUB.md)
* [ON](./ON.md)...[GOTO](./GOTO.md) , [GOTO](./GOTO.md)
* [ON](./ON.md) [ERROR](./ERROR.md) , [RESUME](./RESUME.md)
* [ON](./ON.md) [TIMER](./TIMER.md)(n)
* Line number
