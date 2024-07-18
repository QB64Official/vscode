## CALL
---

### CALL sends code execution to a subroutine procedure in a program. In QB64 the subroutine doesn't need to be declared.

#### SYNTAX

`CALL ProcedureName ( parameter1 , parameter2 ,...)]`

#### DESCRIPTION
* [CALL](./CALL.md) requires [SUB](./SUB.md) program parameters to be enclosed in brackets (parenthesis).
* [CALL](./CALL.md) is not required to call a subprocedure. Use the [SUB](./SUB.md)-procedure name and list any parameters without parenthesis.
* Neither syntax can be used to call [GOSUB](./GOSUB.md) linelabel sub procedures.
* To pass parameters by value, instead of by reference, enclose passed variables in parenthesis.


#### EXAMPLES
##### Example: How parameters are passed in two SUB calls, one with CALL using brackets and one without CALL or brackets:
```vb
DIM a AS INTEGER 'value not shared with SUB
DIM SHARED b AS INTEGER 'value shared with any SUB
a = 1
b = 2
c = 3

CALL helloworld (a) 'a passed to c parameter with CALL
helloworld a        'a passed to c parameter w/o CALL

END

SUB helloworld (c) 'SUB parameter variables are always inside of brackets in SUB code
PRINT "Hello World!"
PRINT a,  b, c
a = a + 1 'a is a SUB value of 0 when printed which may increase inside SUB only
b = b + 1 'b is a shared value which can increase anywhere
c = c + 1 'c is a SUB parameter value from a in calls which may increase inside SUB only
END SUB
```
  
##### Returns:
```vb
Hello World!
0            2            1
Hello World!
0            3            1
```
  


#### SEE ALSO
* [SUB](./SUB.md) , [FUNCTION](./FUNCTION.md)
