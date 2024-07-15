# LSET

LSET left-justifies a fixed length string expression based on the size of the [STRING](STRING.md) variable and string expression.

  

## Syntax

LSET {stringVariable = stringExpression | stringExpression1 = stringExpression2}
  

## Description

* If the string expression is longer than a fixed length string variable the value is truncated from the right side in LSET or [RSET](RSET.md).
* If the LSET string expression is smaller, spaces will occupy the extra positions to the right in the string.
* LSET can be used with a [FIELD](FIELD.md) or [TYPE](TYPE.md) definition to set the buffer position before a [PUT](PUT.md).

  

## Examples

*Example 1:* Using LSET with a [FIELD](FIELD.md) definition. Note: May create an empty (unchanged) file that can be deleted.

``` [OPEN](OPEN.md) "testfile.dat" FOR [RANDOM](RANDOM.md) AS #1 [LEN](LEN.md) = 15 [FIELD](FIELD.md) 1, 6 [AS](AS.md) a$, 9 [AS](AS.md) other$ [FIELD](FIELD.md) 1, 2 [AS](AS.md) b$, 13 [AS](AS.md) another$ LSET a$ = "1234567890" LSET other$ = "1234567890" [PRINT](PRINT.md) a$, b$, other$, another$ [CLOSE](CLOSE.md) #1   
```

``` 123456            12         123456789     3456123456789  
```

  

*Example 2:* How LSET can define two different string length values in one statement.

```   [TYPE](TYPE.md) ninestring head [AS](AS.md) [STRING](STRING.md) * 9 [END TYPE](END TYPE.md)  [TYPE](TYPE.md) fivestring head AS [STRING](STRING.md) * 5 [END TYPE](END TYPE.md)  [DIM](DIM.md) me [AS](AS.md) ninestring, you [AS](AS.md) fivestring me.head = "ACHES NOT" [CLS](CLS.md)  LSET you.head = me.head [PRINT](PRINT.md) "me.head: "; me.head [PRINT](PRINT.md) "you.head: "; you.head  
```

``` me.head: ACHES NOT you.head: ACHES  
```

  

## See also

* [RSET](RSET.md), [RTRIM$](RTRIM$.md)
* [FIELD](FIELD.md), [TYPE](TYPE.md)

  
