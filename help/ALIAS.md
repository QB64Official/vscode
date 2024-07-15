# ALIAS

The **ALIAS** clause in a [DECLARE LIBRARY](DECLARE LIBRARY.md) statement block tells the program the name of the procedure used in the external library.

  

## Syntax

[DECLARE LIBRARY](DECLARE LIBRARY.md)
SUB *pseudoname* ALIAS *actualname* [(*parameters*)]
[END DECLARE](END DECLARE.md)
  

## Parameters

* The *pseudoname* is the name of the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) the QB64 program will use.
* The *actualname* is the same procedure name as it is inside of the library code, it may optionally have a prepended namespace specification (e.g. **ALIAS** std::malloc).
* QB64 must use all parameters of imported procedures including optional ones.

  

## Description

* The **ALIAS** name clause is optional as the original library procedure name can be used.
* The procedure name does not have to be inside of quotes when using [DECLARE LIBRARY](DECLARE LIBRARY.md).
* QB64 does not support optional parameters.

  

## Examples

Example
Instead of creating a wrapper [SUB](SUB.md) with the Library statement inside of it, just rename it in the declaration.

``` [DECLARE LIBRARY](DECLARE LIBRARY.md)     [SUB](SUB.md) MouseMove ALIAS glutWarpPointer ([BYVAL](BYVAL.md) xoffset&, [BYVAL](BYVAL.md) yoffset&) [END DECLARE](END DECLARE.md)  [DO UNTIL](DO UNTIL.md) [_SCREENEXISTS](_SCREENEXISTS.md): [LOOP](LOOP.md) [PRINT](PRINT.md) "Hit a key to move the pointer to top left corner..." [SLEEP](SLEEP.md)  MouseMove 1, 1  
```

``` **Explanation**  When a Library procedure is used to represent another procedure name  use **ALIAS** instead of creating a wrapper [SUB](SUB.md). Just place your name for  the procedure first with the actual Library name after **ALIAS**.  
```

  

## See also

* [SUB](SUB.md), [FUNCTION](FUNCTION.md)
* [DECLARE LIBRARY](DECLARE LIBRARY.md), [BYVAL](BYVAL.md)

  
