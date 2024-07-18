## TAB
---

### The TAB function is used in PRINT and LPRINT statements to move to a specified column position.

#### SYNTAX

`TAB ( column% )`

#### DESCRIPTION
* Space characters are printed until the print cursor reaches the designated column% , overwriting existing characters.
* If a subsequent [TAB](./TAB.md) column% is less than the current position, [TAB](./TAB.md) moves the next print to that column on the next row.
* ASCII CHR$ (9) can be substituted for sequencial 9 space column moves.
* Comma [PRINT](./PRINT.md) spacing is up to 15 column places (IE: [TAB](./TAB.md)(15)) to a maximum column of 57.
* When printing to a file, a carriage return( CHR$ (13)) and linefeed( CHR$ (10)) character are output when it moves to the next row.
* Note: QBasic did not allow a [TAB](./TAB.md) to be added to a string value. In [PRINT](./PRINT.md) statements the plus would be changed to a semicolon .


#### SEE ALSO
* [PRINT](./PRINT.md) , [LPRINT](./LPRINT.md)
* [SPC](./SPC.md) , SPACE$
* [STRING](./STRING.md)$
* CHR$ , ASCII
