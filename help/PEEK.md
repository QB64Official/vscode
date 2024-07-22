<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [PEEK](PEEK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PEEK)
---
<blockquote>

### The PEEK function returns the value that is contained at a certain memory address offset. QB64 currently has limited access!

</blockquote>

#### SYNTAX

<blockquote>

`variable = PEEK( segment_offset )`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Checking the 8 keyboard bit settings using a PEEK return value.
```vb
SCREEN 12
DEF SEG = 0 ' BIOS area
oldvalue = PEEK(1047) ' IMPORTANT! save initial setting to reset later
DO: _LIMIT 100
port = PEEK(1047)
IF port > 0 THEN LOCATE 26, 19: COLOR 11:
PRINT "Turn ALL Locks off to see each key's bit value!"
END IF
COLOR 14:LOCATE 2, 25
PRINT "PEEK(1047) ="; port; "present keyboard port byte value"
LOCATE 5, 35
IF (port AND 1) = 1 THEN COLOR 10: PRINT "R SHIFT PRESSED  " ELSE COLOR 12: PRINT "R SHIFT RELEASED"
LOCATE 7, 35
IF (port AND 2) = 2 THEN COLOR 10: PRINT "L SHIFT PRESSED  " ELSE COLOR 12: PRINT "L SHIFT RELEASED"
LOCATE 9, 35
IF (port AND 4) = 4 THEN COLOR 10: PRINT "CTRL KEY PRESSED " ELSE COLOR 12: PRINT "CTRL KEY RELEASED"
LOCATE 11, 35
IF (port AND 8) = 8 THEN COLOR 10: PRINT "ALT KEY PRESSED " ELSE COLOR 12: PRINT "ALT KEY RELEASED"
LOCATE 13, 35
IF (port AND 16) = 16 THEN COLOR 10: PRINT "SCROLL LOCK ON " ELSE COLOR 12: PRINT "SCROLL LOCK OFF"
LOCATE 15, 35
IF (port AND 32) = 32 THEN COLOR 10: PRINT "NUMBER LOCK ON " ELSE COLOR 12: PRINT "NUMBER LOCK OFF"
LOCATE 17, 35
IF (port AND 64) = 64 THEN COLOR 10: PRINT "CAPS LOCK ON " ELSE COLOR 12: PRINT "CAPS LOCK OFF"
LOCATE 19, 35
IF (port AND 128) = 128 THEN COLOR 10: PRINT "INSERT MODE ON " ELSE COLOR 12: PRINT "INSERT MODE OFF"
COLOR 11: LOCATE 21, 20: PRINT "Press mode keys to change or [ESC] to quit!";
LOOP UNTIL INP(&H60) = 1 ' escape key exit
POKE 1047, oldvalue      ' IMPORTANT reset to original settings
DEF SEG
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [POKE](POKE.md)  , [INP](INP.md) 
*  [DEF](DEF.md) [SEG](SEG.md)  , [VARSEG](VARSEG.md)  , [VARPTR](VARPTR.md) 
*  [_MEMGET](MEMGET.md)  (function) , [_MEMPUT](MEMPUT.md) 
*  [DEF](DEF.md) [SEG](SEG.md)  = 0 , Scancodes
*  [PEEK](PEEK.md)  and [POKE](POKE.md)  Library
*  Screen Memory

</blockquote>
