# DECLARE LIBRARY

The **DECLARE LIBRARY** declaration allows for the utilization of external library [SUB](SUB.md) and [FUNCTION](FUNCTION.md) procedures.

  

## Syntax

**DECLARE [DYNAMIC|CUSTOMTYPE|STATIC] LIBRARY** [*"Library_name"*][, *"Library_name2"*][, ...]
{[SUB](SUB.md)|[FUNCTION](FUNCTION.md)} *Procedure_name* [**ALIAS** *Library_procedure*] ([BYVAL](BYVAL.md) *Parameter*[{suffix| [AS]({suffix| [AS.md) [type](type.md)[, *Parameter2*...][, ...)
.
. ' Other SUBs or FUNCTIONs as required
.
**END DECLARE**
  

## Description

* The declaration can be used with:
	+ C/C++ sub-procedures files (*.h* and *.hpp*)
	+ Dynamically linked libraries and shared object files (*.dll*, *.so* and *.dylib*)
	+ Static libraries (*.a*)
	+ Object files (*.o*)
* *Library file names* can be listed to combine more than one supported file name or path into one DECLARE LIBRARY block (**except for dynamically linked libraries and shared object files**). Do not include any file extension (*.h*, *.dll*, *.a* etc.).
* The dynamically linked library or shared object file can be in a relative/absolute path specified along with the library name, in the operating system's directory (e.g., C:\Windows\System32), or in the QB64 directory (alongside your program's executable).
* Specify *""* as the library file name to inform QB64 that the function exists in a library that is already linked and that it must define the C function before calling it, as well as allowing QB64 code to call it.
* It's a good idea to try declaring Operating System API libraries without a library file name first, as most common Operating System headers are already included in QB64 source.
* When using a procedure from a dynamically linked library or shared object (*.dll*, *.so* and *.dylib* files) use **DECLARE DYNAMIC LIBRARY**.
* When using a procedure from a static library (*.a* files) use **DECLARE STATIC LIBRARY**.
* *Procedure_name* can be any desired procedure name designated by using [ALIAS](, ...)
.
. ' Other SUBs or FUNCTIONs as required
.
**END DECLARE**
  

## Description

* The declaration can be used with:
	+ C/C++ sub-procedures files (*.h* and *.hpp*)
	+ Dynamically linked libraries and shared object files (*.dll*, *.so* and *.dylib*)
	+ Static libraries (*.a*)
	+ Object files (*.o*)
* *Library file names* can be listed to combine more than one supported file name or path into one DECLARE LIBRARY block (**except for dynamically linked libraries and shared object files**). Do not include any file extension (*.h*, *.dll*, *.a* etc.).
* The dynamically linked library or shared object file can be in a relative/absolute path specified along with the library name, in the operating system's directory (e.g., C:\Windows\System32), or in the QB64 directory (alongside your program's executable).
* Specify *""* as the library file name to inform QB64 that the function exists in a library that is already linked and that it must define the C function before calling it, as well as allowing QB64 code to call it.
* It's a good idea to try declaring Operating System API libraries without a library file name first, as most common Operating System headers are already included in QB64 source.
* When using a procedure from a dynamically linked library or shared object (*.dll*, *.so* and *.dylib* files) use **DECLARE DYNAMIC LIBRARY**.
* When using a procedure from a static library (*.a* files) use **DECLARE STATIC LIBRARY**.
* *Procedure_name* can be any desired procedure name designated by using [ALIAS.md) with the *Library_procedure* name following. Enclose *Library_procedure* in *""* when using a C++ function with the scope operator (e.g., "std::clamp").
* *Parameters* used by the library procedure can be passed by value ([BYVAL](BYVAL.md)) when needed, except for [STRING](STRING.md) values.
* QB64 [STRINGs](STRINGs.md) are passed to external libraries as pointers to first character. Many external library procedures expect strings to be NULL terminated. Terminate [STRINGs](STRINGs.md) using [CHR$](CHR$.md)(0) wherever it is needed.
* Declarations can be made inside of [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures. Declarations do not need to be at program start.
* C/C++ procedures can use a header file name and the file code must be included with program code.
* C/C++ header files cannot be used with **DECLARE DYNAMIC LIBRARY**. Existence of any *.h* or *.hpp* file of the same name as the dynamically linked library or shared object file will cause DECLARE DYNAMIC LIBRARY to fail.
* The [_OFFSET](_OFFSET.md) in memory can be used in **CUSTOMTYPE**, **STATIC** and **DYNAMIC LIBRARY** declarations.
* **DECLARE DYNAMIC LIBRARY** let's you specify any [SUB](SUB.md)/[FUNCTION](FUNCTION.md) calling format you wish, but if the size of the parameters does not match, the size expected within the library, your code will probably cause a GPF (General Protection Fault). It is important to understand that pointers (if required) will be 32-bits in size (the equivalent of a [LONG](LONG.md)) when creating a 32-bit program (even under 64-bit Windows).
* **STATIC** is the same as **DYNAMIC** except that it prioritizes linking to static libraries (*.a* and *.o* files) over dynamically linked libraries and shared object files, if both exist.
* **CUSTOMTYPE** is already implied when using **DECLARE DYNAMIC LIBRARY**. This type of library just allows the same flexibility to apply when referencing STATIC libraries that are used to refer to dynamic libraries.
* [SUB](SUB.md) procedures using **DECLARE CUSTOMTYPE LIBRARY** API procedures **may error**. Try **DYNAMIC** with the dynamically linked library or shared object file name.
* It is up to the user to document and determine the suitability of all libraries and procedures they choose to use. QB64 cannot guarantee that any procedure will work and cannot guarantee any troubleshooting help.
* QB64 version 1.000 and up produce standalone executables. External dynamically linked libraries or shared object files must be distributed with your program.
* What libraries are or aren't automatically used in the linking process is not formally defined, nor is it guaranteed to stay that way in future versions of QB64.

  

## Parameters

* The *Library_name* is needed if a library is not already loaded by QB64. Do not include the file extension. Begin the *Library_name* with **./** or **.\** to make it relative to the path where your source file is saved, so you can keep all your project files together.
* *Procedure_name* is any program procedure name you want to designate by using [ALIAS](ALIAS.md) with the *Library_procedure* name.
* *Library procedure* is the actual procedure name used inside of the library or header file.

  

## Availability

* [![v0.923](![v0.923.md)](File:Qb64.png "v0.923")

**v0.923**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* Available for *Linux* and *macOS* since **QB64 v0.940**

  

## Examples

Example 1
Using GLUT library procedure as a program SUB procedure to set the mouse pointer style.

``` [CONST](CONST.md) CURSOR_NORMAL = 1 [CONST](CONST.md) CURSOR_HAND = 2 [CONST](CONST.md) CURSOR_HELP = 4 [CONST](CONST.md) CURSOR_CYCLE = 7 [CONST](CONST.md) CURSOR_TEXT = 8 [CONST](CONST.md) CURSOR_CROSSHAIR = 3 [CONST](CONST.md) CURSOR_UP_DOWN = 10 [CONST](CONST.md) CURSOR_LEFT_RIGHT = 11 [CONST](CONST.md) CURSOR_LEFT_RIGHT_CORNER = 16 [CONST](CONST.md) CURSOR_RIGHT_LEFT_CORNER = 17 [CONST](CONST.md) CURSOR_MOVE = 5 [CONST](CONST.md) CURSOR_NONE = 23  DECLARE LIBRARY     [SUB](SUB.md) glutSetCursor ([BYVAL](BYVAL.md) style&) [END DECLARE](END DECLARE.md)  glutSetCursor CURSOR_CROSSHAIR  
```

  

Example 2
Using [ALIAS](ALIAS.md) to create a program SUB or FUNCTION**.**

``` DECLARE LIBRARY     [FUNCTION](FUNCTION.md) GetMilliseconds~&& [ALIAS](ALIAS.md) GetTicks [END DECLARE](END DECLARE.md)  [DO](DO.md)     [LOCATE](LOCATE.md) , 1: [PRINT](PRINT.md) "Seconds since program start:"; GetMilliseconds \ 1000; [LOOP UNTIL](LOOP UNTIL.md) [_KEYHIT](_KEYHIT.md) = 27  
```

*Explanation:* When a library procedure is used to represent another procedure name use [ALIAS](ALIAS.md) instead. Saves creating a SUB!
  

Example 3
Don't know if a C function is defined by C++ or QB64? Try using empty quotes.

``` DECLARE LIBRARY ""     [FUNCTION](FUNCTION.md) addone& ([BYVAL](BYVAL.md) value&) [END DECLARE](END DECLARE.md)  
```

*Explanation:* The C function 'addone' exists in a library QB64 already links to, but it hasn't been defined as a C function or a QB64 function. By using "" we are telling QB64 the function exists in a library which is already linked to and that it must define the C function before calling it, as well as allowing QB64 code to call it. Trying the above code without the "" will fail.
  

Example 4
This example plays MIDI files using the *playmidi32.dll* documented here: [Liberty Basic University](Liberty Basic University.md). Download the following DLL file to your main QB64 directory: [PlayMidi32.dll](PlayMidi32.dll.md)

``` [DECLARE](DECLARE.md) [DYNAMIC](DYNAMIC.md) [LIBRARY](LIBRARY.md) "playmidi32"     [FUNCTION](FUNCTION.md) PlayMIDI& (filename [AS](AS.md) [STRING](STRING.md)) [END DECLARE](END DECLARE.md) result = PlayMIDI(".\samples\qb64\original\ps2battl.mid" + [CHR$](CHR$.md)(0)) [PRINT](PRINT.md) result  
```

  

Example 5
Using a CUSTOMTYPE LIBRARY to return the [Unicode](Unicode.md) version of the current running program's name.

``` [SCREEN](SCREEN.md) 12  [DECLARE](DECLARE.md) [CUSTOMTYPE](CUSTOMTYPE.md) [LIBRARY](LIBRARY.md) 'Directory Information using KERNEL32 provided by Dav     [FUNCTION](FUNCTION.md) GetModuleFileNameA& ([BYVAL](BYVAL.md) hModule [AS](AS.md) [LONG](LONG.md), lpFileName [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) nSize [AS](AS.md) [LONG](LONG.md))     [FUNCTION](FUNCTION.md) GetModuleFileNameW& ([BYVAL](BYVAL.md) hModule [AS](AS.md) [LONG](LONG.md), lpFileName [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) nSize [AS](AS.md) [LONG](LONG.md)) [END DECLARE](END DECLARE.md)  '=== SHOW CURRENT PROGRAM FileName$ = [SPACE$](SPACE$.md)(512)  Result = GetModuleFileNameA(0, FileName$, [LEN](LEN.md)(FileName$)) [IF](IF.md) Result [THEN](THEN.md) [PRINT](PRINT.md) "CURRENT PROGRAM (ASCII): "; [LEFT$](LEFT$.md)(FileName$, Result)  'load a unicode font f = [_LOADFONT](_LOADFONT.md)("cyberbit.ttf", 24, "UNICODE") [_FONT](_FONT.md) f Result = GetModuleFileNameW(0, FileName$, [LEN](LEN.md)(FileName$) \ 2) [LOCATE](LOCATE.md) 2, 1 [PRINT](PRINT.md) QuickCP437toUTF32$("CURRENT PROGRAM (UTF): ") + QuickUTF16toUTF32$([LEFT$](LEFT$.md)(FileName$, Result * 2)) [_FONT](_FONT.md) 16 'restore CP437 font  [FUNCTION](FUNCTION.md) QuickCP437toUTF32$ (a$)     b$ = [STRING$](STRING$.md)([LEN](LEN.md)(a$) * 4, 0)     [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(a$)         [ASC](ASC.md)(b$, i * 4 - 3) = [ASC](ASC.md) "ASC (function)")(a$, i)     [NEXT](NEXT.md)     QuickCP437toUTF32$ = b$ [END FUNCTION](END FUNCTION.md)  [FUNCTION](FUNCTION.md) QuickUTF16toUTF32$ (a$)     b$ = [STRING$](STRING$.md)([LEN](LEN.md)(a$) * 2, 0)     [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(a$) \ 2         [ASC](ASC.md)(b$, i * 4 - 3) = [ASC](ASC.md) "ASC (function)")(a$, i * 2 - 1)         [ASC](ASC.md)(b$, i * 4 - 2) = [ASC](ASC.md) "ASC (function)")(a$, i * 2)     [NEXT](NEXT.md)     QuickUTF16toUTF32$ = b$ [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [SUB](SUB.md), [FUNCTION](FUNCTION.md)
* [BYVAL](BYVAL.md), [ALIAS](ALIAS.md)
* [_OFFSET (function)](_OFFSET (function).md) "OFFSET (function)"), [_OFFSET](_OFFSET.md) (variable type)
* [C Libraries](C Libraries.md), [DLL Libraries](DLL Libraries.md), [Windows Libraries](Windows Libraries.md)
* [Port Access Libraries](Port Access Libraries.md)
* [SQL Client](SQL Client.md)

  
