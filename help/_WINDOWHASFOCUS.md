## _WINDOWHASFOCUS
---

### The _WINDOWHASFOCUS function returns true (-1) if the current program's window has focus. Not supported for macOS.

#### SYNTAX

`hasFocus%% = _WINDOWHASFOCUS`

#### DESCRIPTION
* The function returns true (-1) if the current program is the topmost window on the user's desktop and has focus. If the current program is running behind another window, the function returns false (0).
* Keyword not supported in macOS versions


#### EXAMPLES
##### Example: Detecting if the current program has focus. Windows and Linux-only.
```vb
DO
   IF _WINDOWHASFOCUS THEN
       COLOR 15, 6
       CLS
       PRINT "*** Hi there! ***"
   ELSE
       COLOR 0, 7
       CLS
       PRINT "(ain't nobody looking...)"
   END IF
   _DISPLAY
   _LIMIT 30
LOOP
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_WINDOWHANDLE](./_WINDOWHANDLE.md)
* [_SCREENEXISTS](./_SCREENEXISTS.md)
