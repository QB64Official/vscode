## _SOURCE
---

### The _SOURCE statement establishes the image SOURCE using a handle created by _LOADIMAGE , _NEWIMAGE or _COPYIMAGE .

#### SYNTAX

`_SOURCE handle&`

#### DESCRIPTION
* The handle is a [LONG](./LONG.md) integer value from the [_SOURCE](./_SOURCE.md) function or a handle created by [_NEWIMAGE](./_NEWIMAGE.md) .
* If the handle is designated as 0, it refers to the current [SCREEN](./SCREEN.md) image.
* A source image can only supply information to a program. [POINT](./POINT.md) and [GET](./GET.md) might require a source other than the one currently active.


#### EXAMPLES
```vb
SCREEN 13
a = _NEWIMAGE(320,200,13)
_DEST a
PSET (100, 100), 15
_SOURCE a
_DEST 0
PRINT POINT(100, 100)
```
  
```vb
15
```
  


#### MORE EXAMPLES
* Bitmaps
* SaveImage [SUB](./SUB.md)
* SaveIcon32


#### SEE ALSO
* [_DEST](./_DEST.md)
* [_SOURCE](./_SOURCE.md) (function)
* [POINT](./POINT.md) , [GET](./GET.md) (graphics statement)
