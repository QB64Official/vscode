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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
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

*  A semicolon after the [INPUT](INPUT.md)  keyword keeps the entry on the same row after enter is pressed  and prevents the screen contents from rolling up.
*  The optional prompt "Question or statement text" must be a literal predefined string . The prompt cannot use a variable.
*  Quotation marks are required except when a semicolon follows [INPUT](INPUT.md)  . A question mark will appear before the cursor.
*  A semicolon immediately after the text statement will display a question mark with a space after it. Use a comma for input statements.

</blockquote>

#### DESCRIPTION

<blockquote>

*  QB64 does not return Redo from start errors like QBasic did, as user input is limited to the scope of the variable type used.
*  Text entries (with a [STRING](STRING.md)  variable]] can receive any characters, including numerical. QB64 will ignore commas in single variable text entries.
*  The type of the variable used to store user input determines the valid numerical range for value entries in QB64, with non-numerical characters limited to D, E, &H , &O or &B .
	* For example, if you use an [INTEGER](INTEGER.md)  variable, as in [INPUT](INPUT.md)  "Initial value: ", myValue% , the valid range is -32768 to 32767.
	* [INTEGER](INTEGER.md)  , [LONG](LONG.md)  , and [_INTEGER64](INTEGER64.md)  entries will ignore decimal points entered and will use all numbers.
*  [INPUT](INPUT.md)  can be used to get more than one variable value from the user. Do so by separating [INPUT](INPUT.md)  variables with commas in the code.
	* The program must inform the user that more than one variable is requested, in order to enter each value separated with a comma at runtime.
	* String and numerical variables can both be used in multiple entry requests separated by commas.
	* QB64 allows comma separated entries to be skipped by the user without generating an error.
*  Use [LINE](LINE.md)  [INPUT](INPUT.md)  for text [INPUT](INPUT.md)  entries that may contain commas such as address or name entries.
*  The user must press enter for the [INPUT](INPUT.md)  procedure to end.
*  [INPUT](INPUT.md)  accepts the scientific notation letters D or E in [SINGLE](SINGLE.md)  or [DOUBLE](DOUBLE.md)  numerical values.
*  Numerical values starting with &H , &O and &B can also be entered.
*  The statement halts a program until enter is pressed, which may not be desired in programs using mouse input (see INKEY$ loops).
*  Use [_DEST](DEST.md)  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md)  before [INPUT](INPUT.md)  statements to receive [INPUT](INPUT.md)  from a [CONSOLE](CONSOLE.md)  window.


</blockquote>

#### SEE ALSO

<blockquote>

*  INPUT$ , [INKEY\$](INKEY\$.md) 
*  [LINE](LINE.md)  [INPUT](INPUT.md)  , [LOCATE](LOCATE.md) 
*  [INPUT](INPUT.md)  # , [LINE](LINE.md)  [INPUT](INPUT.md)  # (file [INPUT](INPUT.md) )
*  [_KEYHIT](KEYHIT.md)  , [_KEYDOWN](KEYDOWN.md) 
*  Scancodes

</blockquote>
