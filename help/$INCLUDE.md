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

## [\$INCLUDE](\$INCLUDE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$INCLUDE)
---
<blockquote>

### $INCLUDE is a metacommand that is used to insert a source code file into your program which is then executed at the point of the insertion.

</blockquote>

#### SYNTAX

<blockquote>

`{ REM | ' } $INCLUDE : ' sourceFile '`

</blockquote>

#### DESCRIPTION

<blockquote>

*  QBasic metacommands must be commented with [REM](REM.md)  or an apostrophe.
*  The sourceFile name must be enclosed in apostrophes and can include a path.
*  $INCLUDE is often used to add functions and subs from an external text QBasic code library.
*  The $INCLUDE metacommand should be the only statement on a line.


</blockquote>

#### MORE EXAMPLES

<blockquote>

*  SelectScreen
*  FILELIST$
*  SaveImage [SUB](SUB.md) 

</blockquote>

#### SEE ALSO

<blockquote>

*  [INTERRUPT](INTERRUPT.md)  , [INTERRUPTX](INTERRUPTX.md) 
*  [TYPE](TYPE.md)  , [DIM](DIM.md) 
*  Metacommand

</blockquote>
