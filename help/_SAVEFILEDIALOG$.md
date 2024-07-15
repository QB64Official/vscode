# _SAVEFILEDIALOG$

The **_SAVEFILEDIALOG$** function displays a standard dialog box that prompts the user to save a file. The returned string is an empty string (**""**) if the user cancelled.

  

## Syntax

*result$* = _SAVEFILEDIALOG$([*title$*][, *defaultPathAndFile$*][, *filterPatterns$*][, *singleFilterDescription$*])
  

## Parameters

* *title$* is the dialog box title
* *defaultPathAndFile$* is the default path that will be used by the dialog box if not changed by the user
* *filterPatterns$* are the file filters separated using **"|"** (e.g., "*.png|*.jpg|*.gif")
* *singleFilterDescription$* is the single filter description (e.g., "Image files")

  

## Description

* All parameters accept an empty string (**""**) in which case system defaults are used
* If *singleFilterDescription$* is an empty string (**""**), then *filterPatterns$* will be shown in it's place
* The dialog box automatically becomes a modal window if the application window is visible

  

## Availability

* **QB64-PE v3.4.0 and up**

  

## Examples

Example
Simple save file dialog example

``` [IF](IF.md) [NOT](NOT.md) filesaved& [THEN](THEN.md)     textfile$ = _SAVEFILEDIALOG$("Save File", "", "*.txt|*.doc", "Text files")     [IF](IF.md) textfile$ <> "" [THEN](THEN.md)         filesaved& = -1         [_MESSAGEBOX](_MESSAGEBOX.md) "Information", "File will be saved to " + textfile$     [END IF](END IF.md) [END IF](END IF.md)  
```

  

## See also

* [_NOTIFYPOPUP](_NOTIFYPOPUP.md)
* [_MESSAGEBOX](_MESSAGEBOX.md)
* [_MESSAGEBOX (function)](_MESSAGEBOX (function).md) "MESSAGEBOX (function)")
* [_INPUTBOX$](_INPUTBOX$.md)
* [_SELECTFOLDERDIALOG$](_SELECTFOLDERDIALOG$.md)
* [_COLORCHOOSERDIALOG](_COLORCHOOSERDIALOG.md)
* [_OPENFILEDIALOG$](_OPENFILEDIALOG$.md)

  
