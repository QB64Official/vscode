# _ALLOWFULLSCREEN

The _ALLOWFULLSCREEN statement allows setting the behavior of the ALT+ENTER combo.

  

## Syntax

_ALLOWFULLSCREEN [{_STRETCH|_SQUAREPIXELS|OFF|_ALL}][, {_SMOOTH|OFF|_ALL}]
  

## Description

* Calling the statement with no parameters enables all four possible full screen modes (and is the default state when a program is started): both [_STRETCH](_STRETCH.md) ([_SMOOTH](_SMOOTH.md) and [_OFF](_OFF.md)) and [_SQUAREPIXELS](_SQUAREPIXELS.md) ([_SMOOTH](_SMOOTH.md) and [_OFF](_OFF.md)).
	+ Using _ALLOWFULLSCREEN [_ALL](_ALL.md), [_ALL](_ALL.md) has the same effect.
* _ALLOWFULLSCREEN only affects the behavior of ALT+ENTER. The [_FULLSCREEN](_FULLSCREEN.md) statement is not bound by _ALLOWFULLSCREEN's settings so all modes can be accessed programmatically.
* To limit just the mode but allow both _SMOOTH + _OFF antialiasing modes, pass just the first parameter: *Example:* _ALLOWFULLSCREEN _SQUAREPIXELS
* To allow multiple modes with _SMOOTH or _OFF as default, pass just the second parameter. *Example:* _ALLOWFULLSCREEN , _SMOOTH
* Any possible permutation of the parameters is allowed.
* With _ALLOWFULLSCREEN _OFF you can trap Alt+Enter manually in your program and reassign it. See example 2 below.

  

## Availability

* **Version 1.3 and up**.

  

## Examples

*Example 1:* Allowing only one fullscreen mode with square pixels and no antialiasing:

``` _ALLOWFULLSCREEN [_SQUAREPIXELS](_SQUAREPIXELS.md) , [OFF](OFF.md)  
```

---

*Example 2:* Disabling _FULLSCREEN with Alt+ENTER so the combo can be manually trapped:

``` [DO](DO.md)     [CLS](CLS.md)      [LOCATE](LOCATE.md) 7     [PRINT](PRINT.md) "    - Press ALT+ENTER to test trapping the combo..."     [PRINT](PRINT.md) "    _ Press SPACEBAR to allow fullscreen again..."      k& = [_KEYHIT](_KEYHIT.md)      [IF](IF.md) k& = 13 [THEN](THEN.md)         [IF](IF.md) [_KEYDOWN](_KEYDOWN.md)(100307) [OR](OR.md) "OR (boolean)") [_KEYDOWN](_KEYDOWN.md)(100308) [THEN](THEN.md)             altEnter = altEnter + 1         [END IF](END IF.md)     [ELSEIF](ELSEIF.md) k& = 32 [THEN](THEN.md)         fullscreenEnabled = [NOT](NOT.md) fullscreenEnabled     [END IF](END IF.md)      [LOCATE](LOCATE.md) 14     [IF](IF.md) fullscreenEnabled [THEN](THEN.md)         _ALLOWFULLSCREEN [_ALL](_ALL.md) , [_ALL](_ALL.md)         altEnter = 0         [PRINT](PRINT.md) "_ALLOWFULLSCREEN _ALL, _ALL"          [LOCATE](LOCATE.md) 18         [PRINT](PRINT.md) "ALT+ENTER will trigger all four fullscreen modes now."     [ELSE](ELSE.md)         _ALLOWFULLSCREEN [OFF](OFF.md)         [PRINT](PRINT.md) "_ALLOWFULLSCREEN OFF"     [END IF](END IF.md)      [IF](IF.md) altEnter [THEN](THEN.md)         [LOCATE](LOCATE.md) 18         [PRINT](PRINT.md) "ALT+ENTER manually trapped"; altEnter; "times."     [END IF](END IF.md)      [_DISPLAY](_DISPLAY.md)     [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md)  
```

  

## See also

* [_FULLSCREEN](_FULLSCREEN.md), [_SMOOTH (function)](_SMOOTH (function).md) "SMOOTH (function)")

  
