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

## [\$NOPREFIX](\$NOPREFIX.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$NOPREFIX)
---
<blockquote>

### The $NOPREFIX metacommand allows all QB64 functions and statements to be used without the leading underscore (_).

</blockquote>

#### SYNTAX

<blockquote>

`$NOPREFIX`

</blockquote>

#### DESCRIPTION

<blockquote>

*  QB64-specific keywords are by default prefixed with an underscore, in order to differentiate them from legacy keywords inherited from QBasic/QuickBASIC 4.5.
*  The convention exists in order to allow older code to be loaded and compiled in QB64 without naming conflicts with existing variables or constants.
*  If you are writing new code with QB64, and not importing code from QBasic/QuickBASIC 4.5 nor any 3rd party .bi/.bm style libraries, then $NOPREFIX allows you to reduce typing by not having to use underscores in modern keywords.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  Keyword Reference - Alphabetical
*  Metacommand

</blockquote>
