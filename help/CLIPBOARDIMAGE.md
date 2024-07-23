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


## [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARDIMAGE)
---
<blockquote>

### The _CLIPBOARDIMAGE statement copies a valid QB64 image to the clipboard.

</blockquote>

#### SYNTAX

<blockquote>

`_CLIPBOARDIMAGE = existingImageHandle&`

</blockquote>

#### DESCRIPTION

<blockquote>


* existingImageHandle& is a valid handle to a graphic QB64 image in memory, created with [_NEWIMAGE](NEWIMAGE.md) , [_LOADIMAGE](LOADIMAGE.md) or [_COPYIMAGE](COPYIMAGE.md) .
* You can pass [_SOURCE](SOURCE.md) , [_DEST](DEST.md) or [_DISPLAY](DISPLAY.md) to copy the current source, destination or active display pages, as long as they are valid graphic images.
* [SCREEN](SCREEN.md) 0 handles (created either with [_NEWIMAGE](NEWIMAGE.md) or passed using [_DEST](DEST.md) while in a text screen) are not valid and will create an Illegal Function Call or Invalid Handle error.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN _NEWIMAGE(800, 600, 32)

'Create image in memory:
canvas& = _NEWIMAGE(300, 200, 32)
_DEST canvas&

'Draw some random rectangles:
RANDOMIZE TIMER
FOR i = 1 TO 100
LINE (-100 + RND * _WIDTH, -100 + RND * _HEIGHT)-STEP(RND * 150, RND * 150), _RGB(RND * 255, RND * 255, RND * 255), BF
NEXT
LINE (0, 0)-(_WIDTH - 1, _HEIGHT - 1), _RGB(255, 255, 255), B
COLOR _RGB(0, 0, 0), _RGB(255, 255, 255)
m$ = " Hello, world! "
_PRINTSTRING (_WIDTH / 2 - _PRINTWIDTH(m$) / 2, _HEIGHT / 2 - _FONTHEIGHT / 2), m$

'Show the image:
_DEST 0
_PUTIMAGE (_WIDTH / 2 - _WIDTH(canvas&) / 2, _HEIGHT / 2 - _HEIGHT(canvas&) / 2), canvas&
PRINT "Image generated."

'Copy to the clipboard:
_CLIPBOARDIMAGE = canvas&

PRINT "Image copied to clipboard."
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (function - used to paste an image from the clipboard)
* [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) , [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) (function) (used to copy/paste text)
</blockquote>
