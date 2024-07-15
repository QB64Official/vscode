# MKI$

The MKI$ function encodes an [INTEGER](INTEGER.md) numerical value into a 2-byte [ASCII](ASCII.md) [STRING](STRING.md) value.

  

## Syntax

*result$* = MKI$(*integerVariableOrLiteral%*)
  

## Description

* *integerVariableOrLiteral%* is converted to two ASCII characters.
* [INTEGER](INTEGER.md) values can range from -32768 to 32767.
* MKI$ string values can be converted back to numerical INTEGER values using [CVI](CVI.md).
* The function takes up less byte space in a file than using the text numerical value when the value is over 2 digits.
* When a variable value is used with [PUT](PUT.md) a numerical value is converted automatically in [RANDOM](RANDOM.md) and [BINARY](BINARY.md) files.

  

## Examples

*Example:* How MKI$ creates a two byte string integer value to save file space.

``` [SCREEN](SCREEN.md) 12    '_PRINTSTRING requires a graphic screen mode DO   [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 13, 20: [INPUT](INPUT.md) "Enter an Integer from 1 to 32767(0 quits): ", number%   [IF](IF.md) number% < 1 [THEN](THEN.md) [EXIT DO](EXIT DO.md)   [CLS](CLS.md)   A$ = [CHR$](CHR$.md)(number% [MOD](MOD.md) 256)   'first digit(0 to 255)   B$ = [CHR$](CHR$.md)(number% \ 256)     'second digit(0 to 127)    MKIvalue$ = A$ + B$   Q$ = [CHR$](CHR$.md)(34)   strng$ = "[CHR$](CHR$.md)(" + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(number% [MOD](MOD.md) 256)) + ") + [CHR$](CHR$.md)(" + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(number% \ 256)) + ")"   [COLOR](COLOR.md) 11   [_PRINTSTRING](_PRINTSTRING.md) (222, 252), [STR$](STR$.md)(number%) + " = " + strng$   [_PRINTSTRING](_PRINTSTRING.md) (252, 300), "MKI$ value = " + Q$ + MKIvalue$ + Q$ 'print ASCII characters [LOOP](LOOP.md) [END](END.md)  
```

*Explanation:* INPUT in QB64 limits integer entries to 32767 maximum. MOD 256 finds the part of a value from 0 to 255 while the second value is the number of times that 256 can go into the value. [_PRINTSTRING](_PRINTSTRING.md) can print all of the [ASCII](ASCII.md) characters.
  

## See also

* [MKD$](MKD$.md), [MKS$](MKS$.md), [MKL$](MKL$.md)
* [CVD](CVD.md), [CVI](CVI.md), [CVS](CVS.md), [CVL](CVL.md)
* [_MK$](_MK$.md), [_CV](_CV.md)

  
