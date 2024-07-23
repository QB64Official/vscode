<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [INPUT](INPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INPUT)
---
<blockquote>

### The INPUT statement requests a STRING or numerical keyboard entry from the user.

</blockquote>

#### SYNTAX

<blockquote>

`INPUT [;] "[Question or statement text]"{,|;} variable [, ...]`

</blockquote>

#### PARAMETERS

<blockquote>


* A semicolon after the [INPUT](INPUT.md) keyword keeps the entry on the same row after enter is pressed  and prevents the screen contents from rolling up.
* The optional prompt "Question or statement text" must be a literal predefined string . The prompt cannot use a variable.
* Quotation marks are required except when a semicolon follows [INPUT](INPUT.md) . A question mark will appear before the cursor.
* A semicolon immediately after the text statement will display a question mark with a space after it. Use a comma for input statements.
</blockquote>

#### DESCRIPTION

<blockquote>


* QB64 does not return Redo from start errors like QBasic did, as user input is limited to the scope of the variable type used.
* Text entries (with a [STRING](STRING.md) variable]] can receive any characters, including numerical. QB64 will ignore commas in single variable text entries.
* The type of the variable used to store user input determines the valid numerical range for value entries in QB64, with non-numerical characters limited to D, E, &H , &O or &B .
* For example, if you use an [INTEGER](INTEGER.md) variable, as in [INPUT](INPUT.md) "Initial value: ", myValue% , the valid range is -32768 to 32767.
* [INTEGER](INTEGER.md) , [LONG](LONG.md) , and [_INTEGER64](INTEGER64.md) entries will ignore decimal points entered and will use all numbers.
* [INPUT](INPUT.md) can be used to get more than one variable value from the user. Do so by separating input variables with commas in the code.
* The program must inform the user that more than one variable is requested, in order to enter each value separated with a comma at runtime.
* String and numerical variables can both be used in multiple entry requests separated by commas.
* QB64 allows comma separated entries to be skipped by the user without generating an error.
* Use [LINE](LINE.md) [INPUT](INPUT.md) for text input entries that may contain commas such as address or name entries.
* The user must press enter for the [INPUT](INPUT.md) procedure to end.
* [INPUT](INPUT.md) accepts the scientific notation letters D or E in [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) numerical values.
* Numerical values starting with &H , &O and &B can also be entered.
* The statement halts a program until enter is pressed, which may not be desired in programs using mouse input (see [INKEY&dollar;](INKEY&dollar;.md) loops).
* Use [_DEST](DEST.md) [_CONSOLE](CONSOLE.md) before [INPUT](INPUT.md) statements to receive input from a console window.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using a variable in an input text message using PRINT. INPUT prompts cannot use variables.
```vb
INPUT "Enter your name: ", name$
PRINT name$ + " please enter your age: ";: INPUT "", age% 'empty string with comma
PRINT name$ + " how much do you weigh"; : INPUT weight%   'no text adds ?
```
  
<br>



##### Example 2: How QB64 avoids a Redo from start multiple entry error. Use commas between values.
```vb
DO
INPUT "What is your name, age, and sex(M/F)"; name$, age%, sex$
LOOP UNTIL age%        'loop until age is not 0
IF age% >= 21 THEN PRINT "You can drink beer!" ELSE PRINT "You cannot drink beer yet!"
END
```
  
<br>


<div class="explanation">Explanation: The red semicolon after INPUT acts like a semicolon after a PRINT , which keeps the print cursor on the same row.</div>

```vb
What is your name, age, and sex(M/F)? Tom,24,M
You can drink beer!
```
  
<br>



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
  
<br>

```vb
Enter a name to search for... █
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [INPUT&dollar;](INPUT&dollar;.md) , [INKEY&dollar;](INKEY&dollar;.md)
* [LINE](LINE.md) [INPUT](INPUT.md) , [LOCATE](LOCATE.md)
* [INPUT](INPUT.md) # , [LINE](LINE.md) [INPUT](INPUT.md) # (file input)
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* Scancodes
</blockquote>
