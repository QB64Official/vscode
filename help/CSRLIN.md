## CSRLIN
---

### The CSRLIN function returns the current text row position of the PRINT cursor.

#### SYNTAX

`row% = CSRLIN`

#### DESCRIPTION
* The value returned is within the range of 1 to the current number of rows in the [SCREEN](./SCREEN.md) mode used.
	* In [SCREEN](./SCREEN.md) 0 (text mode), the [_HEIGHT](./_HEIGHT.md) function returns the number of text rows.
	* In graphic modes, the number of available text rows can be calculated by dividing [_HEIGHT](./_HEIGHT.md) (measured in pixels in graphic modes) by [_FONTHEIGHT](./_FONTHEIGHT.md) : totalRows% = [_HEIGHT](./_HEIGHT.md) / [_FONTHEIGHT](./_FONTHEIGHT.md)
* In screen modes that support page flipping, the [CSRLIN](./CSRLIN.md) function returns the vertical coordinate of the cursor on the active page.
* x = [POS](./POS.md) (0) returns the column location of the cursor.


#### EXAMPLES
##### Example: A semicolon stops the print cursor immediately after the print.
```vb
LOCATE 5, 5: PRINT "HELLO ";
 Y = CSRLIN 'save the row
 X = POS(0) 'save the column
 LOCATE 10, 10: PRINT "WORLD"
 LOCATE Y, X 'restore saved position
 PRINT "GOODBYE"
```
  
```vb
HELLO GOODBYE




        WORLD
```
  


#### SEE ALSO
* [SCREEN](./SCREEN.md) , [LOCATE](./LOCATE.md) , [POS](./POS.md)
* [_PRINTSTRING](./_PRINTSTRING.md) (graphic print)
