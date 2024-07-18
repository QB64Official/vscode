## _DESKTOPWIDTH
---

### The _DESKTOPWIDTH function returns the width of the users current desktop.

#### SYNTAX

`x& = _DESKTOPWIDTH`

#### DESCRIPTION
* No parameters are needed for this function.
* This returns the width of the user's desktop, not the size of any screen or window which might be open on that desktop.


#### EXAMPLES
```vb
s& = _NEWIMAGE(800, 600, 256)
SCREEN s&
PRINT _DESKTOPWIDTH, _DESKTOPHEIGHT
PRINT _WIDTH, _HEIGHT
```
  


#### SEE ALSO
* [_HEIGHT](./_HEIGHT.md) , [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md)
* [_WIDTH](./_WIDTH.md) , [_SCREENIMAGE](./_SCREENIMAGE.md)
