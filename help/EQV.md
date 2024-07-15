# EQV

The EQV operator returns a value based on the *equivalence* of two conditions or values.

  

## Syntax

*result* = *firstValue* EQV *secondValue*
  

## Description

* Returns true (-1) when both values are the same (*equivalent*).
* Turns a bit on if both bits are the same, turns a bit off if both bits are different.

```                Table 4: The logical operations and its results.         In this table, **A** and **B** are the [Expressions](Expressions.md) to invert or combine.               Both may be results of former [Boolean](Boolean.md) evaluations.   ┌────────────────────────────────────────────────────────────────────────┐   │                           **Logical Operations**                           │   ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤   │   **A**   │   **B**   │ [NOT](NOT.md) **B** │ **A** [AND](AND.md) **B** │ **A** [OR](OR.md) **B** │ **A** [XOR](XOR.md) **B** │ **A** EQV **B** │ **A** [IMP](IMP.md) **B** │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **true**  │ false │  true   │ true   │  false  │  true   │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **false** │ true  │  false  │ true   │  true   │  false  │  false  │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **true**  │ false │  false  │ true   │  true   │  false  │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **false** │ true  │  false  │ false  │  false  │  true   │  true   │   └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘    **Note:** In most BASIC languages incl. QB64 these are **bitwise** operations,          hence the logic is performed for each corresponding bit in both          operators, where **true** or **false** indicates whether a bit is **set** or          **not set**. The outcome of each bit is then placed into the respective          position to build the bit pattern of the final result value.     As all [Relational Operations](Relational Operations.md) return negative one (-1, **all bits set**) for     **true** and zero (0, **no bits set**) for **false**, this allows us to use these     bitwise logical operations to invert or combine any relational checks,     as the outcome is the same for each bit and so always results into a             **true** (-1) or **false** (0) again for further evaluations.  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [Binary](Binary.md)
* [Boolean](Boolean.md)

  
