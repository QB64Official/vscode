# _SELECTFOLDERDIALOG$

The **_SELECTFOLDERDIALOG$** function displays a dialog box that enables the user to select a folder (directory). The returned string is a folder path or an empty string (**""**) if the user cancelled.

  

## Syntax

*folder$* = _SELECTFOLDERDIALOG$([*title$*][, *defaultPath$*])
  

## Parameters

* *title$* is a string that is displayed above the folder tree view in the dialog box
* *defaultPath$* is the default folder that is pre-selected (if the folder exists)

  

## Description

* All parameters accept an empty string (**""**) in which case system defaults are used
* Use the title$ to specify instructions to the user
* The dialog box automatically becomes a modal window if the application window is visible
* The folder selected must exist in the filesystem else an empty string is returned

  

## Availability

* **QB64-PE v3.4.0 and up**

  

## Examples

Example
Folder selection

``` folder$ = _SELECTFOLDERDIALOG$("Select a folder to scan:") [IF](IF.md) folder$ <> "" [THEN](THEN.md) [_MESSAGEBOX](_MESSAGEBOX.md) "Information", "You selected " + folder$  
```

  

## See also

* [_NOTIFYPOPUP](_NOTIFYPOPUP.md)
* [_MESSAGEBOX](_MESSAGEBOX.md)
* [_MESSAGEBOX (function)](_MESSAGEBOX (function).md) "MESSAGEBOX (function)")
* [_INPUTBOX$](_INPUTBOX$.md)
* [_COLORCHOOSERDIALOG](_COLORCHOOSERDIALOG.md)
* [_OPENFILEDIALOG$](_OPENFILEDIALOG$.md)
* [_SAVEFILEDIALOG$](_SAVEFILEDIALOG$.md)

  
