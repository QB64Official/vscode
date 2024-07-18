## _MOUSEMOVEMENTY
---

### The _MOUSEMOVEMENTY function returns the relative vertical position of the mouse cursor as positive or negative values.

#### SYNTAX

`verticalMove = _MOUSEMOVEMENTY`

#### EXAMPLES
```vb
SCREEN 12
PX = 320: PY = 240 'center position
DO: _LIMIT 200
   DO WHILE _MOUSEINPUT
       PX = PX + _MOUSEMOVEMENTX
       PY = PY + _MOUSEMOVEMENTY
   LOOP
   CLS
   CIRCLE (PX, PY), 10, 10
   LOCATE 1, 1: PRINT PX, PY
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit
```
  
```vb
SCREEN 13, , 1, 0
DO: _LIMIT 200
   DO WHILE _MOUSEINPUT
       x = x + _MOUSEMOVEMENTX
       y = y + _MOUSEMOVEMENTY
   LOOP
   x = (x + 320) MOD 320 'keeps object on screen
   y = (y + 200) MOD 200 'remove if off screen moves are desired
   CLS
   CIRCLE (x, y), 20
   PCOPY 1, 0
LOOP UNTIL INKEY$ <> "" 'press any key to exit
```
  


#### SEE ALSO
* [_MOUSEMOVEMENTX](./_MOUSEMOVEMENTX.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md) , [_MOUSEX](./_MOUSEX.md)
* [_DEVICES](./_DEVICES.md) , [_DEVICEINPUT](./_DEVICEINPUT.md)
* [_WHEEL](./_WHEEL.md) , [_LASTWHEEL](./_LASTWHEEL.md)
* [_AXIS](./_AXIS.md) , [_LASTAXIS](./_LASTAXIS.md)
* [_MOUSESHOW](./_MOUSESHOW.md) , [_MOUSEHIDE](./_MOUSEHIDE.md)
* Screen Saver Programs
