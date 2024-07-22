## PRINT USING
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

* Literal or variable [STRING](./STRING.md) text$ can be placed between [PRINT](./PRINT.md) and [USING](./USING.md) or it can be included in the template .
* A semicolon or comma may follow the text to stop or tab the print cursor before the template [PRINT](./PRINT.md) .
* The literal or variable [STRING](./STRING.md) template should use the template symbols to display each variable type in the list following it.
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
  


##### Example 1: Printing formatted data using a predefined string template variable.
```vb
first$ = "Bobby": last$ = "Smith"
boxes% = 1510: sales! = 4530
tmp$ = "Salesperson: & &  #####,.   $$#####,.##"

PRINT USING tmp$; first$; last$; boxes%; sales!
```
  


##### Example 1: Printing formatted data using a predefined string template variable.
```vb
Salesperson: Bobby Smith  1,510  $4,530.00
```
  


##### Example 2: How to display formatting symbols as normal text using underscores in a PRINT USING template.
```vb
errcode = 35
PRINT USING "Error ## occurred!!"; errcode
'now there are the !! at the end of the printed string
PRINT USING "Error ## occurred_!_!"; errcode
END
```
  


##### Example 2: How to display formatting symbols as normal text using underscores in a PRINT USING template.
```vb
Error 35 occurred
Error 35 occurred!!
```
  


##### Example 3: Exponential notation is designated after the leading digits are formatted. Digit places determine rounded value displayed.
```vb
PRINT USING "##.##^^^^"; 234.56
PRINT USING ".####^^^^-"; -777777
PRINT USING "+.##^^^^"; 123
PRINT USING "+.##^^^^^"; 123
```
  


##### Example 3: Exponential notation is designated after the leading digits are formatted. Digit places determine rounded value displayed.
```vb
2.35E+02
.7778E+06-
+.12E+03
+.12E+003
```
  


##### Example 4: USING does not necessarily have to immediately follow PRINT, but it must follow it in the code line.
```vb
money = 12345.45
tmp$ = "$$#######,.##"

PRINT "I have this much money!"; USING tmp$; money
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [PRINT](./PRINT.md) , [PRINT](./PRINT.md) #, [USING](./USING.md)
* [LPRINT](./LPRINT.md) , [LPRINT](./LPRINT.md) [USING](./USING.md)

</blockquote>
