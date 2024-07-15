# _MOUSEWHEEL

The _MOUSEWHEEL function returns a positive or negative [INTEGER](INTEGER.md) value indicating mouse scroll events since the last read of [_MOUSEINPUT](_MOUSEINPUT.md).

  

## Syntax

*scrollAmount%* = _MOUSEWHEEL
  

## Description

* Returns -1 when scrolling up and 1 when scrolling down with 0 indicating no movement since last read.
* After an event has been read, the value resets to 0 automatically so cumulative position values must be added.
* If no movement on the wheel has occurred since the last [_MOUSEINPUT](_MOUSEINPUT.md) read, _MOUSEWHEEL returns 0.

  

## Availability

* [![v0.851](![v0.851.md)](File:Qb64.png "v0.851")

**v0.851**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* Available for *macOS* since **QB64-PE v3.13.0**

  

## Examples

Example 1
Reading the cumulative mouse wheel "clicks".

``` [DO](DO.md)     [_LIMIT](_LIMIT.md) 50     [DO WHILE](DO WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)         Scroll = Scroll + _MOUSEWHEEL         [LOCATE](LOCATE.md) 10, 20: [PRINT](PRINT.md) Scroll     [LOOP](LOOP.md) [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(13) ' press Enter to quit  
```

---

Example 2
A simple text scrolling routine using the mouse wheel value to read a text array.
You will need a text file that is large enough for this example.

``` [DIM](DIM.md) Array$(100) [LINE INPUT](LINE INPUT.md) "Enter a file name with 100 or more lines of text: ", file$ [OPEN](OPEN.md) file$ [FOR](FOR.md) [INPUT](INPUT.md) [AS](AS.md) #1 [DO UNTIL](DO UNTIL.md) [EOF](EOF.md)(1)     inputcount = inputcount + 1     [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #1, Array$(inputcount)     [IF](IF.md) inputcount = 100 [THEN](THEN.md) [EXIT DO](EXIT DO.md) [LOOP](LOOP.md) [FOR](FOR.md) n = 1 [TO](TO.md) 21: [PRINT](PRINT.md) Array$(n): [NEXT](NEXT.md) [CLOSE](CLOSE.md) #1 [DO](DO.md)     [DO WHILE](DO WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)         [IF](IF.md) row >= 0 [THEN](THEN.md) row = row + _MOUSEWHEEL [ELSE](ELSE.md) row = 0 'prevent under scrolling         [IF](IF.md) row > inputcount - 20 [THEN](THEN.md) row = inputcount - 20 'prevent over scrolling         [IF](IF.md) prevrow <> row [THEN](THEN.md) 'look for a change in row value             [IF](IF.md) row > 0 [AND](AND.md) "AND (boolean)") row <= inputcount - 20 [THEN](THEN.md)                 [CLS](CLS.md): [LOCATE](LOCATE.md) 2, 1                 [FOR](FOR.md) n = row [TO](TO.md) row + 20                     [PRINT](PRINT.md) Array$(n)                 [NEXT](NEXT.md)             [END IF](END IF.md)         [END IF](END IF.md)         prevrow = row 'store previous row value     [LOOP](LOOP.md) [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) > ""  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md), [_MOUSEBUTTON](_MOUSEBUTTON.md)
* [_MOUSEINPUT](_MOUSEINPUT.md), [_MOUSEMOVE](_MOUSEMOVE.md)
* [_MOUSESHOW](_MOUSESHOW.md), [_MOUSEHIDE](_MOUSEHIDE.md)
* [Controller Devices](Controller Devices.md)

  
