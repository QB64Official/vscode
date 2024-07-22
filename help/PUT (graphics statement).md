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

## [PUT_(graphics_statement)](PUT_(graphics_statement).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PUT (graphics statement))
---
<blockquote>

### The PUT graphics statement is used to place GET or BSAVE file images stored in the designated array.

</blockquote>

#### SYNTAX

<blockquote>

`PUT [[[STEP]]] ( column , row ), Array( [ index ] ) [,] [[[_CLIP]]]  [{PSET|PRESET|AND|OR|XOR}]][, omitcolor ]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: How GET and PUT can be used with images loaded with _LOADIMAGE . The background color is omitted or "masked".
```vb
SCREEN _NEWIMAGE(640, 480, 256)
_SCREENMOVE _MIDDLE
image& = _LOADIMAGE("QB64.png")

wide& = _WIDTH(image&): deep& = _HEIGHT(image&)
DIM Array(wide& * deep&) AS INTEGER

_SOURCE image&              'REQUIRED to GET the proper image area!
GET (0, 0)-(wide& - 1, deep& - 1), Array(0)

_DEST 0
_COPYPALETTE image&, 0      'necessary for custom image colors other than screen defaults
PUT(10, 10), Array(0), PSET , _RGB(255, 255, 255)   'mask white background color
END
```
  
<br>

##### Example 2: Using a STRING instead of an array to store GET image data that can be PUT later. For images up to 256 colors only.
```vb
a$ = SPACE$(4 + 100)            '4 byte header + 100 pixels for a 10 X 10 image
SCREEN 13
LINE (0, 0)-(319, 199), 4, BF   'color 4 = CHR$(4) = ♦
LINE (40, 40)-(49, 49), 14, B   'color 14 = CHR$(14) = ♫
GET (40, 40)-(49, 49), a$

K$ = INPUT$(1)

CLS
PRINT a$                        'display string data. Width = CHR$(10 * 8) = "P"
PUT(100, 100), a$, PSET
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_PUTIMAGE](PUTIMAGE.md)  , [_LOADIMAGE](LOADIMAGE.md)  , [_SAVEIMAGE](SAVEIMAGE.md) 
*  [_MAPTRIANGLE](MAPTRIANGLE.md) 
*  [GET](GET.md)  , [BSAVE](BSAVE.md)  , [BLOAD](BLOAD.md) 
*  [SCREEN](SCREEN.md)  , Scancodes
*  Creating Sprite Masks
*  [GET](GET.md)  and [PUT](PUT.md)  Demo
*  Bitmaps

</blockquote>
