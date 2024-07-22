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

## [\$ASSERTS](\$ASSERTS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$ASSERTS)
---
<blockquote>

### The $ASSERTS metacommand enables debug tests with the _ASSERT macro.

</blockquote>

#### SYNTAX

<blockquote>

`$ASSERTS`

</blockquote>

#### DESCRIPTION

<blockquote>

*  This metacommand does not require a comment ' or [REM](REM.md)  before it. There is no space between the metacommand name, the colon and the [CONSOLE](CONSOLE.md)  parameter.
*  If this metacommand is used in a program and any of the set [_ASSERT](ASSERT.md)  checkpoints will fail, then the program will stop with an [_ASSERT](ASSERT.md)  failed error.
*  Detailed error messages passed to the [_ASSERT](ASSERT.md)  statement will be displayed in the [CONSOLE](CONSOLE.md)  window, but only if $ASSERTS: [CONSOLE](CONSOLE.md)  is used.


</blockquote>

#### SEE ALSO

<blockquote>

*  Metacommand
*  [_ASSERT](ASSERT.md) 
*  $CHECKING
*  Relational Operations
*  [ERROR](ERROR.md)  Codes

</blockquote>
