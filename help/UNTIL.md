# UNTIL

The **UNTIL** condition is used in [DO...LOOP](DO...LOOP.md) exit verifications.

  

## Syntax

DO [UNTIL] evaluation
.
.
.
LOOP UNTIL evaluation
  

* Only one conditional evaluation can be made at the start or the end of a [DO...LOOP](DO...LOOP.md).
* DO UNTIL evaluates a condition before and inside of the loop. The loop may not run at all.
* LOOP UNTIL evaluates a condition inside of the loop. It has to loop once.
* Skips the loop or loops until an evaluation becomes True.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

## See also

* [WHILE](WHILE.md)
* [DO...LOOP](DO...LOOP.md)
* [WHILE...WEND](WHILE...WEND.md)

  
