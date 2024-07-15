# CHAIN

CHAIN is used to change seamlessly from one module to another one in a program.

  

## Syntax

CHAIN *moduleName$*
### Legacy support

* The multi-modular technique goes back to when **QBasic** and **QuickBASIC** had module size constraints. In **QB64** the CHAIN statement has been implemented so that that older code can still be compiled, though it is advisable to use single modules for a single project (not counting [$INCLUDE]($INCLUDE.md) libraries), for ease of sharing and also because the module size constraints no longer exist.

  

## Parameters

* *moduleName$* is a variable or a literal [STRING](STRING.md) value in quotation marks with the optional EXE or BAS file name extension.

  

## Description

* CHAIN requires that both the invoking and called modules are of either .BAS or .EXE file types.
* In Windows, **QB64** will automatically compile a CHAIN referenced BAS file if there is no EXE file found.
* CHAIN looks for a file extension that is the same as the invoking module's extension.
* The module's filename extension is not required. To save editing at compile time just omit the extensions in the calls.
* To pass data from one module to the other use [COMMON SHARED](COMMON SHARED.md). The COMMON list should match [types](types.md) and names.
* **QB64 does not retain the [SCREEN](SCREEN.md) mode like QBasic did.**
* Variable data can be passed in files instead of using [COMMON SHARED](COMMON SHARED.md) values. **QB64** uses files to pass [COMMON](COMMON.md) lists.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

*QBasic/QuickBASIC:*

* Compiled EXE files had to include BRUN45.EXE in QuickBASIC 4.5 when CHAIN was used with [COMMON SHARED](COMMON SHARED.md).

  

## Examples

*Example:* CHAIN looks for same file type extension as program module (BAS or EXE).

```  CHAIN "Level1"  
```

*Explanation:* The file referred to is "Level1.BAS" if the program module using the call is a BAS file. If the program was compiled, it would look for "Level1.EXE".

  

## See also

* [RUN](RUN.md)
* [COMMON](COMMON.md), [COMMON SHARED](COMMON SHARED.md)
* [SHARED](SHARED.md)

  
