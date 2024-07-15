# _INSTRREV

The _INSTRREV function searches for a substring inside another string, but unlike [INSTR](INSTR.md) it searches from right to left.

  

## Syntax

*position%* = _INSTRREV([*start%*,] *baseString$*, *subString$*)
  

## Parameters

* The optional literal or variable [INTEGER](INTEGER.md) *start%* indicates where in the *baseString$* the search must start, counted from the left.
* The *baseString$* is a literal or variable [STRING](STRING.md) value to be searched for an exact match including [letter cases](letter cases.md).
* The *subString$* is a literal or variable [STRING](STRING.md) value being searched.

  

## Description

* The function returns the *position%* in the *baseString$* where the *subString$* was found, from right to left.
* *position%* will be 0 if the search found no matches in the base string.
* _INSTRREV returns 0 if an empty *baseString$* is passed, and returns [LEN](LEN.md)(*baseString$*) with an empty *subString$*.
* The *start%* position is useful when making multiple searches in the same string. See the example below.
* The *subString$* should be smaller or equal in [length](length.md) to the *baseString$*, or 0 is returned.
* A *start%* value of 0 or less starts search from the end of the *baseString$* (same as not passing a *start%* parameter).

  

## Examples

*Example 1:* Separating a file name from a full path.

``` fullPath$ = "C:\Documents and Settings\Administrator\Desktop\qb64\internal\c\libqb\os\win\libqb_1_2_000000000000.o" file$ = [MID$](MID$.md) "MID$ (function)")(fullPath$, _INSTRREV(fullPath$, "\") + 1) [PRINT](PRINT.md) file$  
```

``` libqb_1_2_000000000000.o  
```

  

*Example 2:* Searching for multiple instances of a substring inside a base string, going from the end to the start.

``` sentence$ = " This is a string full of spaces, including at start and end... " [PRINT](PRINT.md) sentence$ [DO](DO.md)     findPrevSpace% = _INSTRREV(findPrevSpace% - 1, sentence$, [SPACE$](SPACE$.md)(1))     [IF](IF.md) findPrevSpace% = 0 [THEN](THEN.md)         [LOCATE](LOCATE.md) 4, 1         [PRINT](PRINT.md) "No more spaces"         [EXIT](EXIT.md) [DO](DO.md)     [END IF](END IF.md)      [LOCATE](LOCATE.md) 2, findPrevSpace%     [PRINT](PRINT.md) "^"     totalSpaces = totalSpaces + 1      [IF](IF.md) findPrevSpace% = 1 [THEN](THEN.md)         [LOCATE](LOCATE.md) 4, 1         [PRINT](PRINT.md) "Last space found at position 1"         [EXIT](EXIT.md) [DO](DO.md)     [END IF](END IF.md) [LOOP](LOOP.md) [PRINT](PRINT.md) "Total spaces found: "; totalSpaces  
```

```  This is a string full of spaces, including at start and end... ^    ^  ^ ^      ^    ^  ^       ^         ^  ^     ^   ^      ^  Last space found at position 1 Total spaces found: 13  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [MID$ (function)](MID$ (function).md) "MID$ (function)"), [INSTR](INSTR.md)
* [SPACE$](SPACE$.md)

  
