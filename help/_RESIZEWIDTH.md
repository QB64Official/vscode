## _RESIZEWIDTH
---

### The _RESIZEWIDTH function returns the user resized screen pixel width if $RESIZE :ON allows it and _RESIZE returns -1

#### SYNTAX

`newWidth& = _RESIZEWIDTH`

#### DESCRIPTION
* [_RESIZE](./_RESIZE.md) function must return true (-1) before the requested screen dimensions can be returned by the function.
* The program should decide if the request is allowable for proper program interaction.


#### EXAMPLES
##### Example: Resize the current screen image according to user's request.
```vb
$RESIZE:ON

s& = _NEWIMAGE(300, 300, 32)
SCREEN s&

bee& = _LOADIMAGE("qb64_trans.png") 'any image

DO
   IF _RESIZE THEN
       oldimage& = s&
       s& = _NEWIMAGE(_RESIZEWIDTH, _RESIZEHEIGHT, 32)
       SCREEN s&
       _FREEIMAGE oldimage&
   END IF

   CLS

   'Center the QB64 bee image:
   x = _WIDTH / 2 - _WIDTH(bee&) / 2
   y = _HEIGHT / 2 - _HEIGHT(bee&) / 2
   _PUTIMAGE (x, y), bee&
   _DISPLAY
   _LIMIT 30
LOOP
```
  


#### SEE ALSO
* $RESIZE
* [_RESIZE](./_RESIZE.md) (function)
* [_RESIZEHEIGHT](./_RESIZEHEIGHT.md)
