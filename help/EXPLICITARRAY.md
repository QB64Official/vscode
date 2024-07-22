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

## [OPTION__EXPLICITARRAY](OPTION__EXPLICITARRAY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPTION _EXPLICITARRAY)
---
<blockquote>

### OPTION _EXPLICITARRAY instructs the compiler to require arrays to be properly dimensioned with DIM or REDIM before first use. However, it doesn't require regular variables to be declared.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION _EXPLICITARRAY`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Normally statements like x(2) = 3 will implicitly create an array x(). [OPTION](OPTION.md)  [_EXPLICITARRAY](EXPLICITARRAY.md)  requires proper dimensioning for the array, helping to catch mistyped array and function names.
*  Unlike [OPTION](OPTION.md)  [_EXPLICIT](EXPLICIT.md)  , simple variables can still be used without a declaration. Example: i = 1


</blockquote>

#### SEE ALSO

<blockquote>

*  [OPTION](OPTION.md)  [_EXPLICIT](EXPLICIT.md) 
*  [DIM](DIM.md)  , [REDIM](REDIM.md) 
*  [SHARED](SHARED.md) 
*  [STATIC](STATIC.md) 

</blockquote>
