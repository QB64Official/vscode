## COLOR
---

### The COLOR statement is used to change the foreground and background colors for printing text.

#### SYNTAX

`COLOR [ foreground& ][, background& ]`

#### DESCRIPTION
* background& colors are available in all QB64 color [SCREEN](./SCREEN.md) modes.
* [SCREEN](./SCREEN.md) mode 10 has only 3 white foreground attributes including flashing.
* To change the background& color only, use a comma and the desired color. Ex: [COLOR](./COLOR.md) , background&
* Graphic drawing statements like [PSET](./PSET.md) , [PRESET](./PRESET.md) , [LINE](./LINE.md) , etc, also use the colors set by the [COLOR](./COLOR.md) statement if no color is passed when they are called.
* The $[COLOR](./COLOR.md) metacommand adds named color constants for both text and 32-bit modes.


#### EXAMPLES
##### Example 1: Reading the default RGB color settings of color attribute 15.
```vb
OUT &H3C7, 15
red% = INP(&H3C9)
green% = INP(&H3C9)
blue% = INP(&H3C9)
PRINT red%, green%, blue%
```
  
```vb
63       63       63
```
  
##### Example 2: Changing the color settings of attribute 0 (the background) to blue in SCREENs 12 or 13.
```vb
SCREEN 12
OUT &H3C8, 0          'set color port attribute to write
OUT &H3C9, 0          'red intensity
OUT &H3C9, 0          'green intensity
OUT &H3C9, 42         'blue intensity

OUT &H3C7, 0
PRINT INP(&H3C9); INP(&H3C9); INP(&H3C9)
END
```
  
```vb
0  0  42
```
  
##### Example 3: Printing in fullscreen SCREEN 0 mode with a color background under the text only.
```vb
SCREEN 0: _FULLSCREEN ' used for fullscreen instead of window
COLOR 14, 6: LOCATE 4, 4: PRINT "Hello!"
```
  
```vb
Hello!
```
  
##### Example 4: Using CLS after setting the background color in SCREEN 0 to make the color cover the entire screen.
```vb
SCREEN 0: _FULLSCREEN
COLOR , 7: CLS
COLOR 9: PRINT "Hello"
```
  
```vb
Hello
```
  
##### Example 5: Using a different foreground color for each letter:
```vb
SCREEN 0
COLOR 1: PRINT "H";
COLOR 3: PRINT "E";
COLOR 4: PRINT "L";
COLOR 5: PRINT "L";
COLOR 6: PRINT "O"
COLOR 9: PRINT "W";
COLOR 11: PRINT "O";
COLOR 12: PRINT "R";
COLOR 13: PRINT "L";
COLOR 14: PRINT "D"
```
  
```vb
HELLO
WORLD
```
  


#### SEE ALSO
* $[COLOR](./COLOR.md) (metacommand)
* [_RGB](./_RGB.md) , [_RGBA](./_RGBA.md) , [_RGB32](./_RGB32.md) , RGBA32 .
* [_RED](./_RED.md) , [_GREEN](./_GREEN.md) , [_BLUE](./_BLUE.md)
* [_RED32](./_RED32.md) , [_GREEN32](./_GREEN32.md) , [_BLUE32](./_BLUE32.md)
* [_ALPHA](./_ALPHA.md) , [_ALPHA32](./_ALPHA32.md) , [_CLEARCOLOR](./_CLEARCOLOR.md)
* [PRINT](./PRINT.md) , [LOCATE](./LOCATE.md) , [SCREEN](./SCREEN.md)
* [POINT](./POINT.md) , [SCREEN](./SCREEN.md) (function)
* [OUT](./OUT.md) , [INP](./INP.md) , [PALETTE](./PALETTE.md)
* [_BLINK](./_BLINK.md)
* [_DEFAULTCOLOR](./_DEFAULTCOLOR.md)
* [_BACKGROUNDCOLOR](./_BACKGROUNDCOLOR.md)
* [_PALETTECOLOR](./_PALETTECOLOR.md)
* Color Dialog Box
* $[COLOR](./COLOR.md):0 Name Table
* $[COLOR](./COLOR.md):32 Name Table
