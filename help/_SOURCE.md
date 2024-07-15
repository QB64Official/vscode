# _SOURCE

The _SOURCE statement establishes the image SOURCE using a handle created by [_LOADIMAGE](_LOADIMAGE.md), [_NEWIMAGE](_NEWIMAGE.md) or [_COPYIMAGE](_COPYIMAGE.md).

  

## Syntax

_SOURCE *handle&*
  

## Description

* The handle is a [LONG](LONG.md) integer value from the [_SOURCE](_SOURCE.md) "SOURCE (function)") function or a handle created by [_NEWIMAGE](_NEWIMAGE.md).
* If the handle is designated as 0, it refers to the current [SCREEN](SCREEN.md) image.
* A source image can only supply information to a program. [POINT](POINT.md) and [GET](GET.md) "GET (graphics statement)") might require a source other than the one currently active.

  

## Examples

``` [SCREEN](SCREEN.md) 13 a = [_NEWIMAGE](_NEWIMAGE.md)(320,200,13) [_DEST](_DEST.md) a [PSET](PSET.md) (100, 100), 15 _SOURCE a [_DEST](_DEST.md) 0 [PRINT](PRINT.md) [POINT](POINT.md)(100, 100)  
```

```  15  
```

*Explanation:* Create a new image with handle 'a', then use [_DEST](_DEST.md) to define the image to draw on. Draw a pixel then set the source to 'a' and use [POINT](POINT.md) to show what color is in that position. White (15) and is the color set with [PSET](PSET.md). Use [_DEST](_DEST.md) 0 for the screen to display the results.
### More examples

* [Bitmaps](Bitmaps.md)
* [SaveImage SUB](SaveImage SUB.md)
* [SaveIcon32](SaveIcon32.md)

  

## See also

* [_DEST](_DEST.md)
* [_SOURCE (function)](_SOURCE (function).md) "SOURCE (function)")
* [POINT](POINT.md), [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)")

  
