## _RESIZEHEIGHT
---

### The _RESIZEHEIGHT function returns the user resized screen pixel height if $RESIZE :ON allows it and _RESIZE returns -1

#### SYNTAX

`newHeight& = _RESIZEHEIGHT`

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
* [_RESIZEWIDTH](./_RESIZEWIDTH.md)
