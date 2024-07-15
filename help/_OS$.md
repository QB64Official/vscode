# _OS$

The _OS$ function returns the operating system and QB64 compiler bit version **used to compile** a QB64 program.

  

## Syntax

*compilerVersion$* = _OS$
  

## Description

* Returns a [STRING](STRING.md) listing the OS as [WINDOWS], [LINUX] or [MACOSX] and the compiler bit format of [32BIT] or [64BIT]. Example: [WINDOWS][32BIT]
* Allows a BAS program to be compiled with QB64 in Windows, Linux or macOS using different OS or language specifications.
* Use the return *compilerVersion$* to specify the current OS code to use when a BAS program is compiled using another version of the QB64 compiler.
* Windows can use either a 32 (default) or 64 bit compiler. Linux and macOS use 64 bit by default.

Important Note
* Even if you're on a 64-bit Windows system, the _OS$ function may return [32BIT].
* That is, if your program was compiled with the 32-bit version of QB64, hence it's a 32-bit executable running on 64-bit Windows.
* This is by design and not a bug, as your program gets the information it needs to run (e.g. to use 32-bit or 64-bit DLL using DECLARE DYNAMIC LIBRARY) and not what you as user would expect to see according to your system.
* That's why the "**used to compile**" phrase was printed bold in the first line above.

  

## See also

* [ENVIRON$](ENVIRON$.md)

  
