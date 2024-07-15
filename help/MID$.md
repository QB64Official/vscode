# MID$

The **MID$** statement substitutes one or more new characters for existing characters of a previously defined [STRING](STRING.md).

  

## Syntax

MID$(*baseString$*, *startPosition%*[, *bytes%*]) = *replacementString$*
  

## Parameters

* The *baseString$* variable must exist and be large enough to contain the *replacementString$*.
* *startPosition%* specifies the string character position to start the overwrite.
* *bytes%* or number of characters is optional. Excess byte lenghts are ignored.
* The *replacementString$* should be as long as the byte length reserved.
* The length of the original string is not changed in any case. If *replacementString$* is longer, it gets clipped.

  

## Examples

Example
Using [INSTR](INSTR.md) to locate the string positions and a **MID$** statement to change the words.

```  text$ = "The cats and dogs were playing, even though dogs don't like cats."  PRINT text$  start% = 1          ' start cannot be 0 when used in the INSTR function!  [DO](DO.md)    position% = [INSTR](INSTR.md)(start%, text$, "dog")    IF position% THEN            ' when position is a value greater than 0      MID$(text$, position%, 3) = "rat"   ' changes "dog" to "rat" when found      start% = position% + 1     ' advance one position to search rest of string    END IF  LOOP UNTIL position% = 0       ' no other matches found  PRINT text$  
```

``` The cats and dogs were playing, even though dogs don't like cats. The cats and rats were playing, even though rats don't like cats.  
```

  

## See also

* [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [ASC](ASC.md), [ASC (function)](ASC (function).md) "ASC (function)")
* [LEFT$](LEFT$.md), [RIGHT$](RIGHT$.md)
* [INSTR](INSTR.md), [ASCII](ASCII.md), [STR$](STR$.md), [HEX$](HEX$.md), [Bitmaps](Bitmaps.md)
* [MKI$](MKI$.md), [MKL$](MKL$.md), [MKS$](MKS$.md), [MKD$](MKD$.md)

  
