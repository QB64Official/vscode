# PCOPY

The PCOPY statement copies one source screen page to a destination page in memory.

  

## Syntax

PCOPY *sourcePage%*, *destinationPage%*
  

## Description

* *sourcePage%* is an image page in video memory.
* *destinationPage%* is the video memory location to copy the source image to.
* The working page is set as 0. All drawing occurs there.
* The visible page is set as any page number that the SCREEN mode allows.
* The [_DISPLAY (function)](_DISPLAY (function).md) "DISPLAY (function)") return can be used a page number reference in **QB64** (See Example 1).
* The **QB64** [_DISPLAY](_DISPLAY.md) statement can also be used to stop screen flicker without page flipping or [CLS](CLS.md) and **is the recommended practice**.

### QBasic/QuickBASIC

* *sourcePage%* and *destinationPage%* numbers are limited by the SCREEN mode used. In **QB64**, the same limits don't apply.

  

## Examples

*Example 1:* Creating a mouse cursor using a page number that **you create** in memory without setting up page flipping.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) 'any graphics mode should work without setting up pages [_MOUSEHIDE](_MOUSEHIDE.md) SetupCursor [PRINT](PRINT.md) "Hello World!" [DO](DO.md): [_LIMIT](_LIMIT.md) 30   [DO](DO.md) [WHILE](WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md): [LOOP](LOOP.md) 'main loop must contain _MOUSEINPUT '       other program code [LOOP](LOOP.md)  [SUB](SUB.md) SetupCursor [ON TIMER](ON TIMER.md) "ON TIMER(n)")(0.02) UpdateCursor [TIMER](TIMER.md) [ON](ON.md) [END SUB](END SUB.md)  [SUB](SUB.md) UpdateCursor PCOPY [_DISPLAY](_DISPLAY.md) "DISPLAY (function)"), 100  'any page number as desination with the _DISPLAY function as source [PSET](PSET.md) ([_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md)), [_RGB](_RGB.md)(0, 255, 0) [DRAW](DRAW.md) "ND10F10L3F5L4H5L3" [_DISPLAY](_DISPLAY.md)                  'statement shows image PCOPY 100, [_DISPLAY](_DISPLAY.md) "DISPLAY (function)") 'function return as destination page [END SUB](END SUB.md)  
```

*Note:* Works with [_DISPLAY (function)](_DISPLAY (function).md) "DISPLAY (function)") as the other page. If mouse reads are not crucial, put the _MOUSEINPUT loop inside of the UpdateCursor Sub.
  

*Example 2:* Bouncing balls

```  [SCREEN](SCREEN.md) 7, 0, 1, 0  [DIM](DIM.md) x(10), y(10), dx(10), dy(10)  [FOR](FOR.md) a = 1 [TO](TO.md) 10    x(a) = [INT](INT.md)([RND](RND.md) * 320) + 1    y(a) = [INT](INT.md)([RND](RND.md) * 200) + 1    dx(a) = ([RND](RND.md) * 2) - 1    dy(a) = ([RND](RND.md) * 2) - 1  [NEXT](NEXT.md)  [DO](DO.md)  PCOPY 1, 0                           'place image on the visible page 0  [CLS](CLS.md)  [_LIMIT](_LIMIT.md) 100                           'regulates speed of balls in QB64  [FOR](FOR.md) a = 1 [TO](TO.md) 10    [CIRCLE](CIRCLE.md)(x(a), y(a)), 5, 15          'all erasing and drawing is done on page 1     x(a) = x(a) + dx(a)     y(a) = y(a) + dy(a)    [IF](IF.md) x(a) > 320 [THEN](THEN.md) dx(a) = -dx(a): x(a) = x(a) - 1    [IF](IF.md) x(a) < 0 [THEN](THEN.md) dx(a) = -dx(a): x(a) = x(a) + 1    [IF](IF.md) y(a) > 200 [THEN](THEN.md) dy(a) = -dy(a): y(a) = y(a) - 1    [IF](IF.md) y(a) < 0 [THEN](THEN.md) dy(a) = -dy(a): y(a) = y(a) + 1  [NEXT](NEXT.md)  [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) ' escape exit  
```

*Explanation:* PCOPY reduces the flickering produced by clearing the screen. x(a) = x(a) - 1, etc. is just to be safe that the balls stay within the boundaries. dx(a) = -dx(a), etc. is to keep the actual speed while inverting it (so that the ball "bounces"). The rest should be self-explanatory, but if you are unsure about arrays you might want to look at QB64 Tutorials -> [Arrays](Arrays.md).
  

## See also

* [_DISPLAY](_DISPLAY.md)
* [SCREEN](SCREEN.md)

  
