<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [DECLARE_LIBRARY](DECLARE_LIBRARY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DECLARE LIBRARY)
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

*  The Library_name is needed if a library is not already loaded by QB64. Do not include the file extension. Begin the Library_name with ./ or .\ to make it relative to the path where your source file is saved, so you can keep all your project files together.
*  Procedure_name is any program procedure name you want to designate by using [ALIAS](ALIAS.md)  with the Library_procedure name.
*  Library procedure is the actual procedure name used inside of the library or header file.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The declaration can be used with:
	* C/C++ sub-procedures files ( .h and .hpp )
	* Dynamically linked libraries and shared object files ( .dll , .so and .dylib )
	* Static libraries ( .a )
	* Object files ( .o )
*  [LIBRARY](LIBRARY.md)  file names can be listed to combine more than one supported file name or path into one [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)  block ( except for dynamically linked libraries and shared object files ). Do not include any file extension ( .h , .dll , .a etc.).
*  The dynamically linked library or shared object file can be in a relative/absolute path specified along with the library name, in the operating system's directory (e.g., C:\Windows\System32), or in the QB64 directory (alongside your program's executable).
*  Specify "" as the library file name to inform QB64 that the function exists in a library that is already linked and that it must define the C function before calling it, as well as allowing QB64 code to call it.
*  It's a good idea to try declaring Operating System API libraries without a library file name first, as most common Operating System headers are already included in QB64 source.
*  When using a procedure from a dynamically linked [LIBRARY](LIBRARY.md)  or shared object ( .dll , .so and .dylib files) use [DECLARE](DECLARE.md)  DYNAMIC [LIBRARY](LIBRARY.md)  .
*  When using a procedure from a [STATIC](STATIC.md)  [LIBRARY](LIBRARY.md)  ( .a files) use [DECLARE](DECLARE.md) [STATIC](STATIC.md)  [LIBRARY](LIBRARY.md)  .
*  Procedure_name can be any desired procedure name designated by using [ALIAS](ALIAS.md)  with the Library_procedure name following. Enclose Library_procedure in "" when using a C++ function with the scope operator (e.g., "std::clamp").
*  Parameters used by the library procedure can be passed by value ( [BYVAL](BYVAL.md)  ) when needed, except for [STRING](STRING.md)  values.
*  QB64 STRINGs are passed to external libraries as pointers to first character. Many external library procedures expect strings to be NULL terminated. Terminate STRINGs using CHR$ (0) wherever it is needed.
*  Declarations can be made inside of [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedures. Declarations do not need to be at program start.
*  C/C++ procedures can use a header file name and the file code must be included with program code.
*  C/C++ header files cannot be used with [DECLARE](DECLARE.md)  DYNAMIC [LIBRARY](LIBRARY.md)  . Existence of any .h or .hpp file of the same name as the dynamically linked [LIBRARY](LIBRARY.md)  or shared object file will cause [DECLARE](DECLARE.md)  DYNAMIC [LIBRARY](LIBRARY.md)  to fail.
*  The [_OFFSET](OFFSET.md)  in memory can be used in [CUSTOMTYPE](CUSTOMTYPE.md)  , [STATIC](STATIC.md)  and DYNAMIC [LIBRARY](LIBRARY.md)  declarations.
*  [DECLARE](DECLARE.md)  DYNAMIC [LIBRARY](LIBRARY.md)  let's you specify any [SUB](SUB.md)  / [FUNCTION](FUNCTION.md)  calling format you wish, but if the size of the parameters does not match, the size expected within the [LIBRARY](LIBRARY.md) , your code will probably cause a GPF (General Protection Fault). It is important to understand that pointers (if required) will be 32-bits in size (the equivalent of a [LONG](LONG.md)  ) when creating a 32-bit program (even under 64-bit Windows).
*  [STATIC](STATIC.md)  is the same as DYNAMIC except that it prioritizes linking to [STATIC](STATIC.md)  libraries ( .a and .o files) over dynamically linked libraries and shared object files, if both exist.
*  [CUSTOMTYPE](CUSTOMTYPE.md)  is already implied when using [DECLARE](DECLARE.md)  DYNAMIC [LIBRARY](LIBRARY.md)  . This [TYPE](TYPE.md)  of [LIBRARY](LIBRARY.md)  just allows the same flexibility [TO](TO.md)  apply when referencing [STATIC](STATIC.md)  libraries that are used [TO](TO.md)  refer [TO](TO.md)  dynamic libraries.
*  [SUB](SUB.md)  procedures using [DECLARE](DECLARE.md)  [CUSTOMTYPE](CUSTOMTYPE.md) [LIBRARY](LIBRARY.md)  API procedures may error . Try DYNAMIC with the dynamically linked [LIBRARY](LIBRARY.md)  or shared object file name.
*  It is up to the user to document and determine the suitability of all libraries and procedures they choose to use. QB64 cannot guarantee that any procedure will work and cannot guarantee any troubleshooting help.
*  QB64 version 1.000 and up produce standalone executables. External dynamically linked libraries or shared object files must be distributed with your program.
*  What libraries are or aren't automatically used in the linking process is not formally defined, nor is it guaranteed to stay that way in future versions of QB64.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SUB](SUB.md)  , [FUNCTION](FUNCTION.md) 
*  [BYVAL](BYVAL.md)  , [ALIAS](ALIAS.md) 
*  [_OFFSET](OFFSET.md)  (function) , [_OFFSET](OFFSET.md)  (variable type)
*  C Libraries , DLL Libraries , Windows Libraries
*  Port Access Libraries
*  SQL Client

</blockquote>
