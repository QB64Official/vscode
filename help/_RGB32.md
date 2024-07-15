# _RGB32

The _RGB32 function returns the 32-bit *RGBA* color value with specified red, green and blue component intensities and optional alpha.

  

## Syntax

*Original syntax*:

*color32value~&* = _RGB32(*red&*, *green&*, *blue&*)
*Alternative Syntax 2*:

*color32value~&* = _RGB32(*red&*, *green&*, *blue&*, *alpha&*)
*Alternative Syntax 3*:

*color32value~&* = _RGB32(*intensity&*, *alpha&*)
*Alternative Syntax 4*:

*color32value~&* = _RGB32(*intensity&*)
  

## Parameters

* *red&* specifies the red [LONG](LONG.md) component intensity from 0 to 255.
* *green&* specifies the green [LONG](LONG.md) component intensity from 0 to 255.
* *blue&* specifies the blue [LONG](LONG.md) component intensity from 0 to 255.
* *alpha&* specifies the alpha [LONG](LONG.md) component from 0 to 255.
* *intensity&* specifies the red, green and blue [LONG](LONG.md) components intensity from 0 to 255 simultaneously, to generate a shade of gray.

  

## Description

* The value returned is always a 32-bit [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) color value, as is the [POINT](POINT.md) value.
* **Return variable types must be [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) or [LONG](LONG.md), otherwise resulting color may lose the [_BLUE](_BLUE.md) value.**
* Parameter values outside of the 0 to 255 range are clipped.
* Returns [LONG](LONG.md) 32 bit hexadecimal values from **&H00000000** to **&HFFFFFFFF**.
* When [LONG](LONG.md) values are [PUT](PUT.md) to file, the ARGB values become BGRA. Use [LEFT$](LEFT$.md)([MKL$](MKL$.md)(*color32value~&*), 3) to place 3 colors.
* **NOTE: Default 32-bit backgrounds are clear black or _RGB32(0, 0). Use [CLS](CLS.md) to make the black opaque.**

  

## Availability

* Alternative syntaxes available with **version 1.3 and up**.

  

## Examples

*Example 1:* Converting the color port RGB intensity palette values 0 to 63 to 32 bit hexadecimal values.

``` [SCREEN](SCREEN.md) 12 [DIM](DIM.md) hex32$(15) [FOR](FOR.md) attribute = 1 [TO](TO.md) 15   [OUT](OUT.md) [&H](&H.md)3C7, attribute      'set color attribute to read   red = [INP](INP.md)([&H](&H.md)3C9) * 4      'multiply by 4 to convert intensity to 0 to 255 RGB values   grn = [INP](INP.md)([&H](&H.md)3C9) * 4   blu = [INP](INP.md)([&H](&H.md)3C9) * 4   hex32$(attribute) = "[&H](&H.md)" + [HEX$](HEX$.md)(_RGB32(red, grn, blu))   'always returns the 32 bit value   [COLOR](COLOR.md) attribute   [PRINT](PRINT.md) "[COLOR](COLOR.md)" + [STR$](STR$.md)([_RGB](_RGB.md)(red, grn, blu)) + " = " + hex32$(attribute)  'closest attribute [NEXT](NEXT.md)  
```

``` COLOR 1 = &HFF0000A8 COLOR 2 = &HFF00A800 COLOR 3 = &HFF00A8A8 COLOR 4 = &HFFA80000 COLOR 5 = &HFFA800A8 COLOR 6 = &HFFA85400 COLOR 7 = &HFFA8A8A8 COLOR 8 = &HFF545454 COLOR 9 = &HFF5454FC COLOR 10 = &HFF54FC54 COLOR 11 = &HFF54FCFC COLOR 12 = &HFFFC5454 COLOR 13 = &HFFFC54FC COLOR 14 = &HFFFCFC54 COLOR 15 = &HFFFCFCFC  
```

*Note:* This procedure also shows how the returns from [_RGB](_RGB.md) and _RGB32 differ in a non-32 bit screen mode.
  

*Example 2:* Working with 32 bit colors.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32)  [CLS](CLS.md) , _RGB32(0, 0, 128) 'deep blue background  [LINE](LINE.md) (100, 100)-(540, 380), [_RGB](_RGB.md)(255, 0, 0), BF ' a red box [LINE](LINE.md) (200, 200)-(440, 280), [_RGB](_RGB.md)(0, 255, 0), BF ' a green box   [SLEEP](SLEEP.md) 'Just so we can see our pretty background before we print anything on it.   [COLOR](COLOR.md) _RGB32(255, 255, 255), 0 'White on NO BACKGROUND  [FOR](FOR.md) i = 1 [TO](TO.md) 10     [PRINT](PRINT.md) "This is just a whole bunch of happy nothing!  Happy World!!" [NEXT](NEXT.md) [PRINT](PRINT.md): [PRINT](PRINT.md): [PRINT](PRINT.md):  [COLOR](COLOR.md) 0, _RGB32(0, 0, 0) 'And here, we're going with NO [COLOR](COLOR.md) text, with a BLACK background. 'Notice how this doesn't change the color on the screen at all, where the text is, but does toss a black background to it.  [LOCATE](LOCATE.md) , 15: [PRINT](PRINT.md) "NOTICE HOW OUR 0 [COLOR](COLOR.md) WORKS?" [PRINT](PRINT.md) [LOCATE](LOCATE.md) , 15: [PRINT](PRINT.md) "NEAT, HUH?" [SLEEP](SLEEP.md) SYSTEM  
```

  

*Example 3:* Comparing the output of the new _RGB32 syntaxes (starting with version 1.3) and their equivalents in previous versions.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(400, 400, 32)  [COLOR](COLOR.md) _RGB32(255, 255, 255) [PRINT](PRINT.md) "White" [COLOR](COLOR.md) _RGB32(255) [PRINT](PRINT.md) "White, too, but with less typing" [PRINT](PRINT.md)  [COLOR](COLOR.md) _RGB32(80, 80, 80) [PRINT](PRINT.md) "Dark gray" [COLOR](COLOR.md) _RGB32(80) [PRINT](PRINT.md) "Same gray, but with less typing" [PRINT](PRINT.md)  [COLOR](COLOR.md) [_RGBA32](_RGBA32.md)(255, 255, 255, 120) [PRINT](PRINT.md) "White with alpha of 120 (out of 255)" [COLOR](COLOR.md) _RGB32(255, 120) [PRINT](PRINT.md) "White with alpha of 120 - but with less typing" [PRINT](PRINT.md)  [COLOR](COLOR.md) [_RGBA32](_RGBA32.md)(255, 0, 255, 110) [PRINT](PRINT.md) "Magenta, 110 alpha" [COLOR](COLOR.md) _RGB32(255, 0, 255, 110) [PRINT](PRINT.md) "Magenta too, 110 alpha - but with less typing"  
```

  

## See also

* [_RGBA32](_RGBA32.md), [_RGB](_RGB.md), [_RGBA](_RGBA.md)
* [_RED32](_RED32.md), [_GREEN32](_GREEN32.md), [_BLUE32](_BLUE32.md)
* [_PALETTECOLOR](_PALETTECOLOR.md)
* [HEX$ 32 Bit Values](HEX$ 32 Bit Values.md)
* [SaveImage SUB](SaveImage SUB.md)
* [Hexadecimal Color Values](Hexadecimal Color Values.md)

  
