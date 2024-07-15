# ELSEIF

ELSEIF is used in an [IF...THEN](IF...THEN.md) block statement to offer an alternative condition.

  

## Syntax

[IF](IF.md) *condition* [THEN](THEN.md)
*{code}*
⋮
ELSEIF *condition2* [THEN](THEN.md)
*{code}*
⋮
[ELSE](ELSE.md)
*{alternative-code}*
⋮
[END IF](END IF.md)
  

## Description

* ELSEIF statements require a **separate** code block line with [THEN](THEN.md) for each alternative condition.
* There can be more than one [ELSE](ELSE.md) IF statement in a single-line IF statement.
* If there is only one possible alternative condition (such as 0 or [NOT](NOT.md) 0), use [ELSE](ELSE.md) instead.
* If the comparisons are based on multiple conditions being true, it may require many ELSEIF comparisons. ELSE could help cover some of those conditions.
* You can use [SELECT CASE](SELECT CASE.md) when IF blocks have a long list of alterative ELSEIF conditions.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

## Examples

*Example 1:* IF statement using ELSE IF in one statement line.

```   IF x = 100 THEN COLOR 10: PRINT x ELSE IF x > 100 THEN COLOR 12: PRINT x ELSE PRINT "< 100"   
```

  

*Example 2:* IF statement block

```   IF x = 100 THEN ' must place ANY code on next line!   COLOR 10: PRINT x ELSEIF x > 100 THEN COLOR 12: PRINT x ELSE : PRINT "< 100" END IF   
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [ELSE](ELSE.md), [END IF](END IF.md)
* [IF...THEN](IF...THEN.md)

  
