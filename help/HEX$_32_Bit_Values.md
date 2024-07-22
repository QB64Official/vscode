## HEX$ 32 Bit Values
---
<blockquote>

### LONG Hexadecimal values can be used to set a _PALETTECOLOR instead of using _RGB32 or _RGBA32 values.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Converting the color port RGB intensity palette values 0 to 63 to 32 bit hexadecimal string values.
```vb
SCREEN 12
DIM hex32$(15)
alpha$ = "FF"                              'solid alpha colors only
OUT &H3C8, 0: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 20 'set black background to dark blue

FOR attribute = 0 TO 15
 OUT &H3C7, attribute                     'set color attribute to read
 red$ = HEX$(INP(&H3C9) * 4)              'convert port setting to 32 bit values
 grn$ = HEX$(INP(&H3C9) * 4)
 blu$ = HEX$(INP(&H3C9) * 4)
 IF LEN(red$) = 1 THEN red$ = "0" + red$  'necessary for low or zero color intensities
 IF LEN(grn$) = 1 THEN grn$ = "0" + grn$
 IF LEN(blu$) = 1 THEN blu$ = "0" + blu$
 hex32$(attribute) = "&H" + alpha$ + red$ + grn$ + blu$
NEXT
PRINT "COLOR 0 = " + hex32$(0)
FOR i = 1 TO 15
 _PALETTECOLOR i, VAL(hex32$(i))
 COLOR i
 PRINT "COLOR" + STR$(i) + " = " + hex32$(i) 'returns closest attribute
NEXT
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_PALETTECOLOR](./_PALETTECOLOR.md)
* [_RGB32](./_RGB32.md) , [_RGBA32](./_RGBA32.md)
* [_RGB](./_RGB.md) , [_RGBA](./_RGBA.md) (when used in 32 bit only)
* [COLOR](./COLOR.md) , [SCREEN](./SCREEN.md) , [POINT](./POINT.md)
* HTML Color Table HEX Values and Names

</blockquote>
