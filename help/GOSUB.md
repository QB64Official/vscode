# GOSUB

GOSUB sends the program flow to a sub procedure identified by a line number or label.

  

## Syntax

GOSUB {*lineNumber*|*label*}
  

## Description

* Use [RETURN](RETURN.md) in a sub procedure to return to the next line of code after the original GOSUB call. [END](END.md) or [SYSTEM](SYSTEM.md) can also be used to end program.
* GOSUB and GOTO can be used **within** [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures, but cannot refer to a label located outside the procedure.

### QBasic/QuickBASIC

* Too many GOSUBs without a [RETURN](RETURN.md) can eventually cause "Out of Stack Errors" in QBasic as each GOSUB uses memory to store the location to return to. Each [RETURN](RETURN.md) frees the memory of the GOSUB it returns to.

  

## Examples

*Example:* Simple usage of GOSUB

``` [PRINT](PRINT.md) "1. It goes to the subroutine." GOSUB subroutine [PRINT](PRINT.md) "3. And it returns." [END](END.md)  subroutine: [PRINT](PRINT.md) "2. It is at the subroutine." [RETURN](RETURN.md)   
```

``` 1. It goes to the subroutine. 2. It is at the subroutine. 3. And it returns.  
```

  

  

*Example:* What happens if two GOSUB executes then two RETURN's?

``` start:  a = a + 1 [IF](IF.md) a = 1 [THEN](THEN.md) GOSUB here: [PRINT](PRINT.md) "It returned to IF a = 1": [END](END.md) [IF](IF.md) a = 2 [THEN](THEN.md) GOSUB there: [PRINT](PRINT.md) "It returned to IF a = 2": [RETURN](RETURN.md)    here: [PRINT](PRINT.md) "It went here." [GOTO](GOTO.md) start  there: [PRINT](PRINT.md) "It went there." [RETURN](RETURN.md)  
```

``` It went here. It went there. It returned to IF a = 2 It returned to IF a = 1  
```

*Explanation:* When a = 1 it uses GOSUB to go to "here:", then it uses GOTO to go back to "start:". a is increased by one so when a = 2 it uses GOSUB to go to "there:", and uses RETURN to go the last GOSUB (which is on the IF a = 2 line), it then encounters another RETURN which makes it return to the first GOSUB call we used on the IF a = 1 line.

  

## See also

* [ON...GOSUB](ON...GOSUB.md)
* [ON...GOTO](ON...GOTO.md), [GOTO](GOTO.md)
* [ON ERROR](ON ERROR.md), [RESUME](RESUME.md)
* [ON TIMER(n)](ON TIMER(n).md) "ON TIMER(n)")
* [Line number](Line number.md)

  
