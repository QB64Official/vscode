## _MOUSESHOW
---

### The _MOUSESHOW statement displays the mouse cursor and can change its shape.

#### SYNTAX

`_MOUSESHOW [ cursorShape$ ]`

#### DESCRIPTION
* Simply use the statement whenever [_MOUSEHIDE](./_MOUSEHIDE.md) has been used previously.
* In version 1.000 and up the following cursorShape$ can be displayed:


#### EXAMPLES
##### Example 1: QB64 1.000 and up allow special cursors to be displayed by using special string parameters:
```vb
_MOUSESHOW "default": _DELAY 0.5
_MOUSESHOW "link": _DELAY 0.5 'a hand, typically used in web browsers
_MOUSESHOW "text": _DELAY 0.5
_MOUSESHOW "crosshair": _DELAY 0.5
_MOUSESHOW "vertical": _DELAY 0.5
_MOUSESHOW "horizontal": _DELAY 0.5
_MOUSESHOW "topleft_bottomright": _DELAY 0.5
_MOUSESHOW "topright_bottomleft": _DELAY 0.5
```
  


#### SEE ALSO
* [_MOUSEHIDE](./_MOUSEHIDE.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md)
* [_MOUSEMOVE](./_MOUSEMOVE.md)
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEY](./_MOUSEY.md)
* [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* [_MOUSEMOVEMENTX](./_MOUSEMOVEMENTX.md) , [_MOUSEMOVEMENTY](./_MOUSEMOVEMENTY.md)
* [_DEVICES](./_DEVICES.md) , _DEVICE$
