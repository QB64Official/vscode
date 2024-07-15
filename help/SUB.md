# SUB

A **SUB** procedure is a procedure within a program that can calculate and return multiple parameter values just like a full program.

  

## Syntax

SUB ProcedureName [(*1stParam*[, *2ndParam* ... [, *lastParam*)]
...
... 'procedure variable definitions and statements
...
[END SUB](END SUB.md)
  

## Parameters

* Parameters passed after the procedure call must match the variable types in the SUB parameters in order.
* If there are no *parameter*s passed or they are [SHARED](SHARED.md) the parameters and parenthesis are not required in the procedure.
* Parameter [Variable](Variable.md) names in the procedure do not have to match the names used in the [CALL](CALL.md), just the value types.

  

## Description

* All [dynamic](dynamic.md) [variable](variable.md) values return to 0 or null strings when the procedure is exited except for [STATIC](STATIC.md) variable values.
* SUB procedures can return multiple values through the parameters unlike functions.
* SUB procedures return to the next code statement after the call in the main or other procedures.
* [EXIT](EXIT.md) SUB can be used to exit early or to exit before [GOSUB](GOSUB.md) procedures using [RETURN](RETURN.md).
* [TYPE](TYPE.md) and [DECLARE LIBRARY](DECLARE LIBRARY.md) declarations can be made inside of SUB procedures in QB64 only.
* SUB procedures can save program memory as all memory used in a SUB is released on procedure exit except for [STATIC](STATIC.md) values.
* [_DEFINE](_DEFINE.md) can be used to define all new or old QB64 variable [TYPE](TYPE.md) definitions instead of DEF***.
* [$INCLUDE]($INCLUDE.md) text library files with needed SUB and [FUNCTION](FUNCTION.md) procedures can be included in programs after all sub-procedures.
* **QB64 ignores all procedural DECLARE statements.** Define all *parameter* [TYPEs](TYPEs.md) in the SUB procedure.
* **Images are not deallocated when the SUB or [FUNCTION](FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](_FREEIMAGE.md).**

  

*Example 1:* Text [PRINT](PRINT.md) screen centering using [PEEK](PEEK.md) to find the SCREEN mode width. Call and SUB procedure code:

``` [DEFINT](DEFINT.md) A-Z [SCREEN](SCREEN.md) 13 Center 10, 15, "This text is centered." ' example module sub call [END](END.md)  [DEFINT](DEFINT.md) A-Z ' only code allowed before SUB line is a DEF statement or a comment SUB Center (Tclr, Trow, Text$) Columns = [_WIDTH](_WIDTH.md) / [_FONTWIDTH](_FONTWIDTH.md) 'Convert _WIDTH (in pixels) to width in characters Middle = (Columns \ 2) + 1 ' reads any screen mode width Tcol = Middle - ([LEN](LEN.md)(Text$) \ 2) [COLOR](COLOR.md) Tclr: [LOCATE](LOCATE.md) Trow, Tcol: [PRINT](PRINT.md) Text$; ' end semicolon prevents screen roll [END SUB](END SUB.md)  
```

*Explanation:* The procedure centers text printed to the screen. The parameters are the text color, row and the text itself as a string or string variable. The maximum width of the screen mode in characters is found and divided in half to find the center point. The text string's length is also divided in half and subtracted from the screen's center position. The procedure will also work when the [WIDTH](WIDTH.md) statement has been used. When adding variables to Text$ use the + concatenation operator. Not semicolons!
  

*Example 2:* SUB and [FUNCTION](FUNCTION.md) procedures always return to the place they were called in the main or other sub-procedures:

``` a = 10 Add1 a [PRINT](PRINT.md) a  'Add1 returns final 'a' value here  [END](END.md)  SUB Add1 (n) n = n + 1 Add2 n [PRINT](PRINT.md) "exit 1" [END SUB](END SUB.md)  SUB Add2 (m) m = m + 2 [PRINT](PRINT.md) "exit 2" [END SUB](END SUB.md)  
```

``` exit 2 exit 1  13  
```

*Note:* Parameter **a** is used to call the sub-procedures even though parameters **n** and **m** are used internally.
  

## See also

* [FUNCTION](FUNCTION.md), [CALL](CALL.md)
* [BYVAL](BYVAL.md), [SCREEN](SCREEN.md)
* [EXIT](EXIT.md), [END](END.md)

  
