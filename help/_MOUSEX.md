## _MOUSEX
---

### The _MOUSEX function returns the current horizontal (column) mouse cursor position when read after _MOUSEINPUT .

#### SYNTAX

`pixelColumn% = _MOUSEX`

#### DESCRIPTION
* [SCREEN](./SCREEN.md) 0 returns the [INTEGER](./INTEGER.md) horizontal text column position (from build 20170817/62 onward); older versions return a [SINGLE](./SINGLE.md) horizontal text column position. Use [INTEGER](./INTEGER.md) variables to avoid floating decimal returns.
* Graphic screen modes 1, 2 and 7 to 13 and [_NEWIMAGE](./_NEWIMAGE.md) 32 bit return the [INTEGER](./INTEGER.md) pixel columns.
* To calculate text columns in graphic modes, divide the return by 8 or the [_FONTWIDTH](./_FONTWIDTH.md) of [_FONT](./_FONT.md) characters.
* [_MOUSEINPUT](./_MOUSEINPUT.md) must be used to detect any changes in the mouse position and is required for any coordinate returns.


#### EXAMPLES
##### Example: A simple mouse drawing board using _MOUSEX and _MOUSEY coordinate values.
```vb
SCREEN 12
LINE (99, 9)-(601, 401), 7, BF
LINE (101, 11)-(599, 399), 8, BF
tm$ = " Column = ###  Row = ###  Button1 = ##  Button2 = ##  Button3 = ##"
LOCATE 29, 20: PRINT "LeftButton = draw - RightButton = Erase";
DO: K$ = INKEY$
 DO WHILE _MOUSEINPUT
   X = _MOUSEX: Y = _MOUSEY
   IF X > 100 AND X < 600 AND PX > 100 AND PX < 600 THEN
     IF Y > 10 AND Y < 400 AND PY > 10 AND PY < 400 THEN
       IF _MOUSEBUTTON(1) THEN LINE (PX, PY)-(X, Y), 15
       IF _MOUSEBUTTON(2) THEN LINE (101, 11)-(599, 399), 8, BF
     END IF
   END IF
   PX = X: PY = Y
   LOCATE 28, 10: PRINT USING tm$; X; Y; _MOUSEBUTTON(1); _MOUSEBUTTON(2); _MOUSEBUTTON(3)
 LOOP
LOOP UNTIL K$ = CHR$(27)
SYSTEM
```
  


#### SEE ALSO
* [_MOUSEY](./_MOUSEY.md)
* [_MOUSEBUTTON](./_MOUSEBUTTON.md) , [_MOUSEWHEEL](./_MOUSEWHEEL.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md) , [_MOUSEMOVE](./_MOUSEMOVE.md)
* [_MOUSESHOW](./_MOUSESHOW.md) , [_MOUSEHIDE](./_MOUSEHIDE.md)
* [_MOUSEMOVEMENTX](./_MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](./_MOUSEMOVEMENTY.md)
* Controller Devices
