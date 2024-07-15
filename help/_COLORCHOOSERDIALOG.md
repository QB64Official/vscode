# _COLORCHOOSERDIALOG

The **_COLORCHOOSERDIALOG** function displays a standard color picker dialog box. It returns a 32-bit RGBA color with the alpha channel set to &HFF (255). A zero is returned if the user cancelled.

  

## Syntax

*color32bpp~&* = _COLORCHOOSERDIALOG([*title$*][, *defaultRGB~&*])
  

## Parameters

* *title$* is the dialog box title
* *defaultRGB~&* is the default 32-bit RGB color that is pre-selected

  

## Description

* *title$* accepts an empty string (**""**) in which case system defaults are used
* The dialog box automatically becomes a modal window if the application window is visible
* *defaultRGB~&* may be ignored on some platforms

  

## Availability

* **QB64-PE v3.4.0 and up**

  

## Examples

Example
Color selection

``` mycolor~& = _COLORCHOOSERDIALOG("Select a color", [_RGB32](_RGB32.md)(0, 255, 255)) [IF](IF.md) mycolor~& <> 0 [THEN](THEN.md) [_MESSAGEBOX](_MESSAGEBOX.md) "Information", "You selected " + [HEX$](HEX$.md)(mycolor~&)  
```

  

## See also

* [_NOTIFYPOPUP](_NOTIFYPOPUP.md)
* [_MESSAGEBOX](_MESSAGEBOX.md)
* [_MESSAGEBOX (function)](_MESSAGEBOX (function).md) "MESSAGEBOX (function)")
* [_INPUTBOX$](_INPUTBOX$.md)
* [_SELECTFOLDERDIALOG$](_SELECTFOLDERDIALOG$.md)
* [_OPENFILEDIALOG$](_OPENFILEDIALOG$.md)
* [_SAVEFILEDIALOG$](_SAVEFILEDIALOG$.md)

  
