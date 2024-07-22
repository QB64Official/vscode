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

## [\$STATIC](\$STATIC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$STATIC)
---
<blockquote>

### The $STATIC metacommand allows the creation of static (unresizable) arrays.

</blockquote>

#### SYNTAX

<blockquote>

`{ REM | ' } $STATIC`

</blockquote>

#### DESCRIPTION

<blockquote>

*  QBasic Metacommands require a [REM](REM.md)  or apostrophy (') before them and are normally placed at the start of the main module.
*  Static arrays cannot be resized. If a variable is used to size any array, it becomes $DYNAMIC .
*  A [REDIM](REDIM.md)  statement has no effect on $STATIC arrays except perhaps a duplicate definition error at the [REDIM](REDIM.md)  statement.
*  The array's type cannot be changed once [DIM](DIM.md)  and a literal value sets the dimensions and element size.
*  $STATIC defined program arrays cannot be re-sized or use [_PRESERVE](PRESERVE.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  $DYNAMIC , [STATIC](STATIC.md) 
*  Arrays , Metacommand

</blockquote>
