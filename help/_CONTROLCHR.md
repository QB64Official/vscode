## _CONTROLCHR
---

### The _CONTROLCHR statement can be used to turn OFF control character attributes and allow them to be printed.

#### SYNTAX

`_CONTROLCHR {OFF|ON}`

#### DESCRIPTION
* The [OFF](./OFF.md) clause allows control characters 0 to 31 to be printed and not format printing as normal text characters.


#### EXAMPLES
##### Example: Printing the 255 ASCII characters in SCREEN 0 with 32 colors.
```vb
DIM i AS _UNSIGNED _BYTE
WIDTH 40, 25
CLS
_CONTROLCHR OFF
i = 0
DO
   PRINT CHR$(i);
   i = i + 1
   IF (i AND &HF) = 0 THEN PRINT
LOOP WHILE i
LOCATE 1, 20
DO
   COLOR i AND &HF OR (i AND &H80) \ &H8, (i AND &H70) \ &H10
   PRINT CHR$(i);
   i = i + 1
   IF (i AND &HF) = 0 THEN LOCATE 1 + i \ &H10, 20
LOOP WHILE i
END
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_CONTROLCHR](./_CONTROLCHR.md) (function)
* CHR$ , [ASC](./ASC.md) (function)
* INKEY$ , [_KEYHIT](./_KEYHIT.md)
* ASCII
* Control Characters
