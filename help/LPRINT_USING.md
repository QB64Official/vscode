## LPRINT USING
---
<blockquote>

### The LPRINT USING statement sends formatted data to LPT1, the parallel port printer.

</blockquote>

#### SYNTAX

<blockquote>

`LPRINT [ text$ {;|,}] USING template$ ; variable [; ...][{;|,}]`

</blockquote>

#### PARAMETERS

<blockquote>

* Literal or variable [STRING](./STRING.md) text$ can be placed between [LPRINT](./LPRINT.md) and [USING](./USING.md) or it can be included in the template$ .
* A semicolon or comma may follow the text$ to stop or tab the print cursor before the template$ [LPRINT](./LPRINT.md) .
* The literal or variable [STRING](./STRING.md) template$ should use the template symbols to display each variable type in the list following it.
* The list of data variables used in the template$ are separated by semicolons after the template string value.
* A semicolon or comma may follow the variable list to stop or tab the print cursor for pending prints.

</blockquote>

#### DESCRIPTION

<blockquote>

* The variable list should be listed in the order that they are used in the template from left to right.
* If the template string is omitted or symbols don't match the variable(s) an "Illegal Function Call" [ERROR](./ERROR.md) will occur.
* No more than 25 # digit places are allowed in a template number or an error will occur.
* Can convert numerical exponential or scientific notation values to normal decimal point values using less digits.
* NOTE: If the numerical value exceeds the template's digit range a % symbol will appear in the leftmost digit area.


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
  

</blockquote>

#### SEE ALSO

<blockquote>

* [PRINT](./PRINT.md) [USING](./USING.md)
* [LPRINT](./LPRINT.md)
* [PRINT](./PRINT.md)

</blockquote>
