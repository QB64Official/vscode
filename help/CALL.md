# CALL

CALL sends code execution to a subroutine procedure in a program. In **QB64** the subroutine doesn't need to be declared.

  

## Syntax

CALL *ProcedureName* (*parameter1*, *parameter2*,...)]
### Alternative syntax

*ProcedureName* *parameter1*, *parameter2*,...]
  

## Description

* CALL requires [SUB](SUB.md) program parameters to be enclosed in brackets (parenthesis).
* CALL is not required to call a subprocedure. Use the SUB-procedure name and list any parameters without parenthesis.
* Neither syntax can be used to call [GOSUB](GOSUB.md) linelabel sub procedures.
* To pass parameters by value, instead of by reference, enclose passed variables in parenthesis.

### QBasic/QuickBASIC

* PDS or QuickBASIC 7 up could use [BYVAL](BYVAL.md) to pass variables by values instead of reference.
* QuickBASIC 4.5 could use [BYVAL](BYVAL.md) only for procedures created in Assembly or another language.
* QBasic required [CALL ABSOLUTE](CALL ABSOLUTE.md) only. It did not have to be DECLAREd.

  

## Examples

*Example:* How parameters are passed in two [SUB](SUB.md) calls, one with CALL using brackets and one without CALL or brackets:

``` [DIM](DIM.md) a [AS](AS.md) [INTEGER](INTEGER.md) 'value not shared with SUB [DIM](DIM.md) [SHARED](SHARED.md) b [AS](AS.md) [INTEGER](INTEGER.md) 'value shared with any SUB a = 1 b = 2 c = 3  CALL helloworld (a) 'a passed to c parameter with CALL helloworld a        'a passed to c parameter w/o CALL  [END](END.md)  [SUB](SUB.md) helloworld (c) 'SUB parameter variables are always inside of brackets in SUB code [PRINT](PRINT.md) "Hello World!" [PRINT](PRINT.md) a,  b, c a = a + 1 'a is a SUB value of 0 when printed which may increase inside SUB only b = b + 1 'b is a shared value which can increase anywhere c = c + 1 'c is a SUB parameter value from a in calls which may increase inside SUB only [END SUB](END SUB.md)  
```

*Returns:*

``` Hello World!  0            2            1 Hello World!  0            3            1  
```

*Explanation:* Variable ***a*** that is outside of the subroutine isn't [SHARED](SHARED.md) so it will have no effect inside the subroutine, the variable *a* inside the subroutine is only valid inside the subroutine, and whatever value *a* has outside of it makes no difference within the subroutine.
The variable ***b*** on the other hand is [SHARED](SHARED.md) with the subroutines and thus can be changed in the subroutine. The variable *a* is initiated with 0 as default when created, thus it will return 0 since it wasn't changed within the subroutine.
The variable ***c*** is the [SUB](SUB.md) parameter variable that passes values into the sub. Its value could be changed by the passed parameter value or inside of the subroutine. The un-shared ***c*** variable value outside of the sub is irrelevant within the subroutine.
  

## See also

* [SUB](SUB.md), [FUNCTION](FUNCTION.md)

  
