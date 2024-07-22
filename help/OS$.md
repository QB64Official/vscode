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

## [_OS\$](OS\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OS$)
---
<blockquote>

### The _OS$ function returns the operating system and QB64 compiler bit version used to compile a QB64 program.

</blockquote>

#### SYNTAX

<blockquote>

`compilerVersion$ = _OS$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns a [STRING](STRING.md)  listing the OS as [WINDOWS], [LINUX] or [MACOSX] and the compiler bit format of [32BIT] or [64BIT]. Example: [WINDOWS][32BIT]
*  Allows a BAS program to be compiled with QB64 in Windows, Linux or macOS using different OS or language specifications.
*  Use the return compilerVersion$ to specify the current OS code to use when a BAS program is compiled using another version of the QB64 compiler.
*  Windows can use either a 32 (default) or 64 bit compiler. Linux and macOS use 64 bit by default.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [ENVIRON\$](ENVIRON\$.md) 

</blockquote>
