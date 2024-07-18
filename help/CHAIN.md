## CHAIN
---

### CHAIN is used to change seamlessly from one module to another one in a program.

#### SYNTAX

`CHAIN moduleName$`

#### PARAMETERS
* moduleName$ is a variable or a literal [STRING](./STRING.md) value in quotation marks with the optional EXE or BAS file name extension.


#### DESCRIPTION
* [CHAIN](./CHAIN.md) requires that both the invoking and called modules are of either .BAS or .EXE file types.
* In Windows, QB64 will automatically compile a [CHAIN](./CHAIN.md) referenced BAS file if there is no EXE file found.
* [CHAIN](./CHAIN.md) looks for a file extension that is the same as the invoking module's extension.
* The module's filename extension is not required. To save editing at compile time just omit the extensions in the calls.
* To pass data from one module to the other use [COMMON](./COMMON.md) [SHARED](./SHARED.md) . The [COMMON](./COMMON.md) list should match types and names.
* QB64 does not retain the [SCREEN](./SCREEN.md) mode like QBasic did.
* Variable data can be passed in files instead of using [COMMON](./COMMON.md) [SHARED](./SHARED.md) values. QB64 uses files to pass [COMMON](./COMMON.md) lists.
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example: CHAIN looks for same file type extension as program module (BAS or EXE).
```vb
CHAIN "Level1"
```
  
##### Explanation: The file referred to is "Level1.BAS" if the program module using the call is a BAS file. If the program was compiled, it would look for "Level1.EXE".


#### SEE ALSO
* [RUN](./RUN.md)
* [COMMON](./COMMON.md) , [COMMON](./COMMON.md) [SHARED](./SHARED.md)
* [SHARED](./SHARED.md)
