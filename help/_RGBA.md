## _RGBA
---

### The _RGBA function returns the closest palette index (legacy SCREEN modes) OR the 32-bit LONG color value (32-bit screens).

#### SYNTAX

`colorIndex~& = _RGBA ( red& , green& , blue& , alpha& [, imageHandle& ] )`

#### EXAMPLES
##### Example: Setting a font's background color alpha to clear to overlay a second text color.
```vb
scrn& = _NEWIMAGE(400, 400, 32)
SCREEN scrn&
fnt& = _LOADFONT("C:\WINDOWS\FONTS\ARIAL.TTF", 26)
_FONT fnt&
X% = 20
Y% = 20
COLOR _RGB(255, 255, 255), _RGB(0, 0, 0) 'Foreground set to WHITE background to BLACK
_PRINTSTRING (X%, Y%), "Hello World"
COLOR _RGB(255, 0, 0), _RGBA(0, 0, 0, 0) 'Foreground set to RED background to TRANSPARENT BLACK
_PRINTSTRING (X% + 2, Y% + 2), "Hello World"
END
```
  
##### Explanation: _PRINTSTRING allows text or font colors to be alpha blended in 32 bit screens.


#### SEE ALSO
* [_RGB](./_RGB.md) , [_RGB32](./_RGB32.md) , [_RGBA32](./_RGBA32.md)
* [_RED](./_RED.md) , [_GREEN](./_GREEN.md) , [_BLUE](./_BLUE.md)
* [_LOADIMAGE](./_LOADIMAGE.md)
* [_PRINTSTRING](./_PRINTSTRING.md)
* HEX$ 32 Bit Values , [POINT](./POINT.md)
* SaveImage [SUB](./SUB.md)
* Hexadecimal Color Values
