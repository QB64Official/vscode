# INTEGER

INTEGER is a 2-byte number type definition that can hold whole numerical values.

  

## Syntax

[DIM](DIM.md) *variable* AS INTEGER
  

* Integers do not use decimal point values but will round those off to the nearest even whole number.
* QBasic integer values can range from -32768 to 32767 without an "overflow" error.
* For larger integer values use the [LONG](LONG.md) integer type.
* **QB64** INTEGER values greater than 32767 become negative signed values instead of throwing an "overflow" error, as the top bit designates a negative value. See example 1 below.
* **QB64** [_UNSIGNED](_UNSIGNED.md) integers can range from 0 to 65535.
* **QB64** _UNSIGNED [_INTEGER64](_INTEGER64.md) values range from 0 to 18446744073709551615
* Many graphic programs require INTEGER arrays.
* Variable type suffix is % or ~% for [_UNSIGNED](_UNSIGNED.md). Suffix can also be placed after a literal or hexadecimal numerical value.
* [LONG](LONG.md) integers use the **&** suffix and [_INTEGER64](_INTEGER64.md) use the **&&** suffix.
* Values can be converted to 2 byte [ASCII](ASCII.md) string values using [MKI$](MKI$.md) and back with [CVI](CVI.md).
* **When a variable has not been defined or has no type suffix, the value defaults to [SINGLE](SINGLE.md).**
* **Warning: QBasic keyword names cannot be used as numerical variable names with or without the type suffix.**

  

## Examples

*Example 1:* QBasic signed integers were limited from -32768 to 32767, but could not exceed 32767 or it would error:

``` [DO](DO.md): [_LIMIT](_LIMIT.md) 2000   i% = i% + 1   [PRINT](PRINT.md) i% [LOOP](LOOP.md) [UNTIL](UNTIL.md) i% = 0  
```

*Explanation:* In **QB64** the count will go to 32767, then count up from -32768 to 0 before repeating the process without error.
  

*Example 2:* When a signed **QB64** INTEGER value exceeds 32767, the value may become a negative value:

``` i% = 38000 [PRINT](PRINT.md) i%  
```

``` -27536  
```

*Explanation:* Use an [_UNSIGNED](_UNSIGNED.md) INTEGER or a ~% variable type suffix for only positive integer values up to 65535.
  

*Example 3:* In **QB64** [_UNSIGNED](_UNSIGNED.md) INTEGER values greater than 65535 cycle over again from zero:

``` i~% = 70000 [PRINT](PRINT.md) i~%  
```

```  4464  
```

*Explanation:* In QB64 an unsigned integer value of 65536 would be 0 with values increasing by the value minus 65536.
  

## See also

* [DIM](DIM.md), [DEFINT](DEFINT.md)
* [LONG](LONG.md), [_INTEGER64](_INTEGER64.md)
* [LEN](LEN.md), [MKI$](MKI$.md), [CVI](CVI.md)
* [_DEFINE](_DEFINE.md), [_UNSIGNED](_UNSIGNED.md)
* [Variable Types](Variable Types.md)
* [&B](&B.md) (binary), [&O](&O.md) (octal), [&H](&H.md) (hexadecimal)
* [Integer Division](Integer Division.md), [MOD](MOD.md) (Integer remainder division)

  
