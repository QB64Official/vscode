## DEFLNG
---

### The DEFLNG statement defines all variables with names starting with the specified letter (or letter range) AS LONG variables instead of the SINGLE type default.

#### SYNTAX

`DEFLNG letter [- range ], letter2 [- range2 ], [...]`

#### DESCRIPTION
* letter (or range ) can be from A-Z or any other range, like G-M .
* You can also use commas for specific undefined variable first letters.
* Variables DIMensioned as another variable type or that use type suffixes are not affected by [DEFLNG](./DEFLNG.md) .
* [DEFLNG](./DEFLNG.md) sets the type of all variable names with the starting letter(s) or letter ranges when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](./SUB.md) procedures).
* For [_UNSIGNED](./_UNSIGNED.md) [LONG](./LONG.md) , use [_DEFINE](./_DEFINE.md)
* Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.


#### EXAMPLES
```vb
DEFLNG A, F-H, M

'With the above, all variables with names starting with A, F, G, H and M
'will be of type LONG, unless they have a type suffix
'indicating another type or they are dimensioned differently
```
  


#### SEE ALSO
* [DEFSNG](./DEFSNG.md) , [DEFDBL](./DEFDBL.md) , [DEFINT](./DEFINT.md) , [DEFSTR](./DEFSTR.md)
* [_DEFINE](./_DEFINE.md)
