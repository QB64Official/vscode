## AND
---

### The logical AND numerical operator compares two values in respect of their bits. If both bits at a certain position in both values are set, then that bit position is set in the result.

#### SYNTAX

`result = firstvalue AND secondvalue`

#### DESCRIPTION
* [AND](./AND.md) compares the bits of the firstvalue against the bits of the secondvalue , the result is stored in the result variable.
* If both bits are on (1) then the result is on (1).
* All other conditions return 0 (bit is off).
* [AND](./AND.md) is often used to see if a bit is on by comparing a value to an exponent of 2.
* Can turn off a bit by subtracting the bit on value from 255 and using that value to [AND](./AND.md) a byte value.


#### EXAMPLES
##### Example 1:
```vb
101
        AND
        011
       -----
        001
```
  
##### Example 2:
```vb
11111011
       AND
     11101111
    ----------
     11101011
```
  
##### Example 3: Finding the binary bits on in an INTEGER value.
```vb
DO
 INPUT "Enter Integer value from -32768 to 32767 (Enter quits): ", INTvalue&
 IF INTvalue& < -32768 OR INTvalue& > 32767 OR INTval& = 0 THEN EXIT DO
 FOR exponent = 15 TO 0 STEP -1
   IF (INTvalue& AND 2 ^ exponent) THEN PRINT "1"; ELSE PRINT "0";
 NEXT
 PRINT " "
LOOP UNTIL INTvalue& = 0 'zero entry quits
```
  
```vb
0001011110100111
```
  


#### SEE ALSO
* [OR](./OR.md) , [XOR](./XOR.md) , [NOT](./NOT.md) (logical operators)
* [AND](./AND.md) (boolean)
* Binary , Boolean
