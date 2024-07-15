# INPUT

The INPUT statement requests a [STRING](STRING.md) or numerical keyboard entry from the user.

  

## Syntax

INPUT [;] "[Question or statement text]"{,|;} *variable*[, ...]
INPUT ; *variable*[, ...]
  

## Parameters

* A [semicolon](semicolon.md) after the INPUT keyword keeps the entry on the same row after enter is pressed and prevents the screen contents from rolling up.
* The optional prompt "Question or statement text" must be a literal predefined [string](string.md). **The prompt cannot use a variable.**
* [Quotation marks](Quotation marks.md) are required except when a semicolon follows INPUT. A question mark will appear before the cursor.
* A [semicolon](semicolon.md) immediately after the text statement will display a question mark with a space after it. Use a [comma](comma.md) for input statements.

  

## Description

* **QB64** does not return *Redo from start* errors like QBasic did, as user input is limited to the scope of the variable [type](type.md) used.
* Text entries (with a [STRING](STRING.md) variable can receive any characters, including numerical. **QB64 will ignore commas in single variable text entries.**
* The [type](type.md) of the *variable* used to store user input determines the valid numerical range for value entries in QB64, with non-numerical characters limited to D, E, [&H](&H.md), [&O](&O.md) or [&B](&B.md).
	+ For example, if you use an [INTEGER](INTEGER.md) variable, as in INPUT "Initial value: ", myValue%, the valid range is -32768 to 32767.
	+ [INTEGER](INTEGER.md), [LONG](LONG.md), and [_INTEGER64](_INTEGER64.md) entries will ignore decimal points entered and will use all numbers.
* INPUT can be used to get more than one *variable* value from the user. Do so by separating input variables with commas in the code.
	+ The program must inform the user that more than one variable is requested, in order to enter each value separated with a comma at runtime.
	+ [String](String.md) and numerical variables can both be used in multiple entry requests separated by commas.
	+ **QB64** allows comma separated entries to be skipped by the user without generating an error.
* **Use [LINE INPUT](LINE INPUT.md) for text input entries that may contain commas such as address or name entries.**
* The user must press enter for the INPUT procedure to end.
* INPUT accepts the [scientific notation](scientific notation.md) letters D or E in [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) numerical values.
* Numerical values starting with [&H](&H.md), [&O](&O.md) and [&B](&B.md) can also be entered.
* The statement halts a program until enter is pressed, which may not be desired in programs using mouse input (see [INKEY$](INKEY$.md) loops).
* Use [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) before INPUT statements to receive input from a [console](console.md) window.

  

## Examples

*Example 1:* Using a variable in an input text message using PRINT. INPUT prompts cannot use variables.

``` INPUT "Enter your name: ", name$ [PRINT](PRINT.md) name$ + " please enter your age: ";: INPUT "", age% 'empty string with comma [PRINT](PRINT.md) name$ + " how much do you weigh"; : INPUT weight%   'no text adds ?  
```

*Explanation:* Use an empty string with a comma to eliminate the question mark that would appear without the string.
  

*Example 2:* How QB64 avoids a *Redo from start* multiple entry error. Use commas between values.

``` [DO](DO.md)   INPUT "What is your name, age, and sex(M/F)"; name$, age%, sex$ [LOOP](LOOP.md) [UNTIL](UNTIL.md) age%        'loop until age is not 0 [IF](IF.md) age% >= 21 [THEN](THEN.md) [PRINT](PRINT.md) "You can drink beer!" [ELSE](ELSE.md) [PRINT](PRINT.md) "You cannot drink beer yet!" [END](END.md)  
```

``` What is your name, age, and sex(M/F)? Tom,24,M You can drink beer!  
```

*Explanation:* Try to enter text for the age value and it will not work. E or D should be allowed as decimal point numerical entries.
  

*Example 3:* Preventing screen roll after an input entry on the bottom 2 screen rows.

``` [SCREEN](SCREEN.md) 12  [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 29, 2 '          place cursor at beginning of prompt line [PRINT](PRINT.md) "Enter a name to search for... "; 'print prompt on screen with input to follow [COLOR](COLOR.md) 15: INPUT ; "", name$ '       get search name from user [LOCATE](LOCATE.md) 29, 2: [PRINT](PRINT.md) [SPC](SPC.md)(78); '       erase previous prompt n$ = [UCASE$](UCASE$.md)(name$) '                 convert search name to upper case [COLOR](COLOR.md) 14'                        change foreground color to yellow [LOCATE](LOCATE.md) 29, 2: [PRINT](PRINT.md) "Searching..."; 'print message [SLEEP](SLEEP.md)  
```

``` Enter a name to search for... █  
```

*Explanation:* The red [semicolon](semicolon.md) after INPUT acts like a semicolon after a [PRINT](PRINT.md), which keeps the print cursor on the same row.
  

## See also

* [INPUT$](INPUT$.md), [INKEY$](INKEY$.md)
* [LINE INPUT](LINE INPUT.md), [LOCATE](LOCATE.md)
* [INPUT #](INPUT #.md) "INPUT (file statement)"), [LINE INPUT #](LINE INPUT #.md) "LINE INPUT (file statement)") (file input)
* [_KEYHIT](_KEYHIT.md), [_KEYDOWN](_KEYDOWN.md)
* [Scancodes](Scancodes.md)

  
