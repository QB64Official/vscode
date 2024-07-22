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

## [\$INCLUDEONCE](\$INCLUDEONCE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$INCLUDEONCE)
---
<blockquote>

### The $INCLUDEONCE metacommand, when placed in include files, prevents that the file's contents is injected multiple times into a program, even if the file is included multiple times directly or indirectly through other include files.

</blockquote>

#### SYNTAX

<blockquote>

`$INCLUDEONCE`

</blockquote>

#### DESCRIPTION

<blockquote>

*  As QB64 metacommand it does not require a comment ' or [REM](REM.md)  before it.
*  It can be placed everywhere in an include file, but must be the only thing in the line, hence without additional whitespace or comments.
	* Even if placed in the middle or the end of the file, it always designates the entire file contents.
*  If placed in the main program, $INCLUDEONCE does nothing and is simply ignored without error.
*  $INCLUDEONCE will not work when placed inside pre-compiler $IF .. $ELSE ... $END IF blocks.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  $INCLUDE
*  Metacommand

</blockquote>
