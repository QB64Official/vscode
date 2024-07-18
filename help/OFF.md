## OFF
---

### OFF is a flag that disables event-trappping for KEY(n) , STRIG(n) and TIMER(n) .

#### DESCRIPTION
* [OFF](./OFF.md) can be used to turn off the display of soft-key assignments at the bottom of the screen using [KEY](./KEY.md) .
* [OFF](./OFF.md) can also be used to disable an event-trapping in the following statements: [KEY](./KEY.md)(n) , [STRIG](./STRIG.md)(n) and [TIMER](./TIMER.md)(n) . The trap can be turned back [ON](./ON.md) , but all events triggered since [OFF](./OFF.md) was used are lost.
* $CHECKING : [OFF](./OFF.md) is used to disable C++ error trapping (used for verified sections of code that require speed).


#### SEE ALSO
* [ON](./ON.md) , [STOP](./STOP.md) , [KEY](./KEY.md) , [KEY](./KEY.md)(n) , $CHECKING
