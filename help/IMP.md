# IMP

The IMP logical operator converts the result of two comparative values and returns a bit result.

  

## Syntax

*result* = *firstValue* IMP *secondValue*
  

## Description

* Returns a different result from [AND](AND.md), [OR](OR.md) or [XOR](XOR.md) - see truth table below.
* Evaluates if *firstValue* ***imp**lies* *secondValue*.
	+ If *firstValue* is true then *secondValue* must also be true.
	+ So if *firstValue* is true, and *secondValue* false, then the condition is false, otherwise it is true (see table below).

```                Table 4: The logical operations and its results.         In this table, **A** and **B** are the [Expressions](Expressions.md) to invert or combine.               Both may be results of former [Boolean](Boolean.md) evaluations.   ┌────────────────────────────────────────────────────────────────────────┐   │                           **Logical Operations**                           │   ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤   │   **A**   │   **B**   │ [NOT](NOT.md) **B** │ **A** [AND](AND.md) **B** │ **A** [OR](OR.md) **B** │ **A** [XOR](XOR.md) **B** │ **A** [EQV](EQV.md) **B** │ **A** IMP **B** │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **true**  │ false │  true   │ true   │  false  │  true   │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **false** │ true  │  false  │ true   │  true   │  false  │  false  │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **true**  │ false │  false  │ true   │  true   │  false  │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **false** │ true  │  false  │ false  │  false  │  true   │  true   │   └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘    **Note:** In most BASIC languages incl. QB64 these are **bitwise** operations,          hence the logic is performed for each corresponding bit in both          operators, where **true** or **false** indicates whether a bit is **set** or          **not set**. The outcome of each bit is then placed into the respective          position to build the bit pattern of the final result value.     As all [Relational Operations](Relational Operations.md) return negative one (-1, **all bits set**) for     **true** and zero (0, **no bits set**) for **false**, this allows us to use these     bitwise logical operations to invert or combine any relational checks,     as the outcome is the same for each bit and so always results into a             **true** (-1) or **false** (0) again for further evaluations.  
```

  

## See also

* [Binary](Binary.md)
* [Boolean](Boolean.md)

  
