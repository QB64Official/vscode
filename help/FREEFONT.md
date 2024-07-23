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


## [_FREEFONT](FREEFONT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FREEFONT)
---
<blockquote>

### The _FREEFONT statement frees a font handle that was created by _LOADFONT .

</blockquote>

#### SYNTAX

<blockquote>

`_FREEFONT ( fontHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>


* Unloads fonts that are no longer in use or needed in order to free program memory and resources.
* You cannot free a font which is in use. Change the font to a QB64 default font size before freeing the handle (see example below).
* Predefined QB64 font handle numbers can be used before freeing a font:
* [_FONT](FONT.md) 8 - default font for [SCREEN](SCREEN.md) 1, 2, 7, 8 or 13
* [_FONT](FONT.md) 14 - default font for [SCREEN](SCREEN.md) 9 or 10
* [_FONT](FONT.md) 16 - default font for [SCREEN](SCREEN.md) 0 ( [WIDTH](WIDTH.md) 80, 25 text only), 11 or 12
* [_FONT](FONT.md) 9, 15 and 17 are the double width versions of 8, 14 and 16 respectively in text [SCREEN](SCREEN.md) 0 .
* If the font handle is invalid (equals -1 or 0), an error will occur. Check handle values before using or freeing them.
* You cannot free inbuilt/default QB64 fonts nor do they ever need freed.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Previews and creates a file list of valid MONOSPACE TTF fonts by checking the _LOADFONT handle values.
```vb
SCREEN 12
path$ = "C:\WINDOWS\Fonts\" 'path to the font folder
SHELL _HIDE "DIR /b " + path$ + "\*.ttf > TTFonts.INF"
style$ = "monospace" 'set style to MONOSPACE
OPEN "TTFonts.INF" FOR INPUT AS #1 'list of TTF fonts only
OPEN "TTFMono.INF" FOR OUTPUT AS #2 'will hold list of valid MONOSPACE fonts

DO UNTIL EOF(1): found = found + 1
LINE INPUT #1, font$
f& = _LOADFONT(path$ + font$, 30, style$)
IF f& > 0 THEN 'check for valid handle values > 0
OK = OK + 1
PRINT #2, font$
_FONT f& 'will create error if handle is invalid!
PRINT "Hello World!"
PRINT: PRINT: PRINT font$; f&
PRINT "Press any key."
K$ = INPUT$(1)
_FONT 16 'use QB64 default font to free tested font
_FREEFONT f& 'returns an error if handle <= 0!
CLS
END IF
PRINT
IF K$ = CHR$(27) THEN EXIT DO
LOOP
CLOSE
PRINT: PRINT: PRINT "Found"; found; "TTF files,"; OK; "can use Monospace,"
END
```
  
<br>

```vb
Found 106 TTF files, 13 can use Monospace.
```
  
<br>



##### Example 2: Using a _FREEFONT sub-procedure.
```vb
fontpath$ = ENVIRON$("SYSTEMROOT") + "\fonts\lucon.ttf"
style$ = "MONOSPACE, ITALIC, BOLD"
fontsize% = 20

_FONT 16
PRINT
PRINT "This is the QB64 default _FONT 16! To change, press any key!"
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

GOSUB ClearFont 'call will not free anything if font& = 0

font& = _LOADFONT(fontpath$, fontsize%, style$)
IF font > 0 THEN _FONT font& 'NEVER try to load a font value less than 1!
PRINT
PRINT "A NEW _FONT style. To change to default, press any key!"
DO: SLEEP: LOOP UNTIL INKEY$ <> ""

GOSUB ClearFont 'call will free a valid font handle from memory

END

ClearFont:
IF font& > 0 THEN
_FONT 16 'change used font to the QB64 8x16 default font
_FREEFONT font&
PRINT: PRINT "The previous font was freed with _FREEFONT!"
ELSE: PRINT: PRINT "_FREEFONT was not used!"
END IF
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FONT](FONT.md)
* [_LOADFONT](LOADFONT.md)
</blockquote>
