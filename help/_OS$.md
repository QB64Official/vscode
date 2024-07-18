## _OS$
---

### The _OS$ function returns the operating system and QB64 compiler bit version used to compile a QB64 program.

#### SYNTAX

`compilerVersion$ = _OS$`

#### DESCRIPTION
* Returns a [STRING](./STRING.md) listing the OS as [WINDOWS], [LINUX] or [MACOSX] and the compiler bit format of [32BIT] or [64BIT]. Example: [WINDOWS][32BIT]
* Allows a BAS program to be compiled with QB64 in Windows, Linux or macOS using different OS or language specifications.
* Use the return compilerVersion$ to specify the current OS code to use when a BAS program is compiled using another version of the QB64 compiler.
* Windows can use either a 32 (default) or 64 bit compiler. Linux and macOS use 64 bit by default.


#### SEE ALSO
* [ENVIRON](./ENVIRON.md)$
