## MKD$
---

### The MKD$ function encodes a DOUBLE numerical value into an 8-byte ASCII STRING value.

#### SYNTAX

`result$ = MKD$ ( doublePrecisionVariableOrLiteral# )`

#### DESCRIPTION
* doublePrecisionVariableOrLiteral# is converted to eight ASCII characters. To see this in action, try [PRINT](./PRINT.md) MKD$(12345678) .
* [DOUBLE](./DOUBLE.md) values can range up to 15 decimal point digits. Decimal point accuracy depends on whole value places taken.
* The string value can be converted back to a [DOUBLE](./DOUBLE.md) numerical value using [CVD](./CVD.md) .
* [DOUBLE](./DOUBLE.md) numerical variable values [PUT](./PUT.md) into a [BINARY](./BINARY.md) file are automatically placed as an MKD$ ASCII string value.


#### SEE ALSO
* MKI$ , MKS$ , MKL$
* [CVD](./CVD.md) , [CVI](./CVI.md) , [CVS](./CVS.md) , [CVL](./CVL.md)
* _MK$ , [_CV](./_CV.md)
