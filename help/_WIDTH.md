## WIDTH
---

### The WIDTH statement changes the text dimensions of certain SCREEN modes or devices.

#### PARAMETERS
* When parameters are not specified, columns defaults to 80 with 25 (30 in [SCREEN](./SCREEN.md) 11 or 12) rows.


#### DESCRIPTION
* [WIDTH](./WIDTH.md) should be used after a program [SCREEN](./SCREEN.md) statement. It does not affect screen graphics or graphic coordinates.
* Affects [SCREEN](./SCREEN.md) 0 Window size and alters the text block size of each screen mode listed in QBasic:


#### EXAMPLES
```vb
$CONSOLE:ONLY
WIDTH 80, 25, 300, 100
CLS
FOR i = 1 TO 97
   PRINT i
NEXT
PRINT STRING$(100, "0") + STRING$(100, "1") + STRING$(100, "2") 'print the 100's placeholders
FOR j = 1 TO 3
   FOR i = 0 TO 9
       PRINT STRING$(10, _TRIM$(STR$(i))); 'print the 10's placeholders
   NEXT
NEXT

FOR j = 1 TO 30
   FOR i = 0 TO 9
       PRINT _TRIM$(STR$(i)); 'print the 1's placeholders.
   NEXT
NEXT

SLEEP
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [SCREEN](./SCREEN.md) , [COLOR](./COLOR.md) , [OUT](./OUT.md)
* [_PRINTWIDTH](./_PRINTWIDTH.md)
* [_WIDTH](./_WIDTH.md) (function) , [_HEIGHT](./_HEIGHT.md)
* [_FONT](./_FONT.md) , [_FONTWIDTH](./_FONTWIDTH.md) , [_FONTHEIGHT](./_FONTHEIGHT.md)
