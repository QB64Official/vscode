# DO...LOOP

**DO...LOOP** statements are used in programs to repeat code or return to the start of a procedure.

  

## Syntax

*Syntax 1:*

**[DO](DO.md)** [{[WHILE]({[WHILE.md)|[UNTIL](UNTIL.md)} condition]
*{code}*
⋮
**[LOOP](LOOP.md)**
  

*Syntax 2:*

**[DO](DO.md)**
*{code}*
⋮
**[LOOP](LOOP.md)** [{[WHILE]({[WHILE.md)|[UNTIL](UNTIL.md)} condition]
  

## Description

* **DO UNTIL or DO WHILE used with LOOP**: The condition is evaluated before running the loop code.

[UNTIL](UNTIL.md) checks if the condition is false each time before running code.
[WHILE](WHILE.md) checks if the condition is true each time before running code.
* **DO used with LOOP UNTIL or LOOP WHILE**: The code block will run at least once:

[UNTIL](UNTIL.md) checks if the condition is false before running loop code again.
[WHILE](WHILE.md) checks if the condition is true before running loop code again.
* NOTE: You cannot use a condition after both the DO and LOOP statements at the same time.
* Use **[EXIT](EXIT.md) DO** to exit a loop block even before the condition is met.
	+ If you don't specify a condition, you must exit the loop block manually using **[EXIT](EXIT.md) DO**.
* If a loop never meets an exit condition requirement, it will never stop.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

## Examples

*Example 1:* Using WHILE to clear the keyboard buffer.

```   DO WHILE [INKEY$](INKEY$.md) <> "": LOOP ' checks evaluation before running loop code  DO: LOOP WHILE INKEY$ <> "" ' checks evaluation after one run of loop code   
```

  

*Example 2:* Using UNTIL to clear the keyboard buffer.

```   DO UNTIL [INKEY$](INKEY$.md) = "": LOOP ' checks evaluation before running loop code  DO: LOOP UNTIL [INKEY$](INKEY$.md) = "" ' checks evaluation after one run of loop code   
```

  

*Example 3:* Using a one time DO loop to exit ANY of several FOR LOOPs, without using [GOTO](GOTO.md).

SUB reads header contents of a [BSAVE](BSAVE.md) file that may include embedded RGB color settings before the image.

``` [DEFINT](DEFINT.md) A-Z [INPUT](INPUT.md) "Enter a BSAVE file name to read the file for screen mode:"', filenm$ CheckScreen filenm$  [END](END.md)  [DEFINT](DEFINT.md) A-Z [SUB](SUB.md) CheckScreen (Filename$)        'find Screen mode (12 or 13) and image dimensions    DIM Bsv AS [STRING](STRING.md) * 1    DIM Header AS STRING * 6     Scr = 0: MaxColors = 0    [OPEN](OPEN.md) Filename$ FOR [BINARY](BINARY.md) AS #1     [GET](GET.md) #1, , Bsv           '1 check for small 2 character    GET #1, , Header        '2 - 7 rest of file header     IF Bsv <> [CHR$](CHR$.md)(253) THEN   ' small 2 character denotes a [BSAVE](BSAVE.md) file       COLOR 12: LOCATE 15, 33: PRINT "Not a BSAVE file!": SLEEP 3: [EXIT](EXIT.md) SUB    END IF     GET #1, , widN           '8 no color info bmp sizes    GET #1, , depN           '9   "        "      "  DO   IF widN > 63 OR depN > 63 THEN [EXIT DO](EXIT DO.md)  ' width and depth already found    FOR i = 10 TO 55       'check for Screen 12 embedded colors     GET #1, , RGB     tot12& = tot12& + RGB     'PRINT i; RGB; : SOUND 300, 1         'test sound slows loop in QB     IF RGB > 63 OR RGB < 0 THEN [EXIT DO](EXIT DO.md)     IF i = 55 AND tot12& = 0 THEN [EXIT DO](EXIT DO.md)   NEXT    GET #1, , wid12          '56   GET #1, , dep12          '57   IF wid12 > 63 OR dep12 > 63 THEN [EXIT DO](EXIT DO.md)    FOR i = 58 TO 775      'check for Screen 13 embedded colors     GET #1, , RGB     tot13& = tot13& + RGB     'PRINT i; RGB; : SOUND 300, 1          'test     IF RGB > 63 OR RGB < 0 THEN [EXIT DO](EXIT DO.md)     IF i = 775 AND tot13& = 0 THEN [EXIT DO](EXIT DO.md)   NEXT   GET #1, , wid13          '776   GET #1, , dep13          '777 LOOP [UNTIL](UNTIL.md) 1 = 1    'TRUE statement exits one-time LOOP CLOSE #1  COLOR 14: LOCATE 10, 25 [SELECT CASE](SELECT CASE.md) i   [CASE IS](CASE IS.md) < 56:    IF widN > 640 THEN        Scr = 13: MaxColors = 0        PRINT "Default Screen 13:"; widN \ 8; "X"; depN    ELSE     LOCATE 10, 15     PRINT "Screen 12 ("; widN; "X"; depN; ") OR 13 ("; widN \ 8; "X"; depN; ")"     DO: SOUND 600, 4        COLOR 13: LOCATE 12, 23  'ask if no data found. Prevents ERROR opening in wrong mode        [INPUT](INPUT.md) "Enter a Screen mode 12 or 13 : ", Scrn$        Scr = VAL(Scrn$)     LOOP UNTIL Scr = 12 OR Scr = 13    END IF    IF Scr = 12 THEN MaxColors = 0: PWidth = widN: PDepth = depN    IF Scr = 13 THEN MaxColors = 0: PWidth = widN \ 8: PDepth = depN   [CASE](CASE.md) 56 TO 775      PRINT "Custom Screen 12:"; wid12; "X"; dep12      Scr = 12: MaxColors = 16: PWidth = wid12: PDepth = dep12   [CASE](CASE.md) 776: PRINT "Custom Screen 13:"; wid13 \ 8; "X"; dep13      Scr = 13: MaxColors = 256: PWidth = wid13 \ 8: PDepth = dep13 [END SELECT](END SELECT.md)  [END SUB](END SUB.md)  
```

*Explanation:* The SUB procedure reads a file that was [BSAVEd](BSAVEd.md) previously. If the RGB colors are stored before the image, the values can only be between 0 and 63. Higher values indicate that the image width and height are located there and that there are no stored color values to be read. SUB later displays the dimensions of the file image that [GET](GET.md) "GET (graphics statement)") placed in the file array. The loop is set to only run once by creating **a TRUE [UNTIL](UNTIL.md) statement** such as 1 = 1. When a screen mode cannot be determined, the user must select one.
Dimensions and location of width and height information indicates the screen mode as [SCREEN](SCREEN.md) 13 if it has 768 RGB values and dimensions of 320 X 200 max. If the file only holds 64 settings and/or is larger than 320 X 200, it uses SCREEN 12 or 9. The procedure [EXITs](EXITs.md) the DO LOOP early when the image size is found with or without custom color settings.
Divide SCREEN 13 [GET](GET.md) "GET (graphics statement)") widths by 8.
  

## See also

* [EXIT DO](EXIT DO.md)
* [WHILE...WEND](WHILE...WEND.md)
* [FOR...NEXT](FOR...NEXT.md)

  
