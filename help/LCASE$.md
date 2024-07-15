# LCASE$

The LCASE$ function outputs an all-lowercase version of a [STRING](STRING.md).

  

## Syntax

*result$* = LCASE$(*text$*)
  

## Description

* Normally used to guarantee that user input is not capitalized.
* Does not affect non-alphabetical characters.

  

## Examples

*Example:* The following code guarantees that all user letter entries will be lower case:

``` [PRINT](PRINT.md) "Do you want to continue? (y/n)"  [DO](DO.md)     K$ = LCASE$([INKEY$](INKEY$.md)) [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = "y" [OR](OR.md) K$ = "n"  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [UCASE$](UCASE$.md) (upper case)
* [INKEY$](INKEY$.md)
* [INPUT$](INPUT$.md)

  
