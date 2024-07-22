## DECLARE LIBRARY
---
<blockquote>

### The DECLARE LIBRARY declaration allows for the utilization of external library SUB and FUNCTION procedures.

</blockquote>

#### SYNTAX

<blockquote>

`DECLARE [DYNAMIC|CUSTOMTYPE|STATIC] LIBRARY [ "Library_name" ][, "Library_name2" ][, ...] { SUB | FUNCTION } Procedure_name [ ALIAS Library_procedure ] ( BYVAL Parameter [{suffix| AS type [, Parameter2 ...][, ...]]) . . ' Other SUBs or FUNCTIONs as required .`

</blockquote>

#### PARAMETERS

<blockquote>

* The Library_name is needed if a library is not already loaded by QB64. Do not include the file extension. Begin the Library_name with ./ or .\ to make it relative to the path where your source file is saved, so you can keep all your project files together.
* Procedure_name is any program procedure name you want to designate by using [ALIAS](./ALIAS.md) with the Library_procedure name.
* Library procedure is the actual procedure name used inside of the library or header file.

</blockquote>

#### DESCRIPTION

<blockquote>

* The declaration can be used with:
	* C/C++ sub-procedures files ( .h and .hpp )
	* Dynamically linked libraries and shared object files ( .dll , .so and .dylib )
	* Static libraries ( .a )
	* Object files ( .o )
* Library file names can be listed to combine more than one supported file name or path into one [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md) block ( except for dynamically linked libraries and shared object files ). Do not include any file extension ( .h , .dll , .a etc.).
* The dynamically linked library or shared object file can be in a relative/absolute path specified along with the library name, in the operating system's directory (e.g., C:\Windows\System32), or in the QB64 directory (alongside your program's executable).
* Specify "" as the library file name to inform QB64 that the function exists in a library that is already linked and that it must define the C function before calling it, as well as allowing QB64 code to call it.
* It's a good idea to try declaring Operating System API libraries without a library file name first, as most common Operating System headers are already included in QB64 source.
* When using a procedure from a dynamically linked library or shared object ( .dll , .so and .dylib files) use [DECLARE](./DECLARE.md) DYNAMIC [LIBRARY](./LIBRARY.md) .
* When using a procedure from a static library ( .a files) use [DECLARE](./DECLARE.md) [STATIC](./STATIC.md) [LIBRARY](./LIBRARY.md) .
* Procedure_name can be any desired procedure name designated by using [ALIAS](./ALIAS.md) with the Library_procedure name following. Enclose Library_procedure in "" when using a C++ function with the scope operator (e.g., "std::clamp").
* Parameters used by the library procedure can be passed by value ( [BYVAL](./BYVAL.md) ) when needed, except for [STRING](./STRING.md) values.
* QB64 STRINGs are passed to external libraries as pointers to first character. Many external library procedures expect strings to be NULL terminated. Terminate STRINGs using CHR$ (0) wherever it is needed.
* Declarations can be made inside of [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedures. Declarations do not need to be at program start.
* C/C++ procedures can use a header file name and the file code must be included with program code.
* C/C++ header files cannot be used with [DECLARE](./DECLARE.md) DYNAMIC [LIBRARY](./LIBRARY.md) . Existence of any .h or .hpp file of the same name as the dynamically linked library or shared object file will cause [DECLARE](./DECLARE.md) DYNAMIC [LIBRARY](./LIBRARY.md) to fail.
* The [_OFFSET](./_OFFSET.md) in memory can be used in [CUSTOMTYPE](./CUSTOMTYPE.md) , [STATIC](./STATIC.md) and DYNAMIC [LIBRARY](./LIBRARY.md) declarations.
* [DECLARE](./DECLARE.md) DYNAMIC [LIBRARY](./LIBRARY.md) let's you specify any [SUB](./SUB.md) / [FUNCTION](./FUNCTION.md) calling format you wish, but if the size of the parameters does not match, the size expected within the library, your code will probably cause a GPF (General Protection Fault). It is important to understand that pointers (if required) will be 32-bits in size (the equivalent of a [LONG](./LONG.md) ) when creating a 32-bit program (even under 64-bit Windows).
* [STATIC](./STATIC.md) is the same as DYNAMIC except that it prioritizes linking to static libraries ( .a and .o files) over dynamically linked libraries and shared object files, if both exist.
* [CUSTOMTYPE](./CUSTOMTYPE.md) is already implied when using [DECLARE](./DECLARE.md) DYNAMIC [LIBRARY](./LIBRARY.md) . This type of library just allows the same flexibility to apply when referencing [STATIC](./STATIC.md) libraries that are used to refer to dynamic libraries.
* [SUB](./SUB.md) procedures using [DECLARE](./DECLARE.md) [CUSTOMTYPE](./CUSTOMTYPE.md) [LIBRARY](./LIBRARY.md) API procedures may error . Try DYNAMIC with the dynamically linked library or shared object file name.
* It is up to the user to document and determine the suitability of all libraries and procedures they choose to use. QB64 cannot guarantee that any procedure will work and cannot guarantee any troubleshooting help.
* QB64 version 1.000 and up produce standalone executables. External dynamically linked libraries or shared object files must be distributed with your program.
* What libraries are or aren't automatically used in the linking process is not formally defined, nor is it guaranteed to stay that way in future versions of QB64.


</blockquote>

#### SEE ALSO

<blockquote>

* [SUB](./SUB.md) , [FUNCTION](./FUNCTION.md)
* [BYVAL](./BYVAL.md) , [ALIAS](./ALIAS.md)
* [_OFFSET](./_OFFSET.md) (function) , [_OFFSET](./_OFFSET.md) (variable type)
* C Libraries , DLL Libraries , Windows Libraries
* Port Access Libraries
* SQL Client

</blockquote>
