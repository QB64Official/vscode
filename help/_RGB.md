## _RGB
---

### The _RGB function returns the closest palette attribute index (legacy SCREEN modes) OR the LONG 32-bit color value (32-bit screens).

#### SYNTAX

`colorIndex~& = _RGB ( red& , green& , blue& [, imageHandle& ])`

#### DESCRIPTION
* The value returned is either the closest color attribute number or a 32-bit [_UNSIGNED](./_UNSIGNED.md) [LONG](./LONG.md) color value.
* Return variable types must be [LONG](./LONG.md) or resulting color may lose the [_BLUE](./_BLUE.md) value.
* red& specifies the red component intensity from 0 to 255.
* green& specifies the green component intensity from 0 to 255.
* blue& specifies the blue component intensity from 0 to 255.
* Intensity values outside the valid range are clipped.
* Returns [LONG](./LONG.md) 32-bit hexadecimal values from &HFF 00 00 00 to &HFF FF FF FF , always with full [_ALPHA](./_ALPHA.md) .
* When [LONG](./LONG.md) values are [PUT](./PUT.md) to file, the ARGB values become BGRA. Use LEFT$ ( MKL$ ( colorIndex~& ), 3) to place 3 colors.
* If the imageHandle& is omitted the image is assumed to be the current destination or [SCREEN](./SCREEN.md) page.
* Colors returned are always opaque as the transparency value is always 255. Use [_ALPHA](./_ALPHA.md) or [_CLEARCOLOR](./_CLEARCOLOR.md) to change it.
* NOTE: Default 32-bit backgrounds are clear black or [_RGBA](./_RGBA.md) (0, 0, 0, 0). Use [CLS](./CLS.md) to make the black opaque.


#### EXAMPLES
##### Example: Converting the color port RGB intensity palette values 0 to 63 to 32 bit hexadecimal values.
```vb
SCREEN 12
DIM hex32$(15)
FOR attribute = 1 TO 15
 OUT &H3C7, attribute      'set color attribute to read
 red = INP(&H3C9) * 4      'multiply by 4 to convert intensity to 0 to 255 RGB values
 grn = INP(&H3C9) * 4
 blu = INP(&H3C9) * 4
 hex32$(attribute) = "&H" + HEX$(_RGB32(red, grn, blu))   'always returns the 32 bit value
 COLOR attribute
 PRINT "COLOR" + STR$(_RGB(red, grn, blu)) + " = " + hex32$(attribute)  'closest attribute
NEXT
```
  
```vb
COLOR 1 = &HFF0000A8
COLOR 2 = &HFF00A800
COLOR 3 = &HFF00A8A8
COLOR 4 = &HFFA80000
COLOR 5 = &HFFA800A8
COLOR 6 = &HFFA85400
COLOR 7 = &HFFA8A8A8
COLOR 8 = &HFF545454
COLOR 9 = &HFF5454FC
COLOR 10 = &HFF54FC54
COLOR 11 = &HFF54FCFC
COLOR 12 = &HFFFC5454
COLOR 13 = &HFFFC54FC
COLOR 14 = &HFFFCFC54
COLOR 15 = &HFFFCFCFC
```
  


#### SEE ALSO
* [_RGBA](./_RGBA.md) , [_RGB32](./_RGB32.md) , [_RGBA32](./_RGBA32.md)
* [_RED](./_RED.md) , [_GREEN](./_GREEN.md) , [_BLUE](./_BLUE.md)
* [_LOADIMAGE](./_LOADIMAGE.md) , [_NEWIMAGE](./_NEWIMAGE.md)
* HEX$ 32 Bit Values , [POINT](./POINT.md)
* SaveImage [SUB](./SUB.md)
* Hexadecimal Color Values
