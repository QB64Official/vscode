# PRINT

The PRINT statement prints numeric or string expressions to the program screen. Typing shortcut **?** will convert to PRINT.

  

## Syntax

**PRINT** [*expression*] [{;|,}] [*expression*...]
  

## Parameters

* *expression* is a numeric or string expression or list of expressions to be written to the screen. End quotes will not be displayed in strings.
* The print statement can be followed by a [semicolon](semicolon.md) to stop the print cursor or a [comma](comma.md) to tab space the next print.

  

*Usage:*

* [STRING](STRING.md) values will eliminate leading and trailing quotation marks when printed to the screen. Use [CHR$](CHR$.md)(34) to add quotes to the [SCREEN](SCREEN.md).
* PRINT with no parameters moves the print cursor to the next print row at column 1.
* *expression* is a numeric or string expression to be printed.
	+ [SPACE$](SPACE$.md)(*n%*) or [SPC](SPC.md)(*n%*) - specifies that *n%* space characters will be printed.
	+ [TAB](TAB.md)(*column%*) - specifies that the print cursor is to move to column number *column%*. If the print cursor is already beyond that column, it is moved to the designated column on the next row.
* A *separator* is used to separate multiple expressions and specifies how the print cursor is to be moved:
	+ [Semicolon](Semicolon.md)(;) - specifies that the print cursor stops at the end of the printed *expression* and may append later *expressions* or prints. PRINT ; or PRINT ""; will stop cursor movement and append later prints. Ending [semicolons](semicolons.md) can also stop screen roll.
	+ [Comma](Comma.md)(,) - specifies that the print cursor is to move to the next 14-column tab-stop. If the print cursor is at column 56 or greater, it is moved to the next row at column 1. When used after an *expression* it may Tab-stop append later prints.
	+ [Plus](Plus.md)(+) uses [concatenation](concatenation.md) to add [STRING](STRING.md) expressions ONLY with no spacing. **Cannot combine numerical *expression*s!**
	+ If a *separator* is not used at the end of the expression list, the print cursor moves to the next row at column 1.
* When **printing numerical** *expressions* values, the following rules are used:
	+ If the value is positive, the number is prefixed with a space character, otherwise, the number is prefixed with a negative sign (-).
	+ If the value is an integer (whole number), no decimal point or fractional part will be printed.
	+ If the value is not an [integer](integer.md)(whole number) and has zero for a coefficient, no leading zero is printed. EX: -0.123 prints "-.123 "
	+ If the expression is in [scientific notation](scientific notation.md), the number is also printed in scientific notation.
	+ The number is printed with a space after it unless [STR$](STR$.md)(number) is used to convert it to string text.
	+ Numerical values MUST be added to a PRINT statement string using [commas](commas.md) or [semicolons](semicolons.md) on each side of the value or by using [STR$](STR$.md) to convert the value to a string to use [concatenation](concatenation.md) (+ string addition).
* [VIEW PRINT](VIEW PRINT.md) can set up a viewport area for PRINTs. Text printed on the bottom view port row will scroll the text upward.
* Text to be printed can be a [STRING](STRING.md) variable or a literal value inside of quotation marks.
* Use [semicolon](semicolon.md) ends on bottom 2 rows of the SCREEN mode used or the PRINT will roll the screen up.
* **Quotes cannot be inside of a literal STRING! Use [CHR$](CHR$.md)(34) [concatenation](concatenation.md) to insert [quotation marks](quotation marks.md) into a literal string.**
* To better format number and text data placement use [PRINT USING](PRINT USING.md).
* Instead of typing PRINT you can just type a [question mark](question mark.md) (?). It will change to PRINT when enter is pressed in the IDE.
* Use the [_PRINTMODE](_PRINTMODE.md) statement before a print to deal with the text background in **QB64**:

* **1** _KEEPBACKGROUND: Text background transparent. Only the text is displayed over anything behind it.
* **2** _ONLYBACKGROUND: Text background is only displayed. Text is transparent to anything behind it.
* **3** _FILLBACKGROUND: Text and background block anything behind them. Default setting.
* Use the [_PRINTMODE (function)](_PRINTMODE (function).md) "PRINTMODE (function)") to find the current _PRINTMODE setting number.

* [WRITE](WRITE.md) can be used to print a list of comma separated data values to the screen with [commas](commas.md) between each value.
* Use [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) before PRINT statements to be used in a [console](console.md) window.
* Use [_CONTROLCHR](_CONTROLCHR.md) **OFF** to PRINT the unprintable lower [ASCII](ASCII.md) control characters in QB64.

  

*Example 1:* Using semicolons, comma tabs or concatenation to insert [ASCII](ASCII.md) characters and numbers in a PRINT:

``` PRINT CHR$(34); "Hello world!"; CHR$(34) ' adding quotation marks PRINT 123 'demonstrates the positive leading space a$ = "Hello country!": a = 321: b = -321 PRINT a$, a ' demonstrates comma in statement PRINT a$; a ' demonstrates semicolon in statement PRINT a$ + [STR$](STR$.md)(b) ' concatenation of string numerical values only ? "Hello city!" ' a ? changes to PRINT after moving cursor from the code line in IDE  
```

``` "Hello world!"  123 Hello country!      321 Hello country! 321 Hello country!-321 Hello city!  
```

First PRINT prints the text between two quotation marks, then it prints the value 123, notice that there are no quotation marks when printing the value, quotation marks mean that it will be treated like a literal string of text. a$ is set to "Hello country" and 'a' is set to the value 321, the dollar sign is used when a variable holds the text string. The contents of a$ is then printed and the "," means that the value of 'a' is printed separated by a tab and ";" means that there is no separation from the other text except for the leading positive value space.
  

*Example 2:* Changing colors in a line of text using semicolons with colon separators between PRINTs on the same code line.

``` [COLOR](COLOR.md) 12: PRINT "Start red "; : [COLOR](COLOR.md) 10: PRINT "and end green." [COLOR](COLOR.md) 11: PRINT "Start aqua "; [COLOR](COLOR.md) 14: PRINT "and end blue."  
```

``` Start red and end green. Start aqua and end blue.  
```

  

## See also

* [_PRINTMODE](_PRINTMODE.md), [_PRINTSTRING](_PRINTSTRING.md), [PRINT USING](PRINT USING.md)
* [SPC](SPC.md), [TAB](TAB.md), [SPACE$](SPACE$.md), [SCREEN](SCREEN.md)
* [CSRLIN](CSRLIN.md), [POS](POS.md), [SCREEN (function)](SCREEN (function).md) "SCREEN (function)")
* [COLOR](COLOR.md), [LOCATE](LOCATE.md), [VIEW PRINT](VIEW PRINT.md)
* [INPUT](INPUT.md), [STR$](STR$.md), [CHR$](CHR$.md)
* [ASCII](ASCII.md), [_CONTROLCHR](_CONTROLCHR.md)
* [Text Using Graphics](Text Using Graphics.md)

  
