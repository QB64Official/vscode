## MKS$
---

### The MKS$ function encodes a SINGLE numerical value into a 4-byte ASCII STRING value.

#### SYNTAX

`result$ = MKS$ ( singlePrecisionVariableOrLiteral# )`

#### DESCRIPTION
* singlePrecisionVariableOrLiteral# is converted to four ASCII characters. To see this in action, try [PRINT](./PRINT.md) MKS$(1345678) .
* [SINGLE](./SINGLE.md) values can range up to 7 decimal point digits. Decimal point accuracy depends on whole value places taken.
* MKS$ string values can be converted back to [SINGLE](./SINGLE.md) numerical values using the [CVS](./CVS.md) function.
* [SINGLE](./SINGLE.md) numerical variable values [PUT](./PUT.md) into a [BINARY](./BINARY.md) file are automatically placed as an MKS$ ASCII string value.


#### SEE ALSO
* MKI$ , MKD$ , MKL$
* [CVD](./CVD.md) , [CVI](./CVI.md) , [CVS](./CVS.md) , [CVL](./CVL.md)
* _MK$ , [_CV](./_CV.md)
