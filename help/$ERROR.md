# $ERROR

The **$ERROR** [metacommand](metacommand.md) triggers a compilation error.

  

## Syntax

**$ERROR** *message*
  

## Description

* This metacommand does not require a comment *[']('.md)* or [REM](REM.md) before it.
* *message* is any text. Quotation marks are not required.
* When QB64 tries to compile an **$ERROR** metacommand a compilation error is triggered and *message* is shown to the user. This is useful in [$IF]($IF.md) blocks.
* If there is a particular situation where you know your program will not work properly, you can prevent the user compiling and give them a helpful error message instead by checking for the condition with [$IF]($IF.md).
* An **$ERROR** directive not inside an conditional [$IF]($IF.md) (or [$ELSEIF]($ELSEIF.md)) block is useless because the program will **never** compile in that case.

  

## Examples

``` [$IF]($IF.md) VERSION < 2.1 [OR](OR.md) "OR (boolean)") WINDOWS = 0 [THEN](THEN.md)     $ERROR Requires Windows QB64 version 2.1 or above [$END IF]($END IF.md)   
```

Output (IDE Status Area)
Compilation check failed: REQUIRES WINDOWS QB64 VERSION 2.1 OR ABOVE on line 2 (assuming your version of QB64 doesn't meet those requirements).
  

## See also

* [Metacommand](Metacommand.md)
* [$IF]($IF.md)

  
