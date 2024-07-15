# _MOUSEINPUT

The _MOUSEINPUT function is used to monitor any new mouse positions, button presses or movements of the scroll wheel. Must be called before other mouse information becomes available.

  

## Syntax

*infoExists%%* = _MOUSEINPUT
  

## Description

* Returns -1 if new mouse information is available, otherwise it returns 0.
* Must be called before reading any of the other mouse functions. The function will not miss any mouse input even during an [INPUT](INPUT.md) entry.
* Use in a loop to monitor the mouse buttons, scroll wheel and coordinate positions.
* To clear all previous mouse data, use _MOUSEINPUT in a loop until it returns 0.

  

## Examples

*Example 1:* Mouse coordinate, click and scroll events are returned sequentially inside of a _MOUSEINPUT loop.

``` DO   [DO](DO.md) [WHILE](WHILE.md) _MOUSEINPUT '      Check the mouse status     [PRINT](PRINT.md) [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md), [_MOUSEBUTTON](_MOUSEBUTTON.md)(1), [_MOUSEWHEEL](_MOUSEWHEEL.md)   [LOOP](LOOP.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  
```

*Explanation:* The latest mouse function status can be read after the loop. [_LIMIT](_LIMIT.md) and [_DELAY](_DELAY.md) loops will slow returns down.
  

*Example 2:* How to use a _MOUSEINPUT loop to locate [PSET](PSET.md) positions on a screen using a right mouse button click.

``` [SCREEN](SCREEN.md) 12  [DO](DO.md) ' main program loop    ' your program code    [DO](DO.md) [WHILE](WHILE.md) _MOUSEINPUT'mouse status changes only     x = [_MOUSEX](_MOUSEX.md)     y = [_MOUSEY](_MOUSEY.md)     [IF](IF.md) x > 0 [AND](AND.md) "AND (boolean)") x < 640 [AND](AND.md) "AND (boolean)") y > 0 [AND](AND.md) "AND (boolean)") y < 480 [THEN](THEN.md)       [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(2) [THEN](THEN.md)         [PSET](PSET.md) (x, y), 15         [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) x, y       [END IF](END IF.md)     [END IF](END IF.md)   [LOOP](LOOP.md)    ' your program code  [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  
```

  

*Example 3:* Clearing any mouse data read before or during an [INPUT](INPUT.md) entry. Press "I" to enter input:

``` [PRINT](PRINT.md) "Press I to enter input! Press Q to quit" [DO](DO.md)   K$ = [UCASE$](UCASE$.md)([INKEY$](INKEY$.md))   [DO](DO.md)     [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(1) = -1 [THEN](THEN.md) [PRINT](PRINT.md) "*"    'indicates a mouse click event   [LOOP](LOOP.md) [WHILE](WHILE.md) _MOUSEINPUT   [IF](IF.md) K$ = "Q" [THEN](THEN.md) [END](END.md)   [IF](IF.md) K$ = "I" [THEN](THEN.md)                                          'press I to enter text     [INPUT](INPUT.md) "Click the mouse and enter something: ", entry$   'enter some text     [GOSUB](GOSUB.md) Clickcheck                                        'clear mouse data   [END IF](END IF.md) [LOOP](LOOP.md)  [END](END.md)  Clickcheck: count = 0 [DO](DO.md)   count = count + 1 [LOOP](LOOP.md) [WHILE](WHILE.md) _MOUSEINPUT [PRINT](PRINT.md) count        'returns the number of loops before mouse data is cleared [RETURN](RETURN.md)  
```

*Explanation:* Click the mouse a few times while entering [INPUT](INPUT.md) text. When Enter is pressed, the number of loops are displayed.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md), [_MOUSEBUTTON](_MOUSEBUTTON.md), [_MOUSEWHEEL](_MOUSEWHEEL.md)
* [_MOUSESHOW](_MOUSESHOW.md), [_MOUSEHIDE](_MOUSEHIDE.md), [_MOUSEMOVE](_MOUSEMOVE.md)
* [Controller Devices](Controller Devices.md)

  
