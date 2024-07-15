# STOP

The **STOP** statement is used to stop program execution when troubleshooting a program or to suspend event trapping.

  

## Syntax

STOP
  

## Description

* STOP used in the QBasic IDE does not close any files or go to the operating system. It returns to the IDE.
* In the QB64 compiler, STOP closes the program window and returns to the IDE when the code is compiled from there.
* STOP is ONLY used for debugging purposes and should not be used to exit programs!
* STOP can also be used to suspend an event trap in the following statements: [KEY(n)](KEY(n).md) "KEY(n)"), [STRIG(n)](STRIG(n).md) "STRIG(n)") and [TIMER(n)](TIMER(n).md). The trap can be turned back on with [ON](ON.md) and returns any trap events since **STOP** was used.

  

## Examples

*Example:* When run in the QBasic IDE, the program will return to the IDE at STOP. Press F5 to finish the program.

``` [PRINT](PRINT.md) "start"  [SLEEP](SLEEP.md) 3  STOP  [PRINT](PRINT.md) "resumed"  
```

*Explanation:* QB64 will STOP the program and close the window as it does not have an interpreter to run the rest of the code.
  

## See also

* [END](END.md), [SYSTEM](SYSTEM.md)
* [ON](ON.md), [OFF](OFF.md)

  
