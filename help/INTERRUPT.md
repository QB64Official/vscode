## INTERRUPT
---

### The INTERRUPT statement is an assembly routine for accessing computer information registers.

#### SYNTAX

`CALL INTERRUPT ( intNum , inRegs , outRegs )`

#### PARAMETERS
* Registers are emulated in QB64 and there is no support for intNum 33h mouse functions above 3 or intNum requests other than 33.
* inRegs are the values placed into the call and outRegs are the register return values.


#### SEE ALSO
* $INCLUDE:
* QB.BI , [CALL](./CALL.md) [ABSOLUTE](./ABSOLUTE.md)
* [INTERRUPTX](./INTERRUPTX.md)
* Ethan Winer's free QBasic Book and Programs: WINER.ZIP
