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


## [POKE](POKE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/POKE)
---
<blockquote>

### The POKE statement sets the value of a specified memory address offset. QB64 currently has limited access!

</blockquote>

#### SYNTAX

<blockquote>

`POKE segment_offset , offset_value`

</blockquote>

#### DESCRIPTION

<blockquote>


* Writes a value to the segment_offset address in memory.
* [POKE](POKE.md) can only be used to set a value from 0 to 255 (one byte).
* A segment should be defined using [DEF](DEF.md) [SEG](SEG.md) , if you don't define a segment QBasic's ordinary segment will be used.
* [POKE](POKE.md) sends byte values to memory areas. It does not directly access registers.
* Important [SCREEN](SCREEN.md) segments using [PEEK](PEEK.md) and [POKE](POKE.md) include &HB800 (text segment) and &HA000 (graphics segment).
* [DEF](DEF.md) [SEG](SEG.md) should always be used to reset the default segment when access to other memory is no longer necessary.
* [POKE](POKE.md) is safer to use than [OUT](OUT.md) which could damage a PC register.
* Warning: [DEF](DEF.md) SEG, [VARSEG](VARSEG.md) , VARPTR, [PEEK](PEEK.md) or [POKE](POKE.md) access QB64's emulated 16 bit conventional memory block!

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DEF SEG = 0
oldsetting% = PEEK(1047)
POKE 1047,PEEK(1047) OR 16 ' ENABLES SCROLL LOCK
POKE 1047,PEEK(1047) OR 32 ' ENABLES NUMBER LOCK
POKE 1047,PEEK(1047) OR 64 ' ENABLES CAPS LOCK
POKE 1047,PEEK(1047) OR 128 ' ENABLES INSERT MODE
DEF SEG
```
  
<br>

```vb
DEF SEG = 0
oldsetting% = PEEK(1047)
POKE 1047,PEEK(1047) AND 239 ' TURNS OFF SCROLL LOCK (239 = 255 - 16)
POKE 1047,PEEK(1047) AND 223 ' TURNS OFF NUMBER LOCK (223 = 255 - 32)
POKE 1047,PEEK(1047) AND 191 ' TURNS OFF CAPS LOCK (191 = 255 - 64)
POKE 1047,PEEK(1047) AND 127 ' TURNS OFF INSERT MODE (127 = 255 - 128)
DEF SEG
```
  
<br>



##### Example 2: A small PEEK and POKE fractal program.
```vb
SCREEN 13
DEF SEG = &HA000     'set to read screen buffer
DO
FOR a& = 0 TO 65535
POKE a&, PEEK((a& * 2) AND &HFFFF&) + 1
NEXT
_LIMIT 25
LOOP UNTIL INKEY$ <> ""
DEF SEG
```
  
<br>



##### Example 3: Highlighting a row of text in Screen 0
```vb
minX = 20: maxX = 60: minY = 10: maxY = 24
selection = 0 'the screen Y coordinate of the previously highlighted item
FOR i% = 1 TO 25: LOCATE i%, 40: PRINT i%;: NEXT
DO: _LIMIT 100
IF _MOUSEINPUT THEN
'Un-highlight any selected row
IF selection THEN selectRow selection, minX, maxX, 0
x = CINT(_MOUSEX)
y = CINT(_MOUSEY)
IF x >= minX AND x <= maxX AND y >= minY AND y <= maxY THEN
selection = y
ELSE
selection = 0
END IF
'Highlight any selected row
IF selection THEN SelectRow selection, minX, maxX, 2
IF _MOUSEBUTTON(1) THEN LOCATE 1, 2: PRINT x, y, selection
END IF
LOOP UNTIL INKEY$ <> ""

SUB SelectRow (y, x1, x2, col)
DEF SEG = &HB800
addr& = (x1 - 1 + (y - 1) * _WIDTH) * 2 + 1
FOR x = x1 TO x2
oldCol = PEEK(addr&) AND &B10001111   ' Mask foreground color and blink bit
POKE addr&, oldCol OR ((col AND &B111) * &B10000) ' Apply background color
addr& = addr& + 2
NEXT
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DEF](DEF.md) [SEG](SEG.md) , [DEF](DEF.md) [SEG](SEG.md) = 0
* [PEEK](PEEK.md) , [OUT](OUT.md)
* [VARSEG](VARSEG.md) , [VARPTR](VARPTR.md)
* [_MEMGET](MEMGET.md) (function) , [_MEMPUT](MEMPUT.md)
* Scancodes , Screen Memory
* [PEEK](PEEK.md) and [POKE](POKE.md) Library
</blockquote>
