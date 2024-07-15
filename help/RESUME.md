# RESUME

The **RESUME** statement is used with **NEXT** or a line number or label in an error handling routine.

  

## Syntax

RESUME {**NEXT**|*lineLabel*|*lineNumber*}
  

## Description

* **NEXT** returns execution to the code immediately following the error.
* A *lineLabel* or *lineNumber* is the code line to return to after an error.
* If the line label or number is omitted or the line number = 0, the code execution resumes at the code that created the original error.
* RESUMEcan only be used in ERROR handling routines. Use [RETURN](RETURN.md) in normal [GOSUB](GOSUB.md) procedures.

  

## See also

* [ON ERROR](ON ERROR.md), [ERROR](ERROR.md)
* [RETURN](RETURN.md), [ERROR Codes](ERROR Codes.md)
* [FOR...NEXT](FOR...NEXT.md)

  
