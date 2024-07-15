# OR

The OR numerical operator returns a comparative bit value of 1 if either value's bit is on.

  

## Syntax

*result* = firstValue OR secondValue
  

## Description

* If both bits are off, it returns 0.
* If one or both bits are on then it returns 1.
* OR never turns off a bit and can be used only to turn a bit on.

```                Table 4: The logical operations and its results.         In this table, **A** and **B** are the [Expressions](Expressions.md) to invert or combine.               Both may be results of former [Boolean](Boolean.md) evaluations.   ┌────────────────────────────────────────────────────────────────────────┐   │                           **Logical Operations**                           │   ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤   │   **A**   │   **B**   │ [NOT](NOT.md) **B** │ **A** [AND](AND.md) **B** │ **A** OR **B** │ **A** [XOR](XOR.md) **B** │ **A** [EQV](EQV.md) **B** │ **A** [IMP](IMP.md) **B** │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **true**  │ false │  true   │ true   │  false  │  true   │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **false** │ true  │  false  │ true   │  true   │  false  │  false  │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **true**  │ false │  false  │ true   │  true   │  false  │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **false** │ true  │  false  │ false  │  false  │  true   │  true   │   └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘    **Note:** In most BASIC languages incl. QB64 these are **bitwise** operations,          hence the logic is performed for each corresponding bit in both          operators, where **true** or **false** indicates whether a bit is **set** or          **not set**. The outcome of each bit is then placed into the respective          position to build the bit pattern of the final result value.     As all [Relational Operations](Relational Operations.md) return negative one (-1, **all bits set**) for     **true** and zero (0, **no bits set**) for **false**, this allows us to use these     bitwise logical operations to invert or combine any relational checks,     as the outcome is the same for each bit and so always results into a             **true** (-1) or **false** (0) again for further evaluations.  
```

  

## Examples

*Example 1:* OR always turns bits on! Never off.

```  a% = 5 ' 101 binary  b% = 4 ' 100 binary  results% = a% OR b%  ' still 101 binary using OR  [PRINT](PRINT.md) "Results% ="; results%  
```

```  Results% = 5  
```

  

*Example 2:* Turning a data register bit on.

```    address% = 888    'parallel port data register    bytevalue% = [INP](INP.md)(address%)    [OUT](OUT.md) address%, bytevalue% OR 4  
```

*Explanation:* The third register bit is only turned on if it was off. This ensures that a bit is set. OR could set more bits on with a sum of bit values such as: OUT address%, 7 would turn the first, second and third bits on. 1 + 2 + 4 = 7
  

## See also

* [AND](AND.md), [XOR](XOR.md)
* [AND (boolean)](AND (boolean).md) "AND (boolean)"), [OR (boolean)](OR (boolean).md) "OR (boolean)")
* [Binary](Binary.md), [Boolean](Boolean.md)

  
