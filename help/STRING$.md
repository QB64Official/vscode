## STRING$
---

### The STRING$ function returns a STRING consisting of a single character repeated a number of times.

#### SYNTAX

`result$ = STRING$( count& , { character$ | ASCIIcode% } )`

#### DESCRIPTION
* count& is the number of times the character specified by character is repeated.
* Character is a literal string character, a string variable or an ASCII code number.
* If count& is negative, an illegal function call error will occur. The count can be zero.
* If character is a [STRING](./STRING.md) value and its length is zero, an illegal function call error will occur.
* If more than one string character value is used, the first character will be repeated.
* A [STRING](./STRING.md) statement can be added to a string value with the + concatenation operator.
* The function result can also be used to [GET](./GET.md) and [PUT](./PUT.md) a number of bytes as zero characters: bytes$ = [STRING](./STRING.md)(numbytes, 0)


#### EXAMPLES
```vb
PRINT STRING$(40, 42)
```
  
```vb
****************************************
```
  
```vb
text$ = "B" + STRING$(40, "A") + "D"
PRINT text$
```
  
```vb
BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD
```
  


#### SEE ALSO
* SPACE$
* [ASC](./ASC.md) , CHR$
* ASCII
