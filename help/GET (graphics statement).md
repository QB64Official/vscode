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

## [GET_(graphics_statement)](GET_(graphics_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/GET (graphics statement))
---
<blockquote>

### The GET statement is used in graphics to store a box area image of the screen into an INTEGER array.

</blockquote>

#### SYNTAX

<blockquote>

`GET [STEP] ( column1 , row1 )-[STEP]( column2 , row2 ), array ([ index ])[, offscreenColor ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  column and row [INTEGER](INTEGER.md)  coordinates for the box area must be on the screen except when using an offscreenColor .
*  [INTEGER](INTEGER.md)  array sizes must be large enough (use width * height of the box area + 4) to hold the data or an error will occur.
*  The array index offset is optional. If the offset is zero the brackets may be empty.
*  The offscreenColor pixels will be returned as the designated color when part of an image is off screen.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The [STEP](STEP.md)  keyword can be used to for coordinates relative to the last graphic coordinates used.
*  A graphic [SCREEN](SCREEN.md)  mode must be used. See the [SCREEN](SCREEN.md)  statement for graphic [SCREEN](SCREEN.md)  dimensions.
*  QB64' [GET](GET.md)  statements can use coordinates off of the screen when an offscreenColor is designated. [STEP](STEP.md)  can be used for relative coordinates.
*  The [GET](GET.md)  box coordinates are set just like a [LINE](LINE.md)  box statement is placed. You can use a box to find the correct [GET](GET.md)  area.
*  Once [GET](GET.md)  has placed the pixel image data in the array, [PUT](PUT.md)  the image or [BSAVE](BSAVE.md)  it to a file.
*  Once the image is stored in an array [PUT](PUT.md)  can be used to place the image on the screen.
*  A [_SOURCE](SOURCE.md)  handle can be set to [GET](GET.md)  image areas other than the ones on the current screen. Use [_DEST](DEST.md)  to [PUT](PUT.md)  images there.
*  To [GET](GET.md)  more than one image to the same array, designate an offset index that is not being used and is large enough to hold the data.
*  The [INTEGER](INTEGER.md)  array size can be calculated as slightly larger than the box area width times the height. A closer estimate can be done by reading the array indices from [UBOUND](UBOUND.md)  to [LBOUND](LBOUND.md)  after a [GET](GET.md)  of a white box area. In QB64, a [LONG](LONG.md)  array can be used for large or full screen images.
*  RGB color settings can be embedded at the beginning of the array for transferring custom colors. Specify an index for [GET](GET.md)  image data to be stored after any extra information added to the beginning of the array.
*  In QB64, [_PUTIMAGE](PUTIMAGE.md)  is recommended over [PUT](PUT.md)  as it can also do the [GET](GET.md)  operation directly from the image source without requiring an array.
*  [PUT](PUT.md)  and [GET](GET.md)  file statements can also write and read image array data using [BINARY](BINARY.md)  files instead of using [BSAVE](BSAVE.md)  or [BLOAD](BLOAD.md)  .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PUTIMAGE](PUTIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_MAPTRIANGLE](MAPTRIANGLE.md) 
*  [POINT](POINT.md)  , [PUT](PUT.md)  , [STEP](STEP.md) 
*  [BSAVE](BSAVE.md)  , [BLOAD](BLOAD.md) 
*  Scancodes , Creating Sprite Masks (for non-box shaped sprites)
*  Bitmaps , [GET](GET.md)  and [PUT](PUT.md)  Demo

</blockquote>
