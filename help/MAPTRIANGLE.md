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

## [_MAPTRIANGLE](MAPTRIANGLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MAPTRIANGLE)
---
<blockquote>

### The _MAPTRIANGLE statement maps a triangular portion of an image onto a destination image or screen page.

</blockquote>

#### PARAMETERS

<blockquote>

*  The [_SEAMLESS](SEAMLESS.md)  option makes the triangle skip the right-most and bottom-most pixels of the triangle. When you make larger objects using several triangles, there can be a "seam" where they overlap when using alpha transparency and the seam would be twice as bright. [_SEAMLESS](SEAMLESS.md)  is ignored when rendering 3D content and is not yet supported when drawing 2D hardware images.
*  For 3D drawing use the _CLOCKWISE and [_ANTICLOCKWISE](ANTICLOCKWISE.md)  arguments to only draw triangles in the correct direction. See Example 4 .
*  Coordinates are [SINGLE](SINGLE.md)  values where whole numbers represent the exact center of a pixel of the source texture.
*  source& and optional destination& are [LONG](LONG.md)  image or screen page handles.
*  Supports an optional final argument [_SMOOTH]( [SMOOTH](SMOOTH.md) .md)  which applies linear filtering. See Example 3 .
*  Use [_SMOOTHSTRETCHED](SMOOTHSTRETCHED.md)  or [_SMOOTHSHRUNK](SMOOTHSHRUNK.md)  for when a pixelated/ [SMOOTH](SMOOTH.md)  effect is desirable but not both.

</blockquote>

#### DESCRIPTION

<blockquote>

*  This statement is used similar to [_PUTIMAGE](PUTIMAGE.md)  to place triangular sections of an image, but is more flexible.
*  The [STEP](STEP.md)  keyword can be used to for coordinates relative to the last graphic coordinates used.
*  For 2D drawing, the destination coordinates are pixel coordinates either on-screen or on the destination image.
*  For 3D drawing, the destination coordinates represent left (-x) to right (+x), bottom (-y) to top (+y) & furthest (-z) to nearest (z=-1). The center of the screen is therefore (0,0,-1). Note that a z value of 0 will result in off-screen content. The furthest visible z value is -10,000.
*  When drawing software images coordinate positions are limited from -16383 to 16383
*  The source coordinates can be positioned outside the boundary of the source image to achieve a tiled effect.
*  If the destination& image handle is the current [SCREEN](SCREEN.md)  page, [_DEST](DEST.md)  or hardware layer, then it can be omitted.
*  Hardware images (created using mode 33 via [_LOADIMAGE](LOADIMAGE.md)  or [_COPYIMAGE](COPYIMAGE.md)  ) can be used as the source or destination.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PUTIMAGE](PUTIMAGE.md) 
*  [_LOADIMAGE](LOADIMAGE.md) 
*  [_COPYIMAGE](COPYIMAGE.md) 
*  [GET](GET.md)  (graphics statement) , [PUT](PUT.md)  (graphics statement)
*  [STEP](STEP.md)  , [SIN](SIN.md)  , [COS](COS.md) 
*  Hardware images

</blockquote>
