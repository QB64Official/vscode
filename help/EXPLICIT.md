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

## [OPTION__EXPLICIT](OPTION__EXPLICIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPTION _EXPLICIT)
---
<blockquote>

### OPTION _EXPLICIT instructs the compiler to require variable declaration with DIM , REDIM or an equivalent statement.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION _EXPLICIT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  With [OPTION](OPTION.md)  [_EXPLICIT](EXPLICIT.md)  you can avoid typos by having QB64 immediately warn in the Status area of new variables used without previous declaration.
*  The use of [OPTION](OPTION.md)  [_EXPLICIT](EXPLICIT.md)  does also enforce the requirement to [DIM](DIM.md)  or [REDIM](REDIM.md)  any arrays before first use, no extra [OPTION](OPTION.md)  [_EXPLICITARRAY](EXPLICITARRAY.md)  is needed.
*  Enable [OPTION](OPTION.md)  [_EXPLICIT](EXPLICIT.md)  temporarily even if a program source file doesn't contain the directive by specifying the -e switch when compiling via command line ( qb64 -c file.bas -e ).


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [OPTION](OPTION.md)  [_EXPLICITARRAY](EXPLICITARRAY.md) 
*  [DIM](DIM.md)  , [REDIM](REDIM.md) 
*  [SHARED](SHARED.md) 
*  [STATIC](STATIC.md) 

</blockquote>
