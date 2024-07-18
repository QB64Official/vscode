## _MOUSEINPUT
---

### The _MOUSEINPUT function is used to monitor any new mouse positions, button presses or movements of the scroll wheel. Must be called before other mouse information becomes available.

#### SYNTAX

`infoExists%% = _MOUSEINPUT`

#### DESCRIPTION
* Returns -1 if new mouse information is available, otherwise it returns 0.
* Must be called before reading any of the other mouse functions. The function will not miss any mouse input even during an [INPUT](./INPUT.md) entry.
* Use in a loop to monitor the mouse buttons, scroll wheel and coordinate positions.
* To clear all previous mouse data, use [_MOUSEINPUT](./_MOUSEINPUT.md) in a loop until it returns 0.


#### EXAMPLES
##### Example 1: Mouse coordinate, click and scroll events are returned sequentially inside of a _MOUSEINPUT loop.
```vb
DO
 DO WHILE _MOUSEINPUT '      Check the mouse status
   PRINT _MOUSEX, _MOUSEY, _MOUSEBUTTON(1), _MOUSEWHEEL
 LOOP
LOOP UNTIL INKEY$ <> ""
```
  
##### Example 2: How to use a _MOUSEINPUT loop to locate PSET positions on a screen using a right mouse button click.
```vb
SCREEN 12

DO ' main program loop

 ' your program code

 DO WHILE _MOUSEINPUT'mouse status changes only
   x = _MOUSEX
   y = _MOUSEY
   IF x > 0 AND x < 640 AND y > 0 AND y < 480 THEN
     IF _MOUSEBUTTON(2) THEN
       PSET (x, y), 15
       LOCATE 1, 1: PRINT x, y
     END IF
   END IF
 LOOP

 ' your program code

LOOP UNTIL INKEY$ = CHR$(27)
```
  
##### Example 3: Clearing any mouse data read before or during an INPUT entry. Press "I" to enter input:
```vb
PRINT "Press I to enter input! Press Q to quit"
DO
 K$ = UCASE$(INKEY$)
 DO
   IF _MOUSEBUTTON(1) = -1 THEN PRINT "*"    'indicates a mouse click event
 LOOP WHILE _MOUSEINPUT
 IF K$ = "Q" THEN END
 IF K$ = "I" THEN                                          'press I to enter text
   INPUT "Click the mouse and enter something: ", entry$   'enter some text
   GOSUB Clickcheck                                        'clear mouse data
 END IF
LOOP

END

Clickcheck:
count = 0
DO
 count = count + 1
LOOP WHILE _MOUSEINPUT
PRINT count        'returns the number of loops before mouse data is cleared
RETURN
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEY](./_MOUSEY.md) , [_MOUSEBUTTON](./_MOUSEBUTTON.md) , [_MOUSEWHEEL](./_MOUSEWHEEL.md)
* [_MOUSESHOW](./_MOUSESHOW.md) , [_MOUSEHIDE](./_MOUSEHIDE.md) , [_MOUSEMOVE](./_MOUSEMOVE.md)
* Controller Devices
