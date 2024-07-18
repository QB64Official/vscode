## $ERROR
---

### The $ERROR metacommand triggers a compilation error.

#### SYNTAX

`$ERROR message`

#### DESCRIPTION
* This metacommand does not require a comment ' or [REM](./REM.md) before it.
* message is any text. Quotation marks are not required.
* When QB64 tries to compile an $[ERROR](./ERROR.md) metacommand a compilation error is triggered and message is shown to the user. This is useful in $[IF](./IF.md) blocks.
* If there is a particular situation where you know your program will not work properly, you can prevent the user compiling and give them a helpful error message instead by checking for the condition with $[IF](./IF.md) .
* An $[ERROR](./ERROR.md) directive not inside an conditional $[IF](./IF.md) (or $[ELSEIF](./ELSEIF.md) ) block is useless because the program will never compile in that case.


#### EXAMPLES
```vb
$IF VERSION < 2.1 OR WINDOWS = 0 THEN
   $ERROR Requires Windows QB64 version 2.1 or above
$END IF
```
  


#### SEE ALSO
* Metacommand
* $[IF](./IF.md)
