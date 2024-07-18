## _SCREENCLICK
---

### The _SCREENCLICK statement simulates clicking on a pixel coordinate on the desktop screen with the left mouse button.

#### SYNTAX

`_SCREENCLICK column% , row% [, button% ]`

#### DESCRIPTION
* column% is the horizontal pixel coordinate position on the screen.
* row% is the vertical pixel coordinate position on the screen.
* Optional button% can be used to specify left button (1, default), right button (2) or middle button (3) (available with build 20170924/68 ).
* Coordinates can range from 0 to the [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md) . The desktop image acquired by [_SCREENIMAGE](./_SCREENIMAGE.md) can be used to map the coordinates required.
* Keyword not supported in Linux or macOS versions


#### SEE ALSO
* [_SCREENIMAGE](./_SCREENIMAGE.md) , [_SCREENPRINT](./_SCREENPRINT.md)
* [_SCREENMOVE](./_SCREENMOVE.md) , [_SCREENX](./_SCREENX.md) , [_SCREENY](./_SCREENY.md)
* [_DESKTOPWIDTH](./_DESKTOPWIDTH.md) , [_DESKTOPHEIGHT](./_DESKTOPHEIGHT.md)
