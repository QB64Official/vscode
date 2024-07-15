# INSTR

The INSTR function searches for the first occurence of a search [STRING](STRING.md) within a base string and returns the position it was found.

  

## Syntax

*position%* = INSTR([*start%*,] *baseString$*, *searchString$*)
  

## Parameters

* The optional literal or variable [INTEGER](INTEGER.md) *start%* indicates where in the *baseString$* the search must start.
* The *baseString$* is a literal or variable [STRING](STRING.md) value to be searched for an exact match including [letter cases](letter cases.md).
* The *searchString$* is a literal or variable [STRING](STRING.md) value being searched.

  

## Description

* The function returns the *position%* in the *baseString$* where the *searchString$* was found.
* *position%* will be 0 if the search found no matches in the base string.
* INSTR returns 0 if an empty *baseString$* is passed, and returns 1 with an empty *searchString$*.
* The *start%* position is useful when making multiple searches in the same string. See the example below.
* The *searchString$* should be smaller or equal in [length](length.md) to the *baseString$*, or 0 is returned.
* Non-zero *position%* return values can be used as a new start position by adding 1 to re-search the base string. See the example below.
* In a loop, INSTR can search an entire file for occurences of certain words. See the [MID$](MID$.md) statement example.

### QBasic/QuickBASIC

* The *start%* position had to be at least 1 or greater when used or there will be an [Illegal function call](Illegal function call.md) error. In **QB64**, a *start%* value of 0 or negative is interpreted as 1 and doesn't generate an error.

  

## Examples

*Example:* Reading more than one instance of a word in a string using the INSTR return value as the start value plus 1.

``` text$ = "The cats and dogs where playing, even though dogs don't like cats." [DO](DO.md)   findcats% = INSTR(findcats% + 1, text$, "cats") ' find another occurance after   [IF](IF.md) findcats% [THEN](THEN.md) [PRINT](PRINT.md) "There is 'cats' in the string at position:"; findcats% [LOOP](LOOP.md) [UNTIL](UNTIL.md) findcats% = 0  findmonkey% = INSTR(text$, "monkeys")  ' find any occurance? PRINT findmonkey%; "'monkeys' were found so it returned:"; findmonkey%  
```

``` There is 'cats' in the string at position: 5 There is 'cats' in the string at position: 62  0 'monkeys' were found so INSTR returned: 0  
```

*Explanation:* When the INSTR return value is 0 there are no more instances of a string in a string so the search loop is exited.
  

## See also

* [_INSTRREV](_INSTRREV.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [LEFT$](LEFT$.md), [RIGHT$](RIGHT$.md)
* [LCASE$](LCASE$.md), [UCASE$](UCASE$.md)
* [STRING](STRING.md), [INTEGER](INTEGER.md)

  
