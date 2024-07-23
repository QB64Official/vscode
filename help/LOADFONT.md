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


## [_LOADFONT](LOADFONT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_LOADFONT)
---
<blockquote>

### The _LOADFONT function loads a FreeType supported font file in a specific size and style and returns a LONG font handle.

</blockquote>

#### SYNTAX

<blockquote>

`handle& = _LOADFONT ( fontFileName$ , size& [, "{MONOSPACE|, BOLD|, ITALIC|, UNDERLINE|, UNICODE|, DONTBLEND|, MEMORY|, AUTOMONO}"][, fontIndex& ])`

</blockquote>

#### DESCRIPTION

<blockquote>


* The assigned [LONG](LONG.md) font handle& variable return value designates a font style to be used somewhere in a program. Valid handle values are greater than 0 ( handle& > 0 ).
* fontFileName$ is the filename of a font. It can include the path to the font file. TTF, TTC, OTF, FNT, FON, PCF and BDF font file formats are supported. Best practice is to include font files with a program.
* If no path is specified for fontFileName$ and the font file isn't in the same folder as the resulting binary, QB64 attempts to load from the default %SystemRoot%\Fonts path. Similar known locations are searched in other operating systems.
* size& is the [INTEGER](INTEGER.md) height of the font. If the size is too large or small an error will occur.
* Optional comma separated style parameter(s) used are literal STRINGs (in quotes) or can be contained in variable(s).
* "MONOSPACE" loads a font with all characters occupying the same width. Results may be too spaced out for fonts that aren't designed for monospace use.
* "BOLD", "ITALIC" or "UNDERLINE" create bold, italic or underlined fonts when available in font.
* (valid for QB64 versions prior to 1.000).
* For QB64 1.000 or later , you must specify the proper file name according to the desired attributes. For example, Courier New is in font cour.ttf while Courier New Bold is in font courbd.ttf , as shipped with Windows.
* "UNICODE" loads Unicode fonts such as cyberbit.ttf which is included in the QB64 downloads.
* "DONTBLEND" turns off [_ALPHA](ALPHA.md) blending of fonts. This can also be done with the [_DONTBLEND](DONTBLEND.md) statement.
* "MEMORY" will treat fontFileName$ as a memory buffer containing the font file instead of a file name.
* "AUTOMONO" will automatically detect monospace fonts and set the "MONOSPACE" flag if fontFileName$ is monospaced.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
rootpath$ = ENVIRON$("SYSTEMROOT") 'normally "C:\WINDOWS"
fontfile$ = rootpath$ + "\Fonts\cour.ttf" 'TTF file in Windows
style$ = "monospace" 'font style is not case sensitive
f& = _LOADFONT(fontfile$, 30, style$)
_FONT f&
PRINT "Hello!"
```
  
<br>

```vb
Hello!
```
  
<br>


<div class="explanation">Note: You can load a fixed width font file without using the "monospace" option and it will be treated as variable width. This can be useful because LOCATE treats the horizontal position as an offset in pixels for variable width fonts.</div>

```vb
i& = _NEWIMAGE(800, 600, 32)
SCREEN i&
COLOR &HC0FFFF00, &H200000FF
f& = _LOADFONT("C:\Windows\Fonts\times.ttf", 25) 'normal style
_FONT f&
PRINT "Hello!"
```
  
<br>

```vb
Hello!
```
  
<br>

```vb
SCREEN 12

DECLARE CUSTOMTYPE LIBRARY 'Directory Information using KERNEL32 provided by Dav
FUNCTION GetModuleFileNameA& (BYVAL hModule AS LONG, lpFileName AS STRING, BYVAL nSize AS LONG)
FUNCTION GetModuleFileNameW& (BYVAL hModule AS LONG, lpFileName AS STRING, BYVAL nSize AS LONG)
END DECLARE

'=== SHOW CURRENT PROGRAM
FileName$ = SPACE$(512)

Result = GetModuleFileNameA(0, FileName$, LEN(FileName$))
IF Result THEN PRINT "CURRENT PROGRAM (ASCII): "; LEFT$(FileName$, Result)

'load a unicode font
f = _LOADFONT("cyberbit.ttf", 24, "UNICODE")
_FONT f
Result = GetModuleFileNameW(0, FileName$, LEN(FileName$) \ 2)
LOCATE 2, 1
PRINT QuickCP437toUTF32$("CURRENT PROGRAM (UTF): ") + QuickUTF16toUTF32$(LEFT$(FileName$, Result * 2))
_FONT 16 'restore CP437 font

FUNCTION QuickCP437toUTF32$ (a$)
b$ = STRING$(LEN(a$) * 4, 0)
FOR i = 1 TO LEN(a$)
ASC(b$, i * 4 - 3) = ASC(a$, i)
NEXT
QuickCP437toUTF32$ = b$
END FUNCTION

FUNCTION QuickUTF16toUTF32$ (a$)
b$ = STRING$(LEN(a$) * 2, 0)
FOR i = 1 TO LEN(a$) \ 2
ASC(b$, i * 4 - 3) = ASC(a$, i * 2 - 1)
ASC(b$, i * 4 - 2) = ASC(a$, i * 2)
NEXT
QuickUTF16toUTF32$ = b$
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FONT](FONT.md) , [_FONT](FONT.md) (function)
* [_FREEFONT](FREEFONT.md)
* [_PRINTSTRING](PRINTSTRING.md) , [_PRINTWIDTH](PRINTWIDTH.md)
* [_PRINTMODE](PRINTMODE.md) , [_PRINTMODE](PRINTMODE.md) (function)
* [_FONTHEIGHT](FONTHEIGHT.md) , [_FONTWIDTH](FONTWIDTH.md)
* Text Using Graphics (Demo)
* Windows Font Dialog Box
</blockquote>
