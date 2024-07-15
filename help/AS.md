# AS

The AS keyword defines a variable data [type](type.md).

  

## Description

* AS defines the variable or array type AS [_BIT](_BIT.md), [_BYTE](_BYTE.md), [INTEGER](INTEGER.md), [LONG](LONG.md), [_INTEGER64](_INTEGER64.md), [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md), [_FLOAT](_FLOAT.md) or [STRING](STRING.md).
* Specifies a variable's [type](type.md) in a declarative statement or parameter list using:
	+ [DIM](DIM.md) or [REDIM](REDIM.md)
	+ [DECLARE LIBRARY](DECLARE LIBRARY.md)
	+ [SUB](SUB.md)
	+ [FUNCTION](FUNCTION.md)
	+ [TYPE](TYPE.md)
	+ [SHARED](SHARED.md)
	+ [COMMON SHARED](COMMON SHARED.md)
	+ [STATIC](STATIC.md)

### Details

* Specifies a **[parameter](parameter.md)** variable's type in a [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedure. **Cannot be used to define a function's [type](type.md)**
* Specifies an element's type in a user-defined data [TYPE](TYPE.md).
* Assigns a file number to a file or device in an [OPEN](OPEN.md) statement.
* Specifies a field name in a random-access record (see [FIELD](FIELD.md))
* Specifies a new file name when you rename a file (see [NAME](NAME.md))
* **NOTE: Many QBasic keywords can be used as variable names if they are created as [STRINGs](STRINGs.md) using the suffix** $**. You cannot use them without the suffix, use a numerical suffix or use [DIM](DIM.md), [REDIM](REDIM.md), [_DEFINE](_DEFINE.md), [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable AS statements.**

  

## See also

* [DIM](DIM.md), [REDIM](REDIM.md)
* [_DEFINE](_DEFINE.md)
* [BYVAL](BYVAL.md), [TYPE](TYPE.md)
* [Variable Types](Variable Types.md)

  
