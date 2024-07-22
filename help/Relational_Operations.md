## Relational Operations
---
<blockquote>

### QB64 supports several relational operations, which are binary operations that test numeric or string values and return an INTEGER value representing a boolean true (-1) or false (0) result. These operations are primarily used in expressions where a condition is required, such as the IF...THEN statement.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 3: The relational operations for condition checking.

In this table, A and B are the Expressions to compare. Both must represent
the same general type, i.e. they must result into either numerical values
or STRING values. If a test succeeds, then true (-1) is returned, false (0)
    if it fails, which both can be used in further Boolean evaluations.
┌─────────────────────────────────────────────────────────────────────────┐
│                          Relational Operations                          │
├────────────┬───────────────────────────────────────────┬────────────────┤
│ Operation  │                Description                │ Example usage  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A = B    │ Tests if A is equal to B.                 │ IF A = B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <> B   │ Tests if A is not equal to B.             │ IF A <> B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A < B    │ Tests if A is less than B.                │ IF A < B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A > B    │ Tests if A is greater than B.             │ IF A > B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <= B   │ Tests if A is less than or equal to B.    │ IF A <= B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A >= B   │ Tests if A is greater than or equal to B. │ IF A >= B THEN │
└────────────┴───────────────────────────────────────────┴────────────────┘
  The operations should be very obvious for numerical values. For strings
  be aware that all checks are done case sensitive (i.e. "Foo" <> "foo").
  The equal/not equal check is pretty much straight forward, but for the
  less/greater checks the ASCII value of the first different character is
                         used for decision making:

  E.g. "abc" is less than "abd", because in the first difference (the 3rd
       character) the "c" has a lower ASCII value than the "d".

  This behavior may give you some subtle results, if you are not aware of
                  the ASCII values and the written case:

  E.g. "abc" is greater than "abD", because the small letters have higher
       ASCII values than the capital letters, hence "c" > "D". You may use
       LCASE$ or UCASE$ to make sure both strings have the same case.
```
  


##### Example: When a user enters a value greater than or equal to 5, the boolean statement returns -1 . Zero is printed otherwise.
```vb
INPUT "Enter a value from 1 to 10: ", number
PRINT number >= 5
```
  


##### Example: Shows that the left hand string sets the number of characters to evaluate when using > or < and are not equal when longer.
```vb
PRINT "abc" < "abcd"
PRINT "abc" = "abc"
PRINT "abc" = "abcd"
PRINT "abcd" > "abc"
```
  


##### Example: Shows that the left hand string sets the number of characters to evaluate when using > or < and are not equal when longer.
```vb
0
-1
0
-1
```
  
```vb
Table 4: The logical operations and its results.

      In this table, A and B are the Expressions to invert or combine.
             Both may be results of former Boolean evaluations.
 ┌────────────────────────────────────────────────────────────────────────┐
 │                           Logical Operations                           │
 ├───────┬───────┬───────┬─────────┬────────┬─────────┬─────────┬─────────┤
 │   A   │   B   │ NOT B │ A AND B │ A OR B │ A XOR B │ A EQV B │ A IMP B │
 ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
 │ true  │ true  │ false │  true   │ true   │  false  │  true   │  true   │
 ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
 │ true  │ false │ true  │  false  │ true   │  true   │  false  │  false  │
 ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
 │ false │ true  │ false │  false  │ true   │  true   │  false  │  true   │
 ├───────┼───────┼───────┼─────────┼────────┼─────────┼─────────┼─────────┤
 │ false │ false │ true  │  false  │ false  │  false  │  true   │  true   │
 └───────┴───────┴───────┴─────────┴────────┴─────────┴─────────┴─────────┘
  Note: In most BASIC languages incl. QB64 these are bitwise operations,
        hence the logic is performed for each corresponding bit in both
        operators, where true or false indicates whether a bit is set or
        not set. The outcome of each bit is then placed into the respective
        position to build the bit pattern of the final result value.

  As all Relational Operations return negative one (-1, all bits set) for
   true and zero (0, no bits set) for false, this allows us to use these
   bitwise logical operations to invert or combine any relational checks,
   as the outcome is the same for each bit and so always results into a
           true (-1) or false (0) again for further evaluations.
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [IF](./IF.md)...[THEN](./THEN.md)
* [DO](./DO.md)...[LOOP](./LOOP.md) , [WHILE](./WHILE.md)...[WEND](./WEND.md)
* [CASE](./CASE.md) [IS](./IS.md) , [NOT](./NOT.md)
* [AND](./AND.md) , [OR](./OR.md) , [XOR](./XOR.md) , [EQV](./EQV.md) , [IMP](./IMP.md)

</blockquote>
