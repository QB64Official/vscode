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


## [Creating Sprite Masks](Creating_Sprite_Masks.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Creating%20Sprite%20Masks)
---
<blockquote>

### Sometimes your program may need to place a shaped sprite over background objects. To do that you cannot use the default PUT using XOR. XOR only works on black backgrounds! It distorts underlying colors. You could use the PSET option, but that places a square sprite only. To get irregularly shaped objects you need to create a "mask" of the sprite. After you have created your sprite with a BLACK background, GET the image to an array . You can BSAVE it if you wish. Then create a mask of the sprite at the sprites current location. Use the GET box area coordinates(minX, maxX and minY, maxY) of sprite in the following routine:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
FOR xx = minX TO maxX
FOR yy = minY TO maxY
IF POINT(xx, yy) = 0 THEN PSET (xx, yy), 15 ELSE PSET (xx, yy), 0
NEXT yy
NEXT xx
GET (minX, minY)-(maxX, maxY), Mask(0)
```
  
<br>

```vb
GET (x, y)-(x + 60, y + 60), BG   ' GET BG at start position before sprite is set
PUT (x, y), Mask, AND             ' PUT mask at start position
PUT (x, y), Sprite                ' XOR will work fine on a mask
```
  
<br>

```vb
'user keypress or programmed coordinate changes
IF x <> PX OR y <> PY THEN               ' look for a changed coordinate value
WAIT 936, 8                          ' vertical retrace delay
PUT (PX, PY), BG, PSET               ' replace previous BG first
GET (x, y)-(x + 60, y + 60), BG      ' GET BG at new position before box is set
PUT (x, y), Mask, AND                ' PUT mask at new position
PUT (x, y), Sprite                   ' XOR will work fine on the mask
END IF
PX = x: PY = y
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [INP](INP.md) , Scancodes (Example 3)
* [GET](GET.md) , [PUT](PUT.md)
* Icons and Cursors
* Creating Icons from Bitmaps
</blockquote>
