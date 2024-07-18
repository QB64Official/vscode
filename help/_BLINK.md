## _BLINK
---

### The _BLINK statement toggles blinking colors in text mode (SCREEN 0). Default state is ON.

#### SYNTAX

`_BLINK {ON|OFF}`

#### DESCRIPTION
* [SCREEN](./SCREEN.md) 0 emulates the VGA palette with regular colors from 0 to 15 and blinking colors from 16-31 (these are the same colors as 0-15, except their blink attribute is set to on). [_BLINK](./_BLINK.md) [OFF](./OFF.md) emulates writing to the video memory and disabling blinking for colors 16-31.
* Using colors 16-31 for the foreground with [_BLINK](./_BLINK.md) set to [OFF](./OFF.md) will produce high intensity background colors.
* [_BLINK](./_BLINK.md) is only effective in [SCREEN](./SCREEN.md) 0. It's ignored in graphic modes.
* [IF](./IF.md) [_DISPLAY](./_DISPLAY.md) is used, blinking is disabled, even if [_BLINK](./_BLINK.md) is [ON](./ON.md), but high intensity backgrounds aren't enabled in this case.


#### EXAMPLES
```vb
COLOR 16, 7
PRINT "This is printed in black over gray background. Black letters are blinking."
PRINT "Hit a key..."
SLEEP
_BLINK OFF
PRINT "Now the same text is printed in black over bright white, because blinking was disabled."
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_BLINK](./_BLINK.md) (function)
* [OUT](./OUT.md)
* [_DISPLAY](./_DISPLAY.md)
