## _DEST (function)
---
<blockquote>

### The _DEST function returns the handle value of the current write page (the image used for drawing).

</blockquote>

#### SYNTAX

<blockquote>

`result& = _DEST`

</blockquote>

#### DESCRIPTION

<blockquote>

* The current write page is where all drawing occurs by default.
* The value returned is the same as the latest [SCREEN](./SCREEN.md) 's handle when creating custom screen modes using [_NEWIMAGE](./_NEWIMAGE.md) .
* Keep the [_NEWIMAGE](./_NEWIMAGE.md) handle values when you move to another [SCREEN](./SCREEN.md) mode so that you can return to that screen later. You can go to another screen mode and return without having to redo the screen.
* [_DEST](./_DEST.md) return values do not change in legacy screen modes. The value will not help restore them.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

* [_DEST](./_DEST.md)
* [_SOURCE](./_SOURCE.md) (function)
* [SCREEN](./SCREEN.md)

</blockquote>
