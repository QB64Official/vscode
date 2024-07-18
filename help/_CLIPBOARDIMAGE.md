## _CLIPBOARDIMAGE
---

### The _CLIPBOARDIMAGE statement copies a valid QB64 image to the clipboard.

#### SYNTAX

`_CLIPBOARDIMAGE = existingImageHandle&`

#### DESCRIPTION
* existingImageHandle& is a valid handle to a graphic QB64 image in memory, created with [_NEWIMAGE](./_NEWIMAGE.md) , [_LOADIMAGE](./_LOADIMAGE.md) or [_COPYIMAGE](./_COPYIMAGE.md) .
* You can pass [_SOURCE](./_SOURCE.md) , [_DEST](./_DEST.md) or [_DISPLAY](./_DISPLAY.md) to copy the current source, destination or active display pages, as long as they are valid graphic images.
* [SCREEN](./SCREEN.md) 0 handles (created either with [_NEWIMAGE](./_NEWIMAGE.md) or passed using [_DEST](./_DEST.md) while in a text screen) are not valid and will create an Illegal Function Call or Invalid Handle error.


#### EXAMPLES
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
  


#### SEE ALSO
* [_CLIPBOARDIMAGE](./_CLIPBOARDIMAGE.md) (function - used to paste an image from the clipboard)
* _CLIPBOARD$ , _CLIPBOARD$ (function) (used to copy/paste text)
