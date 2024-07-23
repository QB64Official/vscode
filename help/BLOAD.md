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


* fileName$ is the name of the file that the image should be BSAVEd to.
* imageArray%(index) is the [INTEGER](INTEGER.md) array start index to store the image loaded.
</blockquote>

#### DESCRIPTION

<blockquote>


* There must be an [INTEGER](INTEGER.md) array of adequate size (up to 26K) to hold the graphic data.
* A [DEF](DEF.md) [SEG](SEG.md) pointing to the array is required. [DEF](DEF.md) [SEG](SEG.md) = [VARSEG](VARSEG.md) (imageArray%(index))
* index is the starting image element of the Array. Can also include RGB color settings at the start index.
* Fullscreen images in [SCREEN](SCREEN.md) 12 require 3 file BLOADs. A 26K array can hold 1/3 of screen.
* Custom RGB color settings can be embedded(indexed) at the start of the image array.
* [BLOAD](BLOAD.md) can be used to load any array that was saved with [BSAVE](BSAVE.md) , not just graphics.
* Array sizes are limited to 32767 Integer elements due to use of [VARPTR](VARPTR.md) in QBasic and QB64' s emulated conventional memory.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Loading data to an array from a BSAVED file.
```vb
DEF SEG = VARSEG(Array(0))
BLOAD filename$, VARPTR(Array(LBOUND(Array))) ' changeable index
DEF SEG
```
  
<br>



##### Example 2: Using a QB default colored image.
```vb
DEF SEG = VARSEG(Image%(0)) ' pointer to first image element of an array
BLOAD FileName$, VARPTR(Image%(0)) ' place data into array at index position 0
PUT(Col, Row), Image%(0), PSET ' Put the image on the screen from index 0
DEF SEG
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [BSAVE](BSAVE.md) , [OPEN](OPEN.md) , [BINARY](BINARY.md)
* [PUT](PUT.md) , [GET](GET.md) (file statement)
* [GET](GET.md) (graphics statement) , [PUT](PUT.md) (graphics statement)
* [VARSEG](VARSEG.md) , [VARPTR](VARPTR.md)
* [DEF](DEF.md) [SEG](SEG.md)
* Text Using Graphics
</blockquote>
