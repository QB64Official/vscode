# CLS

The **CLS** statement clears the [current write page](current write page.md) or the designated image.

  

## Syntax

CLS [*method%*] [, *bgColor&*] [, *imageHandle&*]
  

## Parameters

* *method%* specifies which parts of the page to clear, and can have one of the following values:
	+ **CLS** - clears the active graphics or text viewport or the entire text screen and refreshes bottom function [KEY ON](KEY ON.md) line.
	+ **CLS** 0 - Clears the entire page of text and graphics. Print cursor is moved to row 1 at column 1.
	+ **CLS** 1 - Clears only the graphics view port. Has no effect for text mode.
	+ **CLS** 2 - Clears only the text view port. The print cursor is moved to the top row of the text view port at column 1.
* The *bgColor&* specifies the color attribute or palette index to use when clearing the screen in **QB64**.
* *imageHandle&* specifies an image handle to clear. If it is not specified, then **CLS** clears the [current write page](current write page.md).

  

## Description

* In legacy [SCREEN](SCREEN.md) modes *bgColor&* specifies the color attribute of the background.
* For 32-bit graphics mode, *bgColor&* specifies the [_RGB32](_RGB32.md) or [_RGBA32](_RGBA32.md) color to use.
* **32-bit screen surface backgrounds (black) have zero [_ALPHA](_ALPHA.md) so that they are transparent when placed over other surfaces.**
	+ Use **CLS** or [_DONTBLEND](_DONTBLEND.md) to make a new surface background [_ALPHA](_ALPHA.md) 255 or opaque.
* If not specified, *bgColor&* is assumed to be the current background color. 32-bit backgrounds will change to opaque.
* If *bgColor&* is not a valid attribute, an [illegal function call](illegal function call.md) error will occur.
* Use [_PRINTMODE](_PRINTMODE.md) to allow the background colors to be visible through the text or the text background.

  

## Availability

* [![v0.610](![v0.610.md)](File:Qb64.png "v0.610")

**v0.610**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* In **QB64-PE v3.10.0** support for clearing images was added.

  

## Examples

*Example 1:* Printing black text on a white background in QB64.

``` [SCREEN](SCREEN.md) 12 CLS , 15 [_PRINTMODE](_PRINTMODE.md)  _KEEPBACKGROUND        'keeps the text background visible [COLOR](COLOR.md) 0: [PRINT](PRINT.md) "This is black text on a white background!" K$ = [INPUT$](INPUT$.md)(1  
```

*Explanation:* [_PRINTMODE](_PRINTMODE.md) can be used with [PRINT](PRINT.md) or [_PRINTSTRING](_PRINTSTRING.md) to make the text or the text background transparent.
  

*Example 2:* You don't need to do anything special to use a .PNG image with alpha/transparency. Here's a simple example:

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) CLS , [_RGB](_RGB.md)(0, 255, 0) i = [_LOADIMAGE](_LOADIMAGE.md)(**"qb64_trans.png"**) 'see note below examples to get the image [_PUTIMAGE](_PUTIMAGE.md) (0, 0), i 'places image at upper left corner of window w/o stretching it   
```

*Explanation:* When QB64 loads a .PNG file containing a transparent color, that color will be properly treated as transparent when _PUTIMAGE is used to put it onto another image. You can use a .PNG file containing transparency information in a 256-color screen mode in QB64. CLS sets the [_CLEARCOLOR](_CLEARCOLOR.md) setting using [_RGB](_RGB.md).
  

## See also

* [SCREEN](SCREEN.md)
* [_RGB](_RGB.md), [_RGBA](_RGBA.md), [_RGB32](_RGB32.md), [_RGBA32](_RGBA32.md)
* [VIEW PRINT](VIEW PRINT.md), [VIEW](VIEW.md)
* [_CLEARCOLOR](_CLEARCOLOR.md)

  
