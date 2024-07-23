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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [\$STATIC](\$STATIC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24STATIC)
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


* QBasic Metacommands require a [REM](REM.md) or apostrophy (') before them and are normally placed at the start of the main module.
* Static arrays cannot be resized. If a variable is used to size any array, it becomes [&dollar;DYNAMIC](&dollar;DYNAMIC.md) .
* A [REDIM](REDIM.md) statement has no effect on [&dollar;STATIC](&dollar;STATIC.md) arrays except perhaps a duplicate definition error at the [REDIM](REDIM.md) statement.
* The array's type cannot be changed once [DIM](DIM.md) and a literal value sets the dimensions and element size.
* [&dollar;STATIC](&dollar;STATIC.md) defined program arrays cannot be re-sized or use [_PRESERVE](PRESERVE.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: When a variable is used, the array can be resized despite \$STATIC. The array becomes \$DYNAMIC .
```vb
'$STATIC

INPUT "Enter array size: ", size
DIM array(size)   'using an actual number instead of the variable will create an error!

REDIM array(2 * size)

PRINT UBOUND(array)
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;DYNAMIC](&dollar;DYNAMIC.md) , [STATIC](STATIC.md)
* Arrays , Metacommand
</blockquote>
