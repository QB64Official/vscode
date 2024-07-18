## PALETTE
---

### The PALETTE statement can swap color settings, set colors to default or set the red, green and blue color components of palette colors.

#### DESCRIPTION
* red% , green% and blue% values can range from 0 to 63. Many color shades are possible in non- DAC color attributes.  (Valid for screens 11, 12, 13, and 256 only.)
* If the red% , green% and blue% color intensity settings are all the same value the resulting color is a shade of grey.  (Valid for screens 11, 12, 13, and 256 only.)
* A swap is often used with DAC color attributes that cannot change RGB settings. Only the RGB color settings are swapped from original existingAttribute% to newAttribute% . Screens 0 thru 9 support swaps.
* [PALETTE](./PALETTE.md) without any value sets any changed RGB settings back to the default color settings, including DAC colors.
* [PALETTE](./PALETTE.md) [USING](./USING.md) can be used when color intensity values are stored in an array .
* QB64 implements the [_PALETTECOLOR](./_PALETTECOLOR.md) statement to provide extended palette functionality.


#### EXAMPLES
##### Example: Displaying all 64 DAC color hues as backgrounds in SCREEN 9 using a PALETTE swap.
```vb
SCREEN 9 ' background is default black
 LOCATE 20, 33: PRINT "Press any Key!"
 FOR i = 0 TO 63
  a$ = INPUT$(1) ' wait for a keypress
  PALETTE 0, i
 NEXT
```
  


#### SEE ALSO
* [_PALETTECOLOR](./_PALETTECOLOR.md)
* [PALETTE](./PALETTE.md) [USING](./USING.md)
* [COLOR](./COLOR.md)
* [OUT](./OUT.md) , [INP](./INP.md)
* [SCREEN](./SCREEN.md)
