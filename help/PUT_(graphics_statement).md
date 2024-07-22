## PUT (graphics statement)
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
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_PUTIMAGE](./_PUTIMAGE.md) , [_LOADIMAGE](./_LOADIMAGE.md) , [_SAVEIMAGE](./_SAVEIMAGE.md)
* [_MAPTRIANGLE](./_MAPTRIANGLE.md)
* [GET](./GET.md) , [BSAVE](./BSAVE.md) , [BLOAD](./BLOAD.md)
* [SCREEN](./SCREEN.md) , Scancodes
* Creating Sprite Masks
* [GET](./GET.md) and [PUT](./PUT.md) Demo
* Bitmaps

</blockquote>
