# _CONTINUE

  

The _CONTINUE statement is used in a [DO...LOOP](DO...LOOP.md), [WHILE...WEND](WHILE...WEND.md) or [FOR...NEXT](FOR...NEXT.md) block to skip the remaining lines of code in a block (without exiting it) and start the next iteration. It works as a shortcut to a [GOTO](GOTO.md), but without the need for a [line label](line label.md).

  

## Syntax

_CONTINUE
  

## Availability

* **QB64 v1.2 and up**
* **QB64-PE all versions**

  

## Examples

*Example:*

``` [FOR](FOR.md) i = 1 [TO](TO.md) 10     [IF](IF.md) i = 5 [THEN](THEN.md) _CONTINUE     [PRINT](PRINT.md) i; [NEXT](NEXT.md)  
```

```  1  2  3  4  6  7  8  9  10  
```

  

## See also

* [DO...LOOP](DO...LOOP.md)
* [WHILE...WEND](WHILE...WEND.md)
* [FOR...NEXT](FOR...NEXT.md)
* [GOTO](GOTO.md)

  
