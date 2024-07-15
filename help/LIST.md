# KEY LIST

The [KEY n](KEY n.md) statement is used to assign a "soft key" string or a flag and scan code to a function key or display function soft key assignments.

  

## Syntax

**KEY *n%*, *textString$***
**KEY *n%*, CHR$(*keyFlag%*) + CHR$(*scanCode*)**
  

## Function Soft Key Strings (1 to 10, 30 & 31)

* n% is the number 1 to 10 (F1 to F10), 30 or 31 (F11 or F12) of the function key to assign the soft key string.
* Instead of using an [ON KEY(n)](ON KEY(n).md) "ON KEY(n)") [GOSUB](GOSUB.md) statement, Function keys F1 to F12 can be assigned a "soft key" string value to return.
* KEY n, text$ defines a literal or variable [STRING](STRING.md) "soft key" function key return value.

```         **KEY 1, "Help"** 'returns the string "Help" to [INPUT](INPUT.md) variable when F1 is pressed 
```

* KEY LIST displays each of the 12 softkey **function key** (F1 to F12) string values going down left side of screen.
* KEY {ON|OFF} displays or hides the softkey values of function keys F1 to F10 at the bottom of the screen.

  

## Number Pad Arrow Keys (11 to 14)

* Arrow keys on the Number Pad are predefined KEY numbers 11 to 14 and only work with Number Lock off.
* Soft Key [STRINGs](STRINGs.md) cannot be assigned to these key numbers!
* To use the extended arrow keys on a keyboard use the Extended Key Flag 128 with corresponding Scan code as User Defined Keys.

  

## User Defined Keys (15 to 29)

```                    **Function Key Flag Combination Values**                    **0** = no function key combination flag(single key)                   **1** = Left Shift key flag                   **2** = Right Shift key flag                   **4** = Ctrl flag                   **8** = Alt flag                  **32** = Number Lock flag                  **64** = Caps Lock flag                 **128** = Extended keys (see trapping extended keys below)            Flag values can be added to monitor multiple function key combinations.  
```

* After the keyflag code character the [scancode](scancode.md) character is added using one of the two **trapping methods** that follow:

``` '                           **Soft Key Scan Code Values** ' '      1  2  3  4  5  6  7  8  9  10   30  31                       Predefined Keys ' **Esc  F1 F2 F3 F4 F5 F6 F7 F8 F9 F10  F11 F12   SysReq ScrL Pause** '  1   59 60 61 62 63 64 65 66 67 68   87  88     --    70    29 ' **`~  1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0) -_ =+ BkSpc  Insert Home PgUp   NumL   /     *    -** '  41 2  3  4  5  6  7  8  9  10 11 12 13  14     82    71    73    32/69  53    55   74 ' **Tab  Q  W  E  R  T  Y  U  I  O  P  [{ ]} \|    Delete End  PgDn   7/Home 8/▲  9/PU  +**  '  15  16 17 18 19 20 21 22 23 24 25 26 27 43     83    79    81     71   11/72  73   78 ' **CapL  A  S  D  F  G  H  J  K  L  ;: '"  Enter                     4/◄-   5    6/-►  E** ' 64/58 30 31 32 33 34 35 36 37 38 39 40   28                       12/75  76   13/77 **n** ' **Shift  Z  X  C  V  B  N  M  ,< .> /?    Shift         ▲           1/End  2/▼  3/PD  t** ' 1/42   44 45 46 47 48 49 50 51 52 53    2/54          72           79   14/80  81   **e** ' **Ctrl Win Alt    Spacebar    Alt Win Menu Ctrl     ◄-  ▼   -►      0/Insert    ./Del r** ' 4/29  91 8/56      57       56  92   93  29       75  80  77       82          83   28 ' '  **Keyflag:** Function(0, 1, 2, 4, 8, 32, 64), Extended(128) **Scan Code:** 1-88, QB64 only(91-93) ' '        Reserved and function key combinations can be made using the scan code instead. '             Add function flag values to 128 for Extended key combinations.  
```

  

Keyboard Flag values can be added to monitor more than one control key. For example, flag combination 12 would flag both the Ctrl and Alt key presses. Since the flag already determines the function key to monitor, you don't necessarily have to use it's scancode. You can look for a key combination such as Ctrl + by using the plus key's scancode which is 13 as shown below:

```       **KEY 15, CHR$(4) + CHR$(13)** 'enabled event when Ctrl and + key are pressed 
```

  

* On a 101-key keyboard, you can trap any of the keys on the dedicated cursorpad by assigning the string to any of the keynumber values from 15 to 25 using the 128 keyboard flag. The cursor arrows are not the same as the pre-assigned number pad arrows:

```       **KEY n, [CHR$](CHR$.md)(128) + [CHR$](CHR$.md)(scancode) ' where n = 15 to 29. See: [Scancodes](Scancodes.md)**                KEY 15, CHR$(128) + CHR$(75)  'left arrow cursor pad                 KEY 16, CHR$(128) + CHR$(72)  'up arrow cursor pad                  KEY 17, CHR$(128) + CHR$(77)  'right arrow cursor pad                KEY 18, CHR$(128) + CHR$(80)  'down arrow cursor pad  
```

  

([Return to Table of Contents](Return to Table of Contents.md))

  

## Examples

*Example 1:* Shows a list of all the string assignments to the function keys F1-F12 (Prints help every time F1 is pressed in the input)

``` [KEY](KEY.md) 1, "Help" KEY LIST INPUT "Press F1 or to quit press ENTER: ", a$   
```

``` F1 Help F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Press F1 or to quit press ENTER: HelpHelpHelpHelp  
```

  

*Example 2:* Trapping the Control + key combination. Use the Control Keyboard flag 4 and + key scancode 13.

``` [CLS](CLS.md) [KEY](KEY.md) 15, [CHR$](CHR$.md)(4) + [CHR$](CHR$.md)(13)     'scancode for "=" or "+" key is 13 [ON KEY](ON KEY.md) "ON KEY(n)")(15) [GOSUB](GOSUB.md) control       'action of user defined key press [KEY](KEY.md) "KEY(n)")(15) ON                     'turn ON event trapping for key combination [PRINT](PRINT.md) "Press Ctrl and plus key combination, escape quits!" [DO](DO.md): [SLEEP](SLEEP.md) count = count + 1 [PRINT](PRINT.md) count; [IF](IF.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) [THEN](THEN.md) [END](END.md)  'escape key exit [LOOP](LOOP.md)  control:                             'NUMBER LOCK MUST BE OFF! [PRINT](PRINT.md) "Control and + keys pressed!"; [RETURN](RETURN.md)  
```

  

*Example 3:* Differentiating the extended cursor keypad arrows from the predefined Number Pad arrow keys.

``` 'predefined keys 11 to 14 for number pad arrows only [ON KEY](ON KEY.md) "ON KEY(n)")(11) [GOSUB](GOSUB.md) UpNum: [KEY](KEY.md) "KEY(n)")(11) ON 'up [ON KEY](ON KEY.md) "ON KEY(n)")(12) [GOSUB](GOSUB.md) LNum: [KEY](KEY.md) "KEY(n)")(12) ON  'left [ON KEY](ON KEY.md) "ON KEY(n)")(13) [GOSUB](GOSUB.md) RNum: [KEY](KEY.md) "KEY(n)")(13) ON  'right [ON KEY](ON KEY.md) "ON KEY(n)")(14) [GOSUB](GOSUB.md) DnNum: [KEY](KEY.md) "KEY(n)")(14) ON 'down 'user defined keys use extended key flag 128 + scan code [ON KEY](ON KEY.md) "ON KEY(n)")(15) [GOSUB](GOSUB.md) UpPad [KEY](KEY.md) 15, [CHR$](CHR$.md)(128) + [CHR$](CHR$.md)(72): [KEY](KEY.md) "KEY(n)")(15) ON 'cursor up [ON KEY](ON KEY.md) "ON KEY(n)")(16) [GOSUB](GOSUB.md) LPad [KEY](KEY.md) 16, [CHR$](CHR$.md)(128) + [CHR$](CHR$.md)(75): [KEY](KEY.md) "KEY(n)")(16) ON 'cursor left [ON KEY](ON KEY.md) "ON KEY(n)")(17) [GOSUB](GOSUB.md) RPad [KEY](KEY.md) 17, [CHR$](CHR$.md)(128) + [CHR$](CHR$.md)(77): [KEY](KEY.md) "KEY(n)")(17) ON 'cursor right [ON KEY](ON KEY.md) "ON KEY(n)")(18) [GOSUB](GOSUB.md) DnPad [KEY](KEY.md) 18, [CHR$](CHR$.md)(128) + [CHR$](CHR$.md)(80): [KEY](KEY.md) "KEY(n)")(18) ON 'cursor down  [DEF SEG](DEF SEG.md) = 0 DO   numL = [PEEK](PEEK.md)(1047) [AND](AND.md) "AND (boolean)") 32 '32 if on   capL = [PEEK](PEEK.md)(1047) [AND](AND.md) "AND (boolean)") 64 '64 on   [IF](IF.md) numL [OR](OR.md) "OR (boolean)") capL [THEN](THEN.md)     [COLOR](COLOR.md) 12: [LOCATE](LOCATE.md) 13, 50: [PRINT](PRINT.md) "Turn Num or Cap Lock OFF!"   [ELSE](ELSE.md) : [COLOR](COLOR.md) 10: [LOCATE](LOCATE.md) 13, 50: [PRINT](PRINT.md) "Number and Cap Lock OK!  "     [SLEEP](SLEEP.md)                  ' [KEY](KEY.md) or [TIMER](TIMER.md) event breaks a sleep   [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) [DEF SEG](DEF SEG.md)  [KEY](KEY.md) "KEY(n)")(15) OFF: [KEY](KEY.md) "KEY(n)")(16) OFF: [KEY](KEY.md) "KEY(n)")(17) OFF: [KEY](KEY.md) "KEY(n)")(18) OFF [KEY](KEY.md) "KEY(n)")(11) OFF: [KEY](KEY.md) "KEY(n)")(12) OFF: [KEY](KEY.md) "KEY(n)")(13) OFF: [KEY](KEY.md) "KEY(n)")(14) OFF [END](END.md)  UpPad: COLOR 14: LOCATE 11, 26: PRINT " Up cursor pad  " [RETURN](RETURN.md) LPad: COLOR 14: LOCATE 11, 26: PRINT "Left cursor pad " [RETURN](RETURN.md) RPad: COLOR 14: LOCATE 11, 26: PRINT "Right cursor pad" [RETURN](RETURN.md) DnPad: COLOR 14: LOCATE 11, 26: PRINT "Down cursor pad " [RETURN](RETURN.md) UpNum: COLOR 11: LOCATE 11, 26: PRINT " Up number pad  " [RETURN](RETURN.md) LNum: COLOR 11: LOCATE 11, 26: PRINT "Left number pad " [RETURN](RETURN.md) RNum: COLOR 11: LOCATE 11, 26: PRINT "Right number pad" [RETURN](RETURN.md) DnNum: COLOR 11: LOCATE 11, 26: PRINT "Down number pad " [RETURN](RETURN.md)  
```

*Explanation:* The Number Lock or Caps Lock keys ON may hinder extended key reads in QBasic but not QB64!
  

([Return to Table of Contents](Return to Table of Contents.md))

  

## See also

* KEY LIST, [ON KEY(n)](ON KEY(n).md) "ON KEY(n)")
* [KEY(n)](KEY(n).md) "KEY(n)"), [INKEY$](INKEY$.md)
* [_KEYHIT](_KEYHIT.md), [_KEYDOWN](_KEYDOWN.md)
* [Keyboard scancodes](Keyboard scancodes.md)

  
