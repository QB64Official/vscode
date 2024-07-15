# _LOADFONT

The _LOADFONT function loads a FreeType supported font file in a specific size and style and returns a [LONG](LONG.md) font handle.

  

## Syntax

*handle&* = _LOADFONT(*fontFileName$*, *size&*[, "{MONOSPACE|, BOLD|, ITALIC|, UNDERLINE|, UNICODE|, DONTBLEND|, MEMORY|, AUTOMONO}"][, *fontIndex&*])
  

## Description

* The assigned [LONG](LONG.md) font *handle&* variable return value designates a font style to be used somewhere in a program. Valid handle values are greater than 0 (***handle&* > 0**).
* *fontFileName$* is the filename of a font. It can include the path to the font file. **TTF, TTC, OTF, FNT, FON, PCF and BDF** font file formats are supported. Best practice is to include font files with a program.
* If no path is specified for *fontFileName$* and the font file isn't in the same folder as the resulting binary, QB64 attempts to load from the default *%SystemRoot%\Fonts* path. Similar known locations are searched in other operating systems.
* *size&* is the [INTEGER](INTEGER.md) height of the font. If the size is too large or small an [error](error.md) will occur.
* Optional comma separated *style* parameter(s) used are literal [STRINGs](STRINGs.md) (in quotes) or can be contained in variable(s).
	+ **"MONOSPACE"** loads a font with all characters occupying the same width. Results may be too spaced out for fonts that aren't designed for monospace use.
	+ **"BOLD", "ITALIC"** or **"UNDERLINE"** create bold, italic or underlined fonts when available in font.
		- (valid for QB64 versions prior to 1.000).
		- For **QB64 1.000 or later**, you must specify the proper file name according to the desired attributes. For example, Courier New is in font **cour.ttf** while Courier New Bold is in font **courbd.ttf**, as shipped with Windows.
	+ **"UNICODE"** loads Unicode fonts such as *cyberbit.ttf* which is included in the QB64 downloads.
	+ **"DONTBLEND"** turns off [_ALPHA](_ALPHA.md) blending of fonts. This can also be done with the [_DONTBLEND](_DONTBLEND.md) statement.
	+ **"MEMORY"** will treat *fontFileName$* as a memory buffer containing the font file instead of a file name.
	+ **"AUTOMONO"** will automatically detect monospace fonts and set the **"MONOSPACE"** flag if *fontFileName$* is monospaced.

* You can pass different font styles using different predefined [STRING](STRING.md) variable lists. You **can** include an empty style string.

* *fontIndex&* is the index of a font in a font collection (usually **.ttc** files). When this is negative the first font from the collection is loaded.
* **Always check that font handle values are greater than 0 (***handle&* > 0**) before using them or [illegal function errors](illegal function errors.md) may occur.**
* **NOTE: SCREEN 0 can only use ONE font on a screen page. Thus a style like underline would affect the entire page.**
* Font sizes can be found using the [_FONTHEIGHT](_FONTHEIGHT.md) function. Font *size*s can also affect [SCREEN](SCREEN.md) sizes.
* [_FONTWIDTH](_FONTWIDTH.md) can only measure monospaced fonts. **"MONOSPACE" can be used to load a variable width font as a monospace font.**
* [_PRINTWIDTH](_PRINTWIDTH.md) can measure the width of a string of text in **graphics modes only**. Use one character to get the font's width.

  

* Multiple fonts will require multiple font variable handles unless used and freed consecutively.
* Font handles with values greater than 0 that are **no longer used** should be freed using [_FREEFONT](_FREEFONT.md).
* **Predefined QB64** font handle numbers can be substituted before freeing a font handle:
	+ **_FONT 8**  - default font for [SCREEN](SCREEN.md) 1, 2, 7, 8 or 13
	+ **_FONT 14** - default font for [SCREEN](SCREEN.md) 9 or 10
	+ **_FONT 16** - default font for [SCREEN](SCREEN.md) 0 ([WIDTH](WIDTH.md) 80, 25 text only), 11 or 12
	+ **_FONT 9, 15** and **17** are the double width versions of 8, 14 and 16 respectively in text **SCREEN 0 only**.
* Once the font is changed to a predefined value, the font handle value can be freed using [_FREEFONT](_FREEFONT.md) for another font type.
* Font handle values of -1 (load failure) **do not** need to be freed. **An [error](error.md) will occur if you try to free invalid handles.**

  

* Windows users should find **TTF** font files in the C:\WINDOWS\FONTS folder, but don't depend on unusual ones being there.
* **Check the font file name. The name in the "viewer" is not necessarily the file's name. Use the name in properties (right click a font listed and choose Properties in the contextual menu)**
* If a program is on a different drive than Windows, [ENVIRON$](ENVIRON$.md)("SYSTEMROOT") will return the path to the "WINDOWS" folder. Normally "C:\WINDOWS". Then add the "\FONTS\" folder and the font **.TTF** filename to the path [STRING](STRING.md).

## Availability

* [![v1.3](![v1.3.md)](File:Qb64.png "v1.3")

**v1.3**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* The capability to load from *memory* and loading a font from a *font collection* was introduced in **QB64-PE** *v3.7.0*.
* The capability to auto-detect monospaced fonts was introduced in **QB64-PE** *v3.13.1*.

## Examples

Example 1
You need to know that if you are in a text mode (such as SCREEN 0 - the default) then you will only be able to use mono-spaced (fixed width) fonts.

``` rootpath$ = [ENVIRON$](ENVIRON$.md)("SYSTEMROOT") 'normally "C:\WINDOWS" fontfile$ = rootpath$ + "\Fonts\cour.ttf" 'TTF file in Windows style$ = "monospace" 'font style is not case sensitive f& = _LOADFONT(fontfile$, 30, style$) [_FONT](_FONT.md) f& [PRINT](PRINT.md) "Hello!"  
```

``` Hello!  
```

*Note:* 30 means each row of text (including vertical spacing) will be exactly 30 pixels high. This may make some program screens larger. If you don't want a style listed just use style$ = "" if using a [STRING](STRING.md) variable for different calls.

---

Example 2
In a 32-bit graphics mode you can alpha blend onto the background.

``` i& = [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 32) [SCREEN](SCREEN.md) i& [COLOR](COLOR.md) &HC0FFFF00, &H200000FF f& = _LOADFONT("C:\Windows\Fonts\times.ttf", 25) 'normal style [_FONT](_FONT.md) f& [PRINT](PRINT.md) "Hello!"  
```

``` Hello!  
```

*Note:* You can load a fixed width font file without using the "monospace" option and it will be treated as variable width. This can be useful because LOCATE treats the horizontal position as an offset in pixels for variable width fonts.

---

Example 3
Loading a [Unicode](Unicode.md) font, *cyberbit.ttf*, which was downloaded with QB64.

``` [SCREEN](SCREEN.md) 12  [DECLARE](DECLARE.md) [CUSTOMTYPE](CUSTOMTYPE.md) [LIBRARY](LIBRARY.md) 'Directory Information using KERNEL32 provided by Dav     [FUNCTION](FUNCTION.md) GetModuleFileNameA& ([BYVAL](BYVAL.md) hModule [AS](AS.md) [LONG](LONG.md), lpFileName [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) nSize [AS](AS.md) [LONG](LONG.md))     [FUNCTION](FUNCTION.md) GetModuleFileNameW& ([BYVAL](BYVAL.md) hModule [AS](AS.md) [LONG](LONG.md), lpFileName [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) nSize [AS](AS.md) [LONG](LONG.md)) [END DECLARE](END DECLARE.md)  '=== SHOW CURRENT PROGRAM FileName$ = [SPACE$](SPACE$.md)(512)  Result = GetModuleFileNameA(0, FileName$, [LEN](LEN.md)(FileName$)) [IF](IF.md) Result [THEN](THEN.md) [PRINT](PRINT.md) "CURRENT PROGRAM (ASCII): "; [LEFT$](LEFT$.md)(FileName$, Result)  'load a unicode font f = _LOADFONT("cyberbit.ttf", 24, "UNICODE") [_FONT](_FONT.md) f Result = GetModuleFileNameW(0, FileName$, [LEN](LEN.md)(FileName$) \ 2) [LOCATE](LOCATE.md) 2, 1 [PRINT](PRINT.md) QuickCP437toUTF32$("CURRENT PROGRAM (UTF): ") + QuickUTF16toUTF32$([LEFT$](LEFT$.md)(FileName$, Result * 2)) [_FONT](_FONT.md) 16 'restore CP437 font  [FUNCTION](FUNCTION.md) QuickCP437toUTF32$ (a$)     b$ = [STRING$](STRING$.md)([LEN](LEN.md)(a$) * 4, 0)     [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(a$)         [ASC](ASC.md)(b$, i * 4 - 3) = [ASC](ASC.md) "ASC (function)")(a$, i)     [NEXT](NEXT.md)     QuickCP437toUTF32$ = b$ [END FUNCTION](END FUNCTION.md)  [FUNCTION](FUNCTION.md) QuickUTF16toUTF32$ (a$)     b$ = [STRING$](STRING$.md)([LEN](LEN.md)(a$) * 2, 0)     [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(a$) \ 2         [ASC](ASC.md)(b$, i * 4 - 3) = [ASC](ASC.md) "ASC (function)")(a$, i * 2 - 1)         [ASC](ASC.md)(b$, i * 4 - 2) = [ASC](ASC.md) "ASC (function)")(a$, i * 2)     [NEXT](NEXT.md)     QuickUTF16toUTF32$ = b$ [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [_FONT](_FONT.md), [_FONT (function)](_FONT (function).md) "FONT (function)")
* [_FREEFONT](_FREEFONT.md)
* [_PRINTSTRING](_PRINTSTRING.md), [_PRINTWIDTH](_PRINTWIDTH.md)
* [_PRINTMODE](_PRINTMODE.md), [_PRINTMODE (function)](_PRINTMODE (function).md) "PRINTMODE (function)")
* [_FONTHEIGHT](_FONTHEIGHT.md), [_FONTWIDTH](_FONTWIDTH.md)
* [Text Using Graphics](Text Using Graphics.md) (Demo)
* [Windows Font Dialog Box](Windows Font Dialog Box.md)

  
