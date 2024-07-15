# LTRIM$

The LTRIM$ function removes leading space characters from a [STRING](STRING.md) value.

  

## Syntax

*return$* = LTRIM$(*text$*)
  

## Description

* *text$* is the [STRING](STRING.md) value to trim.
* If *text$* contains no leading space characters, it is returned unchanged.
* Convert fixed length [STRING](STRING.md) values by using a different *return$* variable.
* Can be used to trim the leading space of a positive numerical value converted to a string value by [STR$](STR$.md).

  

## Examples

*Example 1:* Trimming a positive string number.

``` value = 12345 number$ = LTRIM$([STR$](STR$.md)(value)) 'converting number to string removes right PRINT space [PRINT](PRINT.md) "[" + number$ + "]"  
```

``` [12345]  
```

  

*Example 2:* Trimming leading spaces from text strings.

``` [PRINT](PRINT.md) LTRIM$("some text") [PRINT](PRINT.md) LTRIM$("   some text")  
```

``` some text some text  
```

  

*Example 3:* A TRIM$ function to trim spaces off of both ends of a string.

``` text$ = "        Text String           " trimmed$ = TRIM$(text$) [PRINT](PRINT.md) [CHR$](CHR$.md)(26) + trimmed$ + [CHR$](CHR$.md)(27) [FUNCTION](FUNCTION.md) TRIM$(text$) TRIM$ = LTRIM$([RTRIM$](RTRIM$.md)(text$)) [END FUNCTION](END FUNCTION.md)  
```

``` →Text String←  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_TRIM$](_TRIM$.md), [RTRIM$](RTRIM$.md), [STR$](STR$.md)
* [LEFT$](LEFT$.md), [RIGHT$](RIGHT$.md)
* [HEX$](HEX$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")

  
