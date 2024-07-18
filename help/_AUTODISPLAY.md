## _AUTODISPLAY
---

### The _AUTODISPLAY statement enables the automatic display of the screen image changes previously disabled by _DISPLAY .

#### SYNTAX

`_AUTODISPLAY`

#### DESCRIPTION
* [_AUTODISPLAY](./_AUTODISPLAY.md) is on by default and displays the screen at around 30 frames per second (normal vertical retrace speed).
* [_DISPLAY](./_DISPLAY.md) disables automatic graphic displays, but it also eliminates having to use [PCOPY](./PCOPY.md) or page flipping when used correctly. Placing [_DISPLAY](./_DISPLAY.md) after screen draws or other screen changes assures completion of the changes before they are displayed. The speed of QB64 code execution makes this a viable option.
* The [_AUTODISPLAY](./_AUTODISPLAY.md) (function) can be used to detect the current display behavior.


#### SEE ALSO
* [_DISPLAY](./_DISPLAY.md)
* [_AUTODISPLAY](./_AUTODISPLAY.md) (function)
