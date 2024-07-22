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

## [BSAVE](BSAVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/BSAVE)
---
<blockquote>

### BSAVE saves the contents of an image array to a BINARY file.

</blockquote>

#### SYNTAX

<blockquote>

`BSAVE saveFile$ , VARPTR ( array(index) ), fileSize&`

</blockquote>

#### PARAMETERS

<blockquote>

*  saveFile$ is the [STRING](STRING.md)  file name of the file designated to be created.
*  array(index) is the image array that already holds the [GET](GET.md)  image data.
*  fileSize& must be a bit over twice the size of the elements used in an [INTEGER](INTEGER.md)  array .

</blockquote>

#### DESCRIPTION

<blockquote>

*  To place image data into the array, use [GET](GET.md)  to store a box area image of the screen.
*  [SCREEN](SCREEN.md)  12 can only [GET](GET.md)  1/3 of the [SCREEN](SCREEN.md)  image at one time using a 26K array.
*  Image arrays are DIMensioned as [INTEGER](INTEGER.md)  . Use [DEFINT](DEFINT.md)  when working with large graphic arrays.
*  Any arrays can be saved, but image arrays are most common.
*  [DEF](DEF.md) [SEG](SEG.md)  = [VARSEG](VARSEG.md)  must be used to designate the array segment position in memory.
*  [VARPTR](VARPTR.md)  returns the array index offset of the memory segment. Array sizes are limited to 32767 Integer elements due to the use of [VARPTR](VARPTR.md)  in QBasic and QB64' s emulated conventional memory.
*  [BSAVE](BSAVE.md)  files can later be opened with [BLOAD](BLOAD.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [GET](GET.md)  (graphics statement) , [PUT](PUT.md)  (graphics statement)
*  [BLOAD](BLOAD.md)  , [OPEN](OPEN.md)  , [BINARY](BINARY.md) 
*  [GET](GET.md)  , [PUT](PUT.md)  (file statements)
*  [VARSEG](VARSEG.md)  , [VARPTR](VARPTR.md) 
*  [DEF](DEF.md) [SEG](SEG.md)  , [TYPE](TYPE.md) 
*  Text Using Graphics

</blockquote>
