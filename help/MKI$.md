## MKI$
---

### The MKI$ function encodes an INTEGER numerical value into a 2-byte ASCII STRING value.

#### SYNTAX

`result$ = MKI$ ( integerVariableOrLiteral% )`

#### DESCRIPTION
* integerVariableOrLiteral% is converted to two ASCII characters.
* [INTEGER](./INTEGER.md) values can range from -32768 to 32767.
* MKI$ string values can be converted back to numerical [INTEGER](./INTEGER.md) values using [CVI](./CVI.md) .
* The function takes up less byte space in a file than using the text numerical value when the value is over 2 digits.
* When a variable value is used with [PUT](./PUT.md) a numerical value is converted automatically in [RANDOM](./RANDOM.md) and [BINARY](./BINARY.md) files.


#### EXAMPLES
##### Example: How MKI$ creates a two byte string integer value to save file space.
```vb
SCREEN 12    '_PRINTSTRING requires a graphic screen mode
DO
 COLOR 14: LOCATE 13, 20: INPUT "Enter an Integer from 1 to 32767(0 quits): ", number%
 IF number% < 1 THEN EXIT DO
 CLS
 A$ = CHR$(number% MOD 256)   'first digit(0 to 255)
 B$ = CHR$(number% \ 256)     'second digit(0 to 127)

 MKIvalue$ = A$ + B$
 Q$ = CHR$(34)
 strng$ = "CHR$(" + LTRIM$(STR$(number% MOD 256)) + ") + CHR$(" + LTRIM$(STR$(number% \ 256)) + ")"
 COLOR 11
 _PRINTSTRING (222, 252), STR$(number%) + " = " + strng$
 _PRINTSTRING (252, 300), "MKI$ value = " + Q$ + MKIvalue$ + Q$ 'print ASCII characters
LOOP
END
```
  


#### SEE ALSO
* MKD$ , MKS$ , MKL$
* [CVD](./CVD.md) , [CVI](./CVI.md) , [CVS](./CVS.md) , [CVL](./CVL.md)
* _MK$ , [_CV](./_CV.md)
