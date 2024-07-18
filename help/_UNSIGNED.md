## _UNSIGNED
---

### _UNSIGNED defines a numerical value as being only positive.

#### SYNTAX

`DIM variable AS [[[_UNSIGNED]]] datatype`

#### DESCRIPTION
* Datatype can be any of the following: [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , [_BIT](./_BIT.md) , [_BYTE](./_BYTE.md) , [_INTEGER64](./_INTEGER64.md) , [_OFFSET](./_OFFSET.md)
* [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md) and [_FLOAT](./_FLOAT.md) variable types cannot be [_UNSIGNED](./_UNSIGNED.md).
* [_UNSIGNED](./_UNSIGNED.md) can be used in a [_DEFINE](./_DEFINE.md) statement to set undefined variable name first letters as all positive-only values.
* Can also be used in [DIM](./DIM.md) statements or subprocedure parameter definitions following [AS](./AS.md) .
* [_UNSIGNED](./_UNSIGNED.md) allows larger positive numerical variable value limits than signed ones.
* The unsigned variable type suffix used is the tilde (~) , right before the number's own type suffix: variableName~&


#### EXAMPLES
##### Example 1: In QB64 , when a signed INTEGER value exceeds 32767, the value may become a negative value:
```vb
i% = 38000
PRINT i%
```
  
```vb
-27536
```
  
##### Example 2: In QB64 , _UNSIGNED INTEGER values greater than 65535 cycle over again from zero:
```vb
i~% = 70000
PRINT i~%
```
  
```vb
4464
```
  
##### Example 3: Demonstrating how _UNSIGNED variables expand the INTEGER range.
```vb
DIM n AS _UNSIGNED INTEGER
DIM pn AS _UNSIGNED INTEGER
LOCATE 3, 6: PRINT "Press Esc to exit loop"
FOR n = 1 TO 80000
 _LIMIT 10000 ' 6.5 second loop
 LOCATE 12, 37: PRINT n ' display current value
 IF n > 0 THEN pn = n ' find highest value
 IF n = 0 THEN Count = Count + 1: LOCATE 14, 37: PRINT "Count:"; Count; "Max:"; pn
 IF INP(&H60) = 1 THEN EXIT FOR ' escape key exit
NEXT n
END
```
  
```vb
Press Esc to exit loop




                          65462

                         Count: 13 Max: 65535
```
  
##### Explanation: The maximum value can only be 65535 (32767 + 32768) so the FOR loop repeats itself. Remove the _UNSIGNED parts and run it again.


#### SEE ALSO
* [DECLARE](./DECLARE.md), [SUB](./SUB.md) , [FUNCTION](./FUNCTION.md)
* [DIM](./DIM.md) , [_DEFINE](./_DEFINE.md)
* [DEFSTR](./DEFSTR.md) , [DEFLNG](./DEFLNG.md) , [DEFINT](./DEFINT.md) , [DEFSNG](./DEFSNG.md) , [DEFDBL](./DEFDBL.md)
* [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md)
* [ABS](./ABS.md) , [SGN](./SGN.md)
* Variable Types
