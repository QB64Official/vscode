## STATIC
---

### The STATIC keyword is used in declaration statements to control where variables are stored.

#### DESCRIPTION
* A [STATIC](./STATIC.md) list can be used in [SUB](./SUB.md) and [FUNCTION](./FUNCTION.md) procedures to designate one or more variables to retain their values.
* Variables and arrays with static storage will retain their values in between procedure calls. The values may also be used recursively.


#### EXAMPLES
##### Example 1: Finding the binary bit settings from a 32 bit LONG register return using recursion.
```vb
INPUT "Enter a numerical value to see binary value: ", num&
PRINT BinStr$(num&)

END

FUNCTION BinStr$ (n&) STATIC 'comment out STATIC to see what happens!
DIM p%, s$
IF 2 ^ p% > n& THEN
 p% = 0
ELSE
 IF n& AND 2 ^ p% THEN s$ = "1" + s$ ELSE s$ = "0" + s$
 IF n& > 2 ^ p% THEN
   p% = p% + 1
   s$ = BinStr$(n&) 'recursive call to itself
 ELSE: p% = 0
 END IF
END IF
IF s$ = "" THEN BinStr$ = "0" ELSE BinStr$ = s$
END FUNCTION
```
  
##### Example 2: Using a static array to cache factorials, speeding up repeated calculations:
```vb
PRINT Factorial(0)
PRINT Factorial(5)
PRINT Factorial(50

FUNCTION Factorial# ( n AS DOUBLE )
   CONST maxNToCache = 50
   STATIC resultCache() AS DOUBLE
   STATIC firstCall AS INTEGER

   ' The lookup table is initially empty, so re-size it..
   IF firstCall = 0 THEN
       firstCall = -1
       REDIM resultCache(maxNToCache) AS DOUBLE

       ' ..and pre-calculate some factorials.
       resultCache(0) = 1
       resultCache(1) = 1
       resultCache(2) = 2
   END IF

   ' See if we have the result cached. If so, we're done.
   IF n <= maxNToCache THEN
       IF resultCache(n) <> 0 THEN
           Factorial = resultCache(n)
           EXIT FUNCTION
       END IF
   END IF

   ' If not, we use recursion to calculate the result, then cache it for later use:
   resultCache(n) = INT(n) * Factorial(INT(n) - 1)
   Factorial = resultCache(n)
END FUNCTION
```
  
```vb
1
120
3.041409320171338D+64
```
  


#### SEE ALSO
* [DIM](./DIM.md) , [REDIM](./REDIM.md) , [COMMON](./COMMON.md)
* [SUB](./SUB.md) , [FUNCTION](./FUNCTION.md)
* [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md)
* [TYPE](./TYPE.md) , Arrays
* $[STATIC](./STATIC.md) , $DYNAMIC
* Data types
