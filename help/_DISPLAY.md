# _DISPLAY

The _DISPLAY statement turns off the automatic display while only displaying the screen changes when called.

  

## Syntax

_DISPLAY
  

## Description

* **_DISPLAY** turns off the auto refresh screen default [_AUTODISPLAY](_AUTODISPLAY.md) behavior. Prevents screen flickering.
* Call _DISPLAY each time the screen graphics are to be displayed. Place call after the image has been changed.
* Re-enable automatic display refreshing by calling [_AUTODISPLAY](_AUTODISPLAY.md). If it isn't re-enabled, things may not be displayed later.
* _DISPLAY tells **QB64** to render all of the hardware [_PUTIMAGE](_PUTIMAGE.md) commands loaded into the buffer previously.
* The [_AUTODISPLAY (function)](_AUTODISPLAY (function).md) "AUTODISPLAY (function)") can be used to detect the current display behavior.
* **QB64** can set the graphic rendering order of _SOFTWARE, _HARDWARE, and _GLRENDER with [_DISPLAYORDER](_DISPLAYORDER.md).

  

## Examples

*Example 1:* Displaying a circle bouncing around the screen.

``` [SCREEN](SCREEN.md) 12 x = 21: y = 31 'start position dx = 3: dy = 3 'number of pixel moves per loop [DO](DO.md)     [_LIMIT](_LIMIT.md) 100 ' set to 100 frames per second     x = x + dx: y = y + dy     [IF](IF.md) x < 0 [OR](OR.md) "OR (boolean)") x > 640 [THEN](THEN.md) dx = -dx 'limit columns and reverse column direction each side     [IF](IF.md) y < 0 [OR](OR.md) "OR (boolean)") y > 480 [THEN](THEN.md) dy = -dy 'limit rows and reverse row direction top or bottom     [IF](IF.md) px <> x [OR](OR.md) "OR (boolean)") py <> y [THEN](THEN.md) [FOR](FOR.md) d = 1 [TO](TO.md) 20: [CIRCLE](CIRCLE.md) (px, py), d, 0: [NEXT](NEXT.md) 'erase     [FOR](FOR.md) c = 1 [TO](TO.md) 20: [CIRCLE](CIRCLE.md) (x, y), c, 6: [NEXT](NEXT.md) 'draw new circle at new position     px = x: py = y 'save older coordinates to erase older circle next loop     _DISPLAY 'after new circle is set, show it [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  
```

*Explanation:* The loop is set with [_LIMIT](_LIMIT.md) to 100 frames per second to limit CPU usage and the speed of the ball. Each loop a circle is drawn while the previous one is erased when the coordinates change. _DISPLAY only shows the new circle position once each loop. The **_DISPLAY** routine eliminates the need for setting [SCREEN](SCREEN.md) swap pages, [CLS](CLS.md) and [PCOPY](PCOPY.md). _DISPLAY keeps the image off of the screen until the changes have all completed. Drawing 40 circles every loop helps slow down the ball.

---

*Example 2:* _DISPLAY must be used to render hardware images placed with [_PUTIMAGE](_PUTIMAGE.md) (**version 1.000 and up**).

``` [CONST](CONST.md) MenuHeight = 200   [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) 'SLEEP 1 [LOCATE](LOCATE.md) 20 [DO](DO.md)     [_LIMIT](_LIMIT.md) 30     DisplayMenu     k = [_KEYHIT](_KEYHIT.md)     [IF](IF.md) k <> 0 [THEN](THEN.md) [PRINT](PRINT.md) k, [LOOP UNTIL](LOOP UNTIL.md) k = 32 [OR](OR.md) "OR (boolean)") k = 27   [SUB](SUB.md) DisplayMenu     [STATIC](STATIC.md) init, MS_HW [AS](AS.md) [LONG](LONG.md)     [IF](IF.md) [NOT](NOT.md) init [THEN](THEN.md)         init = -1         MS = [_NEWIMAGE](_NEWIMAGE.md)(640, MenuHeight, 32) 'MenuScreen image         D = [_DEST](_DEST.md) "DEST (function)"): [_DEST](_DEST.md) MS         [CLS](CLS.md) , &HFFAAAAAA 'background color gray         [_PRINTSTRING](_PRINTSTRING.md) (20, 2), "Menu Test" 'image text         MS_HW = [_COPYIMAGE](_COPYIMAGE.md)(MS, 33) 'create the MenuScreen_HardWare image         [_FREEIMAGE](_FREEIMAGE.md) MS         [_DEST](_DEST.md) D     [END IF](END IF.md)     [_PUTIMAGE](_PUTIMAGE.md) (0, 0)-(640, MenuHeight), MS_HW     _DISPLAY [END SUB](END SUB.md)  
```

*Notes:* When _DISPLAY is commented out, the hardware Menu Test screen portion will blink and key codes may be seen underneath.
  

## See also

* [_DISPLAY (function)](_DISPLAY (function).md) "DISPLAY (function)")
* [_DISPLAYORDER](_DISPLAYORDER.md)
* [_AUTODISPLAY](_AUTODISPLAY.md), [_AUTODISPLAY (function)](_AUTODISPLAY (function).md) "AUTODISPLAY (function)")
* [_PUTIMAGE](_PUTIMAGE.md)
* [PCOPY](PCOPY.md)

  
