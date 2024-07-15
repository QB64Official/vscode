# RIGHT$

The **RIGHT$** function returns a set number of characters in a [STRING](STRING.md) variable starting from the end and counting backwards.

  

## Syntax

**RIGHT$(***stringvalue$, numberofcharacters%***)**
  

## Parameters

* The *stringvalue$* can be any string of [ASCII](ASCII.md) characters as a [STRING](STRING.md) variable.
* The *numberofcharacters* [INTEGER](INTEGER.md) value determines the number of characters to return from the right end of the string.

  

## Description

* If the number of characters exceeds the string length([LEN](LEN.md)) the entire string is returned.
* RIGHT$ returns always start at the last character of the string, even if a space. [RTRIM$](RTRIM$.md) can remove ending spaces.
* **Number of characters cannot be a negative value.**

  

*Example 1:* Getting the right portion of a string value such as a person's last name.

``` name$ = "Tom Williams"  Last$ = RIGHT$(name$, [LEN](LEN.md)(name$) - [INSTR](INSTR.md)(name$, " ")) 'subtract space position from string length  [PRINT](PRINT.md) Last$  
```

``` Williams  
```

  

*Example 2:* Adding the leading zero in single digit [HEX$](HEX$.md) values using RIGHT to take the right two hexadecimal string digits.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) '32 bit screen modes ONLY! red = 255 green = 0 blue = 128  Color32 red, green, blue [PRINT](PRINT.md) "Colored text"  [SUB](SUB.md) Color32 (R, G, B) R = R [AND](AND.md) "AND (boolean)") [&H](&H.md)FF: G = G [AND](AND.md) "AND (boolean)") [&H](&H.md)FF: B = B [AND](AND.md) "AND (boolean)") [&H](&H.md)FF '    limit values to 0 to 255 hexadecimal$ = "[&H](&H.md)FF" + RIGHT$("0" + [HEX$](HEX$.md)(R), 2) + RIGHT$("0" + [HEX$](HEX$.md)(G), 2) + RIGHT$("0" + [HEX$](HEX$.md)(B), 2) [PRINT](PRINT.md) hexadecimal$ [COLOR](COLOR.md) [VAL](VAL.md)(hexadecimal$) [END SUB](END SUB.md)  
```

``` **&HFFFF0080** **Colored text** 
```

*Note:* When a single hexadecimal digit is returned the resulting value will need the leading zero added. Otherwise the hexa- decimal value created will have a byte missing from the value. EX: Color &HFF000000 is valid while &HFF000 is not.
  

## See also

* [LEFT$](LEFT$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [LTRIM$](LTRIM$.md), [RTRIM$](RTRIM$.md)
* [INSTR](INSTR.md), [HEX$](HEX$.md)

  
