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


## [LINE](LINE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LINE)
---
<blockquote>

### The LINE statement is used in graphic SCREEN modes to create lines or boxes.

</blockquote>

#### SYNTAX

<blockquote>

`LINE [STEP] [ ( column1 , row1 ) ] - [STEP] ( column2 , row2 ), color [, [{B|BF}], style% ]`

</blockquote>

#### PARAMETERS

<blockquote>


* The [STEP](STEP.md) keyword make column and row coordinates relative to the previously coordinates set by any graphic statement.
* The optional parameters ( column1 , row1 ) set the line's starting point.
* The dash and second coordinate parameters ( column2 , row2 ) must be designated to complete the line or box.
* The [INTEGER](INTEGER.md) color attribute or [LONG](LONG.md) [_RGB32](RGB32.md) 32 bit color value sets the drawing color.  If omitted, the current destination page's [_DEFAULTCOLOR](DEFAULTCOLOR.md) is used.
* Optional B keyword creates a rectangle ( b ox) using the start and end coordinates as diagonal corners. BF creates a b ox f illed.
* The style% signed [INTEGER](INTEGER.md) value sets a dotted pattern to draw the line or rectangle outline.
</blockquote>

#### DESCRIPTION

<blockquote>


* Creates a colored line between the given coordinates. Can be drawn partially off screen.
* B creates a box outline with each side parallel to the program screen sides. BF creates a filled box.
* style% can be used to create a dotted pattern to draw the line.
* B can be used with a style% to draw the rectangle outline using the desired pattern.
* BF ignores the style% parameter. See examples 2, 3 and 4 below.
* The graphic cursor is set to the center of the program window on program start. Using the [STEP](STEP.md) keyword makes the coordinates relative to the current graphic cursor.
* [LINE](LINE.md) can be used in any graphic screen mode, but cannot be used in the default screen mode 0 as it is text only.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Following one line with another by omitting the second line's first coordinate parameter bracket entirely:
```vb
SCREEN 12

LINE (100, 100)-(200, 200), 10    'creates a line
LINE -(400, 200), 12              'creates a second line from end of first

END
```
  
<br>



##### Example 2: Creating styled lines and boxes with the LINE statement. Different style values create different dashed line spacing.
```vb
SCREEN 12

LINE (100, 100)-(300, 300), 10, , 63    'creates a styled line
LINE (100, 100)-(300, 300), 12, B, 255  'creates styled box shape

END
```
  
<br>



##### Example 3: The style value sets each 16 pixel line section as the value's bits are set on or off:
```vb
SCREEN 13
_FULLSCREEN 'required in QB64 only
_DELAY 5
FOR i% = 1 TO 2 ^ 15 'use exponential value instead of -32768
COLOR 15:LOCATE 10, 5: PRINT i%;
LINE (10, 60)-(300, 60), 0 'erase previous lines
LINE (10, 60)-(300, 60), 12, , i%
tmp$ = ""
FOR b% = 15 TO 0 STEP -1 'create binary text value showing bits on as █, off as space
IF i% AND 2 ^ b% THEN tmp$ = tmp$ + CHR$(219) ELSE tmp$ = tmp$ + SPACE$(1)
NEXT
COLOR 12:LOCATE 10, 20: PRINT tmp$;
IF INKEY$ <> "" THEN EXIT FOR 'any key exit
_DELAY .001 'set delay time as required
NEXT
```
  
<br>



##### Example 4: Using binary code to design a style pattern:
```vb
SCREEN 12

LINE (100, 100)-(300, 100), 10, , &B0000111100001111 '16-bits
LINE (100, 110)-(300, 110), 11, , &B0011001100110011
LINE (100, 120)-(300, 120), 12, , &B0101010101010101
LINE (100, 130)-(300, 130), 13, , &B1000100010001000
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SCREEN](SCREEN.md) , [COLOR](COLOR.md)
* [DRAW](DRAW.md) , [CIRCLE](CIRCLE.md) , [STEP](STEP.md)
* [PSET](PSET.md) , [PRESET](PRESET.md)
* [AND](AND.md) , [OR](OR.md) (logical operators)
</blockquote>
