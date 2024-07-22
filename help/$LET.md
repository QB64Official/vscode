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

## [\$LET](\$LET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$LET)
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

*  Unlike LET , $LET is not optional.
*  $LET a = 12 sets a precompiler variable "a" to the value of 12.   This variable is only valid for the precompiler itself and does nothing to affect the values of any variable/constant which might also be called "a" in the program.
*  Variable names must follow QB64's variable naming conventions.
*  You can check a precompiler variable against special values DEFINED and UNDEFINED , in order to assess whether the variable has already been assigned a value. Useful for code in libraries which may be repeated.
*  The precompiler comes with some preset values which can be used to help determine which code blocks to include/exclude.  These are:
	* WIN or WINDOWS if the user is running QB64 in a Windows environment.
	* LINUX if the user is running QB64 in a Linux environment.
	* MAC or MACOSX if the user is running QB64 in a macOS environment.
	* 32BIT if the user is running a 32-bit version of QB64.
	* 64BIT if the user is running a 64-bit version of QB64.
	* VERSION , which is set to the version of the QB64 compiler.


</blockquote>

#### SEE ALSO

<blockquote>

*  $IF
*  $ELSE
*  $ELSEIF
*  $END [IF](IF.md) 

</blockquote>
