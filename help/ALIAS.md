## ALIAS
---

### The ALIAS clause in a DECLARE LIBRARY statement block tells the program the name of the procedure used in the external library.

#### SYNTAX

`DECLARE LIBRARY SUB pseudoname ALIAS actualname [( parameters )]`

#### PARAMETERS
* The pseudoname is the name of the [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) the QB64 program will use.
* The actualname is the same procedure name as it is inside of the library code, it may optionally have a prepended namespace specification (e.g. [ALIAS](./ALIAS.md) std::malloc).
* QB64 must use all parameters of imported procedures including optional ones.


#### DESCRIPTION
* The [ALIAS](./ALIAS.md) name clause is optional as the original library procedure name can be used.
* The procedure name does not have to be inside of quotes when using [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md) .
* QB64 does not support optional parameters.


#### EXAMPLES
```vb
DECLARE LIBRARY
   SUB MouseMove ALIAS glutWarpPointer (BYVAL xoffset&, BYVAL yoffset&)
END DECLARE

DO UNTIL _SCREENEXISTS: LOOP
PRINT "Hit a key to move the pointer to top left corner..."
SLEEP

MouseMove 1, 1
```
  
```vb
Explanation
When a Library procedure is used to represent another procedure name
use ALIAS instead of creating a wrapper SUB. Just place your name for
the procedure first with the actual Library name after ALIAS.
```
  


#### SEE ALSO
* [SUB](./SUB.md) , [FUNCTION](./FUNCTION.md)
* [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md) , [BYVAL](./BYVAL.md)
