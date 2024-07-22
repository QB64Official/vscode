## Hardware images
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN _NEWIMAGE(640, 480, 32)

'create some software screens
scr_bg = _NEWIMAGE(640, 480, 32)
scr_fg = _NEWIMAGE(50, 50, 32)

'draw to the background one, and make a nice pattern
_DEST scr_bg
FOR i = 1 TO 100
   LINE (RND * 640, RND * 480)-(RND * 640, RND * 480), _RGBA32(RND * 255, RND * 255, RND * 255, RND * 255), BF
NEXT i

'then do the same thing for the foreground
_DEST scr_fg
LINE (0, 0)-(50, 50), _RGBA32(255, 255, 255, 200), BF

'set image destination to main screen
_DEST 0
DO
   CLS
   _PUTIMAGE , scr_bg
   _PUTIMAGE (x, y), scr_fg
   k = _KEYHIT
   SELECT CASE k
       CASE ASC("w"): y = y - 1
       CASE ASC("a"): x = x - 1
       CASE ASC("s"): y = y + 1
       CASE ASC("d"): x = x + 1
   END SELECT
   _DISPLAY 'render image after changes
   _LIMIT 30 'we're doing all this at 30 cycles/second
LOOP
```
  
```vb
SCREEN _NEWIMAGE(640, 480, 32)

'create some software screens
scr_bg = _NEWIMAGE(640, 480, 32)
scr_fg = _NEWIMAGE(50, 50, 32)

'draw to the background one, and make a nice pattern
_DEST scr_bg
FOR i = 1 TO 100
   LINE (RND * 640, RND * 480)-(RND * 640, RND * 480), _RGBA32(RND * 255, RND * 255, RND * 255, RND * 255), BF
NEXT i
'create a hardware screen version of the background
scrh_bg = _COPYIMAGE(scr_bg, 33)
_FREEIMAGE scr_bg 'we no longer need the software version in memory

'then do the same thing for the foreground
_DEST scr_fg
LINE (0, 0)-(50, 50), _RGBA32(255, 255, 255, 200), BF
'copy to hardware screen
scrh_fg = _COPYIMAGE(scr_fg, 33)
_FREEIMAGE scr_fg 'and free software screen from memory

'set image destination to main screen
_DEST 0
_DISPLAYORDER _HARDWARE 'do not even render the software layer, just the hardware one.
DO 'main program loop
   '_putimage knows these are hardware screens, so destination of 0 is taken as hardware layer
   _PUTIMAGE , scrh_bg
   _PUTIMAGE (x, y), scrh_fg
   'just some input processing
   k = _KEYHIT
   SELECT CASE k
       CASE ASC("w"): y = y - 1
       CASE ASC("a"): x = x - 1
       CASE ASC("s"): y = y + 1
       CASE ASC("d"): x = x + 1
   END SELECT
   _DISPLAY 'render image after changes
   _LIMIT 30 'we're doing all this at 30 cycles/second
LOOP
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_LOADIMAGE](./_LOADIMAGE.md) , [_COPYIMAGE](./_COPYIMAGE.md) , [_SAVEIMAGE](./_SAVEIMAGE.md)
* [_PUTIMAGE](./_PUTIMAGE.md) , [_MAPTRIANGLE](./_MAPTRIANGLE.md)
* [_DISPLAYORDER](./_DISPLAYORDER.md)
* [_FREEIMAGE](./_FREEIMAGE.md)

</blockquote>
