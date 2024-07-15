# _PRINTSTRING

The _PRINTSTRING statement prints text [strings](strings.md) using graphic column and row coordinate positions.

  

## Syntax

_PRINTSTRING(*column*, *row*), *textExpression$*[, *imageHandle&*]
  

## Parameters

* *column* and *row* are [INTEGER](INTEGER.md) or [LONG](LONG.md) starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
* *textExpression$* is any literal or variable [string](string.md) value of text to be displayed.
* *imageHandle&* is the optional image or destination to use. Zero designates current [SCREEN](SCREEN.md) page.

  

## Description

* The starting coordinate sets the top left corner of the text to be printed. Use [_FONTHEIGHT](_FONTHEIGHT.md) to calculate that text or [font](font.md) position
* The [_FONT](_FONT.md) size can affect the [screen](screen.md) and row heights.
	+ Custom fonts are not required. _PRINTSTRING can print all [ASCII](ASCII.md) characters.
* [_PRINTWIDTH](_PRINTWIDTH.md) can be used to determine how wide a text print will be so that the screen width is not exceeded.
* If the *imageHandle&* is omitted, the current image, page or screen destination is used.
* Can use the current font alpha blending with a designated image background. See the [_RGBA](_RGBA.md) function example.
* Use the [_PRINTMODE](_PRINTMODE.md) statement before printing to set how the background is rendered.
	+ Use the [_PRINTMODE (function)](_PRINTMODE (function).md) "PRINTMODE (function)") to find the current _PRINTMODE setting.
* In SCREEN 0 (text only), _PRINTSTRING works as one-line replacement for **LOCATE x, y: PRINT text$**, without changing the current cursor position.

  

## Availability

* In versions of QB64 prior to 1.000 _PRINTSTRING can only be used in graphic, 256 color or 32 bit screen modes, not SCREEN 0.

  

## Examples

*Example 1:* Printing those unprintable [ASCII](ASCII.md) control characters is no longer a problem!

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 256)  [FOR](FOR.md) code = 0 [TO](TO.md) 31   chrstr$ = chrstr$ + [CHR$](CHR$.md)(code) + [SPACE$](SPACE$.md)(1) [NEXT](NEXT.md)  [_FONT](_FONT.md) [_LOADFONT](_LOADFONT.md)("C:\Windows\Fonts\Cour.ttf", 20, "MONOSPACE") 'select monospace font  _PRINTSTRING (0, 16), chrstr$  [END](END.md)  
```

```   ☺ ☻ ♥ ♦ ♣ ♠ • ◘ ○ ◙ ♂ ♀ ♪ ♫ ☼ ► ◄ ↕ ‼ ¶ § ▬ ↨ ↑ ↓ → ← ∟ ↔ ▲ ▼  
```

  

*Example 2:* Making any **QB64 program window** larger using a SUB that easily converts PRINT to _PRINTSTRING.

``` Scr13& = [_NEWIMAGE](_NEWIMAGE.md)(320, 200, 13)  'this is the old SCREEN 13 image page to set the image Big13& = [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 256) 'use 4 X 3 aspect ratio that QBasic used when full screen  [SCREEN](SCREEN.md) Big13& [_DEST](_DEST.md) Scr13& image1& = [_LOADIMAGE](_LOADIMAGE.md)("Howie.BMP", 256) image2& = [_LOADIMAGE](_LOADIMAGE.md)("Howie2.BMP", 256) [_PUTIMAGE](_PUTIMAGE.md) (10, 20), image1&, Scr13& [_PUTIMAGE](_PUTIMAGE.md) (160, 20), image2&, Scr13& [_COPYPALETTE](_COPYPALETTE.md) image1&, Scr13& [COLOR](COLOR.md) 151: [LOCATE](LOCATE.md) 2, 4: PRINTS "Screen 13 Height Reduction to 83%" [LOCATE](LOCATE.md) 22, 22: PRINTS [CHR$](CHR$.md)(24) + " 4 X 3 Proportion"  'use [concatenation](concatenation.md) [LOCATE](LOCATE.md) 24, 21: PRINTS [CHR$](CHR$.md)(27) + " Stretched at 100%" 'instead of a [semicolon](semicolon.md)! [_COPYPALETTE](_COPYPALETTE.md) Scr13&, Big13&  'required when imported image colors are used [_PUTIMAGE](_PUTIMAGE.md) , Scr13&, Big13&   'stretches the screen to double the size K$ = [INPUT$](INPUT$.md)(1) [END](END.md)  [SUB](SUB.md) PRINTS (Text$) row% = ([CSRLIN](CSRLIN.md) - 1) * [_FONTHEIGHT](_FONTHEIGHT.md)      'finds current screen page text or font row height col% = ([POS](POS.md)(0) - 1) * [_PRINTWIDTH](_PRINTWIDTH.md)("W") 'finds current page text or font column width _PRINTSTRING (col%, row%), Text$ [END SUB](END SUB.md)  
```

*Explanation:* The procedure above creates a larger version of a SCREEN 13 window by stretching it with [_PUTIMAGE](_PUTIMAGE.md). It cannot stretch PRINTed text so _PRINTSTRING must be used instead. [LOCATE](LOCATE.md) sets the PRINT cursor position for [CSRLIN](CSRLIN.md) and [POS](POS.md)(0) to read. The SUB then converts the coordinates to graphical ones. Then **change** [PRINT](PRINT.md) to PRINTS using the IDE **Search Menu**.
  

*Example 3:* Rotating a text string around a graphic object.

``` [SCREEN](SCREEN.md) 12 [DIM](DIM.md) row [AS](AS.md) [INTEGER](INTEGER.md), cnt [AS](AS.md) [INTEGER](INTEGER.md), cstart [AS](AS.md) [SINGLE](SINGLE.md), cend [AS](AS.md) [SINGLE](SINGLE.md) [DIM](DIM.md) xrot [AS](AS.md) [INTEGER](INTEGER.md), yrot [AS](AS.md) [INTEGER](INTEGER.md), scale [AS](AS.md) [INTEGER](INTEGER.md) ' [_FULLSCREEN](_FULLSCREEN.md)                       'full screen optional cstart = 0: cend = 8 * [ATN](ATN.md)(1) xrot = 6: yrot = 60: scale = 4 row = 1 [CIRCLE](CIRCLE.md) (320, 240), 15, 9: [PAINT](PAINT.md) [STEP](STEP.md)(0, 0), 9 [DO](DO.md)   [FOR](FOR.md) i = cstart [TO](TO.md) cend [STEP](STEP.md) .04     x = 300 + (scale * 40 - (row * xrot)) * [COS](COS.md)(i)     y = 200 + (scale * 40 - (row * yrot)) * [SIN](SIN.md)(i)     cnt = cnt + 1     [COLOR](COLOR.md) 7: _PRINTSTRING (x, y), "HELLO WORLD!", 0  'display     [IF](IF.md) cnt = [LEN](LEN.md)(text$) * 8 [THEN](THEN.md) cnt = 0: [EXIT DO](EXIT DO.md)     [_DISPLAY](_DISPLAY.md)     [COLOR](COLOR.md) 0: _PRINTSTRING (x, y), "HELLO WORLD!", 0  'erase     [_DELAY](_DELAY.md) 0.02   [NEXT](NEXT.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) 'escape key exit [COLOR](COLOR.md) 15 [END](END.md)  
```

  

## See also

* [_NEWIMAGE](_NEWIMAGE.md), [_PRINTWIDTH](_PRINTWIDTH.md), [_PRINTMODE](_PRINTMODE.md)
* [_CONTROLCHR](_CONTROLCHR.md)
* [_FONT](_FONT.md), [_LOADFONT](_LOADFONT.md), [_FONTHEIGHT](_FONTHEIGHT.md), [_FONTWIDTH](_FONTWIDTH.md)
* [_SCREENIMAGE](_SCREENIMAGE.md), [_SCREENPRINT](_SCREENPRINT.md)
* [Text Using Graphics](Text Using Graphics.md)

  
