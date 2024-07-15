# _RESIZEWIDTH

The _RESIZEWIDTH function returns the user resized screen pixel width if [$RESIZE]($RESIZE.md):ON allows it and [_RESIZE](_RESIZE.md) "RESIZE (function)") returns -1

  

## Syntax

*newWidth&* = _RESIZEWIDTH
  

## Description

* [_RESIZE](_RESIZE.md) "RESIZE (function)") function must return true (-1) before the requested screen dimensions can be returned by the function.
* The program should decide if the request is allowable for proper program interaction.

  

## Availability

* **Version 1.000 and up**.

  

## Examples

*Example:* Resize the current screen image according to user's request.

``` [$RESIZE]($RESIZE.md):ON  s& = [_NEWIMAGE](_NEWIMAGE.md)(300, 300, 32) [SCREEN](SCREEN.md) s&  bee& = [_LOADIMAGE](_LOADIMAGE.md)("qb64_trans.png") 'any image  [DO](DO.md)     [IF](IF.md) [_RESIZE](_RESIZE.md) "RESIZE (function)") THEN         oldimage& = s&         s& = _NEWIMAGE(_RESIZEWIDTH, _RESIZEHEIGHT, 32)         SCREEN s&         [_FREEIMAGE](_FREEIMAGE.md) oldimage&     END IF      [CLS](CLS.md)      'Center the QB64 bee image:     x = [_WIDTH](_WIDTH.md) "WIDTH (function)") / 2 - _WIDTH(bee&) / 2     y = [_HEIGHT](_HEIGHT.md) / 2 - _HEIGHT(bee&) / 2     [_PUTIMAGE](_PUTIMAGE.md) (x, y), bee&     [_DISPLAY](_DISPLAY.md)     [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md)  
```

  

## See also

* [$RESIZE]($RESIZE.md)
* [_RESIZE (function)](_RESIZE (function).md) "RESIZE (function)")
* [_RESIZEHEIGHT](_RESIZEHEIGHT.md)

  
