## LOG
---

### The LOG math function returns the natural logarithm of a specified numerical value.

#### SYNTAX

`logarithm! = LOG ( value )`

#### DESCRIPTION
* value MUST be greater than 0. "Illegal function call" error occurs if negative or zero values are used.
* The natural logarithm is the logarithm to the base e = 2.718282 (approximately).
* The natural logarithm of a is defined as the integral from 1 to a of dx/x.
* Returns are default [SINGLE](./SINGLE.md) precision unless the value parameter uses [DOUBLE](./DOUBLE.md) precision.


#### EXAMPLES
##### Example 1: FUNCTION to find the base ten logarithm of a numerical value.
```vb
FUNCTION Log10#(value AS DOUBLE) STATIC
  Log10# = LOG(value) / LOG(10.#)
END FUNCTION
```
  
##### Example 2: A binary FUNCTION to convert INTEGER values using LOG to find the number of digits the return will be.
```vb
FUNCTION BinStr$ (n&)
 IF n& < 0 THEN EXIT FUNCTION            'positive numbers only! negative error!
 FOR p% = 0 TO INT(LOG(n& + .1) / LOG(2))     ' added +.1 to get 0 to work
   IF n& AND 2 ^ p% THEN s$ = "1" + s$ ELSE s$ = "0" + s$  'find bits on
 NEXT p%
 IF s$ = "" THEN BinStr$ = "&B0" ELSE BinStr$ = "&B" + s$       'check for zero return
END FUNCTION
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [EXP](./EXP.md) , &B (binary number)
* Derived Mathematical Functions
