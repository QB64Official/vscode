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

## [\$IF](\$IF.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$IF)
---
<blockquote>

### $IF is precompiler metacommand , which determines which sections of code inside its blocks are included into the final code for compliing.

</blockquote>

#### SYNTAX

<blockquote>

`$IF variable = expression THEN`

</blockquote>

#### DESCRIPTION

<blockquote>

*  $IF is the start of a precompiler code block which includes or excludes sections of code from being compiled.
*  There is no single line $IF statement.  $IF must be in a valid $IF [THEN](THEN.md) ...$END IF block to work properly.
*  Like all other metacommands, you can not use more than one metacommand per line. Use of : to separate statements in a single line is not allowed.
*  Variable names can contain numbers, letters and periods, in any order.
*  Expressions can contain one set of leading and/or trailing quotes; and any number of numbers, letters and periods, in any order.
*  The precompiler comes with some preset values which can be used to help determine which code blocks to include/exclude.  These are:
	* WIN or WINDOWS if the user is running QB64 in a Windows environment.
	* LINUX if the user is running QB64 in a Linux environment.
	* MAC or MACOSX if the user is running QB64 in a macOS environment.
	* 32BIT if the user is running a 32-bit version of QB64.
	* 64BIT if the user is running a 64-bit version of QB64.
	* VERSION , which is set to the version of the QB64 compiler. This is a number and can be ordered, see example below.
*  Special values DEFINED and UNDEFINED can be used to check whether a precompiler variable has already been assigned a value. Useful for code in libraries which may be repeated.
*  $END IF denotes the end of a valid precompiler $IF block.
*  $ELSEIF must follow a valid $IF or $ELSEIF statement.
*  [IF](IF.md)  $ELSE is used, it must be used as the last conditional check before $END [IF](IF.md) .  $ELSEIF cannot come after $ELSE.
	* There can only be one $ELSE in an $IF-$ELSEIF-$ELSE-$END IF block, and it must be the last block selection before the $END IF.  $ELSEIF cannot follow $ELSE.


</blockquote>

#### SEE ALSO

<blockquote>

*  $LET
*  $ERROR
*  Metacommands

</blockquote>
