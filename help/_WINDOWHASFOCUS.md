# _WINDOWHASFOCUS

The _WINDOWHASFOCUS function returns true (-1) if the current program's window has focus. Not supported for macOS.

  

## Syntax

*hasFocus%%* = _WINDOWHASFOCUS
  

## Description

* The function returns true (-1) if the current program is the topmost window on the user's desktop and has focus. If the current program is running behind another window, the function returns false (0).
* **[Keyword not supported in macOS versions](Keyword not supported in macOS versions.md)**

  

## Availability

* [![v1.2](![v1.2.md)](File:Qb64.png "v1.2")

**v1.2**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![no](![no.md)](File:Osx.png "no")

**no**

  

## Examples

*Example:* Detecting if the current program has focus. Windows and Linux-only.

``` [DO](DO.md)     [IF](IF.md) _WINDOWHASFOCUS THEN         [COLOR](COLOR.md) 15, 6         [CLS](CLS.md)         [PRINT](PRINT.md) "*** Hi there! ***"     [ELSE](ELSE.md)         [COLOR](COLOR.md) 0, 7         [CLS](CLS.md)         [PRINT](PRINT.md) "(ain't nobody looking...)"     [END IF](END IF.md)     [_DISPLAY](_DISPLAY.md)     [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md)  
```

*Explanation:* The program will display *"*** Hi There! ***"* while the window is the topmost and is being manipulated by the user. If another window, the taskbar or the desktop are clicked, the program window loses focus and the message *"(ain't nobody looking...)"* is displayed.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_WINDOWHANDLE](_WINDOWHANDLE.md)
* [_SCREENEXISTS](_SCREENEXISTS.md)

  
