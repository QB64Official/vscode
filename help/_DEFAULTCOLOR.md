## _DEFAULTCOLOR
---

### The _DEFAULTCOLOR function returns the current default (text/drawing) color for an image handle or page.

#### SYNTAX

`col~& = _DEFAULTCOLOR [( imageHandle& )]`

#### PARAMETERS
* If imageHandle& is omitted, it is assumed to be the current write page or image designated by [_DEST](./_DEST.md) .
* If imageHandle& is an invalid handle, an Invalid handle error occurs. Check handle values first. Zero designates the current screen.


#### DESCRIPTION
* Use it to get the current default (foreground) color to restore it later in a program.
* In legacy [SCREEN](./SCREEN.md) modes and in [_NEWIMAGE](./_NEWIMAGE.md) 256 colors mode the color attribute/palette index is returned.
* In [_NEWIMAGE](./_NEWIMAGE.md) 32-bit mode the [_RGBA32](./_RGBA32.md) value ( &H00 00 00 00 to &HFF FF FF FF ) is returend, make sure to store it in an [_UNSIGNED](./_UNSIGNED.md) [LONG](./LONG.md) variable (as seen in the syntax above with the ~& suffix), otherwise the blue component may be lost.


#### EXAMPLES
```vb
SCREEN 0
COLOR 4, 7 'set color 4 as foreground, color 7 as background
CLS
col~& = _DEFAULTCOLOR
PRINT col~&
```
  
```vb
4
```
  


#### SEE ALSO
* [_BACKGROUNDCOLOR](./_BACKGROUNDCOLOR.md)
* [COLOR](./COLOR.md) , [_DEST](./_DEST.md)
* [SCREEN](./SCREEN.md) , [SCREEN](./SCREEN.md) (function)
* Color Dialog Box
