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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [CHAIN](CHAIN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CHAIN)
---
<blockquote>

### CHAIN is used to change seamlessly from one module to another one in a program.

</blockquote>

#### SYNTAX

<blockquote>

`CHAIN moduleName$`

</blockquote>

#### PARAMETERS

<blockquote>


* moduleName$ is a variable or a literal [STRING](STRING.md) value in quotation marks with the optional EXE or BAS file name extension.
</blockquote>

#### DESCRIPTION

<blockquote>


* [CHAIN](CHAIN.md) requires that both the invoking and called modules are of either .BAS or .EXE file types.
* In Windows, QB64 will automatically compile a [CHAIN](CHAIN.md) referenced BAS file if there is no EXE file found.
* [CHAIN](CHAIN.md) looks for a file extension that is the same as the invoking module's extension.
* The module's filename extension is not required. To save editing at compile time just omit the extensions in the calls.
* To pass data from one module to the other use [COMMON](COMMON.md) [SHARED](SHARED.md) . The [COMMON](COMMON.md) list should match types and names.
* QB64 does not retain the [SCREEN](SCREEN.md) mode like QBasic did.
* Variable data can be passed in files instead of using [COMMON](COMMON.md) [SHARED](SHARED.md) values. QB64 uses files to pass [COMMON](COMMON.md) lists.
* Keyword not supported in Linux or macOS versions

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: CHAIN looks for same file type extension as program module (BAS or EXE).
```vb
CHAIN "Level1"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [RUN](RUN.md)
* [COMMON](COMMON.md) , [COMMON](COMMON.md) [SHARED](SHARED.md)
* [SHARED](SHARED.md)
</blockquote>
