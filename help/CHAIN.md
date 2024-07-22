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

*  moduleName$ is a variable or a literal [STRING](STRING.md)  value in quotation marks with the optional EXE or BAS file name extension.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [CHAIN](CHAIN.md)  requires that both the invoking and called modules are of either .BAS or .EXE file types.
*  In Windows, QB64 will automatically compile a [CHAIN](CHAIN.md)  referenced BAS file if there is no EXE file found.
*  [CHAIN](CHAIN.md)  looks for a file extension that is the same as the invoking module's extension.
*  The module's filename extension is not required. To save editing at compile time just omit the extensions in the calls.
*  To pass data from one module to the other use [COMMON](COMMON.md) [SHARED](SHARED.md)  . The [COMMON](COMMON.md)  list should match types and names.
*  QB64 does not retain the [SCREEN](SCREEN.md)  mode like QBasic did.
*  Variable data can be passed in files instead of using [COMMON](COMMON.md) [SHARED](SHARED.md)  values. QB64 uses files to pass [COMMON](COMMON.md)  lists.
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [RUN](RUN.md) 
*  [COMMON](COMMON.md)  , [COMMON](COMMON.md) [SHARED](SHARED.md) 
*  [SHARED](SHARED.md) 

</blockquote>
