# _COPYIMAGE

This function creates an identical designated image in memory with a different negative [LONG](LONG.md) handle value.

  

## Syntax

newhandle& = _COPYIMAGE(*imageHandle&*[, *mode%*])
  

## Parameters

* The [LONG](LONG.md) *newhandle&* value returned will be different than the source handle value supplied.
* If *imageHandle&* is designated being zero, the current software [destination](destination.md) screen or image is copied.
* If 1 is designated instead of an *imageHandle&*, it designates the last OpenGL hardware surface to copy.
* *Mode* 32 can be used to convert 256 color images to 32 bit colors.
* *Mode* 33 images are hardware accelerated in **version 1.000 and up**, and are created using [_LOADIMAGE](_LOADIMAGE.md) or _COPYIMAGE.

  

## Description

* The function copies any image or screen handle to a new and unique negative [LONG](LONG.md) handle value.
* Valid copy handles are less than -1. Invalid handles return -1 or 0 if it was never created.
* Every attribute of the passed image or program screen is copied to a new handle value in memory.
* **32 bit screen surface backgrounds (black) have zero [_ALPHA](_ALPHA.md) so that they are transparent when placed over other surfaces.**

Use [CLS](CLS.md) or [_DONTBLEND](_DONTBLEND.md) to make a new surface background [_ALPHA](_ALPHA.md) 255 or opaque.
* **Images are not deallocated when the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](_FREEIMAGE.md).**
* **It is important to free discarded images with [_FREEIMAGE](_FREEIMAGE.md) to prevent PC memory allocation errors!**
* **Do not try to free image handles currently being used as the active [SCREEN](SCREEN.md). Change screen modes first.**

  

## Examples

Example 1
Restoring a Legacy SCREEN using the _COPYIMAGE return value.

``` [SCREEN](SCREEN.md) 13 [CIRCLE](CIRCLE.md) (160, 100), 100, 40 [DO](DO.md): [SLEEP](SLEEP.md): [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""  'backup screen before changing SCREEN mode oldmode& = _COPYIMAGE(0) 'the 0 value designates the current destination SCREEN  s& = [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32) [SCREEN](SCREEN.md) s& [LINE](LINE.md) (100, 100)-(500, 500), [_RGB](_RGB.md)(0, 255, 255), BF [DO](DO.md): [SLEEP](SLEEP.md): [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""  [SCREEN](SCREEN.md) oldmode& 'restore original screen [IF](IF.md) s& < -1 [THEN](THEN.md) [_FREEIMAGE](_FREEIMAGE.md) s& [END](END.md)  
```

Note
Only free valid handle values with [_FREEIMAGE](_FREEIMAGE.md) AFTER a new [SCREEN](SCREEN.md) mode is being used by the program.

---

Example 2
Program that copies desktop to a hardware image to form a 3D triangle (**version 1.000 and up**):

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) my_hardware_handle = _COPYIMAGE([_SCREENIMAGE](_SCREENIMAGE.md), 33) 'take a screenshot and use it as our texture [_MAPTRIANGLE](_MAPTRIANGLE.md) (0, 0)-(500, 0)-(250, 500), my_hardware_handle [TO](TO.md) _ (-1, 0, -1)-(1, 0, -1)-(0, 5, -10), , [_SMOOTH](_SMOOTH.md) "SMOOTH (function)") [_DISPLAY](_DISPLAY.md) [DO](DO.md): [_LIMIT](_LIMIT.md) 30: [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""  
```

  

## See also

* [_LOADIMAGE](_LOADIMAGE.md), [_NEWIMAGE](_NEWIMAGE.md), [_SAVEIMAGE](_SAVEIMAGE.md)
* [_PUTIMAGE](_PUTIMAGE.md), [_MAPTRIANGLE](_MAPTRIANGLE.md)
* [_SOURCE](_SOURCE.md), [_DEST](_DEST.md)
* [_FREEIMAGE](_FREEIMAGE.md)
* [_FILELIST$ (function)](_FILELIST$ (function).md) "FILELIST$ (function)") (Demo of _COPYIMAGE)
* [_DISPLAYORDER](_DISPLAYORDER.md)
* [Hardware images](Hardware images.md)

  
