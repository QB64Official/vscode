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


## [_DONTBLEND](DONTBLEND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DONTBLEND)
---
<blockquote>

### The _DONTBLEND statement turns off 32 bit alpha blending for the current image or screen mode where _BLEND is default.

</blockquote>

#### SYNTAX

<blockquote>

`_DONTBLEND [ imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* If imageHandle& is omitted, it is assumed to be the current _DESTination write page.
</blockquote>

#### DESCRIPTION

<blockquote>


* If imageHandle& is not valid, an Invalid handle error will occur.
* [_DONTBLEND](DONTBLEND.md) is faster than the default [_BLEND](BLEND.md) . You may want to disable it , unless you really need to use it in 32 bit.
* 32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md) so that they are transparent when placed over other surfaces.
* Use [CLS](CLS.md) to make a new surface background [_ALPHA](ALPHA.md) 255 or opaque.
* Both [_SOURCE](SOURCE.md) and [_DEST](DEST.md) must have [_BLEND](BLEND.md) enabled, or else colors will [NOT](NOT.md) blend.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Use _DONTBLEND when you want the 32 bit screen surface to be opaque so that it covers up other backgrounds. CLS works too.
```vb
SCREEN _NEWIMAGE(1280, 720, 32)
'CLS
_DONTBLEND '<<< comment out to see the difference

LINE (100, 100)-(500, 500), _RGB32(255, 255, 0), BF

b& = SaveBackground&

PRINT "This is just test junk"
PRINT
PRINT "Hit any key and the text should disappear, leaving us our pretty yellow box."
SLEEP
RestoreBackground b&

END

FUNCTION SaveBackground&
SaveBackground& = _COPYIMAGE(0)
END FUNCTION

SUB RestoreBackground (Image AS LONG)
_PUTIMAGE , Image, 0
END SUB
```
  
<br>



##### Example 2: Turning off blending to create transparency.
```vb
SCREEN _NEWIMAGE(640, 480, 32)
alphaSprite& = _NEWIMAGE(64, 64, 32)

_DONTBLEND alphaSprite& ' turn off alpha-blending

'Create a simple sprite with transparency
_DEST alphaSprite&
FOR y = 0 TO 63
FOR x = 0 TO 63
alpha = SQR((x - 32) ^ 2 + (y - 32) ^ 2) / 32
IF alpha < 0 THEN alpha = 0
alpha = (1 - alpha * alpha) 'parabolic curve
PSET (x, y), _RGBA32(255, 255, 255, alpha * 255)
NEXT
NEXT

'Make a simple background texture
_DEST 0
FOR y = 1 TO 479
FOR x = 0 TO 639
PSET (x, y), _RGB32(x AND 255, y AND 255, (x XOR y) AND 255)
NEXT
NEXT

'Store background so we can show moveable objects on it
background& = _COPYIMAGE(0)

'Treat my alpha values as transparency
_BLEND alphaSprite&

ph = 0
DO: _LIMIT 60
x = 320 - 250 * COS(ph) - (_WIDTH(alphaSprite&) \ 2)
y = 240 - 150 * COS(ph * 1.3) - (_HEIGHT(alphaSprite&) \ 2)
ph = ph + 0.03
_PUTIMAGE , background&, 0
_PUTIMAGE (x, y), alphaSprite&, 0
_DISPLAY
LOOP UNTIL LEN(INKEY$)
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_BLEND](BLEND.md)
* [_BLEND](BLEND.md) (function)
* Images
</blockquote>
