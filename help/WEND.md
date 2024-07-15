# WHILE...WEND

The WHILE...WEND statement is used to repeat a block of statements while the condition is met.

  

## Syntax

[WHILE](WHILE.md) *condition*
.
.
.
[WEND](WEND.md)
  

## Description

* *condition* is a numeric expression used to determine if the loop will execute.
* *statements* will execute repeatedly while *condition* is a non-zero value.
* [EXIT](EXIT.md) WHILE can be used for emergency exits from the loop in QB64 only.
* A [DO...LOOP](DO...LOOP.md) can use the same DO WHILE condition to get the same results.
* WHILE loops only run if the WHILE condition is True.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

## Examples

*Example 1:* Reading an entire file. Example assumes the program has a [file opened](file opened.md) as #1

``` [OPEN](OPEN.md) "Readme.txt" FOR [INPUT](INPUT.md) "INPUT (file mode)") AS #1 WHILE [NOT](NOT.md) [EOF](EOF.md)(1)     [_LIMIT](_LIMIT.md) 1                                    'limit line prints to one per second     [LINE INPUT #](LINE INPUT #.md) "LINE INPUT (file statement)")1, text$     IF [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) THEN [EXIT](EXIT.md) [WHILE](WHILE.md)        'ESC key exits     [PRINT](PRINT.md) text$ [WEND](WEND.md)  
```

*Example 2:* Clearing the keyboard buffer.

``` [WHILE](WHILE.md) [INKEY$](INKEY$.md) <> "" : [WEND](WEND.md)  
```

  

## See also

* [DO...LOOP](DO...LOOP.md)
* [FOR...NEXT](FOR...NEXT.md)
* [UNTIL](UNTIL.md)
* [_CONTINUE](_CONTINUE.md)

  
