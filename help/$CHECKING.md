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

## [\$CHECKING](\$CHECKING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$CHECKING)
---
<blockquote>

### The $CHECKING metacommand turns C++ event checking ON or OFF.

</blockquote>

#### SYNTAX

<blockquote>

`$CHECKING :{ON|OFF}`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The Metacommand does not require a comment or [REM](REM.md)  before it. There is no space after the colon.
*  The [OFF](OFF.md)  action turns event checking [OFF](OFF.md)  and should only be used when running stable, errorless code.
*  The default $CHECKING : [ON](ON.md)  action is only required when checking has been turned [OFF](OFF.md)  previously.
*  When $CHECKING : [OFF](OFF.md)  is used, all error code and the reporting code is removed from the EXE program.
*  Warning: Turning [OFF](OFF.md)  error checking could create a General Protection Fault (or segfault). Use only with 100% stable sections of code.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md)  [TIMER](TIMER.md) (n)
*  [ON](ON.md)  [ERROR](ERROR.md) 
*  Metacommand
*  [ERROR](ERROR.md)  Codes

</blockquote>
