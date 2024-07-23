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


## [_ULINESPACING](ULINESPACING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ULINESPACING)
---
<blockquote>

### The _ULINESPACING function returns the vertical line spacing (distance between two consecutive baselines) in pixels.

</blockquote>

#### SYNTAX

<blockquote>

`pixels& = _ULINESPACING [( fontHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>


* fontHandle& is an optional font handle.
</blockquote>

#### DESCRIPTION

<blockquote>


* Returns the vertical line spacing of the last font used if a handle is not designated.
* If no font is set, it returns the current screen mode's text block height.
* This can be used to leave the correct amount of line gap between lines.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
OPTION _EXPLICIT

SCREEN _NEWIMAGE(800, 600, 32)

DIM fh AS LONG: fh = _LOADFONT("LHANDW.TTF", 23)
IF fh <= 0 THEN
PRINT "Failed to load font file!"
END
END IF

_FONT fh

CLS , _RGB32(200, 200, 200)
COLOR _RGB32(0, 0, 0)
_PRINTMODE _KEEPBACKGROUND

DIM l AS STRING, i AS LONG
FOR i = 0 TO 4
READ l
_UPRINTSTRING (0, _ULINESPACING * i), l
NEXT

END

DATA "We are not now that strength which in old days"
DATA "Moved earth and heaven; that which we are,we are;"
DATA "One equal temper of heroic hearts,"
DATA "Made weak by time and fate,but strong in will"
DATA "To strive,to seek,to find,and not to yield."
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_UPRINTWIDTH](UPRINTWIDTH.md) , [_UFONTHEIGHT](UFONTHEIGHT.md) , [_UPRINTSTRING](UPRINTSTRING.md) , [_UCHARPOS](UCHARPOS.md)
* [_FONTWIDTH](FONTWIDTH.md) , [_FONTHEIGHT](FONTHEIGHT.md) , [_FONT](FONT.md)
* [_PRINTWIDTH](PRINTWIDTH.md) , [_PRINTSTRING](PRINTSTRING.md)
* [SCREEN](SCREEN.md) , [_LOADFONT](LOADFONT.md)
* Text Using Graphics
</blockquote>
