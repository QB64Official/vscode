# _PRINTMODE

The _PRINTMODE statement sets the text or [_FONT](_FONT.md) printing mode on an image when using [PRINT](PRINT.md) or [_PRINTSTRING](_PRINTSTRING.md).

  

## Syntax

_PRINTMODE {*_KEEPBACKGROUND*|*_ONLYBACKGROUND*|*_FILLBACKGROUND*}[, *imageHandle&*]
  

## Parameters

* One of 3 mode keywords is mandatory when using this statement to deal with the text background.
	+ *_KEEPBACKGROUND* (mode 1): Text background transparent. Only the text is displayed over anything behind it.
	+ *_ONLYBACKGROUND* (mode 2): Text background only is displayed. Text is transparent to anything behind it.
	+ *_FILLBACKGROUND* (mode 3): Text and background block anything behind them like a normal [PRINT](PRINT.md). **Default setting.**
* If the optional *imageHandle&* is omitted or is 0 then the setting will be applied to the current [destination](destination.md) image.

  

## Description

* Use the [_PRINTMODE (function)](_PRINTMODE (function).md) "PRINTMODE (function)") to find the current _PRINTMODE setting mode number for an image.
* **The _PRINTMODE statement and function can only be used on graphic images, not text-based ones such as SCREEN 0**

  

## Examples

*Example:* Using _PRINTMODE with [PRINT](PRINT.md) in a graphic screen mode. The background used is CHR$(219) = █

``` [SCREEN](SCREEN.md) 12 [COLOR](COLOR.md) 8: [LOCATE](LOCATE.md) 10, 10: [PRINT](PRINT.md) [STRING$](STRING$.md)(3, 219) 'background _PRINTMODE _KEEPBACKGROUND [COLOR](COLOR.md) 15: [LOCATE](LOCATE.md) 10, 10: [PRINT](PRINT.md) _PRINTMODE [END](END.md)  
```

  

## See also

* [_PRINTMODE (function)](_PRINTMODE (function).md) "PRINTMODE (function)")
* [_PRINTSTRING](_PRINTSTRING.md)
* [_LOADFONT](_LOADFONT.md)
* [_NEWIMAGE](_NEWIMAGE.md)
* [PRINT](PRINT.md), [_PRINT USING](_PRINT USING.md)

  
