# STATIC

The STATIC keyword is used in declaration statements to control where variables are stored.

  

## Syntax

Variables
STATIC *variableName*[()] [[[AS *dataType*][, ...]
Subs & Functions
{[SUB](SUB.md)|[FUNCTION](FUNCTION.md)} *procedureName* [(*parameterList*)] **STATIC**
Library function block
[DECLARE STATIC LIBRARY](DECLARE STATIC LIBRARY.md)
## Description

* A STATIC list can be used in [SUB](SUB.md) and [FUNCTION](FUNCTION.md) procedures to designate one or more variables to retain their values.
* Variables and arrays with static storage will retain their values in between procedure calls. The values may also be used recursively.

* *variableName* may include a type suffix or use [AS](AS.md) to specify a type other than the default [SINGLE](SINGLE.md) type.
* Arrays with static storage are declared by specifying empty parenthesis following the array name. See [Arrays](Arrays.md)

* STATIC can be used after the name of a [SUB](SUB.md) or [FUNCTION](FUNCTION.md) in the procedure to force all variables to retain their values.
* **Recursive procedures may be required to be STATIC to avoid a Stack Overflow! QB64 programs may just close!**
* [$STATIC]($STATIC.md) defined program [arrays](arrays.md) cannot be [re-sized](re-sized.md) or use [_PRESERVE](_PRESERVE.md).

  

## Examples

*Example 1: Finding the binary bit settings from a 32 bit [LONG](LONG.md) register return using recursion.*

``` [INPUT](INPUT.md) "Enter a numerical value to see binary value: ", num& [PRINT](PRINT.md) BinStr$(num&)  [END](END.md)  [FUNCTION](FUNCTION.md) BinStr$ (n&) STATIC 'comment out STATIC to see what happens! [DIM](DIM.md) p%, s$ [IF](IF.md) 2 ^ p% > n& [THEN](THEN.md)   p% = 0 [ELSE](ELSE.md)   [IF](IF.md) n& [AND](AND.md) "AND (boolean)") 2 ^ p% [THEN](THEN.md) s$ = "1" + s$ [ELSE](ELSE.md) s$ = "0" + s$   [IF](IF.md) n& > 2 ^ p% [THEN](THEN.md)     p% = p% + 1     s$ = BinStr$(n&) 'recursive call to itself   [ELSE](ELSE.md): p% = 0   [END IF](END IF.md) [END IF](END IF.md) [IF](IF.md) s$ = "" [THEN](THEN.md) BinStr$ = "0" [ELSE](ELSE.md) BinStr$ = s$ [END FUNCTION](END FUNCTION.md)  
```

*Explanation:* The [FUNCTION](FUNCTION.md) above returns a [STRING](STRING.md) value representing the bits ON in an [INTEGER](INTEGER.md) value. The string can be printed to the screen to see what is happening in a port register. **STATIC** keeps the function from overloading the memory "Stack" and is normally REQUIRED when recursive calls are used in QBasic! **QB64 procedures will close without warning or error!**
  

*Example 2:* Using a static array to cache factorials, speeding up repeated calculations:

```   [PRINT](PRINT.md) Factorial(0) [PRINT](PRINT.md) Factorial(5) [PRINT](PRINT.md) Factorial(50  [FUNCTION](FUNCTION.md) Factorial# ( n [AS](AS.md) [DOUBLE](DOUBLE.md) )     [CONST](CONST.md) maxNToCache = 50     STATIC resultCache() [AS](AS.md) [DOUBLE](DOUBLE.md)     STATIC firstCall [AS](AS.md) [INTEGER](INTEGER.md)      ' The lookup table is initially empty, so re-size it..     [IF](IF.md) firstCall = 0 [THEN](THEN.md)         firstCall = -1         [REDIM](REDIM.md) resultCache(maxNToCache) [AS](AS.md) [DOUBLE](DOUBLE.md)          ' ..and pre-calculate some factorials.         resultCache(0) = 1         resultCache(1) = 1         resultCache(2) = 2     [END IF](END IF.md)      ' See if we have the result cached. If so, we're done.     [IF](IF.md) n <= maxNToCache [THEN](THEN.md)         [IF](IF.md) resultCache(n) <> 0 [THEN](THEN.md)             Factorial = resultCache(n)             [EXIT FUNCTION](EXIT FUNCTION.md)         [END IF](END IF.md)     [END IF](END IF.md)      ' If not, we use recursion to calculate the result, then cache it for later use:     resultCache(n) = [INT](INT.md)(n) * Factorial([INT](INT.md)(n) - 1)     Factorial = resultCache(n) [END FUNCTION](END FUNCTION.md)   
```

```  1  120  3.041409320171338D+64  
```

  

## See also

* [DIM](DIM.md), [REDIM](REDIM.md), [COMMON](COMMON.md)
* [SUB](SUB.md), [FUNCTION](FUNCTION.md)
* [DECLARE LIBRARY](DECLARE LIBRARY.md)
* [TYPE](TYPE.md), [Arrays](Arrays.md)
* [$STATIC]($STATIC.md), [$DYNAMIC]($DYNAMIC.md)
* [Data types](Data types.md)

  
