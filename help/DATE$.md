# DATE$

The DATE$ function returns the current computer date as a string in the format "mm-dd-yyyy".

  

## Syntax

*today$* = DATE$
  

## Description

* Returns the current computer date in the format "mm-dd-yyyy" (e.g., "12-25-2009").

  

## Examples

*Example:* Displaying the weekday and current date.

``` [PRINT](PRINT.md) DATE$ month$ = [LEFT$](LEFT$.md)(DATE$, 2): M = [VAL](VAL.md)(month$) day$ = [MID$](MID$.md) "MID$ (function)")(DATE$, 4, 2): D = [VAL](VAL.md)(day$) day$ = [STR$](STR$.md)(D)                  ' eliminate any leading zeros year$ = [RIGHT$](RIGHT$.md)(DATE$, 4): Y = [VAL](VAL.md)(year$) [SELECT CASE](SELECT CASE.md) M    [CASE](CASE.md) 1: Moon$ = "January"    [CASE](CASE.md) 2: Moon$ = "February"    [CASE](CASE.md) 3: Moon$ = "March"    [CASE](CASE.md) 4: Moon$ = "April"    [CASE](CASE.md) 5: Moon$ = "May"    [CASE](CASE.md) 6: Moon$ = "June"    [CASE](CASE.md) 7: Moon$ = "July"    [CASE](CASE.md) 8: Moon$ = "August"    [CASE](CASE.md) 9: Moon$ = "September"    [CASE](CASE.md) 10: Moon$ = "October"    [CASE](CASE.md) 11: Moon$ = "November"    [CASE](CASE.md) 12: Moon$ = "December" [END SELECT](END SELECT.md) [PRINT](PRINT.md) "Today is " + WeekDay$(M, D, Y) + ", " + Moon$ + day$ + ", " + year$ + [SPACE$](SPACE$.md)(10)  [DEFINT](DEFINT.md) A-Z [FUNCTION](FUNCTION.md) WeekDay$ (M, D, Y) [IF](IF.md) M < 3 [THEN](THEN.md) M = M + 12: Y = Y - 1  'add 12 to Jan - Feb month, -1 year C = Y \ 100: Y = Y [MOD](MOD.md) 100           'split century and year number S1 = (C \ 4) - (2 * C) - 1           'century leap S2 = (5 * Y) \ 4                     '4 year leap S3 = 26 * (M + 1) \ 10               'days in months WkDay = (S1 + S2 + S3 + D) [MOD](MOD.md) 7     'weekday total remainder [IF](IF.md) WkDay < 0 [THEN](THEN.md) WkDay = WkDay + 7  'Adjust negative results to 0 to 6 [SELECT CASE](SELECT CASE.md) WkDay    [CASE](CASE.md) 0: day$ = "Sunday"    [CASE](CASE.md) 1: day$ = "Monday"    [CASE](CASE.md) 2: day$ = "Tuesday"    [CASE](CASE.md) 3: day$ = "Wednesday"    [CASE](CASE.md) 4: day$ = "Thursday"    [CASE](CASE.md) 5: day$ = "Friday"    [CASE](CASE.md) 6: day$ = "Saturday" [END SELECT](END SELECT.md) WeekDay$ = day$ [END FUNCTION](END FUNCTION.md)  
```

``` 06-02-2010 Today is Wednesday, June 2, 2010  
```

  

## See also

* [TIME$](TIME$.md), [IF...THEN](IF...THEN.md)
* [VAL](VAL.md), [STR$](STR$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)"), [LEFT$](LEFT$.md), [RIGHT$](RIGHT$.md)

  
