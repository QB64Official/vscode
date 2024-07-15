# IF...THEN

IF...THEN statements make boolean (true or false) evaluations to automate program decision making.

  

## Syntax

### Single-line

[IF](IF.md) *conditionStatement* [THEN](THEN.md) *{code}* [ELSE](ELSE.md) *{alternativeCode}*
[IF](IF.md) *conditionStatement* [GOTO](GOTO.md) *lineLabel*
### Block

[IF](IF.md) *conditionStatement* [THEN](THEN.md)
*{code}*
⋮
[ELSEIF](ELSEIF.md) *conditionStatement2* [THEN](THEN.md)
*{code}*
⋮
[ELSE](ELSE.md)
*{code}*
⋮
[END IF](END IF.md)
  

## Description

* The *conditionStatement* evaluation by [IF](IF.md) must be true (-1) or a **non-zero numerical value** for the [THEN](THEN.md) *{code}* to be executed.
* Multiple conditional evaluations can be made using inclusive [AND](AND.md) "AND (boolean)") or alternative [OR](OR.md) "OR (boolean)") conditional expressions.
* [THEN](THEN.md) is not required when [GOTO](GOTO.md) is used to send program flow to a line number or label.
* [IF](IF.md) statements can also have alternative evaluations using [ELSEIF](ELSEIF.md) and [ELSE](ELSE.md) conditions.
* When the [IF](IF.md) statement and/or code to be run is more than code line, an [END IF](END IF.md) statement must be used.
* With multiple code lines to run, end the IF statement with THEN and place all of the code on lines below that line.
* Multiple code line block statements require that the IF...THEN, [ELSEIF](ELSEIF.md), [ELSE](ELSE.md) and [END IF](END IF.md) be on separate lines.
* **The IDE may return an error of *[NEXT](NEXT.md) without [FOR](FOR.md)* or *[LOOP](LOOP.md) without [DO](DO.md)* when [END IF](END IF.md) does not end a statement block.**
* The **QB64** IDE will indicate an error in the IF statement line until END IF closes the statement block.
* Use [colons](colons.md) to execute multiple statements in a single-line IF statement.
* An **[underscore](underscore.md)** can be used anywhere after the code on a single-line to continue it to the next line in **QB64**.
* **NOTE:** [STRING](STRING.md) values can only be evaluated in an IF statement if a value is compared to a literal or [CHR$](CHR$.md) string value. **QB64 may not compile literal IF string statements or indicate an IDE coding error.** Use [LEN](LEN.md) or [ASC](ASC.md) "ASC (function)") to compare strings numerically.

  

```          Table 3: The relational operations for condition checking.   In this table, **A** and **B** are the [Expressions](Expressions.md) to compare. Both must represent  the same general type, i.e. they must result into either numerical values  or [STRING](STRING.md) values. If a test succeeds, then **true** (-1) is returned, **false** (0)      if it fails, which both can be used in further [Boolean](Boolean.md) evaluations.  ┌─────────────────────────────────────────────────────────────────────────┐  │                          **[Relational Operations](Relational Operations.md)**                          │  ├────────────┬───────────────────────────────────────────┬────────────────┤  │ **Operation**  │                **Description**                │ **Example usage**  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [=](=.md) B    │ Tests if A is **equal** to B.                 │ [IF](IF.md) A [=](=.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<>](<>.md) B   │ Tests if A is **not equal** to B.             │ [IF](IF.md) A [<>](<>.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<](<.md) B    │ Tests if A is **less than** B.                │ [IF](IF.md) A [<](<.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>](>.md) B    │ Tests if A is **greater than** B.             │ [IF](IF.md) A [>](>.md) B [THEN](THEN.md)  │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [<=](<=.md) B   │ Tests if A is **less than or equal** to B.    │ [IF](IF.md) A [<=](<=.md) B [THEN](THEN.md) │  ├────────────┼───────────────────────────────────────────┼────────────────┤  │   A [>=](>=.md) B   │ Tests if A is **greater than or equal** to B. │ [IF](IF.md) A [>=](>=.md) B [THEN](THEN.md) │  └────────────┴───────────────────────────────────────────┴────────────────┘    The operations should be very obvious for numerical values. For strings    be aware that all checks are done **case sensitive** (i.e. "Foo" <> "foo").    The **equal**/**not equal** check is pretty much straight forward, but for the    **less**/**greater** checks the [ASCII](ASCII.md) value of the first different character is                           used for decision making:     **E.g.** "abc" is **less** than "abd", because in the first difference (the 3rd         character) the "c" has a lower [ASCII](ASCII.md) value than the "d".     This behavior may give you some subtle results, if you are not aware of                    the [ASCII](ASCII.md) values and the written case:     **E.g.** "abc" is **greater** than "abD", because the small letters have higher         [ASCII](ASCII.md) values than the capital letters, hence "c" > "D". You may use         [LCASE$](LCASE$.md) or [UCASE$](UCASE$.md) to make sure both strings have the same case.  
```

  

  

* [AND (boolean)](AND (boolean).md) "AND (boolean)") can be used to add extra conditions to a boolean statement evaluation.
* [OR (boolean)](OR (boolean).md) "OR (boolean)") can be used to add alternate conditions to a boolean statement evaluation.
* Parenthesis are allowed inside of boolean statements to clarify an evaluation.

  

  

```                Table 4: The logical operations and its results.         In this table, **A** and **B** are the [Expressions](Expressions.md) to invert or combine.               Both may be results of former [Boolean](Boolean.md) evaluations.   ┌────────────────────────────────────────────────────────────────────────┐   │                           **Logical Operations**                           │   ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤   │   **A**   │   **B**   │ [NOT](NOT.md) **B** │ **A** [AND](AND.md) **B** │ **A** [OR](OR.md) **B** │ **A** [XOR](XOR.md) **B** │ **A** [EQV](EQV.md) **B** │ **A** [IMP](IMP.md) **B** │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **true**  │ false │  true   │ true   │  false  │  true   │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **true**  │ **false** │ true  │  false  │ true   │  true   │  false  │  false  │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **true**  │ false │  false  │ true   │  true   │  false  │  true   │   ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤   │ **false** │ **false** │ true  │  false  │ false  │  false  │  true   │  true   │   └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘    **Note:** In most BASIC languages incl. QB64 these are **bitwise** operations,          hence the logic is performed for each corresponding bit in both          operators, where **true** or **false** indicates whether a bit is **set** or          **not set**. The outcome of each bit is then placed into the respective          position to build the bit pattern of the final result value.     As all [Relational Operations](Relational Operations.md) return negative one (-1, **all bits set**) for     **true** and zero (0, **no bits set**) for **false**, this allows us to use these     bitwise logical operations to invert or combine any relational checks,     as the outcome is the same for each bit and so always results into a             **true** (-1) or **false** (0) again for further evaluations.  
```

  

## Examples

*Example 1:* In a one line IF statement, only [REM](REM.md) can be used to comment out the action without an [END IF](END IF.md) error:

``` [INPUT](INPUT.md) "Enter a number over or under 100: ", x IF x > 100 [THEN](THEN.md) [PRINT](PRINT.md) x IF x > 100 [THEN](THEN.md) [REM](REM.md) [PRINT](PRINT.md) x  *'*  
```

  

*Example 2:* IF statement blocks require that the IF THEN and END IF statements be separate from the code executed.

``` [INPUT](INPUT.md) "Enter a number over or under 100: ", x IF x > 100 [THEN](THEN.md)   y = 200   [PRINT](PRINT.md) y   [PRINT](PRINT.md) x [END IF](END IF.md)  
```

  

*Example 3:* True or False evaluation of a numerical value executes only when the value is not 0. **Cannot evaluate [STRING](STRING.md) values.**

``` [INPUT](INPUT.md) "Enter a number or just hit Enter: ", x IF x [THEN](THEN.md) [PRINT](PRINT.md) x  
```

Example will only print if a numerical value is True (positive or negative). (Equivalent to: IF x > 0 OR x < 0 THEN evaluation)
  

*Example 4:* Multiple evaluations using parenthesis to determine the order.

``` [INPUT](INPUT.md) "Enter a number over or under 100 or 50: ", value IF (value% > 100 [AND](AND.md) "AND (boolean)") value% < 200) [OR](OR.md) "OR (boolean)") value% = 50 [THEN](THEN.md) [PRINT](PRINT.md) "OK"  
```

  

*Example 5:* Using multiple IF options in a one line statement.

``` [INPUT](INPUT.md) "Enter a number over or under 200: ", x IF x > 200 [THEN](THEN.md) [PRINT](PRINT.md) "High" [ELSEIF](ELSEIF.md) x < 0 [THEN](THEN.md) [PRINT](PRINT.md) "Low" [ELSE](ELSE.md) [PRINT](PRINT.md) "OK"   
```

  

*Example 6:* [STRING](STRING.md) values can be compared using greater than, less than, not equal to or equal to operators only.

``` PRINT "Press a letter key: "; Key$ = [INPUT$](INPUT$.md)(1) PRINT Key$ IF Key$ >= [CHR$](CHR$.md)(65) AND Key$ <= [CHR$](CHR$.md)(90) THEN PRINT "A to Z"  
```

*Explanation:* Long [STRING](STRING.md) expression values are compared by their cumulative [ASCII](ASCII.md) code values.
  

* Floating decimal point numerical values may not be compared as exactly the same value. QB64 will compare them the same.

*Example:* QBasic would print *unequal* in the IF comparison code below even though it is exactly the same value printed.

``` x# = 5 / 10 y# = 6 / 10 z# = x# + y# [PRINT](PRINT.md) x#, y#, z# IF x# + y# = z# [THEN](THEN.md) [PRINT](PRINT.md) "equal" [ELSE](ELSE.md) [PRINT](PRINT.md) "unequal"  
```

Note: QB64 will make the calculation correctly and print *equal*. Change older program code that relies on the error accordingly.
  

## See also

* [ELSEIF](ELSEIF.md), [ELSE](ELSE.md)
* [AND (boolean)](AND (boolean).md) "AND (boolean)"), [OR (boolean)](OR (boolean).md) "OR (boolean)")
* [NOT](NOT.md), [GOTO](GOTO.md)
* [SELECT CASE](SELECT CASE.md)
* [Boolean](Boolean.md) (numerical comparisons return a true or false value)

  
