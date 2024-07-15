# $RESIZE

The $RESIZE [metacommand](metacommand.md) determines if a program window can be resized by the user.

  

## Syntax

$RESIZE:{ON|OFF|STRETCH|SMOOTH}
  

## Description

* $RESIZE:ON is used to allow the program window to be resized by a program user. Otherwise it cannot be changed.
* $RESIZE:OFF (**default**) is used when the program's window size cannot be changed by the user.
* $RESIZE:STRETCH the screen will be stretched to fit the new window size with a 1 to 1 ratio of width and height.
* $RESIZE:SMOOTH the screen will be stretched also, but with linear filtering applied to the pixels.

  

## Availability

* [![v1.0](![v1.0.md)](File:Qb64.png "v1.0")

**v1.0**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

*Example:* Resizing a program screen when the user changes it without clearing the entire screen image:

``` $RESIZE:ON  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(160, 140, 32) [_DELAY](_DELAY.md) 0.1 [_SCREENMOVE](_SCREENMOVE.md) 20, 20 [_DISPLAY](_DISPLAY.md)  ' CLEAR _RESIZE FLAG BY READING IT ONCE temp& = [_RESIZE](_RESIZE.md) "RESIZE (function)")  DO      [_LIMIT](_LIMIT.md) 60      [IF](IF.md) CheckResize([_SOURCE](_SOURCE.md)) = -1 [THEN](THEN.md)         [FOR](FOR.md) i = 1 [TO](TO.md) 10             [CIRCLE](CIRCLE.md) ([RND](RND.md) * [_WIDTH](_WIDTH.md) "WIDTH (function)")(0) - 1, [RND](RND.md) * [_HEIGHT](_HEIGHT.md)(0) - 1), [RND](RND.md) * 100 + 5, [_RGB32](_RGB32.md)([RND](RND.md) * 255, [RND](RND.md) * 255, [RND](RND.md) * 255)         [NEXT](NEXT.md)     [ELSE](ELSE.md)         [FOR](FOR.md) i = 1 [TO](TO.md) 200             [PSET](PSET.md) ([RND](RND.md) * [_WIDTH](_WIDTH.md) "WIDTH (function)")(0) - 1, [RND](RND.md) * [_HEIGHT](_HEIGHT.md)(0) - 1), [_RGB32](_RGB32.md)([RND](RND.md) * 255, [RND](RND.md) * 255, [RND](RND.md) * 255)         [NEXT](NEXT.md)     [END IF](END IF.md)      [_DISPLAY](_DISPLAY.md)      k& = [_KEYHIT](_KEYHIT.md)  [LOOP](LOOP.md) [UNTIL](UNTIL.md) k& = 27 [OR](OR.md) "OR (boolean)") k& = 32  [SYSTEM](SYSTEM.md)    ' ************************************************************************************************* ' *                                                                                               * ' *  CheckResize: This FUNCTION checks if the user resized the window, and if so, recreates the   * ' *               ORIGINAL SCREEN image to the new window size.                                   * ' *                                                                                               * ' *               Developer Note: You must use $RESIZE:ON, $RESIZE:SMOOTH, or $RESIZE:SMOOTH at   * ' *                               the beginning of your project for this to work.                 * ' *                               This FUNCTION only works in QB64 version 1.000 and up.          * ' *                                                                                               * ' ************************************************************************************************* [FUNCTION](FUNCTION.md) CheckResize (CurrentScreen [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md))      ' *** Define local variable for temporary screen     [DIM](DIM.md) TempScreen [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)      CheckResize = 0      ' *** Check to see if the user resized the window. If so, change the SCREEN image to the correct size.     [IF](IF.md) [_RESIZE](_RESIZE.md) "RESIZE (function)") [THEN](THEN.md)          ' *** First, create a copy of the current [SCREEN](SCREEN.md) image.         TempScreen = [_COPYIMAGE](_COPYIMAGE.md)(CurrentScreen, 32)          ' *** Set the [SCREEN](SCREEN.md) to the copied image, releasing the current SCREEN image.         [SCREEN](SCREEN.md) TempScreen          ' *** Remove (FREE) the original [SCREEN](SCREEN.md) image.         [_FREEIMAGE](_FREEIMAGE.md) CurrentScreen          ' *** Create a new "original" [SCREEN](SCREEN.md) image.         CurrentScreen = [_NEWIMAGE](_NEWIMAGE.md)([_RESIZEWIDTH](_RESIZEWIDTH.md), [_RESIZEHEIGHT](_RESIZEHEIGHT.md), 32)          ' *** Set the [SCREEN](SCREEN.md) to the new "original" image, releasing the copied [SCREEN](SCREEN.md) image.         [SCREEN](SCREEN.md) CurrentScreen          '  [DRAW](DRAW.md) PREVIOUS [SCREEN](SCREEN.md) ON THE NEW ONE         [_PUTIMAGE](_PUTIMAGE.md) (0, 0), TempScreen, CurrentScreen          [_DISPLAY](_DISPLAY.md)          ' *** Remove (FREE) the copied [SCREEN](SCREEN.md) image.         [_FREEIMAGE](_FREEIMAGE.md) TempScreen          ' *** Tell the caller there was a resize         CheckResize = -1      [END IF](END IF.md)   [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [_RESIZE](_RESIZE.md), [_RESIZE (function)](_RESIZE (function).md) "RESIZE (function)")
* [_RESIZEWIDTH](_RESIZEWIDTH.md), [_RESIZEHEIGHT](_RESIZEHEIGHT.md) (functions return the requested dimensions)

  
