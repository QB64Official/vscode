## CLS
---

### The CLS statement clears the current write page or the designated image.

#### SYNTAX

`CLS [ method% ] [, bgColor& ] [, imageHandle& ]`

#### PARAMETERS
* method% specifies which parts of the page to clear, and can have one of the following values:
	* [CLS](./CLS.md) - clears the active graphics or text viewport or the entire text screen and refreshes bottom function [KEY](./KEY.md) [ON](./ON.md) line.
	* [CLS](./CLS.md) 0 - Clears the entire page of text and graphics. Print cursor is moved to row 1 at column 1.
	* [CLS](./CLS.md) 1 - Clears only the graphics view port. Has no effect for text mode.
	* [CLS](./CLS.md) 2 - Clears only the text view port. The print cursor is moved to the top row of the text view port at column 1.
* The bgColor& specifies the color attribute or palette index to use when clearing the screen in QB64 .
* imageHandle& specifies an image handle to clear. If it is not specified, then [CLS](./CLS.md) clears the current write page .


#### DESCRIPTION
* In legacy [SCREEN](./SCREEN.md) modes bgColor& specifies the color attribute of the background.
* For 32-bit graphics mode, bgColor& specifies the [_RGB32](./_RGB32.md) or [_RGBA32](./_RGBA32.md) color to use.
* 32-bit screen surface backgrounds (black) have zero [_ALPHA](./_ALPHA.md) so that they are transparent when placed over other surfaces.
	* Use [CLS](./CLS.md) or [_DONTBLEND](./_DONTBLEND.md) to make a new surface background [_ALPHA](./_ALPHA.md) 255 or opaque.
* If not specified, bgColor& is assumed to be the current background color. 32-bit backgrounds will change to opaque.
* If bgColor& is not a valid attribute, an illegal function call error will occur.
* Use [_PRINTMODE](./_PRINTMODE.md) to allow the background colors to be visible through the text or the text background.


#### EXAMPLES
##### Example 1: Printing black text on a white background in QB64.
```vb
SCREEN 12
CLS , 15
_PRINTMODE  _KEEPBACKGROUND        'keeps the text background visible
COLOR 0: PRINT "This is black text on a white background!"
K$ = INPUT$(1
```
  
##### Example 2: You don't need to do anything special to use a .PNG image with alpha/transparency. Here's a simple example:
```vb
SCREEN _NEWIMAGE(640, 480, 32)
CLS , _RGB(0, 255, 0)
i = _LOADIMAGE("qb64_trans.png") 'see note below examples to get the image
_PUTIMAGE (0, 0), i 'places image at upper left corner of window w/o stretching it
```
  


#### SEE ALSO
* [SCREEN](./SCREEN.md)
* [_RGB](./_RGB.md) , [_RGBA](./_RGBA.md) , [_RGB32](./_RGB32.md) , [_RGBA32](./_RGBA32.md)
* [VIEW](./VIEW.md) [PRINT](./PRINT.md) , [VIEW](./VIEW.md)
* [_CLEARCOLOR](./_CLEARCOLOR.md)
