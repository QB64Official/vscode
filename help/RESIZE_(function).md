## _RESIZE (function)
---
<blockquote>

### The _RESIZE function returns true (-1) when a user has attempted to resize the program window and $RESIZE :ON has allowed it.

</blockquote>

#### SYNTAX

<blockquote>

`IF _RESIZE THEN rx& = _RESIZEWIDTH : ry& = _RESIZEHEIGHT`

</blockquote>

#### DESCRIPTION

<blockquote>

* The function returns -1 if a program screen resize was attempted by the user.
* After the function returns -1, [_RESIZEWIDTH](./_RESIZEWIDTH.md) and [_RESIZEHEIGHT](./_RESIZEHEIGHT.md) can return the new requested dimensions in pixels.
* The $RESIZE :[ON](./ON.md) metacommand must be used so the program is created with a user resizable window.


</blockquote>

#### SEE ALSO

<blockquote>

* $RESIZE
* [_RESIZE](./_RESIZE.md)
* [_RESIZEWIDTH](./_RESIZEWIDTH.md) , [_RESIZEHEIGHT](./_RESIZEHEIGHT.md)

</blockquote>
