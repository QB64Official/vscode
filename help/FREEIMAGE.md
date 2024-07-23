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


## [_FREEIMAGE](FREEIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FREEIMAGE)
---
<blockquote>

### The _FREEIMAGE statement releases the designated file image created by the _LOADIMAGE , _NEWIMAGE or _COPYIMAGE functions from memory when they are no longer needed.

</blockquote>

#### SYNTAX

<blockquote>

`_FREEIMAGE [ handle& ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* If handle& is omitted, the current destination image is freed from memory.
* Freeing the destination image or source image will result in the display page being selected instead.
* Invalid image handle values of -1 or 0 cannot be freed or an "Illegal Function" error will occur. Check the handle value first.
* [SCREEN](SCREEN.md) modes in use cannot be freed or an "Illegal Function" error will occur. Change [SCREEN](SCREEN.md) modes before freeing.
* Once a specific image handle is no longer used or referenced by your program, it can be freed with [_FREEIMAGE](FREEIMAGE.md) .
* Images are not deallocated when the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](FREEIMAGE.md) .
* It is important to free unused or unneeded images with [_FREEIMAGE](FREEIMAGE.md) to prevent memory overflow errors.
* Do not try to free image handles currently being used as the active [SCREEN](SCREEN.md) . Change screen modes first.
* Note that calling [_FREEIMAGE](FREEIMAGE.md) only frees the handle.  It does [NOT](NOT.md) reset the variable used to store the handle back to 0.  (This is because 0 is often used as a short cut value for the current display, such as with [_DEST](DEST.md) 0.)

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Loading a program splash screen and freeing image when no longer necessary:
```vb
s& = _LOADIMAGE("SPLASH.BMP", 32) 'load 32 bit(24 BPP) image
IF s& < -1 THEN SCREEN s& 'use image as a 32 bit SCREEN
_DELAY 6 'display splash screen for 6 seconds
SCREEN 0 'MUST change screen mode before freeing a SCREEN image!
IF s& < -1 THEN _FREEIMAGE s& 'handle value MUST be less than -1 or error!
CLS
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_NEWIMAGE](NEWIMAGE.md)
* [_LOADIMAGE](LOADIMAGE.md)
* [_SCREENIMAGE](SCREENIMAGE.md)
* [_COPYIMAGE](COPYIMAGE.md)
* [_SAVEIMAGE](SAVEIMAGE.md)
</blockquote>
