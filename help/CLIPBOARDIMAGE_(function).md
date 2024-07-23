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


## [_CLIPBOARDIMAGE (function)](CLIPBOARDIMAGE_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARDIMAGE%20%28function%29)
---
<blockquote>

### The _CLIPBOARDIMAGE function pastes an image from the clipboard into a new 32-bit image in memory.

</blockquote>

#### SYNTAX

<blockquote>

`newImageHandle& = _CLIPBOARDIMAGE`

</blockquote>

#### DESCRIPTION

<blockquote>


* When the paste operation is successful, newImageHandle& will be < -1. Handle values of -1 or 0 indicate that there wasn't an image in the clipboard or that the format wasn't accepted.
* Use [_FREEIMAGE](FREEIMAGE.md) to free the memory used by newImageHandle& when it's no longer needed by your program.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN _NEWIMAGE(800, 600, 32)
DO
CLS
COLOR _RGB32(177, 177, 177)
PRINT "Monitoring clipboard..."
IF img& < -1 THEN _FREEIMAGE img&
img& = _CLIPBOARDIMAGE
IF img& < -1 THEN
PRINT "Image found:"
COLOR _RGB32(255, 255, 255)
PRINT "Width :"; _WIDTH(img&)
PRINT "Height:"; _HEIGHT(img&)
w = _WIDTH / 2 - _WIDTH(img&) / 2
IF w < 0 THEN w = 0
_PUTIMAGE (w, CSRLIN * _FONTHEIGHT), img&
ELSE
PRINT "No image found."
END IF
_DISPLAY
_LIMIT 10
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (statement - used to copy an image to the clipboard)
* [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) , [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) (function) (used to copy/paste text)
</blockquote>
