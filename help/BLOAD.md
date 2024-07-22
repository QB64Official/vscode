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

## [BLOAD](BLOAD.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/BLOAD)
---
<blockquote>

### BLOAD loads a binary graphics file created by BSAVE to an array.

</blockquote>

#### SYNTAX

<blockquote>

`BLOAD fileName$ , VARPTR ( imageArray%( index ) )`

</blockquote>

#### PARAMETERS

<blockquote>

*  fileName$ is the name of the file that the image should be BSAVEd to.
*  imageArray%(index) is the [INTEGER](INTEGER.md)  array start index to store the image loaded.

</blockquote>

#### DESCRIPTION

<blockquote>

*  There must be an [INTEGER](INTEGER.md)  array of adequate size (up to 26K) to hold the graphic data.
*  A [DEF](DEF.md) [SEG](SEG.md)  pointing to the array is required. [DEF](DEF.md) [SEG](SEG.md)  = [VARSEG](VARSEG.md)  (imageArray%(index))
*  index is the starting image element of the Array. Can also include RGB color settings at the start index.
*  Fullscreen images in [SCREEN](SCREEN.md)  12 require 3 file BLOADs. A 26K array can hold 1/3 of [SCREEN](SCREEN.md) .
*  Custom RGB color settings can be embedded(indexed) at the start of the image array.
*  [BLOAD](BLOAD.md)  can be used to load any array that was saved with [BSAVE](BSAVE.md)  , not just graphics.
*  Array sizes are limited to 32767 Integer elements due to use of [VARPTR](VARPTR.md)  in QBasic and QB64' s emulated conventional memory.


</blockquote>

#### SEE ALSO

<blockquote>

*  [BSAVE](BSAVE.md)  , [OPEN](OPEN.md)  , [BINARY](BINARY.md) 
*  [PUT](PUT.md)  , [GET](GET.md)  (file statement)
*  [GET](GET.md)  (graphics statement) , [PUT](PUT.md)  (graphics statement)
*  [VARSEG](VARSEG.md)  , [VARPTR](VARPTR.md) 
*  [DEF](DEF.md) [SEG](SEG.md) 
*  Text Using Graphics

</blockquote>
