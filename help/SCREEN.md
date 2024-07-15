# SCREEN

The SCREEN statement sets the video display mode and size of the program window's workspace.

  

## Syntax

SCREEN {*mode%*|*imagehandle&*} [, , active_page, visual_page]
  

## Parameters

* The SCREEN *mode* [INTEGER](INTEGER.md) values available today are 0 to 2 and 7 to 13 listed below.
* **QB64** can use a [LONG](LONG.md) [_NEWIMAGE](_NEWIMAGE.md) page or [_LOADIMAGE](_LOADIMAGE.md) file *image handle* value instead.
* The empty comma disables color when any value is used. **DO NOT USE!** Include the comma ONLY when using page flipping.
* If the SCREEN mode supports pages, the *active page* is the page to be worked on while *visual page* is the one displayed.

  

*Usage:*

* No SCREEN statement in a program defaults to SCREEN 0 text ONLY mode.
* A SCREEN statement that changes screen modes also clears the screen like [CLS](CLS.md). Nothing on the screen is retained.
* Some screen mode text sizes are adjustable with [WIDTH](WIDTH.md) and all **QB64** screens support [PCOPY](PCOPY.md) and page flipping.

```                        **LEGACY SCREEN MODES AT A GLANCE**   **Screen      Text           Graphics          Colors      Video    Text      Default**   **Mode   Rows   Columns   Width   Height  Attrib.   BPP   Pages    Block    QB64 Font**     0   25/43/50  80/40    No graphics     16/16 DAC  4     0-7     -----    _FONT 16    1      25      40      320     200     16/4 BG    4     none    8 X 8    _FONT 8    2      25      80      640     200      2/mono    1     none    8 X 8    _FONT 8    .................................................................................    7      25      40      320     200     16/16 DAC  4     0-7     8 X 8    _FONT 8    8      25      80      640     200     16/16      4     0-3     8 X 8    _FONT 8    9      25      80      640     350     16/64 DAC  4     0-1     8 X 14   _FONT 14   10      25      80      640     350     4/2 GScale 2     none    8 X 14   _FONT 14   11     30/60    80      640     480      2/mono    1     none    8 X 16   _FONT 16   12     30/60    80      640     480     16/262K    4     none    8 X 16   _FONT 16   13      25      40      320     200     256/65K    8     none    8 X 8    _FONT 8                **QB64 allows video paging and [PCOPY](PCOPY.md) in ALL screen modes!**  
```

  

## QB64 Custom Screen Modes

SCREEN *imagehandle&* [, , *active_page*, *visual_page*]
SCREEN [_NEWIMAGE](_NEWIMAGE.md)(*wide&*, *high&*[, {*mode*|*256*|*32*}]) [, , *active_page*, *visual_page*]
SCREEN [_LOADIMAGE](_LOADIMAGE.md)(*file$*[, {*mode*|*256*|*32*}]) [, , *active_page*, *visual_page*]
  

* Custom screen modes can be created using a [_NEWIMAGE](_NEWIMAGE.md) or [_LOADIMAGE](_LOADIMAGE.md) function *imagehandle* return value.
* **QB64** screen modes 0 to 2 and 7 to 13 can be emulated with the same color depth and text block size and different dimensions.
* [_NEWIMAGE](_NEWIMAGE.md) screens can be any set size. A screen mode can be emulated or 256 or 32 bit colors can be designated.
* The [_LOADIMAGE](_LOADIMAGE.md) screen size will be the size of the image loaded. Can designate a *mode* or 256 or 32 bit colors.
* **QB64** allows page flipping or a [PCOPY](PCOPY.md) in ANY SCREEN mode. [_DISPLAY](_DISPLAY.md) can also be used to reduce flickering in animations.
* All SCREEN modes are Windows in QB64. Use [_FULLSCREEN](_FULLSCREEN.md) to set the window area to full screen.
* [_SCREENMOVE](_SCREENMOVE.md) can position a window or the _MIDDLE option can center it on the desktop.

([Return to Table of Contents](Return to Table of Contents.md))

  

## Legacy Screen Modes

* **SCREEN 0** (default mode) is a **text only** screen mode. 64 (VGA) colors with hi-intensity(blinking) colors 16 to 31. ([DAC](DAC.md) attrib 6, 8 to 15). 8 Background colors intensities only(0 - 7). No graphics are possible! Normally runs in a window. ALT-Enter switches from a window to fullscreen. To automatically run in **QBasic** fullscreen, use another Screen mode before using SCREEN 0. Can use [PCOPY](PCOPY.md) with video pages 0 to 7. Text is 25, 43 or 50 rows by 40 or 80 columns. Default is 25 by 80. See [WIDTH](WIDTH.md).

**Note:** Use [OUT](OUT.md) or [_PALETTECOLOR](_PALETTECOLOR.md) to create higher intensity color backgrounds than [COLOR](COLOR.md) , 7.
**All other available SCREEN modes can use text and graphics and are fullscreen in QBasic ONLY.**
* **SCREEN 1** has 4 background color attributes. 0 = black, 1 = blue, 2 = green, 3 = grey. White foreground only. Text is 25 by 40. White graphics is 320 by 200.

* **SCREEN 2** is **monochrome** with black background and white foreground. Text is 25 by 80. White graphics 640 by 200.          NO [COLOR](COLOR.md) keyword allowed.

* **SCREEN 3 to 6 are no longer supported** on most computers! Using them will cause a video [error](error.md)!

* **SCREEN 7** has 16 color attributes ([DAC](DAC.md) attrib. 8 to 15) with background colors. Text 25 rows by 40 columns. Graphics 320 columns by 200 rows. Video pages 0 to 7 for flipping or [PCOPY](PCOPY.md).

* **SCREEN 8** has 16 color attributes with background. Text is 25 by 80. Graphics is 640 by 200. Video pages 0 to 3.

* **SCREEN 9** has 64 DAC color hues for ([DAC](DAC.md) attrib. 6, 8 to 15) with background colors. Text is 25 by 80. Graphics is 640 by 350. Video pages 0 and 1 for flipping or [PCOPY](PCOPY.md).

* **SCREEN 10** has 4 gray scale color attributes with black background. 1 = normal white, 2 = blinking white and 3 = bright white. Text is 25 by 80. Graphics is 640 by 350.

* **SCREEN 11** is **monochrome** with black background and white foreground. Text is 30 or 60 by 80 columns(see [WIDTH](WIDTH.md)). White graphics is 640 by 480. NO [COLOR](COLOR.md) keyword allowed.

* **SCREEN 12** has 16 color attributes, black background. 256K possible color hues. Text is 30 or 60 by 80 columns(see [WIDTH](WIDTH.md)). Graphics 640 by 480.

* **SCREEN 13** has 256 color attributes, black background. 256K possible color hues. Text is 25 by 40. Graphics is 320 by 200.

* **SCREEN [_NEWIMAGE](_NEWIMAGE.md)**(wide&, deep&, mode%) can imitate any size screen mode or use 32 bit or 256 color modes in **QB64**.

* **SCREEN [_LOADIMAGE](_LOADIMAGE.md)**(imagehandle&, colors) can load a program screen of an image file handle in **QB64** using 256 or 32 bit.

([Return to Table of Contents](Return to Table of Contents.md))

  

## Text and Graphics

**Text Coordinates:**
* Are a minimum of 1 and the values given above are the maximums. [LOCATE](LOCATE.md) 1, 1 is the top left SCREEN text position.
* Text characters occupy a certain sized pixel box adjusted by [WIDTH](WIDTH.md) in some screen modes.
* Text [PRINT](PRINT.md) cursor positions can be read by [CSRLIN](CSRLIN.md) and [POS(0)](POS(0).md) to [LOCATE](LOCATE.md) text [PRINTs](PRINTs.md).
* [VIEW PRINT](VIEW PRINT.md) can be used to designate a text view port area.
* In **QB64** the [_WIDTH](_WIDTH.md) "WIDTH (function)") and [_HEIGHT](_HEIGHT.md) functions will return the text dimensions in SCREEN 0 only.

  

**Graphic Coordinates:**
* The minimum on screen graphics pixel coordinates are 0 for columns and rows in the top left corner.
* Maximum pixel coordinates are one less than the maximum dimensions above because the pixel count starts at 0.
* Graphic objects such as [PSET](PSET.md), [PRESET](PRESET.md), [LINE](LINE.md), [CIRCLE](CIRCLE.md) and [DRAW](DRAW.md) can be placed partially off of the screen.
* [GET](GET.md) "GET (graphics statement)") and [PUT](PUT.md) "PUT (graphics statement)") screen image operations MUST be located completely on the screen in QBasic!
* [VIEW](VIEW.md) can be used to designate a graphic view port area of the screen.
* [WINDOW](WINDOW.md) can be used to set the graphics SCREEN coordinates to almost any size needed. Use the SCREEN option for normal row coordinate values. Row coordinates are Cartesian(decrease in value going down the screen) otherwise.
* In **QB64** the [_WIDTH](_WIDTH.md) "WIDTH (function)") and [_HEIGHT](_HEIGHT.md) functions will return the graphic pixel dimensions in SCREENs other than 0.

  

**QB64 Screen Statements and Functions:**
* For file image screens that adopt the image dimensions and image color settings use: [_LOADIMAGE](_LOADIMAGE.md)
* To create custom sized screen modes or pages and 256 or 32 bit colors use: [_NEWIMAGE](_NEWIMAGE.md)
* [_PUTIMAGE](_PUTIMAGE.md) can stretch or reduce the size of images to fit the SCREEN size.
* [PUT](PUT.md) "PUT (graphics statement)") can use [_CLIP](_CLIP.md) to set objects partially off screen. [GET](GET.md) "GET (graphics statement)") can read objects off screen as a color in QB64 ONLY.
* A [_DISPLAY](_DISPLAY.md) statement can be used to only display an image after changes instead of using page flipping or [PCOPY](PCOPY.md).
* The current desktop screen resolution can be found using the [_SCREENIMAGE](_SCREENIMAGE.md) handle value with [_WIDTH](_WIDTH.md) "WIDTH (function)") and [_HEIGHT](_HEIGHT.md).
* **NOTE: Default 32 bit backgrounds are clear black or [_RGBA](_RGBA.md)(0, 0, 0, 0)! Use [CLS](CLS.md) to make the black opaque!**

([Return to Table of Contents](Return to Table of Contents.md))

  

## Examples

*Example 1:* Shows an example of each legacy screen mode available to QBasic and QB64.

``` SCREEN 0 [PRINT](PRINT.md) "This is SCREEN 0 - only text is allowed!" [FOR](FOR.md) S = 1 [TO](TO.md) 13    [IF](IF.md) S < 3 [OR](OR.md) S > 6 [THEN](THEN.md)      [DO](DO.md): [SLEEP](SLEEP.md): [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""      SCREEN S      [PRINT](PRINT.md) "This is SCREEN"; S; " - can use text and graphics!"        [IF](IF.md) S = 2 [OR](OR.md) S = 11 [THEN](THEN.md) [PRINT](PRINT.md) "Monochrome - no [COLOR](COLOR.md) statements!"        [IF](IF.md) S = 10 [THEN](THEN.md)          [COLOR](COLOR.md) 2: [PRINT](PRINT.md) "This SCREEN has only 4 colors. Black and 3 white: 2 blinks.          [CIRCLE](CIRCLE.md) (100,100), 50, 2        [ELSE](ELSE.md) : [CIRCLE](CIRCLE.md) (100,100), 100, S        [END IF](END IF.md)    [END IF](END IF.md) [NEXT](NEXT.md) [SLEEP](SLEEP.md) [SYSTEM](SYSTEM.md)  
```

``` This is SCREEN 0 - only text is allowed!  
```

Displays each SCREEN mode one at a time with a [CIRCLE](CIRCLE.md) (except for SCREEN 0)
([Return to Table of Contents](Return to Table of Contents.md))

### More Examples

* [SaveImage SUB](SaveImage SUB.md)
* [Program ScreenShots](Program ScreenShots.md)
* [ThirtyTwoBit SUB](ThirtyTwoBit SUB.md)
* [SelectScreen](SelectScreen.md)
* [ScreenMode](ScreenMode.md)

  

## See also

* [COLOR](COLOR.md), [CLS](CLS.md), [WIDTH](WIDTH.md)
* [_NEWIMAGE](_NEWIMAGE.md), [_LOADIMAGE](_LOADIMAGE.md), [_SAVEIMAGE](_SAVEIMAGE.md)
* [_SCREENIMAGE](_SCREENIMAGE.md)
* [_LOADFONT](_LOADFONT.md), [_FONT](_FONT.md)
* [_DISPLAY](_DISPLAY.md), [_COPYIMAGE](_COPYIMAGE.md), [_SCREENMOVE](_SCREENMOVE.md)
* [_SCREENHIDE](_SCREENHIDE.md), [_SCREENSHOW](_SCREENSHOW.md), [_SCREENICON](_SCREENICON.md)
* [PALETTE](PALETTE.md), [OUT](OUT.md), [PCOPY](PCOPY.md),
* [GET](GET.md) "GET (graphics statement)"), [PUT](PUT.md) "PUT (graphics statement)")
* [VIEW](VIEW.md), [WINDOW](WINDOW.md), [VIEW PRINT](VIEW PRINT.md)
* [SCREEN (function)](SCREEN (function).md) "SCREEN (function)"), [POINT](POINT.md)
* [Screen Memory](Screen Memory.md), [Screen Saver Programs](Screen Saver Programs.md)
* [_CONSOLE](_CONSOLE.md)

  
