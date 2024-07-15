# CSRLIN

The CSRLIN function returns the current text row position of the [PRINT](PRINT.md) cursor.

  

## Syntax

*row%* = CSRLIN
  

## Description

* The value returned is within the range of 1 to the current number of rows in the [SCREEN](SCREEN.md) mode used.
	+ In [SCREEN](SCREEN.md) 0 (text mode), the [_HEIGHT](_HEIGHT.md) function returns the number of text rows.
	+ In graphic modes, the number of available text rows can be calculated by dividing [_HEIGHT](_HEIGHT.md) (measured in pixels in graphic modes) by [_FONTHEIGHT](_FONTHEIGHT.md): ***totalRows%* = _HEIGHT / _FONTHEIGHT**
* In screen modes that support page flipping, the CSRLIN function returns the vertical coordinate of the cursor on the active page.
* x = [POS](POS.md)(0) returns the column location of the cursor.

  

## Examples

*Example:* A semicolon stops the print cursor immediately after the print.

```   LOCATE 5, 5: PRINT "HELLO ";   Y = CSRLIN 'save the row   X = [POS](POS.md)(0) 'save the column   LOCATE 10, 10: PRINT "WORLD"   LOCATE Y, X 'restore saved position   PRINT "GOODBYE"  
```

```               HELLO GOODBYE              WORLD    
```

*Explanation:* "HELLO " is printed and the semicolon stops the cursor immediately after the text. The CSRLIN variable records the current print cursor's text row in Y. The [POS](POS.md) function records the current print cursor's text column in X. The second [PRINT](PRINT.md) statement displays the comment "WORLD" on the 10th line of the screen. The last [LOCATE](LOCATE.md) statement restores the position of the cursor to the original line and column immediately after the first print.
  

## See also

* [SCREEN](SCREEN.md), [LOCATE](LOCATE.md), [POS](POS.md)
* [_PRINTSTRING](_PRINTSTRING.md) (graphic print)

  
