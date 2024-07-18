## _SCREENPRINT
---

### The _SCREENPRINT statement simulates typing text into a Windows focused program.

#### SYNTAX

`_SCREENPRINT text$`

#### DESCRIPTION
* Keyword not supported in Linux or macOS versions
* text$ is the text to be typed into a focused program's text entry area, one character at a time.
* Set the focus to a desktop program by using the [_SCREENIMAGE](./_SCREENIMAGE.md) handle as the [_SOURCE](./_SOURCE.md) . Use the image to map the desired area.
* [_SCREENCLICK](./_SCREENCLICK.md) can also be used to set the focus to a program's text entry area on the desktop.
* Note: If the focus is not set correctly, the text may be printed to the QB64 IDE, if open, or not printed at all.
* Ctrl + letter key shortcuts can be simulated using the appropriate ASCII Control character codes 1 to 26 shown below:


#### EXAMPLES
##### Example: Printing text into a Windows text editor (Notepad) and copying to the clipboard. May not work on all systems.
```vb
DEFLNG A-Z
SCREEN _NEWIMAGE(640, 480, 32)
PRINT "OPENing and MAXIMIZING Notepad in 5 seconds..."; : _DELAY 5
SHELL _DONTWAIT "START /MAX NotePad.exe"  'opens Notepad file "untitled.txt"
'detect notepad open and maximized
'condition: 80% or more of the screen is white
DO                     'read the desktop screen image for maximized window
 s = _SCREENIMAGE
 _SOURCE s
 z = 0
 FOR y = 0 TO _HEIGHT(s) - 1   'scan for large white area
   FOR x = 0 TO _WIDTH(s) - 1
      c = POINT(x, y)
      IF c = _RGB32(255, 255, 255) THEN z = z + 1
   NEXT
 NEXT
 IF z / (_HEIGHT(s) * _WIDTH(s)) > 0.8 THEN EXIT DO 'when 80% of screen is white
 _FREEIMAGE s   'free desktop image
 _LIMIT 1       'scans 1 loop per second
PRINT ".";
LOOP
PRINT
PRINT "NOTEPAD detected as OPEN and MAXIMIZED"


_SCREENPRINT "HELLO WORLD"
SLEEP 2
_SCREENPRINT CHR$(8) + CHR$(8) + CHR$(8) + CHR$(8) + CHR$(8) 'backspace 5 characters
SLEEP 3
_SCREENPRINT "QB64!"
SLEEP 2
_SCREENPRINT CHR$(1) 'CTRL + A select all
SLEEP 2
_SCREENPRINT CHR$(3) 'CTRL + C copy to clipboard
SLEEP 2
PRINT CLIPBOARD$
_CLIPBOARD$ = "QB64 ROCKS!"
SLEEP 2
_SCREENPRINT CHR$(22) 'CTRL + V paste from clipboard
END
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_SCREENIMAGE](./_SCREENIMAGE.md) , [_SCREENCLICK](./_SCREENCLICK.md)
* [_SCREENMOVE](./_SCREENMOVE.md) , [_SCREENX](./_SCREENX.md) , [_SCREENY](./_SCREENY.md)
* ASCII
