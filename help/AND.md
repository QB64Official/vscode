# AND

The logical AND numerical operator compares two values in respect of their bits. If both bits at a certain position in both values are set, then that bit position is set in the result.

  

## Syntax

*result* = *firstvalue* AND *secondvalue*
  

## Description

* AND compares the bits of the *firstvalue* against the bits of the *secondvalue*, the result is stored in the *result* variable.
* If both bits are on (1) then the result is on (1).
* All other conditions return 0 (bit is off).
* AND is often used to see if a bit is on by comparing a value to an exponent of 2.
* Can turn off a bit by subtracting the bit on value from 255 and using that value to AND a byte value.

```                Table 4: The logical operations and its results.         In this table, **A** and **B** are the [Expressions](Expressions.md) to invert or combine.               Both may be results of former [Boolean](Boolean.md) evaluations.   ┌────────────────────────────────────────────────────────────────────────┐   │                           **Logical Operations**                           │   ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤   │   **A**   │   **B**   │ [NOT](NOT.md) **B** │ **A** AND **B** │ **A** [OR](OR.md) **B** │ **A** [XOR](XOR.md) **B** │ **A** [EQV](EQV.md) **B** │ **A** [IMP](IMP.md) **B** │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **true**  │ false │  true   │ true   │  false  │  true   │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **false** │ true  │  false  │ true   │  true   │  false  │  false  │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **true**  │ false │  false  │ true   │  true   │  false  │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **false** │ true  │  false  │ false  │  false  │  true   │  true   │   └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘    **Note:** In most BASIC languages incl. QB64 these are **bitwise** operations,          hence the logic is performed for each corresponding bit in both          operators, where **true** or **false** indicates whether a bit is **set** or          **not set**. The outcome of each bit is then placed into the respective          position to build the bit pattern of the final result value.     As all [Relational Operations](Relational Operations.md) return negative one (-1, **all bits set**) for     **true** and zero (0, **no bits set**) for **false**, this allows us to use these     bitwise logical operations to invert or combine any relational checks,     as the outcome is the same for each bit and so always results into a             **true** (-1) or **false** (0) again for further evaluations.  
```

  

## Examples

*Example 1:*

```          101          AND          011         -----          001  
```

The 101 bit pattern equals 5 and the 011 bit pattern equals 3, it returns the bit pattern 001 which equals 1. Only the Least Significant Bits (LSB) match. So decimal values 5 AND 3 = 1.
  

*Example 2:*

```       11111011         AND       11101111      ----------       11101011  
```

Both bits have to be set for the resulting bit to be set. You can use the AND operator to get one byte of a two byte integer this way:
firstbyte = twobyteint AND 255
Since 255 is 11111111 in binary, it will represent the first byte completely when compared with AND.
To find the second (HI) byte's decimal value of two byte [INTEGERs](INTEGERs.md) use: secondbyte = twobyteint \ 256
  

*Example 3:* Finding the binary bits on in an [INTEGER](INTEGER.md) value.

```    DO   [INPUT](INPUT.md) "Enter Integer value from -32768 to 32767 (Enter quits): ", INTvalue&   IF INTvalue& < -32768 OR INTvalue& > 32767 OR INTval& = 0 THEN [EXIT DO](EXIT DO.md)   [FOR](FOR.md) exponent = 15 [TO](TO.md) 0 [STEP](STEP.md) -1     [IF](IF.md) (INTvalue& AND 2 ^ exponent) [THEN](THEN.md) [PRINT](PRINT.md) "1"; [ELSE](ELSE.md) [PRINT](PRINT.md) "0";   [NEXT](NEXT.md)   PRINT " "  LOOP UNTIL INTvalue& = 0 'zero entry quits   
```

Example output for 6055.

``` 0001011110100111  
```

*Note:* The value of 32767 sets 15 bits. -1 sets all 16 bits. Negative values will all have the highest bit set. Use [LONG](LONG.md) variables for input values to prevent overflow errors.
  

## See also

* [OR](OR.md), [XOR](XOR.md), [NOT](NOT.md) (logical operators)
* [AND (boolean)](AND (boolean).md) "AND (boolean)")
* [Binary](Binary.md), [Boolean](Boolean.md)

  
