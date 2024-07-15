# SQR

The **SQR** function returns the square root of a numerical value.

  

## Syntax

square_root = **SQR(**value**)**
  

## Description

* The *square root* returned is normally a [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) numerical value.
* The *value* parameter can be any **positive** numerical type. **Negative parameter values will not work!**
* Other exponential root functions can use fractional exponents([^](^.md)) enclosed in **parenthesis only**. EX: root = c ^ (a / b)

  

## Examples

*Example 1:* Finding the hypotenuse of a right triangle:

```  A% = 3: B% = 4  PRINT "hypotenuse! ="; SQR((A% ^ 2) + (B% ^ 2))  
```

```  hypotenuse = 5  
```

  

*Example 2:* Finding the Cube root of a number.

```  number = 8  cuberoot = number [^](^.md) (1/3)  PRINT cuberoot  
```

```  2  
```

  

*Example 3:* Negative roots return fractional values of one.

```  number = 8  negroot = number [^](^.md) -2  PRINT negroot  
```

```  .015625  
```

*Explanation:* A negative root means that the exponent value is actually inverted to a fraction of 1. So x ^ -2 actually means the result will be: 1 / (x ^ 2).
  

*Example 4:* Fast Prime number checker limits the numbers checked to the square root (half way).

``` DEFLNG P DO PRIME = -1   'set PRIME as True INPUT "Enter any number to check up to 2 million (Enter quits): ", guess$ PR = [VAL](VAL.md)(guess$) IF PR [MOD](MOD.md) 2 THEN              'check for even number   FOR P = 3 TO SQR(PR) STEP 2 'largest number that could be a multiple is the SQR     IF PR [MOD](MOD.md) P = 0 THEN PRIME = 0: EXIT FOR 'MOD = 0 when evenly divisible by another   NEXT ELSE : PRIME = 0 'number to be checked is even so it cannot be a prime END IF IF PR = 2 THEN PRIME = -1 '2 is the ONLY even prime IF PR = 1 THEN PRIME = 0  'MOD returns true but 1 is not a prime by definition IF PRIME THEN PRINT "PRIME! How'd you find me? " ELSE PRINT "Not a prime, you lose!" LOOP UNTIL PR = 0  
```

``` Enter any number to check up to 2 million (Enter quits): 12379 PRIME! How'd you find me?  
```

  

## See also

* [MOD](MOD.md)
* [^](^.md)
* [Mathematical Operations](Mathematical Operations.md)
* [Derived Mathematical Functions](Derived Mathematical Functions.md)

  
