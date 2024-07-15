# XOR (boolean)

XOR evaluates two conditions and if either of them is True then it returns True, if both of them are True then it returns False, if both of them are False then it returns False.

  

## Syntax

*condition* XOR *condition2*
  

## Description

* Either *condition* or *condition2* must be True for the evaluation to return True.
* It is called **"exclusive OR"** because the conditions cannot both be True for it to return True like the [OR](OR.md) "OR (boolean)") evaluation.
* *condition* and *condition2* can themselves contain XOR evaluations.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

## Examples

*Example:* Dilemma...

```   True = [NOT](NOT.md) False AndersWon = True PeterWon = True [IF](IF.md) AndersWon = True XOR PeterWon = True [THEN](THEN.md) [PRINT](PRINT.md) "Thank you for your honesty!" [ELSE](ELSE.md) [PRINT](PRINT.md) "You can't both have won (or lost)!" [END IF](END IF.md)   
```

``` You can't both have won (or lost)!  
```

  

## See also

* [OR (boolean)](OR (boolean).md) "OR (boolean)"), [AND (boolean)](AND (boolean).md) "AND (boolean)")
* [IF...THEN](IF...THEN.md)

  
