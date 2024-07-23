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


## [_SCREENPRINT](SCREENPRINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SCREENPRINT)
---
<blockquote>

### The _SCREENPRINT statement simulates typing text into a Windows focused program.

</blockquote>

#### SYNTAX

<blockquote>

`_SCREENPRINT text$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Keyword not supported in Linux or macOS versions
* text$ is the text to be typed into a focused program's text entry area, one character at a time.
* Set the focus to a desktop program by using the [_SCREENIMAGE](SCREENIMAGE.md) handle as the [_SOURCE](SOURCE.md) . Use the image to map the desired area.
* [_SCREENCLICK](SCREENCLICK.md) can also be used to set the focus to a program's text entry area on the desktop.
* Note: If the focus is not set correctly, the text may be printed to the QB64 IDE, if open, or not printed at all.
* Ctrl + letter key shortcuts can be simulated using the appropriate ASCII Control character codes 1 to 26 shown below:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
CTRL + A = CHR$(1)   ☺  StartHeader (SOH)    CTRL + B = CHR$(2)   ☻  StartText         (STX)
CTRL + C = CHR$(3)   ♥  EndText     (ETX)    CTRL + D = CHR$(4)   ♦  EndOfTransmit     (EOT)
CTRL + E = CHR$(5)   ♣  Enquiry     (ENQ)    CTRL + F = CHR$(6)   ♠  Acknowledge       (ACK)
CTRL + G = CHR$(7)   •  BEEP        (BEL)    CTRL + H = CHR$(8)   ◘  [Backspace]       (BS)
CTRL + I = CHR$(9)   ○  Horiz.Tab   [Tab]    CTRL + J = CHR$(10)  ◙  LineFeed(printer) (LF)
CTRL + K = CHR$(11)  ♂  Vert. Tab   (VT)     CTRL + L = CHR$(12)  ♀  FormFeed(printer) (FF)
CTRL + M = CHR$(13)  ♪  [Enter]     (CR)     CTRL + N = CHR$(14)  ♫  ShiftOut          (SO)
CTRL + O = CHR$(15)  ☼  ShiftIn     (SI)     CTRL + P = CHR$(16)  ►  DataLinkEscape    (DLE)
CTRL + Q = CHR$(17)  ◄  DevControl1 (DC1)    CTRL + R = CHR$(18)  ↕  DeviceControl2    (DC2)
CTRL + S = CHR$(19)  ‼  DevControl3 (DC3)    CTRL + T = CHR$(20)  ¶  DeviceControl4    (DC4)
CTRL + U = CHR$(21)  §  NegativeACK (NAK)    CTRL + V = CHR$(22)  ▬  Synchronous Idle  (SYN)
CTRL + W = CHR$(23)  ↨  EndTXBlock  (ETB)    CTRL + X = CHR$(24)  ↑  Cancel            (CAN)
CTRL + Y = CHR$(25)  ↓  EndMedium   (EM)     CTRL + Z = CHR$(26)  →  End Of File(SUB)  (EOF)
```
  
<br>



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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_SCREENIMAGE](SCREENIMAGE.md) , [_SCREENCLICK](SCREENCLICK.md)
* [_SCREENMOVE](SCREENMOVE.md) , [_SCREENX](SCREENX.md) , [_SCREENY](SCREENY.md)
* ASCII
</blockquote>
