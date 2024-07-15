# STRING$

The STRING$ function returns a [STRING](STRING.md) consisting of a single character repeated a number of times.

  

## Syntax

result$ = STRING$(*count&*, {*character$* | *ASCIIcode%*} )
  

## Description

* *count&* is the number of times the character specified by *character* is repeated.
* Character is a literal string character, a string variable or an [ASCII](ASCII.md) code number.
* If *count&* is negative, an [illegal function call](illegal function call.md) error will occur. The count can be zero.
* If *character* is a [STRING](STRING.md) value and its length is zero, an [illegal function call](illegal function call.md) error will occur.
* If more than one string character value is used, the first character will be repeated.
* A [STRING](STRING.md) statement can be added to a string value with the + [concatenation](concatenation.md) operator.
* The function result can also be used to [GET](GET.md) and [PUT](PUT.md) a number of bytes as zero characters: bytes$ = STRING(numbytes, 0)

  

*Differences between QB64 and QB 4.5:*

* **QB64** can use [LONG](LONG.md) values for a count up to 2,147,483,647 while **QB 4.5** could only use [INTEGER](INTEGER.md) values up to 32,767.

  

## Examples

Printing 40 asterisks across the screen using an ASCII character code instead of [CHR$](CHR$.md)(42).

``` [PRINT](PRINT.md) STRING$(40, 42)  
```

``` ****************************************  
```

Using a [STRING](STRING.md) to specify the repeated character.

``` text$ = "B" + STRING$(40, "A") + "D" [PRINT](PRINT.md) text$  
```

``` BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD  
```

### More Examples

* [SaveImage SUB](SaveImage SUB.md)
* [SaveIcon32](SaveIcon32.md)

  

## See also

* [SPACE$](SPACE$.md)
* [ASC](ASC.md), [CHR$](CHR$.md)
* [ASCII](ASCII.md)

  
