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


## [PRINT USING](PRINT_USING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PRINT%20USING)
---
<blockquote>

### The PRINT USING statement is used to PRINT formatted data to the Screen using a STRING template.

</blockquote>

#### SYNTAX

<blockquote>

`PRINT [ text$ {;|,}] USING template$ ; variable [; ...][{;|,}]`

</blockquote>

#### PARAMETERS

<blockquote>


* Literal or variable [STRING](STRING.md) text$ can be placed between [PRINT](PRINT.md) and [USING](USING.md) or it can be included in the template .
* A semicolon or comma may follow the text to stop or tab the print cursor before the template [PRINT](PRINT.md) .
* The literal or variable [STRING](STRING.md) template should use the template symbols to display each variable type in the list following it.
* The list of data variables used in the template are separated by semicolons after the template string value.
* In QB64 ONE semicolon or comma may follow the variable list to stop the print cursor for pending prints. QB only allowed a semicolon.
</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 5: The formatting symbols used by the [L]PRINT USING[#] commands.
┌───────┬────────────────────────────────────────────────────────────────┐
│   &   │ Prints an entire string value. STRING length should be limited │
│       │ as template width will vary.                                   │
├───────┼────────────────────────────────────────────────────────────────┤
│ \   \ │ Denotes the start and end point of a fixed string area with    │
│       │ spaces between(LEN = spaces + 2).                              │
├───────┼────────────────────────────────────────────────────────────────┤
│   !   │ Prints only the leading character of a string value.           │
├───────┼────────────────────────────────────────────────────────────────┤
│   #   │ Denotes a numerical digit. An appropriate number of digits     │
│       │ should be used for values received.                            │
├───────┼────────────────────────────────────────────────────────────────┤
│ ^^^^  │ After # digits prints numerical value in exponential E+xx      │
│       │ format. Use ^^^^^ for E+xxx values. (1)                        │
├───────┼────────────────────────────────────────────────────────────────┤
│   .   │ Period sets a number's decimal point position. Digits following│
│       │ determine rounded value accuracy.                              │
├───────┼────────────────────────────────────────────────────────────────┤
│  ,.   │ Comma to left of decimal point, prints a comma every 3 used #  │
│       │ digit places left of the decimal point.                        │
├───────┼────────────────────────────────────────────────────────────────┤
│   +   │ Plus sign denotes the position of the number's sign. + or -    │
│       │ will be displayed.                                             │
├───────┼────────────────────────────────────────────────────────────────┤
│   -   │ Minus sign (dash) placed after the number, displays only a     │
│       │ negative value's sign.                                         │
├───────┼────────────────────────────────────────────────────────────────┤
│  $$   │ Prints a dollar sign immediately before the highest non-zero # │
│       │ digit position of the numerical value.                         │
├───────┼────────────────────────────────────────────────────────────────┤
│  **   │ Prints an asterisk in any leading empty spaces of a numerical  │
│       │ value. Adds 2 extra digit positions.                           │
├───────┼────────────────────────────────────────────────────────────────┤
│  **$  │ Combines ** and $$. Negative values will display minus sign to │
│       │ left of $.                                                     │
├───────┼────────────────────────────────────────────────────────────────┤
│   _   │ Underscore preceding a format symbol prints those symbols as   │
│       │ literal string characters.                                     │
└───────┴────────────────────────────────────────────────────────────────┘
Note: Any string character not listed above will be printed as a
literal text character.

(1) Any # decimal point position may be specified. The exponent is
adjusted with significant digits left-justified.
```
  
<br>



##### Example 1: Printing formatted data using a predefined string template variable.
```vb
first$ = "Bobby": last$ = "Smith"
boxes% = 1510: sales! = 4530
tmp$ = "Salesperson: & &  #####,.   $$#####,.##"

PRINT USING tmp$; first$; last$; boxes%; sales!
```
  
<br>


<div class="explanation">Explanation: Note how 5 carets in the bottom format expands the number of exponent digits to accommodate larger exponent values.</div>

```vb
Salesperson: Bobby Smith  1,510  $4,530.00
```
  
<br>



##### Example 2: How to display formatting symbols as normal text using underscores in a PRINT USING template.
```vb
errcode = 35
PRINT USING "Error ## occurred!!"; errcode
'now there are the !! at the end of the printed string
PRINT USING "Error ## occurred_!_!"; errcode
END
```
  
<br>

```vb
Error 35 occurred
Error 35 occurred!!
```
  
<br>



##### Example 3: Exponential notation is designated after the leading digits are formatted. Digit places determine rounded value displayed.
```vb
PRINT USING "##.##^^^^"; 234.56
PRINT USING ".####^^^^-"; -777777
PRINT USING "+.##^^^^"; 123
PRINT USING "+.##^^^^^"; 123
```
  
<br>

```vb
2.35E+02
.7778E+06-
+.12E+03
+.12E+003
```
  
<br>



##### Example 4: USING does not necessarily have to immediately follow PRINT, but it must follow it in the code line.
```vb
money = 12345.45
tmp$ = "$$#######,.##"

PRINT "I have this much money!"; USING tmp$; money
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) , [PRINT](PRINT.md) #, [USING](USING.md)
* [LPRINT](LPRINT.md) , [LPRINT](LPRINT.md) [USING](USING.md)
</blockquote>
