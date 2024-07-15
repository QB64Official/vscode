# UCASE$

The UCASE$ function outputs an all-uppercase version of a [STRING](STRING.md).

  

## Syntax

*result$* = UCASE$(*text$*)
  

## Description

* Used to guarantee that all alphabetical characters in a [STRING](STRING.md) are capitalized.
* Does not affect non-alphabetical characters.

  

## Examples

*Example:* The following code guarantees that all letter key entries are capitalized:

``` [PRINT](PRINT.md) "Do you want to continue? (y/n)"  [DO](DO.md)     K$ = UCASE$([INKEY$](INKEY$.md)) [LOOP](LOOP.md) [UNTIL](UNTIL.md) K$ = "Y" [OR](OR.md) K$ = "N"  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [LCASE$](LCASE$.md)
* [INKEY$](INKEY$.md)
* [INPUT$](INPUT$.md)

  
