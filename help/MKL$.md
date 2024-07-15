# MKL$

The MKL$ function encodes a [LONG](LONG.md) numerical value into a 4-byte [ASCII](ASCII.md) [STRING](STRING.md) value.

  

## Syntax

*result$* = MKL$(*longVariableOrLiteral&*)
  

## Description

* *longVariableOrLiteral&* is converted to four ASCII characters. To see this in action, try PRINT MKL$(12345678).
* The numerical data usually takes up less bytes than printing the [LONG](LONG.md) number to a file.
* [LONG](LONG.md) integer values can range from -2147483648 to 2147483647.
* Since the representation of a long number can use up to 10 ASCII characters (ten bytes), writing to a file using MKL$ conversion, and then reading back with the [CVL](CVL.md) conversion can save up to 6 bytes of storage space.
* [CVL](CVL.md) can convert the value back to a [LONG](LONG.md) numerical value.
* [LONG](LONG.md) numerical variable values [PUT](PUT.md) into a [BINARY](BINARY.md) file are automatically placed as an MKL$ [ASCII](ASCII.md) string value.

  

## Examples

See examples in:

* [SaveImage SUB](SaveImage SUB.md)
* [SaveIcon32](SaveIcon32.md)

  

## See also

* [MKI$](MKI$.md), [MKS$](MKS$.md), [MKD$](MKD$.md)
* [CVD](CVD.md), [CVI](CVI.md), [CVS](CVS.md), [CVL](CVL.md)
* [_MK$](_MK$.md), [_CV](_CV.md)

  
