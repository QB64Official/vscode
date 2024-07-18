## _KEYHIT
---

### The _KEYHIT function returns ASCII one and two byte, OpenGL Virtual Key and Unicode keyboard key press codes.

#### SYNTAX

`keycode& = _KEYHIT`

#### DESCRIPTION
* Return values range up to &H40000000 so use a [LONG](./LONG.md) or [_INTEGER64](./_INTEGER64.md) variable type. See the [_KEYDOWN](./_KEYDOWN.md) code list:


#### EXAMPLES
##### Example: This routine will return the codes for any keyboard presses.
```vb
DEFLNG A-Z
SCREEN _NEWIMAGE(800, 600, 8)
CLS , 1
font = _LOADFONT("cyberbit.ttf", 24)
unifont = _LOADFONT("cyberbit.ttf", 24, "UNICODE")
_FONT font

DO
 x = _KEYHIT
 IF x THEN
   IF x < 0 THEN  'negative value means key released
     COLOR 2
     PRINT "Released ";
     x = -x
   ELSE
     COLOR 10
     PRINT "Pressed ";   'positive value means key pressed
   END IF
   IF x < 256 THEN    'ASCII code values
     PRINT "ASCII "; x;
     IF x >= 32 AND x <= 255 THEN PRINT "[" + CHR$(x) + "]" ELSE PRINT
   END IF
   IF x >= 256 AND x < 65536 THEN '2 byte key codes
     PRINT "2-BYTE-COMBO "; x AND 255; x \ 256;
     x2 = x \ 256
     IF x2 >= 32 AND x2 <= 255 THEN PRINT "[" + CHR$(x2) + "]" ELSE PRINT
   END IF
   IF x >= 100000 AND x < 200000 THEN      'QB84 Virtual Key codes
     PRINT "SDL VK"; x - 100000
     END IF
     IF x >= 200000 AND x < &H40000000 THEN
           PRINT "QB64 VK"; x - 200000
   END IF
   IF x >= &H40000000 THEN              'Unicode values (IME Input mode)
     PRINT "UNICODE "; x - &H40000000; "0x" + HEX$(x - &H40000000) + " ...";
     cx = POS(1): cy = CSRLIN
     _FONT unifont
     LOCATE cy, cx
     COLOR 15
     z$ = MKL$(x - &H40000000) + MKL$(0)
     PRINT z$ + z$ + z$;
     _FONT font
     LOCATE cy, 1: PRINT
   END IF
 END IF
LOOP
```
  


#### SEE ALSO
* [_KEYDOWN](./_KEYDOWN.md) , [_CINP](./_CINP.md)
* [_MAPUNICODE](./_MAPUNICODE.md) , [_MAPUNICODE](./_MAPUNICODE.md) (function)
* INKEY$ , ASCII (code table) ,
* Unicode , Code Pages (by region)
* [INP](./INP.md) ( &H60 ), Scancodes
* [ON](./ON.md) [KEY](./KEY.md)(n) , [KEY](./KEY.md)(n) , [KEY](./KEY.md) n
* Windows hot keys
