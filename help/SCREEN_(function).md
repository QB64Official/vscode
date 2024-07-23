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


## [SCREEN (function)](SCREEN_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SCREEN%20%28function%29)
---
<blockquote>

### The SCREEN function returns the ASCII code of a text character or the color attribute at a set text location on the screen.

</blockquote>

#### SYNTAX

<blockquote>

`codeorcolor% = SCREEN ( row% , column% [, colorflag%] )`

</blockquote>

#### PARAMETERS

<blockquote>


* row and column are the [INTEGER](INTEGER.md) text coordinates of the [SCREEN](SCREEN.md) mode used.
* Optional colorflag [INTEGER](INTEGER.md) value can be omitted or 0 for ASCII code values or 1 for color attributes.
</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Finding the text foreground and background colors in SCREEN 0 only:
```vb
SCREEN 0
COLOR 0, 15
CLS

PRINT "SCREEN ="; SCREEN(1, 1, 1)
PRINT "FG color:"; SCREEN(1, 1, 1) AND 15 'low nibble
PRINT "BG color:"; SCREEN(1, 1, 1) \ 16 'high nibble
```
  
<br>

```vb
SCREEN = 112
FG color: 0
BG color: 7
```
  
<br>


<div class="explanation">Explanation: The SCREEN function returns the ASCII code for "H" and the color 9.</div>



##### Example 2: Reading the ASCII code and color of a text character using the SCREEN function. Graphic colors were not reliable in QBasic!
```vb
SCREEN 12
row = 10: column = 10

COLOR 9: LOCATE row, column: PRINT "Hello"
code% = SCREEN(row, column, 0)     ' character code return parameter 0
attrib% = SCREEN(row, column, 1)   ' character color return parameter 1
COLOR 14: LOCATE 15, 10: PRINT "ASCII:"; code%, "COLOR:"; attrib%
END
```
  
<br>

```vb
Hello



        ASCII: 72     COLOR: 9
```
  
<br>



##### Example 3: Finding the current program path placed on the screen using FILES and the SCREEN function in SCREEN 0.
```vb
SCREEN 0, 0, 0, 0
CLS
PRINT "This is a directory test..."
SCREEN 0, 0, 1, 0
COLOR 0 'blank out the screen text
FILES "qb64.exe"        'the current program's filename can also be used
FOR i = 1 TO 80
a$ = a$ + CHR$(SCREEN(1, i)) 'scan the black text on the screen
NEXT
CLS
COLOR 7
a$ = RTRIM$(a$)
SLEEP
SCREEN 0, 0, 0, 0
LOCATE 3, 1: PRINT "The current directory is: "; a$
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) , [SCREEN](SCREEN.md)
* [COLOR](COLOR.md) , [CHR&dollar;](CHR&dollar;.md) , [POINT](POINT.md)
* [CSRLIN](CSRLIN.md) , [POS](POS.md) , ASCII
* Screen Memory
</blockquote>
