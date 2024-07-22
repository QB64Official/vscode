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

## [_SHELLHIDE](SHELLHIDE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SHELLHIDE)
---
<blockquote>

### The _SHELLHIDE function hides the console window and returns any INTEGER code sent when a program exits.

</blockquote>

#### SYNTAX

<blockquote>

`returnCode% = _SHELLHIDE ( externalCommand$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The literal or variable [STRING](STRING.md)  externalCommand$ parameter can be any external command or call to another program.

</blockquote>

#### DESCRIPTION

<blockquote>

*  A QB64 program can return codes specified after [END](END.md)  or [SYSTEM](SYSTEM.md)  calls.
*  The returnCode% is usually 0 when the external program ends with no errors.


</blockquote>

#### SEE ALSO

<blockquote>

*  [SHELL](SHELL.md)  (function)
*  [SHELL](SHELL.md)  , [_HIDE](HIDE.md) 
*  [_CONSOLE](CONSOLE.md)  , $CONSOLE
*  [SYSTEM](SYSTEM.md)  , [END](END.md) 

</blockquote>
