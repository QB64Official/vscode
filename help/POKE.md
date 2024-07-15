# POKE

The **POKE** statement sets the value of a specified memory address offset. **QB64 currently has limited access!**

  

## Syntax

POKE *segment_offset*, *offset_value*
  

## Description

* Writes a value to the *segment_offset* address in memory.
* POKE can only be used to set a value from 0 to 255 (one byte).
* A segment should be defined using [DEF SEG](DEF SEG.md), if you don't define a segment QBasic's ordinary segment will be used.
* POKE sends byte values to memory areas. It does not directly access registers.
* Important [SCREEN](SCREEN.md) segments using [PEEK](PEEK.md) and POKE include &HB800 (text segment) and &HA000 (graphics segment).
* [DEF SEG](DEF SEG.md) should always be used to reset the default segment when access to other memory is no longer necessary.
* POKE is safer to use than [OUT](OUT.md) which could damage a PC register.
* **Warning: DEF SEG, VARSEG , VARPTR, PEEK or POKE access QB64's emulated 16 bit conventional memory block!**

**It is highly recommended that QB64's [_MEM](_MEM.md) memory system be used to avoid running out of memory.**
  

## Examples

*Example 1:* Turning keyboard Lock and Insert modes on and off.

```  DEF SEG = 0  oldsetting% = PEEK(1047)  POKE 1047,PEEK(1047) OR 16 ' ENABLES SCROLL LOCK  POKE 1047,PEEK(1047) OR 32 ' ENABLES NUMBER LOCK  POKE 1047,PEEK(1047) OR 64 ' ENABLES CAPS LOCK  POKE 1047,PEEK(1047) OR 128 ' ENABLES INSERT MODE  DEF SEG   
```

*Note: Use [XOR](XOR.md) instead of [OR](OR.md) above to alternate between on and off modes.*

```  [DEF SEG](DEF SEG.md) = 0  oldsetting% = [PEEK](PEEK.md)(1047)  POKE 1047,PEEK(1047) AND 239 ' TURNS OFF SCROLL LOCK (239 = 255 - 16)  POKE 1047,PEEK(1047) AND 223 ' TURNS OFF NUMBER LOCK (223 = 255 - 32)  POKE 1047,PEEK(1047) AND 191 ' TURNS OFF CAPS LOCK (191 = 255 - 64)  POKE 1047,PEEK(1047) AND 127 ' TURNS OFF INSERT MODE (127 = 255 - 128)  [DEF SEG](DEF SEG.md)  
```

*Note: Using [AND](AND.md) requires that the bit value is subtracted from 255 to turn off a bit.* The above examples won't work in NT.
**Warning: The keyboard lights may NOT change so it is a good idea to restore the original settings!**
  

*Example 2:* A small PEEK and POKE fractal program.

``` [SCREEN](SCREEN.md) 13 [DEF SEG](DEF SEG.md) = [&H](&H.md)A000     'set to read screen buffer [DO](DO.md)     [FOR](FOR.md) a& = 0 [TO](TO.md) 65535         POKE a&, [PEEK](PEEK.md)((a& * 2) [AND](AND.md) "AND (boolean)") [&H](&H.md)FFFF&) + 1     [NEXT](NEXT.md)     [_LIMIT](_LIMIT.md) 25 [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> "" [DEF SEG](DEF SEG.md)  
```

  

*Example 3:* Highlighting a row of text in Screen 0

``` minX = 20: maxX = 60: minY = 10: maxY = 24 selection = 0 'the screen Y coordinate of the previously highlighted item [FOR](FOR.md) i% = 1 [TO](TO.md) 25: [LOCATE](LOCATE.md) i%, 40: [PRINT](PRINT.md) i%;: [NEXT](NEXT.md) [DO](DO.md): [_LIMIT](_LIMIT.md) 100   [IF](IF.md) [_MOUSEINPUT](_MOUSEINPUT.md) [THEN](THEN.md)     'Un-highlight any selected row     [IF](IF.md) selection [THEN](THEN.md) selectRow selection, minX, maxX, 0     x = [CINT](CINT.md)([_MOUSEX](_MOUSEX.md))     y = [CINT](CINT.md)([_MOUSEY](_MOUSEY.md))     [IF](IF.md) x >= minX [AND](AND.md) "AND (boolean)") x <= maxX [AND](AND.md) "AND (boolean)") y >= minY [AND](AND.md) "AND (boolean)") y <= maxY [THEN](THEN.md)       selection = y     [ELSE](ELSE.md)       selection = 0     [END IF](END IF.md)     'Highlight any selected row     [IF](IF.md) selection [THEN](THEN.md) SelectRow selection, minX, maxX, 2     [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(1) [THEN](THEN.md) [LOCATE](LOCATE.md) 1, 2: [PRINT](PRINT.md) x, y, selection   [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  [SUB](SUB.md) SelectRow (y, x1, x2, col) [DEF SEG](DEF SEG.md) = [&H](&H.md)B800 addr& = (x1 - 1 + (y - 1) * [_WIDTH](_WIDTH.md) "WIDTH (function)")) * 2 + 1 [FOR](FOR.md) x = x1 [TO](TO.md) x2   oldCol = [PEEK](PEEK.md)(addr&) [AND](AND.md) "AND (boolean)") [&B](&B.md)10001111   ' Mask foreground color and blink bit   POKE addr&, oldCol [OR](OR.md) ((col [AND](AND.md) "AND (boolean)") [&B](&B.md)111) * [&B](&B.md)10000) ' Apply background color   addr& = addr& + 2 [NEXT](NEXT.md) [END SUB](END SUB.md)  
```

### More Examples

* [SelectScreen](SelectScreen.md)

  

## See also

* [DEF SEG](DEF SEG.md), [DEF SEG = 0](DEF SEG = 0.md)
* [PEEK](PEEK.md), [OUT](OUT.md)
* [VARSEG](VARSEG.md), [VARPTR](VARPTR.md)
* [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)"), [_MEMPUT](_MEMPUT.md)
* [Scancodes](Scancodes.md), [Screen Memory](Screen Memory.md)
* [PEEK and POKE Library](PEEK and POKE Library.md)

  
