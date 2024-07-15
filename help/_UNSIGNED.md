# _UNSIGNED

_UNSIGNED defines a numerical value as being only positive.

  

## Syntax

[DIM](DIM.md) *variable* [AS](AS.md) [[[_UNSIGNED] *datatype*
[_DEFINE](_DEFINE.md) *letterRange* [AS](AS.md) [[[_UNSIGNED] *datatype*
  

## Description

* Datatype can be any of the following: [INTEGER](INTEGER.md), [LONG](LONG.md), [_BIT](_BIT.md), [_BYTE](_BYTE.md), [_INTEGER64](_INTEGER64.md), [_OFFSET](_OFFSET.md)
* **[SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) and [_FLOAT](_FLOAT.md) variable types cannot be _UNSIGNED.**
* _UNSIGNED can be used in a [_DEFINE](_DEFINE.md) statement to set undefined variable name first letters as all positive-only values.
* Can also be used in [DIM](DIM.md) statements or subprocedure parameter definitions following [AS](AS.md).
* _UNSIGNED allows larger positive numerical variable value limits than signed ones.
* The unsigned variable type suffix used is the **tilde (~)**, right before the number's own type suffix: *variableName~&*

  

```                         00000001 - unsigned & signed are both 1                         01111111 - unsigned & signed are both 127                         11111111 - unsigned is 255 but signed is -1                         11111110 - unsigned is 254 but signed is -2                         11111101 - unsigned is 253 but signed is -3  
```

  

## Examples

*Example 1:* In **QB64**, when a signed [INTEGER](INTEGER.md) value exceeds 32767, the value may become a negative value:

``` i% = 38000 [PRINT](PRINT.md) i%  
```

``` -27536  
```

*Explanation:* Use an _UNSIGNED [INTEGER](INTEGER.md) or a ~% variable type suffix for only positive integer values up to 65535.
  

*Example 2:* In **QB64**, _UNSIGNED [INTEGER](INTEGER.md) values greater than 65535 cycle over again from zero:

``` i~% = 70000 [PRINT](PRINT.md) i~%  
```

```  4464  
```

*Explanation:* In QB64 an unsigned integer value of 65536 would be 0 with values increasing by the value minus 65536.
  

*Example 3:* Demonstrating how _UNSIGNED variables expand the [INTEGER](INTEGER.md) range.

``` [DIM](DIM.md) n [AS](AS.md) _UNSIGNED [INTEGER](INTEGER.md) [DIM](DIM.md) pn [AS](AS.md) _UNSIGNED [INTEGER](INTEGER.md) [LOCATE](LOCATE.md) 3, 6: [PRINT](PRINT.md) "Press Esc to exit loop" [FOR](FOR.md) n = 1 [TO](TO.md) 80000   [_LIMIT](_LIMIT.md) 10000 ' 6.5 second loop   [LOCATE](LOCATE.md) 12, 37: [PRINT](PRINT.md) n ' display current value   [IF](IF.md) n > 0 [THEN](THEN.md) pn = n ' find highest value   [IF](IF.md) n = 0 [THEN](THEN.md) Count = Count + 1: [LOCATE](LOCATE.md) 14, 37: [PRINT](PRINT.md) "Count:"; Count; "Max:"; pn   [IF](IF.md) [INP](INP.md)(&H60) = 1 [THEN](THEN.md) [EXIT FOR](EXIT FOR.md) ' escape key exit [NEXT](NEXT.md) n [END](END.md)  
```

```      Press Esc to exit loop                                65462                            Count: 13 Max: 65535    
```

*Explanation:* The maximum value can only be 65535 (32767 + 32768) so the FOR loop repeats itself. Remove the _UNSIGNED parts and run it again.

  

## See also

* DECLARE, [SUB](SUB.md), [FUNCTION](FUNCTION.md)
* [DIM](DIM.md), [_DEFINE](_DEFINE.md)
* [DEFSTR](DEFSTR.md), [DEFLNG](DEFLNG.md), [DEFINT](DEFINT.md), [DEFSNG](DEFSNG.md), [DEFDBL](DEFDBL.md)
* [INTEGER](INTEGER.md), [LONG](LONG.md), [_INTEGER64](_INTEGER64.md)
* [ABS](ABS.md), [SGN](SGN.md)
* [Variable Types](Variable Types.md)

  
