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

## [_MEMFREE](MEMFREE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMFREE)
---
<blockquote>

### The _MEMFREE statement frees the designated memory block _MEM value and must be used with all memory functions.

</blockquote>

#### SYNTAX

<blockquote>

`_MEMFREE memoryVariable`

</blockquote>

#### PARAMETERS

<blockquote>

*  ALL designated [_MEM](MEM.md)  type memoryVariable values must be freed to conserve memory when they are no longer used or needed.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Since [_MEM](MEM.md)  type variables cannot use a suffix, use [DIM](DIM.md)  memoryVariable [AS](AS.md)  [_MEM](MEM.md)  to create memory handle variables.
*  All values created by memory functions must be freed using [_MEMFREE](MEMFREE.md)  with a valid [_MEM](MEM.md)  variable.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md) 
*  [_MEM](MEM.md)  (function)
*  [_MEMNEW](MEMNEW.md) 
*  [_MEMIMAGE](MEMIMAGE.md) 
*  [_MEMELEMENT](MEMELEMENT.md) 
*  [_MEMGET](MEMGET.md)  (function)

</blockquote>
