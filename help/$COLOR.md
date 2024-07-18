## $COLOR
---

### $COLOR is a metacommand that adds named color constants into a program, which then can be used instead of hardcoded literal color values.

#### SYNTAX

`$COLOR : {0|32}`

#### PARAMETERS
* The one and only parameter is a literal number designating either to include [SCREEN](./SCREEN.md) 0 based color indexes, or full [_RGB32](./_RGB32.md) color values with full (opaque) alpha.


#### DESCRIPTION
* $[COLOR](./COLOR.md):0 adds constants for the colors 0-15 available in [SCREEN](./SCREEN.md) 0 , these do also match for the first 16 colors on 8-Bit (256 colors) graphic screens as long as they are not changed using [PALETTE](./PALETTE.md) or [_PALETTECOLOR](./_PALETTECOLOR.md) . For the actual constant names see $[COLOR](./COLOR.md):0 Name Table .
* $[COLOR](./COLOR.md):32 adds constants for full 32-Bit color values as used on 32-Bit screens created via [_NEWIMAGE](./_NEWIMAGE.md) , similar to HTML color names. For the actual constant names see $[COLOR](./COLOR.md):32 Name Table .
* Prior to QB64-PE v0.5.0, $[COLOR](./COLOR.md) was not compatible with $NOPREFIX .
* Since QB64-PE v0.5.0, $[COLOR](./COLOR.md) can now be used with $NOPREFIX , with a few notable differences to three conflicting colors -- Red, Green, Blue.


#### EXAMPLES
```vb
$COLOR:0

COLOR BrightWhite, Red
PRINT "Bright white on red."
```
  
```vb
Bright white on red.
```
  
```vb
SCREEN _NEWIMAGE(640, 400, 32)
$COLOR:32

COLOR CrayolaGold, DarkCyan
PRINT "CrayolaGold on DarkCyan."
```
  
```vb
CrayolaGold on DarkCyan.
```
  
```vb
$NOPREFIX

SCREEN NEWIMAGE(640, 400, 32)
$COLOR:32

COLOR NP_Red, White 'notice the NP_ in front of Red?
'This is to distinguish the color from the command with $NOPREFIX.
PRINT "Red on White."
```
  
```vb
Red on White.
```
  


#### SEE ALSO
* [COLOR](./COLOR.md)
* [SCREEN](./SCREEN.md) , [_NEWIMAGE](./_NEWIMAGE.md)
* Metacommand
* $[COLOR](./COLOR.md):0 Name Table
* $[COLOR](./COLOR.md):32 Name Table
