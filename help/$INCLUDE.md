# $INCLUDE

$INCLUDE is a metacommand that is used to insert a source code file into your program which is then executed at the point of the insertion.

  

## Syntax

{[REM](REM.md) | [']('.md) } $INCLUDE**:** '*sourceFile*'
  

## Description

* QBasic [metacommands](metacommands.md) must be commented with [REM](REM.md) or an apostrophe.
* The *sourceFile* name must be enclosed in apostrophes and can include a path.
* $INCLUDE is often used to add functions and subs from an external text QBasic code library.
* The $INCLUDE metacommand should be the only statement on a line.

### How to $INCLUDE a BAS or Text file with a QB64 Program

* Assemble the code to be reused into a file.
* Common extensions are **.BI** (for declarations, usually included in the beginning of a program) or **.BM** (with SUBs and FUNCTIONs, usually included at the end of a program).
	+ Any extension can be used, as long as the file contains code in plain text (binary files are not accepted).
* $INCLUDE any [DIM](DIM.md), [CONST](CONST.md), [SHARED](SHARED.md) arrays or [DATA](DATA.md) at the **beginning** of the main program code.
* $INCLUDE [SUBs](SUBs.md) or [FUNCTIONs](FUNCTIONs.md) at the bottom of the main program code **after any SUB procedures.**
	+ **Note:** [TYPE](TYPE.md) definitions, [DATA](DATA.md) and [DECLARE LIBRARY](DECLARE LIBRARY.md) can be placed inside of sub-procedures.
* **Compile** the program.
* *Note: Once the program is compiled, the included text files are no longer needed with the program EXE.*

  

## Examples

```  **'$INCLUDE:** 'QB.BI' 
```

### More examples

* [SelectScreen](SelectScreen.md)
* [FILELIST$](FILELIST$.md)
* [SaveImage SUB](SaveImage SUB.md)

  

## See also

* [INTERRUPT](INTERRUPT.md), [INTERRUPTX](INTERRUPTX.md)
* [TYPE](TYPE.md), [DIM](DIM.md)
* [Metacommand](Metacommand.md)

  
