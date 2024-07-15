# _TRIM$

The _TRIM$ function removes both leading and trailing space characters from a [STRING](STRING.md) value.

  

## Syntax

*return$* = _TRIM$(*text$*)
  

## Description

* Shorthand to using [LTRIM$](LTRIM$.md)([RTRIM$](RTRIM$.md)("text"))
* *text$* is the [STRING](STRING.md) value to trim.
* If *text$* contains no leading or trailing space characters, it is returned unchanged.
* Convert fixed length [STRING](STRING.md) values by using a different *return$* variable.

  

## Examples

*Example: Demonstrating how _TRIM$(text$) can replace LTRIM$(RTRIM$(text$)):*

``` text$ = [SPACE$](SPACE$.md)(10) + "some text" + [SPACE$](SPACE$.md)(10) [PRINT](PRINT.md) "[" + text$ + "]" [PRINT](PRINT.md) "[" + [RTRIM$](" + [RTRIM$.md)(text$) + "]" [PRINT](PRINT.md) "[" + [LTRIM$](" + [LTRIM$.md)(text$) + "]" [PRINT](PRINT.md) "[" + [LTRIM$](" + [LTRIM$.md)([RTRIM$](RTRIM$.md)(text$)) + "]" [PRINT](PRINT.md) "[" + _TRIM$(text$) + "]"  
```

``` [          some text          ] [          some text] [some text          ] [some text] [some text]  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [RTRIM$](RTRIM$.md), [LTRIM$](LTRIM$.md)

  
