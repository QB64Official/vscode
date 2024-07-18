## _PRINTMODE
---

### The _PRINTMODE statement sets the text or _FONT printing mode on an image when using PRINT or _PRINTSTRING .

#### SYNTAX

`_PRINTMODE { _KEEPBACKGROUND | _ONLYBACKGROUND | _FILLBACKGROUND }[, imageHandle& ]`

#### PARAMETERS
* One of 3 mode keywords is mandatory when using this statement to deal with the text background.
	* [_KEEPBACKGROUND](./_KEEPBACKGROUND.md) (mode 1): Text background transparent. Only the text is displayed over anything behind it.
	* [_ONLYBACKGROUND](./_ONLYBACKGROUND.md) (mode 2): Text background only is displayed. Text is transparent to anything behind it.
	* [_FILLBACKGROUND](./_FILLBACKGROUND.md) (mode 3): Text and background block anything behind them like a normal [PRINT](./PRINT.md) . Default setting.
* If the optional imageHandle& is omitted or is 0 then the setting will be applied to the current destination image.


#### DESCRIPTION
* Use the [_PRINTMODE](./_PRINTMODE.md) (function) to find the current [_PRINTMODE](./_PRINTMODE.md) setting mode number for an image.
* The [_PRINTMODE](./_PRINTMODE.md) statement and function can only be used on graphic images, not text-based ones such as [SCREEN](./SCREEN.md) 0


#### EXAMPLES
##### Example: Using _PRINTMODE with PRINT in a graphic screen mode. The background used is CHR$(219) = █
```vb
SCREEN 12
COLOR 8: LOCATE 10, 10: PRINT STRING$(3, 219) 'background
_PRINTMODE _KEEPBACKGROUND
COLOR 15: LOCATE 10, 10: PRINT _PRINTMODE
END
```
  


#### SEE ALSO
* [_PRINTMODE](./_PRINTMODE.md) (function)
* [_PRINTSTRING](./_PRINTSTRING.md)
* [_LOADFONT](./_LOADFONT.md)
* [_NEWIMAGE](./_NEWIMAGE.md)
* [PRINT](./PRINT.md) , _PRINT [USING](./USING.md)
