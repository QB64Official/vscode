# $COLOR

**$COLOR** is a metacommand that adds named color constants into a program, which then can be used instead of hardcoded literal color values.

  

## Syntax

$COLOR**:**{0|32}
  

## Parameters

* The one and only parameter is a literal number designating either to include [SCREEN 0](SCREEN 0.md) based color indexes, or full [_RGB32](_RGB32.md) color values with full (opaque) alpha.

  

## Description

* **$COLOR:0** adds constants for the colors 0-15 available in **SCREEN 0**, these do also match for the first 16 colors on 8-Bit (256 colors) graphic screens as long as they are not changed using [PALETTE](PALETTE.md) or [_PALETTECOLOR](_PALETTECOLOR.md). For the actual constant names see [$COLOR:0 Name Table]($COLOR:0 Name Table.md).
* **$COLOR:32** adds constants for full 32-Bit color values as used on 32-Bit screens created via [_NEWIMAGE](_NEWIMAGE.md), similar to HTML color names. For the actual constant names see [$COLOR:32 Name Table]($COLOR:32 Name Table.md).
* Prior to QB64-PE v0.5.0, **$COLOR** was not compatible with [$NOPREFIX]($NOPREFIX.md).
* Since QB64-PE v0.5.0, **$COLOR** can now be used with [$NOPREFIX]($NOPREFIX.md), with a few notable differences to three conflicting colors -- Red, Green, Blue.

Red would conflict with [_RED](_RED.md), Green would conflict with [_GREEN](_GREEN.md), and Blue would conflict with [_BLUE](_BLUE.md), once the underscore was removed from those commands with [$NOPREFIX]($NOPREFIX.md).

To prevent these conflicts, the [COLOR](COLOR.md) values have had **NP_** prepended to the front of them, to distinguish them from the non-prefixed command names. All other color names remain the same, with only the three colors in conflict having to use **NP_** (for **N**o **P**refix) in front of them.
  

## Examples

Example 1
Adding named color constants for SCREEN 0.

``` $COLOR:0  [COLOR](COLOR.md) BrightWhite, Red [PRINT](PRINT.md) "Bright white on red."  
```

``` Bright white on red.  
```

---

Example 2
Adding named color constants for 32-bit modes.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 400, 32) $COLOR:32  [COLOR](COLOR.md) CrayolaGold, DarkCyan [PRINT](PRINT.md) "CrayolaGold on DarkCyan."  
```

``` CrayolaGold on DarkCyan.  
```

---

Example 3
Adding named color constants for 32-bit modes (with $NOPREFIX in effect).

``` [$NOPREFIX]($NOPREFIX.md)  [SCREEN](SCREEN.md) [NEWIMAGE](NEWIMAGE.md)(640, 400, 32) $COLOR:32  [COLOR](COLOR.md) NP_Red, White 'notice the NP_ in front of Red? 'This is to distinguish the color from the command with $NOPREFIX. [PRINT](PRINT.md) "Red on White."  
```

``` Red on White.  
```

  

## See also

* [COLOR](COLOR.md)
* [SCREEN](SCREEN.md), [_NEWIMAGE](_NEWIMAGE.md)
* [Metacommand](Metacommand.md)
* [$COLOR:0 Name Table]($COLOR:0 Name Table.md)
* [$COLOR:32 Name Table]($COLOR:32 Name Table.md)

  
