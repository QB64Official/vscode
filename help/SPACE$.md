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

## [SPACE\$](SPACE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SPACE$)
---
<blockquote>

### The SPACE$ function returns a STRING consisting of a number of space characters.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = SPACE$( count& )`

</blockquote>

#### PARAMETERS

<blockquote>

*  count& is the number of space characters to repeat. Cannot use negative values!

</blockquote>

#### DESCRIPTION

<blockquote>

*  Semicolons can be used to combine spaces with text [STRING](STRING.md)  or numerical values.
*  Concatenation using + can be used to combine [STRING](STRING.md)  text values only.
*  Spaces are often used to erase previous text PRINTs from the screen.
*  The function result can also be used to [GET](GET.md)  and [PUT](PUT.md)  a number of bytes as zero characters: bytes$ = SPACE$(numbytes)
*  Spaces can also be made using [SPC](SPC.md)  , CHR$ (32) or STRING$ (n%, 32).


</blockquote>

#### SEE ALSO

<blockquote>

*  [PRINT](PRINT.md)  , [PRINT](PRINT.md) [USING](USING.md) 
*  STRING$ , [CLS](CLS.md) 
*  [SPC](SPC.md)  , [TAB](TAB.md) 

</blockquote>
