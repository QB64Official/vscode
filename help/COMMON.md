## COMMON
---

### COMMON shares common variable values with other linked or CHAINed modules.

#### SYNTAX

`COMMON [SHARED] variableList`

#### DESCRIPTION
* [COMMON](./COMMON.md) must be called before any executable statements.
* [SHARED](./SHARED.md) makes the variables shared within [SUB](./SUB.md) and [FUNCTION](./FUNCTION.md) procedures within that module.
* variableList is the list of common variables made available separated by commas.
* Remember to keep the variable type order the same in all modules, as the variables names don't matter.
* [COMMON](./COMMON.md) [SHARED](./SHARED.md) is most commonly used to share the variables with subs and functions of that module.
* Note: Values assigned to shared variables used as procedure call parameters will not be passed to other procedures. The shared variable value must be assigned inside of the [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedure to be passed.


#### SEE ALSO
* [COMMON](./COMMON.md) [SHARED](./SHARED.md) , [CHAIN](./CHAIN.md)
* [DIM](./DIM.md) , [REDIM](./REDIM.md) , [SHARED](./SHARED.md)
* [DEFSTR](./DEFSTR.md) , [DEFLNG](./DEFLNG.md) , [DEFINT](./DEFINT.md) , [DEFSNG](./DEFSNG.md) , [DEFDBL](./DEFDBL.md)
