# _DEFLATE$

The _DEFLATE$ function compresses a [string](string.md).

  

## Syntax

*result$* = _DEFLATE$(*stringToCompress$*)
  

## Description

* *result$* will contain the compressed version of *stringToCompress$*.
* To decompress the resulting string, use [_INFLATE$](_INFLATE$.md).

  

## Availability

* **Version 1.4 and up**.

  

## Examples

*Example 1:* Compressing a long string of text.

``` a$ = "The quick brown fox jumps over the lazy dog. " [PRINT](PRINT.md) "Original string (a$): "; a$ [FOR](FOR.md) i = 1 [TO](TO.md) 15     a$ = a$ + a$ [NEXT](NEXT.md)  [PRINT](PRINT.md) "After concatenating it into itself several times, LEN(a$) ="; [LEN](LEN.md)(a$)  b$ = _DEFLATE$(a$) [PRINT](PRINT.md) "After using _DEFLATE$ to compress it, LEN ="; [LEN](LEN.md)(b$) [PRINT USING](PRINT USING.md) "(compressed size is #.###% of the original)"; (([LEN](LEN.md)(b$) * 100) / [LEN](LEN.md)(a$)) c$ = [_INFLATE$](_INFLATE$.md)(b$) [PRINT](PRINT.md) "After using _INFLATE$ to decompress it, LEN ="; [LEN](LEN.md)(c$)  
```

``` Original string (a$): The quick brown fox jumps over the lazy dog After concatenating it into itself several times, LEN(a$) = 1474560 After using _DEFLATE$ to compress it, LEN = 4335 (compressed size is 0.295% of the original) After using _INFLATE$ to decompress it, LEN = 1474560  
```

  

## See also

* [_INFLATE$](_INFLATE$.md)

  
