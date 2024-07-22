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

## [_ASSERT](ASSERT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ASSERT)
---
<blockquote>

### The _ASSERT statement can be used to perform tests in code that's in development, for debugging purposes.

</blockquote>

#### SYNTAX

<blockquote>

`_ASSERT condition [, errorMessage$ ]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  condition is the condition that must be met in order to consider the [_ASSERT](ASSERT.md)  valid.
*  Optional errorMessage$ is the message to be displayed in the [CONSOLE](CONSOLE.md)  window if $ASSERTS: [CONSOLE](CONSOLE.md)  is used.
*  If the condition is not met (that is, if it evaluates to 0), an error occurs (" [_ASSERT](ASSERT.md)  failed on line #") and program execution stops.


</blockquote>

#### SEE ALSO

<blockquote>

*  $ASSERTS
*  $CHECKING
*  Relational Operations

</blockquote>
