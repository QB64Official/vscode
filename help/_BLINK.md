# _BLINK

The _BLINK statement toggles blinking colors in text mode (SCREEN 0). Default state is ON.

  

## Syntax

_BLINK {ON|OFF}
  

## Description

* SCREEN 0 emulates the VGA palette with regular colors from 0 to 15 and blinking colors from 16-31 (these are the same colors as 0-15, except their blink attribute is set to on). _BLINK OFF emulates writing to the video memory and disabling blinking for colors 16-31.
* Using colors 16-31 for the foreground with _BLINK set to OFF will produce high intensity background colors.
* _BLINK is only effective in SCREEN 0. It's ignored in graphic modes.
* IF [_DISPLAY](_DISPLAY.md) is used, blinking is disabled, even if _BLINK is ON, but high intensity backgrounds aren't enabled in this case.

  

## Availability

* Build 20170816/61 up (August 16, 2017).

  

## Examples

``` [COLOR](COLOR.md) 16, 7 [PRINT](PRINT.md) "This is printed in black over gray background. Black letters are blinking." [PRINT](PRINT.md) "Hit a key..." [SLEEP](SLEEP.md) _BLINK [OFF](OFF.md) [PRINT](PRINT.md) "Now the same text is printed in black over bright white, because blinking was disabled."  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_BLINK (function)](_BLINK (function).md) "BLINK (function)")
* [OUT](OUT.md)
* [_DISPLAY](_DISPLAY.md)

  
