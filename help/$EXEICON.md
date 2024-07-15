# $EXEICON

**$EXEICON** pre-compiler metacommand embeds a designated icon file into the compiled EXE file to be viewed in Windows Explorer.

  

## Syntax

$EXEICON**:**'*iconfile.ico*'
  

## Parameters

* **iconfile.ico** is a valid [ICO file](ICO file.md) "wikipedia:ICO (file format)")

  

## Description

* Calling [_ICON](_ICON.md) without an *imageHandle&* uses the embeded icon, if available.
	+ Starting with **build 20170906/64**, the window will automatically use the icon embedded by $EXEICON, without having to call _ICON.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Examples

*Example:* Embeds a designated icon file into the compiled EXE which can be viewed in Windows Explorer folders.

``` $EXEICON:'mush.ico' [_ICON](_ICON.md)  
```

  

## See also

* [_ICON](_ICON.md)
* [_TITLE](_TITLE.md)

  
