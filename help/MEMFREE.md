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


* ALL designated [_MEM](MEM.md) type memoryVariable values must be freed to conserve memory when they are no longer used or needed.
</blockquote>

#### DESCRIPTION

<blockquote>


* Since [_MEM](MEM.md) type variables cannot use a suffix, use [DIM](DIM.md) memoryVariable [AS](AS.md) [_MEM](MEM.md) to create memory handle variables.
* All values created by memory functions must be freed using [_MEMFREE](MEMFREE.md) with a valid [_MEM](MEM.md) variable.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md)
* [_MEM](MEM.md) (function)
* [_MEMNEW](MEMNEW.md)
* [_MEMIMAGE](MEMIMAGE.md)
* [_MEMELEMENT](MEMELEMENT.md)
* [_MEMGET](MEMGET.md) (function)
</blockquote>
