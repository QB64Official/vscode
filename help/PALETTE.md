# PALETTE

The PALETTE statement can swap color settings, set colors to default or set the red, green and blue color components of palette colors.

  

## Syntax

Screens 11, 12, 13, 256
PALETTE [*attribute%*, *red%* + (*green%* * 256) + (*blue%* * 65536)]
Screen 10
PALETTE [*existingAttribute%*, *newAttribute%* (value from 0 to 7)]
Screens 0 and 9
PALETTE [*existingAttribute%*, *newAttribute%* (value from 0 to 63)]
Screens 1, 2, 7, and 8
PALETTE [*existingAttribute%*, *newAttribute%* (value from 0 to 15)]
Screen 32
No Palette available as all 32-bit colors are available.
  

## Description

* *red%*, *green%* and *blue%* values can range from 0 to 63. Many color shades are possible in non-[DAC](DAC.md) color attributes. (Valid for screens 11, 12, 13, and 256 only.)
* If the *red%*, *green%* and *blue%* color intensity settings are all the same value the resulting color is a shade of grey. (Valid for screens 11, 12, 13, and 256 only.)
* A swap is often used with [DAC](DAC.md) color attributes that cannot change RGB settings. Only the RGB color settings are swapped from original *existingAttribute%* to *newAttribute%*. Screens 0 thru 9 support swaps.
* PALETTE without any value sets any changed RGB settings back to the default color settings, including [DAC](DAC.md) colors.
* [PALETTE USING](PALETTE USING.md) can be used when color intensity values are stored in an [array](array.md).
* QB64 implements the [_PALETTECOLOR](_PALETTECOLOR.md) statement to provide extended palette functionality.

### QBasic/QuickBASIC

* Screens 0, 7 and 9 ([DAC](DAC.md)) colors could not be changed using the first syntax, but the program could use [OUT](OUT.md) to change intensity settings of attributes 1 thru 5.

  

## Examples

*Example:* Displaying all 64 DAC color hues as backgrounds in SCREEN 9 using a PALETTE swap.

```   [SCREEN](SCREEN.md) 9 ' background is default black   [LOCATE](LOCATE.md) 20, 33: [PRINT](PRINT.md) "Press any Key!"   [FOR](FOR.md) i = 0 [TO](TO.md) 63    a$ = [INPUT$](INPUT$.md)(1) ' wait for a keypress    PALETTE 0, i   [NEXT](NEXT.md)  
```

*Note:* Other attributes (1 to 15) can also be swapped for DAC foreground colors.
  

## See also

* [_PALETTECOLOR](_PALETTECOLOR.md)
* [PALETTE USING](PALETTE USING.md)
* [COLOR](COLOR.md)
* [OUT](OUT.md), [INP](INP.md)
* [SCREEN](SCREEN.md)

  
