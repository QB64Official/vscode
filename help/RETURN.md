# RETURN

**RETURN** is used in [GOSUB](GOSUB.md) procedures to return to the original call code line or a specified line label.

  

## Syntax

**RETURN** [{*linelabel*|*linenumber*}]
  

## Parameters

* RETURN without parameters returns to the code immediately following the original [GOSUB](GOSUB.md) call.
* *line number* or *linelabel* after the RETURN statement returns code execution to that label.

  

*Usage:*

* Normally required at the end of a [GOSUB](GOSUB.md) procedure unless the procedure returns using a loop.
* RETURN is not used in error handling procedures. Error procedures use [RESUME](RESUME.md) *line number* or [RESUME NEXT](RESUME NEXT.md).
* GOSUB procedures use line numbers or line labels designated with a colon after the number or label.
* If RETURN is encountered without a previous [GOSUB](GOSUB.md) call a ["RETURN without GOSUB" error]("RETURN without GOSUB" error.md) is produced.
* To avoid errors, place [GOSUB](GOSUB.md) procedures AFTER the main program code [END](END.md) or after an [EXIT SUB](EXIT SUB.md) or [EXIT FUNCTION](EXIT FUNCTION.md) call.

  

*Example 1:* Returns after a Gosub.

``` [FOR](FOR.md) a = 1 [TO](TO.md) 10 [PRINT](PRINT.md) a [IF](IF.md) a = 5 [THEN](THEN.md) [GOSUB](GOSUB.md) five [NEXT](NEXT.md) [END](END.md)       'END or SYSTEM stop the program before the execution of a sub procedure  five: [PRINT](PRINT.md) "Aha! Five!" RETURN  
```

```  1  2  3  4  5 Aha! Five!  6  7  8  9  10  
```

  

*Example 2:* Returns to a specific line label.

``` [GOSUB](GOSUB.md) hey [PRINT](PRINT.md) "it didn't go here." hoho: [PRINT](PRINT.md) "it went here." [END](END.md)  hey: RETURN hoho  
```

``` it went here.  
```

  

## See also

* [GOSUB](GOSUB.md), [GOTO](GOTO.md)
* [RESUME](RESUME.md)

  
