## _COPYIMAGE
---

### This function creates an identical designated image in memory with a different negative LONG handle value.

#### SYNTAX

`newhandle& = _COPYIMAGE ( imageHandle& [, mode% ])`

#### PARAMETERS
* The [LONG](./LONG.md) newhandle& value returned will be different than the source handle value supplied.
* If imageHandle& is designated being zero, the current software destination screen or image is copied.
* If 1 is designated instead of an imageHandle& , it designates the last OpenGL hardware surface to copy.
* Mode 32 can be used to convert 256 color images to 32 bit colors.
* Mode 33 images are hardware accelerated in version 1.000 and up , and are created using [_LOADIMAGE](./_LOADIMAGE.md) or [_COPYIMAGE](./_COPYIMAGE.md) .


#### DESCRIPTION
* The function copies any image or screen handle to a new and unique negative [LONG](./LONG.md) handle value.
* Valid copy handles are less than -1. Invalid handles return -1 or 0 if it was never created.
* Every attribute of the passed image or program screen is copied to a new handle value in memory.
* 32 bit screen surface backgrounds (black) have zero [_ALPHA](./_ALPHA.md) so that they are transparent when placed over other surfaces.


#### EXAMPLES
```vb
SCREEN 13
CIRCLE (160, 100), 100, 40
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

'backup screen before changing SCREEN mode
oldmode& = _COPYIMAGE(0) 'the 0 value designates the current destination SCREEN

s& = _NEWIMAGE(800, 600, 32)
SCREEN s&
LINE (100, 100)-(500, 500), _RGB(0, 255, 255), BF
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

SCREEN oldmode& 'restore original screen
IF s& < -1 THEN _FREEIMAGE s&
END
```
  
```vb
SCREEN _NEWIMAGE(640, 480, 32)
my_hardware_handle = _COPYIMAGE(_SCREENIMAGE, 33) 'take a screenshot and use it as our texture
_MAPTRIANGLE (0, 0)-(500, 0)-(250, 500), my_hardware_handle TO _
(-1, 0, -1)-(1, 0, -1)-(0, 5, -10), , _SMOOTH
_DISPLAY
DO: _LIMIT 30: LOOP UNTIL INKEY$ <> ""
```
  


#### SEE ALSO
* [_LOADIMAGE](./_LOADIMAGE.md) , [_NEWIMAGE](./_NEWIMAGE.md) , [_SAVEIMAGE](./_SAVEIMAGE.md)
* [_PUTIMAGE](./_PUTIMAGE.md) , [_MAPTRIANGLE](./_MAPTRIANGLE.md)
* [_SOURCE](./_SOURCE.md) , [_DEST](./_DEST.md)
* [_FREEIMAGE](./_FREEIMAGE.md)
* _FILELIST$ (function) (Demo of [_COPYIMAGE](./_COPYIMAGE.md))
* [_DISPLAYORDER](./_DISPLAYORDER.md)
* Hardware images
