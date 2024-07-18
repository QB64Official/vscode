## _FULLSCREEN
---

### The _FULLSCREEN statement attempts to make the program window fullscreen.

#### SYNTAX

`_FULLSCREEN [ _STRETCH | _SQUAREPIXELS| _OFF ][, _SMOOTH ]`

#### PARAMETERS
* [_STRETCH](./_STRETCH.md) default first choice attempts to mimic QBasic's full screens if possible. [_FULLSCREEN](./_FULLSCREEN.md) (function) returns 1.
* [_SQUAREPIXELS](./_SQUAREPIXELS.md) alternate choice enlarges the pixels into squares on some monitors. [_FULLSCREEN](./_FULLSCREEN.md) returns 2
* [_OFF](./_OFF.md) turns [_FULLSCREEN](./_FULLSCREEN.md) off after full screen has been enabled. [_FULLSCREEN](./_FULLSCREEN.md) (function) returns 0.
* Second optional parameter [_SMOOTH](./_SMOOTH.md) applies antialiasing to the stretched screen.


#### DESCRIPTION
* Set the [SCREEN](./SCREEN.md) mode and text [WIDTH](./WIDTH.md) when necessary first. Otherwise there may be desktop view issues.
* [_FULLSCREEN](./_FULLSCREEN.md) with no parameters chooses [_STRETCH](./_STRETCH.md) or [_SQUAREPIXELS](./_SQUAREPIXELS.md) (prioritizes [_STRETCH](./_STRETCH.md) to mimic QBasic if possible)
* Check the fullscreen mode with the [_FULLSCREEN](./_FULLSCREEN.md) function in your programs when a method is required.
* It is advisable to get input from the user to confirm that fullscreen was completed or there were possible monitor incompatibilities.
* If fullscreen is not confirmed with a [_FULLSCREEN](./_FULLSCREEN.md) (function) return greater than 0 , then disable with [_FULLSCREEN](./_FULLSCREEN.md) [_OFF](./_OFF.md) .
* NOTE: [_FULLSCREEN](./_FULLSCREEN.md) can also be affected by custom [_FONT](./_FONT.md) size settings and make program screens too large.


#### EXAMPLES
##### Example 1: Setting the screen mode first prevents enlargement of the desktop before the program window is set:
```vb
SCREEN 12
_FULLSCREEN
IF _FULLSCREEN = 0 THEN _FULLSCREEN _OFF 'check that a full screen mode initialized

LINE (100, 100)-(500, 400), 13, BF
```
  
##### Example 2: How fonts and _FULLSCREEN affect the program's window size.
```vb
SCREEN 0
DO
   PRINT
   LINE INPUT "Enter MODE 1) ENLARGE WINDOW  2) FULL _SQUAREPIXELS  3) FULL _STRETCH: ", WMODE$
   PRINT
   IF WMODE$ = "1" THEN INPUT "SIZE 1 TO 9: ", ENLARGE%

   SELECT CASE ENLARGE%
       CASE 1, 2, 3, 4, 5: STYLE$ = "MONOSPACE, BOLD"
       CASE 6, 7, 8, 9: STYLE$ = "MONOSPACE"
       CASE ELSE: STYLE$ = "MONOSPACE"
   END SELECT

   SELECT CASE WMODE$
       CASE "1"
           full = _FULLSCREEN
           IF full > 0 THEN _FULLSCREEN _OFF
           f& = _LOADFONT("c:\windows\fonts\lucon.ttf", 13 + ENLARGE%, STYLE$)
           _FONT f&
       CASE "2"
           _FULLSCREEN _SQUAREPIXELS
           full = _FULLSCREEN
           IF full = 0 THEN GOSUB FCHECK
       CASE "3"
           _FULLSCREEN _STRETCH
           full = _FULLSCREEN
           IF full = 0 THEN GOSUB FCHECK
   END SELECT

   mode = _FULLSCREEN
   PRINT
   PRINT "_FULLSCREEN mode ="; mode,
   PRINT "PRESS ESC TO END OR ENTER TO CONTINUE..."

   DO: SLEEP: B$ = INKEY$: LOOP UNTIL B$ = CHR$(13) OR B$ = CHR$(27)

   GOSUB ClearFont

LOOP UNTIL B$ = CHR$(27)
GOSUB ClearFont
END

FCHECK:
Z3 = TIMER
DO
   IF TIMER < Z3 THEN Z3 = Z3 - TIMER
   IF TIMER - Z3 > 4 THEN EXIT DO
LOOP
full = _FULLSCREEN
IF full = 0 THEN _FULLSCREEN _OFF: SOUND 100, .75
RETURN

ClearFont:
IF f& > 0 THEN
   _FONT 16 'select inbuilt 8x16 default font
   _FREEFONT f&
END IF
RETURN
```
  
##### Example 3: Testing all fullscreen methods.
```vb
PRINT "Hello, world!"
PRINT "Hit 1 for windowed mode;"
PRINT "    2 for _STRETCH"
PRINT "    3 for _SQUAREPIXELS"
PRINT "    4 for _STRETCH, _SMOOTH"
PRINT "    5 for _SQUAREPIXELS, _SMOOTH"
DO
   k$ = INKEY$
   SELECT CASE VAL(k$)
       CASE 1
           _FULLSCREEN _OFF
       CASE 2
           _FULLSCREEN _STRETCH
       CASE 3
           _FULLSCREEN _SQUAREPIXELS
       CASE 4
           _FULLSCREEN _STRETCH , _SMOOTH
       CASE 5
           _FULLSCREEN _SQUAREPIXELS , _SMOOTH
   END SELECT
   _LIMIT 30
LOOP UNTIL _EXIT
SYSTEM
```
  


#### SEE ALSO
* [_FULLSCREEN](./_FULLSCREEN.md) (function)
* [_SMOOTH](./_SMOOTH.md) (function)
* [_ALLOWFULLSCREEN](./_ALLOWFULLSCREEN.md)
* [_FONT](./_FONT.md) , [SCREEN](./SCREEN.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md)
* [_SCREENMOVE](./_SCREENMOVE.md) , [_SCREENX](./_SCREENX.md) , [_SCREENY](./_SCREENY.md)
