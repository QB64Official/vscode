## _FONT
---

### The _FONT statement sets the current _LOADFONT function font handle to be used by PRINT .

#### SYNTAX

`_FONT fontHandle& [, imageHandle& ]`

#### PARAMETERS
* fontHandle& is the handle retrieved from [_LOADFONT](./_LOADFONT.md) function, the [_FONT](./_FONT.md) function, or a predefined handle.
* If the image handle is omitted the current image _DESTination is used. Zero can designate the current program [SCREEN](./SCREEN.md) .


#### DESCRIPTION
* Predefined QB64 font handle numbers can be used before freeing a font:
	* [_FONT](./_FONT.md) 8 - default font for [SCREEN](./SCREEN.md) 1, 2, 7, 8 or 13
	* [_FONT](./_FONT.md) 14 - default font for [SCREEN](./SCREEN.md) 9 or 10
	* [_FONT](./_FONT.md) 16 - default font for [SCREEN](./SCREEN.md) 0 ( [WIDTH](./WIDTH.md) 80, 25 text only), 11 or 12
	* [_FONT](./_FONT.md) 9, 15 and 17 are the double width versions of 8, 14 and 16 respectively in text [SCREEN](./SCREEN.md) 0 only .
* Unicode characters can be assigned to a monospace font that contains those unicode characters using the [_MAPUNICODE](./_MAPUNICODE.md) [TO](./TO.md) ASCII mapping statement. The optional IME cyberbit.ttf font included with QB64 can also be used.
* Can alpha blend a font with a background screen created by [_NEWIMAGE](./_NEWIMAGE.md) in 32 bit color.
* Check for valid handle values greater than 0 before using or freeing font handles.
* Free unused font handles with [_FREEFONT](./_FREEFONT.md) . Freeing invalid handles will create an "illegal function call" error.
* NOTE: [SCREEN](./SCREEN.md) 0 can only use one font type and style per viewed [SCREEN](./SCREEN.md) page. Font size may also affect the window size.


#### EXAMPLES
##### Example: Previewing a font in SCREEN 0. A different true type font can be substituted below.
```vb
fontpath$ = ENVIRON$("SYSTEMROOT") + "\fonts\lucon.ttf" 'Find Windows Folder Path.
DO: CLS
   DO
       style$ = "MONOSPACE"
       PRINT
       INPUT "Enter A FONT Size 8 TO 25: ", fontsize%
   LOOP UNTIL fontsize% > 7 AND fontsize% < 26
   DO
       PRINT
       INPUT "Enter (0) for REGULAR OR (1) for ITALIC FONT: ", italic%
   LOOP UNTIL italic% = 0 OR italic% = 1
   DO
       PRINT
       INPUT "Enter (0) for REGULAR OR (1) for BOLD FONT: ", bold%
   LOOP UNTIL italic% = 0 OR italic% = 1
   IF italic% = 1 THEN style$ = style$ + ", ITALIC"
   IF bold% = 1 THEN style$ = style$ + ", BOLD"

   GOSUB ClearFont
   font& = _LOADFONT(fontpath$, fontsize%, style$)
   _FONT font&
   PRINT
   PRINT "This is your LUCON font! Want to try another STYLE?(Y/N): ";
   DO: SLEEP: K$ = UCASE$(INKEY$): LOOP UNTIL K$ = "Y" OR K$ = "N"
LOOP UNTIL K$ = "N"
GOSUB ClearFont

PRINT "This is the QB64 default _FONT 16!"
END

ClearFont:
IF font& > 0 THEN
   _FONT 16 'select inbuilt 8x16 default font
   _FREEFONT font&
END IF
RETURN
```
  
##### NOTE: ENVIRON$ ("SYSTEMROOT") returns a string value of: "C:\WINDOWS". Add the "\FONTS\" folder and the .TTF font file name.


#### SEE ALSO
* [_FONT](./_FONT.md) (function)
* [_LOADFONT](./_LOADFONT.md) , [_FREEFONT](./_FREEFONT.md)
* Unicode , [_MAPUNICODE](./_MAPUNICODE.md)
* Windows Font Dialog Box
