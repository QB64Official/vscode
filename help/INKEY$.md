# INKEY$

The INKEY$ function returns user input as [ASCII](ASCII.md) [STRING](STRING.md) character(s) from the keyboard buffer.

  

## Syntax

*keypress$* = INKEY$
  

## Description

* Returns [ASCII](ASCII.md) character string values in upper or lower cases. See: [UCASE$](UCASE$.md) and [LCASE$](LCASE$.md)
* Returns "" if no key has been pressed since the last keyboard read.
* Some control keys cannot be read by INKEY$ or will return 2 byte [ASCII](ASCII.md) codes.
* INKEY$ can also be used to clear a [SLEEP](SLEEP.md) key press or the keyboard buffer in a loop.
* Assign the INKEY$ return to a string variable to save the key entry.
* [LOCATE](LOCATE.md) , , 1 displays the INKEY$ cursor. Use [LOCATE](LOCATE.md) , , 0 to turn it off.
* To receive input from a [$CONSOLE]($CONSOLE.md) window, use [_CINP](_CINP.md).
* Returns can be evaluated as certain [ASCII](ASCII.md) characters or codes.

``` '                                **ASCII Keyboard Codes** ' '  **Esc  F1  F2  F3  F4  F5  F6  F7  F8  F9  F10  F11  F12  Sys ScL Pause** '   27 +59 +60 +61 +62 +63 +64 +65 +66 +67 +68  +133 +134   -   -    - '  **`~  1!  2@  3#  4$  5%  6^  7&  8*  9(  0) -_ =+ BkSp   Ins Hme PUp   NumL  /   *    -** '  126 33  64  35  36  37  94  38  42  40  41 95 43   8    +82 +71 +73    -    47  42   45 '  *96 49  50  51  52  53  54  55  56  57  48 45 61* '  **Tab Q   W   E   R   T   Y   U   I   O   P  [{  ]}  \|   Del End PDn   7Hme 8/▲  9PU  +**  '   9  81  87  69  82  84  89  85  73  79  80 123 125 124  +83 +79 +81   +71  +72  +73  43 '  *113 119 101 114 116 121 117 105 111 112  91  93  92                 55   56   57*  '  **CapL  A   S   D   F   G   H   J   K   L   ;:  '" Enter                4/◄-  5   6/-►** '    -   65  83  68  70  71  72  74  75  76  58  34  13                  +75  +76  +77  **E** '  *97 115 100 102 103 104 106 107 108  59  39                       52   53   54*  **n** '  **Shift  Z   X   C   V   B   N   M   ,<  .>  /?    Shift       ▲        1End 2/▼  3PD  t** '    *    90  88  67  86  66  78  77  60  62  63      *        +72       +79  +80  +81  **e** '  *122 120  99 118  98 110 109  44  46  47                          49   50   51*  **r** '  **Ctrl Win Alt       Spacebar          Alt Win Menu Ctrl   ◄-  ▼   -►   0Ins     .Del**  '   *    -   *           32              *   -   -    *    +75 +80 +77   +82       +83  13 '                                                                     *48        46* ' '   ***Italics* = LCase/NumLock On  * = 2 byte combo only,  + = 2 Byte: CHR$(0) + CHR$(code)** '  
```

  

## Two Byte Combinations

* INKEY$ 2 byte combinations always begin with [CHR$](CHR$.md)(0). [ASC](ASC.md) "ASC (function)") will always read the first byte code as zero.
* Read the second byte code using: **code2 = ASC(press$, 2)**

  

```                     **Two Byte Characters        Key                 CHR$(0) + "?"**                       CHR$(0) + CHR$(16-50)      [Alt] + letter                     CHR$(0) + CHR$(59)         [F1]                 ";"                     CHR$(0) + CHR$(60)         [F2]                 "<"                     CHR$(0) + CHR$(61)         [F3]                 "="                     CHR$(0) + CHR$(62)         [F4]                 ">"                     CHR$(0) + CHR$(63)         [F5]                 "?"                     CHR$(0) + CHR$(64)         [F6]                 "@"                     CHR$(0) + CHR$(65)         [F7]                 "A"                     CHR$(0) + CHR$(66)         [F8]                 "B"                     CHR$(0) + CHR$(67)         [F9]                 "C"                     CHR$(0) + CHR$(68)         [F10]                "D"                     CHR$(0) + CHR$(71)         [Home]               "G"                     CHR$(0) + CHR$(72)         [↑] Arrow            "H"                     CHR$(0) + CHR$(73)         [Page Up]            "I"                     CHR$(0) + CHR$(75)         [←] Arrow            "K"                     CHR$(0) + CHR$(76)         [5 NumberPad]        "L" (NumLock off in QB64)                     CHR$(0) + CHR$(77)         [→] Arrow            "M"                     CHR$(0) + CHR$(79)         [End]                "O"                     CHR$(0) + CHR$(80)         [↓] Arrow            "P"                     CHR$(0) + CHR$(81)         [Page Down]          "Q"                     CHR$(0) + CHR$(82)         [Insert]             "R"                     CHR$(0) + CHR$(83)         [Delete]             "S"                     CHR$(0) + CHR$(84-93)      [Shift] + F1-10                     CHR$(0) + CHR$(94-103)     [Ctrl] + F1-10                     CHR$(0) + CHR$(104-113)    [Alt] + F1-10                     CHR$(0) + CHR$(114-119)    [Ctrl] + keypad                     CHR$(0) + CHR$(120-129)    [Alt] + number                     CHR$(0) + CHR$(130 or 131) [Alt] + _/- or +/=   "é" or "â"                     CHR$(0) + CHR$(133)        [F11]                "à"                     CHR$(0) + CHR$(134)        [F12]                "å"                     CHR$(0) + CHR$(135)        [Shift] + [F11]      "ç"                     CHR$(0) + CHR$(136)        [Shift] + [F12]      "ê"                     CHR$(0) + CHR$(137)        [Ctrl] + [F11]       "ë"                     CHR$(0) + CHR$(138)        [Ctrl] + [F12]       "è"                     CHR$(0) + CHR$(139)        [Alt] + [F11]        "ï"                     CHR$(0) + CHR$(140)        [Alt] + [F12]        "î"  
```

In **QB64**, [CVI](CVI.md) can be used to get the [_KEYDOWN](_KEYDOWN.md) 2-byte code value. Example: **status = _KEYDOWN(CVI(CHR$(0) + "P"))**
  

## Examples

*Example 1:* Clearing the keyboard buffer after [SLEEP](SLEEP.md) delays for later [INPUT](INPUT.md).

``` [PRINT](PRINT.md) "Press any keyboard typing key to end SLEEP" [SLEEP](SLEEP.md) [DO](DO.md): K$ = INKEY$: [PRINT](PRINT.md) K$: [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = ""  
```

*Explanation:* [SLEEP](SLEEP.md) key presses will be kept in the keyboard buffer and may be added into an [INPUT](INPUT.md) later.
  

*Example 2:* Entering a Ctrl + letter keypress combination will print [ASCII](ASCII.md) Control characters 1 to 26. .

``` DO     K$ = INKEY$     [IF](IF.md) K$ <> "" [THEN](THEN.md) [PRINT](PRINT.md) K$; " "; [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = [CHR$](CHR$.md)(27) 'Esc key exit  
```

*Note:* The above code will print Esc arrow, Backspace symbol, and 2 byte characters led by CHR$(0) in addition to normal keys.
  

*Example 3:* Use [UCASE$](UCASE$.md)(INKEY$) in a keyboard read loop looking for uppercase "Y" or "N" user inputs to avoid multiple IF statements.

``` [DO](DO.md)   [PRINT](PRINT.md) "Do you want to continue? (Y/N): ";  'semicolon saves position for user entry   [DO](DO.md): K$ = [UCASE$](UCASE$.md)(INKEY$) 'change any user key press to uppercase   [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = "Y" [OR](OR.md) "OR (boolean)") K$ = "N"   [PRINT](PRINT.md) K$  'print valid user entry   [IF](IF.md) K$ = "N" [THEN](THEN.md) [END](END.md) [LOOP](LOOP.md)  
```

  

*Example 4:* Getting just number values entered by a user in an INKEY$ input loop.

``` [LOCATE](LOCATE.md) 10, 10: [PRINT](PRINT.md) "Enter a number value: "; [DO](DO.md): [SLEEP](SLEEP.md)   K$ = INKEY$   [IF](IF.md) K$ >= [CHR$](CHR$.md)(48) [AND](AND.md) "AND (boolean)") K$ <= [CHR$](CHR$.md)(57) [THEN](THEN.md) entry$ = entry$ + K$ ' numbers only   L = [LEN](LEN.md)(entry$) ' check entry length for possible backspace   [IF](IF.md) K$ = [CHR$](CHR$.md)(46) [AND](AND.md) "AND (boolean)") flag = 0 [THEN](THEN.md) entry$ = entry$ + K$: flag = 1: mark = L ' decimal point   [IF](IF.md) K$ = [CHR$](CHR$.md)(8) [AND](AND.md) "AND (boolean)") L > 0 [THEN](THEN.md) ' backspace pressed and entry has a length     entry$ = [MID$](MID$.md) "MID$ (function)")(entry$, 1, L - 1) ' remove one character from entry$     [IF](IF.md) [LEN](LEN.md)(entry$) < mark [THEN](THEN.md) flag = 0 ' allow decimal point entry if other was removed.     [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md), [POS](POS.md)(0) - 1: [PRINT](PRINT.md) [SPACE$](SPACE$.md)(1); ' remove end character from screen   [END IF](END IF.md)   [LOCATE](LOCATE.md) 10, 32: [PRINT](PRINT.md) entry$; ' display entry to user (semicolon required for correct [POS](POS.md)) [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = [CHR$](CHR$.md)(13) [AND](AND.md) "AND (boolean)") L > 0 'assures something is entered  
```

*Explanation:* [SLEEP](SLEEP.md) waits for a keypress. It also allows background programs to share the processor and it leaves the keypress in the buffer for INKEY$. Keyboard string number characters range from [ASCII](ASCII.md) codes 48 to 57. Any other entry is ignored by the IF statement. A decimal point (code 46) entry is allowed once in the input. The flag value stops further decimal point additions. Backspacing (code 8) is also allowed if the entry has at least one character. The cursor column returned by [POS](POS.md)(0) reverts too after the end of the entry when printed each loop. The loop exits when [Enter] (code 13) is pressed and the entry has a length.
  

*Example 5:* Using arrow keys to move a text character. A change from a previous position tells program when to PRINT:

``` movey = 1: movex = 1 'text coordinates can never be 0 at$ = "@"  'text sprite could be almost any ASCII character [LOCATE](LOCATE.md) movey, movex: [PRINT](PRINT.md) at$; DO     px = movex: py = movey 'previous positions     B$ = INKEY$     [IF](IF.md) B$ = [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(72) [AND](AND.md) "AND (boolean)") movey > 1 [THEN](THEN.md) movey = movey - 1 'rows 1 to 23 only     [IF](IF.md) B$ = [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(80) [AND](AND.md) "AND (boolean)") movey < 23 [THEN](THEN.md) movey = movey + 1     [IF](IF.md) B$ = [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(75) [AND](AND.md) "AND (boolean)") movex > 1 [THEN](THEN.md) movex = movex - 1 'columns 1 to 80 only     [IF](IF.md) B$ = [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(77) [AND](AND.md) "AND (boolean)") movex < 80 [THEN](THEN.md) movex = movex + 1      [IF](IF.md) px <> movex [OR](OR.md) "OR (boolean)") py <> movey [THEN](THEN.md) 'only changes when needed         [LOCATE](LOCATE.md) py, px: [PRINT](PRINT.md) [SPACE$](SPACE$.md)(1); 'erase old sprite         [LOCATE](LOCATE.md) movey, movex: [PRINT](PRINT.md) at$; 'show new position     [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) B$ = [CHR$](CHR$.md)(27) 'ESCape key exit [END](END.md)  
```

  

*Example 6:* Using INKEY$ with the arrow or WASD keys to move the QB64 bee image sprite with [_PUTIMAGE](_PUTIMAGE.md):

``` [DIM](DIM.md) image [AS](AS.md) [LONG](LONG.md) [DIM](DIM.md) x [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) y [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) Keypress [AS](AS.md) [STRING](STRING.md)  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32)  x = 0 y = 0 image = [_LOADIMAGE](_LOADIMAGE.md)("QB64bee.png") 'Here I actually used the QB64 icon  DO   [_PUTIMAGE](_PUTIMAGE.md) (x, y), image   DO     Keypress = [UCASE$](UCASE$.md)(INKEY$)     ' ***** The following line detects the arrow keys *****     [IF](IF.md) [LEN](LEN.md)(Keypress) > 1 [THEN](THEN.md) Keypress = [RIGHT$](RIGHT$.md)(Keypress, 1)   [LOOP](LOOP.md) [UNTIL](UNTIL.md) Keypress > ""    [CLS](CLS.md) ' blank screen after valid key press to avoid smearing image on page    [SELECT CASE](SELECT CASE.md) Keypress     [CASE](CASE.md) "W", "H": y = y - 10 'Up     [CASE](CASE.md) "A", "K": x = x - 10 'Left     [CASE](CASE.md) "S", "P": y = y + 10 'Down     [CASE](CASE.md) "D", "M": x = x + 10 'Right     [CASE](CASE.md) "Q", [CHR$](CHR$.md)(27): [END](END.md) 'Q or Esc Ends prog.   [END SELECT](END SELECT.md)   [_PUTIMAGE](_PUTIMAGE.md) (x, y), image [LOOP](LOOP.md)  
```

*Note:* The image can be placed off of the screen without error. The image moves 10 pixels to move faster. [CLS](CLS.md) eliminates any background.
  

*Example 7:* Creating upper [ASCII](ASCII.md) characters in a QB program using **Alt +** three number keys:

``` DO     A$ = "": [WHILE](WHILE.md) A$ = "": A$ = INKEY$: [WEND](WEND.md)     [IF](IF.md) [LEN](LEN.md)(A$) = 2 [THEN](THEN.md) '2 byte INKEY$ return         B$ = [RIGHT$](RIGHT$.md)(A$, 1)  'read second byte         b% = [ASC](ASC.md) "ASC (function)")(B$)        'read second byte code         [IF](IF.md) b% > 119 [AND](AND.md) "AND (boolean)") b% < 130 [THEN](THEN.md) ' Alt + number codes only            C% = b% - 119  ' convert to actual number            [IF](IF.md) C% > 9 [THEN](THEN.md) C% = 0            num$ = num$ + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(C%))         [END IF](END IF.md)     [END IF](END IF.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [LEN](LEN.md)(num$) = 3  ' 3 digit codes only  [PRINT](PRINT.md) num$ [PRINT](PRINT.md) [CHR$](CHR$.md)([VAL](VAL.md)(num$)  
```

```  155 ¢  
```

*Explanation:* Hold down Alt key and press 3 keyboard code number keys. **Number pad keys may not work.** Note that INKEY$ cannot read Alt, Ctrl or Shift key presses without a key combination and the return is CHR$(0) + CHR$(code).
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_KEYHIT](_KEYHIT.md), [_KEYDOWN](_KEYDOWN.md), [_MAPUNICODE](_MAPUNICODE.md)
* [_KEYCLEAR](_KEYCLEAR.md)
* [INPUT](INPUT.md), [LINE INPUT](LINE INPUT.md)
* [INPUT$](INPUT$.md), [INP](INP.md)
* [CHR$](CHR$.md), [ASCII](ASCII.md)
* [ASC (function)](ASC (function).md) "ASC (function)"), [Scancodes](Scancodes.md) (keyboard)
* [Windows hot keys](Windows hot keys.md) "Windows Libraries")

  
