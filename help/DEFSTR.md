## DEFSTR
---

### The DEFSTR statement defines all variables with names starting with the specified letter (or letter range) AS STRING variables instead of the SINGLE type default.

#### SYNTAX

`DEFSTR letter [- range ], letter2 [- range2 ], [...]`

#### DESCRIPTION
* letter (or range ) can be from A-Z or any other range, like G-M .
* You can also use commas for specific undefined variable first letters.
* Variables DIMensioned as another variable type or that use type suffixes are not affected by [DEFSTR](./DEFSTR.md) .
* [DEFSTR](./DEFSTR.md) sets the type of all variable names with the starting letter(s) or letter ranges when encountered in the progression of the program (even in conditional statement blocks not executed and subsequent [SUB](./SUB.md) procedures).
* Warning: QBasic keyword names can only be used as string variable names when they are followed by the string type suffix ($).


#### EXAMPLES
```vb
DEFSTR A, F-H, M

'With the above, all variables with names starting with A, F, G, H and M
'will be of type STRING, unless they have a type suffix
'indicating another type or they are dimensioned differently
```
  


#### SEE ALSO
* [DEFSNG](./DEFSNG.md) , [DEFLNG](./DEFLNG.md) , [DEFINT](./DEFINT.md) , [DEFDBL](./DEFDBL.md)
* [_DEFINE](./_DEFINE.md)
