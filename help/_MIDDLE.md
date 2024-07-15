# _SCREENMOVE

The _SCREENMOVE statement positions the program window on the desktop using designated coordinates.

  

## Syntax

_SCREENMOVE {*column&*, *row&*|_MIDDLE}
  

## Parameters

* Positions the program window on the desktop using the *column&* and *row&* pixel coordinates for the upper left corner.
* **_MIDDLE** can be used instead to automatically center the program window on the desktop, in any screen resolution.

  

## Description

* The program's [SCREEN](SCREEN.md) dimensions may influence the desktop position that can be used to keep the entire window on the screen.
* Use [_DESKTOPWIDTH](_DESKTOPWIDTH.md) and [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md) to find the current desktop resolution to place the program's window.
* On dual monitors a negative *column&* position or a value greater than the main screen width can be used to position a window in another monitor.
* **A small delay may be necessary when a program first starts up to properly orient the screen on the desktop properly.** See [_SCREENEXISTS](_SCREENEXISTS.md).
* **[Keyword not supported in Linux versions](Keyword not supported in Linux versions.md)**

  

## Availability

* [![v0.926](![v0.926.md)](File:Qb64.png "v0.926")

**v0.926**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![no](![no.md)](File:Lnx.png "no")

**no**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

*Example 1:* Calculating the border and header offsets by comparing a coordinate move with _MIDDLE by using trial and error.

``` userwidth& = [_DESKTOPWIDTH](_DESKTOPWIDTH.md): userheight& = [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md) 'get current screen resolution [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 256) scrnwidth& = [_WIDTH](_WIDTH.md): scrnheight& = [_HEIGHT](_HEIGHT.md)  'get the dimensions of the program screen  _SCREENMOVE (userwidth& \ 2 - scrnwidth& \ 2) - 3, (userheight& \ 2 - scrnheight& \ 2) - 29 [_DELAY](_DELAY.md) 4 _SCREENMOVE _MIDDLE  'check centering  [END](END.md)  
```

When positioning the window, offset the position by -3 columns and - 29 rows to calculate the top left corner coordinate.
  

*Example 2:* Moving a program window to a second monitor positioned to the right of the main desktop.

``` wide& = [_DESKTOPWIDTH](_DESKTOPWIDTH.md) high& = [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md)  [PRINT](PRINT.md) wide&; "X"; high&  [_DELAY](_DELAY.md) 4 _SCREENMOVE wide& + 200, 200 'positive value for right monitor 2  img2& = [_SCREENIMAGE](_SCREENIMAGE.md) wide2& = [_WIDTH](_WIDTH.md) "WIDTH (function)")(img2&) high2& = [_HEIGHT](_HEIGHT.md)(img2&) [PRINT](PRINT.md) wide2&; "X"; high2& [_DELAY](_DELAY.md) 4 _SCREENMOVE _MIDDLE 'moves program back to main monitor 1  
```

*Notes:* Change the _SCREENMOVE column to negative for a left monitor.
  

## See also

* [_SCREENX](_SCREENX.md), [_SCREENY](_SCREENY.md)
* [_SCREENIMAGE](_SCREENIMAGE.md), [_DESKTOPWIDTH](_DESKTOPWIDTH.md), [_DESKTOPHEIGHT](_DESKTOPHEIGHT.md)
* [_SCREENPRINT](_SCREENPRINT.md)
* [_SCREENEXISTS](_SCREENEXISTS.md)
* [_NEWIMAGE](_NEWIMAGE.md), [SCREEN](SCREEN.md)

  
