## SCREEN
---

### The SCREEN statement sets the video display mode and size of the program window's workspace.

#### SYNTAX

`SCREEN { mode% | imagehandle& } [, , active_page, visual_page]`

#### PARAMETERS
* The [SCREEN](./SCREEN.md) mode [INTEGER](./INTEGER.md) values available today are 0 to 2 and 7 to 13 listed below.
* QB64 can use a [LONG](./LONG.md) [_NEWIMAGE](./_NEWIMAGE.md) page or [_LOADIMAGE](./_LOADIMAGE.md) file image handle value instead.
* The empty comma disables color when any value is used. [DO](./DO.md) [NOT](./NOT.md) USE! Include the comma [ONLY](./ONLY.md) when using page flipping.
* If the [SCREEN](./SCREEN.md) mode supports pages, the active page is the page to be worked on while visual page is the one displayed.


#### EXAMPLES
```vb
SCREEN 0
PRINT "This is SCREEN 0 - only text is allowed!"
FOR S = 1 TO 13
  IF S < 3 OR S > 6 THEN
    DO: SLEEP: LOOP UNTIL INKEY$ <> ""
    SCREEN S
    PRINT "This is SCREEN"; S; " - can use text and graphics!"
      IF S = 2 OR S = 11 THEN PRINT "Monochrome - no COLOR statements!"
      IF S = 10 THEN
        COLOR 2: PRINT "This SCREEN has only 4 colors. Black and 3 white: 2 blinks.
        CIRCLE (100,100), 50, 2
      ELSE : CIRCLE (100,100), 100, S
      END IF
  END IF
NEXT
SLEEP
SYSTEM
```
  
```vb
This is SCREEN 0 - only text is allowed!
```
  
##### ( Return to Table of Contents )


#### SEE ALSO
* [COLOR](./COLOR.md) , [CLS](./CLS.md) , [WIDTH](./WIDTH.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_LOADIMAGE](./_LOADIMAGE.md) , [_SAVEIMAGE](./_SAVEIMAGE.md)
* [_SCREENIMAGE](./_SCREENIMAGE.md)
* [_LOADFONT](./_LOADFONT.md) , [_FONT](./_FONT.md)
* [_DISPLAY](./_DISPLAY.md) , [_COPYIMAGE](./_COPYIMAGE.md) , [_SCREENMOVE](./_SCREENMOVE.md)
* [_SCREENHIDE](./_SCREENHIDE.md) , [_SCREENSHOW](./_SCREENSHOW.md) , [_SCREENICON](./_SCREENICON.md)
* [PALETTE](./PALETTE.md) , [OUT](./OUT.md) , [PCOPY](./PCOPY.md) ,
* [GET](./GET.md) , [PUT](./PUT.md)
* [VIEW](./VIEW.md) , [WINDOW](./WINDOW.md) , [VIEW](./VIEW.md) [PRINT](./PRINT.md)
* [SCREEN](./SCREEN.md) (function) , [POINT](./POINT.md)
* Screen Memory , Screen Saver Programs
* [_CONSOLE](./_CONSOLE.md)
