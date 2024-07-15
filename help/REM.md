# REM

**REM** or an apostrophe is used for programmer remarks, comments or to stop the execution of program code.

  

## Syntax

REM program comment or ignore code
  

## Description

* Comments cannot be read by QBasic correctly and may cause syntax and other errors without REM!
* Instead of REM you can use the ' symbol which can be put anywhere.
* Code can also be commented out for program testing purposes.
* QBasic Metacommands such as [$DYNAMIC]($DYNAMIC.md) and [$INCLUDE]($INCLUDE.md) require the use of REM or the apostrophe.

  

*Example:* Avoiding an END IF error.

``` REM This is a remark... ' This is also a remark... [IF](IF.md) a = 0 [THEN](THEN.md) REM (REM follows syntax rules) [IF](IF.md) a = 0 [THEN](THEN.md) '(apostrophe doesn't follow syntax rules, so use END IF after this) [END IF](END IF.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [Apostrophe](Apostrophe.md)
* [$DYNAMIC]($DYNAMIC.md), [$STATIC]($STATIC.md), [$INCLUDE]($INCLUDE.md)

  
