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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
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


* [POKE](POKE.md) , [INP](INP.md)
* [DEF](DEF.md) [SEG](SEG.md) , [VARSEG](VARSEG.md) , [VARPTR](VARPTR.md)
* [_MEMGET](MEMGET.md) (function) , [_MEMPUT](MEMPUT.md)
* [DEF](DEF.md) [SEG](SEG.md) = 0 , Scancodes
* [PEEK](PEEK.md) and [POKE](POKE.md) Library
* Screen Memory
</blockquote>
