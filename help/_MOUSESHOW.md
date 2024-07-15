# _MOUSESHOW

The _MOUSESHOW statement displays the mouse cursor and can change its shape.

  

## Syntax

_MOUSESHOW [*cursorShape$*]
  

## Description

* Simply use the statement whenever [_MOUSEHIDE](_MOUSEHIDE.md) has been used previously.
* In **version 1.000 and up** the following *cursorShape$* can be displayed:

_MOUSESHOW "LINK" will display an upward pointing hand cursor used to denote hypertext
_MOUSESHOW "TEXT" will display the I cursor often used in text entry areas
_MOUSESHOW "CROSSHAIR" will display a crosshair cursor
_MOUSESHOW "VERTICAL" will display vertical arrow cursor for movement
_MOUSESHOW "HORIZONTAL" will display horizontal arrow cursor for movement
_MOUSESHOW "TOPLEFT_BOTTOMRIGHT" will display bottom diagonal arrow cursor for movement
_MOUSESHOW "TOPRIGHT_BOTTOMLEFT" will display bottom diagonal arrow cursor for movement
_MOUSESHOW "DEFAULT" can be used after a mouse cursor statement above was previously used.
* This statement will also disable [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md) or [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md) relative mouse movement reads.
* The mouse cursor will not interfere with any print or graphic screen changes in **QB64**.

### QBasic/QuickBASIC

* _MOUSEHIDE statements do not accumulate like they did with [ABSOLUTE](ABSOLUTE.md) or [INTERRUPT](INTERRUPT.md) in QBasic.

  

## Examples

*Example 1:* **QB64 1.000 and up** allow special cursors to be displayed by using special string parameters:

``` _MOUSESHOW "default": [_DELAY](_DELAY.md) 0.5 _MOUSESHOW "link": [_DELAY](_DELAY.md) 0.5 'a hand, typically used in web browsers _MOUSESHOW "text": [_DELAY](_DELAY.md) 0.5 _MOUSESHOW "crosshair": [_DELAY](_DELAY.md) 0.5 _MOUSESHOW "vertical": [_DELAY](_DELAY.md) 0.5 _MOUSESHOW "horizontal": [_DELAY](_DELAY.md) 0.5 _MOUSESHOW "topleft_bottomright": [_DELAY](_DELAY.md) 0.5 _MOUSESHOW "topright_bottomleft": [_DELAY](_DELAY.md) 0.5  
```

**Note:** There is no hourglass, stopwatch or spinning colorful wheel in the list. The fact is that these typically only appear in a program when something has gone terribly wrong and the program has crashed or frozen.
  

## See also

* [_MOUSEHIDE](_MOUSEHIDE.md)
* [_MOUSEINPUT](_MOUSEINPUT.md)
* [_MOUSEMOVE](_MOUSEMOVE.md)
* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md)
* [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [_MOUSEMOVEMENTX](_MOUSEMOVEMENTX.md), [_MOUSEMOVEMENTY](_MOUSEMOVEMENTY.md)
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md)

  
