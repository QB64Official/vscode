# LEFT$

The LEFT$ string function returns a number of characters from the left of a [STRING](STRING.md).

  

## Syntax

LEFT$(*stringValue$*, *numberOfCharacters%*)
  

## Parameters

* *stringValue$* can be any [STRING](STRING.md) literal or variable.
* *numberOfCharacters%* [INTEGER](INTEGER.md) determines the number of characters to return from left of string.

  

## Description

* If the number of characters exceeds the string length the entire string is returned. Use [LEN](LEN.md) to determine a string's length.
* LEFT$ returns always start at the first character of the string, even if it's a space. [LTRIM$](LTRIM$.md) can remove leading spaces.
* ***numberOfCharacters%* cannot be a negative value.**

  

## Examples

*Example 1:* Getting the left portion of a string value.

``` name$ = "Tom Williams"  First$ = LEFT$(name$, 3)  PRINT First$  
```

``` Tom  
```

  

*Example 2:* A replace function using LEFT$ and [RIGHT$](RIGHT$.md) with [INSTR](INSTR.md) to insert a different length word into an existing string.

``` text$ = "This is my sentence to change my words." [PRINT](PRINT.md) text$ oldword$ = "my" newword$ = "your"  x = Replace(text$, oldword$, newword$) [IF](IF.md) x [THEN](THEN.md) [PRINT](PRINT.md) text$; x  [END](END.md)  [FUNCTION](FUNCTION.md) Replace (text$, old$, new$) 'can also be used as a [SUB](SUB.md) without the count assignment [DO](DO.md)   find = [INSTR](INSTR.md)(start + 1, text$, old$) 'find location of a word in text   [IF](IF.md) find [THEN](THEN.md)     count = count + 1     first$ = LEFT$(text$, find - 1) 'text before word including spaces     last$ = [RIGHT$](RIGHT$.md)(text$, [LEN](LEN.md)(text$) - (find + [LEN](LEN.md)(old$) - 1)) 'text after word     text$ = first$ + new$ + last$   [END IF](END IF.md)   start = find [LOOP](LOOP.md) [WHILE](WHILE.md) find Replace = count 'function returns the number of replaced words. Comment out in SUB [END FUNCTION](END FUNCTION.md)  
```

``` This is my sentence to change my words. This is your sentence to change your words. 
```

*Note:* The [MID$](MID$.md) statement can only substitute words or sections of the original string length. It cannot change the string length.
  

## See also

* [RIGHT$](RIGHT$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [LTRIM$](LTRIM$.md), [RTRIM$](RTRIM$.md)
* [INSTR](INSTR.md), [LEN](LEN.md)

  
