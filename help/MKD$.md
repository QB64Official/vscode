# MKD$

The MKD$ function encodes a [DOUBLE](DOUBLE.md) numerical value into an 8-byte [ASCII](ASCII.md) [STRING](STRING.md) value.

  

## Syntax

*result$* = MKD$(*doublePrecisionVariableOrLiteral#*)
  

## Description

* *doublePrecisionVariableOrLiteral#* is converted to eight ASCII characters. To see this in action, try PRINT MKD$(12345678).
* [DOUBLE](DOUBLE.md) values can range up to 15 decimal point digits. Decimal point accuracy depends on whole value places taken.
* The string value can be converted back to a DOUBLE numerical value using [CVD](CVD.md).
* [DOUBLE](DOUBLE.md) numerical variable values [PUT](PUT.md) into a [BINARY](BINARY.md) file are automatically placed as an MKD$ [ASCII](ASCII.md) string value.

  

## See also

* [MKI$](MKI$.md), [MKS$](MKS$.md), [MKL$](MKL$.md)
* [CVD](CVD.md), [CVI](CVI.md), [CVS](CVS.md), [CVL](CVL.md)
* [_MK$](_MK$.md), [_CV](_CV.md)

  
