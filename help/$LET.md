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


## [\$LET](\$LET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24LET)
---
<blockquote>

### $LET is a precompiler command, which helps to include and/or exclude sections of code in a program based on OS/bit-size or other predefined conditions.

</blockquote>

#### SYNTAX

<blockquote>

`$LET variable = expression`

</blockquote>

#### DESCRIPTION

<blockquote>


* Unlike [LET](LET.md) , [&dollar;LET](&dollar;LET.md) is not optional.
* [&dollar;LET](&dollar;LET.md) a = 12 sets a precompiler variable "a" to the value of 12.   This variable is only valid for the precompiler itself and does nothing to affect the values of any variable/constant which might also be called "a" in the program.
* Variable names must follow QB64's variable naming conventions.
* You can check a precompiler variable against special values DEFINED and UNDEFINED , in order to assess whether the variable has already been assigned a value. Useful for code in libraries which may be repeated.
* The precompiler comes with some preset values which can be used to help determine which code blocks to include/exclude.  These are:
* WIN or WINDOWS if the user is running QB64 in a Windows environment.
* LINUX if the user is running QB64 in a Linux environment.
* MAC or MACOSX if the user is running QB64 in a macOS environment.
* 32BIT if the user is running a 32-bit version of QB64.
* 64BIT if the user is running a 64-bit version of QB64.
* VERSION , which is set to the version of the QB64 compiler.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;IF](&dollar;IF.md)
* [&dollar;ELSE](&dollar;ELSE.md)
* [&dollar;ELSEIF](&dollar;ELSEIF.md)
* [&dollar;END](&dollar;END.md) [IF](IF.md)
</blockquote>
