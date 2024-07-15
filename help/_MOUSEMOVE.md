# _MOUSEMOVE

The _MOUSEMOVE statement moves the mouse pointer to a new position on the screen as determined by the column and row coordinates.

  

## Syntax

_MOUSEMOVE *column%*, *row%*
  

## Parameters

* *column%* is the horizontal pixel coordinate to place the mouse pointer and can be any value from 0 to [_WIDTH](_WIDTH.md) "WIDTH (function)")(0) - 1.
* *row%* is the vertical pixel position to place the mouse pointer and can be any value from 0 to [_HEIGHT](_HEIGHT.md)(0) - 1

  

## Description

* Maximum coordinate values are based on a program's current [SCREEN](SCREEN.md) mode resolution or the pixel size set by [_NEWIMAGE](_NEWIMAGE.md).
* [SCREEN](SCREEN.md) 0 uses text block coordinates. **Coordinates off the screen area will create an "Illegal Function Call" [ERROR](ERROR.md)**
* Can be used to position the pointer to a default dialog button or move the cursor away from a button so it is not clicked twice.
* Does not require [_MOUSEINPUT](_MOUSEINPUT.md) to be used, but all moves will be remembered and can be read by mouse functions.

  

## Availability

* **Versions prior to 1.000** (Version 1.000 had this function disabled for compatibility reasons.)
* **Version 1.1 and up**

  

## Examples

*Example:* How to move the mouse cursor using remembered mouse movements. Press any key to quit.

``` [SCREEN](SCREEN.md) 12 i = [_MOUSEINPUT](_MOUSEINPUT.md) 'start reading mouse events before INPUT to hold in memory [PRINT](PRINT.md) [INPUT](INPUT.md) "Move the mouse pointer and make a few clicks, then press Enter!", dummy$ _MOUSEMOVE 1, 1 DO: [_LIMIT](_LIMIT.md) 30     count = count + 1     i = [_MOUSEINPUT](_MOUSEINPUT.md)     x = [_MOUSEX](_MOUSEX.md): y = [_MOUSEY](_MOUSEY.md)     b = [_MOUSEBUTTON](_MOUSEBUTTON.md)(1)     [PRINT](PRINT.md) count, x, y, b     _MOUSEMOVE x, y [LOOP](LOOP.md) [UNTIL](UNTIL.md) i = 0 [OR](OR.md) "OR (boolean)") [INKEY$](INKEY$.md) > "" [PRINT](PRINT.md) "Done!"  
```

*Explanation:* The [_MOUSEINPUT](_MOUSEINPUT.md) function will hold previous and _MOUSEMOVE events so press any key when you want to quit.
**Note: [INPUT](INPUT.md), [INPUT$](INPUT$.md) and [LINE INPUT](LINE INPUT.md) will allow continued reading of mouse events while awaiting program user input!**
It is recommended that a [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md): [WEND](WEND.md) loop be used immediately after to clear stored mouse events.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_SCREENIMAGE](_SCREENIMAGE.md)

  
