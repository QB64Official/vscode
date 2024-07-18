## _CONSOLETITLE
---

### The _CONSOLETITLE statement creates the title of the console window using a literal or variable string .

#### SYNTAX

`_CONSOLETITLE text$`

#### DESCRIPTION
* The text$ used can be a literal or variable [STRING](./STRING.md) value.


#### EXAMPLES
##### Example: Hiding the main program window while displaying the console window with a title.
```vb
$SCREENHIDE
_DELAY 4
$CONSOLE
_CONSOLETITLE "Error Log"

_DEST _CONSOLE
PRINT "Errors go here! (fyi, this line is not an error)"
END
```
  


#### SEE ALSO
* $[CONSOLE](./CONSOLE.md) , [_CONSOLE](./_CONSOLE.md)
* $SCREENHIDE , $SCREENSHOW
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md)
