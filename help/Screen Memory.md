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

## [Screen_Memory](Screen_Memory.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Screen Memory)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Printing text with blinking colors in SCREEN 0 only.
```vb
DIM s AS STRING
DIM i AS LONG
DIM j AS LONG
CLS
s = "Hello, World!"
DEF SEG = &HB800
FOR j = 1 TO 15
FOR i = 1 TO LEN(s)
POKE (j * 80 + (i - 1)) * 2, ASC(MID$(s$, i, 1))        'text characters
POKE (j * 80 + (i - 1)) * 2 + 1, &H80 OR j 'blinking color
NEXT
NEXT
DEF SEG 'restore to default segment
END
```
  
<br>

##### Example 2: Displaying and coloring the 256 ASCII characters using POKE in SCREEN 0.
```vb
SCREEN 12 'set full screen in QBasic only for flashing colors
SCREEN 0
OUT &H3C8, 0: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 20

_FONT _LOADFONT("C:\Windows\Fonts\Cour.ttf", 20, "MONOSPACE") 'select monospace font. QB64 only!

DEF SEG = &HB800                        'SCREEN 0 text ONLY!
FOR code = 0 TO 255
POKE 640 + code * 4, code             'poke the even text offsets with space between
NEXT
COLOR 11: LOCATE 20, 27: PRINT "Press a key to add color!"
K$ = INPUT$(1)
FOR colr = 0 TO 255
POKE 641 + colr * 4, colr             'poke the ODD color offsets(second byte)
NEXT
DEF SEG                                 'reset to default segment
END
```
  
<br>

##### Example 2: Displaying and coloring the 256 ASCII characters using POKE in SCREEN 0.
```vb
4000 byte Video Memory Segment

Text block #:   1                  321     322     323     324     325     326     327
Text position:  1, 1                5, 1    5, 2    5, 3    5, 4    5, 5    5, 6    5, 7
Byte offset:    0, 1               640     642     644     646     648     650     652
Segment: (CHR$(0), COLOR 0),.......(0, 0), (0, 0), (1, 1), (0, 0), (2, 2), (0, 0), (3, 3),...

Row% = Offset% \ 160 + 1          Column% = (Offset% MOD 160) \ 2 + 1

Offset% = (160 * (Row% - 1)) + (2 * (Column% - 1))
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [PEEK](PEEK.md)  , [POKE](POKE.md) 
*  [DEF](DEF.md) [SEG](SEG.md)  = 0
*  [SCREEN](SCREEN.md) 
*  [SCREEN](SCREEN.md)  (function)
*  [_NEWIMAGE](NEWIMAGE.md) 
*  [_LOADIMAGE](LOADIMAGE.md) 

</blockquote>
