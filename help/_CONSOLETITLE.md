# _CONSOLETITLE

The _CONSOLETITLE statement creates the title of the console window using a literal or variable [string](string.md).

  

## Syntax

_CONSOLETITLE *text$*
  

## Description

* The *text$* used can be a literal or variable [STRING](STRING.md) value.

  

## Examples

*Example:* Hiding the main program window while displaying the console window with a title.

``` [$SCREENHIDE]($SCREENHIDE.md) [_DELAY](_DELAY.md) 4 [$CONSOLE]($CONSOLE.md) _CONSOLETITLE "Error Log"  [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) [PRINT](PRINT.md) "Errors go here! (fyi, this line is not an error)" [END](END.md)  
```

*Note:* You can also use [SHELL](SHELL.md) "title consoletitle" to set the title of the console window. However, **the recommended practice is to use _CONSOLETITLE**.
  

## See also

* [$CONSOLE]($CONSOLE.md), [_CONSOLE](_CONSOLE.md)
* [$SCREENHIDE]($SCREENHIDE.md), [$SCREENSHOW]($SCREENSHOW.md)
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md)

  
