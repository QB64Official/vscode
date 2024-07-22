## Creating Sprite Masks
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
  
```vb
GET (x, y)-(x + 60, y + 60), BG   ' GET BG at start position before sprite is set
   PUT (x, y), Mask, AND             ' PUT mask at start position
   PUT (x, y), Sprite                ' XOR will work fine on a mask
```
  
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
  

</blockquote>

#### SEE ALSO

<blockquote>

* [INP](./INP.md) , Scancodes (Example 3)
* [GET](./GET.md) , [PUT](./PUT.md)
* Icons and Cursors
* Creating Icons from Bitmaps

</blockquote>
