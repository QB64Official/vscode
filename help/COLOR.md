# COLOR

The COLOR statement is used to change the foreground and background colors for printing text.

  

## Syntax

COLOR [*foreground&*][, *background&*]
  

## Description

* *background&* colors are available in all QB64 color SCREEN modes.
* [SCREEN](SCREEN.md) mode 10 has only 3 white foreground attributes including flashing.
* To change the *background&* color only, use a comma and the desired color. Ex: COLOR , *background&*
* Graphic drawing statements like [PSET](PSET.md), [PRESET](PRESET.md), [LINE](LINE.md), etc, also use the colors set by the COLOR statement if no color is passed when they are called.
* The [$COLOR]($COLOR.md) metacommand adds named color constants for both text and 32-bit modes.

  

## Screen Mode Attributes

* **SCREEN 0** *background&* colors 0 to 7 can be changed each text character without affecting other text. Use [CLS](CLS.md) after a background color statement to create a fullscreen background color. 64 [DAC](DAC.md) hues with 16 high intensity blinking foreground (16 to 31) color attributes. See [_BLINK](_BLINK.md).
	+ See example 7 below for more SCREEN 0 background colors.
* **SCREEN 1** has **4 background color attributes**: 0 = black, 1 = blue, 2 = green, 3 = grey. White foreground color only.
* **SCREEN 2** is **monochrome** with white forecolor and black background.
* **SCREEN 7** can use 16 ([DAC](DAC.md)) colors with background colors. RGB settings can be changed in colors 0 to 7 using [_PALETTECOLOR](_PALETTECOLOR.md).
* **SCREEN 8** has 16 color attributes with 16 background colors.
* **SCREEN 9** can use up to 64 [DAC](DAC.md) color hues in 16 color attributes with background colors assigned to attribute 0 with a [_PALETTECOLOR](_PALETTECOLOR.md) swap. RGB settings can be changed in colors 0 to 5 and 7 using [_PALETTECOLOR](_PALETTECOLOR.md).
* **SCREEN 10** has **only 4 color attributes** with black background. COLOR 0 = black, 1 = grey, 2 = flash white and 3 = bright white.
* **SCREEN 11** is **monochrome** with white forecolor and a black background.
* **SCREEN 12** can use 16 color attributes with a black background. 256K possible RGB color hues. Background colors can be used with QB64.
* **SCREEN 13** can use 256 color attributes with a black background. 256K possible RGB hues.
* [PALETTE](PALETTE.md) swaps can be made in SCREEN 7 and 9 only. Those screens were [DAC](DAC.md) screen modes in QBasic.
* [_DEST](_DEST.md) can be used to set the destination page or image to color using **QB64**.
* [_DEFAULTCOLOR](_DEFAULTCOLOR.md) returns the current color being used on an image or screen page handle.

### 24/32-Bit colors using QB64

* Pixel color intensities for red, green, blue and alpha range from 0 to 255 when used with [_RGB](_RGB.md), [_RGBA](_RGBA.md), [_RGB32](_RGB32.md) and [RGBA32](RGBA32.md).
* Combined RGB function values returned are [LONG](LONG.md) values. **Blue intensity values may be cut off using [SINGLE](SINGLE.md) variables.**
* [_ALPHA](_ALPHA.md) transparency values can range from 0 as transparent up to 255 which is fully opaque.
* [_CLEARCOLOR](_CLEARCOLOR.md) can also be used to set a color as transparent.
* Colors can be mixed by using [_BLEND](_BLEND.md) (default) in 32-bit screen modes. [_DONTBLEND](_DONTBLEND.md) disables blending.
* **NOTE: Default 32-bit backgrounds are clear black or [_RGBA](_RGBA.md)(0, 0, 0, 0). Use [CLS](CLS.md) to make the black opaque.**

([Return to Table of Contents](Return to Table of Contents.md))

  

## RGB Palette Intensities

RGB intensity values can be converted to hexadecimal values to create the [LONG](LONG.md) [_PALETTECOLOR](_PALETTECOLOR.md) value in non-32-bit screens:

``` [SCREEN](SCREEN.md) 12 alpha$ = "FF" 'solid alpha colors only [PRINT](PRINT.md) "Attribute = Hex value      Red          Green         Blue " [PRINT](PRINT.md) COLOR 7 [FOR](FOR.md) attribute = 1 [TO](TO.md) 15   [OUT](OUT.md) [&H](&H.md)3C7, attribute 'set color attribute to read   red$ = [HEX$](HEX$.md)([INP](INP.md)([&H](&H.md)3C9) * 255 / 63) 'convert port setting to 32 bit values   grn$ = [HEX$](HEX$.md)([INP](INP.md)([&H](&H.md)3C9) * 255 / 63)   blu$ = [HEX$](HEX$.md)([INP](INP.md)([&H](&H.md)3C9) * 255 / 63)   [IF](IF.md) [LEN](LEN.md)(red$) = 1 [THEN](THEN.md) red$ = "0" + red$ '2 hex digits required   [IF](IF.md) [LEN](LEN.md)(grn$) = 1 [THEN](THEN.md) grn$ = "0" + grn$ 'for low or zero hex values   [IF](IF.md) [LEN](LEN.md)(blu$) = 1 [THEN](THEN.md) blu$ = "0" + blu$   hex32$ = "[&H](&H.md)" + alpha$ + red$ + grn$ + blu$   [_PALETTECOLOR](_PALETTECOLOR.md) attribute, [VAL](VAL.md)(hex32$) 'VAL converts hex string to a LONG 32 bit value   [IF](IF.md) attribute [THEN](THEN.md) COLOR attribute 'exclude black color print   [PRINT](PRINT.md) "COLOR" + [STR$](STR$.md)(attribute) + " = " + hex32$, red$, grn$, blu$ 'returns closest attribute [NEXT](NEXT.md)  
```

``` Attribute  Hex value      Red        Green       Blue  COLOR 1 = &HFF0000AA       00         00         AA COLOR 2 = &HFF00AA00       00         AA         00 COLOR 3 = &HFF00AAAA       00         AA         AA COLOR 4 = &HFFAA0000       AA         00         00 COLOR 5 = &HFFAA00AA       AA         00         AA COLOR 6 = &HFFAA5500       AA         55         00 COLOR 7 = &HFFAAAAAA       AA         AA         AA COLOR 8 = &HFF555555       55         55         55 COLOR 9 = &HFF5555FF       55         55         FF COLOR 10 = &HFF55FF55      55         FF         55 COLOR 11 = &HFF55FFFF      55         FF         FF COLOR 12 = &HFFFF5555      FF         55         55 COLOR 13 = &HFFFF55FF      FF         55         FF COLOR 14 = &HFFFFFF55      FF         FF         55 COLOR 15 = &HFFFFFFFF      FF         FF         FF  
```

*Explanation:* The DAC intensity values are multiplied by (255 / 63) to get the [_RGB](_RGB.md) intensity values as [hexadecimal](hexadecimal.md) values. The individual 2 digit [HEX$](HEX$.md) intensity values can be added to "&HFF" to make up the 32-bit hexadecimal string value necessary for [VAL](VAL.md) to return to [_PALETTECOLOR](_PALETTECOLOR.md). The statement is only included in the example to show how that can be done with any 32-bit color value.
### Read & write color port intensities with [INP](INP.md) & [OUT](OUT.md)

* Legacy code may use [INP](INP.md) and [OUT](OUT.md) to read or set color port intensities. **QB64** emulates VGA memory to maintain compatibility.
* The same can be achieved using [_PALETTECOLOR](_PALETTECOLOR.md) (**recommended practice**).

**OUT &H3C7, attribute** 'Set port to read RGB settings with:
**color_intensity = INP(&H3C9)** 'reads present intensity setting
**OUT &H3C8, attribute** 'Set port to write RGB settings with:
**OUT &H3C9, color_intensity** 'writes new intensity setting
* After every 3 reads or writes, changes to next higher color attribute. Loops can be used to set more than one attribute's intensities.
* Color port setting of red, green and blue intensities can be done in ascending order.
* Color port attribute intensity values range from 0 to 63 (1/4 of the 32-bit values) in QBasic's legacy 4 and 8 bit screen modes.

([Return to Table of Contents](Return to Table of Contents.md))

  

## Examples

*Example 1:* Reading the default RGB color settings of color attribute 15.

```  [OUT](OUT.md) &H3C7, 15  red% = [INP](INP.md)(&H3C9)  green% = [INP](INP.md)(&H3C9)  blue% = [INP](INP.md)(&H3C9)  [PRINT](PRINT.md) red%, green%, blue%  
```

```  63       63       63  
```

  

*Example 2:* Changing the color settings of attribute 0 (the background) to blue in [SCREENs](SCREENs.md) 12 or 13.

``` [SCREEN](SCREEN.md) 12 [OUT](OUT.md) [&H](&H.md)3C8, 0          'set color port attribute to write [OUT](OUT.md) [&H](&H.md)3C9, 0          'red intensity [OUT](OUT.md) [&H](&H.md)3C9, 0          'green intensity [OUT](OUT.md) [&H](&H.md)3C9, 42         'blue intensity  [OUT](OUT.md) [&H](&H.md)3C7, 0 [PRINT](PRINT.md) [INP](INP.md)([&H](&H.md)3C9); [INP](INP.md)([&H](&H.md)3C9); [INP](INP.md)([&H](&H.md)3C9) [END](END.md)  
```

```  0  0  42 
```

  

*Example 3:* Printing in fullscreen SCREEN 0 mode with a color background under the text only.

``` [SCREEN](SCREEN.md) 0: [_FULLSCREEN](_FULLSCREEN.md) ' used for fullscreen instead of window COLOR 14, 6: [LOCATE](LOCATE.md) 4, 4: [PRINT](PRINT.md) "Hello!"  
```

```        Hello!  
```

  

*Example 4:* Using [CLS](CLS.md) after setting the background color in SCREEN 0 to make the color cover the entire screen.

``` [SCREEN](SCREEN.md) 0: [_FULLSCREEN](_FULLSCREEN.md) COLOR , 7: [CLS](CLS.md) COLOR 9: [PRINT](PRINT.md) "Hello"  
```

``` Hello  
```

  

*Example 5:* Using a different foreground color for each letter:

``` [SCREEN](SCREEN.md) 0 COLOR 1: [PRINT](PRINT.md) "H"; COLOR 3: [PRINT](PRINT.md) "E"; COLOR 4: [PRINT](PRINT.md) "L"; COLOR 5: [PRINT](PRINT.md) "L"; COLOR 6: [PRINT](PRINT.md) "O" COLOR 9: [PRINT](PRINT.md) "W"; COLOR 11: [PRINT](PRINT.md) "O"; COLOR 12: [PRINT](PRINT.md) "R"; COLOR 13: [PRINT](PRINT.md) "L"; COLOR 14: [PRINT](PRINT.md) "D"  
```

``` HELLO WORLD  
```

  

## See also

* [$COLOR]($COLOR.md) (metacommand)
* [_RGB](_RGB.md), [_RGBA](_RGBA.md), [_RGB32](_RGB32.md), [RGBA32](RGBA32.md).
* [_RED](_RED.md), [_GREEN](_GREEN.md), [_BLUE](_BLUE.md)
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md), [_BLUE32](_BLUE32.md)
* [_ALPHA](_ALPHA.md), [_ALPHA32](_ALPHA32.md), [_CLEARCOLOR](_CLEARCOLOR.md)
* [PRINT](PRINT.md), [LOCATE](LOCATE.md), [SCREEN](SCREEN.md)
* [POINT](POINT.md), [SCREEN (function)](SCREEN (function).md) "SCREEN (function)")
* [OUT](OUT.md), [INP](INP.md), [PALETTE](PALETTE.md)
* [_BLINK](_BLINK.md)
* [_DEFAULTCOLOR](_DEFAULTCOLOR.md)
* [_BACKGROUNDCOLOR](_BACKGROUNDCOLOR.md)
* [_PALETTECOLOR](_PALETTECOLOR.md)
* [Color Dialog Box](Color Dialog Box.md)
* [$COLOR:0 Name Table]($COLOR:0 Name Table.md)
* [$COLOR:32 Name Table]($COLOR:32 Name Table.md)

  
