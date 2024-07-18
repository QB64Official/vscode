## _MOUSEMOVE
---

### The _MOUSEMOVE statement moves the mouse pointer to a new position on the screen as determined by the column and row coordinates.

#### SYNTAX

`_MOUSEMOVE column% , row%`

#### PARAMETERS
* column% is the horizontal pixel coordinate to place the mouse pointer and can be any value from 0 to [_WIDTH](./_WIDTH.md) (0) - 1.
* row% is the vertical pixel position to place the mouse pointer and can be any value from 0 to [_HEIGHT](./_HEIGHT.md) (0) - 1


#### DESCRIPTION
* Maximum coordinate values are based on a program's current [SCREEN](./SCREEN.md) mode resolution or the pixel size set by [_NEWIMAGE](./_NEWIMAGE.md) .
* [SCREEN](./SCREEN.md) 0 uses text block coordinates. Coordinates off the screen area will create an "Illegal Function Call" [ERROR](./ERROR.md)
* Can be used to position the pointer to a default dialog button or move the cursor away from a button so it is not clicked twice.
* Does not require [_MOUSEINPUT](./_MOUSEINPUT.md) to be used, but all moves will be remembered and can be read by mouse functions.


#### EXAMPLES
##### Example: How to move the mouse cursor using remembered mouse movements. Press any key to quit.
```vb
SCREEN 12
i = _MOUSEINPUT 'start reading mouse events before INPUT to hold in memory
PRINT
INPUT "Move the mouse pointer and make a few clicks, then press Enter!", dummy$
_MOUSEMOVE 1, 1
DO: _LIMIT 30
   count = count + 1
   i = _MOUSEINPUT
   x = _MOUSEX: y = _MOUSEY
   b = _MOUSEBUTTON(1)
   PRINT count, x, y, b
   _MOUSEMOVE x, y
LOOP UNTIL i = 0 OR INKEY$ > ""
PRINT "Done!"
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEY](./_MOUSEY.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_SCREENIMAGE](./_SCREENIMAGE.md)
