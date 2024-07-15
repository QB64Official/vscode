# NOT

NOT is a [boolean](boolean.md) logical operator that will change a false statement to a true one and vice-versa.

  

## Syntax

*True* = -1: *False* = NOT True
  

## Description

* In QBasic, True = -1 and False = 0 in boolean logic and evaluation statements.
* NOT evaluates a value and returns the bitwise opposite, meaning that NOT 0 = -1.
* Often called a negative logic operator, it returns the opposite of a value as true or false.
* Values are changed by their bit values so that each bit is changed to the opposite of on or off. See example 3 below.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

```                Table 4: The logical operations and its results.         In this table, **A** and **B** are the [Expressions](Expressions.md) to invert or combine.               Both may be results of former [Boolean](Boolean.md) evaluations.   ┌────────────────────────────────────────────────────────────────────────┐   │                           **Logical Operations**                           │   ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤   │   **A**   │   **B**   │ NOT **B** │ **A** [AND](AND.md) **B** │ **A** [OR](OR.md) **B** │ **A** [XOR](XOR.md) **B** │ **A** [EQV](EQV.md) **B** │ **A** [IMP](IMP.md) **B** │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **true**  │ false │  true   │ true   │  false  │  true   │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **false** │ true  │  false  │ true   │  true   │  false  │  false  │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **true**  │ false │  false  │ true   │  true   │  false  │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **false** │ true  │  false  │ false  │  false  │  true   │  true   │   └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘    **Note:** In most BASIC languages incl. QB64 these are **bitwise** operations,          hence the logic is performed for each corresponding bit in both          operators, where **true** or **false** indicates whether a bit is **set** or          **not set**. The outcome of each bit is then placed into the respective          position to build the bit pattern of the final result value.     As all [Relational Operations](Relational Operations.md) return negative one (-1, **all bits set**) for     **true** and zero (0, **no bits set**) for **false**, this allows us to use these     bitwise logical operations to invert or combine any relational checks,     as the outcome is the same for each bit and so always results into a             **true** (-1) or **false** (0) again for further evaluations.  
```

  

## Examples

*Example 1:* Alternating between two conditions in a program loop.

``` [DO](DO.md) switch = NOT switch       'NOT changes value from -1 to 0 and vice-versa [LOCATE](LOCATE.md) 10, 38 [IF](IF.md) switch [THEN](THEN.md) [PRINT](PRINT.md) "True!" [ELSE](ELSE.md) [PRINT](PRINT.md) "False" [SLEEP](SLEEP.md) k$ = [INKEY$](INKEY$.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) k$ = [CHR$](CHR$.md)(27) ' escape key quit  
```

  

*Example 2:* Reading a file until it reaches the End Of File.

``` DO WHILE NOT EOF(1)   INPUT #1, data1, data2, data3 LOOP  
```

*Explanation:* [EOF](EOF.md) will return 0 until a file ends. NOT converts 0 to -1 so that the loop continues to run. When EOF becomes -1, NOT converts it to 0 to end the loop.
  

*Example 3:* So why does **NOT 5 = -6**? Because NOT changes every bit of a value into the opposite:

``` [PRINT](PRINT.md) NOT 5 [PRINT](PRINT.md) ReadBits 5 ReadBits -6  [SUB](SUB.md) ReadBits (n [AS](AS.md) [INTEGER](INTEGER.md)) 'change type value and i bit reads for other whole type values [FOR](FOR.md) i = 15 [TO](TO.md) 0 [STEP](STEP.md) -1 'see the 16 bit values     [IF](IF.md) n [AND](AND.md) "AND (boolean)") 2 ^ i [THEN](THEN.md) [PRINT](PRINT.md) "1"; [ELSE](ELSE.md) [PRINT](PRINT.md) "0"; [NEXT](NEXT.md) [PRINT](PRINT.md) [END SUB](END SUB.md)  
```

``` -6  0000000000000101 1111111111111010  
```

*Explanation:* The bit values of an [INTEGER](INTEGER.md) are 2 [_BYTEs](_BYTEs.md) and each bit is an exponent of 2 from 15 to 0 (16 bits). Thus comparing the numerical value with those exponents using [AND](AND.md) reveals the bit values as "1" for bits on or "0" for bits off as text.
QB64 can use [&B](&B.md) to convert the above [_BIT](_BIT.md) values back to [INTEGER](INTEGER.md) or [_BYTE](_BYTE.md) values as shown below:

``` '16 bit INTEGER values from -32768 to 32767 a% = [&B](&B.md)0000000000000101 [PRINT](PRINT.md) a% b% = [&B](&B.md)1111111111111010 [PRINT](PRINT.md) b% '8 bit BYTE values from -128 to 127 a%% = [&B](&B.md)00000101 [PRINT](PRINT.md) a%% b%% = [&B](&B.md)11111010 [PRINT](PRINT.md) b%%  
```

  

## See also

* [_BIT](_BIT.md), [&B](&B.md), [_BYTE](_BYTE.md)
* [AND](AND.md), [XOR](XOR.md), [OR](OR.md)
* [Binary](Binary.md), [Boolean](Boolean.md)
* [Mathematical Operations](Mathematical Operations.md)

  
