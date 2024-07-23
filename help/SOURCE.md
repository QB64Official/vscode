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


## [_SOURCE](SOURCE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SOURCE)
---
<blockquote>

### The _SOURCE statement establishes the image SOURCE using a handle created by _LOADIMAGE , _NEWIMAGE or _COPYIMAGE .

</blockquote>

#### SYNTAX

<blockquote>

`_SOURCE handle&`

</blockquote>

#### DESCRIPTION

<blockquote>


* The handle is a [LONG](LONG.md) integer value from the [_SOURCE](SOURCE.md) function or a handle created by [_NEWIMAGE](NEWIMAGE.md) .
* If the handle is designated as 0, it refers to the current [SCREEN](SCREEN.md) image.
* A source image can only supply information to a program. [POINT](POINT.md) and [GET](GET.md) might require a source other than the one currently active.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN 13
a = _NEWIMAGE(320,200,13)
_DEST a
PSET (100, 100), 15
_SOURCE a
_DEST 0
PRINT POINT(100, 100)
```
  
<br>

```vb
15
```
  
<br>


</blockquote>

#### MORE EXAMPLES

<blockquote>


* Bitmaps
* SaveImage [SUB](SUB.md)
* SaveIcon32
</blockquote>

#### SEE ALSO

<blockquote>


* [_DEST](DEST.md)
* [_SOURCE](SOURCE.md) (function)
* [POINT](POINT.md) , [GET](GET.md) (graphics statement)
</blockquote>
