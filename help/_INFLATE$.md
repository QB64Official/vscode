# _INFLATE$

The _INFLATE$ function decompresses a [string](string.md) compressed by the [_DEFLATE$](_DEFLATE$.md) function.

  

## Syntax

*result$* = _INFLATE$(*stringToDecompress$[, originalSize&]*)
  

## Description

* *result$* will contain the original version of *stringToDecompress$*.
* Optional parameter *originalSize&* can be used if the original size of the uncompressed data is known beforehand, which makes the decompression routine run more efficiently.
	+ If unspecified, decompression still works as expected, but may use more steps and need to allocate more memory internally.

  

## Availability

* **Version 1.4 and up**.

  

## Examples

*Example 1:* Compressing a long string of text.

``` a$ = "The quick brown fox jumps over the lazy dog. " [PRINT](PRINT.md) "Original string (a$): "; a$ [FOR](FOR.md) i = 1 [TO](TO.md) 15     a$ = a$ + a$ [NEXT](NEXT.md)  [PRINT](PRINT.md) "After concatenating it into itself several times, LEN(a$) ="; [LEN](LEN.md)(a$)  b$ = [_DEFLATE$](_DEFLATE$.md)(a$) [PRINT](PRINT.md) "After using _DEFLATE$ to compress it, LEN ="; [LEN](LEN.md)(b$) [PRINT USING](PRINT USING.md) "(compressed size is #.###% of the original)"; (([LEN](LEN.md)(b$) * 100) / [LEN](LEN.md)(a$)) c$ = _INFLATE$(b$) PRINT "After using _INFLATE$ to decompress it, LEN ="; [LEN](LEN.md)(c$)   
```

``` Original string (a$): The quick brown fox jumps over the lazy dog After concatenating it into itself several times, LEN(a$) = 1474560 After using _DEFLATE$ to compress it, LEN = 4335 (compressed size is 0.295% of the original) After using _INFLATE$ to decompress it, LEN = 1474560  
```

  

## See also

* [_DEFLATE$](_DEFLATE$.md)

  
