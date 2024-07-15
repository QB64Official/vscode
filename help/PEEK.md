# PEEK

The **PEEK** function returns the value that is contained at a certain memory address offset. **QB64 currently has limited access!**

  

## Syntax

variable = PEEK(*segment_offset*)
  

* Reads the specified memory *segment_offset* value.
* Use [DEF SEG](DEF SEG.md) before PEEK to specify which memory segment to work in.
* PEEK only reads the memory byte value. Not certain bits. (See [AND](AND.md))
* Important [SCREEN](SCREEN.md) segments using PEEK and [POKE](POKE.md) include &HB800 (text segment) and &HA000 (graphics segment).
* To return to Basic default segment use [DEF SEG](DEF SEG.md) without any arguments.
* **Warning: DEF SEG, VARSEG , VARPTR, PEEK or POKE access QB64's emulated 16 bit conventional memory block!**

**It is highly recommended that QB64's [_MEM](_MEM.md) memory system be used to avoid running out of memory.**
  

*Example:* Checking the 8 keyboard bit settings using a PEEK return value.

```  SCREEN 12  [DEF SEG](DEF SEG.md) = 0 ' BIOS area  oldvalue = PEEK(1047) ' IMPORTANT! save initial setting to reset later  DO: [_LIMIT](_LIMIT.md) 100    port = PEEK(1047)    IF port > 0 THEN LOCATE 26, 19: COLOR 11:       PRINT "Turn ALL Locks off to see each key's bit value!"    END IF  COLOR 14:LOCATE 2, 25  PRINT "PEEK(1047) ="; port; "present keyboard port byte value"  LOCATE 5, 35  IF (port [AND](AND.md) 1) = 1 THEN COLOR 10: PRINT "R SHIFT PRESSED  " ELSE COLOR 12: PRINT "R SHIFT RELEASED"  LOCATE 7, 35  IF (port AND 2) = 2 THEN COLOR 10: PRINT "L SHIFT PRESSED  " ELSE COLOR 12: PRINT "L SHIFT RELEASED"  LOCATE 9, 35  IF (port AND 4) = 4 THEN COLOR 10: PRINT "CTRL KEY PRESSED " ELSE COLOR 12: PRINT "CTRL KEY RELEASED"  LOCATE 11, 35  IF (port AND 8) = 8 THEN COLOR 10: PRINT "ALT KEY PRESSED " ELSE COLOR 12: PRINT "ALT KEY RELEASED"  LOCATE 13, 35  IF (port AND 16) = 16 THEN COLOR 10: PRINT "SCROLL LOCK ON " ELSE COLOR 12: PRINT "SCROLL LOCK OFF"  LOCATE 15, 35  IF (port AND 32) = 32 THEN COLOR 10: PRINT "NUMBER LOCK ON " ELSE COLOR 12: PRINT "NUMBER LOCK OFF"  LOCATE 17, 35  IF (port AND 64) = 64 THEN COLOR 10: PRINT "CAPS LOCK ON " ELSE COLOR 12: PRINT "CAPS LOCK OFF"  LOCATE 19, 35  IF (port AND 128) = 128 THEN COLOR 10: PRINT "INSERT MODE ON " ELSE COLOR 12: PRINT "INSERT MODE OFF"  COLOR 11: LOCATE 21, 20: PRINT "Press mode keys to change or [ESC] to quit!";  LOOP UNTIL [INP](INP.md)(&H60) = 1 ' escape key exit  [POKE](POKE.md) 1047, oldvalue      ' IMPORTANT reset to original settings  [DEF SEG](DEF SEG.md)  
```

**NOTE: Keyboard Port function key settings cannot be reset on NT machines!**
### More Examples

* [SelectScreen](SelectScreen.md)

  

## See also

* [POKE](POKE.md), [INP](INP.md)
* [DEF SEG](DEF SEG.md), [VARSEG](VARSEG.md), [VARPTR](VARPTR.md)
* [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)"), [_MEMPUT](_MEMPUT.md)
* [DEF SEG = 0](DEF SEG = 0.md), [Scancodes](Scancodes.md)
* [PEEK and POKE Library](PEEK and POKE Library.md)
* [Screen Memory](Screen Memory.md)

  
