## INPUT
---

### The INPUT statement requests a STRING or numerical keyboard entry from the user.

#### SYNTAX

`INPUT [;] "[Question or statement text]"{,|;} variable [, ...]`

#### PARAMETERS
* A semicolon after the [INPUT](./INPUT.md) keyword keeps the entry on the same row after enter is pressed  and prevents the screen contents from rolling up.
* The optional prompt "Question or statement text" must be a literal predefined string . The prompt cannot use a variable.
* Quotation marks are required except when a semicolon follows [INPUT](./INPUT.md) . A question mark will appear before the cursor.
* A semicolon immediately after the text statement will display a question mark with a space after it. Use a comma for input statements.


#### DESCRIPTION
* QB64 does not return Redo from start errors like QBasic did, as user input is limited to the scope of the variable type used.
* Text entries (with a [STRING](./STRING.md) variable]] can receive any characters, including numerical. QB64 will ignore commas in single variable text entries.
* The type of the variable used to store user input determines the valid numerical range for value entries in QB64, with non-numerical characters limited to D, E, &H , &O or &B .
	* For example, if you use an [INTEGER](./INTEGER.md) variable, as in [INPUT](./INPUT.md) "Initial value: ", myValue% , the valid range is -32768 to 32767.
	* [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , and [_INTEGER64](./_INTEGER64.md) entries will ignore decimal points entered and will use all numbers.
* [INPUT](./INPUT.md) can be used to get more than one variable value from the user. Do so by separating input variables with commas in the code.
	* The program must inform the user that more than one variable is requested, in order to enter each value separated with a comma at runtime.
	* String and numerical variables can both be used in multiple entry requests separated by commas.
	* QB64 allows comma separated entries to be skipped by the user without generating an error.
* Use [LINE](./LINE.md) [INPUT](./INPUT.md) for text input entries that may contain commas such as address or name entries.
* The user must press enter for the [INPUT](./INPUT.md) procedure to end.
* [INPUT](./INPUT.md) accepts the scientific notation letters D or E in [SINGLE](./SINGLE.md) or [DOUBLE](./DOUBLE.md) numerical values.
* Numerical values starting with &H , &O and &B can also be entered.
* The statement halts a program until enter is pressed, which may not be desired in programs using mouse input (see INKEY$ loops).
* Use [_DEST](./_DEST.md) [_CONSOLE](./_CONSOLE.md) before [INPUT](./INPUT.md) statements to receive input from a console window.


#### EXAMPLES
##### Example 1: Using a variable in an input text message using PRINT. INPUT prompts cannot use variables.
```vb
INPUT "Enter your name: ", name$
PRINT name$ + " please enter your age: ";: INPUT "", age% 'empty string with comma
PRINT name$ + " how much do you weigh"; : INPUT weight%   'no text adds ?
```
  
##### Example 2: How QB64 avoids a Redo from start multiple entry error. Use commas between values.
```vb
DO
 INPUT "What is your name, age, and sex(M/F)"; name$, age%, sex$
LOOP UNTIL age%        'loop until age is not 0
IF age% >= 21 THEN PRINT "You can drink beer!" ELSE PRINT "You cannot drink beer yet!"
END
```
  
```vb
What is your name, age, and sex(M/F)? Tom,24,M
You can drink beer!
```
  
##### Example 3: Preventing screen roll after an input entry on the bottom 2 screen rows.
```vb
SCREEN 12

COLOR 14: LOCATE 29, 2 '          place cursor at beginning of prompt line
PRINT "Enter a name to search for... "; 'print prompt on screen with input to follow
COLOR 15: INPUT ; "", name$ '       get search name from user
LOCATE 29, 2: PRINT SPC(78); '       erase previous prompt
n$ = UCASE$(name$) '                 convert search name to upper case
COLOR 14'                        change foreground color to yellow
LOCATE 29, 2: PRINT "Searching..."; 'print message
SLEEP
```
  
```vb
Enter a name to search for... █
```
  


#### SEE ALSO
* [INPUT](./INPUT.md)$ , INKEY$
* [LINE](./LINE.md) [INPUT](./INPUT.md) , [LOCATE](./LOCATE.md)
* [INPUT](./INPUT.md) # , [LINE](./LINE.md) [INPUT](./INPUT.md) # (file input)
* [_KEYHIT](./_KEYHIT.md) , [_KEYDOWN](./_KEYDOWN.md)
* Scancodes
