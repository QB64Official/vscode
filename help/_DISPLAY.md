## _DISPLAY
---

### The _DISPLAY statement turns off the automatic display while only displaying the screen changes when called.

#### SYNTAX

`_DISPLAY`

#### DESCRIPTION
* [_DISPLAY](./_DISPLAY.md) turns off the auto refresh screen default [_AUTODISPLAY](./_AUTODISPLAY.md) behavior. Prevents screen flickering.
* Call [_DISPLAY](./_DISPLAY.md) each time the screen graphics are to be displayed. Place call after the image has been changed.
* Re-enable automatic display refreshing by calling [_AUTODISPLAY](./_AUTODISPLAY.md) . If it isn't re-enabled, things may not be displayed later.
* [_DISPLAY](./_DISPLAY.md) tells QB64 to render all of the hardware [_PUTIMAGE](./_PUTIMAGE.md) commands loaded into the buffer previously.
* The [_AUTODISPLAY](./_AUTODISPLAY.md) (function) can be used to detect the current display behavior.
* QB64 can set the graphic rendering order of [_SOFTWARE](./_SOFTWARE.md), [_HARDWARE](./_HARDWARE.md), and [_GLRENDER](./_GLRENDER.md) with [_DISPLAYORDER](./_DISPLAYORDER.md) .


#### EXAMPLES
##### Example 1: Displaying a circle bouncing around the screen.
```vb
SCREEN 12
x = 21: y = 31 'start position
dx = 3: dy = 3 'number of pixel moves per loop
DO
   _LIMIT 100 ' set to 100 frames per second
   x = x + dx: y = y + dy
   IF x < 0 OR x > 640 THEN dx = -dx 'limit columns and reverse column direction each side
   IF y < 0 OR y > 480 THEN dy = -dy 'limit rows and reverse row direction top or bottom
   IF px <> x OR py <> y THEN FOR d = 1 TO 20: CIRCLE (px, py), d, 0: NEXT 'erase
   FOR c = 1 TO 20: CIRCLE (x, y), c, 6: NEXT 'draw new circle at new position
   px = x: py = y 'save older coordinates to erase older circle next loop
   _DISPLAY 'after new circle is set, show it
LOOP UNTIL INKEY$ = CHR$(27)
```
  
##### Example 2: _DISPLAY must be used to render hardware images placed with _PUTIMAGE ( version 1.000 and up ).
```vb
CONST MenuHeight = 200


SCREEN _NEWIMAGE(640, 480, 32)
'SLEEP 1
LOCATE 20
DO
   _LIMIT 30
   DisplayMenu
   k = _KEYHIT
   IF k <> 0 THEN PRINT k,
LOOP UNTIL k = 32 OR k = 27


SUB DisplayMenu
   STATIC init, MS_HW AS LONG
   IF NOT init THEN
       init = -1
       MS = _NEWIMAGE(640, MenuHeight, 32) 'MenuScreen image
       D = _DEST: _DEST MS
       CLS , &HFFAAAAAA 'background color gray
       _PRINTSTRING (20, 2), "Menu Test" 'image text
       MS_HW = _COPYIMAGE(MS, 33) 'create the MenuScreen_HardWare image
       _FREEIMAGE MS
       _DEST D
   END IF
   _PUTIMAGE (0, 0)-(640, MenuHeight), MS_HW
   _DISPLAY
END SUB
```
  


#### SEE ALSO
* [_DISPLAY](./_DISPLAY.md) (function)
* [_DISPLAYORDER](./_DISPLAYORDER.md)
* [_AUTODISPLAY](./_AUTODISPLAY.md) , [_AUTODISPLAY](./_AUTODISPLAY.md) (function)
* [_PUTIMAGE](./_PUTIMAGE.md)
* [PCOPY](./PCOPY.md)
