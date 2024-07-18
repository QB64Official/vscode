## INP
---

### INP returns a value from a computer register or port values at a specified physical address.

#### SYNTAX

`i = INP ( address )`

#### EXAMPLES
##### Example 1: Reading the current RGB color settings used in a bitmap to an array.
```vb
SCREEN 12
DIM Colors%(47)
OUT &H3C7, 0 ' set color port for INP reads at attribute 0 to start
FOR i = 0 TO 47
Colors%(i) = INP(&H3C9) ' moves to next color attribute every 3 loops
NEXT
```
  
##### Example 2: Reading the keyboard Scan Codes as an alternative to INKEY$
```vb
DO: SLEEP
   scancode% = INP(&H60)
   a$ = INKEY$ ' clears keyboard buffer
   PRINT scancode%;
LOOP UNTIL scancode% = 1 ' [ESC] keypress exit
```
  
##### Example 3: A simple ping pong game using an array function to read multiple keys for two players.
```vb
DEFINT A-Z
SCREEN 12
DIM ball%(100)        ' Set aside enough space to hold the ball sprite
CIRCLE (4, 3), 4, 4
PAINT (4, 3), 12, 4   ' Draw a filled circle and fill for ball
GET (0, 0)-(8, 7), ball%(0) ' Get the sprite into the Ball% array

begin:
xmin = 10: ymin = 10
xmax = 630: ymax = 470
x = 25: y = 25
dx = 1: dy = 1
LTpos = 50: RTpos = 50

DO: _LIMIT 100 'adjust higher for faster
CLS
IF ScanKey%(17) THEN LTpos = LTpos - 1
IF ScanKey%(31) THEN LTpos = LTpos + 1
IF ScanKey%(72) THEN RTpos = RTpos - 1
IF ScanKey%(80) THEN RTpos = RTpos + 1

PRINT "Player 1 : "; ponescore; " Player 2 : "; ptwoscore

IF x > xmax - 15 AND y >= RTpos AND y <= RTpos + 100 THEN
dx = -1
ELSEIF x > xmax THEN
ponescore = ponescore + 1
GOSUB begin
END IF

IF x < xmin + 15 AND y >= LTpos AND y <= LTpos + 100 THEN
dx = 1
ELSEIF x < xmin THEN
ptwoscore = ptwoscore + 1
GOSUB begin
END IF

IF y > ymax - 5 THEN dy = -1
IF y < ymin + 5 THEN dy = 1
' Display the sprite elsewhere on the screen

x = x + dx
y = y + dy

PUT(x, y), ball%(0)


LINE (20, LTpos)-(20, LTpos + 100)
LINE (620, RTpos)-(620, RTpos + 100)

_DISPLAY 'shows completed screen every call

LOOP UNTIL ScanKey%(1)
END


FUNCTION ScanKey% (scancode%)
STATIC Ready%, keyflags%()
IF NOT Ready% THEN REDIM keyflags%(0 TO 127): Ready% = -1
i% = INP(&H60) 'read keyboard states
IF (i% AND 128) THEN keyflags%(i% XOR 128) = 0
IF (i% AND 128) = 0 THEN keyflags%(i%) = -1
K$ = INKEY$
ScanKey% = keyflags%(scancode%)
END FUNCTION
```
  


#### SEE ALSO
* [OUT](./OUT.md) (write to register) , [PEEK](./PEEK.md) (read memory)
* INKEY$ , [_KEYHIT](./_KEYHIT.md) , [_KEYDOWN](./_KEYDOWN.md)
* Bitmaps , Scancodes (keyboard)
* Port Access Libraries ([COM](./COM.md) or LPT registers)
