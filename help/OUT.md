## OUT
---

### OUT writes values to register and port hardware addresses.

#### SYNTAX

`OUT registerAddress% , value%`

#### PARAMETERS
* registerAddress% is a value expressed as a decimal [INTEGER](./INTEGER.md) or hexadecimal .
* The [INTEGER](./INTEGER.md) value% sent is normally only 0 to 255 per byte register (8 bit) address.


#### DESCRIPTION
* QB64 has limited access to registers. VGA memory and registers are emulated.
* [OUT](./OUT.md) can be used to change color port and a limited number of other port settings in QB64.
* Some settings may be set in a specific order to gain access to settings and [INP](./INP.md) reads.
* [SCREEN](./SCREEN.md) modes determine the number of available color palette attributes from 2 to 256 in [SCREEN](./SCREEN.md) 13.
* Windows NT may block access to Parallel printer and Serial ports. See Port Access Libraries or other DLLs.
* [_PALETTECOLOR](./_PALETTECOLOR.md) can also be used to set RGB intensity values using 32 bit color values.
* [OUT](./OUT.md) can toggle the blinking attribute of [SCREEN](./SCREEN.md) 0 color 16-31 for legacy code. [_BLINK](./_BLINK.md) is the preferred method. (starting with build 20170816/61).


#### EXAMPLES
##### Example 1: Reading the default RGB color settings of color attribute 15.
```vb
OUT &H3C7, 15      'set color port attribute 15 for a read
red% = INP(&H3C9)
green% = INP(&H3C9)
blue% = INP(&H3C9)
PRINT red%, green%, blue%
```
  
```vb
63       63       63
```
  
##### Example 2: Changing the color intensity settings of the SCREEN background COLOR 0 to bright white.
```vb
OUT &H3C8, 0  'attribute number. 0 for black screen background
OUT &H3C9, 63 'red
OUT &H3C9, 63 'green
OUT &H3C9, 63 'blue
```
  
##### Example 3: Toggling blinking colors in SCREEN beginning with build 20170816/61
```vb
OUT &H3C0, &H10  'disables blinking and enables high intensity backgrounds (colors 16-31)
OUT &H3C0, 2 ^ 3 'reenables blinking and disables high intensity backgrounds  (colors 16-31)
```
  
##### Example 4: Restoring colors to a bitmap from the Red, Green and Blue BSAVEd indexed array of color values.
```vb
SCREEN 12
OUT &H3C8, 0 ' set color port for output at attribute 0
FOR i = 0 TO 47 ' 48 RGB values is (3 * 16) -1 color attributes from 0 in screen 12
  OUT &H3C9, Image%(i) ' changes to next attribute after 3 RGB loops
NEXT
PUT(clm, row), Image(48) PSET
```
  


#### SEE ALSO
* [PALETTE](./PALETTE.md) , [_PALETTECOLOR](./_PALETTECOLOR.md)
* [INP](./INP.md)
* [PEEK](./PEEK.md)
* [POKE](./POKE.md)
* [COLOR](./COLOR.md) , [SCREEN](./SCREEN.md)
* [BSAVE](./BSAVE.md) , [BLOAD](./BLOAD.md)
* [_BLINK](./_BLINK.md) , [_BLINK](./_BLINK.md) (function)
* Port Access Libraries
