# _CONTROLCHR

The _CONTROLCHR statement can be used to turn OFF control character attributes and allow them to be printed.

  

## Syntax

_CONTROLCHR {OFF|ON}
  

## Description

* The [OFF](OFF.md) clause allows control characters 0 to 31 to be printed and not format printing as normal text characters.

For example: **PRINT CHR$(13)** 'will not move the cursor to the next line and **PRINT CHR$(9)** 'will not tab.
* The default [ON](ON.md) statement allows [Control Characters](Control Characters.md) to be used as control commands where some will not print or will format prints.
* **Note:** File prints may be affected also when using Carriage Return or Line Feed/Form Feed formatting.
* The QB64 IDE may allow Alt + number pad character entries, but they must be inside of [STRING](STRING.md) values. Otherwise the IDE may not recognize them.

  

## Examples

*Example:* Printing the 255 [ASCII](ASCII.md) characters in [SCREEN](SCREEN.md) 0 with 32 colors.

``` [DIM](DIM.md) i [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md) [WIDTH](WIDTH.md) 40, 25 [CLS](CLS.md) _CONTROLCHR [OFF](OFF.md) i = 0 [DO](DO.md)     [PRINT](PRINT.md) [CHR$](CHR$.md)(i);     i = i + 1     [IF](IF.md) (i [AND](AND.md) "AND (boolean)") &HF) = 0 [THEN](THEN.md) [PRINT](PRINT.md) [LOOP WHILE](LOOP WHILE.md) i [LOCATE](LOCATE.md) 1, 20 [DO](DO.md)     [COLOR](COLOR.md) i [AND](AND.md) &HF [OR](OR.md) (i [AND](AND.md) &H80) \ &H8, (i [AND](AND.md) &H70) \ &H10     [PRINT](PRINT.md) [CHR$](CHR$.md)(i);     i = i + 1     [IF](IF.md) (i [AND](AND.md) "AND (boolean)") &HF) = 0 [THEN](THEN.md) [LOCATE](LOCATE.md) 1 + i \ &H10, 20 [LOOP WHILE](LOOP WHILE.md) i [END](END.md)  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_CONTROLCHR (function)](_CONTROLCHR (function).md) "CONTROLCHR (function)")
* [CHR$](CHR$.md), [ASC (function)](ASC (function).md) "ASC (function)")
* [INKEY$](INKEY$.md), [_KEYHIT](_KEYHIT.md)
* [ASCII](ASCII.md)
* [Control Characters](Control Characters.md)

  
