# _MOUSEBUTTON

The _MOUSEBUTTON function returns the button status of a specified mouse button when read after [_MOUSEINPUT](_MOUSEINPUT.md).

  

## Syntax

*buttonStatus%%* = _MOUSEBUTTON(*buttoNumber*)
  

## Parameters

* [INTEGER](INTEGER.md) *buttoNumber* designates the mouse button to read (See [_DEVICES](_DEVICES.md) for more than 3).
	+ 1 = Left mouse button
	+ 2 = Right mouse button
	+ 3 = Center or scroll button

  

## Description

* Returns -1 if the corresponding *buttoNumber* is pressed or zero when released.
* Read [_MOUSEINPUT](_MOUSEINPUT.md) first to return the current button up or down status. (See Example 2)
* Button clicks and mouse movements will be remembered and should be cleared after an [INPUT](INPUT.md) statement or other interruption.
* To clear unread mouse input, use a [_MOUSEINPUT](_MOUSEINPUT.md) loop that loops until it returns 0.
* Use [_DEVICE$](_DEVICE$.md) to find the "[MOUSE]" [_DEVICES](_DEVICES.md) number to find the number of buttons available using [_LASTBUTTON](_LASTBUTTON.md).
* **Note:** The center mouse button can also be read as [_BUTTON](_BUTTON.md)(2) on [_DEVICEINPUT](_DEVICEINPUT.md)(2) when a mouse is present.

  

## Examples

*Example 1:* Finding the number of mouse buttons available in QB64. This could also be used for other controller devices.

``` [FOR](FOR.md) d = 1 [TO](TO.md) [_DEVICES](_DEVICES.md)  'number of input devices found   dev$ = [_DEVICE$](_DEVICE$.md)(d)   [IF](IF.md) [INSTR](INSTR.md)(dev$, "[MOUSE]") [THEN](THEN.md) buttons = [_LASTBUTTON](_LASTBUTTON.md)(d): [EXIT](EXIT.md) [FOR](FOR.md) [NEXT](NEXT.md) [PRINT](PRINT.md) buttons; "mouse buttons available"  
```

  

*Example 2:* How to monitor when a button is down or wait until a mouse button is not held down.

``` [PRINT](PRINT.md) "Hold down the left mouse button until you want to quit!" DO     i = [_MOUSEINPUT](_MOUSEINPUT.md) ' read #1     [IF](IF.md) _MOUSEBUTTON(1) [THEN](THEN.md) [PRINT](PRINT.md) "Left button down!": [EXIT DO](EXIT DO.md) [LOOP](LOOP.md) [DO](DO.md) '                                                      need to wait     i = [_MOUSEINPUT](_MOUSEINPUT.md) '  read #2                         until the mouse [LOOP](LOOP.md) [UNTIL](UNTIL.md) [NOT](NOT.md) _MOUSEBUTTON(1) '                       button is released  [PRINT](PRINT.md) "DONE!"  
```

  

*Example 3:* Checking for a click or a double-click by the user.

``` [DO](DO.md)  'main program loop    [DO](DO.md) [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)                'check mouse status     buttondown = _MOUSEBUTTON(1)   [LOOP](LOOP.md)   [DO](DO.md) [WHILE](WHILE.md) buttondown                 'check for button release     i = [_MOUSEINPUT](_MOUSEINPUT.md)     buttondown = _MOUSEBUTTON(1)     Click = 1   [LOOP](LOOP.md)    [IF](IF.md) Click = 1 [THEN](THEN.md)                   'if button was pressed and released     t = [TIMER](TIMER.md) "TIMER (function)") + .3     [DO](DO.md) [WHILE](WHILE.md) [TIMER](TIMER.md) "TIMER (function)") < t      'check for a second press within .3 seconds       i = [_MOUSEINPUT](_MOUSEINPUT.md)       [IF](IF.md) _MOUSEBUTTON(1) [THEN](THEN.md) Click = 2: [EXIT DO](EXIT DO.md)     [LOOP](LOOP.md)     [IF](IF.md) Click = 2 [THEN](THEN.md) [PRINT](PRINT.md) "Double click" [ELSE](ELSE.md) [PRINT](PRINT.md) "Click"   [END IF](END IF.md)   Click = 0: buttondown = 0            'reset where needed [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  
```

*Explanation:* To find the current button status read [_MOUSEINPUT](_MOUSEINPUT.md) repeatedly. The [TIMER](TIMER.md) "TIMER (function)") loop looks for a second click.
  

*Example 4:* Verifying that a user clicked and released a mouse button on a program button.

``` [SCREEN](SCREEN.md) 12 [LINE](LINE.md) (250, 250)-(300, 300), 14, BF  [DO](DO.md)   Mouser mx, my, mb   [IF](IF.md) mb [THEN](THEN.md)     [IF](IF.md) mx >= 250 [AND](AND.md) "AND (boolean)") my >= 250 [AND](AND.md) "AND (boolean)") mx <= 300 [AND](AND.md) "AND (boolean)") my <= 300 [THEN](THEN.md) 'button down       [DO](DO.md) [WHILE](WHILE.md) mb 'wait for button release         Mouser mx, my, mb       [LOOP](LOOP.md)       'verify mouse still in box area       [IF](IF.md) mx >= 250 [AND](AND.md) "AND (boolean)") my >= 250 [AND](AND.md) "AND (boolean)") mx <= 300 [AND](AND.md) "AND (boolean)") my <= 300 [THEN](THEN.md) [PRINT](PRINT.md) "Click verified on yellow box!"     [END IF](END IF.md)   [END IF](END IF.md) [LOOP](LOOP.md)  [SUB](SUB.md) Mouser (x, y, b) mi = [_MOUSEINPUT](_MOUSEINPUT.md) b = _MOUSEBUTTON(1) x = [_MOUSEX](_MOUSEX.md) y = [_MOUSEY](_MOUSEY.md) [END SUB](END SUB.md)  
```

*Explanation:* The mouse SUB has no internal [_MOUSEINPUT](_MOUSEINPUT.md) loop so that no button presses, releases or moves are missed.
If the above read procedure goes to another one, it may be advisable to skip over unread input in a [_MOUSEINPUT](_MOUSEINPUT.md) only loop.

``` [SUB](SUB.md) Catchup [DO](DO.md) [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md): [LOOP](LOOP.md)  [END SUB](END SUB.md)  
```

The above procedure can be used to catch up after [INPUT](INPUT.md), [LINE INPUT](LINE INPUT.md) or [INPUT$](INPUT$.md) delays when mouse input may accumulate.
  

*Example 5:* Combining mouse button or keyboard selections in a menu or test:

``` [DO](DO.md) 'main program loop in demo only   [LOCATE](LOCATE.md) 10, 10: [PRINT](PRINT.md) "A" 'position A, B & C in same position on every question   [LOCATE](LOCATE.md) 12, 10: [PRINT](PRINT.md) "B"   [LOCATE](LOCATE.md) 14, 10: [PRINT](PRINT.md) "C" 'demo only    [DO](DO.md): [_LIMIT](_LIMIT.md) 10 'get user answer loop     [DO](DO.md) [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md): [LOOP](LOOP.md) 'read mouse     K$ = [UCASE$](UCASE$.md)([INKEY$](INKEY$.md)) 'read keypresses also     x% = [_MOUSEX](_MOUSEX.md)     y% = [_MOUSEY](_MOUSEY.md)     Lclick = _MOUSEBUTTON(1)      [LOCATE](LOCATE.md) 20, 10: [PRINT](PRINT.md) x%, y%, Lclick 'only used to find mouse coordinates     [IF](IF.md) x% = 10 [AND](AND.md) "AND (boolean)") y% = 10 [AND](AND.md) "AND (boolean)") Lclick [THEN](THEN.md) 'position clicked       DO         i = [_MOUSEINPUT](_MOUSEINPUT.md)         x% = [_MOUSEX](_MOUSEX.md)         y% = [_MOUSEY](_MOUSEY.md)       [LOOP](LOOP.md) [WHILE](WHILE.md) _MOUSEBUTTON(1)       [IF](IF.md) x% = 10 [AND](AND.md) "AND (boolean)") y% = 10 [THEN](THEN.md) K$ = "A" 'position released     [END IF](END IF.md)     [IF](IF.md) x% = 10 [AND](AND.md) "AND (boolean)") y% = 12 [AND](AND.md) "AND (boolean)") Lclick [THEN](THEN.md) 'position clicked       DO         i = [_MOUSEINPUT](_MOUSEINPUT.md)         x% = [_MOUSEX](_MOUSEX.md)         y% = [_MOUSEY](_MOUSEY.md)       [LOOP](LOOP.md) [WHILE](WHILE.md) _MOUSEBUTTON(1)       [IF](IF.md) x% = 10 [AND](AND.md) "AND (boolean)") y% = 12 [THEN](THEN.md) K$ = "B" 'position released     [END IF](END IF.md)     [IF](IF.md) x% = 10 [AND](AND.md) "AND (boolean)") y% = 14 [AND](AND.md) "AND (boolean)") Lclick [THEN](THEN.md) 'position clicked       DO         i = [_MOUSEINPUT](_MOUSEINPUT.md)         x% = [_MOUSEX](_MOUSEX.md)         y% = [_MOUSEY](_MOUSEY.md)       [LOOP](LOOP.md) [WHILE](WHILE.md) _MOUSEBUTTON(1)       [IF](IF.md) x% = 10 [AND](AND.md) "AND (boolean)") y% = 14 [THEN](THEN.md) K$ = "C" 'position released     [END IF](END IF.md)   [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = "A" [OR](OR.md) "OR (boolean)") K$ = "B" [OR](OR.md) "OR (boolean)") K$ = "C" '[GOTO](GOTO.md) next question    [IF](IF.md) [LEN](LEN.md)(K$) [THEN](THEN.md) 'DEMO ONLY     [LOCATE](LOCATE.md) 22, 35: [PRINT](PRINT.md) "  Answer = "; K$ 'display user answer at location     [_DELAY](_DELAY.md) 2 'allow time for user to view answer     [LOCATE](LOCATE.md) 22, 35: [PRINT](PRINT.md) "SELECT AGAIN"     K$ = "" 'reset K$   [END IF](END IF.md) [LOOP](LOOP.md) 'DEMO only loop use red X box to quit  
```

*Explanation:* User can cancel letter selection by moving pointer off letter before releasing the left mouse button.
  

## See also

* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md), [_MOUSEWHEEL](_MOUSEWHEEL.md)
* [_MOUSEINPUT](_MOUSEINPUT.md), [_MOUSEMOVE](_MOUSEMOVE.md)
* [_MOUSESHOW](_MOUSESHOW.md), [_MOUSEHIDE](_MOUSEHIDE.md)
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md), [_LASTBUTTON](_LASTBUTTON.md)
* [_BUTTON](_BUTTON.md), [_BUTTONCHANGE](_BUTTONCHANGE.md)
* [Controller Devices](Controller Devices.md)

  
