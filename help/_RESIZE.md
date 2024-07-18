## _RESIZE
---

### The _RESIZE statement sets resizing of the window ON or OFF and sets the method as _STRETCH or _SMOOTH.

#### SYNTAX

`_RESIZE [{ON|OFF}][, {_STRETCH|_SMOOTH}]`

#### PARAMETERS
* When resizing is turned [OFF](./OFF.md) no method is listed.
* When resizing is turned [ON](./ON.md) or left empty, a [_STRETCH](./_STRETCH.md) or [_SMOOTH](./_SMOOTH.md) method can be used.


#### DESCRIPTION
* Before this statement can be used, you must add the $RESIZE :[ON](./ON.md) metacommand to your program.


#### SEE ALSO
* $RESIZE
* [_RESIZE](./_RESIZE.md) (function)
* [_RESIZEHEIGHT](./_RESIZEHEIGHT.md)
* [_RESIZEWIDTH](./_RESIZEWIDTH.md)
