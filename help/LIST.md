## KEY LIST
---

### The KEY n statement is used to assign a "soft key" string or a flag and scan code to a function key or display function soft key assignments.

#### SYNTAX

`KEY n% , textString$`

#### EXAMPLES
##### Example 1: Shows a list of all the string assignments to the function keys F1-F12 (Prints help every time F1 is pressed in the input)
```vb
KEY 1, "Help"
KEY LIST
INPUT "Press F1 or to quit press ENTER: ", a$
```
  
```vb
F1 Help
F2
F3
F4
F5
F6
F7
F8
F9
F10
F11
F12
Press F1 or to quit press ENTER: HelpHelpHelpHelp
```
  
##### Example 2: Trapping the Control + key combination. Use the Control Keyboard flag 4 and + key scancode 13.
```vb
CLS
KEY 15, CHR$(4) + CHR$(13)     'scancode for "=" or "+" key is 13
ON KEY(15) GOSUB control       'action of user defined key press
KEY(15) ON                     'turn ON event trapping for key combination
PRINT "Press Ctrl and plus key combination, escape quits!"
DO: SLEEP
count = count + 1
PRINT count;
IF INKEY$ = CHR$(27) THEN END  'escape key exit
LOOP

control:                             'NUMBER LOCK MUST BE OFF!
PRINT "Control and + keys pressed!";
RETURN
```
  
##### Example 3: Differentiating the extended cursor keypad arrows from the predefined Number Pad arrow keys.
```vb
'predefined keys 11 to 14 for number pad arrows only
ON KEY(11) GOSUB UpNum: KEY(11) ON 'up
ON KEY(12) GOSUB LNum: KEY(12) ON  'left
ON KEY(13) GOSUB RNum: KEY(13) ON  'right
ON KEY(14) GOSUB DnNum: KEY(14) ON 'down
'user defined keys use extended key flag 128 + scan code
ON KEY(15) GOSUB UpPad
KEY 15, CHR$(128) + CHR$(72): KEY(15) ON 'cursor up
ON KEY(16) GOSUB LPad
KEY 16, CHR$(128) + CHR$(75): KEY(16) ON 'cursor left
ON KEY(17) GOSUB RPad
KEY 17, CHR$(128) + CHR$(77): KEY(17) ON 'cursor right
ON KEY(18) GOSUB DnPad
KEY 18, CHR$(128) + CHR$(80): KEY(18) ON 'cursor down

DEF SEG = 0
DO
 numL = PEEK(1047) AND 32 '32 if on
 capL = PEEK(1047) AND 64 '64 on
 IF numL OR capL THEN
   COLOR 12: LOCATE 13, 50: PRINT "Turn Num or Cap Lock OFF!"
 ELSE : COLOR 10: LOCATE 13, 50: PRINT "Number and Cap Lock OK!  "
   SLEEP                  ' KEY or TIMER event breaks a sleep
 END IF
LOOP UNTIL INKEY$ = CHR$(27)
DEF SEG

KEY(15) OFF: KEY(16) OFF: KEY(17) OFF: KEY(18) OFF
KEY(11) OFF: KEY(12) OFF: KEY(13) OFF: KEY(14) OFF
END

UpPad:
COLOR 14: LOCATE 11, 26: PRINT " Up cursor pad  "
RETURN
LPad:
COLOR 14: LOCATE 11, 26: PRINT "Left cursor pad "
RETURN
RPad:
COLOR 14: LOCATE 11, 26: PRINT "Right cursor pad"
RETURN
DnPad:
COLOR 14: LOCATE 11, 26: PRINT "Down cursor pad "
RETURN
UpNum:
COLOR 11: LOCATE 11, 26: PRINT " Up number pad  "
RETURN
LNum:
COLOR 11: LOCATE 11, 26: PRINT "Left number pad "
RETURN
RNum:
COLOR 11: LOCATE 11, 26: PRINT "Right number pad"
RETURN
DnNum:
COLOR 11: LOCATE 11, 26: PRINT "Down number pad "
RETURN
```
  
##### ( Return to Table of Contents )


#### SEE ALSO
* [KEY](./KEY.md) [LIST](./LIST.md) , [ON](./ON.md) [KEY](./KEY.md)(n)
* [KEY](./KEY.md)(n) , INKEY$
* [_KEYHIT](./_KEYHIT.md) , [_KEYDOWN](./_KEYDOWN.md)
* Keyboard scancodes
