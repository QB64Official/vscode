# MKS$

The MKS$ function encodes a [SINGLE](SINGLE.md) numerical value into a 4-byte [ASCII](ASCII.md) [STRING](STRING.md) value.

  

## Syntax

*result$* = MKS$(*singlePrecisionVariableOrLiteral#*)
  

## Description

* *singlePrecisionVariableOrLiteral#* is converted to four ASCII characters. To see this in action, try PRINT MKS$(1345678).
* [SINGLE](SINGLE.md) values can range up to 7 decimal point digits. Decimal point accuracy depends on whole value places taken.
* MKS$ string values can be converted back to SINGLE numerical values using the [CVS](CVS.md) function.
* [SINGLE](SINGLE.md) numerical variable values [PUT](PUT.md) into a [BINARY](BINARY.md) file are automatically placed as an MKS$ [ASCII](ASCII.md) string value.

  

## See also

* [MKI$](MKI$.md), [MKD$](MKD$.md), [MKL$](MKL$.md)
* [CVD](CVD.md), [CVI](CVI.md), [CVS](CVS.md), [CVL](CVL.md)
* [_MK$](_MK$.md), [_CV](_CV.md)

  
