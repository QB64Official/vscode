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

## [_PUTIMAGE](PUTIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PUTIMAGE)
---
<blockquote>

### _PUTIMAGE puts an area of a source image to an area of a destination image in one operation, like GET and PUT .

</blockquote>

#### SYNTAX

<blockquote>

`_PUTIMAGE [STEP] [( dx1 , dy1 )-[STEP][( dx2 , dy2 )]][, sourceHandle& ][, destHandle& ][, ][STEP][( sx1 , sy1 )[-STEP][( sx2 , sy2 )]][, _SMOOTH ]`

</blockquote>
  
#### SAMPLES

<blockquote>

  
  
---
```vb
_PUTIMAGE 'full source image to fit full destination area after _SOURCE and _DEST are set
```
---
  
  
  
  
---
```vb
_PUTIMAGE , sourceHandle& , destHandle& 'size full source to fit full destination area
```
---
  
  
  
  
---
```vb
_PUTIMAGE ( dx1 , dy1 ), sourceHandle& , destHandle& 'full source to top-left corner destination position
```
---
  
  
  
  
---
```vb
_PUTIMAGE ( dx1 , dy1 )-( dx2 , dy2 ), sourceHandle& , destHandle& 'size full source to destination coordinate area
```
---
  
  
  
  
---
```vb
_PUTIMAGE ( dx1 , dy1 ), sourceHandle& , destHandle& , ( sx1 , sy1 )-( sx2 , sy2 ) 'portion of source to the top-left corner of the destination page
```
---
  
  
  
  
---
```vb
_PUTIMAGE , sourceHandle& , destHandle& , ( sx1 , sy1 )-( sx2 , sy2 ) 'portion of source to full destination area
```
---
  
  
  
  
---
```vb
_PUTIMAGE ( dx1 , dy1 )-( dx2 , dy2 ), sourceHandle& , destHandle& ,( sx1 , sy1 ) 'right side of source from top-left corner to destination
```
---
  
  

</blockquote>

#### PARAMETERS

<blockquote>

*  Relative coordinates to a previous graphical object can be designated using [STEP](STEP.md)  as opposed to literal surface coordinates (version 1.000 and up).
*  Coordinates dx and dy map the box area of the destination area to use. When omitted the entire desination area is used. If only one coordinate is used, the source is placed with its original dimensions. Coordinates can be set to flip or resize the image.
	* dx1 = the column coordinate at which the insertion of the source will begin (leftmost); when larger than dx2 , reverses image.
	* dy1 = the row coordinate at which the insertion of the source will begin (topmost); when larger than dy2 , inverts image.
	* dx2 = the column coordinate at which the insertion of the source will end (rightmost); further apart, widens image.
	* dy2 = the row coordinate at which the insertion of the source will end (bottommost); closer together, shrinks image
*  sourceHandle& = the [LONG](LONG.md)  handle of the source image created with [_NEWIMAGE](NEWIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md)  or [_COPYIMAGE](COPYIMAGE.md)  .
*  destHandle& = the [LONG](LONG.md)  handle of the destination image may be created with [_NEWIMAGE](NEWIMAGE.md)  , [SCREEN](SCREEN.md)  or destination 0.
*  Coordinates sx and sy [GET](GET.md)  the box area of the source image to transfer to the destination image, page or screen :
	* sx1 = the column coordinate of the left-most pixel to include of the source. When omitted, the entire image is used
	* sy1 = the row coordinate of the upper-most pixel to include of the source. When omitted, the entire image is used
	* sx2 = the column coordinate of the right-most pixel to include of the source. Can be omitted to get rest of image.
	* sy2 = the row coordinate of the bottom-most pixel to include of the source. Can be omitted to get rest of image.
*  [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  applies linear filtering ( version 1.000 and up ).
Note: The PUT options PSET, PRESET, AND, OR and XOR are not available with _PUTIMAGE. QB64 can use transparency of colors to achieve the same results.

</blockquote>

#### DESCRIPTION

<blockquote>

*  [_PUTIMAGE](PUTIMAGE.md)  can be used without any handle parameters if the [_SOURCE](SOURCE.md)  and/or [_DEST](DEST.md)  are already defined.
*  If the area of the source is bigger or smaller than the area of the destination then the image is adjusted to fit that area.
*  Supports 32 bit alpha blending, color key transparency, true type fonts, stretching, mirroring/flipping, and a variety of graphics file formats including gif, png, bmp & jpg. 32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md)  and are transparent when placed over other surfaces. Use [CLS](CLS.md)  or [_DONTBLEND](DONTBLEND.md)  to make a new surface background [_ALPHA](ALPHA.md)  255 or opaque.
*  All graphical surfaces, including screen pages, can be acted upon in the same manner, and are referred to as "images".
*  Hardware images (created using mode 33 via [_LOADIMAGE](LOADIMAGE.md)  or [_COPYIMAGE](COPYIMAGE.md)  ) can be used as the source or destination.
*  Handles are used to identify graphical surfaces. Positive values are used to refer to screen pages. -1 (negative one) indicates an invalid surface. It is recommended to store image handles in [LONG](LONG.md)  variables. Passing an invalid handle generates an "Invalid handle" error.
*  When handles are not passed (or cannot be passed) to subs/functions then the default destination image or source image is referenced. These are set to the active page when the [SCREEN](SCREEN.md)  statement is called, but can be changed to any image. So it is possible to read from one image using [POINT](POINT.md)  and write to a different one with [PSET](PSET.md)  .
*  PRINTed text cannot be transferred and positioned accurately. Use [_PRINTSTRING](PRINTSTRING.md)  for graphical text or font placement.
*  Images are not deallocated when the [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  they are created in ends. [FREE](FREE.md)  them with [_FREEIMAGE](FREEIMAGE.md)  .
*  It is important to [FREE](FREE.md)  discarded or unused images with [_FREEIMAGE](FREEIMAGE.md)  to prevent CPU memory overflow errors.


</blockquote>

#### MORE EXAMPLES

<blockquote>

*  Bitmaps
*  SaveImage [SUB](SUB.md) 

</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_LOADIMAGE](LOADIMAGE.md)  , [_NEWIMAGE](NEWIMAGE.md) 
*  [_COPYIMAGE](COPYIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_SCREENIMAGE](SCREENIMAGE.md) 
*  [_MAPTRIANGLE](MAPTRIANGLE.md)  , [STEP](STEP.md) 
*  [_DEST](DEST.md)  , [_SOURCE](SOURCE.md)  , [_FREEIMAGE](FREEIMAGE.md) 
*  Hardware images

</blockquote>
