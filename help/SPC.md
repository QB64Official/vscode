## SPC
---

### The SPC function is used in PRINT and LPRINT statements to print or output a number of space characters.

#### SYNTAX

`SPC( count% )`

#### PARAMETERS
* count designates the number of column spaces to move the cursor in a [PRINT](./PRINT.md) statement.


#### DESCRIPTION
* When used in a [PRINT](./PRINT.md) statement,
	* count% is the number of space characters to print, overwriting existing characters.
	* If count% is greater than the number of columns left in the current row, remaining space characters are printed on the next row.
* When used in a [PRINT](./PRINT.md) # statement,
	* count% is the number of space characters to output.
	* If count% is less than or equal to zero, the function has no effect.


#### EXAMPLES
##### Example: Using SPC to space a text print.
```vb
PRINT "123456789"
PRINT "abc" ; SPC(3) ; "123"
```
  
```vb
123456789
abc   123
```
  


#### SEE ALSO
* [PRINT](./PRINT.md) , [PRINT](./PRINT.md) #
* [LPRINT](./LPRINT.md) , [STRING](./STRING.md)$
* [TAB](./TAB.md) , SPACE$
