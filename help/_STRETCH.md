# _FULLSCREEN

The _FULLSCREEN statement attempts to make the program window fullscreen.

  

## Syntax

_FULLSCREEN [*_STRETCH | _SQUAREPIXELS| _OFF*][, *_SMOOTH*]
  

## Parameters

* *_STRETCH* default first choice attempts to mimic QBasic's full screens if possible. [_FULLSCREEN (function)](_FULLSCREEN (function).md) "FULLSCREEN (function)") returns 1.
* *_SQUAREPIXELS* alternate choice enlarges the pixels into squares on some monitors. [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)") returns 2
* *_OFF* turns _FULLSCREEN off after full screen has been enabled. [_FULLSCREEN (function)](_FULLSCREEN (function).md) "FULLSCREEN (function)") returns 0.
* Second optional parameter *_SMOOTH* applies antialiasing to the stretched screen.

  

## Description

* **Set the [SCREEN](SCREEN.md) mode and text [WIDTH](WIDTH.md) when necessary first.** Otherwise there may be desktop view issues.
* _FULLSCREEN with no parameters chooses *_STRETCH* or *_SQUAREPIXELS* (prioritizes _STRETCH to mimic QBasic if possible)
* **Check the fullscreen mode with the [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)") function in your programs when a method is required.**
* It is advisable to get [input](input.md) from the user to confirm that fullscreen was completed or there were possible monitor incompatibilities.
* If fullscreen is **not confirmed** with a [_FULLSCREEN (function)](_FULLSCREEN (function).md) "FULLSCREEN (function)") return **greater than 0**, then disable with **_FULLSCREEN _OFF**.
* **NOTE:** _FULLSCREEN can also be affected by custom [_FONT](_FONT.md) size settings and make program screens too large.

  

## Examples

*Example 1:* Setting the screen mode first prevents enlargement of the desktop before the program window is set:

``` [SCREEN](SCREEN.md) 12 _FULLSCREEN [IF](IF.md) [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)") = 0 [THEN](THEN.md) _FULLSCREEN [_OFF](_OFF.md) 'check that a full screen mode initialized  [LINE](LINE.md) (100, 100)-(500, 400), 13, BF  
```

---

*Example 2:* How fonts and _FULLSCREEN affect the program's window size.

``` [SCREEN](SCREEN.md) 0 [DO](DO.md)     [PRINT](PRINT.md)     [LINE INPUT](LINE INPUT.md) "Enter MODE 1) ENLARGE WINDOW  2) FULL _SQUAREPIXELS  3) FULL _STRETCH: ", WMODE$     [PRINT](PRINT.md)     [IF](IF.md) WMODE$ = "1" [THEN](THEN.md) [INPUT](INPUT.md) "SIZE 1 TO 9: ", ENLARGE%      [SELECT CASE](SELECT CASE.md) ENLARGE%         [CASE](CASE.md) 1, 2, 3, 4, 5: STYLE$ = "MONOSPACE, BOLD"         [CASE](CASE.md) 6, 7, 8, 9: STYLE$ = "MONOSPACE"         [CASE](CASE.md) [ELSE](ELSE.md): STYLE$ = "MONOSPACE"     [END SELECT](END SELECT.md)      [SELECT CASE](SELECT CASE.md) WMODE$         [CASE](CASE.md) "1"             full = [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)")             [IF](IF.md) full > 0 [THEN](THEN.md) _FULLSCREEN [_OFF](_OFF.md)             f& = [_LOADFONT](_LOADFONT.md)("c:\windows\fonts\lucon.ttf", 13 + ENLARGE%, STYLE$)             [_FONT](_FONT.md) f&         [CASE](CASE.md) "2"             _FULLSCREEN [_SQUAREPIXELS](_SQUAREPIXELS.md)             full = [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)")             [IF](IF.md) full = 0 [THEN](THEN.md) [GOSUB](GOSUB.md) FCHECK         [CASE](CASE.md) "3"             _FULLSCREEN [_STRETCH](_STRETCH.md)             full = [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)")             [IF](IF.md) full = 0 [THEN](THEN.md) [GOSUB](GOSUB.md) FCHECK     [END SELECT](END SELECT.md)      mode = [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)")     [PRINT](PRINT.md)     [PRINT](PRINT.md) "_FULLSCREEN mode ="; mode,     [PRINT](PRINT.md) "PRESS ESC TO END OR ENTER TO CONTINUE..."      [DO](DO.md): [SLEEP](SLEEP.md): B$ = [INKEY$](INKEY$.md): [LOOP UNTIL](LOOP UNTIL.md) B$ = [CHR$](CHR$.md)(13) [OR](OR.md) "OR (boolean)") B$ = [CHR$](CHR$.md)(27)      [GOSUB](GOSUB.md) ClearFont  [LOOP UNTIL](LOOP UNTIL.md) B$ = [CHR$](CHR$.md)(27) [GOSUB](GOSUB.md) ClearFont [END](END.md)  FCHECK: Z3 = [TIMER](TIMER.md) "TIMER (function)") [DO](DO.md)     [IF](IF.md) [TIMER](TIMER.md) "TIMER (function)") < Z3 [THEN](THEN.md) Z3 = Z3 - [TIMER](TIMER.md) "TIMER (function)")     [IF](IF.md) [TIMER](TIMER.md) "TIMER (function)") - Z3 > 4 [THEN](THEN.md) [EXIT DO](EXIT DO.md) [LOOP](LOOP.md) full = [_FULLSCREEN](_FULLSCREEN.md) "FULLSCREEN (function)") [IF](IF.md) full = 0 [THEN](THEN.md) _FULLSCREEN [_OFF](_OFF.md): [SOUND](SOUND.md) 100, .75 [RETURN](RETURN.md)  ClearFont: [IF](IF.md) f& > 0 [THEN](THEN.md)     [_FONT](_FONT.md) 16 'select inbuilt 8x16 default font     [_FREEFONT](_FREEFONT.md) f& [END IF](END IF.md) [RETURN](RETURN.md)  
```

---

*Example 3:* Testing all fullscreen methods.

``` [PRINT](PRINT.md) "Hello, world!" [PRINT](PRINT.md) "Hit 1 for windowed mode;" [PRINT](PRINT.md) "    2 for _STRETCH" [PRINT](PRINT.md) "    3 for _SQUAREPIXELS" [PRINT](PRINT.md) "    4 for _STRETCH, _SMOOTH" [PRINT](PRINT.md) "    5 for _SQUAREPIXELS, _SMOOTH" [DO](DO.md)     k$ = [INKEY$](INKEY$.md)     [SELECT CASE](SELECT CASE.md) [VAL](VAL.md)(k$)         [CASE](CASE.md) 1             _FULLSCREEN [_OFF](_OFF.md)         [CASE](CASE.md) 2             _FULLSCREEN [_STRETCH](_STRETCH.md)         [CASE](CASE.md) 3             _FULLSCREEN [_SQUAREPIXELS](_SQUAREPIXELS.md)         [CASE](CASE.md) 4             _FULLSCREEN [_STRETCH](_STRETCH.md) , [_SMOOTH](_SMOOTH.md) "SMOOTH (function)")         [CASE](CASE.md) 5             _FULLSCREEN [_SQUAREPIXELS](_SQUAREPIXELS.md) , [_SMOOTH](_SMOOTH.md) "SMOOTH (function)")     [END SELECT](END SELECT.md)     [_LIMIT](_LIMIT.md) 30 [LOOP UNTIL](LOOP UNTIL.md) [_EXIT](_EXIT.md) "EXIT (function)") [SYSTEM](SYSTEM.md)  
```

  

## See also

* [_FULLSCREEN (function)](_FULLSCREEN (function).md) "FULLSCREEN (function)")
* [_SMOOTH (function)](_SMOOTH (function).md) "SMOOTH (function)")
* [_ALLOWFULLSCREEN](_ALLOWFULLSCREEN.md)
* [_FONT](_FONT.md), [SCREEN](SCREEN.md)
* [_SCREENIMAGE](_SCREENIMAGE.md)
* [_SCREENMOVE](_SCREENMOVE.md), [_SCREENX](_SCREENX.md), [_SCREENY](_SCREENY.md)

  
