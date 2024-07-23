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


## [SCREEN](SCREEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SCREEN)
---
<blockquote>

### The SCREEN statement sets the video display mode and size of the program window's workspace.

</blockquote>

#### SYNTAX

<blockquote>

`SCREEN { mode% | imagehandle& } [, , active_page, visual_page]`

</blockquote>

#### PARAMETERS

<blockquote>


* The [SCREEN](SCREEN.md) mode [INTEGER](INTEGER.md) values available today are 0 to 2 and 7 to 13 listed below.
* QB64 can use a [LONG](LONG.md) [_NEWIMAGE](NEWIMAGE.md) page or [_LOADIMAGE](LOADIMAGE.md) file image handle value instead.
* The empty comma disables color when any value is used. [DO](DO.md) [NOT](NOT.md) USE! Include the comma [ONLY](ONLY.md) when using page flipping.
* If the [SCREEN](SCREEN.md) mode supports pages, the active page is the page to be worked on while visual page is the one displayed.
</blockquote>

#### EXAMPLES

<blockquote>

```vb
LEGACY SCREEN MODES AT A GLANCE

Screen      Text           Graphics          Colors      Video    Text      Default
Mode   Rows   Columns   Width   Height  Attrib.   BPP   Pages    Block    QB64 Font

0   25/43/50  80/40    No graphics     16/16 DAC  4     0-7     -----    _FONT 16
1      25      40      320     200     16/4 BG    4     none    8 X 8    _FONT 8
2      25      80      640     200      2/mono    1     none    8 X 8    _FONT 8
.................................................................................
7      25      40      320     200     16/16 DAC  4     0-7     8 X 8    _FONT 8
8      25      80      640     200     16/16      4     0-3     8 X 8    _FONT 8
9      25      80      640     350     16/64 DAC  4     0-1     8 X 14   _FONT 14
10      25      80      640     350     4/2 GScale 2     none    8 X 14   _FONT 14
11     30/60    80      640     480      2/mono    1     none    8 X 16   _FONT 16
12     30/60    80      640     480     16/262K    4     none    8 X 16   _FONT 16
13      25      40      320     200     256/65K    8     none    8 X 8    _FONT 8

QB64 allows video paging and PCOPY in ALL screen modes!
```
  
<br>

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
  
<br>


<div class="explanation">Displays each SCREEN mode one at a time with a CIRCLE (except for SCREEN 0)</div>

```vb
This is SCREEN 0 - only text is allowed!
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [COLOR](COLOR.md) , [CLS](CLS.md) , [WIDTH](WIDTH.md)
* [_NEWIMAGE](NEWIMAGE.md) , [_LOADIMAGE](LOADIMAGE.md) , [_SAVEIMAGE](SAVEIMAGE.md)
* [_SCREENIMAGE](SCREENIMAGE.md)
* [_LOADFONT](LOADFONT.md) , [_FONT](FONT.md)
* [_DISPLAY](DISPLAY.md) , [_COPYIMAGE](COPYIMAGE.md) , [_SCREENMOVE](SCREENMOVE.md)
* [_SCREENHIDE](SCREENHIDE.md) , [_SCREENSHOW](SCREENSHOW.md) , [_SCREENICON](SCREENICON.md)
* [PALETTE](PALETTE.md) , [OUT](OUT.md) , [PCOPY](PCOPY.md) ,
* [GET](GET.md) , [PUT](PUT.md)
* [VIEW](VIEW.md) , [WINDOW](WINDOW.md) , [VIEW](VIEW.md) [PRINT](PRINT.md)
* [SCREEN](SCREEN.md) (function) , [POINT](POINT.md)
* Screen Memory , Screen Saver Programs
* [_CONSOLE](CONSOLE.md)
</blockquote>
