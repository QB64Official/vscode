# _MEMIMAGE

The _MEMIMAGE function returns a [_MEM](_MEM.md) value referring to an image's memory using a designated image handle.

  

## Syntax

*imageBlock* = _MEMIMAGE[(*imageHandle&*)]
  

## Parameters

* The *imageBlock* [_MEM](_MEM.md) type variable holds the read-only elements .OFFSET, .SIZE, .TYPE and .ELEMENTSIZE.
* If the optional *imageHandle&* isn't passed, it is assumed to be the current [_DESTination](_DESTination.md) program screen image.

  

## Description

* Use the function to place images into memory access blocks for faster data access.
* All values created by this function must be freed using [_MEMFREE](_MEMFREE.md) with a valid [_MEM](_MEM.md) variable.
* Image handle values and the memory used must still be freed using [_FREEIMAGE](_FREEIMAGE.md) when no longer required.

  

## Examples

*Example 1:* Darkening an image using memory with [$CHECKING]($CHECKING.md):OFF for greater speed. Use any 24 bit image file name on the second code line.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(1024, 768, 32) i& = [_LOADIMAGE](_LOADIMAGE.md)("turtle.jpg") '<<<<<<<<<<<<< use any 24 bit image file  [FOR](FOR.md) n! = 1 [TO](TO.md) 0.01 [STEP](STEP.md) -0.01     i2& = [_COPYIMAGE](_COPYIMAGE.md)(i&)     DarkenImage i2&, n!     [_PUTIMAGE](_PUTIMAGE.md) (0, 0), i2&     [_FREEIMAGE](_FREEIMAGE.md) i2&     [_DISPLAY](_DISPLAY.md) [NEXT](NEXT.md)  [SUB](SUB.md) DarkenImage (Image [AS](AS.md) [LONG](LONG.md), Value_From_0_To_1 [AS](AS.md) [SINGLE](SINGLE.md)) [IF](IF.md) Value_From_0_To_1 <= 0 [OR](OR.md) "OR (boolean)") Value_From_0_To_1 >= 1 [OR](OR.md) "OR (boolean)") [_PIXELSIZE](_PIXELSIZE.md)(Image) <> 4 [THEN](THEN.md) [EXIT SUB](EXIT SUB.md) [DIM](DIM.md) Buffer [AS](AS.md) [_MEM](_MEM.md): Buffer = _MEMIMAGE(Image) 'Get a memory reference to our image [DIM](DIM.md) Frac_Value [AS](AS.md) [LONG](LONG.md): Frac_Value = Value_From_0_To_1 * 65536 'Used to avoid slow floating point calculations [DIM](DIM.md) O [AS](AS.md) [_OFFSET](_OFFSET.md), O_Last [AS](AS.md) [_OFFSET](_OFFSET.md) O = Buffer.OFFSET 'We start at this offset O_Last = Buffer.OFFSET + [_WIDTH](_WIDTH.md) "WIDTH (function)")(Image) * [_HEIGHT](_HEIGHT.md)(Image) * 4 'We stop when we get to this offset 'use on error free code ONLY! [$CHECKING]($CHECKING.md):OFF DO     [_MEMPUT](_MEMPUT.md) Buffer, O, [_MEMGET](_MEMGET.md) "MEMGET (function)")(Buffer, O, [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)) * Frac_Value \ 65536 [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)     [_MEMPUT](_MEMPUT.md) Buffer, O + 1, [_MEMGET](_MEMGET.md) "MEMGET (function)")(Buffer, O + 1, [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)) * Frac_Value \ 65536 [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)     [_MEMPUT](_MEMPUT.md) Buffer, O + 2, [_MEMGET](_MEMGET.md) "MEMGET (function)")(Buffer, O + 2, [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)) * Frac_Value \ 65536 [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)     O = O + 4 [LOOP](LOOP.md) [UNTIL](UNTIL.md) O = O_Last 'turn checking back on when done! [$CHECKING]($CHECKING.md):ON [_MEMFREE](_MEMFREE.md) Buffer [END SUB](END SUB.md)  
```

*Explanation:* The second value passed to DarkenImage is a value from 0.0 to 1.0 where 0.0 is full darkness and 1 is none.
  

*Example 2:* Reading information stored in an image with _MEMIMAGE to print [ASC](ASC.md) "ASC (function)") text characters to the screen.

``` [SCREEN](SCREEN.md) 13 [_FULLSCREEN](_FULLSCREEN.md) [PSET](PSET.md) (0, 0), [ASC](ASC.md) "ASC (function)")("H") [PSET](PSET.md) (1, 0), [ASC](ASC.md) "ASC (function)")("E") [PSET](PSET.md) (2, 0), [ASC](ASC.md) "ASC (function)")("L") [PSET](PSET.md) (3, 0), [ASC](ASC.md) "ASC (function)")("L") [PSET](PSET.md) (4, 0), [ASC](ASC.md) "ASC (function)")("O") [PSET](PSET.md) (5, 0), 32 [PSET](PSET.md) (6, 0), [ASC](ASC.md) "ASC (function)")("W") [PSET](PSET.md) (7, 0), [ASC](ASC.md) "ASC (function)")("O") [PSET](PSET.md) (8, 0), [ASC](ASC.md) "ASC (function)")("R") [PSET](PSET.md) (9, 0), [ASC](ASC.md) "ASC (function)")("L") [PSET](PSET.md) (10, 0), [ASC](ASC.md) "ASC (function)")("D") [DIM](DIM.md) m [AS](AS.md) [_MEM](_MEM.md) m = _MEMIMAGE x1$ = [_MEMGET](_MEMGET.md) "MEMGET (function)")(m, m.OFFSET, [STRING](STRING.md) * 11) 'convert numbers to ASCII text characters [_MEMFREE](_MEMFREE.md) m 'free memory when done [LOCATE](LOCATE.md) 10, 1: [PRINT](PRINT.md) [LEN](LEN.md)(x1$) 'prints 11 as byte length [PRINT](PRINT.md) x1$ 'prints HELLO WORLD [END](END.md)  
```

*Notes:* The colors in the upper left corner are the text data used. An image could hold a hidden text message this way.
  

## See also

* [_MEM](_MEM.md)
* [_MEMNEW](_MEMNEW.md)
* [_MEMGET](_MEMGET.md), [_MEMPUT](_MEMPUT.md)
* [_MEMFREE](_MEMFREE.md)
* [$CHECKING]($CHECKING.md)

  
