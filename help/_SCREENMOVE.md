## _SCREENMOVE
---

### The _SCREENMOVE statement positions the program window on the desktop using designated coordinates.

#### SYNTAX

`_SCREENMOVE { column& , row& |_MIDDLE}`

#### PARAMETERS
* Positions the program window on the desktop using the column& and row& pixel coordinates for the upper left corner.
* [_MIDDLE](./_MIDDLE.md) can be used instead to automatically center the program window on the desktop, in any screen resolution.


#### DESCRIPTION
* The program's [SCREEN](./SCREEN.md) dimensions may influence the desktop position that can be used to keep the entire window on the screen.
* Use [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md) to find the current desktop resolution to place the program's window.
* On dual monitors a negative column& position or a value greater than the main screen width can be used to position a window in another monitor.
* A small delay may be necessary when a program first starts up to properly orient the screen on the desktop properly. See [_SCREENEXISTS](./_SCREENEXISTS.md) .
* Keyword not supported in Linux versions


#### EXAMPLES
##### Example 1: Calculating the border and header offsets by comparing a coordinate move with _MIDDLE by using trial and error.
```vb
userwidth& = _DESKTOPWIDTH: userheight& = _DESKTOPHEIGHT 'get current screen resolution
SCREEN _NEWIMAGE(800, 600, 256)
scrnwidth& = _WIDTH: scrnheight& = _HEIGHT  'get the dimensions of the program screen

_SCREENMOVE (userwidth& \ 2 - scrnwidth& \ 2) - 3, (userheight& \ 2 - scrnheight& \ 2) - 29
_DELAY 4
_SCREENMOVE _MIDDLE  'check centering

END
```
  
##### Example 2: Moving a program window to a second monitor positioned to the right of the main desktop.
```vb
wide& = _DESKTOPWIDTH
high& = _DESKTOPHEIGHT

PRINT wide&; "X"; high&

_DELAY 4
_SCREENMOVE wide& + 200, 200 'positive value for right monitor 2

img2& = _SCREENIMAGE
wide2& = _WIDTH(img2&)
high2& = _HEIGHT(img2&)
PRINT wide2&; "X"; high2&
_DELAY 4
_SCREENMOVE _MIDDLE 'moves program back to main monitor 1
```
  


#### SEE ALSO
* [_SCREENX](./_SCREENX.md) , [_SCREENY](./_SCREENY.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md) , [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) , [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md)
* [_SCREENPRINT](./_SCREENPRINT.md)
* [_SCREENEXISTS](./_SCREENEXISTS.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [SCREEN](./SCREEN.md)
