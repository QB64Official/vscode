# RTRIM$

The RTRIM$ function removes trailing space characters from a [STRING](STRING.md) value.

  

## Syntax

*return$* = RTRIM$(*value$*)
  

## Description

* *value$* is the [STRING](STRING.md) value to trim.
* If *value$* contains no trailing space characters, *value$* is returned unchanged.
* Convert fixed length [STRING](STRING.md) values by using a different *return$* variable.

  

## Examples

Trimming a fixed length string value for use by another string variable:

``` name$ = RTRIM$(contact.name) ' trims spaces from end of fixed length [TYPE](TYPE.md) value.  
```

Trimming text string ends:

``` [PRINT](PRINT.md) RTRIM$("some text") + "." [PRINT](PRINT.md) RTRIM$("some text   ") + "." [PRINT](PRINT.md) RTRIM$("Tommy    ")  
```

``` some text. some text. Tommy  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_TRIM$](_TRIM$.md), [LTRIM$](LTRIM$.md), [STR$](STR$.md)
* [LSET](LSET.md), [RSET](RSET.md)

  
