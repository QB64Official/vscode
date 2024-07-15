# _MK$

The _MK$ function can convert any numerical type into an [ASCII](ASCII.md) [STRING](STRING.md) value that can be converted back using [_CV](_CV.md).

  

## Syntax

*string_value$* = _MK$(*numericalType*, *numericalValue*)
  

## Parameters

* *numericalType* is any QB64 numerical type: [INTEGER](INTEGER.md), [LONG](LONG.md), [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md), [_INTEGER64](_INTEGER64.md), [_BYTE](_BYTE.md) or [_BIT](_BIT.md).
* Whole integer values can be signed or [_UNSIGNED](_UNSIGNED.md).
* *numericalValue* must match the *numericalType* used.

  

## Description

* Supports converting any QBasic or **QB64** numerical value into a string value.
* Some resulting [ASCII](ASCII.md) string characters might not be able to be printed to the screen.

  

## See also

* [_CV](_CV.md)
* [MKI$](MKI$.md), [CVI](CVI.md), [INTEGER](INTEGER.md)
* [MKL$](MKL$.md), [CVL](CVL.md), [LONG](LONG.md)
* [MKS$](MKS$.md), [CVS](CVS.md), [SINGLE](SINGLE.md)
* [MKD$](MKD$.md), [CVD](CVD.md), [DOUBLE](DOUBLE.md)
* [MKSMBF$](MKSMBF$.md), [CVSMBF](CVSMBF.md)
* [MKDMBF$](MKDMBF$.md), [CVDMBF](CVDMBF.md)
* [CURRENCY](CURRENCY.md)_Procedures#CURRENCY "PDS(7.1) Procedures")

  
