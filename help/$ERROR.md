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

## [\$ERROR](\$ERROR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$ERROR)
---
<blockquote>

### The $ERROR metacommand triggers a compilation error.

</blockquote>

#### SYNTAX

<blockquote>

`$ERROR message`

</blockquote>

#### DESCRIPTION

<blockquote>

*  This metacommand does not require a comment ' or [REM](REM.md)  before it.
*  message is any text. Quotation marks are not required.
*  When QB64 tries to compile an $ERROR metacommand a compilation error is triggered and message is shown to the user. This is useful in $IF blocks.
*  If there is a particular situation where you know your program will not work properly, you can prevent the user compiling and give them a helpful error message instead by checking for the condition with $IF .
*  An $ERROR directive not inside an conditional $IF ( [OR](OR.md)  $ELSEIF ) block is useless because the program will never compile in that case.


</blockquote>

#### SEE ALSO

<blockquote>

*  Metacommand
*  $IF

</blockquote>
