# INP

INP returns a value from a computer register or port values at a specified physical address.

  

## Syntax

*i* = INP(*address*)
  

* **QB64 has limited access to registers. VGA memory and registers are emulated.**
* Address can be a decimal or hexadecimal [INTEGER](INTEGER.md) value.
* INP reads directly from a register or port address.
* It does not require a [DEF SEG](DEF SEG.md) memory segment address like [PEEK](PEEK.md) or [POKE](POKE.md) do.
* Reads color port intensity settings after [OUT](OUT.md) &H3C7, attribute sets the starting attribute read mode.

  

## Examples

*Example 1:* Reading the current RGB color settings used in a bitmap to an array.

```  SCREEN 12  [DIM](DIM.md) Colors%(47)  [OUT](OUT.md) &H3C7, 0 ' set color port for INP reads at attribute 0 to start  [FOR](FOR.md) i = 0 [TO](TO.md) 47  Colors%(i) = INP(&H3C9) ' moves to next color attribute every 3 loops  [NEXT](NEXT.md)  
```

  

*Example 2:* Reading the keyboard Scan Codes as an alternative to [INKEY$](INKEY$.md)

```  [DO](DO.md): [SLEEP](SLEEP.md)     scancode% = INP(&H60)     a$ = [INKEY$](INKEY$.md) ' clears keyboard buffer     [PRINT](PRINT.md) scancode%;  [LOOP](LOOP.md) [UNTIL](UNTIL.md) scancode% = 1 ' [ESC] keypress exit  
```

  

*Example 3:* A simple ping pong game using an array function to read multiple keys for two players.

``` [DEFINT](DEFINT.md) A-Z [SCREEN](SCREEN.md) 12 [DIM](DIM.md) ball%(100)        ' Set aside enough space to hold the ball sprite [CIRCLE](CIRCLE.md) (4, 3), 4, 4 [PAINT](PAINT.md) (4, 3), 12, 4   ' Draw a filled circle and fill for ball [GET](GET.md) "GET (graphics statement)") (0, 0)-(8, 7), ball%(0) ' Get the sprite into the Ball% array  begin: xmin = 10: ymin = 10 xmax = 630: ymax = 470 x = 25: y = 25 dx = 1: dy = 1 LTpos = 50: RTpos = 50  DO: [_LIMIT](_LIMIT.md) 100 'adjust higher for faster [CLS](CLS.md) [IF](IF.md) ScanKey%(17) [THEN](THEN.md) LTpos = LTpos - 1 [IF](IF.md) ScanKey%(31) [THEN](THEN.md) LTpos = LTpos + 1 [IF](IF.md) ScanKey%(72) [THEN](THEN.md) RTpos = RTpos - 1 [IF](IF.md) ScanKey%(80) [THEN](THEN.md) RTpos = RTpos + 1  [PRINT](PRINT.md) "Player 1 : "; ponescore; " Player 2 : "; ptwoscore  [IF](IF.md) x > xmax - 15 [AND](AND.md) "AND (boolean)") y >= RTpos [AND](AND.md) "AND (boolean)") y <= RTpos + 100 [THEN](THEN.md) dx = -1 [ELSEIF](ELSEIF.md) x > xmax [THEN](THEN.md) ponescore = ponescore + 1 [GOSUB](GOSUB.md) begin [END IF](END IF.md)  [IF](IF.md) x < xmin + 15 [AND](AND.md) "AND (boolean)") y >= LTpos [AND](AND.md) "AND (boolean)") y <= LTpos + 100 [THEN](THEN.md) dx = 1 [ELSEIF](ELSEIF.md) x < xmin [THEN](THEN.md) ptwoscore = ptwoscore + 1 [GOSUB](GOSUB.md) begin [END IF](END IF.md)  [IF](IF.md) y > ymax - 5 [THEN](THEN.md) dy = -1 [IF](IF.md) y < ymin + 5 [THEN](THEN.md) dy = 1 ' Display the sprite elsewhere on the screen  x = x + dx y = y + dy  [PUT](PUT.md) "PUT (graphics statement)")(x, y), ball%(0)   [LINE](LINE.md) (20, LTpos)-(20, LTpos + 100) [LINE](LINE.md) (620, RTpos)-(620, RTpos + 100)  [_DISPLAY](_DISPLAY.md) 'shows completed screen every call  [LOOP](LOOP.md) [UNTIL](UNTIL.md) ScanKey%(1) [END](END.md)   [FUNCTION](FUNCTION.md) ScanKey% (scancode%) [STATIC](STATIC.md) Ready%, keyflags%() [IF](IF.md) [NOT](NOT.md) Ready% [THEN](THEN.md) [REDIM](REDIM.md) keyflags%(0 [TO](TO.md) 127): Ready% = -1 i% = INP([&H](&H.md)60) 'read keyboard states [IF](IF.md) (i% [AND](AND.md) "AND (boolean)") 128) [THEN](THEN.md) keyflags%(i% [XOR](XOR.md) "XOR (boolean)") 128) = 0 [IF](IF.md) (i% [AND](AND.md) "AND (boolean)") 128) = 0 [THEN](THEN.md) keyflags%(i%) = -1 K$ = [INKEY$](INKEY$.md) ScanKey% = keyflags%(scancode%) [END FUNCTION](END FUNCTION.md)  
```

*Note:* [_KEYDOWN](_KEYDOWN.md) can be used to read multiple keys simultaneously and is the **recommended practice**.
  

## See also

* [OUT](OUT.md) (write to register), [PEEK](PEEK.md) (read memory)
* [INKEY$](INKEY$.md), [_KEYHIT](_KEYHIT.md), [_KEYDOWN](_KEYDOWN.md)
* [Bitmaps](Bitmaps.md), [Scancodes](Scancodes.md) (keyboard)
* [Port Access Libraries](Port Access Libraries.md) (COM or LPT registers)

  
