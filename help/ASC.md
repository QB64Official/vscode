## ASC
---

### The ASC statement allows a program to change a character at any position of a STRING variable.

#### SYNTAX

`ASC ( stringExpression$ [, position% ]) = code%`

#### DESCRIPTION
* Note: The statement variant of [ASC](./ASC.md) is not available in QBasic/QuickBASIC, but in QB64 only .
* The stringExpression$ variable's value must have been previously defined and cannot be an empty string ("").
* position% is optional. If no position is used, the leftmost character at position 1 is assumed.
* position% cannot be zero or greater than the string's length or an Illegal function call error will occur.
* The ASCII replacement code% value can be any [INTEGER](./INTEGER.md) value from 0 to 255.


#### EXAMPLES
```vb
a$ = "YZC"
ASC(a$) = 65                 ' CHR$(65) = "A"
ASC(a$, 2) = 66              ' CHR$(66) = "B"
PRINT a$

ASC(a$, 2) = 32              ' CHR$(32) = " "
PRINT a$

ASC(a$, 2) = ASC("S")        ' get code value from ASC function
PRINT a$
```
  
```vb
ABC
A C
ASC
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [ASC](./ASC.md) (function)
* MID$ , MID$ (function)
* INKEY$ , ASCII
