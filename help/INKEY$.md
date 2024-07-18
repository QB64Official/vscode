## INKEY$
---

### The INKEY$ function returns user input as ASCII STRING character(s) from the keyboard buffer.

#### SYNTAX

`keypress$ = INKEY$`

#### DESCRIPTION
* Returns ASCII character string values in upper or lower cases. See: UCASE$ and LCASE$
* Returns "" if no key has been pressed since the last keyboard read.
* Some control keys cannot be read by INKEY$ or will return 2 byte ASCII codes.
* INKEY$ can also be used to clear a [SLEEP](./SLEEP.md) key press or the keyboard buffer in a loop.
* Assign the INKEY$ return to a string variable to save the key entry.
* [LOCATE](./LOCATE.md) , , 1 displays the INKEY$ cursor. Use [LOCATE](./LOCATE.md) , , 0 to turn it off.
* To receive input from a $[CONSOLE](./CONSOLE.md) window, use [_CINP](./_CINP.md) .
* Returns can be evaluated as certain ASCII characters or codes.


#### EXAMPLES
##### Example 1: Clearing the keyboard buffer after SLEEP delays for later INPUT .
```vb
PRINT "Press any keyboard typing key to end SLEEP"
SLEEP
DO: K$ = INKEY$: PRINT K$: LOOP UNTIL K$ = ""
```
  
##### Example 2: Entering a Ctrl + letter keypress combination will print ASCII Control characters 1 to 26. .
```vb
DO
   K$ = INKEY$
   IF K$ <> "" THEN PRINT K$; " ";
LOOP UNTIL K$ = CHR$(27) 'Esc key exit
```
  
##### Example 3: Use UCASE$ (INKEY$) in a keyboard read loop looking for uppercase "Y" or "N" user inputs to avoid multiple IF statements.
```vb
DO
 PRINT "Do you want to continue? (Y/N): ";  'semicolon saves position for user entry
 DO: K$ = UCASE$(INKEY$) 'change any user key press to uppercase
 LOOP UNTIL K$ = "Y" OR K$ = "N"
 PRINT K$  'print valid user entry
 IF K$ = "N" THEN END
LOOP
```
  
##### Example 4: Getting just number values entered by a user in an INKEY$ input loop.
```vb
LOCATE 10, 10: PRINT "Enter a number value: ";
DO: SLEEP
 K$ = INKEY$
 IF K$ >= CHR$(48) AND K$ <= CHR$(57) THEN entry$ = entry$ + K$ ' numbers only
 L = LEN(entry$) ' check entry length for possible backspace
 IF K$ = CHR$(46) AND flag = 0 THEN entry$ = entry$ + K$: flag = 1: mark = L ' decimal point
 IF K$ = CHR$(8) AND L > 0 THEN ' backspace pressed and entry has a length
   entry$ = MID$(entry$, 1, L - 1) ' remove one character from entry$
   IF LEN(entry$) < mark THEN flag = 0 ' allow decimal point entry if other was removed.
   LOCATE CSRLIN, POS(0) - 1: PRINT SPACE$(1); ' remove end character from screen
 END IF
 LOCATE 10, 32: PRINT entry$; ' display entry to user (semicolon required for correct POS)
LOOP UNTIL K$ = CHR$(13) AND L > 0 'assures something is entered
```
  
##### Example 5: Using arrow keys to move a text character. A change from a previous position tells program when to PRINT:
```vb
movey = 1: movex = 1 'text coordinates can never be 0
at$ = "@"  'text sprite could be almost any ASCII character
LOCATE movey, movex: PRINT at$;
DO
   px = movex: py = movey 'previous positions
   B$ = INKEY$
   IF B$ = CHR$(0) + CHR$(72) AND movey > 1 THEN movey = movey - 1 'rows 1 to 23 only
   IF B$ = CHR$(0) + CHR$(80) AND movey < 23 THEN movey = movey + 1
   IF B$ = CHR$(0) + CHR$(75) AND movex > 1 THEN movex = movex - 1 'columns 1 to 80 only
   IF B$ = CHR$(0) + CHR$(77) AND movex < 80 THEN movex = movex + 1

   IF px <> movex OR py <> movey THEN 'only changes when needed
       LOCATE py, px: PRINT SPACE$(1); 'erase old sprite
       LOCATE movey, movex: PRINT at$; 'show new position
   END IF
LOOP UNTIL B$ = CHR$(27) 'ESCape key exit
END
```
  
##### Example 6: Using INKEY$ with the arrow or WASD keys to move the QB64 bee image sprite with _PUTIMAGE :
```vb
DIM image AS LONG
DIM x AS INTEGER
DIM y AS INTEGER
DIM Keypress AS STRING

SCREEN _NEWIMAGE(800, 600, 32)

x = 0
y = 0
image = _LOADIMAGE("QB64bee.png") 'Here I actually used the QB64 icon

DO
 _PUTIMAGE (x, y), image
 DO
   Keypress = UCASE$(INKEY$)
   ' ***** The following line detects the arrow keys *****
   IF LEN(Keypress) > 1 THEN Keypress = RIGHT$(Keypress, 1)
 LOOP UNTIL Keypress > ""

 CLS ' blank screen after valid key press to avoid smearing image on page

 SELECT CASE Keypress
   CASE "W", "H": y = y - 10 'Up
   CASE "A", "K": x = x - 10 'Left
   CASE "S", "P": y = y + 10 'Down
   CASE "D", "M": x = x + 10 'Right
   CASE "Q", CHR$(27): END 'Q or Esc Ends prog.
 END SELECT
 _PUTIMAGE (x, y), image
LOOP
```
  
##### Example 7: Creating upper ASCII characters in a QB program using Alt + three number keys:
```vb
DO
   A$ = "": WHILE A$ = "": A$ = INKEY$: WEND
   IF LEN(A$) = 2 THEN '2 byte INKEY$ return
       B$ = RIGHT$(A$, 1)  'read second byte
       b% = ASC(B$)        'read second byte code
       IF b% > 119 AND b% < 130 THEN ' Alt + number codes only
          C% = b% - 119  ' convert to actual number
          IF C% > 9 THEN C% = 0
          num$ = num$ + LTRIM$(STR$(C%))
       END IF
   END IF
LOOP UNTIL LEN(num$) = 3  ' 3 digit codes only

PRINT num$
PRINT CHR$(VAL(num$)
```
  
```vb
155 ¢
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_KEYHIT](./_KEYHIT.md) , [_KEYDOWN](./_KEYDOWN.md) , [_MAPUNICODE](./_MAPUNICODE.md)
* [_KEYCLEAR](./_KEYCLEAR.md)
* [INPUT](./INPUT.md) , [LINE](./LINE.md) [INPUT](./INPUT.md)
* [INPUT](./INPUT.md)$ , [INP](./INP.md)
* CHR$ , ASCII
* [ASC](./ASC.md) (function) , Scancodes (keyboard)
* Windows hot keys
