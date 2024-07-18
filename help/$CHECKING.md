## $CHECKING
---

### The $CHECKING metacommand turns C++ event checking ON or OFF.

#### SYNTAX

`$CHECKING :{ON|OFF}`

#### DESCRIPTION
* The Metacommand does not require a comment or [REM](./REM.md) before it. There is no space after the colon.
* The [OFF](./OFF.md) action turns event checking off and should only be used when running stable, errorless code.
* The default $CHECKING :[ON](./ON.md) action is only required when checking has been turned [OFF](./OFF.md) previously.
* When $CHECKING :[OFF](./OFF.md) is used, all error code and the reporting code is removed from the EXE program.
* Warning: Turning [OFF](./OFF.md) error checking could create a General Protection Fault (or segfault). Use only with 100% stable sections of code.


#### SEE ALSO
* [ON](./ON.md) [TIMER](./TIMER.md)(n)
* [ON](./ON.md) [ERROR](./ERROR.md)
* Metacommand
* [ERROR](./ERROR.md) Codes
