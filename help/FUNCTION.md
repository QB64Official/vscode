# FUNCTION

A FUNCTION block statement is used to create a function procedure to return a calculated value to a program.

  

## Syntax

**FUNCTION procedureName**[type-suffix] [(*parameters*)]
*{code}*
'variable definitions and procedure statements
⋮
procedureName = returnValue
**END FUNCTION**
  

## Description

* The function type can be any variable type that it will return to the program and is represented by the type suffix.
* Functions hold one return value in the function's name which is a variable type. Other values can be passed through *parameters*.
* Functions are often referred to in program calculations, not called like SUB procedures. [CALL](CALL.md) cannot be used with functions.
* If there are no parameters passed or they are [SHARED](SHARED.md) the *parameters* and parenthesis are not required.
* Variable names within the procedure do not have to match the names used in the reference parameters, just the value types.
* To pass parameter variables [by value](by value.md) to protect the value in a call, parenthesis can be placed around each variable name also.
* To pass [arrays](arrays.md) to a sub-procedure use empty brackets after the name or indicate the index in the call.
* All [dynamic](dynamic.md) variable values return to 0 or null strings when the procedure is exited except when a variable or the entire function is [STATIC](STATIC.md). This can save program memory as all [dynamic](dynamic.md) memory used in a FUNCTION is released on procedure exit.
* FUNCTION procedure code can use [GOSUB](GOSUB.md) and [GOTO](GOTO.md) line numbers or labels inside of the procedure when necessary.
* For early function exits use [EXIT](EXIT.md) FUNCTION before [END FUNCTION](END FUNCTION.md) and [GOSUB](GOSUB.md) procedures using [RETURN](RETURN.md).
* **QB64 ignores all procedural DECLARE statements.** Define all *parameter* [types](types.md) in the FUNCTION procedure.
* **Images are not deallocated when the [SUB](SUB.md) or FUNCTION they are created in ends. Free them with [_FREEIMAGE](_FREEIMAGE.md).**
* The IDE can create the FUNCTION and END FUNCTION lines for you. Use the *New FUNCTION...* option in the Edit Menu. A box will come up for you to enter a name for the FUNCTION. Enter all code between the FUNCTION and [END FUNCTION](END FUNCTION.md) lines.

### QBasic/QuickBASIC

* Once a FUNCTION was created and used, the QBasic IDE would DECLARE it when the file was saved. **QB64 doesn't need these declarations.**
* QBasic's IDE could place a [DEFINT](DEFINT.md), [DEFSNG](DEFSNG.md), [DEFLNG](DEFLNG.md), [DEFDBL](DEFDBL.md) or [DEFSTR](DEFSTR.md) statement before the FUNCTION line if it is used in the main module. It may even be the wrong variable type needed.
* QBasic allowed programmers to add DATA fields anywhere because the IDE separated the main code from other procedures.

  

## Examples

*Example 1:* A simple function that returns the current path. Place FUNCTION or [SUB](SUB.md) procedures after the program [END](END.md).

``` [PRINT](PRINT.md) "Current path = "; PATH$ [END](END.md)  FUNCTION PATH$     f% = [FREEFILE](FREEFILE.md)     file$ = "D0Spath.inf" 'file name uses a zero to prevent an overwrite of existing file name     [SHELL](SHELL.md) [_HIDE](_HIDE.md) "CD > " + file$ 'send screen information to a created text file     [OPEN](OPEN.md) file$ [FOR](FOR.md) "FOR (file statement)") [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #f% 'file should exist with one line of text     [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #f%, PATH$ 'read file path text to function name     [CLOSE](CLOSE.md) #f%     [KILL](KILL.md) file$ [END FUNCTION](END FUNCTION.md)  
```

  

*Example 2:* Returns a [LONG](LONG.md) array byte size required for a certain sized graphics screen pixel area [GET](GET.md) "GET (graphics statement)").

``` [INPUT](INPUT.md) "Enter a screen mode: ", mode% [INPUT](INPUT.md) "Enter image width: ", wide& [INPUT](INPUT.md) "Enter image depth: ", deep& IntegerArray& = ImageBufferSize&(wide&, deep&, mode%) \ 2 ' returns size of an [INTEGER](INTEGER.md) array. [PRINT](PRINT.md) IntegerArray& [END](END.md)  [DEFINT](DEFINT.md) A-Z FUNCTION ImageBufferSize& (Wide&, Deep&, ScreenMode%)     [SELECT CASE](SELECT CASE.md) ScreenMode%         [CASE](CASE.md) 1: BPPlane = 2: Planes = 1         [CASE](CASE.md) 2, 3, 4, 11: BPPlane = 1: Planes = 1         [CASE](CASE.md) 7, 8, 9, 12: BPPlane = 1: Planes = 4         [CASE](CASE.md) 10: BPPlane = 1: Planes = 2         [CASE](CASE.md) 13: BPPlane = 8: Planes = 1         [CASE ELSE](CASE ELSE.md): BPPlane = 0     [END SELECT](END SELECT.md)     ImageBufferSize& = 4 + [INT](INT.md)((Wide& * BPPlane + 7) / 8) * (Deep& * Planes) 'return the value to function name. [END FUNCTION](END FUNCTION.md)  
```

*Explanation:* Function calculates the array byte size required when you [GET](GET.md) "GET (graphics statement)") an area of a graphics [SCREEN](SCREEN.md). Each mode may require a different sized array. Since graphics uses [INTEGER](INTEGER.md) arrays, 2 byte elements, the size returned is divided by 2 in the IntegerArray& calculation function reference. Function returns only 4 for [SCREEN](SCREEN.md) 0 which is a text only mode.
  

## See also

* [SUB](SUB.md), [SCREEN](SCREEN.md)
* [EXIT](EXIT.md) (statement), [END](END.md)
* [_EXIT (function)](_EXIT (function).md) "EXIT (function)")

  
