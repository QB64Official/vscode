## _MOUSEY
---

### The _MOUSEY function returns the current vertical (row) mouse cursor position when read after _MOUSEINPUT .

#### SYNTAX

`pixelRow% = _MOUSEY`

#### DESCRIPTION
* [SCREEN](./SCREEN.md) 0 returns the [INTEGER](./INTEGER.md) vertical text row position (from build 20170817/62 onward); older versions return a [SINGLE](./SINGLE.md) vertical text row position. Use [INTEGER](./INTEGER.md) variables to avoid floating decimal returns.
* Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](./_NEWIMAGE.md) 32 bit return the [INTEGER](./INTEGER.md) pixel columns.
* To calculate text rows in graphic modes divide the return by 16 or the [_FONTHEIGHT](./_FONTHEIGHT.md) of [_FONT](./_FONT.md) characters.
* [_MOUSEINPUT](./_MOUSEINPUT.md) must be used to detect any changes in the mouse position and is required for any coordinate returns.


#### EXAMPLES
##### Example: Highlighting a row of text in Screen 0.
```vb
minX = 20: maxX = 60: minY = 10: maxY = 24
selection = 0 'the screen Y coordinate of the previously highlighted item
FOR i% = 1 TO 25: LOCATE i%, 40: PRINT i%;: NEXT
DO: _LIMIT 100
 IF _MOUSEINPUT THEN
   'Un-highlight any selected row
   IF selection THEN selectRow selection, minX, maxX, 0
   x = _MOUSEX
   y = _MOUSEY
   IF x >= minX AND x <= maxX AND y >= minY AND y <= maxY THEN
     selection = y
   ELSE
     selection = 0
   END IF
   'Highlight any selected row
   IF selection THEN SelectRow selection, minX, maxX, 2
   IF _MOUSEBUTTON(1) THEN LOCATE 1, 2: PRINT x, y, selection
 END IF
LOOP UNTIL INKEY$ <> ""

SUB SelectRow (y, x1, x2, col)
DEF SEG = &HB800
addr& = (x1 - 1 + (y - 1) * _WIDTH) * 2 + 1
FOR x = x1 TO x2
 oldCol = PEEK(addr&) AND &B10001111   ' Mask foreground color and blink bit
 POKE addr&, oldCol OR ((col AND &B111) * &B10000) ' Apply background color
 addr& = addr& + 2
NEXT
END SUB
```
  


#### SEE ALSO
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEBUTTON](./_MOUSEBUTTON.md) , [_MOUSEWHEEL](./_MOUSEWHEEL.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md) , [_MOUSEMOVE](./_MOUSEMOVE.md)
* [_MOUSESHOW](./_MOUSESHOW.md) , [_MOUSEHIDE](./_MOUSEHIDE.md)
* [_MOUSEMOVEMENTX](./_MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](./_MOUSEMOVEMENTY.md)
* Controller Devices
