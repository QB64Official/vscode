## STOP
---

### The STOP statement is used to stop program execution when troubleshooting a program or to suspend event trapping.

#### SYNTAX

`STOP`

#### DESCRIPTION
* [STOP](./STOP.md) used in the QBasic IDE does not close any files or go to the operating system. It returns to the IDE.
* In the QB64 compiler, [STOP](./STOP.md) closes the program window and returns to the IDE when the code is compiled from there.
* [STOP](./STOP.md) is [ONLY](./ONLY.md) used for debugging purposes and should not be used to exit programs!
* [STOP](./STOP.md) can also be used to suspend an event trap in the following statements: [KEY](./KEY.md)(n) , [STRIG](./STRIG.md)(n) and [TIMER](./TIMER.md)(n) . The trap can be turned back on with [ON](./ON.md) and returns any trap events since [STOP](./STOP.md) was used.


#### EXAMPLES
##### Example: When run in the QBasic IDE, the program will return to the IDE at STOP. Press F5 to finish the program.
```vb
PRINT "start"

SLEEP 3

STOP

PRINT "resumed"
```
  


#### SEE ALSO
* [END](./END.md) , [SYSTEM](./SYSTEM.md)
* [ON](./ON.md) , [OFF](./OFF.md)
