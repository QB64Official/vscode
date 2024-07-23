<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_PRINTSTRING](PRINTSTRING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PRINTSTRING)
---
<blockquote>

### The _PRINTSTRING statement prints text strings using graphic column and row coordinate positions.

</blockquote>

#### SYNTAX

<blockquote>

`_PRINTSTRING ( column , row ), textExpression$ [, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* column and row are [INTEGER](INTEGER.md) or [LONG](LONG.md) starting PIXEL (graphic) column and row coordinates to set text or custom fonts.
* textExpression$ is any literal or variable string value of text to be displayed.
* imageHandle& is the optional image or destination to use. Zero designates current [SCREEN](SCREEN.md) page.
</blockquote>

#### DESCRIPTION

<blockquote>


* The starting coordinate sets the top left corner of the text to be printed. Use [_FONTHEIGHT](FONTHEIGHT.md) to calculate that text or font position
* The [_FONT](FONT.md) size can affect the screen and row heights.
* Custom fonts are not required. [_PRINTSTRING](PRINTSTRING.md) can print all ASCII characters.
* [_PRINTWIDTH](PRINTWIDTH.md) can be used to determine how wide a text print will be so that the screen width is not exceeded.
* If the imageHandle& is omitted, the current image, page or screen destination is used.
* Can use the current font alpha blending with a designated image background. See the [_RGBA](RGBA.md) function example.
* Use the [_PRINTMODE](PRINTMODE.md) statement before printing to set how the background is rendered.
* Use the [_PRINTMODE](PRINTMODE.md) (function) to find the current [_PRINTMODE](PRINTMODE.md) setting.
* In [SCREEN](SCREEN.md) 0 (text only), [_PRINTSTRING](PRINTSTRING.md) works as one-line replacement for [LOCATE](LOCATE.md) x, y: [PRINT](PRINT.md) text$ , without changing the current cursor position.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Printing those unprintable ASCII control characters is no longer a problem!
```vb
SCREEN _NEWIMAGE(800, 600, 256)

FOR code = 0 TO 31
chrstr$ = chrstr$ + CHR$(code) + SPACE$(1)
NEXT

_FONT _LOADFONT("C:\Windows\Fonts\Cour.ttf", 20, "MONOSPACE") 'select monospace font

_PRINTSTRING (0, 16), chrstr$

END
```
  
<br>

```vb
☺ ☻ ♥ ♦ ♣ ♠ • ◘ ○ ◙ ♂ ♀ ♪ ♫ ☼ ► ◄ ↕ ‼ ¶ § ▬ ↨ ↑ ↓ → ← ∟ ↔ ▲ ▼
```
  
<br>



##### Example 2: Making any QB64 program window larger using a SUB that easily converts PRINT to _PRINTSTRING .
```vb
Scr13& = _NEWIMAGE(320, 200, 13)  'this is the old SCREEN 13 image page to set the image
Big13& = _NEWIMAGE(640, 480, 256) 'use 4 X 3 aspect ratio that QBasic used when full screen

SCREEN Big13&
_DEST Scr13&
image1& = _LOADIMAGE("Howie.BMP", 256)
image2& = _LOADIMAGE("Howie2.BMP", 256)
_PUTIMAGE (10, 20), image1&, Scr13&
_PUTIMAGE (160, 20), image2&, Scr13&
_COPYPALETTE image1&, Scr13&
COLOR 151: LOCATE 2, 4: PRINTS "Screen 13 Height Reduction to 83%"
LOCATE 22, 22: PRINTS CHR$(24) + " 4 X 3 Proportion"  'use concatenation
LOCATE 24, 21: PRINTS CHR$(27) + " Stretched at 100%" 'instead of a semicolon!
_COPYPALETTE Scr13&, Big13&  'required when imported image colors are used
_PUTIMAGE , Scr13&, Big13&   'stretches the screen to double the size
K$ = INPUT$(1)
END

SUB PRINTS (Text$)
row% = (CSRLIN - 1) * _FONTHEIGHT      'finds current screen page text or font row height
col% = (POS(0) - 1) * _PRINTWIDTH("W") 'finds current page text or font column width
_PRINTSTRING (col%, row%), Text$
END SUB
```
  
<br>



##### Example 3: Rotating a text string around a graphic object.
```vb
SCREEN 12
DIM row AS INTEGER, cnt AS INTEGER, cstart AS SINGLE, cend AS SINGLE
DIM xrot AS INTEGER, yrot AS INTEGER, scale AS INTEGER
' _FULLSCREEN                       'full screen optional
cstart = 0: cend = 8 * ATN(1)
xrot = 6: yrot = 60: scale = 4
row = 1
CIRCLE (320, 240), 15, 9: PAINT STEP(0, 0), 9
DO
FOR i = cstart TO cend STEP .04
x = 300 + (scale * 40 - (row * xrot)) * COS(i)
y = 200 + (scale * 40 - (row * yrot)) * SIN(i)
cnt = cnt + 1
COLOR 7: _PRINTSTRING (x, y), "HELLO WORLD!", 0  'display
IF cnt = LEN(text$) * 8 THEN cnt = 0: EXIT DO
_DISPLAY
COLOR 0: _PRINTSTRING (x, y), "HELLO WORLD!", 0  'erase
_DELAY 0.02
NEXT
LOOP UNTIL INKEY$ = CHR$(27) 'escape key exit
COLOR 15
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_NEWIMAGE](NEWIMAGE.md) , [_PRINTWIDTH](PRINTWIDTH.md) , [_PRINTMODE](PRINTMODE.md)
* [_CONTROLCHR](CONTROLCHR.md)
* [_FONT](FONT.md) , [_LOADFONT](LOADFONT.md) , [_FONTHEIGHT](FONTHEIGHT.md) , [_FONTWIDTH](FONTWIDTH.md)
* [_SCREENIMAGE](SCREENIMAGE.md) , [_SCREENPRINT](SCREENPRINT.md)
* Text Using Graphics
</blockquote>
