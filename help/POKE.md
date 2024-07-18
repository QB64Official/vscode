## POKE
---

### The POKE statement sets the value of a specified memory address offset. QB64 currently has limited access!

#### SYNTAX

`POKE segment_offset , offset_value`

#### DESCRIPTION
* Writes a value to the segment_offset address in memory.
* [POKE](./POKE.md) can only be used to set a value from 0 to 255 (one byte).
* A segment should be defined using [DEF](./DEF.md) [SEG](./SEG.md) , if you don't define a segment QBasic's ordinary segment will be used.
* [POKE](./POKE.md) sends byte values to memory areas. It does not directly access registers.
* Important [SCREEN](./SCREEN.md) segments using [PEEK](./PEEK.md) and [POKE](./POKE.md) include &HB800 (text segment) and &HA000 (graphics segment).
* [DEF](./DEF.md) [SEG](./SEG.md) should always be used to reset the default segment when access to other memory is no longer necessary.
* [POKE](./POKE.md) is safer to use than [OUT](./OUT.md) which could damage a PC register.
* Warning: [DEF](./DEF.md) [SEG](./SEG.md), [VARSEG](./VARSEG.md) , [VARPTR](./VARPTR.md), [PEEK](./PEEK.md) or [POKE](./POKE.md) access QB64's emulated 16 bit conventional memory block!


#### EXAMPLES
```vb
DEF SEG = 0
oldsetting% = PEEK(1047)
POKE 1047,PEEK(1047) OR 16 ' ENABLES SCROLL LOCK
POKE 1047,PEEK(1047) OR 32 ' ENABLES NUMBER LOCK
POKE 1047,PEEK(1047) OR 64 ' ENABLES CAPS LOCK
POKE 1047,PEEK(1047) OR 128 ' ENABLES INSERT MODE
DEF SEG
```
  
```vb
DEF SEG = 0
oldsetting% = PEEK(1047)
POKE 1047,PEEK(1047) AND 239 ' TURNS OFF SCROLL LOCK (239 = 255 - 16)
POKE 1047,PEEK(1047) AND 223 ' TURNS OFF NUMBER LOCK (223 = 255 - 32)
POKE 1047,PEEK(1047) AND 191 ' TURNS OFF CAPS LOCK (191 = 255 - 64)
POKE 1047,PEEK(1047) AND 127 ' TURNS OFF INSERT MODE (127 = 255 - 128)
DEF SEG
```
  
##### Example 2: A small PEEK and POKE fractal program.
```vb
SCREEN 13
DEF SEG = &HA000     'set to read screen buffer
DO
   FOR a& = 0 TO 65535
       POKE a&, PEEK((a& * 2) AND &HFFFF&) + 1
   NEXT
   _LIMIT 25
LOOP UNTIL INKEY$ <> ""
DEF SEG
```
  
##### Example 3: Highlighting a row of text in Screen 0
```vb
minX = 20: maxX = 60: minY = 10: maxY = 24
selection = 0 'the screen Y coordinate of the previously highlighted item
FOR i% = 1 TO 25: LOCATE i%, 40: PRINT i%;: NEXT
DO: _LIMIT 100
 IF _MOUSEINPUT THEN
   'Un-highlight any selected row
   IF selection THEN selectRow selection, minX, maxX, 0
   x = CINT(_MOUSEX)
   y = CINT(_MOUSEY)
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
* [DEF](./DEF.md) [SEG](./SEG.md) , [DEF](./DEF.md) [SEG](./SEG.md) = 0
* [PEEK](./PEEK.md) , [OUT](./OUT.md)
* [VARSEG](./VARSEG.md) , [VARPTR](./VARPTR.md)
* [_MEMGET](./_MEMGET.md) (function) , [_MEMPUT](./_MEMPUT.md)
* Scancodes , Screen Memory
* [PEEK](./PEEK.md) and [POKE](./POKE.md) Library
